import { j as jsxRuntimeExports, S as Skeleton, L as Link, B as Button } from "./index-vHUNMLzF.js";
import { B as Badge } from "./badge-DRkukSY5.js";
import { a as useDestinations } from "./useBackend-Bu2h-f7-.js";
import { A as ArrowRight } from "./arrow-right-C-uzvY2c.js";
function Destinations() {
  const { data: destinations, isLoading } = useDestinations();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", "data-ocid": "destinations.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-b border-border py-14 px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-secondary/30 text-secondary-foreground border-secondary/40 mb-3 font-body text-xs uppercase tracking-widest", children: "India Awaits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl font-bold text-foreground mb-3", children: "Destinations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto text-lg", children: "From royal deserts to tropical backwaters — discover India's most extraordinary corners." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 py-16", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: ["d1", "d2", "d3", "d4"].map((sk) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-80 rounded-2xl" }, sk)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: (destinations ?? []).map((dest, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth",
        "data-ocid": `destinations.dest_card.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: dest.imageUrl,
                alt: dest.name,
                className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-card", children: dest.name }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3", children: dest.overview }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-5", children: [
              dest.highlights.slice(0, 3).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "bg-muted text-muted-foreground border-border text-xs font-body",
                  children: h
                },
                h
              )),
              dest.highlights.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-muted text-muted-foreground border-border text-xs font-body", children: [
                "+",
                dest.highlights.length - 3,
                " more"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/destinations/$id",
                params: { id: String(dest.id) },
                "data-ocid": `destinations.dest_link.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body gap-2 transition-smooth",
                    children: [
                      "Explore ",
                      dest.name,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                )
              }
            )
          ] })
        ]
      },
      dest.id
    )) }) })
  ] });
}
export {
  Destinations as default
};
