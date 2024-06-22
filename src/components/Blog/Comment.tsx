import React from 'react';
import AvatarWithDescription from '../AvatarWithDescription';
import { FaThumbsUp, FaReply } from 'react-icons/fa';

interface CommentProps {
    avatar: string;
    commentTime: string;
    title: string;
    comment: string;
    totalLike: string;
    onClick: () => void;
    handleLike: () => void;
    handleShare: () => void;
}

const Comment: React.FC<CommentProps> = ({
    avatar,
    commentTime,
    title,
    comment,
    totalLike,
    onClick,
    handleLike,
    handleShare,
}) => {
    return (
        <div className="flex flex-col space-x-2 mb-4 justify-start">
            <AvatarWithDescription
                avatar={avatar}
                title={title}
                onClick={onClick}
                time={commentTime}
            />
            <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-2">
                    <span className="text-gray-600">{comment}</span>
                </div>
                <div className="flex items-center mt-1 space-x-4">
                    <button
                        className="flex items-center text-gray-500 hover:text-blue-500"
                        onClick={handleLike}
                    >
                        <FaThumbsUp className="mr-1" />
                        <span>{totalLike}</span>
                    </button>
                    <button
                        className="flex items-center text-gray-500 hover:text-blue-500"
                        onClick={handleShare}
                    >
                        <FaReply className="mr-1" />
                        <span>Replay</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comment;
