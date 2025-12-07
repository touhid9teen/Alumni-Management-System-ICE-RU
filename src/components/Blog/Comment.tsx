export const Comment: FC<CommentProps> = ({
  comment,
  onLike,
  onReplyClick,
}) => {
  const [showReplies, setShowReplies] = useState<boolean>(false);

  return (
    <div className="border-t border-gray-200 py-4 first:border-t-0">
      <div className="flex gap-3">
        <img
          src={comment.author.avatar}
          alt={comment.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-gray-900">
                {comment.author.name}
              </span>
              <span className="text-xs text-gray-500">
                {comment.author.title}
              </span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
            <button
              onClick={onLike}
              className="hover:text-blue-600 flex items-center gap-1 transition font-medium"
            >
              <Heart size={14} /> {comment.likes}
            </button>
            <button
              onClick={() => onReplyClick(comment.id)}
              className="hover:text-blue-600 transition font-medium"
            >
              Reply
            </button>
            <span>{formatTimeAgo(comment.createdAt)}</span>
          </div>

          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-3">
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium transition"
              >
                {showReplies ? "- Hide" : "+ Show"} {comment.replies.length}{" "}
                repl{comment.replies.length === 1 ? "y" : "ies"}
              </button>
              {showReplies && (
                <div className="mt-3 space-y-3">
                  {comment.replies.map((reply) => (
                    <CommentReply
                      key={reply.id}
                      reply={reply}
                      onLike={() => {}}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
