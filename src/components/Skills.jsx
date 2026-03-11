const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {skills.map((s) => (
          <div key={s} className="bg-blue-600 text-white px-4 py-2 rounded">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
