import { FC, useState } from "react";
import { ImageModalDataType, PostType } from "../types";
import { MessageCircle, Search } from "lucide-react";
import { PostCard } from "../components/Blog/PostDetails";
import { ImageModal } from "../components/Blog/ImageModal";
import { CreatePostModal } from "../components/Blog/PostModal";
import { dummyPosts } from "../data/BlogData";

export const AlumniBlog: FC = () => {
  const [posts, setPosts] = useState<PostType[]>(dummyPosts);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [imageModalData, setImageModalData] =
    useState<ImageModalDataType | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleImageClick = (index: number, images: string[]): void => {
    setImageModalData({ index, images });
  };

  const handleCreatePost = (content: string): void => {
    // API Call
    const newPost: PostType = {
      id: Date.now(),
      author: {
        name: "Current User",
        avatar: "", // Add avatar URL if needed
        title: "Alumnus", // Add appropriate title here
      },
      createdAt: new Date(),
      content,
      likes: 0,
      comments: 0,
      images: [],
      commentList: [],
    };
    //  newPost = await fetch('/api/posts', { method: 'POST', body: JSON.stringify({ content }) });
    setPosts((prevPosts) => [...prevPosts, newPost]);

    console.log("Post created:", content);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 sticky top-0 z-30 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Alumni Community
          </h1>
          <p className="text-blue-100">
            Connect, share, and celebrate alumni achievements
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 mb-8">
        {/* Search Bar */}
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 pl-12 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-700 placeholder-gray-400 shadow-sm hover:border-gray-300 transition"
          />
          <Search className="absolute left-4 top-3.5 text-blue-600" size={20} />
        </div>

        {/* Create Post Button */}
        <button
          onClick={() => setShowCreateModal(true)}
          className="w-full mb-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          Share Your Story
        </button>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onImageClick={handleImageClick}
            />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">
              No posts yet. Be the first to share!
            </p>
          </div>
        )}
      </main>

      {/* Image Modal */}
      {imageModalData && (
        <ImageModal
          images={imageModalData.images}
          currentIndex={imageModalData.index}
          onClose={() => setImageModalData(null)}
          onNext={() =>
            setImageModalData((prev) =>
              prev
                ? {
                    ...prev,
                    index: (prev.index + 1) % prev.images.length,
                  }
                : null
            )
          }
          onPrev={() =>
            setImageModalData((prev) =>
              prev
                ? {
                    ...prev,
                    index:
                      (prev.index - 1 + prev.images.length) %
                      prev.images.length,
                  }
                : null
            )
          }
        />
      )}

      {/* Create Post Modal */}
      {showCreateModal && (
        <CreatePostModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreatePost}
        />
      )}
    </div>
  );
};

export default AlumniBlog;
