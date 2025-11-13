import { layout } from "../style";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div
        className={`${layout.container} max-w-7xl! flex items-center justify-between py-4 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-1 `}>
        <div className="flex items-end gap-2 font-bold text-xl md:text-2xl ">
          <div className="w-[110px] md:w-32 h-[50px]">
            <img
              src="/scai-logo.png"
              alt="scai-logo"
              width={128}
              height={50}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-(--color-secondary) hidden md:block">
            SatelliteCAI
          </span>
        </div>
        <Button>Register</Button>
      </div>
    </header>
  );
};

export default Header;
