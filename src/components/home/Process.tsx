const PROCESS_STEPS = [
  { num: "01", title: "UNDERSTAND", desc: "Understand the business, customer and problem." },
  { num: "02", title: "DIRECT", desc: "Define the story, content hierarchy and conversion journey." },
  { num: "03", title: "DESIGN", desc: "Create the visual experience." },
  { num: "04", title: "BUILD", desc: "Responsive production-quality implementation." },
  { num: "05", title: "REFINE", desc: "Real-device QA, interaction tuning and performance optimisation." },
  { num: "06", title: "LAUNCH", desc: "Launch and continue supporting the product." },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-bone">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl md:text-6xl font-display leading-[1.1] mb-8">
            NO SALES PERSON <br />
            BETWEEN YOU <br />
            AND THE PEOPLE <br />
            BUILDING IT.
          </h2>
          <p className="text-xl text-graphite font-medium">
            DIRECT ACCESS. FEWER LAYERS. MORE ATTENTION.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="relative">
              <span className="text-6xl md:text-8xl font-display text-soft-grey/40 absolute -top-8 -left-4 z-0">
                {step.num}
              </span>
              <div className="relative z-10 pt-4">
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{step.title}</h3>
                <p className="text-graphite text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
