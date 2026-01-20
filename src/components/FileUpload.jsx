import API from "../api/api.js";

export default function FileUpload({ folderId, onUpload }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file); 

    try {
      await API.post("/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Upload successful");
      onUpload();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.error || "Upload failed");
    }
  };

  return (
    <input
      type="file"
      onChange={handleUpload}
      className="border p-2"
    />
  );
}
