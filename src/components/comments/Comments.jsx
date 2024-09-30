import Link from "next/link";
import styles from "./comments.module.css"
import Image from "next/image";

const Comments = () => {
    const status = "authenticated"
  
    return (


    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
    {status === "authenticated" ? (
        <div className={styles.write}>
            <textarea className={styles.input} placeholder="Để lại comment tại đây..."/>
            <button className={styles.button}>Gửi</button>
        </div>
    ) : (
        <Link href="/login">Login to write a comment</Link>
    )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Tri Thanh HK</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Non quibusdam possimus fuga eum. Expedita maxime earum corporis minus inventore dolorem
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Tri Thanh HK</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Non quibusdam possimus fuga eum. Expedita maxime earum corporis minus inventore dolorem
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Tri Thanh HK</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Non quibusdam possimus fuga eum. Expedita maxime earum corporis minus inventore dolorem
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Tri Thanh HK</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Non quibusdam possimus fuga eum. Expedita maxime earum corporis minus inventore dolorem
                </p>
            </div>
            
        </div>
    </div>
  );
};

export default Comments;