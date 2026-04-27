import { homeContent } from '@/content/home';

export function AboutSection() {
  return (
    <section className="section-shell pt-xl">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center reveal-up">
          <h2 className="mb-4 font-h2 text-h2 text-primary">{homeContent.about.heading}</h2>
          {homeContent.about.note ? (
            <p className="mx-auto max-w-3xl font-body-sm text-body-sm text-on-surface-variant">{homeContent.about.note}</p>
          ) : null}
        </div>

        <div className="mx-auto max-w-4xl space-y-6 text-center font-body-md text-body-md leading-8 text-on-surface-variant">
          {homeContent.about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`reveal-soft ${index === 0 ? '' : index === 1 ? 'reveal-delay-1' : 'reveal-delay-2'}`}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
