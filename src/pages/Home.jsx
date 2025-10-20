import { motion } from 'framer-motion'
import hero from '../assets/home-hero.png'
import poster from '../assets/home-poster.png'

// Funding Logos
import ercLogo from '../assets/funding/erc.png'
import academyFinlandLogo from '../assets/funding/academy-finland.png'
import sigridJuseliusLogo from '../assets/funding/sigrid-juselius.png'
import finnishCancerLogo from '../assets/funding/finnish-cancer.png'
import suomenLogo from '../assets/funding/suomen-kulturi.jpg'
import paulonsaatioLogo from '../assets/funding/paulon-saatio.png'
import uniHelsinkiLogo from '../assets/funding/UH.png'
import astrazenecaLogo from '../assets/funding/astrazeneca.png'

import SectionHeader from '../components/SectionHeader.jsx'
import PaperArticle from '../components/PaperArticle.jsx'

// Motion variants for scroll effects
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
}

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      
      {/* 🌿 Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
        <motion.img
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={hero}
          alt="Microenvironment illustration"
          className="rounded-3xl w-full h-auto object-cover bg-paper/20 mix-blend-multiply shadow-soft"
        />
        <motion.div
          className="dropcap"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="hdr text-4xl md:text-5xl mb-6 leading-tight text-paper-ink">
            We study tumor–immune microenvironments
          </h2>
          <p className="leading-8 text-justify text-[1.08rem] text-paper-ink/90">
            We want to understand the dynamics of the tumor microenvironment using systems oncology approaches.
            Our research focuses on developing prognostic and predictive biomarkers and new therapeutic strategies
            to improve the treatment and survival of patients with high-grade serous ovarian cancer (HGSC).
          </p>
        </motion.div>
      </div>

      {/* 🔬 Research Section */}
      <div className="my-28">
        <SectionHeader kicker="Research" title="Current Focus" />
        <div className="grid md:grid-cols-2 gap-14 mt-14">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <PaperArticle title="Precision oncology of spatial immune escape mechanisms">
              <p className="text-justify leading-8 text-paper-ink/90">
                Surgery and chemotherapy are standard-of-care in ovarian cancer, yet relapse remains common.
                We leverage spatial genomics, transcriptomics and single-cell approaches based on tissue
                cyclic immunofluorescence (tCyCIF) to link alterations in the tumor microenvironment
                with clinical outcomes in the same microregion of tumor samples.
              </p>
            </PaperArticle>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <PaperArticle title="Modeling of the tumor–immune microenvironment">
              <p className="text-justify leading-8 text-paper-ink/90">
                Responses to single-agent immunotherapies in HGSC are modest. We established patient-derived
                immunocompetent cultures (iPDCs) using a humanized matrix to evaluate functional and cytotoxic
                drug responses at single-cell level from iPDCs to combinations of DNA damaging and immunotherapeutic agents.
              </p>
            </PaperArticle>
          </motion.div>
        </div>
      </div>

      {/* 🧬 Lab Life Section */}
      <div className="my-32">
        <SectionHeader kicker="Lab Life" title="Blogs & Events" />
        <div className="grid md:grid-cols-2 gap-14 mt-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-[160px_1fr] gap-6 items-start"
          >
            <img
              src={poster}
              alt="Poster"
              className="w-[160px] h-[160px] object-cover rounded-2xl mix-blend-multiply"
            />
            <div>
              <h4 className="hdr text-xl mb-1 text-paper-ink">ICAN Events in September</h4>
              <p className="text-base leading-7 text-paper-ink/90">
                Our PhD students presented groundbreaking work at the iCAN symposium.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h4 className="hdr text-xl mb-1 text-paper-ink">Conference Event Hosting</h4>
            <p className="text-base leading-7 mb-2 text-paper-ink/90">
              Prof. Färkkilä hosted the latest international iCAN event, receiving outstanding feedback.
            </p>
            <a className="underline text-accent-700 hover:text-accent-800" href="#">
              Read More ...
            </a>
          </motion.div>
        </div>
      </div>

      {/* 🌍 Funding & Collaborations Section */}
      <motion.section
        className="funding-section my-32"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader kicker="Collaborations" title="Funding & Partnerships" />

        <p className="text-center max-w-2xl mx-auto mt-4 text-[1.1rem] text-paper-ink/90">
          Our groundbreaking research is made possible through the generous support of research councils,
          foundations, and collaborations with academic and industry partners.
        </p>

        <div className="funding-grid mt-14">
          {[
            {
              title: 'Major Funding Agencies',
              items: [
                [ercLogo, 'European Research Council'],
                [academyFinlandLogo, 'Academy of Finland'],
                [sigridJuseliusLogo, 'Sigrid Jusélius Foundation']
              ]
            },
            {
              title: 'Research Foundations',
              items: [
                [finnishCancerLogo, 'Finnish Cancer Foundation'],
                [suomenLogo, 'Suomen Kulttuurirahasto'],
                [paulonsaatioLogo, 'Paulo Foundation']
              ]
            },
            {
              title: 'Institutional & Industry Partners',
              items: [
                [uniHelsinkiLogo, 'University of Helsinki'],
                [astrazenecaLogo, 'AstraZeneca Ltd.']
              ]
            }
          ].map((col, i) => (
            <motion.div
              key={i}
              className="funding-column"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="funding-header">{col.title}</h4>
              <div className="funding-list">
                {col.items.map(([logo, name], idx) => (
                  <motion.div
                    key={idx}
                    className="funding-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <img src={logo} alt={name} className="funding-logo" />
                    <span>{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ⚖️ Footer Line */}
      <motion.div
        className="mt-20 mb-10 text-center text-paper-ink/70 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
      </motion.div>
    </div>
  )
}
