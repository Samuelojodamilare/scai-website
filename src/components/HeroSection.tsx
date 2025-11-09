import { motion } from "motion/react";
import Button from "./Button";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-[#fff9ef] pt-48 pb-20 py-20 px-4 lg:px-12 overflow-hidden">
      <div
        className={`max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10 pb-8 mx-auto`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[634px]">
          <h4 className="text-(--color-secondary) font-semibold mb-2">
            SatelliteCAI
          </h4>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-(--color-primary) leading-tight mb-6">
            The Smarter Way to Run <br /> Your Satellite Campuses
          </h1>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            From enrolment to performance analytics, SatelliteCampusAI enables
            universities to manage multiple campuses seamlessly, ensuring
            consistency, accessibility, and control.
          </p>
          <Button>Book Demo</Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-2 gap-4 h-[366px]">
          <div className="flex flex-col gap-6 items-start">
            <div className="rounded-[10px] rounded-tl-[100px] overflow-hidden w-[180px] md:w-[204px] h-[276px] ">
              <img
                src={hero1}
                alt="a satellite"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-tr-lg rounded-bl-[25px] bg-(--color-primary) w-[190px] md:w-[226px] h-[60px] md:h-[69px] " />
          </div>
          <div className="flex flex-col gap-6 mt-16">
            <div className="rounded-tr-[25px] rounded-bl-lg bg-(--color-secondary) w-[190px] md:w-[226px] h-[60px] md:h-[69px] " />

            <div className="rounded-[10px] rounded-br-[100px] overflow-hidden w-[180px] md:w-[204px] h-[276px] ">
              <img
                src={hero2}
                alt="a classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
