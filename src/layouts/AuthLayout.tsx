import React from "react";

interface AuthLayoutProps {
  imageSource: string;
  imageAlt?: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  imageSource,
  imageAlt = "Auth Image",
  children,
}) => {
  return (
    <div className="min-h-screen w-full flex">
      <div className="hidden lg:block lg:w-2/5 xl:w-1/3 bg-gray-100">
        <img
          src={imageSource}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-3/5 xl:w-2/3 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
