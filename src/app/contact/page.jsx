import React from "react";
import Image from "next/image";
import cImage from "/public/5.jpg";
const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center h-[100vh]">
        <div className="w-[50%] rounded-full mr-3">
          <Image
            src={cImage}
            alt="contact Page"
            className="object-contain rounded-full"
          />
        </div>
        <div className="w-[50%] flex flex-col ml-3">
          <h1 className="text-2xl mb-6 font-bold">CONTACT</h1>
          <input
            type="text"
            placeholder="Name"
            className="mb-4 h-10  border-2 border-gray-700"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="mb-4 h-10  border-2 border-gray-700"
          />
          <textarea
            name=""
            id=""
            cols="25"
            rows="10  "
            placeholder="Message"
            className="mb-4   border-2 border-gray-700"
          ></textarea>
          <button className="bg-green-500 w-1/5 rounded-full hover:cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
