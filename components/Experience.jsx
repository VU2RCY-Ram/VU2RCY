import Link from "next/link";
import HorizontalLine from "./HorizontalLine";

const Experience = () => {
  return (
    <div className=" lg:mt-8 flex flex-col justify-start space-y-12 mx-auto items-center md:mt-20 ">
      <div className="flex flex-col relative space-y-16 md:space-y-10 lg:space-y-8 items-center">
        <p className="text-md px-10 text-justify">
          As an eager ham radio operator, I love sharing my experiences. Whether
          setting up my shack or experimenting with homebrew equipment, each
          moment is an adventure. Check my latest{" "}
          <Link
            title="Vu2rcy's Involvement: Latest Projects in Radio "
            href="/work"
          >
            <span className="text-blue-500 hover:underline cursor-pointer">
              Work
            </span>
          </Link>{" "}
          on exciting radio projects or explore my meticulously crafted{" "}
          <Link href="/shack" title="Vu2rcy's Ham Shack: Where Magic Happens">
            <span className="text-green-500 hover:underline cursor-pointer">
              Shack setup
            </span>
          </Link>
          . Dive into the world of creativity with{" "}
          <Link href="/homebrew" title="Vu2rcy's Handcrafted gear">
            <span className="text-yellow-500 hover:underline cursor-pointer">
              Homebrew projects
            </span>
          </Link>
          , showcasing the joy of building radio equipment from scratch. Explore{" "}
          <Link href="/products" title="Vu2rcy's Handcrafted Products">
            <span className="text-rose-500 hover:underline cursor-pointer">
              Personalized accessories
            </span>
          </Link>{" "}
          designed to enhance your ham radio experience. Learn more{" "}
          <Link
            href="/about"
            title="VU2RCY: Discover the Story Behind the Call"
          >
            <span className="text-purple-500 hover:underline cursor-pointer">
              About
            </span>
          </Link>{" "}
          my journey, passion, and dedication to ham radio. Join me in
          celebrating recognition and achievements in the radio community.
          Discover{" "}
          <Link href="/awards" title="vu2rcy's Awards Recognition Achievements">
            <span className="text-red-500 hover:underline cursor-pointer">
              Awards
            </span>
          </Link>{" "}
          marking milestones in my ham radio endeavors.
        </p>
      </div>
    </div>
  );
};

export default Experience;
