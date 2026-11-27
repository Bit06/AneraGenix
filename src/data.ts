/**
 * AneraGenix Technology Data Source
 * Content for Portfolio Assessment 1 — Website Design
 * Focus: Wheat (Triticum aestivum), Powdery Mildew (Blumeria graminis f. sp. tritici),
 * Multiplex CRISPR-Cas9 targeting TaEDR1 homoeologues (TaEDR1-1A, 1B, 1D).
 */

import { IMAGES } from "./assets/images";

export const COMPANY_INFO = {
  name: "AneraGenix Technology",
  fullName: "AneraGenix Technology.",
  disease: "powdery mildew",
  pathogen: "Blumeria graminis f. sp. tritici. (Bgt)",
  gene: "TaEDR1",
  homoeologues: ["TaEDR1-1A", "TaEDR1-1B", "TaEDR1-1D"],
  approach: "Multiplex editing of three TaEDR1 using CRISPR-Cas9",
  aim: "investigating how plant genes can allow production of healthier crops with improved disease resistance.",
};

export const NAV = [
  { id: "about", label: "About the company" },
  { id: "services", label: "Products and services" },
  { id: "methodology", label: "Our methodology" },
  { id: "case-study", label: "Case study" },
  { id: "team", label: "Meet our team" },
  { id: "references", label: "References" },
];

export const LANDING_CONTENT = {
  headline: "IMPROVING CROP HEALTH THROUGH GENETIC RESEARCH",
  body: "At AneraGenix Technology, we investigate how CRISPR-Cas9 can be used to study genetic factors involved in wheat resistance to powdery mildew.",
  exploreTitle: "EXPLORE OUR RESEARCH",
  exploreItems: [
    { id: "about", label: "About the company" },
    { id: "services", label: "Products and services" },
    { id: "methodology", label: "Our methodology" },
    { id: "case-study", label: "Case study" },
    { id: "team", label: "Meet our team" },
    { id: "references", label: "References" },
  ],
};

export const ABOUT_CONTENT = {
  whoAreWe: {
    title: "Who are we?",
    paragraphs: [
      "AneraGenix Technology is a fictional molecular genetic company investigating how genetic changes could influence plant growth, quality and resistance to disease. (Wu and Xue, 2025).",
      "Powdery mildew is caused by a fungal pathogen called Blumeria graminis f. sp. tritici. (Bgt) (Wu and Xue, 2025).",
      "Our research will focus on the TaEDR1 gene, which has been investigated for its function in wheat's response to powdery mildew (Zhang et al., 2017). We aim to investigate whether reducing TaEDR1 activity could improve disease resistance.",
    ],
  },
  whyCrispr: {
    title: "Why CRISPR-Cas9?",
    paragraphs: [
      "CRISPR-Cas9 was selected because it allows the targeting of specific DNA sequences and introduces genetic changes that can influence how plants respond to diseases (Gostimskaya, 2022). Earlier genome editing methods, such as zinc-finger nucleases (ZFNs) and transcription activator-like effector nucleases (TALENs), can also make targeted changes to DNA.",
      "CRISPR-Cas9 can modify multiple genetic targets in one experiment, this is known as 'multiplex genome editing'. This is important in bread wheat because its hexaploid genome contains three related sub genomes (A, B, and D). Each TaEDR1 gene has similar copies known as homoeologues, which may perform similar functions. Editing just one gene might have a little effect because the other copies could still maintain their gene function (Li et al., 2021).",
      "CRISPR-Cas9 has limitations which include the possibility of introducing unwanted mutations at DNA sites (Sturme et al., 2022). Therefore, edited plants must be screened to confirm the intended genetic changes and also identify unintended changes (Sturme et al., 2022).",
    ],
  },
  ourAims: {
    title: "OUR AIMS",
    intro: "At AneraGenix Technology, our proposed research aims to:",
    points: [
      "Investigate the role of TaEDR1 in wheat defense against powdery mildew.",
      "Investigate how mutations would influence gene activity and wheat resistance to infection.",
      "Assess the benefits and limitations of CRISPR-Cas9 genome editing for developing disease resistant crops.",
    ],
  },
};

