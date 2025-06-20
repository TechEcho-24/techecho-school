import { useState, FormEvent } from "react";
import axios from "axios";

interface DynamicPopupProps {
  type: "track" | "module" | "topic" | "subtopic";
  ids?: {
    trackId?: string;
    moduleIndex?: string | number;
    topicIndex?: string | number;
  };
  onClose: () => void;
  onCreated: (data: any) => void; // Aap is `any` ko specific response type se replace kar sakte hain agar API ka response structure pata ho
}

export default function DynamicPopup({
  type,
  ids = {},
  onClose,
  onCreated,
}: DynamicPopupProps) {
  const [input, setInput] = useState<string>("");

  const getEndpoint = () => {
    const { trackId, moduleIndex, topicIndex } = ids;
    const url = "http://localhost:3001";

    switch (type) {
      case "track":
        return { url: `${url}/api/tracks`, data: { trackTitle: input } };
      case "module":
        return {
          url: `${url}/api/tracks/${trackId}/modules`,
          data: { title: input },
        };
      case "topic":
        return {
          url: `${url}/api/tracks/${trackId}/modules/${moduleIndex}/topics`,
          data: { title: input },
        };
      case "subtopic":
        return {
          url: `${url}/api/tracks/${trackId}/modules/${moduleIndex}/topics/${topicIndex}/subtopics`,
          data: { subtopic: input },
        };
      default:
        return null;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const endpoint = getEndpoint();
    if (!endpoint) return;

    try {
      const res = await axios.post(endpoint.url, endpoint.data);
      onCreated(res.data);
      onClose();
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4 capitalize">Add {type}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Enter ${type} title`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
