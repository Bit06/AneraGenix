import { Reveal } from "../components/ui";
import { SERVICES_CONTENT } from "../data";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <div>
        <Reveal>
          <h2 className="text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-ink">
            {SERVICES_CONTENT.header}
          </h2>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-7 lg:grid-cols-3">
        {SERVICES_CONTENT.services.map((svc, i) => (
          <Reveal key={svc.id} delay={i * 80}>
            <div className="flex h-full flex-col rounded-[22px] border border-ink/12 bg-white p-6 sm:p-8">
              <h3 className="text-[19px] sm:text-[20px] font-semibold tracking-[-0.025em] text-ink">
                {svc.title}
              </h3>

              <div className="mt-4 text-[14px] sm:text-[14.5px] leading-[1.72] text-ink-soft">
                {svc.detail}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
