function Filter({setType}){
// const Filter = ({ setType }) => {
  return (
    <select
      onChange={(e) => setType(e.target.value)}
      className="bg-zinc-800 text-white px-3 py-2 rounded"
    >
      <option value="">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
};

export default Filter;
