import { ArrowRight } from "@phosphor-icons/react";
import { LANDING_CONTENT } from "../data";
import { IMAGES } from "../assets/images";

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
      <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-16 sm:px-8 sm:pt-34 lg:pt-36 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column: Headline, Body, Exploration Navigation */}
          <div className="relative z-30 max-w-[800px]">
            {/* Verbatim Headline */}
            <h1 className="text-[clamp(2.3rem,5.6vw,5.2rem)] leading-[1.04] sm:leading-[0.98] font-semibold tracking-[-0.04em] text-ink break-words">
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
            <div className="relative z-40 mt-8 sm:mt-10 animate-[rise_1.1s_var(--ease-out-expo)_0.3s_both]">
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

          {/* Right Column: Figure 1 */}
          <div className="relative animate-[rise_1.1s_var(--ease-out-expo)_0.25s_both]">
            <figure className="overflow-hidden rounded-[22px] border border-ink/12 bg-white p-3">
              <img
                src={IMAGES.figure1}
                alt="wheat the crop being investigate in this study"
                className="aspect-[4/3] w-full rounded-[16px] object-cover"
                loading="eager"
              />
              <figcaption className="px-2 pt-3 pb-1">
                <p className="text-[13.5px] font-semibold text-ink leading-snug">
                  Figure 1: wheat the crop being investigate in this study
                </p>
                <p className="mt-1 text-[11.5px] font-mono text-muted">
                  Source: (UK flour millers)
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
