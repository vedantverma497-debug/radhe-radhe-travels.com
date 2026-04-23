import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Clock,
  Heart,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { useDestinations, useTours } from "../hooks/useBackend";

const WHATSAPP_NUMBER = "917828587442";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi! I am interested in your tour packages. Please share more details.",
);

const trustBadges = [
  { icon: Clock, label: "24/7 Support", desc: "Always available for you" },
  { icon: Award, label: "Best Prices", desc: "Unbeatable value guaranteed" },
  { icon: Shield, label: "Best Services", desc: "Premium quality every trip" },
  { icon: Heart, label: "Trusted by 5000+", desc: "Happy travelers served" },
];

const vehicles = [
  {
    name: "Maruti Ertiga",
    seats: "7-seater",
    img: "🚐",
    desc: "Perfect for families",
  },
  {
    name: "Maruti Dzire",
    seats: "4-seater",
    img: "🚗",
    desc: "Comfortable sedan",
  },
  {
    name: "Toyota Innova",
    seats: "7-seater",
    img: "🚙",
    desc: "Premium SUV comfort",
  },
  {
    name: "Force Traveller",
    seats: "14-17 seater",
    img: "🚌",
    desc: "Ideal for groups",
  },
];

export default function Home() {
  const { data: tours, isLoading: toursLoading } = useTours();
  const { data: destinations, isLoading: destLoading } = useDestinations();

  return (
    <div data-ocid="home.page">
      {/* Hero */}
      <section
        className="relative min-h-[92vh] flex items-center justify-start overflow-hidden"
        data-ocid="home.hero_section"
      >
        <img
          src="/assets/generated/hero-india.dim_1400x800.jpg"
          alt="Golden Ghats of Varanasi at sunrise"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

        <div className="relative z-10 container max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-card/60 shadow-elevated flex-shrink-0">
                <img
                  src="/assets/images/logo-radhe-radhe.jpg"
                  alt="Radhe Radhe Tour and Travels logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <Badge className="bg-primary/90 text-primary-foreground border-0 font-body text-xs px-3 py-1 uppercase tracking-widest">
                Authentic India Tours
              </Badge>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-card leading-tight mb-6">
              Discover the
              <br />
              Soul of India.
            </h1>
            <p className="font-body text-xl text-card/90 mb-3 italic leading-relaxed">
              Curated Journeys. Timeless Moments.
            </p>
            <p className="font-body text-base text-card/80 mb-10 leading-relaxed max-w-lg">
              Explore authentic cultural experiences, majestic landscapes, and
              unforgettable adventures with Radhe Radhe Tour and Travels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tours" data-ocid="home.hero_cta_button">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-base px-8 gap-2 shadow-elevated"
                >
                  Plan Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="home.hero_whatsapp_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-card/60 text-card hover:bg-card/10 font-body font-semibold text-base px-8 gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    aria-hidden="true"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-body font-semibold text-sm">
                    {badge.label}
                  </div>
                  <div className="font-body text-xs text-primary-foreground/75">
                    {badge.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section
        className="bg-background py-20 px-4"
        data-ocid="home.tours_section"
      >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/30 text-secondary-foreground border-secondary/40 mb-3 font-body text-xs uppercase tracking-widest">
              Handpicked Experiences
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Featured Tour Packages
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Discover India's most captivating destinations with our expertly
              curated itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toursLoading
              ? ["t1", "t2", "t3", "t4"].map((sk) => (
                  <div
                    key={sk}
                    className="rounded-2xl overflow-hidden bg-card border border-border"
                  >
                    <Skeleton className="h-52 w-full" />
                    <div className="p-4 space-y-2">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-1/3" />
                    </div>
                  </div>
                ))
              : (tours ?? []).map((tour, i) => (
                  <div
                    key={tour.id}
                    className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-smooth"
                    data-ocid={`home.tour_card.item.${i + 1}`}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={
                          tour.galleryImages[0] ??
                          "/assets/generated/dest-ujjain.dim_800x600.jpg"
                        }
                        alt={tour.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />

                      <div className="absolute top-3 left-3">
                        <Badge className="bg-card/90 text-foreground border-0 text-xs font-body">
                          {tour.destination}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-card/90 rounded-full px-2 py-0.5">
                        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        <span className="text-xs font-body font-medium">
                          4.9
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-bold text-foreground text-base mb-1 leading-snug line-clamp-2">
                        {tour.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground font-body mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {tour.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {tour.groupSize}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-muted-foreground font-body">
                            Starting from
                          </span>
                          <div className="font-display font-bold text-primary text-lg">
                            ₹{tour.startingPrice.toLocaleString("en-IN")}
                          </div>
                          <span className="text-xs text-muted-foreground font-body">
                            per person
                          </span>
                        </div>
                        <Link
                          to="/tours/$id"
                          params={{ id: String(tour.id) }}
                          data-ocid={`home.tour_card_link.${i + 1}`}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body text-xs gap-1 transition-smooth"
                          >
                            View Details
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/tours" data-ocid="home.view_all_tours_button">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold gap-2 transition-smooth"
              >
                View All Tour Packages
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section
        className="bg-muted/30 py-20 px-4"
        data-ocid="home.fleet_section"
      >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-3 font-body text-xs uppercase tracking-widest">
              Travel in Comfort
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Our Vehicle Fleet
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Choose from our well-maintained fleet of vehicles, perfect for
              every group size and occasion.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {vehicles.map((v) => (
              <div
                key={v.name}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-card hover:shadow-elevated transition-smooth"
              >
                <div className="text-5xl mb-3">{v.img}</div>
                <h3 className="font-display font-bold text-foreground text-base mb-1">
                  {v.name}
                </h3>
                <Badge className="bg-secondary/30 text-secondary-foreground border-secondary/40 text-xs font-body mb-2">
                  {v.seats}
                </Badge>
                <p className="font-body text-xs text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section
        className="bg-background py-20 px-4"
        data-ocid="home.destinations_section"
      >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/15 text-primary border-primary/30 mb-3 font-body text-xs uppercase tracking-widest">
              Explore India
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Popular Destinations
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              From sacred Ujjain to the divine Himalayan shrines of Kedarnath
              and Badrinath — spiritual India awaits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destLoading
              ? ["d1", "d2", "d3", "d4"].map((sk) => (
                  <Skeleton key={sk} className="h-72 rounded-2xl" />
                ))
              : (destinations ?? []).map((dest, i) => (
                  <Link
                    key={dest.id}
                    to="/destinations/$id"
                    params={{ id: String(dest.id) }}
                    className="group relative h-72 rounded-2xl overflow-hidden block shadow-card hover:shadow-elevated transition-smooth"
                    data-ocid={`home.destination_card.item.${i + 1}`}
                  >
                    <img
                      src={dest.imageUrl}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display font-bold text-card text-xl mb-1">
                        {dest.name}
                      </h3>
                      <p className="font-body text-card/80 text-sm line-clamp-2">
                        {dest.overview.substring(0, 75)}...
                      </p>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-20 px-4" data-ocid="home.why_section">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Why Choose Radhe Radhe?
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              We go beyond travel — we create journeys that touch the soul.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Local Guides",
                desc: "Our certified guides bring destinations to life with insider knowledge, stories, and authentic connections that no guidebook can offer.",
                icon: "🧭",
              },
              {
                title: "Curated Itineraries",
                desc: "Every route is meticulously crafted to balance iconic landmarks with hidden gems, giving you the full breadth of each destination.",
                icon: "🗺️",
              },
              {
                title: "Authentic Experiences",
                desc: "We believe travel should transform. Our experiences go deep into local culture, food, art, and traditions for memories that last forever.",
                icon: "✨",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-2xl p-8 text-center shadow-card hover:shadow-elevated transition-smooth"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="font-display font-bold text-foreground text-xl mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section
        className="bg-background py-20 px-4"
        data-ocid="home.contact_cta_section"
      >
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Ready to Explore India?
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-8">
            Call or WhatsApp us right now. Our travel experts are available 24/7
            to design your perfect journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.cta_whatsapp_button"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#1da851] text-white border-0 font-body font-semibold text-base px-8 gap-2 shadow-elevated"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp: 7828587442
              </Button>
            </a>
            <a href="tel:+917828587442" data-ocid="home.cta_call_button">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold text-base px-8 gap-2 transition-smooth"
              >
                <Phone className="w-5 h-5" />
                Call: 7828587442
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
