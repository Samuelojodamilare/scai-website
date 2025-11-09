import Button from "./Button";
import devicesImage from "../assets/devicesImage.png";
const Devices = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] md:py-20 pt-8 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 md:w-[683px] w-[400px]">
          <img
            src={devicesImage}
            alt="Laptop and mobile phone"
            className="w-full h-full "
          />
        </div>
        <div className="flex-1">
          <h2 className="md:text-3xl text-xl font-semibold text-[40px] leading-12 text-[#20419A] mb-2">
            Accessible on Multiple Devices
          </h2>
          <p className="text-gray-600 mb-8 font-medium md:text-xl text-base leading-relaxed">
            SatelliteCampusAI is designed for flexibility students and
            instructors can access the platform anytime, anywhere, using their
            phones, tablets, or computers. Learning continues seamlessly across
            all devices.
          </p>
          <Button className="bg-[#202B92]">Start Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Devices;
