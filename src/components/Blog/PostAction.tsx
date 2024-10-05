import { FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";

interface PostActionsProps {
    totalLike: string;
    totalComment: string;
    onClickLike: () => void;
    onClickComment: () => void;
    onClickShare: () => void;
}

const PostAction: React.FC<PostActionsProps> = ({
    totalLike,
    totalComment,
    onClickLike,
    onClickComment,
    onClickShare,
}) => {
    return (
        <div className="flex justify-between items-center border-t border-b border-gray-200 py-3 mb-3 px-4">
            {/* Like Button */}
            <button
                className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none space-x-2"
                onClick={onClickLike}
            >
                <FaThumbsUp />
                <span>{totalLike} Likes</span>
            </button>

            {/* Comment Button */}
            <button
                className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none space-x-2"
                onClick={onClickComment}
            >
                <FaCommentAlt />
                <span>{totalComment} Comments</span>
            </button>

            {/* Share Button */}
            <button
                className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none space-x-2"
                onClick={onClickShare}
            >
                <FaShare />
                <span>Share</span>
            </button>
        </div>
    );
};

export default PostAction;
