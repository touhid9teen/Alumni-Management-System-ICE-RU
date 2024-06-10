import { FC } from "react";

import Avatar from "../components/Avatar";

interface AvatarDescriptionProps {
    avatar: string;
    title: string;
    onClick: () => void;
    customParentClass?: string;
    customTitleClass?: string;
}

const AvatarWithDescription: FC<AvatarDescriptionProps> = (
    props: AvatarDescriptionProps
) => {
    const {
        avatar,
        title,
        onClick,
        customParentClass = "",
        customTitleClass = "",
    } = props;

    return (
        <div className={`flex items-center cursor-pointer ${customParentClass}`} onClick={onClick}>
            <Avatar
                image={avatar}
                fullName={title}
                divCustomClass={
                    avatar.length
                        ? "w-11 h-11 items-end"
                        : "w-11 h-11 items-center"
                }
            />

            <div className="my-1 ml-4 text-sm">
                <p className={`font-semibold text-black ${customTitleClass}`}>
                    {title}
                </p>
            </div>
        </div>
    );
};

export default AvatarWithDescription;
