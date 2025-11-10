import { useEffect } from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.body.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(link);
    };
  }, []);
  const handleCalendly = () => {
    const calendly = (window as any).Calendly;
    if (calendly && typeof calendly.initPopupWidget === "function") {
      calendly.initPopupWidget({
        url: "https://calendly.com/oodeyinka-study4as/60min",
      });
    } else {
      // Fallback if the Calendly script hasn't loaded yet
      window.open(
        "https://calendly.com/oodeyinka-study4as/60min",
        "_blank",
        "noopener,noreferrer"
      );
    }
    return false;
  };
  return (
    <button
      onClick={handleCalendly}
      className={`rounded-lg bg-(--color-primary) cursor-pointer text-white px-4 md:px-7 py-3 font-medium text-base md:text-xl transition-transform duration-300 hover:scale-[1.05] will-change-transform ${className}`}>
      {children}
    </button>
  );
};

export default Button;
