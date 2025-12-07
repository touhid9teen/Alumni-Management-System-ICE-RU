export const CommentReply: FC<CommentReplyProps> = ({ reply, onLike }) => (
  <div className="ml-12 mt-4 flex gap-3">
    <img
      src={reply.author.avatar}
      alt={reply.author.name}
      className="w-8 h-8 rounded-full object-cover"
    />
    <div className="flex-1">
      <div className="bg-gray-50 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-gray-900 text-sm">
            {reply.author.name}
          </span>
          <span className="text-xs text-gray-500">{reply.author.title}</span>
        </div>
        <p className="text-gray-700 text-sm">{reply.content}</p>
      </div>
      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
        <button
          onClick={onLike}
          className="hover:text-blue-600 flex items-center gap-1 transition"
        >
          <Heart size={14} /> {reply.likes}
        </button>
        <span>{formatTimeAgo(reply.createdAt)}</span>
      </div>
    </div>
  </div>
);
