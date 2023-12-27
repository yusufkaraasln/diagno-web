"use client";
import React, { useEffect } from "react";
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";

const Stethescope = () => {
  return (
    <>
      <div className={styles.stethoscope_c1}>
        <div className={styles.stethoscope_c2}>
          <div className={styles.stethoscope_c3}>
            <div
              style={{
                background: "#242526",
                height: "3vh",
                width: "3vh",
                borderRadius: "50%",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          height: "30vh",
          width: "100vw",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div className={styles.stethoscope_wire}></div>
      </div> */}
    </>
  );
};

export default Stethescope;
