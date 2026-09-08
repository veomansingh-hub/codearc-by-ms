
const SERVICES = [
  {
    num: "01",
    title: "WEBSITES",
    desc: "Custom commercial websites for businesses that need stronger presentation, credibility and enquiries.",
  },
  {
    num: "02",
    title: "WEBSITE REDESIGN",
    desc: "Transform outdated or underperforming websites into modern digital experiences.",
  },
  {
    num: "03",
    title: "ECOMMERCE",
    desc: "Product-led stores focused on presentation, mobile shopping and conversion.",
  },
  {
    num: "04",
    title: "BOOKING & ENQUIRY EXPERIENCES",
    desc: "Hotel enquiries, restaurant reservations, consultations, quotes and custom lead journeys.",
  },
  {
    num: "05",
    title: "WEB APPLICATIONS",
    desc: "Dashboards, portals and workflow applications.",
  },
  {
    num: "06",
    title: "BUSINESS SOFTWARE",
    desc: "Restaurant, hotel, clinic and operational systems.",
  },
  {
    num: "07",
    title: "AUTOMATION & INTEGRATIONS",
    desc: "Payments, WhatsApp, APIs, analytics and operational automation.",
  }
];

const INDUSTRIES = [
  { name: "HOSPITALITY", details: "Story · Rooms · Experiences · Direct Enquiry" },
  { name: "RESTAURANTS", details: "Menu · Atmosphere · Reservations · WhatsApp" },
  { name: "TRAVEL", details: "Destination · Experiences · Trust · Booking" },
  { name: "AUTOMOTIVE", details: "Services · Credibility · Booking · Calls" },
  { name: "HEALTHCARE", details: "Trust · Treatments · Doctors · Appointment" },
  { name: "EDUCATION", details: "Institution · Admissions · Information · Enquiry" },
  { name: "TRADES", details: "Projects · Proof · Services · Quote" },
  { name: "ECOMMERCE", details: "Product · Story · Purchase" },
  { name: "PROFESSIONAL", details: "Expertise · Credibility · Leads" },
];

export function ServicesIndustries() {
  return (
    <section className="py-24 md:py-32 bg-bone">
      <div className="container mx-auto px-4 md:px-8">
        {/* Services */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-6xl font-display mb-16">WHAT WE BUILD.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {SERVICES.map((service) => (
              <div key={service.num} className="border-t border-soft-grey pt-6">
                <span className="text-xs font-bold text-graphite mb-4 block">{service.num}</span>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-graphite text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display mb-6">
              WE DON&apos;T BUILD <br />
              THE SAME WEBSITE <br />
              FOR EVERY BUSINESS.
            </h2>
            <p className="text-graphite">
              Every industry has a different conversion goal. We design the journey to match it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="bg-soft-grey/50 p-8 rounded-2xl">
                <h4 className="text-lg font-bold mb-2">{ind.name}</h4>
                <p className="text-sm text-graphite">{ind.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
