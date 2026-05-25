import aboutImage from "./Image.jpeg";

export default function About() {
  return (
    <section id="about" className="relative bg-zinc-950 py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="anim-fade-in-up">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              About Kings Automobiles
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Defining the
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Art of Motion
              </span>
            </h2>
            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p className="delay-1 anim-fade-in-up">
                Since our founding, Kings Automobiles has stood as a beacon of automotive
                excellence. We curate the world&apos;s finest vehicles — from the precision
                engineering of Mercedes-Benz and Lexus to the raw power of Lamborghini and
                Dodge — delivering an unparalleled ownership experience.
              </p>
              <p className="delay-2 anim-fade-in-up">
                Our showroom is more than a gallery of machines; it is a sanctuary for those
                who demand the extraordinary. Every vehicle we showcase is hand-selected,
                meticulously prepared, and presented with the reverence it deserves.
              </p>
              <p className="delay-3 anim-fade-in-up">
                At Kings Automobiles, we don&apos;t simply sell cars — we curate dreams.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {[
                { label: "Vehicles Sold", value: "5,000+" },
                { label: "Years of Excellence", value: "25+" },
                { label: "Luxury Brands", value: "12" },
              ].map((s, i) => (
                <div key={s.label} className={`delay-${i + 4} anim-fade-in-up`}>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 delay-3 anim-fade-in-up">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-blue-600/10 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <img
                src={aboutImage.src}
                alt="Kings Automobiles Showroom"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
