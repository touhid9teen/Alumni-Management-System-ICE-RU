import { FC } from "react";
import { formatDistanceToNow } from "date-fns";
import Avatar from "../components/Avatar";

interface AvatarDescriptionProps {
    avatar: string;
    title?: string;
    onClick: () => void;
    customParentClass?: string;
    customTitleClass?: string;
    time?: string;
}

const AvatarWithDescription: FC<AvatarDescriptionProps> = ({
    avatar,
    title,
    onClick,
    customParentClass = "",
    customTitleClass = "",
    time,
}) => {
    // Validate time is a valid date
    const isValidDate = (date: string) => !isNaN(Date.parse(date));
    const displayTime = time && isValidDate(time) ? formatDistanceToNow(new Date(time), { addSuffix: true }) : 'Invalid date';
    return (
        <div
            className={`flex items-center cursor-pointer ${customParentClass}`}
            onClick={onClick}
        >
            <Avatar
                image={avatar}
                divCustomClass={
                    avatar && avatar.length ? "w-11 h-11 items-end" : "w-11 h-11 items-center"
                }
            />
            <div className="ml-4">
                {title && time ? (
                    <div className="my-1">
                        <div className="font-bold">{title}</div>
                        <div className="text-sm text-gray-500 font-thin">
                            {displayTime}
                            {/* formatDistanceToNow(new Date(time), {
                                addSuffix: true,
                            }) */}
                        </div>
                    </div>
                ) : title ? (
                    <div className="my-1 text-sm">
                        <p className={`font-semibold text-black ${customTitleClass}`}>
                            {title}
                        </p>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default AvatarWithDescription;
