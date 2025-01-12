import React, { useEffect } from "react";
import { useTheme } from "next-themes"; // For theme detection

const Modal = ({
  isOpen,
  onClose,
  details,
}: {
  isOpen: boolean;
  onClose: () => void;
  details: any;
}) => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup when component unmounts or modal closes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50"
      style={{ pointerEvents: "auto" }}
    >
      <div
        className={`p-8 rounded-lg shadow-xl w-11/12 md:w-1/3 relative z-60 max-h-[90vh] overflow-y-auto ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">{details.title} Plan</h2>
        <p className="text-xl font-semibold mb-4">Price: {details.price}</p>
        <h3 className="text-lg font-semibold mb-2">Features:</h3>
        <ul className="list-disc pl-6">
          {details.features.map((feature: string, index: number) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>

        {/* Optional Image or Video Embed Section */}
        {details.image && (
          <div className="my-4">
            <img
              src={details.image}
              alt={details.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        {details.video && (
          <div className="my-4">
            <iframe
              width="100%"
              height="315"
              src={details.video}
              title="Plan Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="flex justify-center mt-4">
          <button
            className={`rounded-md px-4 py-2 ${
              theme === "dark"
                ? "bg-red-700 text-gray-200 hover:bg-red-600"
                : "bg-red-500 text-white hover:bg-red-400"
            }`}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
