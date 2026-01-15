import { useState } from "react";
import ShareModal from "./ShareModel.jsx";

export default function FileCard({ file, onPreview }) {
  const [shareOpen, setShareOpen] = useState(false);
  return (
    <div className="border p-4 rounded shadow-sm">
      <h4 className="font-semibold">{file.name}</h4>
      <p className="text-sm text-gray-500">{file.type}</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onPreview(file)}
          className="text-blue-500"
        >
          Preview
        </button>
      <button
        onClick={() => setShareOpen(true)}
        className="text-blue-600 text-sm mt-2"
      >
        Share
      </button>

      {shareOpen && (
        <ShareModal
          file={file}
          onClose={() => setShareOpen(false)}
        />
      )}
      </div>
    </div>
  );
}
