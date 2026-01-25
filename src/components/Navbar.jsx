import { useFavorites } from "../context/FavoritesContext";

function Navbar({ setQuery }) {
  const { favorites } = useFavorites();

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent">

      {/* LEFT SIDE */}
      <h1 className="text-red-600 text-3xl font-extrabold tracking-wide">
        MOVIES SEARCH APP
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">


        {/* TEXT */}
        <span className="text-sm text-gray-300">
          UNLIMITED MOVIES
        </span>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setQuery(e.target.value)}
          className="bg-zinc-800 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>
    </div>
  );
}

export default Navbar;
