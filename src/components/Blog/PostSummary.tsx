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
        <div className="bg-white shadow-md rounded-lg p-4 mb-4  mx-auto">
            <div className="mb-2">
                <p>{showFullContent ? content : truncatedContent}</p>
                {content.length > 350 && (
                    <button
                        onClick={handleToggleContent}
                        className="text-blue-500 mt-2"
                    >
                        {showFullContent ? "" : "Full Post"}
                    </button>
                )}
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
                {(photo.length > 0 || video.length > 0) && (
                    <>
                        {photo.slice(0, 4).map((src, index) => (
                            <div
                                key={index}
                                className={`relative ${
                                    photo.length > 2
                                        ? "col-span-1"
                                        : "col-span-2"
                                }`}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img
                                    src={src}
                                    alt={`Photo ${index}`}
                                    className="w-full h-48 rounded-lg object-cover cursor-pointer"
                                />
                                {!isModalOpen &&
                                    photo.length > 4 &&
                                    index === 3 && (
                                        <div
                                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl cursor-pointer"
                                            onClick={() =>
                                                handleOpenModal(index)
                                            }
                                        >
                                            +{photo.length - 4}
                                        </div>
                                    )}
                            </div>
                        ))}
                        {video.slice(0, 4).map((src, index) => (
                            <div
                                key={index}
                                className={`relative ${
                                    video.length > 2
                                        ? "col-span-1"
                                        : "col-span-2"
                                }`}
                                onClick={() =>
                                    handleOpenModal(photo.length + index)
                                }
                            >
                                <video
                                    src={src}
                                    className="w-full h-48 rounded-lg object-cover cursor-pointer"
                                    controls
                                />
                                {!isModalOpen &&
                                    video.length > 4 &&
                                    index === 3 && (
                                        <div
                                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl cursor-pointer"
                                            onClick={() =>
                                                handleOpenModal(
                                                    photo.length + index
                                                )
                                            }
                                        >
                                            +{video.length - 4}
                                        </div>
                                    )}
                            </div>
                        ))}
                    </>
                )}
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-100 flex items-center justify-center z-50">
                    <div className="relative w-3/4 h-3/4">
                        <button
                            className="absolute top-0 right-0 text-black text-2xl p-2"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="flex items-center justify-center h-full">
                            {currentMediaIndex < photo.length ? (
                                <img
                                    src={currentMediaSrc}
                                    alt="Current media"
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <video
                                    src={currentMediaSrc}
                                    className="w-full h-full object-contain"
                                    controls
                                    autoPlay
                                />
                            )}
                        </div>
                        <button
                            className="absolute left-0 top-1/2 text-black text-2xl p-2 transform -translate-y-1/2"
                            onClick={showPreviousMedia}
                        >
                            &lt;
                        </button>
                        <button
                            className="absolute right-0 top-1/2 text-black text-2xl p-2 transform -translate-y-1/2"
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
