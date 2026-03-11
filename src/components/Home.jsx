import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home" className="bg-gray-800 text-white text-center py-20">
      <img src={profile} className="w-32 h-32 rounded-full mx-auto" alt="Profile" />
      <h2 className="text-3xl mt-4">Hi, I'm Kalai Arasan</h2>
      <p>Frontend Developer • Web Designer • Programmer • YouTuber</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://instagram.com/" target="_blank">Instagram</a>
        <a href="https://youtube.com/" target="_blank">YouTube</a>
        <a href="https://github.com/" target="_blank">GitHub</a>
      </div>
    </section>
  );
}
