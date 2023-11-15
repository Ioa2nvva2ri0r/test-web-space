// Components
import Slider from "@/components/Slider";
import Posts from "@/components/Posts";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
// Google fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "400", display: "swap" });
// Styles
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <a href="#" className={`${styles.logo} ${inter.className}`}>
          logo
        </a>
      </header>
      <main>
        <Slider />
        <Posts />
        <Map />
      </main>
      <Footer name="Яроцевич Иван" tel="+375 (29) 809-56-25" />
    </>
  );
}
