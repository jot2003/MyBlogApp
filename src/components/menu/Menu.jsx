import React from 'react'
import styles from "./menu.module.css";
import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Có gì hot"}</h2>
      <h1 className={styles.title}>Phổ biến nhất</h1>
      <div className={styles.items}>
      <div className={styles.items}>
      {/* Chủ đề Music */}
      <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.music}`}>
            Music
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tri Thanh HK - </span>
            <span className={styles.date}>10.03.2024</span>
          </div>
        </div>
      </Link>

      {/* Chủ đề Movie */}
      <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.movie}`}>
            Movie
          </span>
          <h3 className={styles.postTitle}>
            Trong mắt mình, Attack On Titan hay tới cỡ nào?
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tri Thanh HK - </span>
            <span className={styles.date}>05.05.2024</span>
          </div>
        </div>
      </Link>

      {/* Chủ đề Fitness */}
      <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fitness}`}>
            Fitness
          </span>
          <h3 className={styles.postTitle}>
            Stay fit and healthy with these 5 simple exercises.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tri Thanh HK - </span>
            <span className={styles.date}>15.06.2024</span>
          </div>
        </div>
      </Link>

      {/* Chủ đề Food */}
      <Link href="/" className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>
            Food
          </span>
          <h3 className={styles.postTitle}>
            Discover the secrets of Vietnamese cuisine.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tri Thanh HK - </span>
            <span className={styles.date}>20.07.2024</span>
          </div>
        </div>
      </Link>
    </div>

      </div>
      <h2 className={styles.subtitle}>Bởi tác giả</h2>
      <h1 className={styles.title}>Bài viết được recommend</h1>
      <div className={styles.items}>
      <div className={styles.items}>
      {/* Chủ đề Music */}
      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="Music Image" className={styles.image} fill />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.music}`}>
            Music
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tri Thanh HK - </span>
            <span className={styles.date}>10.03.2024</span>
          </div>
        </div>
      </Link>

      {/* Chủ đề Movie */}
      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="Movie Image" className={styles.image} fill />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.movie}`}>
            Movie
          </span>
          <h3 className={styles.postTitle}>
            Trong mắt mình, Attack On Titan hay tới cỡ nào?
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tri Thanh HK - </span>
            <span className={styles.date}>05.05.2024</span>
          </div>
        </div>
      </Link>

      {/* Chủ đề Fitness */}
      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="Fitness Image" className={styles.image} fill />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fitness}`}>
            Fitness
          </span>
          <h3 className={styles.postTitle}>
            Stay fit and healthy with these 5 simple exercises.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tri Thanh HK - </span>
            <span className={styles.date}>15.06.2024</span>
          </div>
        </div>
      </Link>

      {/* Chủ đề Food */}
      <Link href="/" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="Food Image" className={styles.image} fill />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>
            Food
          </span>
          <h3 className={styles.postTitle}>
            Discover the secrets of Vietnamese cuisine.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tri Thanh HK - </span>
            <span className={styles.date}>20.07.2024</span>
          </div>
        </div>
      </Link>
    </div>

      </div>
    </div>
    
  );
};

export default Menu
