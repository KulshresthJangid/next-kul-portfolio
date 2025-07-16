"use client";

import Reveal from "./Reveal";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:jangidkulshresth@gmail.com?subject=Message from ${
      form.name
    }&body=${encodeURIComponent(
      form.message + "\n\n" + "From: " + form.email
    )}`;
    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="border-t border-gray-800 px-8 py-20 md:pl-[6rem] lg:pr-[4rem]"
    >
      <Reveal>
        <h2 className="mb-12 text-3xl font-bold text-accent">Contact</h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 max-w-2xl space-y-6 text-sm text-gray-300"
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

          {/* WINDOWS XP STYLE MODAL */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="border-[3px] border-blue-500 rounded-lg bg-gray-100 shadow-xl">
              <div className="bg-blue-600 text-white text-sm px-4 py-2 font-bold rounded-t">
                Contact Preview
              </div>
              <div className="bg-white p-4 text-black font-mono text-sm space-y-2">
                <p>
                  <strong>Name:</strong> {form.name || "<empty>"}
                </p>
                <p>
                  <strong>Email:</strong> {form.email || "<empty>"}
                </p>
                <p>
                  <strong>Message:</strong> {form.message || "<empty>"}
                </p>
              </div>
              <div className="bg-gray-200 px-4 py-2 flex justify-end gap-2 rounded-b">
                <button className="px-4 py-1 bg-gray-300 border border-gray-400 text-sm">
                  OK
                </button>
                <button className="px-4 py-1 bg-gray-300 border border-gray-400 text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
