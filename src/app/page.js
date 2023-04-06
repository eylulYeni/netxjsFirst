import Image from "next/image";
import { Inter } from "next/font/google";
import BlogCard from "../../components/BlogCard";
import styles from "./styles.module.css";

const inter = Inter({ subsets: ["latin"] });

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

export default async function Home() {
  const { posts } = await getPosts();
  console.log(posts);

  return (
    <div className={styles.blogsContainer}>
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
