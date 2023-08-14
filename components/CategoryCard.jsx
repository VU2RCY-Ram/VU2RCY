const CategoryCard = () => {
  return (
    <div className="flex flex-wrap select-none max-w-lg text-[0.65rem] md:text-sm lg:text-[0.9rem] xl:text-base items-center font-semibold justify-evenly w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto mt-6 mb-8">
      <div className="bg-gradient-to-r from-[#ffe4e4] to-[#ffe2d4] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#cf3903] whitespace-nowrap m-1">
        Radio Tech
      </div>
      <div className="bg-gradient-to-l from-[#e7ffdc] to-[#ddfff8] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#097360] whitespace-nowrap m-1">
        Antenna Design
      </div>
      <div className="bg-gradient-to-l from-[#cde1ff] to-[#f9d2ff] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#4e0aa2] whitespace-nowrap m-1">
        DXpeditions
      </div>
      <div className="bg-gradient-to-l from-[#ffdaf9] to-[#ffdcdc] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#690c58] whitespace-nowrap m-1">
        Propagation
      </div>
      <div className="bg-gradient-to-l from-[#d0e0ff] to-[#ffc5cb] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#6e249a] whitespace-nowrap m-1">
        QRP Operations
      </div>
      <div className="bg-gradient-to-l from-[#d3e1ff] to-[#ffdcad] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#b4332e] whitespace-nowrap m-1">
        Digital Modes
      </div>
      <div className="bg-gradient-to-l from-[#d6f1e1] to-[#d9f1ff] rounded-[0.89rem] px-2 md:px-3 md:py-1 text-[#146130] whitespace-nowrap m-1">
        Contesting
      </div>
    </div>


  );
};

export default CategoryCard;
