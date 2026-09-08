const OUTCOMES = [
  "GET NOTICED",
  "LOOK ESTABLISHED",
  "BUILD TRUST",
  "EXPLAIN THE OFFER",
  "GENERATE ENQUIRIES",
  "MAKE BOOKING EASY",
  "SELL ONLINE",
  "CONNECT TO WHATSAPP",
  "REDUCE ADMIN"
];

export function Range() {
  return (
    <section className="py-24 md:py-32 bg-soft-grey overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-display mb-16 max-w-2xl">
          A GOOD WEBSITE <br />
          SHOULD DO MORE <br />
          THAN LOOK GOOD.
        </h2>

        <div className="flex flex-wrap gap-4 md:gap-6">
          {OUTCOMES.map((outcome, i) => (
            <div 
              key={i}
              className="border border-graphite/20 px-6 py-4 rounded-full text-sm md:text-base font-bold tracking-widest uppercase bg-bone/50 backdrop-blur-sm"
            >
              {outcome}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
