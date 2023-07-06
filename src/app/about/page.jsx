import React from "react";
import Image from "next/image";
import image from "/public/4.jpg";

const About = () => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center  my-10 ">
        <div className="relative mx-10 md:mx-28 w-[90%]">
          <Image src={image} className="h-96   " alt="about Astro" />
          <div className="absolute bottom-0 bg-black mb-10 mx-4 p-3 text-2xl font-bol">
            Stories you want to tell
          </div>
        </div>
        <div className="my-4 mx-10 md:mx-28 justify-center items-center w-[90%]">
          <div className="flex  flex-col md:flex-row">
            <div className="md:mr-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam eius mollitia id obcaecati voluptate, quidem
                consectetur, aut sint commodi blanditiis animi illo facere!
                Ipsum in dignissimos quod, consequatur delectus praesentium.
              </p>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam eius mollitia id obcaecati voluptate, quidem
                consectetur, aut sint commodi blanditiis animi illo facere!
                Ipsum in dignissimos quod, consequatur delectus praesentium.
              </p>
            </div>
            <div className="md:ml-4">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati aliquid, aliquam dolorem est vitae sit, nostrum
                accusamus repellendus cupiditate non dolor quidem pariatur.
                Libero dolores obcaecati aperiam beatae natus animi.
              </p>
              <button className="bg-green-500 my-10 p-2 rounded-lg text-white">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
