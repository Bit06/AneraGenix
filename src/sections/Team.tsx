import { Dna, Flask, Microscope } from "@phosphor-icons/react";
import { Eyebrow, Reveal, img } from "../components/ui";
import { TEAM_MEMBERS } from "../data";

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-16 pb-16 sm:px-8 lg:pt-24 lg:pb-20">
      {/* Header and Intro */}
      <div className="grid items-end gap-6 md:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal>
            <Eyebrow>Staff Profiles & Expertise</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.045em] text-ink">
              OUR TEAM
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="max-w-[440px] text-[15px] leading-[1.68] text-ink-soft md:ml-auto">
            At AneraGenix Technology, we are a team with different skills that are essential in carrying out our proposed research. We have outlined what our team does below:
          </p>
        </Reveal>
      </div>

      {/* 3 Staff Profiles - Clean Editorial Cards (Zero AI Shadows) */}
      <ul className="mt-12 grid gap-7 md:grid-cols-3">
        {TEAM_MEMBERS.map((p, i) => (
          <Reveal key={p.id} as="li" delay={i * 90}>
            <div className="flex h-full flex-col justify-between rounded-[22px] border border-ink/10 bg-white p-6 sm:p-7.5 transition-all hover:border-brand-deep/40">
              <div>
                {/* Photo & Role Icon */}
                <div className="relative aspect-[4/4.2] overflow-hidden rounded-[16px] border border-ink/10 bg-blush/60">
                  <img
                    src={img(p.photo, 700)}
                    alt={`Portrait of ${p.name}`}
                    loading="lazy"
                    style={{ objectPosition: p.pos }}
                    className="size-full object-cover grayscale contrast-[1.05] transition-all duration-500 hover:scale-105 hover:grayscale-0"
                  />
                  <div className="absolute top-3 right-3 grid size-8 place-items-center rounded-full border border-ink/10 bg-white text-brand-deep">
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

              {/* Technical / Analytical Knowledge Focus Area */}
              <div className="mt-5 border-t border-ink/8 pt-3.5">
                <p className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-muted">
                  Technical & Analytical Scope:
                </p>
                <p className="mt-1 text-[12px] font-mono leading-relaxed text-brand-deep font-semibold">
                  {p.focus}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
