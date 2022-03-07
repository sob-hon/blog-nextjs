import classes from "./PostItem.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = (props) => {
  const { title, image, date, description, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });

  const imgPath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image src={imgPath} alt={title} width="300" height="200" layout="responsive"/>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
