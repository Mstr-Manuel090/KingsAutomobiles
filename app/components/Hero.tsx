import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.06)_0%,_transparent_50%)]" />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-blue-400/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center anim-fade-in-up">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400 delay-1 anim-fade-in-down">
          Premium Luxury Dealership
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl md:text-8xl delay-2 anim-fade-in-up">
          Drive Beyond
          <br />
          <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
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
