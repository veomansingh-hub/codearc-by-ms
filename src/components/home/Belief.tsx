export function Belief() {
  return (
    <section className="py-32 md:py-48 bg-bone border-t border-soft-grey">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.1] mb-12">
          YOUR CUSTOMER <br className="hidden md:block" />
          HAS ALREADY <br className="hidden md:block" />
          FORMED AN OPINION.
        </h2>
        
        <div className="flex flex-col gap-2 text-xl md:text-2xl font-medium text-graphite mb-12">
          <p>BEFORE THEY CALL.</p>
          <p>BEFORE THEY VISIT.</p>
          <p>BEFORE THEY MESSAGE.</p>
        </div>

        <h3 className="text-3xl md:text-5xl font-display text-accent">
          YOUR WEBSITE <br className="hidden md:block" />
          HELPED FORM IT.
        </h3>

        <p className="mt-12 text-graphite max-w-lg mx-auto">
          We build digital experiences that ensure their first impression matches the actual quality of your business.
        </p>
      </div>
    </section>
  );
}
