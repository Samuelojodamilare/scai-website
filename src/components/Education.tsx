import { educationItems } from "../constant";
import Button from "./Button";
const Education = () => {
  const gradient = (direction: string, ...colors: string[]): string =>
    `linear-gradient(${direction}, ${colors.join(", ")})`;

  return (
    <section
      style={{ background: gradient("to right", "#d5e4e0", "#fafafa") }}
      className=" max-w-7xl rounded-2xl p-8 md:p-16 mx-auto my-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h2 className="md:text-3xl text-xl leading-12 font-semibold text-[40px] text-(--color-primary) mb-2">
            Education Without Limits
          </h2>
          <p className="text-gray-600 mb-8 font-medium md:text-xl text-base leading-relaxed">
            Empower your institution to grow without limits reach more learners,
            adapt to their needs, and deliver education that truly makes a
            difference.
          </p>
          <Button className="flex items-center gap-3 bg-[#e3e568] hover:bg-[#dada5c] text-(--color-primary) font-semibold px-6! py-3! pr-2! rounded-full! transition-all">
            Sign Up
            <span className="bg-(--color-primary) text-white rounded-full py-2.5 px-4">
              ↗
            </span>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6 md:w-1/2">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-8 hover:scale-105 transition-transform will-change-transform">
              <div className="bg-[#e3e568] rounded-full p-4 text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-(--color-primary) font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
