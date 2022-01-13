import Link from "next/link";
import styles from "../styles/postBundle.module.css";
import Image from "next/image";

export default function PostBundle({ post }) {
  var options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  function getDate(str) {
    var date = new Date(str);
    return date.toLocaleString("ru", options);
  }
  var dateFormat = require("dateformat");
  var d = post.fields.date;
  return (
    <div className={styles.post}>
      <Link href={`posts/${post.fields.id}`}>
        <div className={styles.somePost}>
          <Image
            src={"https:" + post.fields.images.fields.file.url}
            width={
              "180px"
            } /* post.fields.images.fields.file.details.image.width  */
            height={
              "148px"
            } /* post.fields.images.fields.file.details.image.height  */
          />
          <div className={styles.title}>{post.fields.title}</div>
        </div>
      </Link>

      {/* <div> */}
      {/* {getDate(d)} */}
      {/* </div> */}
    </div>
  );
}
