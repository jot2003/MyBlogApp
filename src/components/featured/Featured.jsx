import React from 'react'
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Hi, Mình là Trí Thành! </b>Đây là chỗ mình viết linh tinh.
        </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>What am I doing here?</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
        </p>
        <button className={styles.button}>Readmore</button>
        </div>


      </div>
      </div>
  );
};

export default Featured
