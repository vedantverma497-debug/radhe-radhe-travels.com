import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "@tanstack/react-router";
import {
  Calendar,
  CheckCircle2,
  ChevronLeft,
  Clock,
  MapPin,
  Phone,
  Send,
  Users,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { useTour } from "../hooks/useBackend";

const WHATSAPP_NUMBER = "917828587442";

export default function TourDetail() {
  const { id } = useParams({ from: "/tours/$id" });
  const tourId = Number(id);
  const { data: tour, isLoading } = useTour(tourId);

  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (isLoading) {
    return (
      <div
        className="container max-w-5xl mx-auto px-4 py-16 space-y-4"
        data-ocid="tour_detail.loading_state"
      >
        <Skeleton className="h-80 w-full rounded-2xl" />
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (!tour) {
    return (
      <div
        className="container max-w-5xl mx-auto px-4 py-24 text-center"
        data-ocid="tour_detail.error_state"
      >
        <div className="text-5xl mb-4">🗺️</div>
        <h2 className="font-display text-3xl font-bold text-foreground mb-3">
          Tour not found
        </h2>
        <p className="font-body text-muted-foreground mb-6">
          This tour doesn't exist or has been removed.
        </p>
        <Link to="/tours">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body gap-2">
            <ChevronLeft className="w-4 h-4" /> Back to Tours
          </Button>
        </Link>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(
    `Hi! I am interested in the "${tour.name}" tour package. Please share more details.`,
  );

  return (
    <div className="bg-background" data-ocid="tour_detail.page">
      {/* Hero image */}
      <div className="relative h-80 md:h-[450px] overflow-hidden">
        <img
          src={
            tour.galleryImages[0] ??
            "/assets/generated/dest-ujjain.dim_800x600.jpg"
          }
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <Link
            to="/tours"
            className="inline-flex items-center gap-1.5 text-card/80 hover:text-card text-sm font-body mb-3 transition-colors"
            data-ocid="tour_detail.back_link"
          >
            <ChevronLeft className="w-4 h-4" /> All Tours
          </Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-card mb-3">
            {tour.name}
          </h1>
          <div className="flex flex-wrap gap-3 text-card/85 text-sm font-body">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {tour.destination}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {tour.groupSize}
            </span>
          </div>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Highlights */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Tour Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-2.5 bg-card border border-border rounded-lg p-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Itinerary */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Day-by-Day Itinerary
              </h2>
              <div className="space-y-4">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                        {day.day}
                      </div>
                      {day.day < tour.itinerary.length && (
                        <div className="w-0.5 bg-border flex-1 mt-2 min-h-[1rem]" />
                      )}
                    </div>
                    <div className="pb-4 flex-1">
                      <h3 className="font-display font-bold text-foreground text-base mb-1">
                        {day.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  What's Included
                </h2>
                <ul className="space-y-2">
                  {tour.inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-body text-sm text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  Not Included
                </h2>
                <ul className="space-y-2">
                  {tour.exclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                    >
                      <XCircle className="w-4 h-4 text-destructive/60 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <div
              className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-elevated"
              data-ocid="tour_detail.booking_panel"
            >
              <div className="mb-4">
                <span className="font-body text-xs text-muted-foreground">
                  Starting from
                </span>
                <div className="font-display text-4xl font-bold text-primary">
                  ₹{tour.startingPrice.toLocaleString("en-IN")}
                </div>
                <span className="font-body text-xs text-muted-foreground">
                  per person
                </span>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3 mb-6 text-sm font-body text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{tour.groupSize}</span>
                </div>
              </div>

              {tour.departureDates.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-display font-bold text-foreground text-sm mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    Available Departures
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.departureDates.map((date) => (
                      <Badge
                        key={date}
                        className="bg-muted text-muted-foreground border-border text-xs font-body"
                      >
                        {date}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-3"
                data-ocid="tour_detail.whatsapp_booking_button"
              >
                <Button className="w-full bg-[#25D366] hover:bg-[#1da851] text-white border-0 font-body font-semibold gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Book on WhatsApp
                </Button>
              </a>
              <a
                href="tel:+917828587442"
                className="block"
                data-ocid="tour_detail.call_booking_button"
              >
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call: 7828587442
                </Button>
              </a>

              <Separator className="my-5" />

              {/* Inquiry Form */}
              {submitted ? (
                <div
                  className="flex flex-col items-center gap-3 py-4 text-center"
                  data-ocid="tour_detail.inquiry_success_state"
                >
                  <CheckCircle2 className="w-10 h-10 text-secondary" />
                  <p className="font-display font-bold text-foreground text-base">
                    Inquiry Sent!
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    We'll reach out on{" "}
                    <span className="font-semibold text-foreground">
                      {inquiryPhone}
                    </span>{" "}
                    shortly.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary font-body text-xs"
                    onClick={() => {
                      setSubmitted(false);
                      setInquiryName("");
                      setInquiryPhone("");
                      setInquiryMessage("");
                    }}
                    data-ocid="tour_detail.inquiry_reset_button"
                  >
                    Send another inquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    let valid = true;
                    if (!inquiryName.trim()) {
                      setNameError("Please enter your name");
                      valid = false;
                    } else {
                      setNameError("");
                    }
                    if (!/^\d{10}$/.test(inquiryPhone.replace(/\s+/g, ""))) {
                      setPhoneError("Enter a valid 10-digit phone number");
                      valid = false;
                    } else {
                      setPhoneError("");
                    }
                    if (!valid) return;
                    const msg = encodeURIComponent(
                      `Hi! My name is ${inquiryName}. I'm interested in the "${tour?.name}" tour. ${inquiryMessage}`,
                    );
                    window.open(
                      `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,
                      "_blank",
                    );
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                  data-ocid="tour_detail.inquiry_form"
                >
                  <h4 className="font-display font-bold text-foreground text-sm">
                    Quick Inquiry
                  </h4>
                  <div className="space-y-1">
                    <Label
                      htmlFor="inq-name"
                      className="font-body text-xs text-muted-foreground"
                    >
                      Your Name *
                    </Label>
                    <Input
                      id="inq-name"
                      placeholder="e.g. Ravi Sharma"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      onBlur={() => {
                        if (!inquiryName.trim())
                          setNameError("Please enter your name");
                        else setNameError("");
                      }}
                      className="font-body text-sm"
                      data-ocid="tour_detail.inquiry_name_input"
                    />
                    {nameError && (
                      <p
                        className="font-body text-xs text-destructive"
                        data-ocid="tour_detail.inquiry_name_field_error"
                      >
                        {nameError}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <Label
                      htmlFor="inq-phone"
                      className="font-body text-xs text-muted-foreground"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="inq-phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      onBlur={() => {
                        if (!/^\d{10}$/.test(inquiryPhone.replace(/\s+/g, "")))
                          setPhoneError("Enter a valid 10-digit phone number");
                        else setPhoneError("");
                      }}
                      className="font-body text-sm"
                      data-ocid="tour_detail.inquiry_phone_input"
                    />
                    {phoneError && (
                      <p
                        className="font-body text-xs text-destructive"
                        data-ocid="tour_detail.inquiry_phone_field_error"
                      >
                        {phoneError}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <Label
                      htmlFor="inq-message"
                      className="font-body text-xs text-muted-foreground"
                    >
                      Message (optional)
                    </Label>
                    <Textarea
                      id="inq-message"
                      placeholder="Travel dates, group size, special requests…"
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      rows={3}
                      className="font-body text-sm resize-none"
                      data-ocid="tour_detail.inquiry_message_textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold gap-2"
                    data-ocid="tour_detail.inquiry_submit_button"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry via WhatsApp
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
