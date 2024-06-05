interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { text, onClick } = props;
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center px-4 py-2.5 bg-blue-700 rounded-lg text-white font-semibold w-full`}
        >
            {text}
        </button>
    );
};

export default Button;
