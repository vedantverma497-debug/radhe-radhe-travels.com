import { u as useParams, j as jsxRuntimeExports, S as Skeleton, L as Link, B as Button } from "./index-vHUNMLzF.js";
import { c as useDestination, d as useToursByDestination } from "./useBackend-Bu2h-f7-.js";
import { C as ChevronLeft, a as CircleCheck } from "./circle-check-t1g_6E-V.js";
import { C as Clock } from "./clock-CzRilSWV.js";
import { U as Users } from "./users-BGCJuNuj.js";
import { A as ArrowRight } from "./arrow-right-C-uzvY2c.js";
function DestinationDetail() {
  const { id } = useParams({ from: "/destinations/$id" });
  const destId = Number(id);
  const { data: dest, isLoading } = useDestination(destId);
  const { data: tours } = useToursByDestination((dest == null ? void 0 : dest.name) ?? "");
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container max-w-5xl mx-auto px-4 py-16 space-y-4",
        "data-ocid": "destination_detail.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-72 w-full rounded-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full" })
        ]
      }
    );
  }
  if (!dest) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container max-w-5xl mx-auto px-4 py-24 text-center",
        "data-ocid": "destination_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🗺️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-3", children: "Destination not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/destinations", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary text-primary-foreground font-body gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
            " Back to Destinations"
          ] }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", "data-ocid": "destination_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-80 md:h-[440px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: dest.imageUrl,
          alt: dest.name,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/20 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/destinations",
            className: "inline-flex items-center gap-1.5 text-card/80 hover:text-card text-sm font-body mb-3 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
              " All Destinations"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl font-bold text-card mb-2", children: dest.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-card/80 text-lg", children: "India" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-5xl mx-auto px-4 py-12 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold text-foreground mb-4", children: [
          "About ",
          dest.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-base leading-relaxed", children: dest.overview })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-5", children: "Top Highlights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: dest.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-start gap-2.5 bg-card border border-border rounded-lg p-3.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-foreground", children: h })
            ]
          },
          h
        )) })
      ] }),
      (tours ?? []).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold text-foreground mb-5", children: [
          "Tours to ",
          dest.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: (tours ?? []).map((tour, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/tours/$id",
            params: { id: String(tour.id) },
            className: "group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth flex",
            "data-ocid": `destination_detail.tour_card.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-auto overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: tour.galleryImages[0] ?? dest.imageUrl,
                  alt: tour.name,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-sm leading-snug mb-2 line-clamp-2", children: tour.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground font-body mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                  tour.duration
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground font-body mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
                  tour.groupSize
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-primary text-base", children: [
                  "₹",
                  tour.startingPrice.toLocaleString("en-IN")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-body", children: "per person" })
              ] })
            ]
          },
          tour.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 border border-border rounded-2xl p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl font-bold text-foreground mb-2", children: [
          "Ready to visit ",
          dest.name,
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-muted-foreground mb-6", children: [
          "Contact us to design your perfect itinerary to ",
          dest.name,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tours", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold gap-2", children: [
          "View All ",
          dest.name,
          " Tours",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  DestinationDetail as default
};
