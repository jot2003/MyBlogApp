import React from 'react';
import styles from "./menu.module.css";
import Link from 'next/link';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/menuCategories';
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Có gì hot"}</h2>
      <h1 className={styles.title}>Phổ biến nhất</h1>
      <MenuPosts withImage={false} />
      

      <h2 className={styles.subtitle}>Phân loại theo chủ đề</h2>
      <h1 className={styles.title}>Thể loại</h1>
      <MenuCategories/>

      <h2 className={styles.subtitle}>Bài viết mình recommend</h2>
      <h1 className={styles.title}>Khám phá</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
