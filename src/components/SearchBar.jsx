
 const SearchBar = ({ setQuery }) => (
   
<input
className="w-full p-3 border rounded"
placeholder="Search movies..."
onChange={(e) => setQuery(e.target.value)}
/>
);
export default SearchBar;