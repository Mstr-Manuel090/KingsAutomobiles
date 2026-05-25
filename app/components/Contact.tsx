"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-black py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.06)_0%,_transparent_60%)]" />
      <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center anim-fade-in-up">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Get in Touch
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Let Us Find Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Perfect Drive
            </span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-zinc-400 leading-relaxed">
            Whether you&apos;re ready to purchase or simply exploring, our concierge team is
            standing by to assist you.
          </p>
        </div>

        {submitted ? (
          <div className="anim-fade-in-up rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent p-12 text-center backdrop-blur-sm transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-2xl text-white shadow-lg anim-fade-in">
              ✓
            </div>
            <p className="text-xl font-semibold text-white">Thank You</p>
            <p className="mt-2 text-zinc-400">
              Your inquiry has been received. A member of our team will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 delay-1 anim-fade-in-up">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="group">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300 transition-colors duration-300 group-focus-within:text-blue-400">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder-zinc-600 outline-none backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20 hover:border-white/20"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300 transition-colors duration-300 group-focus-within:text-blue-400">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder-zinc-600 outline-none backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20 hover:border-white/20"
                />
              </div>
            </div>
            <div className="group">
              <label htmlFor="vehicle" className="mb-2 block text-sm font-medium text-zinc-300 transition-colors duration-300 group-focus-within:text-blue-400">
                Vehicle of Interest
              </label>
              <input
                id="vehicle"
                type="text"
                placeholder="e.g. Lamborghini Revuelto"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder-zinc-600 outline-none backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20 hover:border-white/20"
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300 transition-colors duration-300 group-focus-within:text-blue-400">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell us about your preferences or questions..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder-zinc-600 outline-none backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20 hover:border-white/20"
              />
            </div>
            <button
              type="submit"
              className="group relative h-14 w-full overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:from-blue-400 hover:to-blue-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
              <span className="relative z-10">Send Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
