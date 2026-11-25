/**
 * AneraGenix Technology Data Source
 * Verbatim content for Portfolio Assessment 1 — Website Design
 * Focus: Wheat (Triticum aestivum), Powdery Mildew (Blumeria graminis f. sp. tritici),
 * Multiplex CRISPR-Cas9 targeting TaEDR1 homoeologues (TaEDR1-1A, 1B, 1D).
 */

import { IMAGES } from "./assets/images";

export const COMPANY_INFO = {
  name: "AneraGenix Technology",
  fullName: "AneraGenix Technology.",
  disease: "powdery mildew",
  pathogen: "Blumeria graminis f. sp. tritici. (Bgt).",
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
];

export const LANDING_CONTENT = {
  headline: "IMPROVING CROP HEALTH THROUGH GENETIC RESEARCH",
  body: "At AneraGenix Technology, we examine how CRISPR-Cas9 can be used to investigate the genes involved in plant defense and disease resistance. We choose to focus on wheat and the genetic factors that may contribute to resisting 'powdery mildew'. By understanding these genetic factors, we aim to investigate the possibility of developing healthier and stronger crops.",
  exploreTitle: "EXPLORE OUR RESEARCH",
  exploreItems: [
    { id: "about", label: "About the company" },
    { id: "services", label: "Products and services" },
    { id: "methodology", label: "Our methodology" },
    { id: "case-study", label: "Case study" },
    { id: "team", label: "Meet our team" },
  ],
};

export const ABOUT_CONTENT = {
  whoAreWe: {
    title: "Who are we?",
    paragraphs: [
      "AneraGenix Technology is a fictional molecular genetic company whose purpose is to understand how DNA changes could influence plant growth, quality, and resistance to diseases. Our research would focus on wheat (Triticum aestivum), which is an important food crop that contributes to global nutrition, but is affected by powdery mildew disease. (Khalid, 2023; Wu and Xue, 2025).",
      "Powdery mildew is caused by a fungal pathogen called Blumeria graminis f. sp. tritici. (Bgt)., which infects wheat plants and can also reduce productivity in crops (Wu and Xue, 2025).",
      "We are interested in investigating the potential of CRISPR-Cas9 in modifying genes that can influence wheat crops and how they respond to fungal diseases. Our research will focus on the TaEDR1 gene, which has been investigated for its function in wheat's response to powdery mildew (Zhang et al., 2017). We would be exploring how reducing the TaEDR1 gene would improve disease resistance.",
    ],
  },
  whyCrispr: {
    title: "Why CRISPR-Cas9?",
    paragraphs: [
      "CRISPR-Cas9 was selected because it allows the targeting of specific DNA sequences and introduces genetic changes that modify and influence how plants respond to diseases or infections (Gostimskaya., 2022). Earlier genome editing methods, such as zinc-finger nucleases (ZFNs) and transcription activator-like effector nucleases (TALENs), can also be used to make targeted changes to DNA. However, these methods could require specially engineered proteins. CRISPR-Cas9 uses RNA as a guide to direct the Cas9 enzyme to the selected region in the DNA sequence. By altering the RNA sequence guide, we can then direct Cas9 to different DNA regions and make it easily adaptable to different genes targets (Přibylová and Fischer, 2024).",
      "Another reason for choosing this technique is its ability to modify multiple genetic targets in just one experiment. This methodology is known as 'multiplex genome editing'; it is important in bread wheat because of its hexaploid genome which is made up of three related subgenomes (A, B and D). Therefore, each gene may have three similar copies known as homoeologues, that may perform similar functions. Editing just one gene might not have an effect because other copies would still maintain their gene function (Li et al., 2021).",
      "CRISPR-Cas9 has some limitations that may be considered during crop improvement. Sometimes, the system can cut DNA sequences at targeted regions and introduce unwanted mutations in the genome (Sturme et al., 2022). The changes do not always produce the expected results because DNA repair pathways may influence how the modification is developed (Přibylová and Fischer, 2024). For this reason, edited plants need to be screened to confirm whether the supposed genetic changes have taken place and to investigate if any unintended changes have been introduced (Sturme et al., 2022).",
    ],
  },
  ourAims: {
    title: "OUR AIMS",
    intro: "At AneraGenix Technology, our proposed research aims to:",
    points: [
      "Investigate the role of TaEDR1 in wheat defense against powdery mildew.",
      "Explore how CRISPR-Cas9 can be used in modifying specific genes associated with disease resistance.",
      "Investigate how mutations would affect or influence gene activity and wheat resistance to infection.",
      "Assess whether edited plants show improved response to fungal infections.",
      "Assess the benefits and limitations of CRISPR-Cas9 genome editing for developing disease resistant crops of different varieties.",
    ],
  },
};

