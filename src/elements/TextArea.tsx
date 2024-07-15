interface InputFieldProps {
    id: string;
    name: string;
    value: string;
    type?: string;
    placeholder?: string;
    customInputClass?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    accept?: string;
    height?: string;
}

const TextArea: React.FC<InputFieldProps> = (props: InputFieldProps) => {
    const {
        type = "",
        placeholder = "",
        customInputClass = "",
        id,
        name,
        value,
        onChange,
        accept,
        height = "auto",
    } = props;

    return (
        <div className="w-full">
            <textarea
                id={id}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                accept={accept}
                className={`rounded-lg w-full px-4 py-2.5 text-deep-blue text-base border-2 border-silver-cloud placeholder:text-tranquil-blue placeholder:text-base ${customInputClass}`}
                style={{ height }}
            />
        </div>
    );
};

export default TextArea;
