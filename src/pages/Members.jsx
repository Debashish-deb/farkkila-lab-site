import React, { useEffect, useMemo } from "react";
import { memo } from "react";
import "../styles/LabMembers.css";

// === images (exact paths you provided) ===
import aniinna from "../assets/images/labMember/aniinna.png";
import joonas from "../assets/images/labMember/joonas.png";
import sara from "../assets/images/labMember/sara.png";
import hanna from "../assets/images/labMember/hanna.png";
import iga from "../assets/images/labMember/iga.jpg";
import ada from "../assets/images/labMember/ada.png";
import matilda from "../assets/images/labMember/matilda.png";
import inga from "../assets/images/labMember/inga.png";
import ziqi from "../assets/images/labMember/ziqi.png";
import pablo from "../assets/images/labMember/pablo.png";
import aleksandra from "../assets/images/labMember/aleksandra.png";
import naipunya from "../assets/images/labMember/naipunaya.png";
import zhihan from "../assets/images/labMember/zhihan.png";
import maria from "../assets/images/labMember/maria.png";
import wenqing from "../assets/images/labMember/wenqing.png";
import ella from "../assets/images/labMember/ella.png";
import anni from "../assets/images/labMember/anni3.png";
import anniK from "../assets/images/labMember/anniK.png";
import andreas from "../assets/images/labMember/andreas.png";
import eve from "../assets/images/labMember/eve.png";
import silija from "../assets/images/labMember/silija.png";
import anti from "../assets/images/labMember/Antti-e1737460439218.jpg";
import nika from "../assets/images/labMember/nika.png";
import elias from "../assets/images/labMember/elias.png";
import arttu from "../assets/images/labMember/arttu.png";
import ulla from "../assets/images/labMember/ulla.png";
import laura from "../assets/images/labMember/laura.png";
import maija from "../assets/images/labMember/maija.png";
import saun from "../assets/images/labMember/saun.png";
import anastasia from "../assets/images/labMember/anastasia.png";
import aino from "../assets/images/labMember/aino.png";
import deb from "../assets/images/labMember/deb.png";
import karen from "../assets/images/labMember/karen.png";
import sarah from "../assets/images/labMember/sarah.png";

