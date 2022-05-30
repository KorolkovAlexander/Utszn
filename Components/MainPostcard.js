import Link from "next/link";
import styles from "../styles/mainpostcard.module.css";
import Image from "next/image";



export default function MainPostcard ({post, firstpost}){
   var options = {
    
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'

  }
  /* function getDate(str) {
    var date = new Date(str);
    return date.toLocaleString('ru', options)
  } 
  var dateFormat = require("dateformat");
var d = post.fields.date  */
return(
  <div className={styles.postgrid}>
   
     
<div className={styles.post}>
<Link href={`mainpost/${post.id}`}>
<a>
<div className={styles.postTitle}>
<a>{post.fields.title}</a></div>
<div className={styles.postDate}>

{/* {getDate(d)} */}
{/* {(dateFormat(d, "dddd, mmmm d, yyyy, h:MM:ss TT").toLocaleString("ru", options))}  */}

</div>
<div className={styles.postImage}>

<Image className={styles.im}
                src={"https:" + post.image.url}
                
 /*                width= {post.fields.images.fields.file.details.image.width }
                height={ post.fields.images.fields.file.details.image.height } */
              />
              </div></a></Link>
              </div>
              
              



</div>

)
}