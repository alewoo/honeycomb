import { notFound } from "next/navigation";
import { getPosts, formatDate } from "@/lib/resources";
import ResourcesPostClient from './resourcesPostClient';

export async function generateStaticParams() {
  let posts = getPosts();

  return posts.filter(post => post !== null).map((post) => ({
    slug: post?.slug,
  }));
}

export function generateMetadata({ params }: any) {
  let post = getPosts().find((post) => post?.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    date: date,
    excerpt: description,
    ogImage: image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${process.env.NEXT_PUBLIC_BASE_URL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/resources/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}


type Params = {
  params: {
    slug: string;
  };
};


export default async function Post({ params }: Params) {
  const post = getPosts().find(post => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  const formattedDate = formatDate(post.metadata.date);

  return <ResourcesPostClient post={post} formattedDate={formattedDate} />;
}
