import { PostType } from "../types";

export const dummyPosts: PostType[] = [
  {
    id: 1,
    author: {
      name: "John Smith",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      title: "Class of 2020 | Software Engineer",
    },
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    content:
      "Excited to share that I've recently joined as a Senior Software Engineer at a leading tech company! This journey has been incredible, and I'm grateful for all the support from my alma mater. Here are some insights from my experience...",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    ],
    likes: 245,
    comments: 12,
    commentList: [
      {
        id: 1,
        author: {
          name: "Sarah Johnson",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
          title: "Class of 2021",
        },
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        content:
          "Congratulations! This is amazing news. Would love to hear more about your experience.",
        likes: 15,
        replies: [
          {
            id: 101,
            author: {
              name: "John Smith",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
              title: "Class of 2020",
            },
            createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
            content:
              "Thank you! I'll definitely share more details soon. Let's catch up!",
            likes: 8,
          },
        ],
      },
      {
        id: 2,
        author: {
          name: "Mike Chen",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
          title: "Class of 2019",
        },
        createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
        content: "Very inspiring! Keep up the great work!",
        likes: 22,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    author: {
      name: "Emma Davis",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      title: "Class of 2021 | Product Manager",
    },
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    content:
      "Sharing my experience transitioning from engineering to product management. The skills I learned at university really helped me make this shift. Happy to mentor anyone interested in this career path!",
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"],
    likes: 189,
    comments: 8,
    commentList: [
      {
        id: 3,
        author: {
          name: "Alex Kumar",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
          title: "Class of 2022",
        },
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        content:
          "This is exactly what I needed to hear! Any tips for starting out?",
        likes: 12,
        replies: [
          {
            id: 102,
            author: {
              name: "Emma Davis",
              avatar:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
              title: "Class of 2021",
            },
            createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
            content:
              "Absolutely! First, focus on understanding user needs. Second, learn the business metrics. Happy to discuss more!",
            likes: 18,
          },
        ],
      },
    ],
  },
];
