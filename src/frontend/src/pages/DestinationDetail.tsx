import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Users,
} from "lucide-react";
import { useDestination, useToursByDestination } from "../hooks/useBackend";

export default function DestinationDetail() {
  const { id } = useParams({ from: "/destinations/$id" });
  const destId = Number(id);
  const { data: dest, isLoading } = useDestination(destId);
  const { data: tours } = useToursByDestination(dest?.name ?? "");

  if (isLoading) {
    return (
      <div
        className="container max-w-5xl mx-auto px-4 py-16 space-y-4"
        data-ocid="destination_detail.loading_state"
      >
        <Skeleton className="h-72 w-full rounded-2xl" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (!dest) {
    return (
      <div
        className="container max-w-5xl mx-auto px-4 py-24 text-center"
        data-ocid="destination_detail.error_state"
      >
        <div className="text-5xl mb-4">🗺️</div>
        <h2 className="font-display text-3xl font-bold text-foreground mb-3">
          Destination not found
        </h2>
        <Link to="/destinations">
          <Button className="bg-primary text-primary-foreground font-body gap-2">
            <ChevronLeft className="w-4 h-4" /> Back to Destinations
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background" data-ocid="destination_detail.page">
      {/* Hero */}
      <div className="relative h-80 md:h-[440px] overflow-hidden">
        <img
          src={dest.imageUrl}
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-card/80 hover:text-card text-sm font-body mb-3 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> All Destinations
          </Link>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-card mb-2">
            {dest.name}
          </h1>
          <p className="font-body text-card/80 text-lg">India</p>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Overview */}
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            About {dest.name}
          </h2>
          <p className="font-body text-muted-foreground text-base leading-relaxed">
            {dest.overview}
          </p>
        </div>

        {/* Highlights */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-5">
            Top Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {dest.highlights.map((h) => (
              <div
                key={h}
                className="flex items-start gap-2.5 bg-card border border-border rounded-lg p-3.5"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-foreground">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Tours */}
        {(tours ?? []).length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-5">
              Tours to {dest.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(tours ?? []).map((tour, i) => (
                <Link
                  key={tour.id}
                  to="/tours/$id"
                  params={{ id: String(tour.id) }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth flex"
                  data-ocid={`destination_detail.tour_card.item.${i + 1}`}
                >
                  <div className="w-32 h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={tour.galleryImages[0] ?? dest.imageUrl}
                      alt={tour.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="p-4 flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-2 line-clamp-2">
                      {tour.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-body mb-3">
                      <Users className="w-3.5 h-3.5" />
                      {tour.groupSize}
                    </div>
                    <div className="font-display font-bold text-primary text-base">
                      ₹{tour.startingPrice.toLocaleString("en-IN")}
                    </div>
                    <div className="text-xs text-muted-foreground font-body">
                      per person
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-muted/30 border border-border rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">
            Ready to visit {dest.name}?
          </h3>
          <p className="font-body text-muted-foreground mb-6">
            Contact us to design your perfect itinerary to {dest.name}.
          </p>
          <Link to="/tours">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold gap-2">
              View All {dest.name} Tours
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
