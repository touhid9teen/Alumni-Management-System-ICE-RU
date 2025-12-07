import { FC, useState } from "react";
import { CreatePostModalProps } from "../../types";
import { X } from "lucide-react";

export const CreatePostModal: FC<CreatePostModalProps> = ({
  onClose,
  onSubmit,
}) => {
  const [content, setContent] = useState<string>("");

  const handleSubmit = (): void => {
    onSubmit(content);
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-96 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Create Post</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts with the alumni community..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
