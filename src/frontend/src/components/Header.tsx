import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const WHATSAPP_NUMBER = "917828587442";
const PHONE_NUMBER = "+91 78285 87442";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-1.5 px-4 text-sm hidden md:block">
        <div className="container max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Indore, Madhya Pradesh · Available 24/7
          </span>
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              data-ocid="header.whatsapp_link"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-current"
                aria-label="WhatsApp"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              data-ocid="header.phone_link"
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-ocid="header.logo_link"
        >
          <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-border">
            <img
              src="/assets/images/logo-radhe-radhe.jpg"
              alt="Radhe Radhe Tour and Travels"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground text-base leading-tight group-hover:text-primary transition-colors">
              Radhe Radhe
            </div>
            <div className="text-muted-foreground text-xs font-body">
              Tour and Travels
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-md text-sm font-body font-medium transition-smooth ${
                  isActive
                    ? "text-primary bg-primary/8"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
                data-ocid={`header.nav_${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I am interested in your tour packages.`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="header.book_now_button"
          >
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium"
            >
              Book Now
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="header.mobile_menu_toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-md text-sm font-body font-medium transition-smooth ${
                  isActive
                    ? "text-primary bg-primary/8"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
                data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I am interested in your tour packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              data-ocid="header.mobile_whatsapp_button"
            >
              <Button
                variant="default"
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-body"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current mr-2"
                  aria-label="WhatsApp icon"
                >
                  <title>WhatsApp icon</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </Button>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full"
              data-ocid="header.mobile_call_button"
            >
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/5 font-body"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
