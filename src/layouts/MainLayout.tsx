import React from "react";
import Wrapper from "../components/Layout/Wrapper";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col min-w-0 ">
        <Wrapper className="">{children}</Wrapper>
      </div>
    </div>
  );
};

export default MainLayout;
