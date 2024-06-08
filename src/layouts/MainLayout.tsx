import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import Wrapper from "../components/Layout/Wrapper";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
}: MainLayoutProps) => {
    return (
        <div className="flex justify-between gap-x-7">
            <Sidebar />
            <div className="overflow-auto flex flex-col w-full h-screen">
                <Header />
                <Wrapper className="pr-7">{children}</Wrapper>
            </div>
        </div>
    );
};

export default MainLayout;
