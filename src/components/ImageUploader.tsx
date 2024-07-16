import { ChangeEvent, FC, useRef, useState } from "react";

// import placeHolder from '@renderer/assets/uploadImagePlaceholder.png';

interface ImageUploadProps {
    id?: string;
    name: string;
    maxSize?: number;
    onUpload: (data: { name: string; image: File }) => void;
}

const ImageUpload: FC<ImageUploadProps> = (props: ImageUploadProps) => {
    const { id, name, maxSize = 524288, onUpload } = props;
    const [image, setImage] = useState<File | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChangeImage = (event: ChangeEvent<HTMLInputElement>): void => {
        const target = event.target;

        if (target.files) {
            const selectedFile = target.files[0];
            if (selectedFile.type.startsWith("image/")) {
                if (selectedFile.size <= maxSize) {
                    setImage(selectedFile);
                    onUpload({ name, image: selectedFile });
                    setErrorMessage("");
                } else {
                    const imageSize = (selectedFile.size / 1024 / 1024).toFixed(
                        2
                    );
                    console.error(
                        "File Size must be <= 0.5 mb",
                        selectedFile.size / 1024 / 1024
                    );
                    setErrorMessage(
                        `File size must be less than ${(
                            maxSize /
                            1024 /
                            1024
                        ).toFixed(2)} MB. '${
                            selectedFile.name
                        }' size is ${imageSize} MB`
                    );
                }
            } else {
                console.error("Invalid file type. Please drop an image file.");
                setErrorMessage("Invalid file type. Please drop an image.");
            }
        }
    };

    return (
        <div key={id}>
            <div
                className={`relative rounded-xl pl-1 ${
                    !image ? "border border-dashed" : ""
                }`}
            >
                <input
                    type="file"
                    id={`upload-image-${name}`}
                    name={`upload-image-${name}`}
                    ref={inputRef}
                    onChange={handleChangeImage}
                    accept="image/*"
                    // className="absolute inset-0 opacity-0 cursor-pointer"
                />
            </div>

            {errorMessage && (
                <span className="mt-2 text-xs text-red-500">
                    {errorMessage}
                </span>
            )}
        </div>
    );
};

export default ImageUpload;
