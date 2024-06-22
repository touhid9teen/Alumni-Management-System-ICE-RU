import React, { useState } from "react";
import AvatarWithDescription from "./AvatarWithDescription";
import Avatar from "../assets/avatar.png";
import Button from "../elements/Button";
import TextArea from "../elements/TextArea";
import MediaUploader from "../elements/MediaUploader";

interface CreatePostFormProps {
    onSubmit: (post: { content: string; photo?: string[]; video?: string[] }) => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onSubmit }) => {
    const [content, setContent] = useState("");
    const [photos, setPhotos] = useState<string[]>([]);
    const [videos, setVideos] = useState<string[]>([]);

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "photo" | "video") => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const urls = files.map(file => URL.createObjectURL(file));
            if (type === "photo") {
                setPhotos(urls);
            } else {
                setVideos(urls);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            content,
            photo: photos,
            video: videos,
        });
        setContent("");
        setPhotos([]);
        setVideos([]);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <AvatarWithDescription
                avatar={Avatar}
                time={new Date().toISOString()}
                title="Mr. X"
                onClick={() => {}}
            />
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <TextArea
                    value={content}
                    onChange={handleContentChange}
                    placeholder="Write your post here..."
                    minHeight="200px"
                />
                <div className="flex flex-row justify-between gap-4">
                    <MediaUploader
                        handleMediaUpload={(e) => handleMediaUpload(e, "photo")}
                        mediaType="photo"
                        media={photos}
                    />
                    <MediaUploader
                        handleMediaUpload={(e) => handleMediaUpload(e, "video")}
                        mediaType="video"
                        media={videos}
                    />
                </div>
                <Button
                    customClass="flex justify-center items-center !bg-primary !text-black mt-4 w-full h-12 font-semibold text-sm"
                    buttonType="submit"
                    buttonVariant="primary"
                    onClick={handleSubmit}
                >
                    Post
                </Button>
            </form>
        </div>
    );
};

export default CreatePostForm;
