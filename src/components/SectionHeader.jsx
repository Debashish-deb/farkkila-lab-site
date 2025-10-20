export default function SectionHeader({ kicker, title }) {
  return (
    <div className="my-16 text-center">
      <div className="uppercase tracking-widest text-xs text-paper-ink/70 mb-1">
        {kicker}
      </div>
      <h2 className="hdr text-3xl md:text-4xl text-paper-ink">{title}</h2>
      <div className="w-20 h-px bg-paper-ink/30 mx-auto mt-3"></div>
    </div>
  )
}
