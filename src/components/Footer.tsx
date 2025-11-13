import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChrome,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="w-full py-6 bg-[#F8FAFC] px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-0 gap-6 justify-between items-center mb-16">
          <div className="flex flex-col gap-4">
            <img src="/scai-logo.png" alt="scai-logo" width={128} height={50} />
            <h4 className="text-(--color-secondary) text-[22px] font-extrabold mb-2">
              SatelliteCAI
            </h4>
            <div className="flex flex-row md:flex-col lg:flex-row gap-8">
              <div className="text-(--color-primary) font-medium md:text-base text-sm">
                <p>Email</p>
                <p>satellitecampusai@gmail.com</p>
              </div>
              <div className="text-(--color-primary) font-medium md:text-base text-sm">
                <p>Phone Number</p>
                <p>+234 9032334587</p>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="text-(--color-primary) text-2xl md:max-w-[350px] lg:max-w-[470px] max-w-[470px] font-semibold mb-8 md:mb-16">
              Get Started with your Satellite Campus Ai Setup Today
            </h3>
            <div className="flex gap-2">
              <Button>Register</Button>
              {/* <Button className="bg-transparent border border-(--color-primary) text-(--color-primary)!">
                Book Demo
              </Button> */}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 mb-10">
          <div className="flex gap-1">
            <span className="bg-[#1E1E1E] p-2 flex justify-center items-center rounded-full text-white w-6 h-6 mb-2">
              <FontAwesomeIcon icon={faCheck} className="text-white text-md" />
            </span>
            <p className="text-(--color-primary)">
              Available on these platforms
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center rounded-lg px-4 md:px-5 py-3 transition-transform duration-300 hover:scale-[1.05] will-change-transform bg-transparent border border-(--color-primary) text-(--color-primary)!">
              <FontAwesomeIcon
                icon={faChrome}
                className="text-[#1E1E1E] text-2xl mr-2"
              />
              <span className="font-medium text-base lg:text-xl md:text-lg">
                Chrome
              </span>
            </div>
            <div className="flex items-center rounded-lg px-4 md:px-5 py-3 transition-transform duration-300 hover:scale-[1.05] will-change-transform bg-transparent border border-(--color-primary) text-(--color-primary)!">
              <FontAwesomeIcon
                icon={faApple}
                className="text-[#1E1E1E] text-2xl mr-2"
              />
              <span className="font-medium text-base lg:text-xl md:text-lg">
                IOS
              </span>
            </div>
            <div className="flex items-center rounded-lg px-4 md:px-5 py-3  transition-transform duration-300 hover:scale-[1.05] will-change-transform bg-transparent border border-(--color-primary) text-(--color-primary)!">
              <FontAwesomeIcon
                icon={faAndroid}
                className="text-[#1E1E1E] text-2xl mr-2"
              />
              <span className="font-medium text-base lg:text-xl md:text-lg">
                Android
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
