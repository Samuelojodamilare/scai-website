const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`rounded-lg bg-(--color-primary) cursor-pointer text-white px-4 md:px-7 py-3 font-medium text-base md:text-xl transition-transform duration-300 hover:scale-[1.05] will-change-transform ${className}`}>
      {children}
    </button>
  );
};

export default Button;
