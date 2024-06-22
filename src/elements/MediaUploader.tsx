import React from "react";
import { FaPhotoVideo } from "react-icons/fa";

interface MediaUploaderProps {
    media: string[];
    handleMediaUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    mediaType: "photo" | "video";
}

const MediaUploader: React.FC<MediaUploaderProps> = ({
    media,
    handleMediaUpload,
    mediaType,
}) => {
    return (
        <div className="flex flex-col mt-4 w-full">
            {media.length > 0 && (
                <div className="flex flex-wrap mb-4">
                    {media.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`upload-${index}`}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 object-cover mr-2 mb-2 rounded-lg"
                        />
                    ))}
                </div>
            )}
            <label className="flex flex-col sm:flex-row items-center justify-center border border-gray-300 rounded-lg p-4 cursor-pointer text-blue-500 text-lg hover:bg-gray-100 transition duration-200">
                <FaPhotoVideo className="mr-2" />
                <span>Add {mediaType === "photo" ? "Photo" : "Video"}</span>
                <input
                    id="media-upload"
                    name="media-upload"
                    type="file"
                    onChange={handleMediaUpload}
                    accept={mediaType === "photo" ? "image/*" : "video/*"}
                    className="hidden"
                />
            </label>
        </div>
    );
};

export default MediaUploader;
