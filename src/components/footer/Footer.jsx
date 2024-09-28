import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="TrisBlog" width={50} height={50} />
        <h1 className={styles.logoText}>TrisBlog</h1>
      </div>
      <p className={styles.description}>
        TrisBlog là nơi mình chia sẻ góc nhìn về những chủ đề mình thấy hứng thú 
        như công nghệ, thể thao, phim ảnh,... và hơn thế nữa.
      </p>
      <div className={styles.icons}>
        <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
        <Image src="/instagram.png" alt="Instargram" width={18} height={18} />
        <Image src="/tiktok.png" alt="Github" width={18} height={18} />
        <Image src="/youtube.png" alt="Linkedin" width={18} height={18} />
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>

        </div>

      </div>



      </div>
    </div>
  )
}

export default Footer

