import ResourcesClient from './resourcesClient';
import { getPosts } from "@/lib/resources";

export default async function ResourcesPage() {
  const allPosts = await getPosts();
  return <ResourcesClient posts={allPosts} />;
}