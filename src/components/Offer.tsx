import { offerDetails } from "../constant";

const Offer = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 px-4 lg:px-12 overflow-hidden">
      <div className="absolute top-10 left-0 w-40 h-40 rounded-full border-8 border-(--color-secondary) opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-0 w-40 h-40 rounded-full border-8 border-(--color-primary) opacity-20 animate-float"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary) mb-4">
          Our Offer
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We’re redefining how universities operate in today’s digital world.
          SatelliteCampusAI provides an all-in-one solution that bridges
          physical and virtual learning environments
        </p>
      </div>

      <div className="w-full py-4 bg-[#F4F5F5]">
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto gap-6">
          {offerDetails.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
              <div
                className="w-10 h-10 p-2 flex items-center justify-center rounded-full text-white mb-4"
                style={{ background: offer.color }}>
                <img
                  src={offer.icon}
                  alt={offer.title}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-(--color-primary) mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
