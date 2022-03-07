import classes from "./PostContent.module.css";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    content: "# This a first post",
    slug: "getting-started-with-nextjs",
  },
];

console.log(DUMMY_POSTS[0].content);

const PostContent = () => {
  const imgPath = `/images/posts/${DUMMY_POSTS[0].slug}/${DUMMY_POSTS[0].image}`;

  return (
    <article className={classes.content}>
      <PostHeader image={imgPath} title={DUMMY_POSTS[0].title} />
      <ReactMarkdown>{DUMMY_POSTS[0].content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
