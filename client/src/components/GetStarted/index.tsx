import React from "react";
import { useLocation } from "wouter";

const GetStarted: React.FC = () => {
  const [, setLocation] = useLocation();
  return (
    <section className="w-full">
      {/* Sky-colored background for text section */}
      <div className="bg-[#FDFDFD] text-darkText px-6 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Your code speaks louder than a résumé.
          </h1>
          <p className="text-lg text-mutedGreen mb-8">
            Join <span className="font-semibold text-primary">DevCivitas</span>{" "}
            as a Civis. Learn, build, and let{" "}
            <span className="font-semibold text-secondary">Socius</span> find
            your talent.
          </p>
          <button
            className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition"
            onClick={() => setLocation("/signup")}
          >
            Get started
          </button>
        </div>
      </div>

      {/* Full-width image with no margin or padding */}
      <div className="w-full">
        <img
          src="/landing_page.jpg"
          alt="Civis and Socius working together"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default GetStarted;
