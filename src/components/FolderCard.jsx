export default function FolderCard({ folder, onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="border p-4 rounded cursor-pointer hover:bg-gray-100"
    >
      📁 {folder.name}
    </div>
  );
}
