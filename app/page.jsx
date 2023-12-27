import Image from "next/image";
import styles from "./page.module.css";
import Stethescope from "../components/Stethescope";

export default function Home() {
  return (
    <main className={styles.main}>
      <Stethescope />
    </main>
  );
}
