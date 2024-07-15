import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface MyEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const MyEditor: React.FC<MyEditorProps> = ({value, onChange, placeholder}) => {
    


    // Define the custom toolbar
    const modules = {
        toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image", "video"],
            [{ color: [] }, { background: [] }], // Add color options
            ["clean"], // Remove formatting button
        ],
    };

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
        "color",
        "background",
    ];

    return (
        <div>
            <ReactQuill
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                placeholder={placeholder}
            />
        </div>
    );
};

export default MyEditor;
