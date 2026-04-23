import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as Skeleton, B as Button, L as Link } from "./index-vHUNMLzF.js";
import { B as Badge } from "./badge-DRkukSY5.js";
import { I as Input } from "./input-CjEQ5hnV.js";
import { u as useTours } from "./useBackend-Bu2h-f7-.js";
import { S as Star } from "./star-C_UZmDA9.js";
import { C as Clock } from "./clock-CzRilSWV.js";
import { U as Users } from "./users-BGCJuNuj.js";
import { A as ArrowRight } from "./arrow-right-C-uzvY2c.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const destinations = ["All", "Ujjain", "Kedarnath", "Badrinath"];
function Tours() {
  const { data: tours, isLoading } = useTours();
  const [filter, setFilter] = reactExports.useState("All");
  const [search, setSearch] = reactExports.useState("");
  const filtered = (tours ?? []).filter((t) => {
    const matchDest = filter === "All" || t.destination === filter;
    const matchSearch = !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.destination.toLowerCase().includes(search.toLowerCase());
    return matchDest && matchSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "tours.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-b border-border py-14 px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/15 text-primary border-primary/30 mb-3 font-body text-xs uppercase tracking-widest", children: "Explore India" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl font-bold text-foreground mb-3", children: "Tour Packages" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto text-lg", children: "Curated journeys across India's most enchanting destinations. Every itinerary crafted with care." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Search tours or destinations…",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "pl-9 font-body bg-card border-input",
              "data-ocid": "tours.search_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: destinations.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setFilter(d),
            className: `px-4 py-2 rounded-full text-sm font-body font-medium border transition-smooth ${filter === d ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border hover:border-primary hover:text-primary"}`,
            "data-ocid": `tours.filter_${d.toLowerCase()}`,
            children: d
          },
          d
        )) })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((sk) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl overflow-hidden bg-card border border-border",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-56 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" })
            ] })
          ]
        },
        sk
      )) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-24 text-muted-foreground",
          "data-ocid": "tours.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🔍" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "No tours found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body mb-6", children: "Try a different filter or search term." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                onClick: () => {
                  setFilter("All");
                  setSearch("");
                },
                children: "Clear filters"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((tour, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/tours/$id",
          params: { id: String(tour.id) },
          className: "group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-smooth block",
          "data-ocid": `tours.tour_card.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-56 overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: tour.galleryImages[0] ?? "/assets/generated/dest-ujjain.dim_800x600.jpg",
                  alt: tour.name,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-card/90 text-foreground border-0 text-xs font-body", children: tour.destination }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 flex items-center gap-1 bg-card/90 rounded-full px-2 py-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-yellow-500 text-yellow-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body font-medium", children: "4.9" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-lg mb-2 leading-snug line-clamp-2", children: tour.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground font-body mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                  tour.duration
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
                  tour.groupSize
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body", children: "From" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-primary text-xl", children: [
                    "₹",
                    tour.startingPrice.toLocaleString("en-IN")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body", children: "per person" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "bg-primary hover:bg-primary/90 text-primary-foreground font-body text-xs gap-1",
                    children: [
                      "View Details",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                    ]
                  }
                )
              ] })
            ] })
          ]
        },
        tour.id
      )) })
    ] })
  ] });
}
export {
  Tours as default
};
