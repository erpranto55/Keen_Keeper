import { useEffect, useState } from "react";
import {
    FaPhone,
    FaCommentDots,
    FaVideo,
    FaHandshake,
} from "react-icons/fa";

const Timeline = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("timeline")) || [];
        setData(stored);
    }, []);

    const filteredData =
        filter === "All"
            ? data
            : data.filter((item) => item.type === filter);

    const getIcon = (type) => {
        if (type === "Call") return <FaPhone />;
        if (type === "Text") return <FaCommentDots />;
        if (type === "Video") return <FaVideo />;
        return <FaHandshake />;
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-10">
            <div className="max-w-5xl mx-auto px-4">

                <h1 className="text-3xl font-bold text-[#1F2937] mb-6">
                    Timeline
                </h1>
                <select
                    className="mb-6 border border-gray-200 px-3 py-2 rounded-md text-sm bg-white text-black"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option>All</option>
                    <option>Call</option>
                    <option>Text</option>
                    <option>Video</option>
                </select>

                <div className="flex flex-col gap-4">
                    {filteredData.length === 0 ? (
                        <p className="text-gray-400 text-sm">
                            No interactions yet
                        </p>
                    ) : (
                        filteredData.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition"
                            >
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 text-sm">
                                    {getIcon(item.type)}
                                </div>

                                <div className="flex-1">
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold">
                                            {item.type}
                                        </span>{" "}
                                        with{" "}
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