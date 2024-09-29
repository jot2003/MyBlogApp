import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo1.png" alt="TrisBlog" width={50} height={50} />
          <h1 className={styles.logoText}>TrisBlog</h1>
        </div>
        <p className={styles.desc}>
          TrisBlog là nơi mình chia sẻ góc nhìn về những chủ đề mình thấy hứng thú 
          như công nghệ, thể thao, phim ảnh,... và hơn thế nữa. Hy vọng blog sẽ tạo 
          cảm hứng và giúp mình kết nối nhiều hơn với mọi người.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
          <Image src="/tiktok.png" alt="TikTok" width={18} height={18} />
          <Image src="/youtube.png" alt="YouTube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Chủ đề</span>
          <Link href="/">Thể Thao</Link>
          <Link href="/">Phim Ảnh</Link>
          <Link href="/">Công Nghệ</Link>
          <Link href="/">Âm Nhạc</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Mạng xã hội</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Github</Link>
          <Link href="/">Linkedin</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

