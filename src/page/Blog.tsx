import { useState } from "react";
import CreatePostForm from "../components/CreatePostForm";
import PostDetails from "../components/Blog/PostDetails";

const Blog: React.FC = () => {
    const [showCreatePost, setShowCreatePost] = useState(false);

    const handleCreatePost = () => {
        setShowCreatePost(!showCreatePost);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white w-full">
                <div className="container mx-auto flex flex-col justify-center items-center p-4 gap-2">
                    <div className="flex items-center justify-center w-full border-b-[2px] border-[#E9E9E9] p-1">
                    <span className="text-gray-500 px-4 py-2 text-2xl font-semibold">
                            Welcome to the blog .
                        </span>

                        
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500 text-md font-semibold">
                            A place where you can share your thoughts.
                        </p>
                        <button
                            className=" text-blue-500 text-xl font-semibold rounded-lg px-4 py-2 underline hover:text-blue-700"
                            onClick={handleCreatePost}
                        >
                            Write a post ?
                        </button>
                    </div>
                    
                </div>
            </header>
            <div className="container mx-auto flex flex-col md:flex-row mt-16 md:mt-20 p-4">
                <main className="w-full p-4">
                    {showCreatePost && (
                        <CreatePostForm onClick={handleCreatePost} />
                    )}
                    <PostDetails />
                </main>
            </div>
        </div>
    );
};

export default Blog;
