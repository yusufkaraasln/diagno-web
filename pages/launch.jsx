import Image from "next/image";
import React from "react";
import LaunchPhoto from "../assets/launch.png";
import styles from "../app/page.module.css";
import PlayStore from "../assets/playstore.svg";
import AppStore from "../assets/appstore.svg";
import Link from "next/link";
import "../app/globals.css";

const Launch = () => {
  return (
    <main className={styles.main}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Image className={styles.launch_photo} src={LaunchPhoto} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              marginLeft: "2rem",
            }}
          >
            <h1
              className={styles.launch_title}
              style={{
                color: "#00ffd2",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              Welcome to diagno
            </h1>
            <span
              className={styles.launch_subtitle}
              style={{
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              AI Supported Medical Diagnosis
            </span>

            <div
              style={{
                position: "relative",
              }}
              className={styles.launch_store}
            >
              <p
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  fontSize: ".8rem",
                }}
              >
                You can download with
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Link
                  href={"https://apps.apple.com/us/app/diagno/id6474567156"}
                >
                  <Image
                    style={{
                      height: "10rem",
                      width: "10rem",
                    }}
                    src={AppStore}
                  />
                </Link>
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.diagno"
                  }
                >
                  <Image
                    style={{
                      height: "10rem",
                      width: "10rem",
                    }}
                    src={PlayStore}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Launch;
