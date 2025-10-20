import React, { useState } from "react";
import "../styles/Publications.css";

export default function Publications() {
  const [yearFilter, setYearFilter] = useState("All");

  const publications = [
    {
      id: 1,
      authors: "Bhatt S, Chhabra Y, Cohen M, Farkkila A, Goel S, Li G, Romero-Córdoba S.",
      title: "Navigating life as an early career researcher.",
      journal: "Trends Cancer",
      details: "2025 Apr;11(4):261-266. doi: 10.1016/j.trecan.2025.03.006. PMID: 40157857.",
      year: 2025
    },
    {
      id: 2,
      authors: "Chan EM, Chhabra Y, Dixon KO, Durbin AD, Farkkila A, Jeyasekharan AD, Keckesova Z, Prensner JR, Wagenblast E, Xie SZ, Zhao D.",
      title: "Insights on Future Directions in Cancer Research from the 2025 AACR NextGen Stars.",
      journal: "Cancer Discov",
      details: "2025 Apr 2;15(4):678-684. doi: 10.1158/2159-8290.CD-25-0239. PMID: 40170536.",
      year: 2025
    },
    {
      id: 3,
      authors: "Kang Z, Szabo A, Farago T, Perez-Villatoro F, Junquera A, Shah S, Launonen IM, Anttila E, Casado J, Elias K, Virtanen A, Haltia UM, Färkkilä A.",
      title: "Tribus: semi-automated discovery of cell identities and phenotypes from multiplexed imaging and proteomic data.",
      journal: "Bioinformatics",
      details: "2025 Mar 4;41(3):btaf082. doi: 10.1093/bioinformatics/btaf082. PMID: 39982403; PMCID: PMC11932726.",
      year: 2025
    },
    {
      id: 4,
      authors: "Launonen IM, Pekcan Erkan E, Niemiec I, Junquera A, Hincapie-Otero M, Afenteva D, Liang Z, Salko M, Szabo A, Perez-Villatoro F, Falco MM, Li Y, Micoli G, Nagaraj A, Haltia UM, Kahelin E, Oikkonen J, Hynninen J, Virtanen A, Nirmal AJ, Vallius T, Hautaniemi S, Sorger P, Vähärautio A, Farkkila A.",
      title: "Chemotherapy induces myeloid-driven spatially confined T cell exhaustion in ovarian cancer.",
      journal: "Cancer Cell",
      details: "2024;42(12):2045–2063.e10.",
      year: 2024
    },
    {
      id: 5,
      authors: "Kozłowska E, Haltia UM, Puszynski K, Farkkila A.",
      title: "Mathematical modeling framework enhances clinical trial design for maintenance treatment in oncology.",
      journal: "Sci Rep",
      details: "2024 Nov;14(1):29721. doi: 10.1038/s41598-024-80768-6. PMID: 39613825.",
      year: 2024
    },
    {
      id: 6,
      authors: "Konstantinopoulos PA, Cheng SC, Lee EK, da Costa AABA, Gulhan D, Wahner Hendrickson AE, Kochupurakkal B, Kolin DL, Kohn EC, Liu JF, Penson RT, Stover EH, Curtis J, Sawyer H, Polak M, Chowdhury D, D'Andrea AD, Farkkila A, Shapiro GI, Matulonis UA.",
      title: "Randomized Phase II Study of Gemcitabine With or Without ATR Inhibitor Berzosertib in Platinum-Resistant Ovarian Cancer.",
      journal: "JCO Precis Oncol",
      details: "2024 Apr;8:e2300635. doi: 10.1200/PO.23.00635.",
      year: 2024
    },
    {
      id: 7,
      authors: "Dai J, Zheng S, Falco MM, Bao J, Eriksson J, Pikkusaari S, Forsten S, Jiang J, Wang W, Gao L, Perez-Villatoro F, Dufva O, Saeed K, Wang Y, Amiryousefi A, Farkkila A, Mustjoki S, Kauppi L, Tang J, Vaharautio A.",
      title: "Tracing back primed resistance in cancer via sister cells.",
      journal: "Nat Commun",
      details: "2024 Feb;15(1):1158. doi: 10.1038/s41467-024-45478-7.",
      year: 2024
    },
    {
      id: 8,
      authors: "Hetemaki I, Sarkkinen J, Heikkila N, Drechsel K, Mayranpaa MI, Farkkila A, Laakso S, Makitie O, Arstila TP, Kekalainen E.",
      title: "Dysregulated germinal center reaction with expanded T follicular helper cells in autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy lymph nodes.",
      journal: "J Allergy Clin Immunol",
      details: "2023 Dec;151(6):1564–1577. doi: 10.1016/j.jaci.2023.12.004.",
      year: 2023
    },
    {
      id: 9,
      authors: "Launonen IM, Vähärautio A, Färkkilä A.",
      title: "The Emerging Role of the Single-Cell and Spatial Tumor Microenvironment in High-Grade Serous Ovarian Cancer.",
      journal: "Cold Spring Harb Perspect Med",
      details: "2023 Oct;13(10):a041314. doi: 10.1101/cshperspect.a041314.",
      year: 2023
    },
    {
      id: 10,
      authors: "Andersson N, Haltia UM, Farkkila A, Wong SC, Eloranta K, Wilson DB, Unkila-Kallio L, Pihlajoki M, Kyrönlahti A, Heikinheimo M.",
      title: "Analysis of Non-Relapsed and Relapsed Adult Type Granulosa Cell Tumors Suggests Stable Transcriptomes during Tumor Progression.",
      journal: "Curr Issues Mol Biol",
      details: "2022 Jan;44(2):686–698. doi: 10.3390/cimb44020048.",
      year: 2022
    },
    {
      id: 11,
      authors: "Chae CS, Sandoval TA, Hwang SM, Park ES, Giovanelli P, Awasthi D, Salvagno C, Emmanuelli A, Tan C, Chaudhary V, Casado J, Kossenkov AV, Song M, Barrat FJ, Holcomb K, Romero-Sandoval EA, Zamarin D, Pépin D, D'Andrea AD, Farkkila A, Cubillos-Ruiz JR.",
      title: "Tumor-Derived Lysophosphatidic Acid Blunts Protective Type I Interferon Responses in Ovarian Cancer.",
      journal: "Cancer Discov",
      details: "2022 Aug;12(8):1904–1921. doi: 10.1158/2159-8290.CD-21-1181.",
      year: 2022
    },
    {
      id: 12,
      authors: "Launonen IM, Lyytikäinen N, Casado J, Anttila EA, Szabó A, Haltia UM, Jacobson CA, Lin JR, Maliga Z, Howitt BE, Strickland KC, Santagata S, Elias K, D'Andrea AD, Konstantinopoulos PA, Sorger PK, Farkkila A.",
      title: "Single-cell tumor-immune microenvironment of BRCA1/2 mutated high-grade serous ovarian cancer.",
      journal: "Nat Commun",
      details: "2022 Feb;13(1):835. doi: 10.1038/s41467-022-28389-3.",
      year: 2022
    },
    {
      id: 13,
      authors: "Duraiswamy J, Turrini R, Minasyan A, Barras D, Crespo I, Grimm AJ, Casado J, Genolet R, Benedetti F, Wicky A, Ioannidou K, Castro W, Neal C, Moriot A, Renaud-Tissot S, Anstett V, Fahr N, Tanyi JL, Eiva MA, Jacobson CA, Montone KT, Westergaard MCW, Svane IM, Kandalaft LE, Delorenzi M, Sorger PK, Farkkila A, Michielin O, Zoete V, Carmona SJ, Foukas PG, Powell DJ Jr, Rusakiewicz S, Doucey MA, Dangaj Laniti D, Coukos G.",
      title: "Myeloid antigen-presenting cell niches sustain antitumor T cells and license PD-1 blockade via CD28 costimulation.",
      journal: "Cancer Cell",
      details: "2021 Dec;39(12):1623–1642.e20. doi: 10.1016/j.ccell.2021.10.008.",
      year: 2021
    },
    {
      id: 14,
      authors: "Zhou J, Gelot C, Pantelidou C, Li A, Yücel H, Davis RE, Farkkila A, Kochupurakkal B, Syed A, Shapiro GI, Tainer JA, Blagg BSJ, Ceccaldi R, D'Andrea AD.",
      title: "A first-in-class Polymerase Theta Inhibitor selectively targets Homologous-Recombination-Deficient Tumors.",
      journal: "Nat Cancer",
      details: "2021 Jun;2(6):598–610. doi: 10.1038/s43018-021-00203-x.",
      year: 2021
    },
    {
      id: 15,
      authors: "Farkkila A, Rodríguez A, Oikkonen J, Gulhan DC, Nguyen H, Domínguez J, Ramos S, Mills CE, Pérez-Villatoro F, Lazaro JB, Zhou J, Clairmont CS, Moreau LA, Park PJ, Sorger PK, Hautaniemi S, Frias S, D'Andrea AD.",
      title: "Heterogeneity and Clonal Evolution of Acquired PARP Inhibitor Resistance in TP53- and BRCA1-Deficient Cells.",
      journal: "Cancer Res",
      details: "2021 May;81(10):2774–2787. doi: 10.1158/0008-5472.CAN-20-2912.",
      year: 2021
    },
    {
      id: 16,
      authors: "Iyer S, Zhang S, Yucel S, Horn H, Smith SG, Reinhardt F, Hoefsmit E, Assatova B, Casado J, Meinsohn MC, Barrasa MI, Bell GW, Pérez-Villatoro F, Huhtinen K, Hynninen J, Oikkonen J, Galhenage PM, Pathania S, Hammond PT, Neel BG, Farkkila A, Pépin D, Weinberg RA.",
      title: "Genetically Defined Syngeneic Mouse Models of Ovarian Cancer as Tools for the Discovery of Combination Immunotherapy.",
      journal: "Cancer Discov",
      details: "2021 Feb;11(2):384–407. doi: 10.1158/2159-8290.CD-20-0818.",
      year: 2021
    },
    {
      id: 17,
      authors: "Casado J, Lehtonen O, Rantanen V, Kaipio K, Pasquini L, Häkkinen A, Petrucci E, Hynninen J, Hietanen S, Carpén O, Biffoni M, Farkkila A, Hautaniemi S.",
      title: "Agile workflow for interactive analysis of mass cytometry data.",
      journal: "Bioinformatics",
      details: "2021 Jun;37(9):1263–1268. doi: 10.1093/bioinformatics/btaa946.",
      year: 2021
    },
    {
      id: 18,
      authors: "Rodríguez A, Zhang K, Farkkila A, Filiatrault J, Yang C, Velázquez M, Furutani E, Goldman DC, García de Teresa B, Garza-Mayén G, McQueen K, Sambel LA, Molina B, Torres L, González M, Vadillo E, Pelayo R, Fleming WH, Grompe M, Shimamura A, Hautaniemi S, Greenberger J, Frías S, Parmar K, D'Andrea AD.",
      title: "MYC Promotes Bone Marrow Stem Cell Dysfunction in Fanconi Anemia.",
      journal: "Cell Stem Cell",
      details: "2021 Jan;28(1):33–47.e8. doi: 10.1016/j.stem.2020.09.004.",
      year: 2021
    },
    {
      id: 19,
      authors: "Konstantinopoulos PA, Cheng SC, Wahner Hendrickson AE, Penson RT, Schumer ST, Doyle LA, Lee EK, Kohn EC, Duska LR, Crispens MA, Olawaiye AB, Winer IS, Barroilhet LM, Fu S, McHale MT, Schilder RJ, Farkkila A, Chowdhury D, Curtis J, Quinn RS, Bowes B, D'Andrea AD, Shapiro GI, Matulonis UA.",
      title: "Berzosertib plus gemcitabine versus gemcitabine alone in platinum-resistant high-grade serous ovarian cancer: a multicentre, open-label, randomised, phase 2 trial.",
      journal: "Lancet Oncol",
      details: "2020 Jul;21(7):957–968. doi: 10.1016/S1470-2045(20)30180-7.",
      year: 2020
    },
    {
      id: 20,
      authors: "Farkkila A, Gulhan DC, Casado J, Jacobson CA, Nguyen H, Kochupurakkal B, Maliga Z, Yapp C, Chen YA, Schapiro D, Zhou Y, Graham JR, Dezube BJ, Munster P, Santagata S, Garcia E, Rodig S, Lako A, Chowdhury D, Shapiro GI, Matulonis UA, Park PJ, Hautaniemi S, Sorger PK, Swisher EM, D'Andrea AD, Konstantinopoulos PA.",
      title: "Immunogenomic profiling determines responses to combined PARP and PD-1 inhibition in ovarian cancer.",
      journal: "Nat Commun",
      details: "2020 Mar;11(1):1459. doi: 10.1038/s41467-020-15315-8.",
      year: 2020
    },
    {
      id: 21,
      authors: "Parmar K, Kochupurakkal BS, Lazaro JB, Wang ZC, Palakurthi S, Kirschmeier PT, Yang C, Sambel LA, Farkkila A, Reznichenko E, Reavis HD, Dunn CE, Zou L, Do KT, Konstantinopoulos PA, Matulonis UA, Liu JF, D'Andrea AD, Shapiro GI.",
      title: "The CHK1 Inhibitor Prexasertib Exhibits Monotherapy Activity in High-Grade Serous Ovarian Cancer Models and Sensitizes to PARP Inhibition.",
      journal: "Clin Cancer Res",
      details: "2019 Oct;25(20):6127–6140. doi: 10.1158/1078-0432.CCR-19-0448.",
      year: 2019
    },
    {
      id: 22,
      authors: "Konstantinopoulos PA, Waggoner S, Vidal GA, Mita M, Moroney JW, Holloway R, Van Le L, Sachdev JC, Chapman-Davis E, Colon-Otero G, Penson RT, Matulonis UA, Kim YB, Moore KN, Swisher EM, Färkkilä A, D'Andrea A, Stringer-Reasor E, Wang J, Buerstatte N, Arora S, Graham JR, Bobilev D, Dezube BJ, Munster P.",
      title: "Single-Arm Phases 1 and 2 Trial of Niraparib in Combination With Pembrolizumab in Patients With Recurrent Platinum-Resistant Ovarian Carcinoma.",
      journal: "JAMA Oncol",
      details: "2019 Aug;5(8):1141–1149. doi: 10.1001/jamaoncol.2019.1048.",
      year: 2019
    }
  ];
  

  const filtered = yearFilter === "All"
    ? publications
    : publications.filter((p) => p.year.toString() === yearFilter);

  return (
    <main className="publications-page">
      <section className="page-intro">
        <h1 className="hdr">Research Publications</h1>
        <p className="intro-text">
          Explore our body of peer-reviewed research uncovering insights into ovarian cancer,
          tumor microenvironment, and translational oncology.
        </p>

        <div className="year-filter">
          <label htmlFor="year" className="year-label">Filter by Year:</label>
          <select
            id="year"
            className="year-select"
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </section>

      <section className="publications-container">
        {filtered.map((pub, i) => (
          <article key={pub.id} className="glass-card publication-entry">
            <span className="pub-index">{i + 1}.</span>
            <div className="pub-content">
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-authors">{pub.authors}</p>
              <p className="pub-journal">
                <em>{pub.journal}</em> — {pub.details}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
