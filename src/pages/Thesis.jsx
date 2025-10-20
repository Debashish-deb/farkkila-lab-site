import React, { useState } from 'react';
import '../styles/Thesis.css';

function Thesis() {
  const [yearFilter, setYearFilter] = useState('All');

  const theses = [
    {
      id: 1,
      name: 'Aino Elomaa',
      title:
        'Incorporating stromal cells into a 3D patient-derived model for immuno-oncology drug testing in ovarian cancer',
      program: "Master's Programme in Drug Discovery and Development",
      university: 'University of Turku',
      date: 'May, 2025',
      year: 2025,
    },
    {
      id: 2,
      name: 'Fernando Perez',
      title:
        'Tumor microenvironment and genomic biomarkers for precision oncology in high-grade serous ovarian cancer',
      program: 'Doctoral researcher',
      university: 'University of Helsinki',
      date: 'May, 2025',
      year: 2025,
    },
    {
      id: 3,
      name: 'Alva Grönholm',
      title:
        'Profiling of Spatial Tumor Microenvironment Architecture in Highly Multiplexed Images of High-Grade Serous Ovarian Carcinoma',
      program: "TRANSMED Master's Programme",
      university: 'University of Helsinki',
      date: 'May, 2025',
      year: 2025,
    },
    {
      id: 4,
      name: 'Lina Maltrovsky',
      title:
        'ProteoPicking: bridging tCycIF with precision tissue microdissection for TME proteomic exploration',
      program: "Biological Chemistry Master's Programme",
      university: 'University of Vienna',
      date: 'May, 2025',
      year: 2025,
    },
    {
      id: 5,
      name: 'Matias Aiskovich',
      title:
        'Mapping Regions of Interest in Ovarian Cancer: A Deep Learning Approach with Multiplexed Imaging',
      program: "Master's Programme in Life Science Informatics",
      university: 'University of Helsinki',
      date: 'May, 2025',
      year: 2025,
    },
    {
      id: 6,
      name: 'Angéla Szabó',
      title:
        'Accurate Detection of Immune Landscapes in High-Grade Serous Ovarian Cancer: Developing a Pipeline with Integrated Visual Aid for Single-Cell Phenotyping',
      program: "Master's Programme in Life Science Informatics",
      university: 'University of Helsinki',
      date: 'July, 2024',
      year: 2024,
    },
    {
      id: 7,
      name: 'Matilda Salko',
      title:
        'Patient-derived functional immuno-oncology platform identifies responders to ATR inhibitor and immunotherapy in ovarian cancer',
      program: 'Doctoral researcher',
      university: 'University of Helsinki',
      date: 'July, 2024',
      year: 2024,
    },
    {
      id: 8,
      name: 'Aleksandra Shabanova',
      title:
        'Uncovering Tumor Microenvironment features linked to Clinico-molecular types of Ovarian Cancer using Machine Learning',
      program: "Master's Programme in Genetics and Molecular Biosciences",
      university: 'University of Helsinki',
      date: 'July, 2024',
      year: 2024,
    },
    {
      id: 9,
      name: 'Aleksandra Shabanova',
      title:
        'Tissue-based Biomarker Investigation Guided by Functional Immuno-oncology Platform in Ovarian Cancer',
      program: "Master's Programme in Translational Medicine (TRANSMED)",
      university: 'University of Helsinki',
      date: 'May, 2024',
      year: 2024,
    },
    {
      id: 10,
      name: 'Ella Anttila',
      title:
        'HPV ja syövän mikroyhteisön (TME) vaikutus kohdunkaulasyövän syntyyn ja kohdunkaulasyövässä käytetyt immunologiset hoidot',
      program: 'Licentiate of Medicine',
      university: 'University of Oulu',
      date: 'May, 2024',
      year: 2024,
    },
    {
      id: 11,
      name: 'Abhilash Venganellur Anandakumar',
      title:
        'Evaluation of immune cell-specific functional response following single or combinatorial treatment with DNA damaging and immunotherapy agents using patient-derived immunocompetent cultures of High Grade Serous Ovarian Cancer',
      program: 'BS-MS Dual Degree Programme',
      university: 'Indian Institute of Science Education and Research',
      date: 'May, 2024',
      year: 2024,
    },
    {
      id: 12,
      name: 'Zhihan Liang',
      title:
        'Nano-Pick: A Novel Method Enables Spatially Resolved Gene Expression Profiling of Tertiary Lymphoid Structures in Ovarian Cancer',
      program: "Master's Programme in Translational Medicine (TRANSMED)",
      university: 'University of Helsinki',
      date: 'May, 2024',
      year: 2024,
    },
    {
      id: 13,
      name: 'Ada Junquera',
      title:
        'Integrative methods for investigating spatial biology of the tumor microenvironment',
      program: "Master's Programme in Translational Medicine (TRANSMED)",
      university: 'University of Helsinki',
      date: 'May, 2023',
      year: 2023,
    },
    {
      id: 14,
      name: 'Inga-Maria Launonen',
      title:
        'Single-cell tumor-immune microenvironment of BRCA1/2 mutated high-grade serous ovarian cancer',
      program: 'Licentiate of Medicine',
      university: 'University of Helsinki',
      date: 'April, 2023',
      year: 2023,
    },
    {
      id: 15,
      name: 'Ulla-Maija Haltia',
      title:
        'Biomarkers and targeted therapies for ovarian granulosa cell tumors',
      program: 'Doctoral Programme in Clinical Research',
      university: 'University of Helsinki',
      date: 'April, 2023',
      year: 2023,
    },
  ];

  const filtered = theses.filter(
    (t) => yearFilter === 'All' || t.year.toString() === yearFilter
  );

  return (
    <main className="publications-page">
      <section className="page-intro">
        <h1 className="hdr">Student Theses</h1>
        <p className="intro-text">
          A collection of research theses authored by students and researchers from our laboratory.
        </p>

        <div className="year-filter">
          <label htmlFor="year" className="year-label">
            Filter by Year:
          </label>
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
          </select>
        </div>
      </section>

      <section className="publications-container">
        {filtered.map((t, i) => (
          <article key={t.id} className="glass-card publication-entry">
            <span className="pub-index">{i + 1}.</span>
            <div className="pub-content">
              <h3 className="pub-title">{t.title}</h3>
              <p className="pub-authors">
                <strong>{t.name}</strong> — {t.program}, {t.university}
              </p>
              <p className="pub-journal">
                <em>{t.date}</em>
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Thesis;
