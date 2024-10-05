const dummypost = [
   
    {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/30.jpg",
        title: "David Johnson",
        postTime: "September 25, 2024",
        content: "I'm thrilled to announce the upcoming ICE Alumni Meetup, happening on November 10th. This annual event is a cornerstone of our alumni network, providing a unique opportunity for past students, professors, and professionals to reconnect, share their experiences, and forge new collaborations. \n\nThe evening will feature keynote speakers from various industries, networking sessions, and interactive workshops tailored to current industry trends. This is the perfect opportunity for ICE alumni to explore potential job opportunities, mentorship programs, and partnerships. Don't miss this chance to meet old friends and make new connections. We encourage all alumni, regardless of graduation year, to attend and participate actively.\n\nMark your calendars and register early to secure your spot! We look forward to seeing you all and continuing the tradition of strong alumni engagement within the ICE community.",
        photos: ["https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/media/images/449_1666683139_1563f9c3c431baa8a294dfe514562477.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6DHhcNjGGBP_JxLyQrWCDzTfOVFoVW8rKA&s","https://cdn.prod.website-files.com/5e6bef9160e290b99b7644b5/66c3150c3ba4c88ff1c131f7_banner_%20Universities%20With%20Best%20Alumni%20Network.png"],
        totalLike: 180,
        totalComment: 25,
        comments: [
            {
                id: 1,
                avatar: "https://randomuser.me/api/portraits/women/35.jpg",
                title: "Lisa Williams",
                commentTime: "September 26, 2024",
                content: "I’ve been looking forward to this all year! The meetups are always such a great time to reconnect and learn something new. See you there!",
                photos: [],
                videos: [],
                totalLike: 22,
            },
            {
                id: 2,
                avatar: "https://randomuser.me/api/portraits/men/46.jpg",
                title: "Kevin Johnson",
                commentTime: "September 26, 2024",
                content: "Last year's event was phenomenal! This year sounds even better. Can’t wait to catch up with everyone.",
                photos: [],
                videos: [],
                totalLike: 20,
            },
        ],
    },
    {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        title: "Jonathan Carter",
        postTime: "October 1, 2024",
        content: "Excited to announce my new role as Senior Software Architect at Google. It's been a fantastic journey, and I owe much of my success to the ICE department and alumni mentorship. Looking forward to giving back to the community!",
        photos: [],
        totalComment: 20,
        totalLike: 130,
        comments: [
            {
                id: 1,
                avatar: "https://randomuser.me/api/portraits/women/50.jpg",
                title: "Jane Patterson",
                commentTime: "October 2, 2024",
                content: "Huge congratulations, Jonathan! Your journey is an inspiration to all of us. Wishing you continued success.",
                photos: [],
                videos: [],
                totalLike: 35,
            },
            {
                id: 2,
                avatar: "https://randomuser.me/api/portraits/men/52.jpg",
                title: "Michael Robinson",
                commentTime: "October 2, 2024",
                content: "Well deserved, Jonathan! Your contributions to the field have been remarkable. Hope to catch up soon.",
                photos: [],
                videos: [],
                totalLike: 28,
            },
        ],
    },
];

export default dummypost;