function Members() {
  // disable smooth scroll during first second (perf nicety you had)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    const t = setTimeout(() => (document.documentElement.style.scrollBehavior = "smooth"), 1000);
    return () => {
      document.documentElement.style.scrollBehavior = "smooth";
      clearTimeout(t);
    };
  }, []);

  // ---- DATA (verbatim from your file) ----
  const memberSections = useMemo(
    () => [
      {
        title: "Principal Investigator",
        members: [
          {
            name: "Anniina Färkkilä, MD PhD",
            role: "Assistant Professor in Translational Gynecologic Oncology",
            bio:
              "Anniina Färkkilä, MD PhD, is an Assistant professor in translational gynecologic oncology and a Specialist in gynecology at the University of Helsinki, Finland. She completed her postdoctoral fellowship at the Dana-Farber Cancer Institute and Harvard Medical School in 2019. In 2018 she was awarded the Seth Wichmann award by the Finnish Gynecologic Society, and the Eero Saksela award by the Finnish Cancer Institute in 2022. She was the recipient of a prestigious ERC Starting grant in 2022. Dr. Färkkilä also works as a specialist for gynecologic oncology at the Helsinki University Hospital (HUH), participating in multiple clinical trials at the HUH Comprehensive cancer center. Dr. Färkkilä coordinates the prospective Oncosys-Ova trial, and leads the Ovarian cancer project in the iCAN Digital Precision Medicine Flagship. She is a board member at the Nordic Society of Gynecologic Oncology (NSGO), the National Molecular tumor board of Finnish Cancer Center (FICAN), and the translational working group of European Network of gynecological clinical trials (ENTOG) and Gynecologic Cancer Inter Group (GCIG). She is passionate about precision oncology, improving the treatment and outcomes of cancer patients, leadership, wellbeing, family and outdoor activities.",
            image: aniinna,
            isPi: true,
          },
        ],
      },
      {
        title: "Postdoctoral Researchers",
        members: [
          {
            name: "Sara Palomino, PhD",
            role: "Postdoctoral Researcher",
            bio:
              "Sara's research explores the role of the tumor microenvironment in ovarian cancer progression, using spatial transcriptomics, network analysis, and systems medicine. She has a background in omics analysis and in developing stratification and clustering techniques, previously applied in a multidisciplinary project on cirrhosis.",
            image: sara,
            isPi: true,
          },
          {
            name: "Hanna Elomaa, PhD",
            role: "Postdoctoral Researcher",
            bio:
              "Hanna's project will focus on characterizing the immune landscape and spatial interactions in the ovarian cancer microenvironment using advanced spatial profiling techniques. Previously, she has investigated immune cell infiltration and its spatial organization in the colorectal cancer microenvironment using multiplex immunohistochemistry and machine learning-based image analysis.",
            image: hanna,
            isPi: true,
          },
        ],
      },
      {
        title: "PhD Students",
        members: [
          {
            name: "Iga Niemiec, MSc",
            role: "PhD Student",
            bio:
              "Iga's project focuses on the discovery of immune escape mechanisms in the high-grade serous ovarian cancer. By combining genetics, spatial imaging and spatial transcriptomics data, Iga aims to uncover the genetic and spatial features shaping the tumor-immune interplay and leading to immune escape.",
            image: iga,
          },
          {
            name: "Ada Junquera, MSc",
            role: "PhD Student",
            bio:
              "Ada's research focuses on how current therapies shape the TME and immune dynamics. She profiles the patient-derived samples through spatial methods, such as tCycIF multiplexed imaging and GeoMx spatial transcriptomics.",
            image: ada,
          },
          {
            name: "Matilda Salko, MD",
            role: "PhD Student",
            bio:
              "Her work is mostly focused on the prospective Oncosys-Ova study. She is looking into the clinical characteristics and treatment responses as well as genomic data of ovarian cancer patients, aiming to better understand the real-world clinical outcomes of patients diagnosed with HGSC.",
            image: matilda,
          },
          {
            name: "Inga-Maria Launonen, MD",
            role: "PhD Student",
            bio:
              "Her PhD projects focus on the effects of homologous recombination deficiencies and DNA damage on the tumor-immune interactions in high-grade serous ovarian cancer.",
            image: inga,
          },
          {
            name: "Ziqi Kang, MSc",
            role: "PhD Student",
            bio:
              "Her project focuses on profiling the tissue architecture and discovering spatial-related immune response mechanisms from multiplexed images. She is developing unbiased automatic computational tools in order to deeply quantify spatial information in fluorescence images.",
            image: ziqi,
          },
          {
            name: "Pablo Siliceo Portugal, MSc",
            role: "PhD Student",
            bio:
              "Pablo's project is focused on understanding early immunoregulatory processes that drive tumor development in homologous recombination deficient tumors by means of spatial investigation. He is particularly interested in key spatiotemporal and topological features involved in pathogenesis and clinical outcomes.",
            image: pablo,
          },
          {
            name: "Aleksandra Shabanova, MSc",
            role: "PhD Student",
            bio:
              "Her PhD research focuses on identifying novel prognostic markers and therapeutic targets for personalized cancer treatment by investigating antigen presentation-driven immune evasion mechanism. By integrating spatial multi-omic analysis of tumor microenvironments and cell-cell interaction studies, she aims to uncover insights into cancer progression.",
            image: aleksandra,
          },
          {
            name: "Zhihan Liang, MSc",
            role: "PhD Student",
            bio:
              "His tasks involve using spatial transcriptomics data to analyze the tumor microenvironment of ovarian cancer. He is interested in genetic and spatial features related to immune evasion.",
            image: zhihan,
          },
          {
            name: "María Hincapié Otero, MSc",
            role: "PhD Student",
            bio:
              "María's project is centered on the integration of the stromal compartment into the immune-competent patient-derived cultures (iPDCs) that have been established within the lab.",
            image: maria,
          },
          {
            name: "Ella Anttila, MD",
            role: "PhD Student",
            bio:
              "Her main task in Färkkilä Lab is to help with data analysis in different projects concerning tumor microenvironment of HGSOC.",
            image: ella,
          },
          {
            name: "Anni Suoknuuti",
            role: "PhD Student",
            bio:
              "Anni is a second year medical student, and her main task is to work on the clinical data of the FINPROVE trial.",
            image: anni,
          },
          {
            name: "Wenqing Chen, MSc",
            role: "PhD Student",
            bio:
              "She is a PhD co-trained by Vähärautio and Färkkilä's lab. Her project involves applying and evaluating computational methods to quantify tissue architecture in multiplexed images. The goal is to identify deficiencies in these methods, adapt and integrate the most effective methods into the tCyCIF analysis pipeline.",
            image: wenqing,
          },
          {
            name: "Naipunya Guruprasad, MSc",
            role: "PhD Student",
            bio:
              "Naipunya's project focuses on Single-cell and spatial biomarkers in cervical cancer. Her work aims to uncover what drives cancer progression and responses to immunotherapy, with the goal of improving early detection and treatment strategies for cervical cancer patients.",
            image: naipunya,
          },
        ],
      },
      {
        title: "Medical Students",
        members: [
          {
            name: "Silja Kauppila, BMed",
            role: "Medical student",
            bio:
              "Silja is a second-year Medical Student, and her main focus is working with t-CycIF data from a large cohort of TNBC samples.",
            image: silija,
          },
          {
            name: "Andreas Hainari, BMed",
            role: "Medical student",
            bio:
              "Andreas is a third-year medical student combining his medical training with technical studies in bioinformation technology. He is currently focusing on analysing Whole Exome Sequencing and bulk RNA-seq data.",
            image: andreas,
          },
          {
            name: "Eveliina Holappa, BSc",
            role: "Medical student",
            bio:
              "Eveliina is working with patient sample processing, 3D cell culture, and flow cytometry experiments.",
            image: eve,
          },
          {
            name: "Anni Härkönen",
            role: "Medical student",
            bio:
              "Anni is a second-year Medical Student, and her main focus is working on the clinical data of the Oncosys-ova study.",
            image: anniK,
          },
        ],
      },
      {
        title: "Master's Students",
        members: [
          {
            name: "Antti Toivanen, BSc",
            role: "LSI Master's Programme",
            bio:
              "Investigating tumor microenvironment features using machine learning approaches in ovarian cancer.",
            image: anti,
          },
          {
            name: "Nika Mikhailava, BSc",
            role: "Genetics and Molecular Biosciences Master's Programme (UH)",
            bio:
              "Nika's responsibilities include working with the establishment, maintenance, and characterization of long-term organoids, alongside other wet lab projects.",
            image: nika,
          },
          {
            name: "Elias Ruuska, BSc",
            role: "Genetics and Molecular Biosciences Master's Programme (UH)",
            bio:
              "Elias is currently developing and utilizing t-cyCIF image analysis pipelines to study spatial interactions of cells in the tumor microenvironment.",
            image: elias,
          },
          {
            name: "Arttu Peltola, BSc",
            role: "Research Assistant",
            bio:
              "Arttu is helping to improve the image processing pipeline by establishing a metric and a system around it to measure and optimize segmentation methods and the impact of different filtering, denoising and enhancing methods on the segmentation alongside helping with other projects involving image processing.",
            image: arttu,
          },
          {
            name: "Sarah Wolf, B.Sc",
            role: "Research Assistant",
            bio:
              "Sarah is pursuing a Master’s degree in Biochemistry with a focus on Molecular Oncology at the University of Würzburg, Germany. In the Färkkilä Lab, she contributes to patient sample processing and biobanking, and assists with drug testing experiments in complex in vitro models of the HGSC tumor microenvironment to study drug response and resistance.",
            image: sarah,
          }
        ],
      },
      {
        title: "Clinical researchers",
        members: [
          {
            name: "Ulla-Maija Haltia, MD PhD",
            role: "Gynecologic Oncologist",
            bio:
              "Ovarian cancer is her main interest. She shares her time between clinical duties and translational research.",
            image: ulla,
          },
          {
            name: "Laura Haapasalo, Midwife",
            role: "Study Nurse",
            bio:
              "Laura works as a Midwife with gynecological cancer patients at an Outpatient Clinic in Women's Hospital. As a study nurse she mainly coordinates the recruitment process.",
            image: laura,
          },
          {
            name: "Maija Vääriskoski, MSc Midwife",
            role: "Clinical Research Coordinator",
            bio:
              "Maija is responsible for Clinical Team coordination, overseeing roles, tasks, and resource allocation. She supports patient enrollment into databases and registries, coordinates database updates and data curation, and manages registry development. Maija also manages data exports and facilitates ONCOSYS-OVA collaboration.",
            image: maija,
          },
          {
            name: "Karen Ahlnäs, MSc Midwife",
            role: "Clinical Reserach Nurse",
            bio:
              "Karen is a Clinical Reserach Nurse who is responsible for data requests from patients outside HUS and the reporting of samples to Helsinki Biobank. She also participates in the database updates.",
            image: karen,
          }
        ],
      },
      {
        title: "Staff Scientists",
        members: [
          {
            name: "Joonas Jukonen, PhD",
            role: "Research and Trial Coordinator",
            bio: "Joonas serves as a Research and Trial Coordinator in the Färkkilä Lab. Joonas is also responsible for establishing long-term organoid cultures derived from high-grade serous carcinoma (HGSC) patient samples.",
            image: joonas,
          },
          {
            name: "Saundarya Shah, MSc",
            role: "Spatial Profiling Manager",
            bio: "She coordinates tCycIF and GeoMx spatial transcriptomic experiments.",
            image: saun,
          },
          {
            name: "Anastasia Lundgren, MSc",
            role: "Lab Manager",
            bio: "Anastasia coordinates the ONCOSYS-Ova sample collection.",
            image: anastasia,
          },
          {
            name: "Aino Elomaa, BSc",
            role: "Laboratory and clinical sample coordinator",
            bio: "She coordinates sample preparation.",
            image: aino,
          },
          {
            name: "Debashish Deb, MSc",
            role: "IT Specialist",
            bio: "Debashish is responsible for all CSC related services. He is also resposible for maintaining lab's database and website",
            image: deb,
          }
        ],
      },
    ],
    []
  );

  // Alumni (verbatim)
  const alumniData = [
    {
      title: "Postdoctoral Researchers",
      members: [
        {
          name: "Ashwini Nagaraj, PhD",
          focus:
            "Ashwini's research is focused on establishing high-grade serous ovarian cancer (HGSC) patient-derived immunocompetent model for functional testing immunotherapeutic agents. She was also interested in understanding the tumor microenvironment in chemo-resistant HGSC using single-cell spatial omics approaches, with the aim of identifying novel biomarkers and targets for immune and combination therapies in chemo-resistant HGSC.",
        },
        {
          name: "Julia Casado, PhD",
          focus:
            "Her research focused on the tumor microenvironment from highly-multiplexed images of tumor tissue. She designed and integrated algorithms to perform cell type and cell state calling with an emphasis on spatial localization and cell infiltration profiling.",
        },
        {
          name: "Elina Pietilä, PhD",
          focus:
            "She worked in precision medicine in high-grade serous ovarian cancer using immunocompetent patient-derived ex vivo cultures. Her project based on screening the effect of novel combinatorial immunotherapies on single-cell level in the tumor microenvironment.",
        },
      ],
    },
    {
      title: "PhD Students",
      members: [
        {
          name: "Fernando Perez, PhD",
          focus:
            "He is interested in identifying Genomic and Tumor microenvironment biomarkers that predict chemotherapy response in Ovarian Cancer. For that, he is developing algorithms to analyze fluorescence images and the detection of genomic imbalances patterns.",
        },
        {
          name: "Angéla Szabó, MSc",
          focus:
            "Her tasks mainly focused on celltype calling and image analysis. She's particularly interested in image visualization tools.",
        },
        { name: "David Kim, PhD", focus: "Machine learning approaches to spatial biology" },
        { name: "Lisa Anderson, PhD", focus: "Immune cell infiltration patterns in chemotherapy" },
      ],
    },
    {
      title: "Master's Students",
      members: [
        {
          name: "Venla Kaislo, BSc",
          focus:
            "Venla does omics data analysis and multimodal clinical modeling of chemo-naive ovarian cancer patients.",
        },
        {
          name: "Gayani Anandagoda, BSc",
          focus:
            "She is interested in applying bioinformatics and Machine learning tools to spatial transcriptomic data to analyze tumor microenvironment in high-grade serous ovarian cancer",
        },
        {
          name: "Lina Maltrovsky, BSc",
          focus:
            "Lina focused on combining highly multiplexed imaging with proteomics analysis and optimizing this method.",
        },
        {
          name: "Alva Grönholm, BSc",
          focus:
            "She focused on performing bioinformatic analyses for the cell cycle project on highly multiplexed imaging data.",
        },
        {
          name: "Matías Aiskovich, MSc",
          focus:
            "He is interested in applying bioinformatics and machine learning to tumor omics data. He focused on developing computer vision models for CycIF multiplexed imaging and GeoMx spatial transcriptomics data.",
        },
        {
          name: "Olavi Goussev, MSc (Tech)",
          focus:
            "He was concentrating on the development and implementation of machine learning processes and feature engineering methods for analyzing multiplex immunofluorescence image data from tumor microenvironments.",
        },
        {
          name: "Panagiotis Lilis, BSc",
          focus:
            "He specialized in cell culture with a primary focus on establishing long-term 3D ovarian tumor organoid cultures",
        },
        {
          name: "Foteini Chamchougia, MSc",
          focus:
            "Foteini was, at the time of her internship, a Biology Bachelor's student in the University of Patras, Greece. She was involved in multiple projects analyzing patient-derived samples and utilizing spatial techniques like tCycIF multiplexed imaging.",
        },
        {
          name: "Assel Kalmenova, MSc",
          focus:
            "Assel earned her B.Sc. in Biology and M.Sc. in Molecular Medicine from Nazarbayev University, Kazakhstan. During her studies she worked on cancer and hematology research. Her Internship focuses on expansion of high-grade serous ovarian cancer organoids, and on analysis of tumor microenvironment.",
        },
        {
          name: "Aditi Sirsikar, BSc",
          focus:
            "Her responsibilities included analyzing multi-dimensional drug response data from patient-derived immunocompetent cultures (iPDCs) and examining replication stress pathway activation using CyCIF to investigate molecular pathways driving patient-specific drug responses observed in iPDCs.",
        },
        {
          name: "Abhilash VA, MSc",
          focus:
            "Abhilash performed evaluations of immune cell-specific functional response following single or combinatorial treatment with DNA damaging and immunotherapy agents using patient-derived immunocompetent cultures of High Grade Serous Ovarian Cancer.",
        },
        {
          name: "Teodóra Faragó, MSc",
          focus:
            "Her tasks mainly consisted of automatic cell-type calling and computational analysis. Her main interests are biological algorithms and machine learning in medicine.",
        },
      ],
    },
  ];

  // ---- presentational subcomponent ----
  const MemberCard = ({ member, isPi = false }) => (
    <div className={`member-card ${isPi ? "pi-card glass-card" : "glass-card"}`}>
      <div className="member-image-container">
        <div className="image-placeholder">
          <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
        </div>
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-bio">{member.bio}</p>
      </div>
    </div>
  );

  return (
    <div className="lab-members-page">
      {/* Cover */}
      <div className="members-cover">
        <div className="cover-overlay">
          <h1>Lab Members</h1>
        </div>
      </div>

      <div className="members-container">
        {/* Active members */}
        {memberSections.map((section) => (
          <div key={section.title} className="member-category">
            <h2>{section.title}</h2>
            <div className="members-grid">
              {section.members.map((member, idx) => (
                <MemberCard key={`${member.name}-${idx}`} member={member} isPi={member.isPi} />
              ))}
            </div>
          </div>
        ))}

        {/* Alumni */}
        <div className="member-category">
          <h2>Alumni</h2>
          <div className="alumni-container">
            {alumniData.map((grp) => (
              <div key={grp.title} className="alumni-section">
                <h3>{grp.title}</h3>
                <div className="alumni-grid">
                  {grp.members.map((al, i) => (
                    <div key={`${al.name}-${i}`} className="alumni-card glass-card">
                      <div className="alumni-info">
                        <h4>{al.name}</h4>
                        <p className="alumni-focus">{al.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join us */}
        <div className="join-us-section glass-card">
          <h2>Join Our Team</h2>
          <p>
            We are always looking for talented and motivated researchers to join our team. We offer
            opportunities for PhD students, postdoctoral researchers, and research assistants.
          </p>
          <p>
            For inquiries, please contact{" "}
            <a href="mailto:anniina.farkkila@helsinki.fi">anniina.farkkila@helsinki.fi</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(Members);
