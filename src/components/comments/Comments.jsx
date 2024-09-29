import Link from "next/link";
import styles from "./comments.module.css"

const Comments = () => {
    const status = "authenticated"
  
    return (


    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
    {status === "authenticated" ? (
        <div className={styles.write}>

        </div>
    ) : (
        <Link href="/login">Login to write a comment</Link>

    )}
    </div>
  );
};

export default Comments;