import { ActivitySquare, BarChart2, Cpu, Target, Users } from "lucide-react";
import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const carouselData = [
  {
    titleSmall: "Skill-Based Tasking,",
    titleBig: "Every skill counts.",
    paragraphs: [
      "Complete real-world challenges and micro-projects that highlight your abilities. Every task is a step toward growth, learning, and recognition.",
    ],
    signature: "",
  },
  {
    titleSmall: "Profile & Performance,",
    titleBig: "Dashboard.",
    paragraphs: [
      "Track contributions, task ratings, and milestones. Turn your work into measurable credibility.",
    ],
    signature: "",
  },
  {
    titleSmall: "AI Mentorship,",
    titleBig: "Guided Growth.",
    paragraphs: [
      "Receive personalized AI feedback from your first line of code to full Git history management. Learn smarter, grow faster.",
    ],
    signature: "",
  },
  {
    titleSmall: "Transparent Performance Metrics,",
    titleBig: "Measure What Matters.",
    paragraphs: [
      "Get an honest view of your progress with measurable, data-backed insights. Every task and evaluation is recorded transparently, helping users and organizations make informed decisions based on true capability.",
    ],
    signature: "",
  },
  {
    titleSmall: "Discover Proven Talent,",
    titleBig: "Hire with Confidence.",
    paragraphs: [
      "Connect with verified, skilled individuals who’ve proven their abilities through real-world projects. Organizations can easily discover top talent based on authentic performance data — not just resumes.",
    ],
    signature: "",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="relative bg-background py-20 overflow-hidden">
      {/* Main Content */}
      <div className="relative container mx-auto px-6 md:px-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:justify-between gap-6">
          {/* Left Image */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src="/service-image.jpg"
              alt="Team"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Right Swiper */}
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              className="min-h-[300px]"
            >
              {carouselData.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="p-6 text-left">
                    <h3 className="text-lg text-accent mb-2 font-medium">
                      {slide.titleSmall}
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-darkText mb-4 md:mb-6">
                      {slide.titleBig}
                    </h2>
                    {slide.paragraphs.map((para, i) => (
                      <p
                        key={i}
                        className="text-gray-600 leading-relaxed mb-4 md:mb-6"
                      >
                        {para}
                      </p>
                    ))}
                    {slide.signature && (
                      <div className="mt-4">
                        <img
                          src={slide.signature}
                          alt="Signature"
                          className="w-28 md:w-32 opacity-70"
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-3">
              <Target className="text-3xl text-accent" size={40} />
            </div>
            <p className="text-gray-500 mt-1">Skill-Based Tasking</p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <ActivitySquare className="text-3xl text-primary" size={40} />
            </div>
            <p className="text-gray-500 mt-1">
              Profile & Performance Dashboard
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <Cpu className="text-3xl text-secondary" size={40} />
            </div>
            <p className="text-gray-500 mt-1">AI Powered Mentorship</p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <BarChart2 className="text-3xl text-mutedGreen" size={40} />
            </div>
            <p className="text-gray-500 mt-1">
              Transparent Performance Metrics
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              <Users className="text-3xl text-darkText" size={40} />
            </div>
            <p className="text-gray-500 mt-1">Discover Proven Talent</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
