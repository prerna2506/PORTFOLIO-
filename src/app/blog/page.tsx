import BlogIndexClient from "@/components/BlogIndexClient";
import { getAllPosts } from "@/lib/blogs";

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  return <BlogIndexClient posts={posts} />;
}
