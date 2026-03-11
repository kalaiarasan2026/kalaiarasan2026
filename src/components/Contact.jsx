import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="p-2 rounded text-black"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-2 rounded text-black"
        />
        <textarea
          name="msg"
          placeholder="Message"
          onChange={handleChange}
          className="p-2 rounded text-black"
        />
        <button className="bg-blue-500 py-2 rounded">Send</button>
      </form>
    </section>
  );
}
