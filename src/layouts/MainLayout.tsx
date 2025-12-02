import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  customClassName?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  customClassName = "",
}) => {
  return (
    <div
      className={`
        w-full
        transition-colors duration-300
        ${customClassName}
      `}
    >
      <div className="">{children}</div>
    </div>
  );
};

export default Wrapper;
