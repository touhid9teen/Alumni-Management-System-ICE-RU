import React from "react";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import Wrapper from "../components/Layout/Wrapper";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* <Header /> */}
        <main className="flex-1 overflow-y-auto">
          {/* <Wrapper className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8"> */}
          <Wrapper className="">{children}</Wrapper>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
