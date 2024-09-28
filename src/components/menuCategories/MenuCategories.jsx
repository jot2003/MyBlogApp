import React from 'react'
import styles from "./menuCategories.module.css";
import Link from 'next/link';

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link
          href="/blog?cat=music" 
          className={`${styles.categoryItem} ${styles.music}`}
        >
          Âm nhạc
        </Link>

        <Link 
          href="/blog?cat=code" 
          className={`${styles.categoryItem} ${styles.code}`}
        >
          Học code
        </Link>

        <Link 
          href="/blog?cat=fitness" 
          className={`${styles.categoryItem} ${styles.fitness}`}
        >
          Chuyện đi tập
        </Link>

        <Link 
          href="/blog?cat=movie" 
          className={`${styles.categoryItem} ${styles.movie}`}
        >
          Phim ảnh
        </Link>

        <Link  
          href="/blog?cat=food" 
          className={`${styles.categoryItem} ${styles.food}`}
        >
          Chuyện ăn uống
        </Link>

        <Link 
          href="/blog?cat=myidols" 
          className={`${styles.categoryItem} ${styles.myidols}`}
        >
          My Idols
        </Link>
      </div>
  )
}

export default MenuCategories
