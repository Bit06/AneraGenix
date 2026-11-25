import { ArrowRight, Dna, Plant, ShieldCheck, Sparkle } from "@phosphor-icons/react";
import Helix, { type HelixScene } from "../components/Helix";
import { useCountUp, useInView } from "../components/ui";
import { LANDING_CONTENT, COMPANY_INFO } from "../data";

const heroScene = (w: number, h: number): HelixScene => {
  if (w / h > 0.9 && w > 520) {
    return {
      helices: [
        {
          a: [0.18, 0.9],
          b: [0.92, 0.1],
          radius: 0.125,
          pairs: 24,
          turns: 2.1,
          focus: 0.52,
          dof: 0.72,
          speed: 0.26,
        },
      ],
      particles: 14,
      particleBox: [0.1, 0, 1, 1],
    };
  }
  return {
    helices: [
      {
        a: [0.12, 0.88],
        b: [0.88, 0.12],
        radius: 0.12,
        pairs: 20,
        turns: 1.8,
        focus: 0.5,
        dof: 0.7,
        speed: 0.24,
      },
    ],
    particles: 10,
  };
};

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 84;
      const targetTop = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink/8 bg-[radial-gradient(120%_95%_at_80%_18%,#e6f6f8_0%,#f2fafb_44%,var(--color-paper)_78%)]"
    >
      <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-14 sm:px-8 sm:pt-34 lg:pt-42 lg:pb-20">
        <div className="relative z-30 max-w-[900px]">
          {/* Scientific Topic Pill */}
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-brand-deep/30 bg-white px-3.5 py-1.5 text-[11.5px] sm:text-[12px] font-semibold text-brand-deep animate-[rise_1.1s_var(--ease-out-expo)_both]">
            <Dna size={14} weight="bold" className="text-brand-deep shrink-0" />
            <span>CRISPR-Cas9 Multiplex Editing in Wheat</span>
            <span className="size-1 rounded-full bg-brand-deep shrink-0 max-sm:hidden" />
            <span className="font-mono text-[11px] text-muted shrink-0 max-sm:hidden">{COMPANY_INFO.gene} Target</span>
          </div>

          {/* Verbatim Headline */}
          <h1 className="mt-6 sm:mt-7 text-[clamp(2.3rem,6.2vw,5.6rem)] leading-[1.04] sm:leading-[0.98] font-semibold tracking-[-0.04em] text-ink break-words">
            <span className="block animate-[rise_1.1s_var(--ease-out-expo)_both]">
              {LANDING_CONTENT.headline.split("THROUGH")[0]}THROUGH
            </span>
            <span className="block animate-[rise_1.1s_var(--ease-out-expo)_0.1s_both] bg-gradient-to-r from-brand-deep via-[#03788f] to-[#048fa5] bg-clip-text text-transparent">
              GENETIC RESEARCH
            </span>
          </h1>

          {/* Verbatim Body Paragraph */}
          <p className="relative z-10 mt-6 max-w-[620px] animate-[rise_1.1s_var(--ease-out-expo)_0.2s_both] text-[15.5px] sm:text-[16.5px] leading-[1.68] text-ink-soft">
            {LANDING_CONTENT.body}
          </p>

          {/* EXPLORE OUR RESEARCH - Verbatim Section & Tabs */}
          <div className="relative z-40 mt-9 sm:mt-11 animate-[rise_1.1s_var(--ease-out-expo)_0.3s_both]">
            <p className="font-mono text-[11.5px] font-bold tracking-[0.14em] text-brand-deep uppercase">
              {LANDING_CONTENT.exploreTitle}
            </p>
            <div className="mt-3.5 flex flex-wrap gap-2.5">
              {LANDING_CONTENT.exploreItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white px-4 py-2.5 text-[13px] sm:text-[13.5px] font-medium text-ink transition-all hover:border-ink hover:bg-ink hover:text-white active:scale-95"
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    size={13}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Animated DNA Helix */}
        <div className="relative -mx-5 h-[340px] sm:-mx-8 sm:h-[460px] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[38%] lg:mx-0 lg:h-auto pointer-events-none">
          <Helix scene={heroScene} animate label="Animated CRISPR DNA double helix in cyan and teal" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper via-paper/60 to-transparent lg:h-48" />
        </div>

        {/* Scientific Key Indicators & Empirical Overview */}
        <Stats />
      </div>
    </section>
  );
}

function Stats() {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);
  const plants = useCountUp(207, inView, 1200);
  const mutants = useCountUp(5, inView, 900);
  const genes = useCountUp(3, inView, 700);

  return (
    <div
      ref={ref}
      className="relative z-20 mt-14 grid gap-px overflow-hidden rounded-[20px] bg-ink/10 border border-ink/12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4"
    >
      <div className="bg-white px-5 py-5 sm:px-6">
        <div className="flex items-baseline gap-2">
          <span className="text-[34px] sm:text-[40px] leading-none font-semibold tracking-[-0.04em] tabular-nums text-ink">
            {Math.round(plants)}
          </span>
          <span className="text-[12px] font-mono text-brand-deep font-bold">T1 Plants</span>
        </div>
        <p className="mt-2 text-[12px] leading-snug text-muted">
          Screened for targeted CRISPR-Cas9 homoeologue mutations (Zhang et al., 2017)
        </p>
      </div>

      <div className="bg-white px-5 py-5 sm:px-6">
        <div className="flex items-baseline gap-2">
          <span className="text-[34px] sm:text-[40px] leading-none font-semibold tracking-[-0.04em] tabular-nums text-ink">
            {Math.round(mutants)}
          </span>
          <span className="text-[12px] font-mono text-brand-deep font-bold">Triple Mutants</span>
        </div>
        <p className="mt-2 text-[12px] leading-snug text-muted">
          Homozygous frameshift knockouts identified across all three subgenomes
        </p>
      </div>

      <div className="bg-white px-5 py-5 sm:px-6">
        <div className="flex items-baseline gap-2">
          <span className="text-[34px] sm:text-[40px] leading-none font-semibold tracking-[-0.04em] tabular-nums text-ink">
            {Math.round(genes)}
          </span>
          <span className="text-[12px] font-mono text-brand-deep font-bold">Homoeologues</span>
        </div>
        <p className="mt-2 text-[12px] leading-snug text-muted">
          TaEDR1-1A, TaEDR1-1B, and TaEDR1-1D simultaneously targeted
        </p>
      </div>

      <div className="bg-white px-5 py-5 sm:px-6 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-2 text-brand-deep font-semibold text-[13px]">
          <Plant size={18} weight="duotone" className="text-brand-deep shrink-0" />
          <span>Powdery Mildew</span>
        </div>
        <p className="mt-2 text-[12px] leading-snug text-muted">
          Pathogen: <span className="italic">Blumeria graminis f. sp. tritici (Bgt)</span>. Improved defense confirmed by microcolony reduction.
        </p>
      </div>
    </div>
  );
}
