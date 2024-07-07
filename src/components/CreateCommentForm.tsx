import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import AvatarWithDescription from "../components/AvatarWithDescription";
import avatar from "../assets/avatar.png";
import Button from "../elements/Button";
import TextArea from "../elements/TextArea";
import MediaUploader from "../elements/MediaUploader";

interface Comment {
    id: number;
    avatar: string;
    title: string;
    commentTime: string;
    content: string;
    photos: string[];
    videos: string[];
}

interface CreateCommentFormProps {
    postId: number;
    onCreateComment: (postId: number, comment: Comment) => void;
}

const CreateCommentForm: React.FC<CreateCommentFormProps> = ({
    postId,
    onCreateComment,
}) => {
    const [comment, setComment] = useState("");
    const [photos, setPhotos] = useState<string[]>([]);
    const [videos, setVideos] = useState<string[]>([]);

    const handleCommentChange = (value: string) => {
        setComment(value);
    };

    const handleMediaUpload = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: "photo" | "video"
    ) => {
        if (e.target.files) {
            const urls = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );
            if (type === "photo") {
                setPhotos(urls);
            } else {
                setVideos(urls);
            }
        }
    };

    const handleSubmit = () => {
        const newComment: Comment = {
            id: Date.now(),
            avatar: avatar,
            title: "John Doe", // Replace with actual user name
            commentTime: new Date().toISOString(),
            content: comment,
            photos: photos,
            videos: videos,
        };
        onCreateComment(postId, newComment);
        setComment("");
        setPhotos([]);
        setVideos([]);
    };

    return (
        <div className="bg-white rounded-lg p-2 flex items-start mb-6">
            <AvatarWithDescription
                avatar={avatar}
                time={new Date().toISOString()}
                title="User Avatar"
                onClick={() => {}}
            />
            <div className="flex-1">
                <TextArea
                    value={comment}
                    onChange={(e) => handleCommentChange(e.target.value)}
                    placeholder="Write a comment..."
                    minHeight="50px"
                    customClass="border border-gray-300 rounded-full px-4 py-2 w-full resize-none"
                />
                {photos.length > 0 && (
                    <div className="flex flex-wrap mt-2 mb-4">
                        {photos.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`upload-${index}`}
                                className="w-20 h-20 object-cover mr-2 mb-2 rounded-lg"
                            />
                        ))}
                    </div>
                )}
                {videos.length > 0 && (
                    <div className="flex flex-wrap mt-2 mb-4">
                        {videos.map((src, index) => (
                            <video
                                key={index}
                                src={src}
                                controls
                                className="w-20 h-20 object-cover mr-2 mb-2 rounded-lg"
                            />
                        ))}
                    </div>
                )}
                <div className="flex justify-between items-center mt-2">
                    <div className="flex-1 flex items-center">
                        <MediaUploader
                            handleMediaUpload={(e) =>
                                handleMediaUpload(e, "photo")
                            }
                            mediaType="photo"
                            media={photos}
                        />
                        <MediaUploader
                            handleMediaUpload={(e) =>
                                handleMediaUpload(e, "video")
                            }
                            mediaType="video"
                            media={videos}
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
