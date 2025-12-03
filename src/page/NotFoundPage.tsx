import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 font-medium text-xl 
          hover:text-gray-800 transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-6 h-6" /> Back
      </button>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
        Oops! Page Not Found
      </h1>

      <p className="text-gray-600 text-center text-lg md:text-xl max-w-md">
        The page you are looking for doesn’t exist. It might have been removed
        or the URL is incorrect.
      </p>
    </header>
  );
};

export default PageNotFound;
