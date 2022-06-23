import Link from "next/link";
import styles from "../styles/postBundle.module.css";
import Image from "next/image";

export default function PostBundle({ post }) {
  
  return (
    <div className={styles.post}>
      <Link href={`posts/${post.id}`}>
        <div className={styles.somePost}>
          <Image
            src={post.image.url}
            width={
              "180px"
            } /* post.fields.images.fields.file.details.image.width  */
            height={
              "148px"
            } /* post.fields.images.fields.file.details.image.height  */
          />
          <div className={styles.title}>{post.title}</div>
        </div>
      </Link>

    </div>
  );
}
