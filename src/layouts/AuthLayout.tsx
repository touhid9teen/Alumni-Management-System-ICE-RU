import React from 'react';


interface AuthLayoutProps {
  imageSource: string;
  imageAlt?: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = (props: AuthLayoutProps) => {
  const { imageSource, imageAlt = 'Authorization-Image', children } = props;
  return (
    <div className="w-screen h-screen flex justify-between bg-white relative">
      <div className="w-[43%]">
        <img className="w-full h-full" src={imageSource} alt={imageAlt} />
      </div>
      <div className="flex justify-center items-center w-[57%]">{children}</div>
    </div>
  );
};

export default AuthLayout;
