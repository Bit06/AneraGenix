import { Dna, Flask, Info, Microscope } from "@phosphor-icons/react";
import { Reveal } from "../components/ui";
import { TEAM_MEMBERS } from "../data";

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-16 pb-16 sm:px-8 lg:pt-24 lg:pb-20">
      {/* Header */}
      <div>
        <Reveal delay={80}>
          <h2 className="text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-ink">
            OUR TEAM
          </h2>
        </Reveal>
      </div>

      {/* 3 Staff Profiles - Clean Editorial Cards (Zero AI Shadows) */}
      <ul className="mt-12 grid gap-7 md:grid-cols-3">
        {TEAM_MEMBERS.map((p, i) => (
          <Reveal key={p.id} as="li" delay={i * 90}>
            <div className="flex h-full flex-col justify-between rounded-[22px] border border-ink/10 bg-white p-6 sm:p-7.5 transition-all hover:border-brand-deep/40">
              <div>
                {/* Photo & Role Icon */}
                <div className="relative aspect-[4/4.2] overflow-hidden rounded-[16px] border border-ink/10 bg-slate-900/5">
                  <img
                    src={p.photo}
                    alt={`Portrait of ${p.name}`}
                    loading="lazy"
                    style={{ objectPosition: p.pos }}
                    className="size-full object-cover transition-all duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 grid size-8 place-items-center rounded-full border border-ink/10 bg-white/95 text-brand-deep shadow-xs backdrop-blur-xs">
                    {i === 0 ? <Dna size={16} /> : i === 1 ? <Microscope size={16} /> : <Flask size={16} />}
                  </div>
                </div>

                {/* Verbatim Title: "1. Dr Amelia caterer – lead plant molecular geneticist." */}
                <h3 className="mt-5 text-[18px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                  {p.title}
                </h3>

                {/* Role Pill */}
                <div className="mt-2.5">
                  <span className="inline-block rounded-full border border-brand-deep/20 bg-brand-deep/5 px-3 py-1 font-mono text-[11px] font-bold text-brand-deep">
                    {p.role}
                  </span>
                </div>

                {/* Verbatim Description of Duties */}
                <p className="mt-3.5 text-[14px] sm:text-[14.5px] leading-[1.7] text-ink-soft">
                  {p.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      {/* Stock Image Disclaimer */}
      <Reveal delay={200}>
        <div className="mt-8 rounded-xl border border-ink/10 bg-white p-4 sm:p-5 flex items-start sm:items-center gap-3">
          <Info size={18} weight="bold" className="text-brand-deep shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-muted">
            <span className="font-semibold text-ink">Disclaimer:</span> The staff photographs are illustrated stock images gotten from pixabay. They do not represent the real team members.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
