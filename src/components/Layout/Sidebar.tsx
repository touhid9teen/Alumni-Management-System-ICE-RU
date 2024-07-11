import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import RU from "../../assets/Logo_of_rajshahi_university.jpg";
import {
	NavIcon,
	DashboardIcon,
	EventsIcon,
	HomeIcon,
	// Jobs,
	MentorshipIcon,
	SettingIcon,
	LogoutIcon,
	LoginIcon,
	BlogIcon,
	AlumniAssociationIcon,
} from "../../elements/Icons";
import { routes } from "../../constants/Route";
import { LOCAL_STORAGE_KEYS } from "../../constants/Global";

interface Link {
	icon: JSX.Element;
	text: string;
	linkTo: string;
	onClick?: () => void;
}

interface LProps extends Link {
	open: boolean;
}

const PageNavLinks: Link[] = [
	{
		icon: <HomeIcon />,
		text: "Home",
		linkTo: routes.home.path,
	},
	{
		icon: <DashboardIcon />,
		text: "DashBoard",
		linkTo: routes.alumniTableInfo.path,
	},
	{
		icon: <BlogIcon />,
		text: "Blog",
		linkTo: routes.blog.path,
	},
	{
		icon: <EventsIcon />,
		text: "Events",
		linkTo: "/events",
	},
	{
		icon: <AlumniAssociationIcon />,
		text: "Alumni Association",
		linkTo: routes.alumniAssociationCommittee.path,
	},
	{
		icon: <MentorshipIcon />,
		text: "Mentors",
		linkTo: "/mentors",
	},
];

const ActionNavLinks: Link[] = [
	{
		icon: <SettingIcon />,
		text: "Setting",
		linkTo: "/setting",
	},
];

const SideBarLink: React.FC<LProps> = (props: LProps) => {
	const { icon, text, linkTo, open, onClick } = props;

	return (
		<NavLink
			onClick={onClick}
			to={linkTo}
			className={({ isActive }) =>
				isActive && text !== "Logout" && text !== "Login"
					? "block duration-300 "
					: "block duration-300"
			}
		>
			<div className={`flex gap-7 items-center hover:bg-gray-200  rounded-md ${!open && "justify-center"}`}>
				<div className="flex gap-3 pl-4 items-center ">
					{icon}
				</div>
				<div className={`${!open && "hidden"} flex gap-3 items-center `}>
					<span className="text-sm font-medium ">{text}</span>
				</div>
			</div>
		</NavLink>
	);
};

const Sidebar: React.FC = () => {
	const [open, setOpen] = useState(true);
	const location = useLocation();
	const pathName = location.pathname;
	console.log(pathName);
	//  const navigate = useNavigate();
	const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

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
			<div className="flex-grow space-y-5 duration-100 ">
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
				{token ? (
					<SideBarLink
						icon={<LogoutIcon />}
						text="Logout"
						linkTo={routes.home.path}
						open={open}
						onClick={() => {
							localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
							localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_NAME);
							localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_EMAIL);
						}}
					/>
				) : (
					<SideBarLink
						icon={<LoginIcon />}
						text="Login"
						linkTo={routes.login.path}
						open={open}
					/>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
