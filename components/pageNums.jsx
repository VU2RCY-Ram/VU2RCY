import classNames from "classnames";
import { useEffect, useState } from "react";
import { BsFillRewindFill } from "react-icons/bs";
import { BsCaretLeftFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsFastForwardFill } from "react-icons/bs";
import { BsCaretRightFill } from "react-icons/bs";

export default function PageNums({ active, setActive, Pages }) {
  const SibblingCount = 1;
  const [paginationWithSibling, setPaginationWithSibling] = useState(
    Pages.length <= 5 ? Pages : [0, 1, 2, 3, ".", Pages.length - 1]
  );

  useEffect(() => {
    // slice n push
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
          className="p-3 py-2  rounded-md m-2 focus:outline-none "
          onClick={() => {
            setActive(0);
          }}
        >
          <BsFillRewindFill />
        </button>
        <button
          disabled={active === 0}
          className="p-3 py-2  rounded-md focus:outline-none "
          onClick={() => {
            setActive(active - 1);
          }}
        >
          <BsCaretLeftFill />
        </button>
        {paginationWithSibling.map((page, index) => {
          if (page === ".") {
            return <BsThreeDots key={`${page}+${index}`} />;
          }
          if (typeof page === "number") {
            return (
              <button
                key={`${page}+${index}`}
                style={{ color: "white !important" }}
                onClick={() => {
                  setActive(page);
                }}
                className={classNames([
                  "border",
                  "rounded-md",
                  "cursor-pointer",
                  "p-3",
                  "text-white",
                  "py-1",
                  { "bg-rose-800 text-white": active !== page },
                  "m-2",
                  { "bg-violet-900 text-white": active === page },
                ])}
              >
                {page + 1}
              </button>
            );
          }
        })}
        <button
          className=" p-3 py-2 rounded-md focus:outline-none "
          disabled={active === Pages[Pages.length - 1]}
          onClick={() => {
            setActive(active + 1);
          }}
        >
          <BsCaretRightFill />
        </button>
        <button
          className=" p-3 py-2  rounded-md m-2 focus:outline-none "
          disabled={active === Pages[Pages.length - 1]}
          onClick={() => {
            setActive(Pages[Pages.length - 1]);
          }}
        >
          <BsFastForwardFill />
        </button>
      </div>
    </div>
  );
}
