import React, { useState, useEffect, FC, useDebugValue } from "react";
import AvatarWithDescription from "./AvatarWithDescription";
import Avatar from "../assets/avatar.png";
import Button from "../elements/Button";
import TextArea from "../elements/TextArea";
import MediaUploader from "../elements/MediaUploader";
import moment from "moment"; // Ensure you have moment installed
import Toolbar from "../components/Toolbar";

interface Post {
    id: number;
    avatar: string;
    title: string;
    postTime: string;
    content: string;
    photos: string[];
    videos: string[];
}

interface CreatePostFormProps {
    onClick?: () => void;
}

const CreatePostForm: FC<CreatePostFormProps> = ({ onClick }) => {
    const [content, setContent] = useState("");
    const [photos, setPhotos] = useState<string[]>([]);
    const [videos, setVideos] = useState<string[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);

    // const [editorContent, setEditorContent] =
    //     useState<string>("Initial content");

    // const handleEditorChange = (content: string) => {
    //     setContent(content);
    // };

    useEffect(() => {
        const loadedPosts = localStorage.getItem("posts");
        if (loadedPosts) {
            setPosts(JSON.parse(loadedPosts));
        }
    }, []);

    const handleContentChange = (value: string) => {
        setContent(value);
    };

    const handleMediaUpload = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: "photo" | "video"
    ) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const urls = files.map((file) => URL.createObjectURL(file));
            if (type === "photo") {
                setPhotos(urls);
            } else {
                setVideos(urls);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPost: Post = {
            id: posts.length + 1,
            avatar: Avatar,
            title: "Jane Smith",
            postTime: moment().fromNow(),
            content: content,
            photos: photos,
            videos: videos,
        };
        const updatedPosts = [newPost, ...posts];
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts)); // Save to local storage
        console.log("Post submitted successfully!");
        console.log(posts);

        setContent("");
        setPhotos([]);
        setVideos([]);

        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <AvatarWithDescription
                avatar={Avatar}
                time={new Date().toISOString()}
                title="Mr. X"
                onClick={() => {}}
            />
            <div className="flex flex-col gap-5">
                {/* <TextArea
                    value={content}
                    onChange={handleContentChange}
                    placeholder="Write your post here..."
                    minHeight="200px"
                /> */}
                <Toolbar 
                    value={content}
                    onChange={handleContentChange}
                    placeholder="Write your post here..."
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
            </div>
        </div>
    );
};

export default CreatePostForm;
