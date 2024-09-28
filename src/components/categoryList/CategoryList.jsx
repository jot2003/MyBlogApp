import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./categoryList.module.css";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=music" className={`${styles.category} ${styles.music}`}>
          <Image 
            src="/style.png" 
            alt="Music"
            width={32}
            height={32}
            className={styles.image}
          />
          Music
        </Link>

        <Link href="/blog?cat=code" className={`${styles.category} ${styles.code}`}>
          <Image 
            src="/coding.png" 
            alt="Học code"
            width={32}
            height={32}
            className={styles.image}
          />
          Học code
        </Link>

        <Link href="/blog?cat=fitness" className={`${styles.category} ${styles.fitness}`}>
          <Image 
            src="/culture.png" 
            alt="Chuyện đi tập"
            width={32}
            height={32}
            className={styles.image}
          />
          Chuyện đi tập
        </Link>

        <Link href="/blog?cat=movie" className={`${styles.category} ${styles.movie}`}>
          <Image 
            src="/travel.png" 
            alt="Phim ảnh"
            width={32}
            height={32}
            className={styles.image}
          />
          Phim ảnh
        </Link>

        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
          <Image 
            src="/food.png" 
            alt="Chuyện Ăn uống"
            width={32}
            height={32}
            className={styles.image}
          />
          Chuyện Ăn uống
        </Link>
        <Link href="/blog?cat=myidols" className={`${styles.category} ${styles.myidols}`}>
          <Image 
            src="/myidols.png" 
            alt="My Idols"
            width={32}
            height={32}
            className={styles.image}
          />
          My Idols
        </Link>

      </div>
    </div>
  );
};

export default CategoryList;