export const SERVICES_CONTENT = {
  header: "PRODUCTS AND SERVICES",
  intro:
    "At AneraGenix Technology we propose to offer three research services. Our services include genome editing with molecular examination and plant study. They are designed to investigate how gene functions and the effects of genetic changes",
  services: [
    {
      id: "crispr-editing",
      number: "1",
      title: "1. CRISPR-Cas9 genome editing",
      desc: "At AneraGenix Technology we propose to use CRISPR-Cas9 as a gene editing technique to investigate the function of specific plant genetic research.",
      detail:
        "Our proposed wheat research focuses on the three TaEDR1 homoeologues. We use multiple genomes editing to target these related gene copies and investigate whether reducing their functions may affect the plant's defense against powdery mildew (Li et al., 2021).",
      application:
        "Research application: investigating gene functions and how it could affect wheat resistance to infections.",
      tag: "Homoeologue Multiplexing",
      subgenome: "Subgenomes A, B & D Target",
    },
    {
      id: "molecular-screening",
      number: "2",
      title: "2. Molecular screening and genetic analysis",
      desc: "Molecular screening is an important next step after CRISPR-Cas9 genome editing. After genome editing, plants need to be tested to examine the changes. Our services include the use of polymerase chain reaction (PCR), restriction enzyme analysis, and DNA sequencing to examine the targeted DNA regions that have been edited.",
      detail:
        "PCR amplifies selected DNA regions for examination. The restriction enzyme analysis can help identify certain changes while DNA sequencing is an important method for confirming the exact changes that have been made (Tsakirpaloglou et al., 2023).",
      application:
        "Research application: checking and confirming the mutations that may have occurred during genome editing",
      tag: "PCR & Sequencing",
      subgenome: "Target Validation & Sanger/NGS",
    },
    {
      id: "resistance-evaluation",
      number: "3",
      title: "3. Disease resistance evaluation.",
      desc: "We propose comparing edited wheat plants with non-edited wheat plants after their exposure to powdery mildew by observing fungal growth, counting the visible powdery mildew microcolonies, and examining other signs of the disease development.",
      detail:
        "Zhang et al. (2017) found fewer micro colonies in plants with mutations in all three TaEDR1 homologues compared to the unedited plants.",
      application:
        "Research application: evaluating the changes on targeted genes and investigating whether they increase resistance to powdery mildew.",
      tag: "Phenotyping & Bioassay",
      subgenome: "Microcolony Inoculation Assay",
    },
  ],
};

