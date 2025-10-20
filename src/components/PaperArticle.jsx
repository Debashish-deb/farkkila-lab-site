import { motion } from 'framer-motion'

export default function PaperArticle({ title, children }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl p-8 text-paper-ink"
    >
      {title && (
        <h3 className="hdr text-2xl mb-4 text-paper-ink/95">
          {title}
        </h3>
      )}
      <div className="leading-8 text-paper-ink/90">
        {children}
      </div>
    </motion.article>
  )
}
