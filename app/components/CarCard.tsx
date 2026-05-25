"use client";

import { useState } from "react";
import type { Car } from "@/app/data/inventory";

export default function CarCard({ car, onInquire }: { car: Car; onInquire?: (car: Car) => void }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.06] hover:shadow-[0_0_60px_rgba(59,130,246,0.12)] hover:-translate-y-1">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/5 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800/80">
        {imgError ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <div className="text-center">
              <p className="text-5xl font-black tracking-tighter text-white/10">
                {car.brand === "Mercedes-Benz" ? "MB" :
                 car.brand === "Lamborghini" ? "LB" :
                 car.brand === "Lexus" ? "LX" :
                 car.brand === "Acura" ? "AC" :
                 car.brand === "Toyota" ? "TY" :
                 car.brand === "Dodge" ? "DG" : "KA"}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/20">{car.brand}</p>
            </div>
          </div>
        ) : (
          <img
            src={car.image}
            alt={`${car.brand} ${car.name}`}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="relative p-5">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-widest text-blue-400/70 group-hover:text-blue-400 transition-colors duration-300">
            {car.brand}
          </span>
          <span className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors duration-300">
            {car.year}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
          {car.name}
        </h3>
        <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
          {car.model}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300">
          {car.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 group-hover:border-blue-500/10 transition-colors duration-300">
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            {car.price}
          </span>
          <button
            onClick={() => onInquire?.(car)}
            className="relative overflow-hidden rounded-lg border border-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-zinc-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
}
