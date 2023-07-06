import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import styles from "./page.module.css";
import one from "/public/1.jpg";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
const Blog = async () => {
  const data = await getData();

  return (
    <>
      <div className="container h-[100vh]">
        <div>
          {/* <Link href="/portfolio">
            <BsFillArrowLeftCircleFill />
          </Link> */}

          {data &&
            data.map((e, i) => (
              <Link href="/blog/testId" className="" key={e.id}>
                <div className={styles.items1}>
                  <div
                    className={styles.item}
                    style={{ height: "" }}
                    key={item.id}
                  >
                    <div className={styles.i}>
                      <Image
                        src={one}
                        alt="one"
                        className="m-2"
                        style={{ height: "20rem", width: "20rem" }}
                      />
                    </div>
                    <div className=" text-white w-[50%] m-2 px-3">
                      <div>{e.title}</div>
                      <div>{e.body}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
