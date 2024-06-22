import React, { useState } from "react";
import { Comment } from "../interfaces";
import { FaPhotoVideo, FaPaperPlane } from "react-icons/fa";
import AvatarWithDescription from "./AvatarWithDescription";
import Avatar from "../assets/avatar.png";
import Button from "../elements/Button";
import TextArea from "../elements/TextArea";
import MediaUploader from "../elements/MediaUploader";

interface CreateCommentFormProps {
    onCreatePost: (comment: Comment) => void;
}

const CreateCommentForm: React.FC<CreateCommentFormProps> = ({
    onCreatePost,
}) => {
    const [content, setContent] = useState("");
    const [media, setMedia] = useState<string[]>([]);
    const [postValue, setPostValue] = useState("");

    const handleMediaUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const fileArray = Array.from(files).map((file) =>
                URL.createObjectURL(file)
            );
            setMedia((prevMedia) => prevMedia.concat(fileArray));
        }
    };

    const handleSubmit = () => {
        const newComment: Comment = {
            id: Date.now().toString(),
            userId: "1", // Replace with actual user ID
            userName: "John Doe", // Replace with actual user name
            userPhoto: "path/to/photo.jpg", // Replace with actual user photo
            content,
            media,
            createdAt: new Date(),
        };
        onCreatePost(newComment);
        setContent("");
        setMedia([]);
    };

    return (
        <div className="bg-white rounded-lg p-2 flex items-start  mb-6">
            <AvatarWithDescription
                avatar={Avatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
                <TextArea
                    value={postValue}
                    onChange={setPostValue}
                    placeholder="Write a comment..."
                    minHeight="50px"
                    customClass="border border-gray-300 rounded-full px-4 py-2 w-full resize-none"
                />
                {media.length > 0 && (
                    <div className="flex flex-wrap mt-2 mb-4">
                        {media.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`upload-${index}`}
                                className="w-20 h-20 object-cover mr-2 mb-2 rounded-lg"
                            />
                        ))}
                    </div>
                )}
                <div className="flex justify-between items-center mt-2">
                    <div className="flex-1 flex items-center">
                        <MediaUploader
                            media={media}
                            handleMediaUpload={handleMediaUpload}
                        />
                    </div>
                    <Button
                        customClass="flex justify-center items-center bg-blue-500 text-white rounded-full p-2 ml-2"
                        buttonType="submit"
                        buttonVariant="primary"
                        onClick={handleSubmit}
                    >
                        <FaPaperPlane className="text-lg" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateCommentForm;
