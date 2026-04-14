import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  FaPhone,
  FaCommentDots,
  FaVideo,
} from "react-icons/fa";

const Timeline = () => {
  const { id } = useParams();

  const [data] = useState(() => {
    return JSON.parse(localStorage.getItem("timeline")) || [];
  });

  const filteredData = id
    ? data.filter((item) => String(item.friendId) === String(id))
    : data;

  const getIcon = (type) => {
    if (type === "Call") return <FaPhone />;
    if (type === "Text") return <FaCommentDots />;
    if (type === "Video") return <FaVideo />;
    return null;
  };

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Timeline
        </h1>

        <div className="flex flex-col gap-4">

          {filteredData.length === 0 ? (
            <p className="text-gray-400 text-sm">
              No interactions yet
            </p>
          ) : (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4"
              >

                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600">
                  {getIcon(item.type)}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {item.type} with{" "}
                    <span className="font-semibold">
                      {item.name}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.date}
                  </p>
                </div>

              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default Timeline;