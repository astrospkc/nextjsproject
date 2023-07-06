import React from "react";
import LogoWork from "@/components/Note/Logo.jsx";
// import Frontend from "@/components/Note/Frontend.jsx";
// import FullStack from "@/components/Note/FullStack.jsx";
import styles from "./page.module.css";
import Frontend from "@/components/Note/Frontend";
import FullStack from "@/components/Note/FullStack";

const Category = ({ params }) => {
  console.log(params);

  return (
    <>
      <div className="text-3xl text-gray-700 font-bold">
        {params.category.toUpperCase()}
      </div>
      {params.category === "logoWork" ? (
        <LogoWork />
      ) : params.category === "frontendWork" ? (
        <Frontend />
      ) : (
        <FullStack />
      )}
    </>
  );
};

export default Category;
