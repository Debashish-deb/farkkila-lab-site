import { motion } from 'framer-motion'
import hero from '../assets/home-hero.jpg'
import poster from '../assets/home-poster.jpg'
import SectionHeader from '../components/SectionHeader.jsx'
import PaperArticle from '../components/PaperArticle.jsx'

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center py-10 md:py-16">
        <motion.img initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
          src={hero} alt="Microenvironment illustration"
          className="rounded-2xl shadow-soft aspect-[4/3] object-cover border border-black/10" />
        <div className="dropcap">
          <h2 className="hdr text-4xl mb-2">We study tumor–immune microenvironments</h2>
          <p className="leading-7 text-justify">
            We want to understand the dynamics of the tumor microenvironment using systems oncology approaches.
            Our research focuses on developing prognostic and predictive biomarkers and new therapeutic strategies
            to improve the treatment and survival of patients with high-grade serous ovarian cancer (HGSC).
          </p>
        </div>
      </div>

      <SectionHeader kicker="Research" title="Current Focus" />
      <div className="grid md:grid-cols-2 gap-8">
        <PaperArticle title="Precision oncology of spatial immune escape mechanisms">
          <p className="text-justify">
            Surgery and chemotherapy are standard-of-care in ovarian cancer, yet relapse remains common.
            We leverage spatial genomics, transcriptomics and single-cell approaches based on tissue
            cyclic immunofluorescence (tCyCIF) to link alterations in the tumor microenvironment
            with clinical outcomes in the same microregion of tumor samples.
          </p>
        </PaperArticle>
        <PaperArticle title="Modeling of the tumor–immune microenvironment">
          <p className="text-justify">
            Responses to single-agent immunotherapies in HGSC are modest. We established patient-derived
            immunocompetent cultures (iPDCs) using a humanized matrix to evaluate functional and cytotoxic
            drug responses at single-cell level from iPDCs to combinations of DNA damaging and immunotherapeutic agents.
          </p>
        </PaperArticle>
      </div>

      <SectionHeader kicker="Lab Life" title="Blogs & Events" />
      <div className="grid md:grid-cols-2 gap-10">
        <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
          <img src={poster} alt="Poster" className="w-[120px] h-[120px] object-cover rounded-lg shadow-soft border border-black/10" />
          <div>
            <h4 className="hdr text-xl">ICAN Events in September</h4>
            <p className="text-sm leading-7">Our PhD students presented groundbreaking work at the iCAN symposium.</p>
          </div>
        </div>
        <div>
          <h4 className="hdr text-xl">Conference Event Hosting</h4>
          <p className="text-sm leading-7">Prof. Färkkilä hosted the latest international iCAN event, receiving outstanding feedback.</p>
          <a className="underline text-accent-700 hover:text-accent-800" href="#">Read More ...</a>
        </div>
      </div>

      <div className="my-12"><hr className="rule" /></div>
    </div>
  )
}