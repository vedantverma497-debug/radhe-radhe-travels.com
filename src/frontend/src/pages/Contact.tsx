import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { sampleTours } from "../data/sampleData";
import { useSubmitInquiry } from "../hooks/useBackend";

const PHONE = "7828587442";
const WHATSAPP_NUMBER = "917828587442";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi! I am interested in your tour packages. Please share details.",
);
const EMAIL = "vedantverma497@gmail.com";

export default function Contact() {
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    tourName: "",
    desiredDate: "",
    groupSize: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<typeof form>>({});

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.tourName) e.tourName = "Please select a tour";
    return e;
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    submitInquiry(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        tourName: form.tourName,
        desiredDate: form.desiredDate,
        groupSize: form.groupSize ? Number(form.groupSize) : 1,
        message: form.message,
      },
      {
        onSuccess: () => {
          toast.success("Inquiry sent! We'll contact you within 24 hours.", {
            description:
              "You can also reach us on WhatsApp for faster response.",
          });
          setForm({
            name: "",
            email: "",
            phone: "",
            tourName: "",
            desiredDate: "",
            groupSize: "",
            message: "",
          });
        },
        onError: () => {
          toast.error("Something went wrong. Please try again.");
        },
      },
    );
  }

  return (
    <div className="bg-background" data-ocid="contact.page">
      {/* Header */}
      <div className="bg-card border-b border-border py-14 px-4 text-center">
        <Badge className="bg-primary/15 text-primary border-primary/30 mb-3 font-body text-xs uppercase tracking-widest">
          Get in Touch
        </Badge>
        <h1 className="font-display text-5xl font-bold text-foreground mb-3">
          Contact Us
        </h1>
        <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
          Ready to plan your dream trip? Our travel experts are available 24/7.
        </p>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-5">
                Reach Us Directly
              </h2>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 hover:bg-[#25D366]/20 transition-smooth group mb-3"
                data-ocid="contact.whatsapp_link"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-white"
                    aria-hidden="true"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground group-hover:text-[#25D366] transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    +91 {PHONE}
                  </div>
                </div>
              </a>

              <a
                href={`tel:+91${PHONE}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-primary/8 border border-primary/20 hover:bg-primary/15 transition-smooth group mb-3"
                data-ocid="contact.phone_link"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground group-hover:text-primary transition-colors">
                    Call Us
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    +91 {PHONE}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:bg-muted transition-smooth group"
                data-ocid="contact.email_link"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground group-hover:text-secondary-foreground transition-colors">
                    Email Us
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {EMAIL}
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-body font-semibold text-foreground text-sm">
                    Office Address
                  </div>
                  <div className="font-body text-muted-foreground text-sm">
                    Indore, Madhya Pradesh
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-body font-semibold text-foreground text-sm">
                    Working Hours
                  </div>
                  <div className="font-body text-muted-foreground text-sm">
                    Available 24/7 on WhatsApp & Phone
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send an Inquiry
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.inquiry_form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label
                      htmlFor="name"
                      className="font-body text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="font-body"
                      data-ocid="contact.name_input"
                    />
                    {errors.name && (
                      <p
                        className="font-body text-xs text-destructive mt-1"
                        data-ocid="contact.name_field_error"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="font-body text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="font-body"
                      data-ocid="contact.phone_input"
                    />
                    {errors.phone && (
                      <p
                        className="font-body text-xs text-destructive mt-1"
                        data-ocid="contact.phone_field_error"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="font-body text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="font-body"
                    data-ocid="contact.email_input"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                      Tour Package *
                    </Label>
                    <Select
                      onValueChange={(v) => handleChange("tourName", v)}
                      value={form.tourName}
                    >
                      <SelectTrigger
                        className="font-body"
                        data-ocid="contact.tour_select"
                      >
                        <SelectValue placeholder="Select a tour" />
                      </SelectTrigger>
                      <SelectContent>
                        {sampleTours.map((t) => (
                          <SelectItem
                            key={t.id}
                            value={t.name}
                            className="font-body"
                          >
                            {t.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="Custom" className="font-body">
                          Custom Itinerary
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.tourName && (
                      <p
                        className="font-body text-xs text-destructive mt-1"
                        data-ocid="contact.tour_field_error"
                      >
                        {errors.tourName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="groupSize"
                      className="font-body text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Group Size
                    </Label>
                    <Input
                      id="groupSize"
                      type="number"
                      min="1"
                      placeholder="Number of travelers"
                      value={form.groupSize}
                      onChange={(e) =>
                        handleChange("groupSize", e.target.value)
                      }
                      className="font-body"
                      data-ocid="contact.group_size_input"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="desiredDate"
                    className="font-body text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Desired Travel Date
                  </Label>
                  <Input
                    id="desiredDate"
                    type="date"
                    value={form.desiredDate}
                    onChange={(e) =>
                      handleChange("desiredDate", e.target.value)
                    }
                    className="font-body"
                    data-ocid="contact.date_input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="font-body text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Message / Special Requests
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your dream trip, special requirements, or any questions you have…"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="font-body resize-none"
                    data-ocid="contact.message_textarea"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold gap-2"
                  data-ocid="contact.submit_button"
                >
                  {isPending ? <>Sending…</> : <>Send Inquiry</>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
