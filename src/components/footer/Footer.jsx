import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import styles from "./page.module.css";

const Footer = () => {
  console.log("hello");
  return (
    <>
      <div className="flex flex-row ">
        <div className="flex">All rights reserved</div>
        <div className="flex flex-row justify-center items-center mx-5">
          <div className=" mx-2">
            <Link href="https://github.com/astrospkc">
              {" "}
              <BsGithub />
            </Link>
          </div>

          <div className="text-blue-600 mx-2">
            <Link href=" https://twitter.com/punamku22075700">
              {" "}
              <BsTwitter />
            </Link>
          </div>

          <div className="text-blue-500 mx-2">
            <Link href=" https://www.linkedin.com/in/punam-kumari-2018951b6/">
              {" "}
              <BsLinkedin />
            </Link>
          </div>

          {/* <div>
            <BsInstagram />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
