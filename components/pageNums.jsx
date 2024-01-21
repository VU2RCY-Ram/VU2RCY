import classNames from "classnames";
import { useEffect, useState } from "react";

export default function PageNums({ active, setActive, Pages }) {
  const SibblingCount = 1;
  const [paginationWithSibling, setPaginationWithSibling] = useState(
    Pages.length <= 5 ? Pages : [0, 1, 2, 3, ".", Pages.length - 1]
  );

  useEffect(() => {
    // slice n push
    console.log("some page thing");
    if (Pages.length <= 5) {
      setPaginationWithSibling(Pages);
    } else {
      if (active < 3) {
        // first part
        setPaginationWithSibling([0, 1, 2, 3, ".", Pages.length - 1]);
      } else if (active >= Pages.length - 3) {
        // last part
        // SLICE
        setPaginationWithSibling([
          0,
          ".",
          Pages.length - 4,
          Pages.length - 3,
          Pages.length - 2,
          Pages.length - 1,
        ]);
      } else {
        // mid part
        // SLICE
        setPaginationWithSibling([
          0,
          ".",
          ...Pages.slice(active - SibblingCount, active + SibblingCount + 1),
          ".",
          Pages.length - 1,
        ]);
      }
    }
  }, [active, Pages]);

  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <button
          disabled={active === 0}
          className="p-3 py-2 bg-blue-900 rounded-md m-2 focus:outline-none "
          onClick={() => {
            setActive(0);
          }}
        >
          <i className="bi bi-rewind"></i>
        </button>
        <button
          disabled={active === 0}
          className="p-3 py-2 bg-blue-900 rounded-md focus:outline-none "
          onClick={() => {
            setActive(active - 1);
          }}
        >
          <i className="bi bi-caret-left"></i>
        </button>
        {paginationWithSibling.map((page, index) => {
          if (page === ".") {
            return <i key={`${page}+${index}`} className="bi bi-three-dots" />;
          }
          if (typeof page === "number") {
            return (
              <button
                key={`${page}+${index}`}
                onClick={() => {
                  setActive(page);
                }}
                className={classNames([
                  "border",
                  "rounded-md",
                  "cursor-pointer",
                  "p-3",
                  "py-2",
                  { "bg-amber-700": active !== page },
                  "m-2",
                  { "bg-zinc-950 text-red-600": active === page },
                ])}
              >
                {page + 1}
              </button>
            );
          }
        })}
        <button
          className=" p-3 py-2 bg-blue-50 rounded-md focus:outline-none "
          disabled={active === Pages[Pages.length - 1]}
          onClick={() => {
            setActive(active + 1);
          }}
        >
          <i className="bi bi-caret-right"></i>
        </button>
        <button
          className=" p-3 py-2 bg-blue-50 rounded-md m-2 focus:outline-none "
          disabled={active === Pages[Pages.length - 1]}
          onClick={() => {
            setActive(Pages[Pages.length - 1]);
          }}
        >
          <i className="bi bi-fast-forward"></i>
        </button>
      </div>
    </div>
  );
}
