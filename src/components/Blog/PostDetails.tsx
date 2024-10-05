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
        <div className="flex flex-col space-y-4">
            {dummypost.map((post) => (
                <div
                    key={post.id}
                    className="bg-white shadow-md rounded-lg p-6"
                >
                    <AvatarWithDescription
                        avatar={post.avatar}
                        time={post.postTime}
                        title={post.title}
                        onClick={() => {}}
                    />
                    <PostSummary content={post.content} photos={post.photos} />
                    <PostAction
                        totalLike={post.totalLike?.toString() ?? "0"}
                        totalComment={post.totalComment?.toString() ?? "0"}
                        onClickLike={() => handleLike(post.id)}
                        onClickComment={() => toggleCommentForm(post.id)}
                        onClickShare={() => handleShare(post.id)}
                    />
                    {showCommentForm[post.id] && (
                        <AllComments
                            postId={post.id}
                            comments={post.comments}
                            totalComment={post.totalComment}
                            createComment={handleCreateComment}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default PostDetails;
