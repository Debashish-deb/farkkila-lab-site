export default function Footer(){
  return (
    <footer className="mt-16 border-t border-black/10 bg-paper/80">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="hdr text-lg mb-2">Färkkilä Lab</h4>
          <p>Understanding tumor microenvironment dynamics in high-grade serous ovarian cancer.</p>
        </div>
        <div>
          <h4 className="hdr text-lg mb-2">Contact</h4>
          <p>Helsinki, Finland</p>
          <p>email@example.org</p>
        </div>
        <div>
          <h4 className="hdr text-lg mb-2">Quick links</h4>
          <ul className="space-y-1 underline">
            <li><a href="/">Home</a></li>
            <li><a href="/members">Lab Members</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/contact">Contacts</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-black/10">© {new Date().getFullYear()} Färkkilä Lab</div>
    </footer>
  )
}