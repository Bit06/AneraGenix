import { CheckCircle } from "@phosphor-icons/react";
import { Reveal } from "../components/ui";
import { ABOUT_CONTENT } from "../data";
import { IMAGES } from "../assets/images";

export default function About() {
  const { whoAreWe, whyCrispr, ourAims } = ABOUT_CONTENT;

  return (
    <section id="about" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      {/* Section Title */}
      <Reveal>
        <p className="font-mono text-[12px] font-bold tracking-[0.14em] text-brand-deep uppercase">
          About
        </p>
      </Reveal>

      {/* Part 1: Who are we? */}
      <div className="mt-4 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <Reveal delay={60}>
            <h2 className="text-[clamp(2.1rem,4vw,3.2rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-ink">
              {whoAreWe.title}
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4 text-[15px] sm:text-[15.5px] leading-[1.72] text-ink-soft">
            {whoAreWe.paragraphs.map((p, idx) => (
              <Reveal key={idx} delay={80 + idx * 40}>
                <p className="rounded-xl border border-ink/10 bg-white p-5">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Figure 2 */}
        <Reveal delay={120} className="relative">
          <figure className="overflow-hidden rounded-[22px] border border-ink/10 bg-white p-3">
            <img
              src={IMAGES.figure2}
              alt="shows powdery mildew symptoms on wheat leaves, cause by the Blumeria graminis f. sp. tritici"
              className="aspect-[4/3] w-full rounded-[16px] object-cover"
              loading="lazy"
            />
            <figcaption className="px-2 pt-3 pb-1">
              <p className="text-[13px] font-semibold text-ink leading-snug">
                Figure 2: shows powdery mildew symptoms on wheat leaves, cause by the Blumeria graminis f. sp. tritici.
              </p>
              <p className="mt-1 text-[11.5px] font-mono text-muted">
                Source: Nebraska Wheat Board (n.d.).
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* Part 2: Why CRISPR-Cas9? */}
      <div className="mt-16 sm:mt-24">
        <Reveal>
          <div className="max-w-[760px]">
            <h2 className="text-[clamp(2rem,3.8vw,3rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-ink">
              {whyCrispr.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {whyCrispr.paragraphs.map((p, idx) => (
            <Reveal key={idx} delay={idx * 60}>
              <div className="flex h-full flex-col rounded-[20px] border border-ink/10 bg-white p-6 sm:p-7">
                <p className="text-[14px] sm:text-[14.5px] leading-[1.72] text-ink-soft">
                  {p}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Part 3: OUR AIMS */}
      <div className="mt-16 sm:mt-24 rounded-[24px] border border-brand-deep/20 bg-gradient-to-br from-white via-[#f3fafb] to-[#e4f4f7] p-7 sm:p-10 lg:p-12">
        <Reveal>
          <div className="max-w-[700px]">
            <h2 className="text-[clamp(2.1rem,3.6vw,2.9rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-ink">
              {ourAims.title}
            </h2>
            <p className="mt-3.5 text-[15px] sm:text-[16px] text-ink-soft font-medium">
              {ourAims.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3.5 sm:gap-4 md:grid-cols-2">
          {ourAims.points.map((point, idx) => (
            <Reveal key={idx} delay={idx * 40}>
              <div className="flex h-full items-start gap-3.5 rounded-[16px] border border-ink/10 bg-white p-5">
                <div className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-deep/10 text-brand-deep mt-0.5">
                  <CheckCircle size={18} weight="bold" />
                </div>
                <p className="text-[14px] leading-[1.65] text-ink font-medium">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
