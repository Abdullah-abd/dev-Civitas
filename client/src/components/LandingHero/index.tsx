import { Briefcase, User } from "lucide-react";
import React from "react";

const CivisSociusWelcome: React.FC = () => {
  return (
    <div className="w-full px-6 py-12 bg-[#FDF5F6] rounded-2xl shadow-md flex flex-col gap-8 items-center">
      <h1 className="text-4xl font-bold text-center text-[#6D3841]">
        Welcome to <span className="text-[#3A8154]">Dev Civitas</span>
      </h1>
      <p className="text-lg text-center max-w-3xl text-[#6D3841]">
        Join a thriving hub where{" "}
        <span className="font-semibold text-[#3A8154]">Civis</span> (developers)
        and <span className="font-semibold text-[#E7556E]">Socius</span>{" "}
        (employers & collaborators) connect, grow, and build together.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mt-8">
        {/* Civis Section */}
        <div className="flex flex-col items-center text-center bg-white shadow rounded-xl p-6 border border-[#3A8154]">
          <User className="w-12 h-12 text-[#3A8154] mb-4" />
          <h2 className="text-2xl font-semibold text-[#3A8154]">Civis</h2>
          <p className="text-[#394E4A] mt-2">
            Step into a city of code. Learn, share, contribute, and level up
            your skills with real-world projects and community-driven growth.
          </p>
        </div>

        {/* Socius Section */}
        <div className="flex flex-col items-center text-center bg-white shadow rounded-xl p-6 border border-[#E7556E]">
          <Briefcase className="w-12 h-12 text-[#E7556E] mb-4" />
          <h2 className="text-2xl font-semibold text-[#E7556E]">Socius</h2>
          <p className="text-[#394E4A] mt-2">
            Discover talented developers, post challenges, sponsor tasks, and
            collaborate directly with the builder community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CivisSociusWelcome;
