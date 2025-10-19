export default function SectionHeader({kicker, title}){
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="h-px flex-1 bg-black/20"></div>
      <div className="text-center">
        <div className="uppercase tracking-widest text-xs text-paper-faded">{kicker}</div>
        <h2 className="hdr text-3xl md:text-4xl">{title}</h2>
      </div>
      <div className="h-px flex-1 bg-black/20"></div>
    </div>
  )
}