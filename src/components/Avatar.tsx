import { getInitials } from '../initials';

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
        image = '',
         alt = 'avatar',
         fullName = 'AV',
         divCustomClass = 'w-11 h-11 items-end',
         imgCustomClass = 'w-10 h-10',
        nameCustomClass = '',
    } = props;

    return (
        <div
            className={`flex justify-center bg-[#F5F5F5] ${divCustomClass} ${circle === true ? 'rounded-full' : 'rounded-lg'}`}
        >
            {
                image.length > 0 ? (
                    <img src={image} alt={alt} className={`text-xm ${imgCustomClass}`}/>
                ) : (
                    <span className={`text-deep-blue font-bold ${nameCustomClass}`}>{getInitials(fullName)}</span>
                )
            }
        </div>
    )

}

export default Avatar;