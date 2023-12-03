import Image from "next/image";

const TechCard = (props) => {
  return (
    <div
      className=" group relative  h-20 w-20 sm:h-22 sm:w-22 md:h-26 md:w-26 lg:h-30 lg:w-30 rounded-md sm:rounded-lg md:rounded-xl border border-0 "
      onClick={() => {
        props.changeId(props.id);
        window.scrollTo(0, 0);
      }}
    >
      <div className="h-full w-full relative">
        <Image
          src={props.main}
          fill
          className="select-none group-hover:scale-[1.1] transition-all duration-700 object-contain"
          alt={props.alt}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </div>
    </div>
  );
};

export default TechCard;
