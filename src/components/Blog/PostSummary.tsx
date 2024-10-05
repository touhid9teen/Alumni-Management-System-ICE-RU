import React, { useState } from "react";

interface PostSummaryProps {
    content: string;
    photo?: string[];
    video?: string[];
}

const PostSummary: React.FC<PostSummaryProps> = ({
    content,
    photo = [],
    video = [],
}) => {
    const [showFullContent, setShowFullContent] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const truncatedContent =
        content.length > 350 ? `${content.substring(0, 350)}...` : content;

    const handleToggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    const handleOpenModal = (index: number) => {
        setCurrentMediaIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const showNextMedia = () => {
        setCurrentMediaIndex(
            (prevIndex) => (prevIndex + 1) % (photo.length + video.length)
        );
    };

    const showPreviousMedia = () => {
        setCurrentMediaIndex(
            (prevIndex) =>
                (prevIndex - 1 + (photo.length + video.length)) %
                (photo.length + video.length)
        );
    };

    const currentMediaSrc =
        currentMediaIndex < photo.length
            ? photo[currentMediaIndex]
            : video[currentMediaIndex - photo.length];

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 mx-auto max-w-3xl">
            <div className="mb-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                    {showFullContent ? content : truncatedContent}
                </p>
                {content.length > 350 && (
                    <button
                        onClick={handleToggleContent}
                        className="text-blue-500 hover:text-blue-600 mt-2 font-semibold transition-all"
                    >
                        {showFullContent ? "Show Less" : "Read More"}
                    </button>
                )}
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {photo.slice(0, 4).map((src, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform"
                        onClick={() => handleOpenModal(index)}
                    >
                        <img
                            src={src}
                            alt={`Photo ${index}`}
                            className="w-full h-48 object-cover"
                        />
                        {!isModalOpen && photo.length > 4 && index === 3 && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
                                +{photo.length - 4}
                            </div>
                        )}
                    </div>
                ))}
                {video.slice(0, 4).map((src, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform"
                        onClick={() => handleOpenModal(photo.length + index)}
                    >
                        <video
                            src={src}
                            className="w-full h-48 object-cover"
                            controls
                        />
                        {!isModalOpen && video.length > 4 && index === 3 && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
                                +{video.length - 4}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl max-h-full p-4">
                        <button
                            className="absolute top-2 right-2 text-white text-3xl p-2"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="flex items-center justify-center h-full">
                            {currentMediaIndex < photo.length ? (
                                <img
                                    src={currentMediaSrc}
                                    alt="Current media"
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            ) : (
                                <video
                                    src={currentMediaSrc}
                                    className="w-full h-full object-contain rounded-lg"
                                    controls
                                    autoPlay
                                />
                            )}
                        </div>
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl p-4 bg-gray-800 rounded-full"
                            onClick={showPreviousMedia}
                        >
                            &lt;
                        </button>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl p-4 bg-gray-800 rounded-full"
                            onClick={showNextMedia}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostSummary;
