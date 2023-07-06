import React from "react";
import first from "public/1.jpg";
import second from "public/2.jpg";
import third from "public/3.jpg";
import fourth from "public/4.jpg";
import Image from "next/image";
import styles from "./style.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";



const Frontend = () => {
  return (
    <>
    <div>
    <Link href="/portfolio">
          <BsFillArrowLeftCircleFill />
        </Link>
    
      <div className={styles.items1}>
        <div className={styles.item} style={{ height: "" }}>
          <div className={styles.i}>
            <Image
              src={first}
              alt="first"
              className="m-2"
              style={{ height: "20rem", width: "20rem" }}
            />
          </div>
          <div className=" text-white w-[50%] m-2 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            assumenda tenetur modi ab ad fugit vero. Nobis similique eligendi
            tempore maiores porro incidunt iure? Asperiores, obcaecati
            perspiciatis distinctio dolor maxime animi repudiandae laboriosam,
            id mollitia quas eos, voluptas nihil. Officia quisquam ab velit amet
            molestias vitae necessitatibus a sequi aut quod voluptatibus ex
            numquam laborum, alias ducimus itaque, fuga consequuntur suscipit
            magnam tenetur adipisci temporibus recusandae harum quos. Quasi
            libero temporibus ad beatae? Pariatur eligendi vitae optio
            perferendis sunt accusamus officia, deleniti sapiente quaerat,
            dolores aut beatae nostrum a illum cupiditate totam, odit iusto ea
            nisi culpa. Quos, exercitationem a.
          </div>
        </div>
        <div className={styles.item} style={{ height: "" }}>
          <div className="">
            <Image
              src={first}
              alt="first"
              className="m-2"
              style={{ height: "20rem", width: "20rem" }}
            />
          </div>
          <div className="text-white w-[50%] m-2 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            assumenda tenetur modi ab ad fugit vero. Nobis similique eligendi
            tempore maiores porro incidunt iure? Asperiores, obcaecati
            perspiciatis distinctio dolor maxime animi repudiandae laboriosam,
            id mollitia quas eos, voluptas nihil. Officia quisquam ab velit amet
            molestias vitae necessitatibus a sequi aut quod voluptatibus ex
            numquam laborum, alias ducimus itaque, fuga consequuntur suscipit
            magnam tenetur adipisci temporibus recusandae harum quos. Quasi
            libero temporibus ad beatae? Pariatur eligendi vitae optio
            perferendis sunt accusamus officia, deleniti sapiente quaerat,
            dolores aut beatae nostrum a illum cupiditate totam, odit iusto ea
            nisi culpa. Quos, exercitationem a.
          </div>
        </div>
        <div className={styles.item} style={{ height: "" }}>
          <div className="">
            <Image
              src={first}
              alt="first"
              className=""
              style={{ height: "20rem", width: "20rem" }}
            />
          </div>
          <div className="text-white w-[50%] m-2 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            assumenda tenetur modi ab ad fugit vero. Nobis similique eligendi
            tempore maiores porro incidunt iure? Asperiores, obcaecati
            perspiciatis distinctio dolor maxime animi repudiandae laboriosam,
            id mollitia quas eos, voluptas nihil. Officia quisquam ab velit amet
            molestias vitae necessitatibus a sequi aut quod voluptatibus ex
            numquam laborum, alias ducimus itaque, fuga consequuntur suscipit
            magnam tenetur adipisci temporibus recusandae harum quos. Quasi
            libero temporibus ad beatae? Pariatur eligendi vitae optio
            perferendis sunt accusamus officia, deleniti sapiente quaerat,
            dolores aut beatae nostrum a illum cupiditate totam, odit iusto ea
            nisi culpa. Quos, exercitationem a.
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Frontend;
