import { useState } from "react";
import API from "../api/api.js";

export default function FileUpload({ onUpload }) {
  const [progress, setProgress] = useState(0);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    

    await API.post("/files/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (e) =>
        setProgress(Math.round((e.loaded * 100) / e.total)),
    });

    setProgress(0);
    onUpload();
  };

  const onDrop = (e) => {
    e.preventDefault();
    uploadFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed p-6 text-center rounded-lg"
    >
      <p className="text-gray-600">Drag & Drop files here</p>

      <input
        type="file"
        onChange={(e) => uploadFile(e.target.files[0])}
        className="mt-3"
      />

      {progress > 0 && (
        <div className="mt-2">
          Uploading... {progress}%
        </div>
      )}
    </div>
  );
}