export const METHODOLOGY_CONTENT = {
  header: "OUR METHODOLODY",
  intro:
    "CRISPR-Cas9 is a genome editing technology that allows scientists to make specific changes to DNA. It was adapted from a natural defense system found in bacteria, which helps them recognise and protect themselves against viruses. Scientists developed this system into an instrument that uses guide RNA (gRNA) to direct the Cas9 enzyme towards a selected DNA sequence (Innovative Genomics Institute; Jinek et al., 2012, Gostimskaya, 2022).",
  howItWorks: {
    title: "How does this technique work?",
    steps: [
      {
        num: "01",
        label: "Guide RNA Design & PAM Recognition",
        text: "The first stages involve designing a guide RNA (gRNA) complementary to the DNA region that is investigated. The guide RNA directs the Cas9 enzyme to the matching DNA sequence. The protospacer adjacent motif (PAM) must be next to a short DNA sequence recognised by SpCas9 with the code 5'-NGG-3' (Přibylová and Fischer, 2024))",
      },
      {
        num: "02",
        label: "Target Cleavage & Double Strand Break",
        text: "Once the target has been located, cas9 cuts both strands of the DNA double helix. The HNH and RuvC domains cut opposite DNA strands to produce double strand break (Babu et al., 2021).",
      },
      {
        num: "03",
        label: "Cellular DNA Repair (NHEJ / HDR)",
        text: "After the DNA cuts, the cell tries to repair the damage through natural repair mechanisms. The non-homologous end joining (NHEJ) would introduce insertions or deletions of DNA bases, which makes the DNA end flexible and may cause a frameshift or affect how genes work. Homology directed repair (HDR) uses a donor DNA template to introduce specific genetic changes; it is less efficient in plant cells (Asmamaw et al., 2021; Tsakirpaloglou et al., 2023).",
      },
    ],
  },
  whySelected: {
    title: "Why have we selected this approach?",
    text: "We choose CRISPR-Cas9 because it allows specific changes to be made to the DNA sequence and can also be used to target several related copies of a gene at the same time (Tsakirpaloglou et al., 2023; Zhang et al., 2017). It makes it easy to investigate how TaEDR1 affects powdery mildew resistance in wheat and check for changes that may have occurred.",
  },
};

