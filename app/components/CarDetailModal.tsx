"use client";

import type { Car } from "@/app/data/inventory";
import { useEffect, useState } from "react";

const brandSpecs: Record<string, { engine: string; hp: string; drivetrain: string; acceleration: string; topSpeed: string }> = {
  "Mercedes-Benz": { engine: "3.0L Inline-6 Turbo", hp: "429 hp", drivetrain: "AWD", acceleration: "4.8s", topSpeed: "155 mph" },
  Lexus: { engine: "3.5L V6", hp: "354 hp", drivetrain: "AWD", acceleration: "5.7s", topSpeed: "142 mph" },
  Toyota: { engine: "2.5L 4-Cylinder Hybrid", hp: "208 hp", drivetrain: "FWD", acceleration: "7.0s", topSpeed: "135 mph" },
  Acura: { engine: "3.0L V6 Turbo", hp: "355 hp", drivetrain: "SH-AWD", acceleration: "5.0s", topSpeed: "145 mph" },
  Lamborghini: { engine: "6.5L V12", hp: "1,001 hp", drivetrain: "AWD", acceleration: "2.5s", topSpeed: "217 mph" },
  Dodge: { engine: "6.2L V8 Supercharged", hp: "717 hp", drivetrain: "RWD", acceleration: "3.6s", topSpeed: "168 mph" },
};

export default function CarDetailModal({
  car,
  onClose,
}: {
  car: Car;
  onClose: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const specs = brandSpecs[car.brand];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl anim-fade-in-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
        >
          &#10005;
        </button>

        <div className="grid md:grid-cols-5">
          <div className="relative md:col-span-3">
            <div className="aspect-[4/3] md:aspect-auto md:h-full bg-zinc-900 overflow-hidden">
              {imgError ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                  <div className="text-center">
                    <p className="text-6xl font-black tracking-tighter text-white/10">
                      {car.brand === "Mercedes-Benz" ? "MB" :
                       car.brand === "Lamborghini" ? "LB" :
                       car.brand === "Lexus" ? "LX" :
                       car.brand === "Acura" ? "AC" :
                       car.brand === "Toyota" ? "TY" :
                       car.brand === "Dodge" ? "DG" : "KA"}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-widest text-white/20">{car.brand}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.name}`}
                  className="h-full w-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col justify-center p-8 md:col-span-2 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              {car.brand}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              {car.name}
            </h2>
            <p className="mt-1 text-lg text-zinc-500">{car.model} &middot; {car.year}</p>
            <p className="mt-6 text-3xl font-bold text-white">
              {car.price}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {car.description}
            </p>

            {specs && (
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600">Engine</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">{specs.engine}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600">Horsepower</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">{specs.hp}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600">Drivetrain</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">{specs.drivetrain}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600">0-60 mph</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">{specs.acceleration}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600">Top Speed</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">{specs.topSpeed}</p>
                </div>
              </div>
            )}

            <button
              onClick={onClose}
              className="mt-8 h-12 w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:from-blue-400 hover:to-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
