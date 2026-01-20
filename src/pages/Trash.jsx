import { useEffect, useState } from "react";
import API from "../api/api.js";

export default function Trash() {
  const [files, setFiles] = useState([]);

  const loadTrash = async () => {
    const res = await API.get("/files/trash/all");
    setFiles(res.data);
  };

  useEffect(() => {
    loadTrash();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Trash</h1>

      {files.length === 0 && (
        <p className="text-gray-500">Trash is empty</p>
      )}

      {files.map((file) => (
        <div
          key={file.id}
          className="border p-3 rounded flex justify-between mb-2"
        >
          <span>{file.name}</span>

          <div className="flex gap-3">
            <button
              className="text-green-600"
              onClick={async () => {
                await API.put(`/files/${file.id}/restore`);
                loadTrash();
              }}
            >
              Restore
            </button>

            <button
              className="text-red-600"
              onClick={async () => {
                await API.delete(`/files/${file.id}/permanent`);
                loadTrash();
              }}
            >
              Delete Forever
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
