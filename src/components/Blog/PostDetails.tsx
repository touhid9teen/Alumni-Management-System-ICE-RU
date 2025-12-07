import { Calendar, Heart, MessageCircle, Share2 } from "lucide-react";
import { CommentsSection } from "./CommentsSection";
import { formatTimeAgo } from "../../utils/blog";
import { PostCardProps } from "../../types";
import { FC, useState } from "react";

export const PostCard: FC<PostCardProps> = ({ post, onImageClick }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden mb-6">
      {/* Post Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
            />
            <div>
              <h3 className="font-semibold text-gray-900">
                {post.author.name}
              </h3>
              <p className="text-sm text-gray-600">{post.author.title}</p>
              <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                <Calendar size={12} />
                {formatTimeAgo(post.createdAt)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-6 py-4">
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>

      {/* Post Images */}
      {post.images && post.images.length > 0 && (
        <div className="px-6 py-4">
          <div
            className={`grid gap-3 ${
              post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {post.images.slice(0, 4).map((image, idx) => (
              <div
                key={idx}
                className="relative cursor-pointer group overflow-hidden rounded-lg bg-gray-100"
                onClick={() => onImageClick(idx, post.images)}
              >
                <img
                  src={image}
                  alt={`Post ${idx}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.images.length > 4 && idx === 3 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      +{post.images.length - 4}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Post Actions */}
      <div className="px-6 py-4 border-t border-gray-100 border-b border-gray-100">
        <div className="flex justify-around text-sm text-gray-600">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition duration-300 ${
              isLiked
                ? "bg-red-50 text-red-600 shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Heart
              size={20}
              fill={isLiked ? "currentColor" : "none"}
              className="transition"
            />
            <span>{post.likes}</span>
            <span className="hidden sm:inline">Likes</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-semibold transition duration-300">
            <MessageCircle size={20} />
            <span>{post.comments}</span>
            <span className="hidden sm:inline">Comments</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition duration-300">
            <Share2 size={20} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="px-6 py-4">
        <CommentsSection
          comments={post.commentList}
          totalComments={post.comments}
          postId={post.id}
        />
      </div>
    </div>
  );
};
