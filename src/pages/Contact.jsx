export default function Contact(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="hdr text-4xl">Contact</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white/70 rounded-xl p-6 border border-black/10 shadow-soft">
          <h3 className="hdr text-2xl mb-2">Get in touch</h3>
          <p>Helsinki, Finland</p>
          <p>email@example.org</p>
        </div>
        <iframe title="Map" className="w-full h-64 rounded-xl border border-black/10 shadow-soft"
          src="https://maps.google.com/maps?q=Helsinki&t=&z=11&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
    </div>
  )
}