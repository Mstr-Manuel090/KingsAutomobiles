import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      >
        <source src="/cars/Hero video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center anim-fade-in-up">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400 delay-1 anim-fade-in-down">
          Premium Luxury Dealership
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl md:text-8xl delay-2 anim-fade-in-up">
          Drive Beyond
          <br />
          <span className="text-white">
            Extraordinary
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 delay-3 anim-fade-in-up">
          Experience automotive excellence at Kings Automobiles — where power meets precision,
          and every vehicle tells a story of uncompromising luxury.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center delay-4 anim-fade-in-up">
          <Link
            href="/showroom"
            className="group relative inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-10 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:from-blue-400 hover:to-blue-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
            <span className="relative z-10">Browse Inventory</span>
          </Link>
          <Link
            href="/#about"
            className="group inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-10 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            Discover More
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
