export interface EventData {
  id: number;
  title: string;
  date: string;
  venue: string;
  img: string;
}

export interface StoryData {
  id: number;
  name: string;
  batch: string;
  role: string;
  img: string;
  text: string;
}

export interface EventsSectionProps {
  events: EventData[];
}

export interface StoriesSectionProps {
  stories: StoryData[];
}

export interface NavLink {
  name: string;
  href: string;
  target?: string;
}

interface Author {
  name: string;
  avatar: string;
  title: string;
}

interface CommentReplyType {
  id: number;
  author: Author;
  createdAt: Date;
  content: string;
  likes: number;
}

interface CommentType {
  id: number;
  author: Author;
  createdAt: Date;
  content: string;
  likes: number;
  replies: CommentReplyType[];
}

interface PostType {
  id: number;
  author: Author;
  createdAt: Date;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  commentList: CommentType[];
}

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

interface CommentReplyProps {
  reply: CommentReplyType;
  onLike: () => void;
}

interface CommentProps {
  comment: CommentType;
  onLike: () => void;
  onReplyClick: (id: number) => void;
}

interface CommentsSectionProps {
  comments: CommentType[];
  totalComments: number;
  postId: number;
}

interface PostCardProps {
  post: PostType;
  onImageClick: (index: number, images: string[]) => void;
}

interface CreatePostModalProps {
  onClose: () => void;
  onSubmit: (content: string) => void;
}

interface ImageModalDataType {
  index: number;
  images: string[];
}
