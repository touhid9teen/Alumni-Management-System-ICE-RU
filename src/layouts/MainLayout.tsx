import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  customClassName?: string;
  padding?: "sm" | "md" | "lg" | "none";
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  customClassName = "",
  padding = "md",
}) => {
  const paddingClasses = {
    sm: "px-4 py-6 sm:px-6 lg:px-8",
    md: "px-4 py-8 sm:px-6 lg:px-10",
    lg: "px-4 py-12 sm:px-6 lg:px-16",
    none: "",
  };

  return (
    <div
      className={`
        w-full
        ${paddingClasses[padding]}
        transition-colors duration-300
        ${customClassName}
      `}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
};

export default Wrapper;
