import Comments from "@/components/comments/Comments"
import styles from "./singlePage.module.css"
import Menu from "@/components/menu/Menu"
import Image from "next/image"

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="TrisBlog" fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Tri Thanh HK</span>
                        <span className={styles.date}>01.01.2024</span>

                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="TrisBlog" fill className={styles.image}/>
            </div>
            
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quibusdam 
                    possimus fuga eum. Expedita maxime earum corporis minus inventore dolorem
                     provident possimus minima saepe sed labore obcaecati modi, nemo fugiat?
                </p>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quibusdam 
                possimus fuga eum. Expedita maxim</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quibusdam 
                    possimus fuga eum. Expedita maxime earum corporis minus inventore dolorem
                     provident possimus minima saepe sed labore obcaecati modi, nemo fugiat?
                </p>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quibusdam 
                    possimus fuga eum. Expedita maxime earum corporis minus inventore dolorem
                     provident possimus minima saepe sed labore obcaecati modi, nemo fugiat?
                </p>
                </div>
                <div className={styles.comment}>
                    <Comments />
                </div>
            </div>
            <Menu/>

        </div>

    </div>
  )
}

export default SinglePage