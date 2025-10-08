// HeroSection.tsx
import type { JSX } from "react";

interface Stat {
  label: string;
  value: string;
  description: string;
  position: { top: string; left?: string; right?: string };
}

const statsData: Stat[] = [
  {
    label: "EFFORTS REWARDED",
    value: "100%",
    description: "Every contribution counts",
    position: { top: "5%", left: "5%" },
  },
  {
    label: "EMPLOYERS CONNECTED",
    value: "1.5k+",
    description: "Trusted hiring partners",
    position: { top: "20%", right: "5%" },
  },
  {
    label: "SKILLS RECOGNIZED",
    value: "10k+",
    description: "Developers rated by real tasks",
    position: { top: "55%", left: "10%" },
  },
  {
    label: "PROJECTS BUILT",
    value: "320+",
    description: "Collaborations that showcase talent",
    position: { top: "75%", right: "10%" },
  },
];

export default function AboutSection(): JSX.Element {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#FDF5F6] rounded-xl shadow-lg">
      {/* Left Side */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-3xl font-bold mb-4 text-[#6D3841]">
          <span className="font-semibold text-[#E7556E]"> DevCivitas</span> —The{" "}
          <span className="text-[#3A8154]">Developers’ City </span>Where Every
          Effort Counts
        </h1>
        <p className="mb-6 text-justify text-gray-600">
          DevCivitas is a collaborative platform that bridges the gap between
          developers (Civis) and employers (Socius) — creating a transparent,
          skill-driven environment for real opportunities. We empower developers
          to showcase their abilities through practical, hands-on projects while
          helping employers discover talent based on performance, not just
          profiles. Every interaction on DevCivitas promotes growth,
          collaboration, and trust — building a digital community where
          innovation meets opportunity.
        </p>
        <button className="px-6 py-3 text-white font-semibold rounded-lg bg-primary hover:bg-primary/90 transition">
          Explore how it works?
        </button>
      </div>

      {/* Right Side */}
      <div className="relative md:w-1/2 flex justify-center items-start min-h-[300px]">
        {/* Image or Placeholder */}
        <div className="rounded-xl shadow-xl w-full max-w-sm h-screen bg-gray-100 flex items-center justify-center">
          <img
            src="/about-image2.jpg"
            alt="Hero"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
        </div>

        {/* Overlay Stats */}
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="absolute p-3 bg-white rounded-lg shadow-lg w-36"
            style={{
              top: stat.position.top,
              left: stat.position.left,
              right: stat.position.right,
            }}
          >
            <p className="text-xs text-gray-400">{stat.label}</p>
            <p className="text-lg font-bold">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
