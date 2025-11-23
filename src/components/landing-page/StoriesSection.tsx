import StoryCard from "../cards/StoryCard";
import RevealOnScroll from "../RevealOnScroll";

interface Story {
  id: number;
  name: string;
  batch: string;
  role: string;
  img: string;
  text: string;
}
interface StoriesSectionProps {
  stories: Story[];
}
const StoriesSection: React.FC<StoriesSectionProps> = ({
  stories,
}): JSX.Element => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Alumni Success Stories
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, i: number) => (
            <StoryCard key={story.id} story={story} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
