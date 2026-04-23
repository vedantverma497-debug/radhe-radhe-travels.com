import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, B as Button, S as Skeleton, P as Phone } from "./index-vHUNMLzF.js";
import { B as Badge } from "./badge-DRkukSY5.js";
import { u as useTours, a as useDestinations } from "./useBackend-Bu2h-f7-.js";
import { A as ArrowRight } from "./arrow-right-C-uzvY2c.js";
import { C as Clock } from "./clock-CzRilSWV.js";
import { S as Star } from "./star-C_UZmDA9.js";
import { U as Users } from "./users-BGCJuNuj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const WHATSAPP_NUMBER = "917828587442";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi! I am interested in your tour packages. Please share more details."
);
const trustBadges = [
  { icon: Clock, label: "24/7 Support", desc: "Always available for you" },
  { icon: Award, label: "Best Prices", desc: "Unbeatable value guaranteed" },
  { icon: Shield, label: "Best Services", desc: "Premium quality every trip" },
  { icon: Heart, label: "Trusted by 5000+", desc: "Happy travelers served" }
];
const vehicles = [
  {
    name: "Maruti Ertiga",
    seats: "7-seater",
    img: "🚐",
    desc: "Perfect for families"
  },
  {
    name: "Maruti Dzire",
    seats: "4-seater",
    img: "🚗",
    desc: "Comfortable sedan"
  },
  {
    name: "Toyota Innova",
    seats: "7-seater",
    img: "🚙",
    desc: "Premium SUV comfort"
  },
  {
    name: "Force Traveller",
    seats: "14-17 seater",
    img: "🚌",
    desc: "Ideal for groups"
  }
];
function Home() {
  const { data: tours, isLoading: toursLoading } = useTours();
  const { data: destinations, isLoading: destLoading } = useDestinations();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[92vh] flex items-center justify-start overflow-hidden",
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/hero-india.dim_1400x800.jpg",
              alt: "Golden Ghats of Varanasi at sunrise",
              className: "absolute inset-0 w-full h-full object-cover object-center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container max-w-7xl mx-auto px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full overflow-hidden border-2 border-card/60 shadow-elevated flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/images/logo-radhe-radhe.jpg",
                  alt: "Radhe Radhe Tour and Travels logo",
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/90 text-primary-foreground border-0 font-body text-xs px-3 py-1 uppercase tracking-widest", children: "Authentic India Tours" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold text-card leading-tight mb-6", children: [
              "Discover the",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Soul of India."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xl text-card/90 mb-3 italic leading-relaxed", children: "Curated Journeys. Timeless Moments." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-card/80 mb-10 leading-relaxed max-w-lg", children: "Explore authentic cultural experiences, majestic landscapes, and unforgettable adventures with Radhe Radhe Tour and Travels." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tours", "data-ocid": "home.hero_cta_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-base px-8 gap-2 shadow-elevated",
                  children: [
                    "Plan Your Journey",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "home.hero_whatsapp_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "border-card/60 text-card hover:bg-card/10 font-body font-semibold text-base px-8 gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "svg",
                          {
                            viewBox: "0 0 24 24",
                            className: "w-5 h-5 fill-current",
                            "aria-hidden": "true",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "WhatsApp" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
                            ]
                          }
                        ),
                        "WhatsApp Us"
                      ]
                    }
                  )
                }
              )
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: trustBadges.map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(badge.icon, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body font-semibold text-sm", children: badge.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-primary-foreground/75", children: badge.desc })
      ] })
    ] }, badge.label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20 px-4",
        "data-ocid": "home.tours_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-secondary/30 text-secondary-foreground border-secondary/40 mb-3 font-body text-xs uppercase tracking-widest", children: "Handpicked Experiences" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-foreground mb-3", children: "Featured Tour Packages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto", children: "Discover India's most captivating destinations with our expertly curated itineraries." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: toursLoading ? ["t1", "t2", "t3", "t4"].map((sk) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl overflow-hidden bg-card border border-border",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-52 w-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/3" })
                ] })
              ]
            },
            sk
          )) : (tours ?? []).map((tour, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-smooth",
              "data-ocid": `home.tour_card.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden", children: [
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
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base mb-1 leading-snug line-clamp-2", children: tour.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground font-body mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                      tour.duration
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
                      tour.groupSize
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body", children: "Starting from" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-primary text-lg", children: [
                        "₹",
                        tour.startingPrice.toLocaleString("en-IN")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body", children: "per person" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/tours/$id",
                        params: { id: String(tour.id) },
                        "data-ocid": `home.tour_card_link.${i + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body text-xs gap-1 transition-smooth",
                            children: [
                              "View Details",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                            ]
                          }
                        )
                      }
                    )
                  ] })
                ] })
              ]
            },
            tour.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tours", "data-ocid": "home.view_all_tours_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              variant: "outline",
              className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold gap-2 transition-smooth",
              children: [
                "View All Tour Packages",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 py-20 px-4",
        "data-ocid": "home.fleet_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/20 text-accent-foreground border-accent/30 mb-3 font-body text-xs uppercase tracking-widest", children: "Travel in Comfort" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-foreground mb-3", children: "Our Vehicle Fleet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto", children: "Choose from our well-maintained fleet of vehicles, perfect for every group size and occasion." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: vehicles.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-card hover:shadow-elevated transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: v.img }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base mb-1", children: v.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-secondary/30 text-secondary-foreground border-secondary/40 text-xs font-body mb-2", children: v.seats }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: v.desc })
              ]
            },
            v.name
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20 px-4",
        "data-ocid": "home.destinations_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/15 text-primary border-primary/30 mb-3 font-body text-xs uppercase tracking-widest", children: "Explore India" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-foreground mb-3", children: "Popular Destinations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto", children: "From sacred Ujjain to the divine Himalayan shrines of Kedarnath and Badrinath — spiritual India awaits." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: destLoading ? ["d1", "d2", "d3", "d4"].map((sk) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-72 rounded-2xl" }, sk)) : (destinations ?? []).map((dest, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/destinations/$id",
              params: { id: String(dest.id) },
              className: "group relative h-72 rounded-2xl overflow-hidden block shadow-card hover:shadow-elevated transition-smooth",
              "data-ocid": `home.destination_card.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: dest.imageUrl,
                    alt: dest.name,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-card text-xl mb-1", children: dest.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-card/80 text-sm line-clamp-2", children: [
                    dest.overview.substring(0, 75),
                    "..."
                  ] })
                ] })
              ]
            },
            dest.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-20 px-4", "data-ocid": "home.why_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-foreground mb-3", children: "Why Choose Radhe Radhe?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto", children: "We go beyond travel — we create journeys that touch the soul." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        {
          title: "Expert Local Guides",
          desc: "Our certified guides bring destinations to life with insider knowledge, stories, and authentic connections that no guidebook can offer.",
          icon: "🧭"
        },
        {
          title: "Curated Itineraries",
          desc: "Every route is meticulously crafted to balance iconic landmarks with hidden gems, giving you the full breadth of each destination.",
          icon: "🗺️"
        },
        {
          title: "Authentic Experiences",
          desc: "We believe travel should transform. Our experiences go deep into local culture, food, art, and traditions for memories that last forever.",
          icon: "✨"
        }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-2xl p-8 text-center shadow-card hover:shadow-elevated transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-5", children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-xl mb-3", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed", children: item.desc })
          ]
        },
        item.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20 px-4",
        "data-ocid": "home.contact_cta_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-3xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-foreground mb-4", children: "Ready to Explore India?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-lg mb-8", children: "Call or WhatsApp us right now. Our travel experts are available 24/7 to design your perfect journey." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": "home.cta_whatsapp_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-[#25D366] hover:bg-[#1da851] text-white border-0 font-body font-semibold text-base px-8 gap-2 shadow-elevated",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          className: "w-5 h-5 fill-current",
                          "aria-hidden": "true",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "WhatsApp" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
                          ]
                        }
                      ),
                      "WhatsApp: 7828587442"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917828587442", "data-ocid": "home.cta_call_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold text-base px-8 gap-2 transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
                  "Call: 7828587442"
                ]
              }
            ) })
          ] })
        ] })
      }
    )
  ] });
}
export {
  Home as default
};
