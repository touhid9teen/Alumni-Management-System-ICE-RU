import React, { useState } from "react";
import Comment from "./Comment";
import CreateCommentForm from "../CreateCommentForm";

interface CommentData {
    id: number;
    avatar: string;
    title: string;
    commentTime: string;
    content: string;
    // Add the photos and videos properties to match the Comment type
    photos: string[];
    videos: string[];
}

interface AllCommentsProps {
    postId: number;
    comments: CommentData[];
    totalComment: number;
    createComment: (postId: number, comment: CommentData) => void;
}


const AllComments: React.FC<AllCommentsProps> = ({
    postId,
    comments = [],
    totalComment,
    createComment,
}) => {
    const [visibleCount, setVisibleCount] = useState(10);
    const [showCreateComment, setShowCreateComment] = useState(false);

    const handleShowMoreComments = () => {
        setVisibleCount((prevCount) => prevCount + 10);
    };

    const handleLike = (index: number) => {
        console.log(`Liked comment at index ${index}`);
    };

    const handleShare = (index: number) => {
        console.log(`Shared comment at index ${index}`);
    };

    const handleClick = (index: number) => {
        console.log(`Clicked on comment at index ${index}`);
    };

    return (
        <div className="bg-white rounded-lg p-4">
            <div className="flex flex-col justify-between px-2">
                <div className="flex flex-row justify-between px-2">
                    <h1 className="font-semibold text-2xl from-blue-500">
                        Total Comments ({totalComment})
                    </h1>
                    <button
                        className="text-blue-500 text-lg underline"
                        onClick={() => setShowCreateComment(!showCreateComment)}
                    >
                        Write a comment?
                    </button>
                </div>
                {showCreateComment && (
                    <CreateCommentForm
                        postId={postId}
                        onCreateComment={createComment}
                    />
                )}
            </div>
            <div>
                {comments.slice(0, visibleCount).map((comment, index) => (
                    <Comment
                        key={comment.id}
                        avatar={comment.avatar}
                        commentTime={comment.commentTime}
                        title={comment.title}
                        comment={comment.content}
                        totalLike={comment.totalLike?.toString() ?? "0"}
                        onClick={() => handleClick(index)}
                        handleLike={() => handleLike(index)}
                        handleShare={() => handleShare(index)}
                    />
                ))}
                {comments.length > visibleCount && (
                    <button
                        onClick={handleShowMoreComments}
                        className="text-blue-500 mt-2"
                    >
                        Show More Comments
                    </button>
                )}
            </div>
        </div>
    );
};

export default AllComments;
