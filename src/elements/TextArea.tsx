import React from 'react';

interface TextAreaProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    minHeight: string;
    maxLength?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder, minHeight, maxLength }) => {
    return (
        <div className="relative">
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border border-gray-300 w-full p-4 rounded-lg focus:outline-none "
                placeholder={placeholder}
                style={{ minHeight: minHeight, resize: "none" }}
            ></textarea>
        </div>
    );
};

export default TextArea;
