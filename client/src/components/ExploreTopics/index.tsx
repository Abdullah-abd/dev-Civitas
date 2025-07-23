import {
  Briefcase,
  Cloud,
  Code,
  Cpu,
  Github,
  Layers,
  LayoutTemplate,
  Rocket,
  Search,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";
import React from "react";

const topics = [
  { label: "Frontend", icon: <LayoutTemplate size={16} /> },
  { label: "Backend", icon: <Server size={16} /> },
  { label: "Full Stack", icon: <Layers size={16} /> },
  { label: "React", icon: <Code size={16} /> },
  { label: "Node.js", icon: <Server size={16} /> },
  { label: "TypeScript", icon: <Code size={16} /> },
  { label: "DevOps", icon: <Cloud size={16} /> },
  { label: "Open Source", icon: <Github size={16} /> },
  { label: "Hackathons", icon: <Rocket size={16} /> },
  { label: "AI/ML", icon: <Cpu size={16} /> },
  { label: "Cybersecurity", icon: <Shield size={16} /> },
  { label: "Cloud", icon: <Cloud size={16} /> },
  { label: "Mobile Development", icon: <Smartphone size={16} /> },
  { label: "Freelancing", icon: <Briefcase size={16} /> },
  { label: "Show all", icon: <Search size={16} />, isPrimary: true },
];

const ExploreTopics: React.FC = () => {
  return (
    <section className="bg-[#FDF5F6] py-12 px-6 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#6D3841] mb-4">
          Explore Developer Topics
        </h2>
        <p className="text-gray-700 mb-8">
          Discover curated resources, guides, and developer stories across
          domains.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {topics.map(({ label, icon, isPrimary }) => (
            <button
              key={label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all
                ${
                  isPrimary
                    ? "border-[#3A8154] text-[#3A8154] hover:bg-[#3A8154] hover:text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreTopics;
