export interface Car {
  id: number;
  name: string;
  brand: string;
  year: number;
  model: string;
  price: string;
  image: string;
  description: string;
}

export const inventory: Car[] = [
  { id: 1, name: "S-Class", brand: "Mercedes-Benz", year: 2025, model: "S 580", price: "$118,000", image: "/cars/mercedes-s-class.jpg", description: "The pinnacle of luxury and innovation." },
  { id: 2, name: "E-Class", brand: "Mercedes-Benz", year: 2024, model: "E 350", price: "$62,000", image: "/cars/mercedes-e350-2025.jpg", description: "Sophisticated executive sedan." },
  { id: 3, name: "GLE", brand: "Mercedes-Benz", year: 2025, model: "GLE 450", price: "$72,000", image: "/cars/mercedes-gle450-2024.jpg", description: "Luxury SUV with commanding presence." },
  { id: 4, name: "LS", brand: "Lexus", year: 2025, model: "LS 500", price: "$80,000", image: "/cars/lexus-ls500.jpg", description: "Flagship luxury sedan with impeccable craftsmanship." },
  { id: 5, name: "RX", brand: "Lexus", year: 2024, model: "RX 350", price: "$50,000", image: "/cars/lexus-rx350.jpg", description: "Best-selling luxury crossover." },
  { id: 6, name: "NX", brand: "Lexus", year: 2025, model: "NX 350h", price: "$44,000", image: "/cars/lexus-nx.jpg", description: "Hybrid luxury compact SUV." },
  { id: 7, name: "Camry", brand: "Toyota", year: 2025, model: "XSE", price: "$34,000", image: "/cars/toyota-camry-2025.jpg", description: "The iconic midsize sedan, reimagined." },
  { id: 8, name: "Corolla", brand: "Toyota", year: 2025, model: "LE", price: "$24,000", image: "/cars/toyota-corolla-2024.jpg", description: "Reliable, efficient, and stylish." },
  { id: 9, name: "Highlander", brand: "Toyota", year: 2024, model: "Limited", price: "$48,000", image: "/cars/toyota-highlander-2024.jpg", description: "Spacious family SUV with advanced safety." },
  { id: 10, name: "MDX", brand: "Acura", year: 2025, model: "Type S", price: "$68,000", image: "/cars/acura-mdx-2025.jpg", description: "Performance luxury SUV." },
  { id: 11, name: "TLX", brand: "Acura", year: 2024, model: "A-Spec", price: "$46,000", image: "/cars/acura-tlx-2024.jpg", description: "Sport sedan with precision handling." },
  { id: 12, name: "Integra", brand: "Acura", year: 2025, model: "Type S", price: "$52,000", image: "/cars/acura-integra.jpg", description: "Iconic nameplate reborn for the modern era." },
  { id: 13, name: "Revuelto", brand: "Lamborghini", year: 2025, model: "LB744", price: "$608,000", image: "/cars/lamborghini-revuelto.jpg", description: "Plug-in hybrid V12 flagship." },
  { id: 14, name: "Urus", brand: "Lamborghini", year: 2025, model: "Performante", price: "$260,000", image: "/cars/lamborghini-urus.jpg", description: "Super SUV, everyday extraordinary." },
  { id: 15, name: "Hurac\u00E1n", brand: "Lamborghini", year: 2024, model: "STO", price: "$340,000", image: "/cars/lamborghini-huracan.jpg", description: "Raw V10 track-focused masterpiece." },
  { id: 16, name: "Charger", brand: "Dodge", year: 2025, model: "SRT Hellcat", price: "$98,000", image: "/cars/dodge-charger.jpg", description: "American muscle with 707 horsepower." },
  { id: 17, name: "Challenger", brand: "Dodge", year: 2024, model: "SRT Demon 170", price: "$110,000", image: "/cars/dodge-challenger.jpg", description: "The ultimate drag strip predator." },
  { id: 18, name: "Durango", brand: "Dodge", year: 2025, model: "SRT Hellcat", price: "$96,000", image: "/cars/dodge-durango.jpg", description: "Three-row SUV with Hellcat fury." },
];
