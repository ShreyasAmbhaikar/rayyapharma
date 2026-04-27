export function OurStoryPageContent() {
  return (
    <div className="bg-background text-on-background antialiased selection:bg-secondary selection:text-on-secondary">
      <section className="section-shell py-xl">
        <div className="mx-auto max-w-4xl">
          <span className="mb-sm block font-label-caps text-label-caps text-secondary reveal-fade">Our Story</span>
          <h1 className="mb-md font-h1 text-h1 text-primary reveal-up reveal-delay-1">Built with purpose, guided by trust.</h1>
          <p className="max-w-3xl font-body-lg text-body-lg text-on-surface-variant reveal-up reveal-delay-2">
            Rayya Pharma began with a simple belief: quality healthcare products should reach doctors and patients
            through dependable relationships, responsible sourcing, and a commitment to consistency.
          </p>
        </div>
      </section>

      <section className="border-y border-outline-variant/30 bg-surface-container-low">
        <div className="section-shell grid grid-cols-1 gap-lg py-xl md:grid-cols-3">
          <article className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest/70 p-8 shadow-sm reveal-soft">
            <h2 className="mb-3 font-h3 text-h3 text-primary">How We Started</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              What started as a small idea grew from conversations with healthcare professionals who needed reliable
              access to trusted pharmaceutical products. Those early insights shaped Rayya Pharma into a company
              focused on practical service, strong market understanding, and long-term credibility.
            </p>
          </article>

          <article className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest/70 p-8 shadow-sm reveal-soft reveal-delay-1">
            <h2 className="mb-3 font-h3 text-h3 text-primary">What Drives Us</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We are building a brand that values professionalism, consistency, and trust. Every decision is guided by
              the goal of supporting better everyday healthcare delivery through dependable products and responsive
              service.
            </p>
          </article>

          <article className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest/70 p-8 shadow-sm reveal-soft reveal-delay-2">
            <h2 className="mb-3 font-h3 text-h3 text-primary">Where We Are Headed</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              As a growing company, our vision is to expand thoughtfully, strengthen our network, and become a trusted
              name for healthcare professionals looking for quality-focused pharmaceutical solutions backed by reliable
              support.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
