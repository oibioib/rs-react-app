const CloseButton = () => {
  return (
    <button
      type="button"
      className="inline-flex h-full w-full items-center justify-center rounded-md p-0 text-gray-400 hover:cursor-pointer hover:text-sky-400 focus:outline-none focus:ring-inset"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-x"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
};
export default CloseButton;
