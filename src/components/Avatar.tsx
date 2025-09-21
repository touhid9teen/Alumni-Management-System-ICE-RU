// import { getInitials } from '../initials';

interface AvatarProps {
  circle?: boolean;
  image?: string;
  alt?: string;
  fullName?: string;
  divCustomClass?: string;
  imgCustomClass?: string;
  nameCustomClass?: string;
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const {
    circle = false,
    image = "",
    // alt = 'avatar',
    fullName = "AV",
    divCustomClass = "w-11 h-11 items-end",
    imgCustomClass = "w-10 h-10",
    // nameCustomClass = "",
  } = props;

  // Use a dummy avatar image if no image is provided
  const defaultAvatar = "https://randomuser.me/api/portraits/men/20.jpg";
  // Dummy avatar
  const avatarImage = image.length > 0 ? image : defaultAvatar;

  return (
    <div
      className={`flex justify-center bg-[#F5F5F5] ${divCustomClass} ${
        circle === true ? "rounded-full" : "rounded-lg"
      }`}
    >
      <img
        src={avatarImage}
        alt={fullName}
        className={`text-xm ${imgCustomClass}`}
      />
    </div>
  );
};

export default Avatar;