export const SERVICES_CONTENT = {
  header: "PRODUCTS AND SERVICES",
  intro:
    "At AneraGenix Technology we propose to offer three research services. Our services include genome editing with molecular examination and plant study.",
  services: [
    {
      id: "crispr-editing",
      number: "1",
      title: "1. CRISPR-Cas9 genome editing",
      detail:
        "Our proposed wheat research focuses on the three TaEDR1 homoeologues. We use multiplex genomes editing to target these related gene copies and investigate whether reducing their functions may affect the plant's defense against powdery mildew (Li et al., 2021).",
      tag: "Homoeologue Multiplexing",
      subgenome: "Subgenomes A, B & D Target",
    },
    {
      id: "molecular-screening",
      number: "2",
      title: "2. Molecular screening and genetic analysis",
      detail:
        "Our service includes polymerase chain reaction (PCR) to amplify DNA, restriction enzyme analysis to identify certain changes, and DNA sequencing to examine targeted DNA regions after genome editing. (Tsakirpaloglou et al., 2023).",
      tag: "PCR & Sequencing",
      subgenome: "Target Validation & Sanger/NGS",
    },
    {
      id: "resistance-evaluation",
      number: "3",
      title: "3. Disease resistance evaluation.",
      detail:
        "We propose comparing edited wheat plants with non-edited wheat plants after their exposure to powdery mildew by observing fungal growth, counting the visible powdery mildew microcolonies, and examining other disease symptoms. Zhang et al. (2017) found fewer micro colonies in plants with mutations in all three TaEDR1 homoeologues compared to the unedited plants.",
      tag: "Phenotyping & Bioassay",
      subgenome: "Microcolony Inoculation Assay",
    },
  ],
};

export const METHODOLOGY_CONTENT = {
  header: "OUR METHODOLOGY",
  intro:
    "CRISPR-Cas9 allows scientists to make certain changes to DNA. It originated from a natural bacterial defense system and was developed into a genome editing tool that uses guide RNA (gRNA) to direct the Cas9 enzyme towards a selected DNA sequence (Innovative Genomics Institute, 2026; Jinek et al., 2012, Gostimskaya, 2022).",
  howItWorks: {
    title: "How does this technique work?",
    steps: [
      {
        num: "01",
        label: "Guide RNA Design & PAM Recognition",
        text: "The first stages involve designing a guide RNA (gRNA) complementary to the DNA region that is investigated. Then a protospacer adjacent motif (PAM) must be next to a short DNA sequence recognised by SpCas9 with the code 5'-NGG-3' (Přibylová and Fischer, 2024).",
      },
      {
        num: "02",
        label: "Target Cleavage & Double Strand Break",
        text: "Once the target has been located, Cas9 cuts both strands of the DNA double helix. The HNH and RuvC domains cut opposite DNA strands to produce a double strand break (Babu et al., 2021).",
      },
      {
        num: "03",
        label: "Cellular DNA Repair (NHEJ/HDR)",
        text: "After the DNA cuts, the cell tries to repair the damage through natural repair mechanisms. The non-homologous end joining (NHEJ) would introduce insertions or deletions of DNA bases, which may cause a frameshift or affect how genes work. Homology directed repair (HDR) uses a donor DNA template to introduce a specific genetic change; although it is less efficient in plant cells (Asmamaw and Zawdie, 2021; Tsakirpaloglou et al., 2023).",
      },
    ],
  },
  whySelected: {
    title: "Why have we selected this approach?",
    text: "We choose CRISPR-Cas9 because It allows us to investigate how TaEDR1 affects powdery mildew resistance in wheat, target related gene copies and examine the genetic changes that may occur (Tsakirpaloglou et al., 2023 ; Zhang et al., 2017).",
  },
};

export const CASE_STUDY_CONTENT = {
  header: "CASE STUDY",
  disease: {
    title: "Understanding the disease.",
    text: "Powdery mildew is a fungal disease that appears whitish, cotton like patches on the surfaces of wheat leaves. Severe infection can affect plant growth and reduce the overall productivity (University of California Statewide Integrated Pest Management Program, 2026).",
  },
  genes: {
    title: "Identifying the genes involved in resistance",
    text: "Researchers have investigated the genetic factors that are linked with resisting powdery mildew in wheat using the quantitative trait locus (QTL) meta- analysis. Sharma et al (2024) analysed 222 QTLs from 33 different studies and identified 39 meta-QTLs including nine high confidence regions. This shows that powdery mildew resistance may involve several regions of the wheat genome rather than relying on a single genetic factor (Sharma et al., 2024).",
  },
  crisprUsed: {
    title: "How has CRISPR-Cas9 been used?",
    paragraphs: [
      "According to Zhang et al. (2017), bread wheat contains three TaEDR1 homoeologous, namely TaEDR1-1A, TaEDR1-1B, and TaEDR1-1D. CRISPR-Cas9 was used to target all three genes at the same time.",
      "The results showed that wheat plants with genetic mutations in the TaEDR1 gene had improved resistance to powdery mildew compared with the unedited plants. Zhang et al (2017) examined 207 T1 plants and identified five homozygous triple mutants with frameshift mutations in all three TaEDR1 homoeologues. This suggests that reducing the TaEDR1 gene activity can help wheat defend itself against powdery mildew infection",
    ],
  },
  furtherResearch: {
    title: "What does further research show?",
    text: "Li et al. (2022) provided further evidence by using a genome editing to target Mildew Resistance Locus O (MLO) gene, which results in an improved powdery mildew resistance in wheat.",
  },
  experimentalData: [
    {
      metric: "T1 Plants Screened",
      value: "207",
      context: "Evaluated in Zhang et al. (2017)",
    },
    {
      metric: "Homozygous Triple Mutants",
      value: "5",
      context: "Frameshift mutations across 1A, 1B, 1D",
    },
    {
      metric: "Targeted Homoeologues",
      value: "3 (A, B, D)",
      context: "Multiplex CRISPR-Cas9 hexaploid targeting",
    },
    {
      metric: "Microcolony Index",
      value: "Significantly Reduced",
      context: "Fewer fungal microcolonies vs control",
    },
  ],
};

