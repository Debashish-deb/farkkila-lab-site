export default function Publications(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="hdr text-4xl">Publications</h2>
      <p className="mt-4 leading-7 max-w-3xl">List your publications here. You can render from a JSON file or a Google Scholar export later.</p>
      <ol className="mt-6 space-y-4 list-decimal pl-6">
        <li className="leading-7"><strong>Author A</strong>, Author B. <em>Title of the paper</em>. Journal, 2025.</li>
        <li className="leading-7"><strong>Author C</strong>, Author D. <em>Another example</em>. Journal, 2024.</li>
      </ol>
    </div>
  )
}