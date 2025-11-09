import { testimonyItems } from "../constant";

const Testimonies = () => {
  return (
    <section className="w-full py-12 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-start gap-4 mb-10 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-(--color-primary)">
            Testimonies from Our Users
          </h2>
          <p className="text-[#19183b]/80">
            Hear what others are saying about us
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 flex-wrap justify-center">
          {testimonyItems.map((item, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-[#E7F2EF] overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
              <p className="max-w-[554px]">{item.desc}</p>
              <div className="flex justify-between items-end">
                <h4 className="font-semibold text-(--color-primary) mt-10">
                  {item.name}
                </h4>
                <img
                  src={item.image}
                  alt={`${item.name} image`}
                  className="w-20 h-20 object-contain"
                />
              </div>
              {/* <div className="absolute right-0 bottom-0 w-[117px] h-[86px]">
                <img
                  src={item.image}
                  alt={`${item.name} image`}
                  className="w-full h-full"
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
