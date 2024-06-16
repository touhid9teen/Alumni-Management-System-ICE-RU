import { HidePasswordIcon, ShowPasswordIcon } from "./Icons";
import { useState } from "react";

interface InputFieldProps {
    id: string;
    name: string;
    value: string;
    type?: string;
    placeholder?: string;
    customInputClass?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    accept?: string;
}

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
    const {
        type = "",
        placeholder = "",
        customInputClass = "",
        id,
        name,
        value,
        onChange,
        accept,
    } = props;

    const [isPasswordVisible, setIsPasswardVisible] = useState<boolean>(false);
    const togglePasswordVisibility = (): void => {
        setIsPasswardVisible((prevState) => !prevState);
    };

    if (type === "password") {
        return (
            <div className="relative w-full">
                <input
                    id={id}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    value={value}
                    className={`rounded-lg w-full px-4 py-2.5 text-deep-blue text-base border-2 border-silver-cloud placeholder:text-tranquil-blue placeholder:text-base ${customInputClass}`}
                 />

                {/* Icon for toggling password visibility */}
                {isPasswordVisible ? (
                    <ShowPasswordIcon
                        className="absolute top-1/2 right-4 transform -translate-y-1/2"
                        onClick={togglePasswordVisibility}
                    />
                ) : (
                    <HidePasswordIcon
                        className="absolute top-1/2 right-4 transform -translate-y-1/2"
                        onClick={togglePasswordVisibility}
                    />
                )}
            </div>
        );
    }

    return (
        <div className="w-full">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                accept={accept}
                className={`rounded-lg w-full px-4 py-2.5 text-deep-blue text-base border-2 border-silver-cloud placeholder:text-tranquil-blue placeholder:text-base ${customInputClass}`}
            />
        </div>
    );
};

export default InputField;