export const TEAM_MEMBERS = [
  {
    id: "amelia",
    number: "1.",
    title: "1. Dr Amelia caterer – lead plant molecular geneticist.",
    name: "Dr Amelia caterer",
    role: "Lead plant molecular geneticist",
    desc: "She selects genes, designs guide RNAs and investigates how changes to the TaEDR1 gene can strengthen wheat defense.",
    photo: IMAGES.teamAmelia,
    pos: "center 22%",
  },
  {
    id: "newton",
    number: "2.",
    title: "2. Dr Newton Brooks – crop biotechnology and phenotyping scientist",
    name: "Dr Newton Brooks",
    role: "Crop biotechnology and phenotyping scientist",
    desc: "He assesses powdery mildew infection and compares the growth and disease resistance of edited and non-edited wheat plants.",
    photo: IMAGES.teamNewton,
    pos: "center 24%",
  },
  {
    id: "priya",
    number: "3.",
    title: "3. Dr Priya Ahmed - bioinformatics and genomic data analyst",
    name: "Dr Priya Ahmed",
    role: "Bioinformatics and genomic data analyst",
    desc: "She analyses the DNA sequences and identifies mutations and genetic changes in edited wheat plants.",
    photo: IMAGES.teamPriya,
    pos: "center center",
  },
];

export const TEAM_DISCLAIMER =
  "The staff photographs are illustrated stock images gotten from pixabay. They do not represent the real team members.";

