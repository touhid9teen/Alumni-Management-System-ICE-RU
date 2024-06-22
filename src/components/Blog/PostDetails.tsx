import React, { useState } from "react";
import moment from "moment";
import AvatarWithDescription from "../AvatarWithDescription";
import PostAction from "./PostAction";
import PostSummary from "./PostSummary";
import AllComments from "./AllComment";
import avatar from "../../assets/avatar.png";

const PostDetails: React.FC = () => {
    const [visibleComments, setVisibleComments] = useState<number | null>(null); // State to track visible comments

    const handleCreateComment = () => {
        console.log("Create Comment clicked!");
    };

    const handleToggleComments = (postId: number) => {
        setVisibleComments(visibleComments === postId ? null : postId);
    };

    const posts = [
        {
            id: 1,
            avatar: avatar,
            title: "John Doe",
            time: moment().subtract(1, "day").toDate(),
            postTime: moment(moment().subtract(1, "day").toDate()).fromNow(),
            content:
                "This is the first dummy post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            photos: [
               
            ],
            totalLike: 20,
            totalComment: 10,
            comments: [
                {
                    id: 1,
                    avatar: avatar,
                    title: "Jane Doe",
                    time: moment().subtract(23, "hours").toDate(),
                    commentTime: moment(
                        moment().subtract(23, "hours").toDate()
                    ).fromNow(),
                    content: "Nice post!",
                },
                {
                    id: 2,
                    avatar: avatar,
                    title: "Jack Smith",
                    time: moment().subtract(22, "hours").toDate(),
                    commentTime: moment(
                        moment().subtract(22, "hours").toDate()
                    ).fromNow(),
                    content: "Great content!",
                },
            ],
        },
        {
            id: 2,
            avatar: avatar,
            title: "Jane Smith",
            time: moment().subtract(2, "days").toDate(),
            postTime: moment(moment().subtract(2, "days").toDate()).fromNow(),
            content:
                "This is the second dummy post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            photos: [
                "https://picsum.photos/id/1014/200/300",
                "https://picsum.photos/id/1015/200/300",
                "https://picsum.photos/id/1011/200/300",
                "https://picsum.photos/id/1012/200/300",
                "https://picsum.photos/id/1013/200/300",
            ],
            totalLike: 30,
            totalComment: 15,
            comments: [
                {
                    id: 1,
                    avatar: avatar,
                    title: "John Doe",
                    time: moment().subtract(1, "day").toDate(),
                    commentTime: moment(
                        moment().subtract(1, "day").toDate()
                    ).fromNow(),
                    content: "Awesome!",
                },
                {
                    id: 2,
                    avatar: avatar,
                    title: "Jane Doe",
                    time: moment().subtract(23, "hours").toDate(),
                    commentTime: moment(
                        moment().subtract(23, "hours").toDate()
                    ).fromNow(),
                    content: "Love it!",
                },
            ],
        },
        {
            id: 3,
            avatar: avatar,
            title: "Jack Johnson",
            time: moment().subtract(3, "days").toDate(),
            postTime: moment(moment().subtract(3, "days").toDate()).fromNow(),
            content:
                "This is the third dummy post. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            photos: [
                "https://picsum.photos/id/1016/200/300",
                "https://picsum.photos/id/1018/200/300",
            ],
            totalLike: 25,
            totalComment: 12,
            comments: [
                {
                    id: 1,
                    avatar: avatar,
                    title: "John Smith",
                    time: moment().subtract(2, "days").toDate(),
                    commentTime: moment(
                        moment().subtract(2, "days").toDate()
                    ).fromNow(),
                    content: "Keep it up!",
                },
                {
                    id: 2,
                    avatar: avatar,
                    title: "Jane Smith",
                    time: moment().subtract(1, "day").toDate(),
                    commentTime: moment(
                        moment().subtract(1, "day").toDate()
                    ).fromNow(),
                    content: "Looking forward to more!",
                },
            ],
        },
    ];

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
                        totalLike={post.totalLike.toString()}
                        totalComment={post.totalComment.toString()}
                        onClickLike={() => {}}
                        onClickComment={() => handleToggleComments(post.id)}
                        onClickShare={() => {}}
                    />
                    {visibleComments === post.id && (
                        <AllComments
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
