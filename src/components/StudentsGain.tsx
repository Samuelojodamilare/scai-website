import { useState } from "react";
import { gainItems } from "../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StudentsGain = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <section className="relative bg-[#D9D9D9] py-16 px-4 lg:px-12 overflow-hidden">
      <p className="text-center text-sm text-[#E2950B] mb-2">
        Offers you get to benefit from using SatelliteCAI
      </p>
      <h2 className="text-center text-3xl font-semibold text-[#19183b] mb-10">
        What Your Students Stand to Gain
      </h2>
      <div className="max-w-7xl flex flex-col md:flex-row items-center justify-center gap-10 mx-auto">
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {gainItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-4 p-4 rounded-xl text-left cursor-pointer font-medium transition-all ${
                activeIndex === index
                  ? "bg-[#19183b] text-white shadow-md"
                  : "bg-white text-[#19183b] hover:bg-[#f2f2f2]"
              }`}>
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  activeIndex === index
                    ? "bg-white text-[#19183b]"
                    : "bg-[#f4f4f4]"
                }`}>
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-(--color-primary) text-xl"
                />
              </span>
              {item.title}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-sm pb-6 lg:p-8 md:p-4 p-8 md:w-2/3 w-full flex flex-col md:flex-row items-center gap-6 transition-all">
          <div className="rounded-xl w-full lg:w-1/2 md:w-2/3 md:h-[300px] h-[250px] overflow-hidden">
            <img
              src={gainItems[activeIndex].image}
              alt={gainItems[activeIndex].title}
              className=" object-cover w-full h-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="lg:text-xl md:text-lg text-xl font-semibold text-[#19183b] mb-2">
              {gainItems[activeIndex].title}
            </h3>
            <p className="text-[#19183b]/80 lg:max-w-[950px] md:max-w-[800px] max-w-[950px] text-start leading-relaxed">
              {gainItems[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-6 hidden lg:block opacity-30 animate-rotate">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-(--color-primary) rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsGain;
