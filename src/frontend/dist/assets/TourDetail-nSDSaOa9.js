import { c as createLucideIcon, u as useParams, r as reactExports, j as jsxRuntimeExports, S as Skeleton, L as Link, B as Button, M as MapPin, P as Phone } from "./index-vHUNMLzF.js";
import { B as Badge } from "./badge-DRkukSY5.js";
import { I as Input } from "./input-CjEQ5hnV.js";
import { L as Label, T as Textarea } from "./textarea-BOAkr6nA.js";
import { S as Separator } from "./separator-C-9yAH2S.js";
import { b as useTour } from "./useBackend-Bu2h-f7-.js";
import { C as ChevronLeft, a as CircleCheck } from "./circle-check-t1g_6E-V.js";
import { C as Clock } from "./clock-CzRilSWV.js";
import { U as Users } from "./users-BGCJuNuj.js";
import "./index-C3vE-ZKU.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$1);
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const WHATSAPP_NUMBER = "917828587442";
function TourDetail() {
  const { id } = useParams({ from: "/tours/$id" });
  const tourId = Number(id);
  const { data: tour, isLoading } = useTour(tourId);
  const [inquiryName, setInquiryName] = reactExports.useState("");
  const [inquiryPhone, setInquiryPhone] = reactExports.useState("");
  const [inquiryMessage, setInquiryMessage] = reactExports.useState("");
  const [nameError, setNameError] = reactExports.useState("");
  const [phoneError, setPhoneError] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container max-w-5xl mx-auto px-4 py-16 space-y-4",
        "data-ocid": "tour_detail.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-80 w-full rounded-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-2/3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full" })
        ]
      }
    );
  }
  if (!tour) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container max-w-5xl mx-auto px-4 py-24 text-center",
        "data-ocid": "tour_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🗺️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-3", children: "Tour not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mb-6", children: "This tour doesn't exist or has been removed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tours", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary text-primary-foreground hover:bg-primary/90 font-body gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
            " Back to Tours"
          ] }) })
        ]
      }
    );
  }
  const whatsappMsg = encodeURIComponent(
    `Hi! I am interested in the "${tour.name}" tour package. Please share more details.`
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", "data-ocid": "tour_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-80 md:h-[450px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: tour.galleryImages[0] ?? "/assets/generated/dest-ujjain.dim_800x600.jpg",
          alt: tour.name,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/tours",
            className: "inline-flex items-center gap-1.5 text-card/80 hover:text-card text-sm font-body mb-3 transition-colors",
            "data-ocid": "tour_detail.back_link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
              " All Tours"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-5xl font-bold text-card mb-3", children: tour.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-card/85 text-sm font-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
            tour.destination
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
            tour.duration
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
            tour.groupSize
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-5xl mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-4", children: "Tour Highlights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: tour.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-start gap-2.5 bg-card border border-border rounded-lg p-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-foreground", children: h })
              ]
            },
            h
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Day-by-Day Itinerary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: tour.itinerary.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm flex-shrink-0", children: day.day }),
              day.day < tour.itinerary.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 bg-border flex-1 mt-2 min-h-[1rem]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-base mb-1", children: day.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: day.description })
            ] })
          ] }, day.day)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-secondary" }),
              "What's Included"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: tour.inclusions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 font-body text-sm text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-secondary flex-shrink-0 mt-0.5" }),
                  item
                ]
              },
              item
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-destructive" }),
              "Not Included"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: tour.exclusions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 font-body text-sm text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-destructive/60 flex-shrink-0 mt-0.5" }),
                  item
                ]
              },
              item
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-elevated",
          "data-ocid": "tour_detail.booking_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: "Starting from" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-4xl font-bold text-primary", children: [
                "₹",
                tour.startingPrice.toLocaleString("en-IN")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: "per person" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-6 text-sm font-body text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tour.duration })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tour.groupSize })
              ] })
            ] }),
            tour.departureDates.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-bold text-foreground text-sm mb-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }),
                "Available Departures"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: tour.departureDates.map((date) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "bg-muted text-muted-foreground border-border text-xs font-body",
                  children: date
                },
                date
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "block mb-3",
                "data-ocid": "tour_detail.whatsapp_booking_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full bg-[#25D366] hover:bg-[#1da851] text-white border-0 font-body font-semibold gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      viewBox: "0 0 24 24",
                      className: "w-4 h-4 fill-current",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "WhatsApp" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
                      ]
                    }
                  ),
                  "Book on WhatsApp"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+917828587442",
                className: "block",
                "data-ocid": "tour_detail.call_booking_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                      "Call: 7828587442"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-5" }),
            submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center gap-3 py-4 text-center",
                "data-ocid": "tour_detail.inquiry_success_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-secondary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-base", children: "Inquiry Sent!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground", children: [
                    "We'll reach out on",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: inquiryPhone }),
                    " ",
                    "shortly."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "text-primary font-body text-xs",
                      onClick: () => {
                        setSubmitted(false);
                        setInquiryName("");
                        setInquiryPhone("");
                        setInquiryMessage("");
                      },
                      "data-ocid": "tour_detail.inquiry_reset_button",
                      children: "Send another inquiry"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: (e) => {
                  e.preventDefault();
                  let valid = true;
                  if (!inquiryName.trim()) {
                    setNameError("Please enter your name");
                    valid = false;
                  } else {
                    setNameError("");
                  }
                  if (!/^\d{10}$/.test(inquiryPhone.replace(/\s+/g, ""))) {
                    setPhoneError("Enter a valid 10-digit phone number");
                    valid = false;
                  } else {
                    setPhoneError("");
                  }
                  if (!valid) return;
                  const msg = encodeURIComponent(
                    `Hi! My name is ${inquiryName}. I'm interested in the "${tour == null ? void 0 : tour.name}" tour. ${inquiryMessage}`
                  );
                  window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,
                    "_blank"
                  );
                  setSubmitted(true);
                },
                className: "space-y-4",
                "data-ocid": "tour_detail.inquiry_form",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground text-sm", children: "Quick Inquiry" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "inq-name",
                        className: "font-body text-xs text-muted-foreground",
                        children: "Your Name *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "inq-name",
                        placeholder: "e.g. Ravi Sharma",
                        value: inquiryName,
                        onChange: (e) => setInquiryName(e.target.value),
                        onBlur: () => {
                          if (!inquiryName.trim())
                            setNameError("Please enter your name");
                          else setNameError("");
                        },
                        className: "font-body text-sm",
                        "data-ocid": "tour_detail.inquiry_name_input"
                      }
                    ),
                    nameError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs text-destructive",
                        "data-ocid": "tour_detail.inquiry_name_field_error",
                        children: nameError
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "inq-phone",
                        className: "font-body text-xs text-muted-foreground",
                        children: "Phone Number *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "inq-phone",
                        type: "tel",
                        placeholder: "10-digit mobile number",
                        value: inquiryPhone,
                        onChange: (e) => setInquiryPhone(e.target.value),
                        onBlur: () => {
                          if (!/^\d{10}$/.test(inquiryPhone.replace(/\s+/g, "")))
                            setPhoneError("Enter a valid 10-digit phone number");
                          else setPhoneError("");
                        },
                        className: "font-body text-sm",
                        "data-ocid": "tour_detail.inquiry_phone_input"
                      }
                    ),
                    phoneError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs text-destructive",
                        "data-ocid": "tour_detail.inquiry_phone_field_error",
                        children: phoneError
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "inq-message",
                        className: "font-body text-xs text-muted-foreground",
                        children: "Message (optional)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        id: "inq-message",
                        placeholder: "Travel dates, group size, special requests…",
                        value: inquiryMessage,
                        onChange: (e) => setInquiryMessage(e.target.value),
                        rows: 3,
                        className: "font-body text-sm resize-none",
                        "data-ocid": "tour_detail.inquiry_message_textarea"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "submit",
                      className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold gap-2",
                      "data-ocid": "tour_detail.inquiry_submit_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                        "Send Inquiry via WhatsApp"
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      ) })
    ] }) })
  ] });
}
export {
  TourDetail as default
};
