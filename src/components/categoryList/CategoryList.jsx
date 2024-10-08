import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./categoryList.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories",{
    cache: "no-store",
  });
  if(!res.ok){
    throw new Error("Failed!");
  }
  return res.json()
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map(item=>(

        <Link 
          href="/blog?cat=music" 
          className={`${styles.category} ${styles[item.slug]}`}
          key={item._id}
          >
          {item.img && (
            <Image 
            src={item.img}
            alt="Music"
            width={32}
            height={32}
            className={styles.image}
          />)}
          {item.title}
        </Link>
        ))
        }

      </div>
    </div>
  );
};

export default CategoryList;
