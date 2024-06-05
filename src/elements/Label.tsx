interface LabelProps {
    labelText: string;
    htmlFor?: string;
    customClass?: string;
}

const Label: React.FC<LabelProps> = (props: LabelProps) => {
    const { labelText, htmlFor, customClass } = props;
    const labelClass = customClass ?? "font-medium text-xs text-deep-blue";

    return (
        <label className={`${labelClass} inline-block`} htmlFor={htmlFor}>
            {labelText}
        </label>
    );
};

export default Label;
