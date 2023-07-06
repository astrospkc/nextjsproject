import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="container flex flex-col justify-center  md:h-full relative ">
        <div className="text-left text-5xl mt-[5rem] mb-[2rem] font-bold   ">
          MY SERVICES
        </div>
        <div>Check Out gallery</div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default layout;
