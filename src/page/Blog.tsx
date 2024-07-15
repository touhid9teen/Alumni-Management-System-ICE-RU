import { useState } from "react";
import CreatePostForm from "../components/CreatePostForm";
import PostDetails from "../components/Blog/PostDetails";

const Blog: React.FC = () => {
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [refreshPosts, setRefreshPosts] = useState(false);
    const handleCreatePost = () => {
        setShowCreatePost(!showCreatePost);
    };
    const handlePostSubmit = () => {
        setRefreshPosts(!refreshPosts);
    };

    return (
        <div className="min-h-screen flex flex-col font-serif">
            <div className="flex flex-col justify-center items-center pt-10 pb-16 sm:pt-20">
                <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold">
                    Welcome to the blog .
                </h1>

                <p className="text-xl sm:text-2xl pt-4 ">
                    A place where you can share your thoughts.
                </p>
                <button
                    className=" text-xl sm:text-2xl pt-4 cursor-pointer text-blue-500 underline"
                    onClick={handleCreatePost}
                >
                    Write a post ?
                </button>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row mt-16 md:mt-20 p-4">
                <main className="w-full p-4">
                    {showCreatePost && (
                        <CreatePostForm onClick={handleCreatePost} />
                    )}
                    <PostDetails refreshPosts={handlePostSubmit} />
                </main>
            </div>
        </div>
    );
};

export default Blog;
