"use client";
import React from "react";
import styles from "./hero.module.css";
import profileImg from "../../../public/images/ProfileImg.jpg";
import Image from "next/image";
import resume from "../../../public/resume/a.pdf";
const Hero = () => {
  return (
    <div className={styles.heroDiv}>
      <div className={styles.dataDiv}>
        <h3>Hello, I'm Manash,</h3>
        <h1 className={styles.focusinexpand}>Buisness Analyst</h1>
        <h3>based in Banglore.</h3>
        <a
          href={resume}
          className={styles.button}
          download="Manash_Protim_Deori_Resume.pdf"
        >
          Resume
        </a>
      </div>
      <Image
        className={styles.profileImg}
        alt="ProfileImg"
        src={profileImg}
        width={100}
        style={{ height: "auto" }}
        placeholder="blur"
      />
      <a
        href={resume}
        className={styles.buttonM}
        download="Abhinav_Pratap_Singh_Resume.pdf"
      >
        <span className={styles.ping}>pip</span>
        Resume
      </a>
    </div>
  );
};

export default Hero;
