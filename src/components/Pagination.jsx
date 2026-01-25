// const Pagination = ({ page, setPage }) => {
  function Pagination({page,setPage}){
  return (
    <div className="flex justify-center gap-4 mt-10">
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        className="px-5 py-2 bg-zinc-800 rounded"
      >
        Prev
      </button>

      <button
        onClick={() => setPage((p) => p + 1)}
        className="px-5 py-2 bg-red-600 rounded font-semibold"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
