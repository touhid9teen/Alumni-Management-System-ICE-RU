import { useState } from "react";
import { NavLink } from "react-router-dom";

import RU from "../assets/Logo_of_rajshahi_university.jpg";
import {
    NavIcon,
    DashboardIcon,
    EventsIcon,
    HomeIcon,
    // Jobs,
    MentorshipIcon,
    SettingIcon,
    LogoutIcon,
    FundraisingIcon,
} from "../../elements/Icons";

interface Link {
    icon: JSX.Element;
    text: string;
    linkTo: string;
}

interface LProps extends Link {
    open: boolean;
}

const PageNavLinks: Link[] = [
    {
        icon: <HomeIcon />,
        text: "Home",
        linkTo: "/home",
    },
    {
        icon: <DashboardIcon />,
        text: "DashBoard",
        linkTo: "/dashboard",
    },
    {
        icon: <EventsIcon />,
        text: "Events",
        linkTo: "/events",
    },
    {
        icon: <FundraisingIcon />,
        text: "Fundraising",
        linkTo: "/fundraising",
    },
    {
        icon: <MentorshipIcon />,
        text: "Mentors",
        linkTo: "/mentors",
    },
    // {
    //     icon: <Jobs />,
    //     text: "Jobs",
    //     linkTo: "jobs",
    // },
];

const ActionNavLinks: Link[] = [
    {
        icon: <SettingIcon />,
        text: "Setting",
        linkTo: "/setting",
    },
    {
        icon: <LogoutIcon />,
        text: "Logout",
        linkTo: "/logout",
    },
];

const SideBarLink: React.FC<LProps> = (props: LProps) => {
    const { icon, text, linkTo, open } = props;
    return (
        <NavLink
            to={linkTo}
            className={({ isActive }) =>
                isActive
                    ? "block duration-300 text-primary"
                    : "block duration-300"
            }
        >
            <div
                className={`flex gap-7 items-center ${
                    !open && "justify-center"
                }`}
            >
                {icon}
                <div className={`${!open && "hidden"} flex gap-3 items-center`}>
                    <span className="text-sm font-medium">{text}</span>
                    {text !== "Contacts" ? (
                        ""
                    ) : (
                        <div className="bg-[#E5DFFF] text-black p-2 rounded-lg text-center text-[10px] font-bold">
                            56
                        </div>
                    )}
                </div>
            </div>
        </NavLink>
    );
};

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(true);
    //  const navigate = useNavigate();

    return (
        <div
            className={`${
                open ? "w-full" : "w-[76px]"
            } flex flex-col max-w-[276px] h-screen border-r-[1px] border-[#E9E9E9] p-[21px]`}
        >
            <div className="flex gap-[21px] mb-10">
                <NavIcon
                    onClick={() => setOpen(!open)}
                    className="cursor-pointer flex-shrink-0"
                />
                <div className="flex flex-col">
                    <img
                        className={`${!open ? "hidden" : "h-8 w-8 ml-6"}`}
                        src={RU}
                        alt="Logo of Rajshahi University"
                    />
                    <p className={`${!open && "hidden"} text-md font-medium `}>
                        Alumni ICE RU
                    </p>
                </div>
            </div>
            <div className="space-y-5 duration-100">
                {PageNavLinks.map((link) => (
                    <SideBarLink
                        key={link.text}
                        open={open}
                        icon={link.icon}
                        text={link.text}
                        linkTo={link.linkTo}
                    />
                ))}
            </div>

            <div
                className={`flex-row text-xs font-medium mt-[48px] mb-[26px] ${
                    !open ? "text-center" : "text-left"
                }`}
            ></div>

            <div className="space-y-5 duration-100">
                {ActionNavLinks.map((link) => (
                    <SideBarLink
                        key={link.text}
                        open={open}
                        icon={link.icon}
                        text={link.text}
                        linkTo={link.linkTo}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
