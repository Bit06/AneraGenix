import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { Eyebrow, Notch, PillButton, Reveal } from "../components/ui";
import { PLANS } from "../data";

const RATES: Record<string, { symbol: string; rate: number }> = {
  EUR: { symbol: "€", rate: 1 },
  USD: { symbol: "$", rate: 1.08 },
  GBP: { symbol: "£", rate: 0.85 },
};

type Props = {
  onOpenConsult?: () => void;
};

export default function Pricing({ onOpenConsult }: Props) {
  const [currency, setCurrency] = useState<"EUR" | "USD" | "GBP">("EUR");
  const { symbol, rate } = RATES[currency];

  return (
    <section id="pricing" className="bg-[#fcf7f7]">
      <div className="mx-auto max-w-[1400px] px-5 pt-8 pb-20 sm:px-8 lg:pt-10 lg:pb-24">
        <div className="text-center">
          <Reveal>
            <Eyebrow>Transparent Pricing</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mx-auto mt-6 max-w-[760px] text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-medium tracking-[-0.045em] text-ink">
              One price. <span className="text-ink/80 font-normal">Counseling and lifetime updates included.</span>
            </h2>
          </Reveal>
          <Reveal delay={140} className="mt-6 flex justify-center">
            {/* Currency Selector */}
            <div className="inline-flex rounded-full bg-white p-1 ring-1 ring-ink/8 shadow-sm">
              {(["EUR", "USD", "GBP"] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  className={`rounded-full px-3.5 py-1 text-[12px] font-mono font-medium transition-all ${
                    currency === c ? "bg-ink text-white shadow-sm" : "text-muted hover:text-ink"
                  }`}
                >
                  {c} ({RATES[c].symbol})
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {PLANS.map((p, i) => {
            const convertedPrice = Math.round(p.price * rate);
            return (
              <Reveal key={p.name} delay={i * 90} as="article">
                <div
                  className={`cutout-tr relative flex h-full flex-col rounded-[26px] p-7.5 transition-all duration-300 lg:p-8.5 ${
                    p.featured
                      ? "bg-[#110d0f] text-white shadow-[0_40px_90px_-35px_rgba(70,5,20,0.85)] ring-1 ring-white/10"
                      : "bg-paper text-ink ring-1 ring-ink/8 hover:ring-brand/30 transition-all"
                  }`}
                >
                  <Notch
                    borderColor={p.featured ? "rgba(255,255,255,0.2)" : "rgba(20,16,18,0.08)"}
                    dotColor="bg-brand"
                  />
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-[17px] font-medium">{p.name}</h3>
                    {p.featured && (
                      <span className="rounded-full bg-brand px-2.5 py-0.5 font-mono text-[9.5px] font-semibold tracking-wider uppercase text-white shadow-sm">
                        Most chosen
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-[13.5px] leading-[1.6] ${
                      p.featured ? "text-white/75" : "text-ink-soft"
                    }`}
                  >
                    {p.blurb}
                  </p>
                  <p className="mt-8 flex items-baseline gap-2">
                    <span className="text-[54px] leading-none font-medium tracking-[-0.05em]">
                      {symbol}{convertedPrice}
                    </span>
                    <span className={`text-[12.5px] ${p.featured ? "text-white/60" : "text-ink-soft"}`}>
                      {p.note}
                    </span>
                  </p>
                  <ul
                    className={`mt-8 flex-1 space-y-3.5 border-t pt-7 ${
                      p.featured ? "border-white/12" : "border-ink/8"
                    }`}
                  >
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                        <CheckCircle size={17} weight="fill" className="mt-0.5 shrink-0 text-brand" />
                        <span className={p.featured ? "text-white/85" : "text-ink-soft"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <PillButton
                    onClick={onOpenConsult}
                    variant={p.featured ? "brand" : "light"}
                    className="mt-9 justify-between cursor-pointer"
                  >
                    {p.featured ? "Start your genome" : "Choose " + p.name.toLowerCase()}
                  </PillButton>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
