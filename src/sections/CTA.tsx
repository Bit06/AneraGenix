import Helix, { type HelixScene } from "../components/Helix";
import { Eyebrow, PillButton } from "../components/ui";

const ctaScene = (w: number): HelixScene => {
  const wide = w >= 768;
  return {
    helices: [
      // Top-left framing strand
      {
        a: [wide ? -0.05 : -0.1, wide ? 0.42 : 0.36],
        b: [wide ? 0.38 : 0.42, wide ? -0.04 : 0.02],
        radius: wide ? 0.055 : 0.07,
        pairs: wide ? 28 : 20,
        turns: wide ? 2.3 : 1.6,
        focus: 0.5,
        dof: 1.0,
        blur: 1,
        speed: 0.16,
        opacity: 0.68,
      },
      // Top-right framing strand
      {
        a: [wide ? 0.62 : 0.58, wide ? -0.04 : 0.02],
        b: [wide ? 1.05 : 1.1, wide ? 0.42 : 0.36],
        radius: wide ? 0.055 : 0.07,
        pairs: wide ? 28 : 20,
        turns: wide ? 2.3 : 1.6,
        focus: 0.5,
        dof: 1.0,
        blur: 1,
        speed: 0.16,
        opacity: 0.68,
      },
    ],
    particles: wide ? 22 : 12,
  };
};

type Props = {
  onOpenConsult?: () => void;
};

export default function CTA({ onOpenConsult }: Props) {
  return (
    <section id="cta" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative isolate overflow-hidden rounded-[24px] border border-brand/15 bg-[radial-gradient(85%_75%_at_50%_40%,#ffffff_0%,#fdeef0_45%,#f6cad0_100%)] ring-1 ring-brand/5">
        {/* Background DNA helices framing top corners */}
        <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)]">
          <Helix scene={ctaScene} animate label="Biological DNA double helix" />
        </div>
        {/* Luminous center glow for text clarity */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.45)_58%,transparent_100%)]" />

        <div className="mx-auto flex min-h-[520px] max-w-[740px] flex-col items-center justify-center px-6 py-20 text-center lg:min-h-[580px]">
          <div>
            <Eyebrow>Get started</Eyebrow>
          </div>

          <h2 className="mt-6 text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1] font-medium tracking-[-0.05em] text-ink">
            Your genome, finally
            <br />
            in plain language.
          </h2>

          <p className="mx-auto mt-6 max-w-[460px] text-[15px] leading-[1.65] text-ink-soft">
            Order a kit today and get your results, a 45-minute counselling call and lifetime report
            updates — all for one price.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <PillButton href="#pricing" variant="brand">
              Start your genome
            </PillButton>
            <PillButton onClick={onOpenConsult} variant="ghost" className="cursor-pointer">
              Talk to a counsellor
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
