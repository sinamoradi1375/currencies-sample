type Props = {
  nextHandler: VoidFunction;
  prevHandler: VoidFunction;
  currentPage: number;
};

export default function Pagination({ nextHandler, prevHandler, currentPage }: Props) {
  return (
    <div className="flex items-center justify-center px-4 py-2 rounded-md">
      <button
        className="px-3 py-1  text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={nextHandler}
      >
        Next
      </button>
      <div className="text-white mx-3">{currentPage}</div>
      <button
        className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={prevHandler}
      >
        Prev
      </button>
    </div>
  );
}
