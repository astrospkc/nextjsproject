"use client";
import React from "react";
import Link from "next/link";
import Theme from "../Theme/Theme";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "BLog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between mx-10">
        <div className="flex flex-row items-center">
          <div className="text-2xl font-bold mr-4">
            <Link href="/">ASTRO</Link>
          </div>
          <div className="">
            <Theme />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {links.map((link) => (
            <Link key={link.id} href={link.url} className="mx-2">
              {link.title}
            </Link>
          ))}
          <button
            onClick={() => console.log("logged out")}
            className="bg-green-400 text-black p-1"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
