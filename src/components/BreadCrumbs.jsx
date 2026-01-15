export default function Breadcrumbs({ path, onNavigate }) {
  return (
    <div className="mb-4 text-sm text-gray-600">
      {path.map((p, i) => (
        <span key={p.id}>
          <button onClick={() => onNavigate(p.id)}>{p.name}</button>
          {i < path.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
}
