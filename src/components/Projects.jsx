const projects = [
  { name: "Portfolio Site", desc: "My personal portfolio", link: "#" },
  { name: "E‑Commerce UI", desc: "React & Tailwind UI", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Recent Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p) => (
          <div key={p.name} className="border p-4 rounded hover:scale-105 transition">
            <h3 className="font-bold text-xl">{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} className="text-blue-500 underline">
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
