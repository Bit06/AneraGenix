import { Reveal } from "../components/ui";
import { CASE_STUDY_CONTENT } from "../data";
import { IMAGES } from "../assets/images";

export default function CaseStudy() {
  const { header, disease, genes, crisprUsed, furtherResearch } =
    CASE_STUDY_CONTENT;

  return (
    <section id="case-study" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      {/* Main Title */}
      <div>
        <Reveal>
          <h2 className="text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-ink">
            {header}
          </h2>
        </Reveal>
      </div>

      {/* Part 1: Disease & Identifying the genes involved in resistance */}
      <div className="mt-10 grid gap-7 lg:grid-cols-2">
        <Reveal delay={60}>
          <div className="flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-6 sm:p-8">
            <h3 className="text-[20px] sm:text-[21px] font-semibold tracking-[-0.02em] text-ink">
              {disease.title}
            </h3>
            <p className="mt-4 text-[14.5px] sm:text-[15px] leading-[1.72] text-ink-soft">
              {disease.text}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-6 sm:p-8">
            <h3 className="text-[20px] sm:text-[21px] font-semibold tracking-[-0.02em] text-ink">
              {genes.title}
            </h3>
            <p className="mt-4 text-[14.5px] sm:text-[15px] leading-[1.72] text-ink-soft">
              {genes.text}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Part 2: How has CRISPR-Cas9 been used */}
      <div className="mt-12 rounded-[24px] border border-ink/10 bg-paper p-6 sm:p-9 lg:p-11">
        <Reveal>
          <h3 className="text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-ink">
            {crisprUsed.title}
          </h3>
        </Reveal>

        <div className="mt-6 space-y-4 text-[15px] sm:text-[15.5px] leading-[1.75] text-ink-soft">
          {crisprUsed.paragraphs.map((p, idx) => (
            <Reveal key={idx} delay={idx * 50}>
              <p className="rounded-xl border border-ink/8 bg-white p-5.5">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Figures 4 and 5 */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delay={80}>
            <figure className="overflow-hidden rounded-[20px] border border-ink/10 bg-white p-3.5 h-full flex flex-col justify-between">
              <div className="flex items-center justify-center rounded-[14px] bg-[#f8fafc] p-2 border border-ink/5 flex-1">
                <img
                  src={IMAGES.figure3}
                  alt="shows an overview of the CRISPR/CAS genome-editing mechanism in plant cells"
                  className="max-h-[300px] w-auto object-contain rounded-[10px]"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-2 pt-3 pb-1 border-t border-ink/8 mt-3">
                <p className="text-[13px] font-semibold text-ink leading-snug">
                  Figure 4: shows an overview of the CRISPR/CAS genome-editing mechanism in plant cells.
                </p>
                <p className="mt-1 text-[11.5px] font-mono text-muted">
                  Source: kaur et al. (2025), Figure 3
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-[20px] border border-ink/10 bg-white p-3.5 h-full flex flex-col justify-between">
              <div className="flex items-center justify-center rounded-[14px] bg-[#f8fafc] p-2 border border-ink/5 flex-1">
                <img
                  src={IMAGES.figure4}
                  alt="shows a reduction in powdery mildew symptom in CRISPR-Cas9 -edited TaEDR1 wheat mutant compared with unedited control plants"
                  className="max-h-[300px] w-auto object-contain rounded-[10px]"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-2 pt-3 pb-1 border-t border-ink/8 mt-3">
                <p className="text-[13px] font-semibold text-ink leading-snug">
                  Figure 5: shows a reduction in powdery mildew symptom in CRISPR-Cas9 -edited TaEDR1 wheat mutant compared with unedited control plants
                </p>
                <p className="mt-1 text-[11.5px] font-mono text-muted">
                  Source: cropped from (Zhang et al., 2017, figure 6D)
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Part 3: What does further research show? */}
        <div className="mt-8 rounded-xl border border-brand-deep/20 bg-white p-6">
          <h4 className="text-[18.5px] font-semibold text-ink">
            {furtherResearch.title}
          </h4>
          <p className="mt-2.5 text-[14.5px] sm:text-[15px] leading-[1.72] text-ink-soft">
            {furtherResearch.text}
          </p>
        </div>
      </div>
    </section>
  );
}
