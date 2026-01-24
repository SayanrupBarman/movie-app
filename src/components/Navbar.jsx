



function Navbar({ setQuery }){
  // const Navbar = ({ setQuery }) => {

  return (
    
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent">
      <h1 className="text-red-600 text-3xl font-extrabold tracking-wide m-3">
        MOVIES SEARCH APP
      </h1>
      <div>
      <span className="mr-7">UNLIMITED MOVIES</span>
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
        className="bg-zinc-800 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-red-600"
      />
      </div>
</div>

  
  );

};

export default Navbar;


