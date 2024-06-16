import AvatarWithDescription from "../AvatarWithDescription";
import PostAction from "./PostAction";
import PostSummary from "./PostSummary";
import avatar from "../../assets/avatar.png";
import moment from "moment";
// import photo from "../../assets/AI6.jpg";
// import photo1 from "../../assets/AI1.jpg";
// import photo2 from "../../assets/AI2.jpg";
// import photo3 from "../../assets/AI3.jpg";
// import photo4 from "../../assets/AI8.jpg";
import AllComments from "./AllComment";
import CreatePostForm from "../CreatePostForm";
import CreateCommentForm from "../CreateCommentForm";
const PostDetails: React.FC = () => {
    const now = moment().toDate();

    const dummyComments = [
        {
            avatar: "https://via.placeholder.com/150",
            time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
            title: "John Doe",
            comment: "This is an example comment.",
            totalLike: "10",
        },
        {
            avatar: "https://via.placeholder.com/150",
            time: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
            title: "Jane Smith",
            comment: "This is another example comment.",
            totalLike: "5",
        },
        {
            avatar: "https://via.placeholder.com/150",
            time: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
            title: "Alice Johnson",
            comment: "This is yet another example comment.",
            totalLike: "20",
        },
        {
            avatar: "https://via.placeholder.com/150",
            time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
            title: "Bob Brown",
            comment: "This is a comment example.",
            totalLike: "8",
        },
        {
            avatar: "https://via.placeholder.com/150",
            time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
            title: "Carol White",
            comment: "This is an additional comment example.",
            totalLike: "15",
        },
    ];
    const handleCreateComment = () => {
        console.log("Create Comment clicked!");
    };
    return (
        <div className="h-1/2 w-1/2 flex flex-col ">
            <button
                className="mb-4 flex justify-end items-center text-blue-500 text-lg underline"
               // onClick={createComment}
            >
                Write a post?
            </button>
            <AvatarWithDescription
                avatar={avatar}
                time={new Date()}
                title={"Mr. X"}
                onClick={() => {}}
            />
            <PostSummary
                content={
                    "Hello there... Hello, Codeforces We are pleased to announce Round  Thanks to XTX Markets for supporting theinitiative! In 2024, we are holding 4 such rounds. The series results will take into account the best 3 participations out of 4. On Sunday, June 9, 2024 at 20:35UTC+6 we will host Codeforces Global Round 26.Codeforces Global Round 26 marks the second round in the 2024 series of Codeforces Global Rounds. hese rounds are open and rated for everyone."
                }
                photo={[
                    "https://via.placeholder.com/150",
                    "https://via.placeholder.com/150",
                    "https://via.placeholder.com/150",
                    "https://via.placeholder.com/150",
                    "https://via.placeholder.com/150",
                ]}
            />
            <PostAction
                totalLike={"40"}
                totalComment={"50"}
                onClickLike={() => {}}
                onClickComment={() => {}}
                onClickShare={() => {}}
            />
            <AllComments
                comments={dummyComments}
                totalComment={dummyComments.length}
                createComment={handleCreateComment}
            />
            <CreatePostForm />
            <CreateCommentForm/>
        </div>
    );
};

export default PostDetails;
