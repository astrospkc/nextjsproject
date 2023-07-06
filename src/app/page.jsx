import Image from "next/image";
import one from "public/1.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex flex-row  justify-center md:my-48 md:mx-10 items-center">
        <div className=" ">
          <h1 className="text-7xl md:text-8xl font-bold">
            DESIGN WITH PASSION
          </h1>
          <p className="text-xl md:text-2xl w-1/2">
            A good design makes the world and bad design breaks the world.
            Design is art which tells a story.
          </p>
          <Link href="/portfolio">
            <button className="bg-green-500 rounded-lg p-1 text-black my-10">
              Show your work
            </button>
          </Link>
        </div>
        <Image
          src={one}
          alt="Wdev"
          className="w-1/3 h-1/3 md:w-1/5 md:h-1/5 my-10 rounded-full"
        />
      </div>
    </>
  );
}
