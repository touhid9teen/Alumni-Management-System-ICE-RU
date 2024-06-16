import React, { useState } from "react";
import { Post } from "../interfaces";
import AvatarWithDescription from "./AvatarWithDescription";
import Avatar from "../assets/avatar.png";
import Button from "../elements/Button";
import TextArea from "../elements/TextArea";
import MediaUploader from "../elements/MediaUploader"; 

interface CreatePostFormProps {
    onCreatePost: (post: Post) => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onCreatePost }) => {
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
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <AvatarWithDescription
                avatar={Avatar}
                time={new Date()}
                title={"Mr. X"}
                onClick={() => {}}
            />
            <TextArea
                value={postValue}
                onChange={setPostValue}
                placeholder="Write your post here..."
                minHeight="200px"
            />
            <MediaUploader
                media={media}
                handleMediaUpload={handleMediaUpload}
            />{" "}
            {/* Use MediaUploader component */}
            <Button
                customClass="flex justify-center items-center !bg-primary !text-black mt-4 w-full h-12 font-semibold text-sm"
                buttonType="submit"
                buttonVariant="primary"
                onClick={handleSubmit}
            >
                Post
            </Button>
        </div>
    );
};

export default CreatePostForm;
