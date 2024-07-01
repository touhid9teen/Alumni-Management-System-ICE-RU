import React, { useState, useEffect } from "react";
import AvatarWithDescription from "../AvatarWithDescription";
import PostAction from "./PostAction";
import PostSummary from "./PostSummary";
import CreateCommentForm from "../CreateCommentForm";
import avatar from "../../assets/avatar.png";

interface Comment {
    id: number;
    avatar: string;
    title: string;
    time: string;
    content: string;
    photos: string[];
    videos: string[];
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
            post.id === id
                ? { ...post, totalLike: post.totalLike + 1 }
                : post
        );
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    };

    // const handleComment = (id: number) => {
    //     // This function is not used anymore
    // };

    const handleShare = (id: number) => {
        //console.log(`Post ${postId} shared!`);
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
            {posts.map((post) => (
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
                    <PostSummary content={post.content} photo={post.photos} />
                    <PostAction
                        totalLike={"5"}
                        totalComment={"3"}
                        onClickLike={() => handleLike(post.id)}
                        onClickComment={() => {}}
                        onClickShare={() => handleShare(post.id)}
                        // totalLike={post.totalLike.toString()}
                        // totalComment={post.totalComment.toString()}
                        // onClickLike={() => handleLike(post.id)}
                        // onClickComment={() => {}}
                        // onClickShare={() => handleShare(post.id)}
                    />
                    <CreateCommentForm
                        postId={post.id}
                        onCreateComment={handleCreateComment}
                    />
                </div>
            ))}
        </div>
    );
};

export default PostDetails;
