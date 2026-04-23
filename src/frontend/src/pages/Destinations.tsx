import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useDestinations } from "../hooks/useBackend";

export default function Destinations() {
  const { data: destinations, isLoading } = useDestinations();

  return (
    <div className="bg-background min-h-screen" data-ocid="destinations.page">
      {/* Header */}
      <div className="bg-card border-b border-border py-14 px-4 text-center">
        <Badge className="bg-secondary/30 text-secondary-foreground border-secondary/40 mb-3 font-body text-xs uppercase tracking-widest">
          India Awaits
        </Badge>
        <h1 className="font-display text-5xl font-bold text-foreground mb-3">
          Destinations
        </h1>
        <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
          From royal deserts to tropical backwaters — discover India's most
          extraordinary corners.
        </p>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-16">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["d1", "d2", "d3", "d4"].map((sk) => (
              <Skeleton key={sk} className="h-80 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(destinations ?? []).map((dest, i) => (
              <div
                key={dest.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth"
                data-ocid={`destinations.dest_card.item.${i + 1}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h2 className="font-display text-3xl font-bold text-card">
                      {dest.name}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                    {dest.overview}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {dest.highlights.slice(0, 3).map((h) => (
                      <Badge
                        key={h}
                        className="bg-muted text-muted-foreground border-border text-xs font-body"
                      >
                        {h}
                      </Badge>
                    ))}
                    {dest.highlights.length > 3 && (
                      <Badge className="bg-muted text-muted-foreground border-border text-xs font-body">
                        +{dest.highlights.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <Link
                    to="/destinations/$id"
                    params={{ id: String(dest.id) }}
                    data-ocid={`destinations.dest_link.${i + 1}`}
                  >
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body gap-2 transition-smooth"
                    >
                      Explore {dest.name}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
