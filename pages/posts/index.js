import AllPosts from "../../components/posts/AllPosts";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    description: "NextJS is a react framework for production and development",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    description: "NextJS is a react framework for production and development",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    description: "NextJS is a react framework for production and development",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    description: "NextJS is a react framework for production and development",
    slug: "getting-started-with-nextjs",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
