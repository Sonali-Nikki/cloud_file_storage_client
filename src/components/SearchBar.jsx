export default function SearchBar({
  query,
  setQuery,
  sort,
  setSort,
}) {
  return (
    <div className="flex gap-3 mb-4">
      <input
        className="border p-2 flex-1"
        placeholder="Search files & folders..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className="border p-2"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="size">Size</option>
        <option value="created_at">Date</option>
      </select>
    </div>
  );
}
