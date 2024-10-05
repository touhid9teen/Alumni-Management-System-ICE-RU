import React from "react";
import Avatar from "../../components/Avatar";
import Search from "../../elements/Search";
import { FaBell } from "react-icons/fa";

const Header: React.FC = () => {
    // Example notification count
    const notificationCount = 5;

    return (
        <nav className="sticky top-0 flex justify-between pr-5 py-4.5 w-full z-50 bg-white">
            <Search className="w-[541px] h-10.5" />

            {/* Notification and Avatar Section */}
            <div className="flex items-center space-x-6 relative px-6" >
                {/* Notification Icon with Badge */}
                <div className="relative cursor-pointer">
                    <FaBell className="text-gray-600 hover:text-blue-500" size={24} />
                    {notificationCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {notificationCount}
                        </span>
                    )}
                </div>

                {/* Avatar with round image */}
                <Avatar 
                    fullName="John Doe"
                    circle={true}  // Make the avatar round
                    divCustomClass="h-10 w-10" 
                    imgCustomClass="rounded-full"  // Ensure image is round
                    nameCustomClass="text-xl flex items-center cursor-pointer" 
                />
            </div>
        </nav>
    );
};

export default Header;
