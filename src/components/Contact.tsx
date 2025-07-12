"use client";

import Reveal from "./Reveal";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:jangidkulshresth@gmail.com?subject=Message from ${form.name}&body=${encodeURIComponent(
      form.message + "\n\n" + "From: " + form.email
    )}`;
    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="border-t border-gray-800 px-8 py-20 md:pl-[6rem]"
    >
      <Reveal>
        <h2 className="mb-12 text-3xl font-bold text-accent">Contact</h2>
      </Reveal>

      <Reveal delay={0.15}>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl space-y-6 text-sm text-gray-300"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-accent">
              Name
            </label>
            <input
              required
              id="name"
              name="name"
              onChange={handleChange}
              value={form.name}
              className="rounded border border-gray-700 bg-transparent px-3 py-2 outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-accent">
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={form.email}
              className="rounded border border-gray-700 bg-transparent px-3 py-2 outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-accent">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              onChange={handleChange}
              value={form.message}
              className="rounded border border-gray-700 bg-transparent px-3 py-2 outline-none focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="rounded border border-accent px-6 py-2 text-accent hover:bg-accent/10 transition"
          >
            Send Message
          </button>
        </form>
      </Reveal>
    </section>
  );
}
