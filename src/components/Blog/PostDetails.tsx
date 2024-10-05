import React, { useState, useEffect } from "react";
import AvatarWithDescription from "../AvatarWithDescription";
import PostAction from "./PostAction";
import PostSummary from "./PostSummary";
import AllComments from "./AllComment";
import dummypost from "../../data/blogdummydata";

interface Comment {
    id: number;
    avatar: string;
    title: string;
    commentTime: string;
    content: string;
    photos: string[];
    videos: string[];
    totalLike: number;
}

interface Post {
    id: number;
    avatar: string;
    title: string;
    postTime: string;
    content: string;
    photos: string[];
    totalLike: number;
    totalComment: number;
    comments: Comment[];
}

interface PostDetailsProps {
    refreshPosts?: () => void;
}

const PostDetails: React.FC<PostDetailsProps> = ({ refreshPosts }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [showCommentForm, setShowCommentForm] = useState<{
        [key: number]: boolean;
    }>({});

    const fetchPosts = () => {
        const loadedPosts = localStorage.getItem("posts");
        if (loadedPosts) {
            setPosts(JSON.parse(loadedPosts));
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [refreshPosts]);

    const handleLike = (id: number) => {
        const updatedPosts = posts.map((post) =>
            post.id === id ? { ...post, totalLike: post.totalLike + 1 } : post
        );
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    };

    const toggleCommentForm = (id: number) => {
        setShowCommentForm((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handleShare = (id: number) => {
        console.log(`Post ${id} shared!`);
        // Implement your share logic here
    };

    const handleCreateComment = (postId: number, comment: Comment) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                const updatedComments = [...post.comments, comment];
                return {
                    ...post,
                    comments: updatedComments,
                    totalComment: post.totalComment + 1,
                };
            }
            return post;
        });
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    };

    return (
        <div className="flex flex-col space-y-6 max-w-4xl mx-auto p-1 bg-gray-100">
            {dummypost.map((post) => (
                <div
                    key={post.id}
                    className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                    {/* Post Header */}
                    <div className="flex items-center mb-4">
                        <AvatarWithDescription
                            avatar={post.avatar}
                            time={post.postTime}
                            title={post.title}
                            onClick={() => {}}
                        />
                    </div>

                    {/* Post Content */}
                    <PostSummary content={post.content} photo={post.photos} />

                    {/* Action Buttons (Like, Comment, Share) */}
                    {/* <div className="border-t mt-4 pt-4 flex justify-between items-center"> */}
    <PostAction
        totalLike={post.totalLike?.toString() ?? "0"}
        totalComment={post.totalComment?.toString() ?? "0"}
        onClickLike={() => handleLike(post.id)}
        onClickComment={() => toggleCommentForm(post.id)}
        onClickShare={() => handleShare(post.id)}
    />
{/* </div> */}




                    {/* Comments Section */}
                    {showCommentForm[post.id] && (
                        <div className="mt-4">
                            <AllComments
                                postId={post.id}
                                comments={post.comments}
                                totalComment={post.totalComment}
                                createComment={handleCreateComment}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PostDetails;