export const CASE_STUDY_CONTENT = {
  header: "CASE STUDY",
  disease: {
    title: "Understanding the disease.",
    text: "Powdery mildew is a fungal disease that appears whitish with cotton like patches on the wheat leaves' surfaces. These patches contain fungal hyphae and spores that help the disease spread across the plant. Severe infection can affect plant growth and reduce the overall productivity of wheat crops (University of California Statewide Integrated Pest Management Program, n.d.).",
  },
  genes: {
    title: "Identifying the genes involved in resistance",
    text: "Researchers have investigated the genetic factors that are linked with resisting powdery mildew in wheat using the quantitative trait locus (QTL) meta- analysis. Sharma et al (2024) analysed 222 QTLs from 33 different studies and identified 39 QTLs along with nine high confidence regions. This shows that powdery mildew resistance may involve several regions of the wheat genome rather than relying on a single genetic factor (Sharma et al., 2024).",
  },
  crisprUsed: {
    title: "How has CRISPR-Cas9 been used",
    paragraphs: [
      "According to Zhang et al. (2017), bread wheat contains TaEDR1 homoeologous, namely TaEDR1-1A, TaEDR1-1B, and TaEDR1-1D. CRISPR-Cas9 was used to target all three genes at the same time. Targeting homoeologues was important because it could continue to maintain some gene functions if just one copy was edited.",
      "The CRISPR-Cas9 system uses guide RNA to direct the Cas9 enzyme to the TaEDR1 gene. Cas9 then cuts the DNA and allows changes to be made to the gene sequence. The researcher tested the edited wheat plants so mutations present in the three copies of genes could be identified.",
      "The results showed that wheat plants with genetic mutations in the TaEDR1 gene had improved resistance to powdery mildew compared with the unedited plants. Zhang et al (2017) examined 207 T1 plants and identified five homozygous triple mutants with frameshift mutations in all three TaEDR1 homoeologues. This suggests that reducing the TaEDR1 gene activity can help wheat defend itself against powdery mildew infection",
    ],
  },
  furtherResearch: {
    title: "What does further research show?",
    text: "Li et al. (2022) provided further evidence by using a separate editing approach; Mildew Resistance Locus O (MLO) which showed that there was an improve powdery mildew resistance in wheat. This suggests this genome editing could help improve disease resistance while supporting crop production.",
  },
  experimentalData: [
    {
      metric: "T1 Plants Screened",
      value: "207",
      context: "Total T1 generation wheat plants evaluated in Zhang et al. (2017)",
    },
    {
      metric: "Homozygous Triple Mutants",
      value: "5",
      context: "Simultaneous frameshift mutations across TaEDR1-1A, 1B, & 1D",
    },
    {
      metric: "Targeted Homoeologues",
      value: "3 (A, B, D)",
      context: "Multiplex CRISPR-Cas9 targeting all three hexaploid subgenomes",
    },
    {
      metric: "Microcolony Index",
      value: "Significantly Reduced",
      context: "Marked reduction in Bgt fungal microcolonies vs unedited controls",
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
    desc: "She is responsible for the selection of genes used for investigating, designing guide RNAs and studying whether the changes to TaEDR1 gene can strengthen wheat defense.",
    photo: IMAGES.teamAmelia,
    pos: "center 22%",
    focus: "Target selection, guide RNA design, TaEDR1 defense pathway analysis",
  },
  {
    id: "newton",
    number: "2.",
    title: "2. Dr Newton Brooks – crop biotechnology and phenotyping scientist",
    name: "Dr Newton Brooks",
    role: "Crop biotechnology and phenotyping scientist",
    desc: "He is responsible for assessing powdery mildew infection, monitoring the disease symptoms, and comparing the growth and disease resistance of edited and non-edited wheat plants to evaluate the effects of genetic modifications.",
    photo: IMAGES.teamNewton,
    pos: "center 24%",
    focus: "Blumeria graminis inoculation, microcolony assay, phenotypic evaluation",
  },
  {
    id: "priya",
    number: "3.",
    title: "3. Dr Priya Ahmed - bioinformatics and genomic data analyst",
    name: "Dr Priya Ahmed",
    role: "Bioinformatics and genomic data analyst",
    desc: "Her role includes analysing the DNA sequences, identifying any mutations that might have occurred, and analysing genetic changes in edited wheat plants.",
    photo: IMAGES.teamPriya,
    pos: "center center",
    focus: "DNA sequence alignment, mutation confirmation, hexaploid indel profiling",
  },
];

export const REFERENCES_LIST = [
  {
    id: "asmamaw2021",
    citation: "Asmamaw, M. and Zawdie, B. (2021) ‘Mechanism and applications of CRISPR/Cas-9-mediated genome editing’, Biologics, 15, pp. 353–361. Available at: https://doi.org/10.2147/BTT.S326422. [Accessed:]",
    url: "https://doi.org/10.2147/BTT.S326422",
  },
  {
    id: "babu2021",
    citation: "Babu, K. et al. (2021) ‘Coordinated actions of Cas9 HNH and RuvC nuclease domains are regulated by the bridge helix and the target DNA sequence’, Biochemistry, 60(49), pp. 3783–3800. Available at: https://doi.org/10.1021/acs.biochem.1c00354. [Accessed:]",
    url: "https://doi.org/10.1021/acs.biochem.1c00354",
  },
  {
    id: "gostimskaya2022",
    citation: "Gostimskaya, I. (2022) ‘CRISPR–Cas9: A history of its discovery and ethical considerations of its use in genome editing’, Biochemistry (Moscow), 87(8), pp. 777–788. Available at: https://doi.org/10.1134/S0006297922080090. [Accessed:]",
    url: "https://doi.org/10.1134/S0006297922080090",
  },
  {
    id: "igi",
    citation: "Innovative Genomics Institute (n.d.) ‘What is CRISPR?’. Available at: https://innovativegenomics.org/what-is-crispr/. [Accessed:]",
    url: "https://innovativegenomics.org/what-is-crispr/",
  },
  {
    id: "jinek2012",
    citation: "Jinek, M. et al. (2012) ‘A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity’, Science, 337(6096), pp. 816–821. Available at: https://doi.org/10.1126/science.1225829. [Accessed:]",
    url: "https://doi.org/10.1126/science.1225829",
  },
  {
    id: "khalid2023",
    citation: "Khalid, A., Hameed, A. and Tahir, M.F. (2023) ‘Wheat quality: A review on chemical composition, nutritional attributes, grain anatomy, types, classification, and function of seed storage proteins in bread making quality’, Frontiers in Nutrition, 10, 1053196. Available at: https://doi.org/10.3389/fnut.2023.1053196. [Accessed:]",
    url: "https://doi.org/10.3389/fnut.2023.1053196",
  },
  {
    id: "li2022",
    citation: "Li, S. et al. (2022) ‘Genome-edited powdery mildew resistance in wheat without growth penalties’, Nature, 602, pp. 455–460. Available at: https://doi.org/10.1038/s41586-022-04395-9. [Accessed:]",
    url: "https://doi.org/10.1038/s41586-022-04395-9",
  },
  {
    id: "li2021",
    citation: "Li, J. et al. (2021) ‘Efficient multiplex genome editing by CRISPR/Cas9 in common wheat’, Plant Biotechnology Journal, 19(3), pp. 427–429. Available at: https://doi.org/10.1111/pbi.13508. [Accessed:]",
    url: "https://doi.org/10.1111/pbi.13508",
  },
  {
    id: "pribylova2024",
    citation: "Přibylová, A. and Fischer, L. (2024) ‘How to use CRISPR/Cas9 in plants: from target site selection to DNA repair’, Journal of Experimental Botany, 75(17), pp. 5325–5343. Available at: https://doi.org/10.1093/jxb/erae147. [Accessed:]",
    url: "https://doi.org/10.1093/jxb/erae147",
  },
  {
    id: "sharma2024",
    citation: "Sharma, D. et al. (2024) ‘Exploring the genetic architecture of powdery mildew resistance in wheat through QTL meta-analysis’, Frontiers in Plant Science, 15, 1386494. Available at: https://doi.org/10.3389/fpls.2024.1386494. [Accessed:]",
    url: "https://doi.org/10.3389/fpls.2024.1386494",
  },
  {
    id: "sturme2022",
    citation: "Sturme, M.H.J. et al. (2022) ‘Occurrence and nature of off-target modifications by CRISPR-Cas genome editing in plants’, ACS Agricultural Science & Technology, 2(2), pp. 192–201. Available at: https://doi.org/10.1021/acsagscitech.1c00270. [Accessed:]",
    url: "https://doi.org/10.1021/acsagscitech.1c00270",
  },
  {
    id: "tsakirpaloglou2023",
    citation: "Tsakirpaloglou, N., Septiningsih, E.M. and Thomson, M.J. (2023) ‘Guidelines for performing CRISPR/Cas9 genome editing for gene validation and trait improvement in crops’, Plants, 12(20), 3564. Available at: https://doi.org/10.3390/plants12203564. [Accessed:]",
    url: "https://doi.org/10.3390/plants12203564",
  },
  {
    id: "ucanr",
    citation: "University of California Statewide Integrated Pest Management Program (n.d.) ‘Powdery mildew’. Available at: https://ipm.ucanr.edu/agriculture/small-grains/powdery-mildew/. [Accessed:]",
    url: "https://ipm.ucanr.edu/agriculture/small-grains/powdery-mildew/",
  },
  {
    id: "wu2025",
    citation: "Wu, Z. and Xue, X. (2025) ‘Analysis of structural and metabolic changes in surface microorganisms following powdery mildew infection in wheat and assessment of their potential function in biological control’, PLOS ONE, 20(4), e0320682. Available at: https://doi.org/10.1371/journal.pone.0320682. [Accessed:]",
    url: "https://doi.org/10.1371/journal.pone.0320682",
  },
];
