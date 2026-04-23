import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const PHONE = "7828587442";
const WHATSAPP_NUMBER = "917828587442";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi! I am interested in your tour packages. Please share more details.",
);

export default function About() {
  return (
    <div className="bg-background" data-ocid="about.page">
      {/* Hero */}
      <div className="bg-card border-b border-border py-16 px-4 text-center">
        <Badge className="bg-primary/15 text-primary border-primary/30 mb-3 font-body text-xs uppercase tracking-widest">
          Our Story
        </Badge>
        <h1 className="font-display text-5xl font-bold text-foreground mb-4">
          About Us
        </h1>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Radhe Radhe Tour and Travels was founded on a simple belief: travel
          should be more than sightseeing — it should be a journey of discovery,
          culture, and connection.
        </p>
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              We craft authentic, immersive journeys across India's most
              breathtaking destinations. From the golden deserts of Rajasthan to
              the tranquil backwaters of Kerala, every trip we design is a love
              letter to this incredible land.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              With over a decade of experience, we combine deep local knowledge
              with personalized service to ensure every traveler returns home
              with stories worth telling.
            </p>
          </div>
          <div className="bg-muted/30 border border-border rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🙏</div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Radhe Radhe
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              The name Radhe Radhe is a sacred greeting — a reminder that every
              journey is a blessing and every traveler is a guest to be
              cherished.
            </p>
          </div>
        </div>

        <Separator />

        {/* Values */}
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌿",
                title: "Authentic",
                desc: "We go beyond tourist spots to reveal the true soul of every destination.",
              },
              {
                icon: "🤝",
                title: "Trustworthy",
                desc: "Transparent pricing, reliable service, and a team that genuinely cares.",
              },
              {
                icon: "⭐",
                title: "Excellence",
                desc: "From handpicked guides to carefully selected accommodations — quality in every detail.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-card"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Stats */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-10">
          <h2 className="font-display text-2xl font-bold text-center mb-8">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "5000+", label: "Happy Travelers" },
              { value: "50+", label: "Tour Packages" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-primary-foreground/75 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Start Your Journey Today
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            Reach us on WhatsApp or call — our team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#1da851] text-white font-body font-semibold transition-smooth shadow-elevated"
              data-ocid="about.whatsapp_button"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp: {PHONE}
            </a>
            <a
              href={`tel:+91${PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold transition-smooth"
              data-ocid="about.call_button"
            >
              📞 Call: {PHONE}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
