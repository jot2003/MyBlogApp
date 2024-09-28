import React from 'react'
import styles from "./menuPosts.module.css";
import Image from 'next/image';
import Link from 'next/link';

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        {/* Chủ đề Âm nhạc */}
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="Âm nhạc" className={styles.image} fill />
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.music}`}>
              Âm nhạc
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

        {/* Chủ đề Phim ảnh */}
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="Phim ảnh" className={styles.image} fill />
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.movie}`}>
              Phim ảnh
            </span>
            <h3 className={styles.postTitle}>
              Qua góc nhìn của mình, Attack On Titan xuất sắc tới cỡ nào? Vì sao mình phát cuồng tới vậy?
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Tri Thanh HK - </span>
              <span className={styles.date}>05.05.2024</span>
            </div>
          </div>
        </Link>

        {/* Chủ đề Chuyện đi tập */}
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="Chuyện đi tập" className={styles.image} fill />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fitness}`}>
              Chuyện đi tập
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

        {/* Chủ đề Chuyện ăn uống */}
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="Chuyện ăn uống" className={styles.image} fill />
          </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Chuyện ăn uống
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
  )
}

export default MenuPosts
