import { featuresLeft, featuresRight } from "../constant";
import InstructorsImage from "../assets/InstructorsImage.jpg";

const Instructors = () => {
  return (
    <section className="relative w-full py-12 px-4 lg:px-12">
      <div className="absolute top-10 left-0 w-40 h-40 rounded-full border-8 border-(--color-secondary) opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-0 w-40 h-40 rounded-full border-8 border-(--color-primary) opacity-20 animate-float"></div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#19183b] mb-2">
          Why Satellite AI For Your Instructors?
        </h2>
        <p className="text-[#19183b]/80 max-w-2xl mx-auto">
          Below are few feeatures your instructors/teachers enjoy by using
          Satellite Campus AI for their teaching activities
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {featuresLeft.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-2xl">{feature.icon}</span>
              <div>
                <h4 className="font-semibold text-[#19183b] mb-1">
                  {feature.title}
                </h4>
                <p className="text-[#19183b]/80 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={InstructorsImage}
            alt="Instructor Teaching"
            className="rounded-2xl shadow-md object-cover w-[300px] md:w-[350px]"
          />
        </div>

        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {featuresRight.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-[#19183b] mb-1">
                  {item.title}
                </h4>
                <p className="text-[#19183b]/80 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
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

export default Instructors;
