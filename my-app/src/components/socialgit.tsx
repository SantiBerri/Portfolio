import React from 'react';

const Socialgit = () => {
  return (
    <div>
      <button
        className="mt-4 group w-10 hover:w-44 h-10 hover:bg-black relative bg-black rounded text-neutral-50 duration-700 font-bold flex justify-end gap-2 items-center p-2 pl-6 before:absolute before:-z-10 before:right-8 before:hover:right-40 before:w-6 before:h-6 before:rotate-45"
      >
        <span
          className="origin-right inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-r-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
        >
          Santiberri
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="w-6 h-6 shrink-0 fill-neutral-50"
        >
          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
};

export default Socialgit;
