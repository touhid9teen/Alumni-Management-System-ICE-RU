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
        <div className="flex justify-between items-center border-t border-b rounded border-gray-200 py-2 mb-2 px-2">
            <button
                className="flex items-center text-gray-500 hover:text-blue-500"
                onClick={onClickLike}
            >
                <FaThumbsUp className="mr-1" />
                <span>{totalLike}</span>
            </button>
            <button
                className="flex items-center text-gray-500 hover:text-blue-500"
                onClick={onClickComment}
            >
                <FaCommentAlt className="mr-1" />
                <span>{totalComment}</span>
            </button>
            <button
                className="flex items-center text-gray-500 hover:text-blue-500"
                onClick={onClickShare}
            >
                <FaShare className="mr-1" />
                <span>Share</span>
            </button>
        </div>
    );
};

export default PostAction;
