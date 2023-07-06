import React from "react";
import Image from "next/image";
import logo from "/public/logo.jpg";
import frontend from "/public/frontend.jpg";
import fullstack from "/public/backend.jpg";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="container flex flex-col md:flex-row pb-5 items-center h-[100vh] ">
      <div className="border-2 border-gray-700 m-3 w-fit md:w-[35%] hover:border-white hover:cursor-pointer hover:opacity-50 hover:text-green-500">
        <Image src={logo} className="h-[50vh] p-3  " alt="Logo" />
        <Link href="/portfolio/logoWork">
          <h1 className="text-3xl  text-center font-bold my-4 ">LOGO</h1>
        </Link>
      </div>

      <div className="border-2 border-gray-700 m-3 w-fit md:w-[35%]  hover:border-white hover:cursor-pointer hover:opacity-50 hover:text-green-500">
        <Image src={frontend} className="h-[50vh]  p-3" alt="frontend" />
        <Link href="/portfolio/frontendWork">
          <h1 className="text-3xl  text-center font-bold my-4 ">FRONTEND</h1>
        </Link>
      </div>
      <div className="border-2 border-gray-700 m-3  w-fit md:w-[35%] hover:border-white hover:cursor-pointer hover:opacity-50 hover:text-green-500">
        <Image src={fullstack} className="h-[50vh]  p-3" alt="fullstack" />
        <Link href="/portfolio/fullstackWork">
          <h1 className="text-3xl  text-center font-bold my-4 ">FULLSTACK</h1>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
