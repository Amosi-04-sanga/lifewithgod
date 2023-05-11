"use client";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import Image from "next/image";
import styles from "../../src/app/styles/header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.photoContainer}>
          <Image
            src="/assets/images/maninworship.jpg"
            fill={true}
            className={styles.photo}
            alt="header image cover"
          />
        </div>
        <div className={styles.containerInner}></div>
        <div className={styles.textWrapper}>
          <p className={styles.headerText}>
            <TypeAnimation
              sequence={[
                // Same String at the start will only be typed once, initially
                "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
                2000,
                "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.  PROVERBS 3:5-6 ",
                2000,
                'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life',
                2000,
                'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.  JOHN 3: 16.',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ fontSize: "1.4rem" }}
            />
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
