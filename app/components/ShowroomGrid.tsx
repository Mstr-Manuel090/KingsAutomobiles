"use client";

import { useState, useMemo } from "react";
import { inventory, type Car } from "@/app/data/inventory";
import CarCard from "./CarCard";
import CarDetailModal from "./CarDetailModal";

export default function ShowroomGrid() {
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const brands = useMemo(
    () => [...new Set(inventory.map((c) => c.brand))].sort(),
    []
  );
  const years = useMemo(
    () => [...new Set(inventory.map((c) => c.year))].sort((a, b) => b - a),
    []
  );

  const modelsForBrand = useMemo(() => {
    const filtered = brandFilter
      ? inventory.filter((c) => c.brand === brandFilter)
      : inventory;
    return [...new Set(filtered.map((c) => c.model))].sort();
  }, [brandFilter]);

  const filtered: Car[] = useMemo(() => {
    return inventory.filter((c) => {
      const q = search.toLowerCase();
      return (
        (!search || c.name.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q)) &&
        (!brandFilter || c.brand === brandFilter) &&
        (!yearFilter || c.year === Number(yearFilter)) &&
        (!modelFilter || c.model === modelFilter)
      );
    });
  }, [search, brandFilter, yearFilter, modelFilter]);

  return (
    <section className="relative min-h-screen bg-black pt-28 pb-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-2 text-center anim-fade-in-up">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
            Our Collection
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The Showroom
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Browse our curated selection of the world&apos;s finest automobiles.
          </p>
        </div>

        <div className="mt-10 space-y-4 sm:space-y-0 delay-1 anim-fade-in-up">
          <div className="group">
            <input
              type="text"
              placeholder="Search by name or brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder-zinc-600 outline-none backdrop-blur-sm transition-all duration-300 focus:border-white/30 focus:bg-white/10 focus:ring-2 focus:ring-white/20 hover:border-white/20"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <select
              value={brandFilter}
              onChange={(e) => {
                setBrandFilter(e.target.value);
                setModelFilter("");
              }}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none backdrop-blur-sm transition-all duration-300 focus:border-white/30 focus:ring-2 focus:ring-white/20 hover:border-white/20"
            >
              <option value="" className="bg-zinc-900">All Brands</option>
              {brands.map((b) => (
                <option key={b} value={b} className="bg-zinc-900">{b}</option>
              ))}
            </select>

            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none backdrop-blur-sm transition-all duration-300 focus:border-white/30 focus:ring-2 focus:ring-white/20 hover:border-white/20"
            >
              <option value="" className="bg-zinc-900">All Years</option>
              {years.map((y) => (
                <option key={y} value={y} className="bg-zinc-900">{y}</option>
              ))}
            </select>

            <select
              value={modelFilter}
              onChange={(e) => setModelFilter(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none backdrop-blur-sm transition-all duration-300 focus:border-white/30 focus:ring-2 focus:ring-white/20 hover:border-white/20"
            >
              <option value="" className="bg-zinc-900">All Models</option>
              {modelsForBrand.map((m) => (
                <option key={m} value={m} className="bg-zinc-900">{m}</option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 text-center delay-2 anim-fade-in-up">
            <p className="text-2xl text-zinc-600">No vehicles match your criteria.</p>
            <p className="mt-2 text-zinc-500">Try adjusting the filters above.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((car, i) => (
              <div key={car.id} className={`delay-${Math.min(i + 1, 6)} anim-fade-in-up`}>
                <CarCard car={car} onInquire={setSelectedCar} />
              </div>
            ))}
          </div>
        )}

        <p className="mt-10 text-center text-sm text-zinc-600 delay-3 anim-fade-in-up">
          Showing {filtered.length} of {inventory.length} vehicles
        </p>
      </div>

      {selectedCar && (
        <CarDetailModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </section>
  );
}
