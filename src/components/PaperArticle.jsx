import { motion } from 'framer-motion'
export default function PaperArticle({title, children}){
  return (
    <motion.article
      initial={{opacity:0, y: 18}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
      transition={{duration: 0.35, ease: "easeOut"}}
      className="bg-white/70 rounded-xl p-6 shadow-soft border border-black/10"
    >
      {title && <h3 className="hdr text-2xl">{title}</h3>}
      <div className="mt-2 leading-7">{children}</div>
    </motion.article>
  )
}