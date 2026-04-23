import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "917828587442";
const PHONE_NUMBER = "+91 78285 87442";
const EMAIL = "vedantverma497@gmail.com";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I am interested in your tour packages. Please share more details.",
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Tour Packages", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const popularTours = [
  { label: "Ujjain Spiritual Darshan Tour", id: "1" },
  { label: "Kedarnath Himalayan Yatra", id: "2" },
  { label: "Badrinath Char Dham Yatra", id: "3" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Band */}
      <div className="bg-primary text-primary-foreground py-10 px-4">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold mb-1">
              Ready for your dream journey?
            </h3>
            <p className="font-body text-primary-foreground/80 text-sm">
              Contact us today and let us craft the perfect itinerary for you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.whatsapp_cta_button"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#1da851] text-white border-0 font-body font-semibold gap-2 shadow-elevated"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </Button>
            </a>
            <a href={`tel:${PHONE_NUMBER}`} data-ocid="footer.call_cta_button">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-body font-semibold gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-border">
                <img
                  src="/assets/images/logo-radhe-radhe.jpg"
                  alt="Radhe Radhe Tour and Travels"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-foreground text-base">
                  Radhe Radhe
                </div>
                <div className="text-muted-foreground text-xs font-body">
                  Tour and Travels
                </div>
              </div>
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
              Curated journeys across India's most enchanting destinations.
              Timeless moments, authentic experiences, and unforgettable
              memories — crafted with love for every traveler.
            </p>
            <div className="flex flex-col gap-2.5 text-sm font-body text-muted-foreground">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
                data-ocid="footer.phone_link"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
                data-ocid="footer.email_link"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                {EMAIL}
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Indore, Madhya Pradesh
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground text-base mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-ocid={`footer.quick_link_${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-display font-bold text-foreground text-base mb-4">
              Popular Tours
            </h4>
            <ul className="flex flex-col gap-2.5">
              {popularTours.map((tour) => (
                <li key={tour.id}>
                  <Link
                    to="/tours/$id"
                    params={{ id: tour.id }}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-ocid="footer.tour_link"
                  >
                    {tour.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-foreground text-base mb-4">
              Connect With Us
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-smooth group"
                data-ocid="footer.whatsapp_link"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-white"
                    aria-hidden="true"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-body text-sm font-medium text-foreground group-hover:text-[#25D366] transition-colors">
                    WhatsApp
                  </div>
                  <div className="font-body text-xs text-muted-foreground truncate">
                    {PHONE_NUMBER}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-primary/8 border border-primary/20 hover:bg-primary/15 transition-smooth group"
                data-ocid="footer.phone_cta_link"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="font-body text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    Call Us
                  </div>
                  <div className="font-body text-xs text-muted-foreground truncate">
                    {PHONE_NUMBER}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/60 border border-border hover:bg-muted transition-smooth group"
                data-ocid="footer.email_cta_link"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="font-body text-sm font-medium text-foreground group-hover:text-secondary-foreground transition-colors">
                    Email Us
                  </div>
                  <div className="font-body text-xs text-muted-foreground truncate">
                    {EMAIL}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-muted/40 px-4 py-4">
        <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-muted-foreground">
          <span>
            © {year} Radhe Radhe Tour and Travels. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-0.5"
            >
              caffeine.ai
              <ExternalLink className="w-3 h-3" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
