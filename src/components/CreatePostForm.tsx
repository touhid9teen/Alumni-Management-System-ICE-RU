import React, { useState } from "react";
import { Post } from "../interfaces";
import { FaPhotoVideo } from "react-icons/fa";
import AvatarWithDescription from "./AvatarWithDescription";
import Avatar from "../assets/avatar.png";
import Button from "../elements/Button";
interface CreatePostFormProps {
    onCreatePost: (post: Post) => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onCreatePost }) => {
    const [content, setContent] = useState("");
    const [media, setMedia] = useState<string[]>([]);

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
        const newPost: Post = {
            id: Date.now().toString(),
            userId: "1", // Replace with actual user ID
            userName: "John Doe", // Replace with actual user name
            userPhoto: "path/to/photo.jpg", // Replace with actual user photo
            content,
            media,
            upvotes: 0,
            downvotes: 0,
            comments: [],
            createdAt: new Date(),
        };
        onCreatePost(newPost);
        setContent("");
        setMedia([]);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6  ">
            <AvatarWithDescription
                avatar={Avatar}
                time={new Date()}
                title={"Mr. X"}
                onClick={() => {}}
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border border-gray-300 w-full p-4 rounded-lg focus:outline-none focus:ring  text-lg"
                placeholder="What's on your mind?"
                style={{ minHeight: "100px", resize: "none" }}
            ></textarea>
            <div className="flex mt-4 h-15">
                {media.length > 0 && (
                    <div className="flex flex-wrap mb-4">
                        {media.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`upload-${index}`}
                                className="w-32 h-32 object-cover mr-2 mb-2 rounded-lg"
                            />
                        ))}
                    </div>
                )}
                <label className="flex items-center justify-center border border-gray-300 rounded-lg p-4 cursor-pointer text-blue-500 text-lg">
                    <FaPhotoVideo className="mr-2" />
                    <span>Add Photo/Video</span>
                    <input
                        type="file"
                        multiple
                        onChange={handleMediaUpload}
                        style={{ display: "none" }}
                    />
                </label>
            </div>
            <Button
                customClass="flex justify-center item-center !bg-primary !text-black mt-4 w-full h-12 font-semibold text-sm"
                buttonType="submit"
                buttonVariant="primary"
            >
                Post
            </Button>
        </div>
    );
};
export default CreatePostForm;
