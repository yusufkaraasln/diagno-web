"use client";
import styles from "./page.module.css";
import Stethescope from "../components/Stethescope";
import { useEffect, useState } from "react";
import Launch from "../components/Launch";

export default function Home() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>{show ? <Stethescope /> : <Launch />}</main>
  );
}
