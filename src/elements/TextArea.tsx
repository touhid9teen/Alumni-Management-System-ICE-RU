interface TextAreaProps {
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  customInputClass?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  height?: string;
}

const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {
  const {
    placeholder = "",
    customInputClass = "",
    id,
    name,
    value,
    onChange,
    height = "auto",
  } = props;

  return (
    <div className="w-full">
      <textarea
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        className={`rounded-lg w-full px-4 py-2.5 text-deep-blue text-base border-2 border-silver-cloud placeholder:text-tranquil-blue placeholder:text-base ${customInputClass}`}
        style={{ height }}
      />
    </div>
  );
};

export default TextArea;
