export default function Members(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="hdr text-4xl">Lab Members</h2>
      <p className="mt-4 leading-7 max-w-3xl">Introduce the team with portraits and short bios. The header and footer remain universal across pages.</p>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({length:6}).map((_,i)=>(
          <div key={i} className="bg-white/70 rounded-xl p-4 border border-black/10 shadow-soft">
            <div className="aspect-square bg-black/5 rounded-lg" />
            <h4 className="hdr mt-3 text-xl">Member {i+1}</h4>
            <p className="text-sm">Role / Research interest</p>
          </div>
        ))}
      </div>
    </div>
  )
}