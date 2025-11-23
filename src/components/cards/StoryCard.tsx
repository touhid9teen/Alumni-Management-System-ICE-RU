import RevealOnScroll from "../RevealOnScroll";
interface Story {
  id: number;
  name: string;
  batch: string;
  role: string;
  img: string;
  text: string;
}

interface StoryCardProps {
  story: Story;
  delay?: number;
}
const StoryCard: React.FC<StoryCardProps> = ({
  story,
  delay = 0,
}): JSX.Element => {
  return (
    <RevealOnScroll delay={delay}>
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative mt-6 sm:mt-8 h-full">
        <div className="absolute -top-6 left-6 sm:left-8">
          <img
            src={story.img}
            alt={story.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        <div className="pt-6 sm:pt-8">
          <p className="text-gray-600 italic text-base sm:text-lg mb-5 sm:mb-6 leading-relaxed">
            "{story.text}"
          </p>
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900">
              {story.name}
            </h4>
            <p className="text-blue-600 font-medium text-sm sm:text-base">
              {story.batch}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide mt-1">
              {story.role}
            </p>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default StoryCard;
