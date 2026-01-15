export default function FilePreview({ file, onClose }) {
  if (!file) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-3/4 h-3/4 overflow-auto">
        <button onClick={onClose} className="mb-3 text-red-500">
          Close
        </button>

        {file.type.startsWith("image") && (
          <img src={file.previewUrl} className="max-w-full" />
        )}

        {file.type === "application/pdf" && (
          <iframe src={file.previewUrl} className="w-full h-full" />
        )}

        {file.type.startsWith("text") && (
          <iframe src={file.previewUrl} className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
