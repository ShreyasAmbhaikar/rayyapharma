import { homeContent } from '@/content/home';

export function AboutSection() {
  return (
    <section className="section-shell pt-xl">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="mb-4 font-h2 text-h2 text-primary">{homeContent.about.heading}</h2>
          <p className="mx-auto max-w-3xl font-body-sm text-body-sm text-on-surface-variant">{homeContent.about.note}</p>
        </div>

        <div className="space-y-6 font-body-md text-body-md text-on-surface-variant">
          {homeContent.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
