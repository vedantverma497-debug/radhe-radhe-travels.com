import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Search, Star, Users } from "lucide-react";
import { useState } from "react";
import { useTours } from "../hooks/useBackend";

const destinations = ["All", "Ujjain", "Kedarnath", "Badrinath"];

export default function Tours() {
  const { data: tours, isLoading } = useTours();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = (tours ?? []).filter((t) => {
    const matchDest = filter === "All" || t.destination === filter;
    const matchSearch =
      !search ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.destination.toLowerCase().includes(search.toLowerCase());
    return matchDest && matchSearch;
  });

  return (
    <div className="bg-background min-h-screen" data-ocid="tours.page">
      {/* Hero banner */}
      <div className="bg-card border-b border-border py-14 px-4 text-center">
        <Badge className="bg-primary/15 text-primary border-primary/30 mb-3 font-body text-xs uppercase tracking-widest">
          Explore India
        </Badge>
        <h1 className="font-display text-5xl font-bold text-foreground mb-3">
          Tour Packages
        </h1>
        <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
          Curated journeys across India's most enchanting destinations. Every
          itinerary crafted with care.
        </p>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-10">
        {/* Search + filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search tours or destinations…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 font-body bg-card border-input"
              data-ocid="tours.search_input"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {destinations.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setFilter(d)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium border transition-smooth ${
                  filter === d
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
                }`}
                data-ocid={`tours.filter_${d.toLowerCase()}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Tour grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((sk) => (
              <div
                key={sk}
                className="rounded-2xl overflow-hidden bg-card border border-border"
              >
                <Skeleton className="h-56 w-full" />
                <div className="p-5 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="text-center py-24 text-muted-foreground"
            data-ocid="tours.empty_state"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              No tours found
            </h3>
            <p className="font-body mb-6">
              Try a different filter or search term.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                setFilter("All");
                setSearch("");
              }}
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tour, i) => (
              <Link
                key={tour.id}
                to="/tours/$id"
                params={{ id: String(tour.id) }}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-smooth block"
                data-ocid={`tours.tour_card.item.${i + 1}`}
              >
                <div className="relative h-56 overflow-hidden">
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
                    <span className="text-xs font-body font-medium">4.9</span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-display font-bold text-foreground text-lg mb-2 leading-snug line-clamp-2">
                    {tour.name}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {tour.groupSize}
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground font-body">
                        From
                      </span>
                      <div className="font-display font-bold text-primary text-xl">
                        ₹{tour.startingPrice.toLocaleString("en-IN")}
                      </div>
                      <span className="text-xs text-muted-foreground font-body">
                        per person
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-xs gap-1"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
