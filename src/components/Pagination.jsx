// // const Pagination = ({ page, setPage }) => (
// // <div className="flex gap-4 justify-center mt-4">
// // <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Prev</button>
// // <button onClick={() => setPage(p => p + 1)}>Next</button>
// // </div>
// // );
// // export default Pagination;

// const Pagination = ({ page, setPage }) => {
//   return (
//     <div className="flex justify-center gap-4 mt-20">
//       <button
//         onClick={() => setPage((p) => Math.max(p - 1, 1))}
//         className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-md "
//       >
//         Prev
//       </button>

//       <button
//         onClick={() => setPage((p) => p + 1)}
//         className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;


const Pagination = ({ page, setPage }) => {
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
