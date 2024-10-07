import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="mt-24 space-y-5 text-center">
        <h1 className="text-4xl">400</h1>
        <h1 className="text-4xl">Page Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-700 text-white px-7 py-3 mt-8 text-sm transition-transform hover:scale-110 rounded-md"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
