import { Reveal } from "../components/ui";
import { TEAM_MEMBERS } from "../data";

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-16 pb-16 sm:px-8 lg:pt-24 lg:pb-20">
      <div>
        <Reveal>
          <h2 className="text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-ink">
            OUR TEAM
          </h2>
        </Reveal>
      </div>

      <ul className="mt-10 grid gap-7 md:grid-cols-3">
        {TEAM_MEMBERS.map((p, i) => (
          <Reveal key={p.id} as="li" delay={i * 80}>
            <div className="flex h-full flex-col justify-between rounded-[22px] border border-ink/10 bg-white p-6 sm:p-7.5">
              <div>
                <div className="relative aspect-[4/4.2] overflow-hidden rounded-[16px] border border-ink/10 bg-slate-900/5">
                  <img
                    src={p.photo}
                    alt={`Portrait of ${p.name}`}
                    loading="lazy"
                    style={{ objectPosition: p.pos }}
                    className="size-full object-cover"
                  />
                </div>

                <h3 className="mt-5 text-[17px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                  {p.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.7] text-ink-soft">
                  {p.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
