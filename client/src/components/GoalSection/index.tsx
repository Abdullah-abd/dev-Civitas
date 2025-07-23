import React from "react";

const GoalSection: React.FC = () => {
  return (
    <section className="bg-background py-16 px-6 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-darkText mb-6">
          Empowering Civis & Socius
        </h2>
        <p className="text-lg text-mutedGreen mb-10 max-w-3xl mx-auto">
          Our mission is to provide a unified platform where{" "}
          <span className="text-primary font-semibold">Civis</span> can learn
          modern tech stacks, take part in{" "}
          <span className="text-secondary font-semibold">
            industry-level challenges
          </span>
          , and connect meaningfully with{" "}
          <span className="text-accent font-semibold">Socius</span>. It’s a
          space to grow, collaborate, and innovate — together.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="bg-white shadow-md rounded-xl p-6 border border-primary/20">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Learn New Stacks
            </h3>
            <p className="text-mutedGreen text-sm">
              From Frontend to DevOps, Civis can explore modern technologies
              with hands-on learning paths.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 border border-secondary/20">
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Take on Challenges
            </h3>
            <p className="text-mutedGreen text-sm">
              Solve real-world problems and prove your skills through
              industry-level tasks and hackathons.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 border border-accent/20">
            <h3 className="text-xl font-semibold text-accent mb-2">
              Connect & Grow
            </h3>
            <p className="text-mutedGreen text-sm">
              Bridge the gap between learners and experts — Civis and Socius —
              through meaningful collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
