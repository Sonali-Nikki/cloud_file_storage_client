import { useState } from "react";
import API from "../api/api.js";

export default function ShareModal({ file, onClose }) {
  const [email, setEmail] = useState("");
  const [permission, setPermission] = useState("viewer");
  const [link, setLink] = useState("");

  const share = async () => {
    const res = await API.post(`/files/${file.id}/share`, {
      email,
      permission,
    });
    setLink(res.data.link);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white p-5 rounded w-96">
        <h3 className="font-bold mb-3">Share File</h3>

        <input
          placeholder="User Email"
          className="border p-2 w-full mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-2"
          onChange={(e) => setPermission(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="editor">Editor</option>
        </select>

        <button
          onClick={share}
          className="bg-blue-500 text-white p-2 w-full"
        >
          Share
        </button>

        {link && (
          <p className="mt-3 text-sm break-all">
            Shareable Link:  
            <br />
            <a className="text-blue-600" href={link} target="_blank">
              {link}
            </a>
          </p>
        )}

        <button
          onClick={onClose}
          className="mt-3 text-red-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}
