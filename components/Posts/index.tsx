"use client";

import React, { useEffect, useState } from "react";
// Google fonts
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});
// Styles
import styles from "./posts.module.scss";
// Types
interface IPosts {
  title: string;
  url: string;
}

const Posts: React.FC = () => {
  // React State
  const [posts, setPosts] = useState<[] | IPosts[]>([]);
  const [error, setError] = useState<null | string>(null);
  // React Effect
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");

        if (res.ok) {
          const data = (await res.json()) as IPosts[];
          setPosts(data.slice(0, 8));
        } else throw new Error("Что-то пошло не так...");
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    })();
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>JSON Placeholder API</h2>
      {error ? (
        <p role="alert">{error}</p>
      ) : (
        <ul className={styles.list}>
          {posts.map(({ url, title }, i) => (
            <li className={styles.item} key={`post-${i + 1}`}>
              <img src={url} alt={title} />
              <p className={quicksand.className}>
                пишите ваши вопросы в комментарии <br />
                <span>👇👇👇</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Posts;