export const REFERENCES_LIST = [
  {
    id: "asmamaw2021",
    citation: "Asmamaw, M. and Zawdie, B. (2021) ‘Mechanism and applications of CRISPR/Cas-9-mediated genome editing’, Biologics, 15, pp. 353–361. Available from: https://doi.org/10.2147/BTT.S326422. [Accessed: 16, November 2026]",
    url: "https://doi.org/10.2147/BTT.S326422",
  },
  {
    id: "babu2021",
    citation: "Babu, K. et al. (2021) ‘Coordinated actions of Cas9 HNH and RuvC nuclease domains are regulated by the bridge helix and the target DNA sequence’, Biochemistry, 60(49), pp. 3783–3800. Available from: https://doi.org/10.1021/acs.biochem.1c00354. [Accessed: 20 November 2026].",
    url: "https://doi.org/10.1021/acs.biochem.1c00354",
  },
  {
    id: "gostimskaya2022",
    citation: "Gostimskaya, I. (2022) ‘CRISPR–Cas9: A history of its discovery and ethical considerations of its use in genome editing’, Biochemistry (Moscow), 87(8), pp. 777–788. Available from: https://doi.org/10.1134/S0006297922080090. [Accessed: 16, November 2026].",
    url: "https://doi.org/10.1134/S0006297922080090",
  },
  {
    id: "igi",
    citation: "Innovative Genomics Institute (2026) ‘What is CRISPR?’. Available from: https://innovativegenomics.org/what-is-crispr/. [Accessed: 17, November 2026].",
    url: "https://innovativegenomics.org/what-is-crispr/",
  },
  {
    id: "jinek2012",
    citation: "Jinek, M. et al. (2012) ‘A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity’, Science, 337(6096), pp. 816–821. Available from: https://doi.org/10.1126/science.1225829. [Accessed: 20 November 2026].",
    url: "https://doi.org/10.1126/science.1225829",
  },
  {
    id: "kaur2025",
    citation: "Kaur, N., Qadir, M., Francis, D.V., Alok, A., Tiwari, S. and Ahmed, Z.F.R. (2025) ‘CRISPR/Cas9: a sustainable technology to enhance climate resilience in major staple crops’, Frontiers in Genome Editing, 7, 1533197. Available from: https://doi.org/10.3389/fgeed.2025.1533197. [Accessed: 25, November 2026]",
    url: "https://doi.org/10.3389/fgeed.2025.1533197",
  },
  {
    id: "li2021",
    citation: "Li, J. et al. (2021) ‘Efficient multiplex genome editing by CRISPR/Cas9 in common wheat’, Plant Biotechnology Journal, 19(3), pp. 427–429. Available from: https://doi.org/10.1111/pbi.13508. [Accessed: 18, November 2026]",
    url: "https://doi.org/10.1111/pbi.13508",
  },
  {
    id: "li2022",
    citation: "Li, S. et al. (2022) ‘Genome-edited powdery mildew resistance in wheat without growth penalties’, Nature, 602, pp. 455–460. Available from: https://doi.org/10.1038/s41586-022-04395-9. [Accessed: 18, November 2026]",
    url: "https://doi.org/10.1038/s41586-022-04395-9",
  },
  {
    id: "nebraska",
    citation: "Nebraska Wheat Board (2026) ‘Diseases’. Available from: https://nebraskawheat.gov/for-growers/wheat-production-handbook/diseases/. [Accessed: 25 November 2026].",
    url: "https://nebraskawheat.gov/for-growers/wheat-production-handbook/diseases/",
  },
  {
    id: "pribylova2024",
    citation: "Přibylová, A. and Fischer, L. (2024) ‘How to use CRISPR/Cas9 in plants: from target site selection to DNA repair’, Journal of Experimental Botany, 75(17), pp. 5325–5343. Available from: https://doi.org/10.1093/jxb/erae147. [Accessed: 20 November 2026].",
    url: "https://doi.org/10.1093/jxb/erae147",
  },
  {
    id: "rasheed2021",
    citation: "Rasheed, A. et al. (2021) ‘A critical review: Recent advancements in the use of CRISPR/Cas9 technology to enhance crops and alleviate global food crises’, Current Issues in Molecular Biology, 43(3), pp. 1950–1976. Available from: https://doi.org/10.3390/cimb43030135. [Accessed: 25, November 2026]",
    url: "https://doi.org/10.3390/cimb43030135",
  },
  {
    id: "sharma2024",
    citation: "Sharma, D. et al. (2024) ‘Exploring the genetic architecture of powdery mildew resistance in wheat through QTL meta-analysis’, Frontiers in Plant Science, 15, 1386494. Available from: https://doi.org/10.3389/fpls.2024.1386494. [Accessed: 16, November 2026].",
    url: "https://doi.org/10.3389/fpls.2024.1386494",
  },
  {
    id: "sturme2022",
    citation: "Sturme, M.H.J. et al. (2022) ‘Occurrence and nature of off-target modifications by CRISPR-Cas genome editing in plants’, ACS Agricultural Science & Technology, 2(2), pp. 192–201. Available from: https://doi.org/10.1021/acsagscitech.1c00270. [Accessed: 18, November 2026]",
    url: "https://doi.org/10.1021/acsagscitech.1c00270",
  },
  {
    id: "tsakirpaloglou2023",
    citation: "Tsakirpaloglou, N., Septiningsih, E.M. and Thomson, M.J. (2023) ‘Guidelines for performing CRISPR/Cas9 genome editing for gene validation and trait improvement in crops’, Plants, 12(20), 3564. Available from: https://doi.org/10.3390/plants12203564. [Accessed: 16, November 2026].",
    url: "https://doi.org/10.3390/plants12203564",
  },
  {
    id: "ucanr",
    citation: "University of California Statewide Integrated Pest Management Program (2026) ‘Powdery mildew’. Available from: https://ipm.ucanr.edu/agriculture/small-grains/powdery-mildew/. [Accessed: 17, November 2026]",
    url: "https://ipm.ucanr.edu/agriculture/small-grains/powdery-mildew/",
  },
  {
    id: "ukflour",
    citation: "UK Flour Millers (2026) ‘Wheat’. Available from: https://www.ukflourmillers.org/knowledge-hub/farming-production/wheat [Accessed: 25 November 2026].",
    url: "https://www.ukflourmillers.org/knowledge-hub/farming-production/wheat",
  },
  {
    id: "wu2025",
    citation: "Wu, Z. and Xue, X. (2025) ‘Analysis of structural and metabolic changes in surface microorganisms following powdery mildew infection in wheat and assessment of their potential function in biological control’, PLOS ONE, 20(4). Available from: https://doi.org/10.1371/journal.pone.0320682. [Accessed: 16, November 2026].",
    url: "https://doi.org/10.1371/journal.pone.0320682",
  },
  {
    id: "zhang2017",
    citation: "Zhang, Y., Bai, Y., Wu, G., Zou, S., Chen, Y., Gao, C. and Tang, D. (2017) ‘Simultaneous modification of three homoeologues of TaEDR1 by genome editing enhances powdery mildew resistance in wheat’, The Plant Journal, 91(4), pp. 714–724. Available from: https://doi.org/10.1111/tpj.13599. [Accessed: 16, November 2026]",
    url: "https://doi.org/10.1111/tpj.13599",
  },
];
