import { useEffect,useMemo, useState } from "react";
import API from "../api/api.js";
import FolderCard from "../components/FolderCard.jsx";
import FileCard from "../components/FileCard.jsx";
import Breadcrumbs from "../components/BreadCrumbs.jsx";
import FileUpload from "../components/FileUpload.jsx";
import FilePreview from "../components/FilePreview.jsx";
import ShareModal from "../components/ShareModel.jsx";

export default function Dashboard() {
  const [data, setData] = useState({ folders: [], files: [], path: [] });
  const [msg, setMsg] = useState("");
  const [currentFolder, setCurrentFolder] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);
  const [shareFile, setShareFile] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");


  // Load folders & files
  const load = async (folderId = null) => {
    setCurrentFolder(folderId);

    const res = folderId
      ? await API.get(`/folders/${folderId}`)
      : await API.get("/files");

    setData(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  // Test API
  useEffect(() => {
    API.get("/test")
      .then((res) => setMsg(res.data.message))
      .catch(console.error);
  }, []);

  // File preview
  const openPreview = async (file) => {
    const res = await API.get(`/files/${file.id}/preview`);
    setPreviewFile({
      ...file,
      previewUrl: res.data.url,
    });
  };

  // Filter + Sort (Optimized)
  const filteredData = useMemo(() => {
    let files = [...(data.files || [])];
    let folders = [...(data.folders || [])];

    if (search) {
      files = files.filter((f) =>
        f.name.toLowerCase().includes(search.toLowerCase())
      );
      folders = folders.filter((f) =>
        f.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy === "name") {
      files.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "size") {
      files.sort((a, b) => (a.size || 0) - (b.size || 0));
    } else if (sortBy === "date") {
      files.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    }

    return { files, folders };
  }, [data, search, sortBy]);

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <Breadcrumbs path={data.path || []} onNavigate={load} />

      <h1 className="text-xl font-bold mb-4">My Drive</h1>

      {/*  Search + Sort */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search files or folders..."
          className="border px-3 py-2 rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="size">Sort by Size</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>

      {/* Upload Section */}
      <FileUpload
        folderId={currentFolder}
        onUpload={() => load(currentFolder)}
      />

      {/* Folder & File Grid */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {filteredData.folders.map((f) => (
          <FolderCard
            key={f.id}
            folder={f}
            onOpen={() => load(f.id)}
          />
        ))}

        {filteredData.files.map((f) => (
          <FileCard
            key={f.id}
            file={f}
            onPreview={() => openPreview(f)}
            onShare={() => setShareFile(f)}
          />
        ))}
      </div>

      {/* Preview Modal */}
      <FilePreview
        file={previewFile}
        onClose={() => setPreviewFile(null)}
      />

      {/* Share Modal */}
      {shareFile && (
        <ShareModal
          file={shareFile}
          onClose={() => setShareFile(null)}
        />
      )}

      {/* Test Message */}
      <div className="mt-8">
        <p className="text-green-600">{msg}</p>
      </div>
    </div>
  );
}
