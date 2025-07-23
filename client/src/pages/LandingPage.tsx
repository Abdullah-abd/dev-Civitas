// src/pages/LandingPage.tsx

import React from "react";
import ExploreTopics from "../components/ExploreTopics";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import GoalSection from "../components/GoalSection";
import { default as CivisSociusWelcome } from "../components/LandingHero";

const LandingPage: React.FC = () => {
  return (
    <main>
      {/* <LandingHero /> */}
      <CivisSociusWelcome />
      <ExploreTopics />
      <GoalSection />
      <GetStarted />
      <Footer />
      {/* Add other sections here later */}
    </main>
  );
};

export default LandingPage;
