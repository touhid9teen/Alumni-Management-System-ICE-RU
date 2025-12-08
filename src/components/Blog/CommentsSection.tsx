import { FC, useState } from "react";
import { CommentsSectionProps } from "../../types";
import { MessageCircle } from "lucide-react";
import { Comment } from "./Comment";

export const CommentsSection: FC<CommentsSectionProps> = ({
  comments,
  totalComments,
  postId,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(3);
  console.log("post id", postId);
  return (
    <div className="mt-6 pt-4 border-t border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <MessageCircle size={18} className="text-blue-600" />
        Comments ({totalComments})
      </h3>
      <div className="space-y-2">
        {comments.slice(0, visibleCount).map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onLike={() => {}}
            onReplyClick={() => {}}
          />
        ))}
      </div>
      {comments.length > visibleCount && (
        <button
          onClick={() => setVisibleCount((v) => v + 3)}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-4 transition"
        >
          View more comments ({comments.length - visibleCount})
        </button>
      )}
    </div>
  );
};
