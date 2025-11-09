import Button from "./Button";
import needImage from "../assets/needImage.jpg";
import { needItems } from "../constant";
import { useState } from "react";
const CustomerNeed = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="relative w-full bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1 relative">
          <p className="text-(--color-primary) mb-8">
            Getting started with SatelliteCampusAI is simple. All you need is an
            internet connection and a device, no complex setup required.{" "}
          </p>
          <div className="rounded-2xl overflow-hidden">
            <img src={needImage} alt="Team meeting" />
          </div>
          <div className="bg-white rounded-full px-3 py-2 absolute bottom-6 -right-26 -translate-x-1/2">
            <Button className=" bg-(--color-secondary) text-white font-semibold px-8 py-3 rounded-full! shadow-md hover:scale-105 transition">
              Join Us Today
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-(--color-primary) mb-2">
            What You Need
          </h2>
          <p className="text-gray-600 mb-8">
            We understand your institution’s needs and we deliver solutions that
            work.
          </p>
          <div className="space-y-4">
            {needItems.map((item, i) => (
              <div
                key={i}
                onClick={() => toggleItem(i)}
                className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 bg-gray-50 hover:bg-gray-100 border-transparent`}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-(--color-primary) text-white font-bold">
                    {item.number}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-lg text-(--color-primary)`}>
                      {item.title}
                    </h4>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openIndex === i ? "max-h-40 mt-2" : "max-h-0"
                      }`}>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-6 hidden lg:block opacity-30 animate-rotate">
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

export default CustomerNeed;
