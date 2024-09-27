'use client';

import Image from "next/image";
import { CustomMDX } from "@/components/customMDX";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DashedDivider from "@/components/dashedDivider";
import { useTheme } from '../../../context/ThemeContext';

import {
  plus_jakarta_sans_regular,
  plus_jakarta_sans_medium,
  plus_jakarta_sans_semibold,
  plus_jakarta_sans_bold,
  plus_jakarta_sans_thin,
  messina_book,
  messina_light,
  crimson_regular_italic,
  messina_semibold,
  messina_bold,
  crimson_regular,
} from '../../fonts';


type ResourcesPostClientProps = {
  post: any;
  formattedDate: string;
};

export default function ResourcesPostClient({ post, formattedDate }: ResourcesPostClientProps) {
  const { theme, styles } = useTheme();

  return (
    <>
      <Header />
      <main className={`flex flex-col w-full items-center justify-center ${theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.date,
              dateModified: post.metadata.date,
              description: post.metadata.excerpt,
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "Andrew Schmitz",
              },
            }),
          }}
        />
        <article className={`flex flex-col w-[94%] z-10 px-6 sm:px-2 py-12 space-y-8 ${theme === 'dark' ? 'border-[#242424]' : 'border-[#E0E0E0]'} border-x justify-center gap-y-4`}>
          <h1 className={`text-3xl sm:text-5xl font-bold tracking-tighter leading-tight md:leading-none pt-4 pb-6  text-center  text-gray-50 ${plus_jakarta_sans_bold.className}`}>
            {post.metadata.title}
          </h1>

          <div className=" mb-6 max-w-2xl mx-auto">
            <Image
              src={post.metadata.coverImage}
              alt={`Cover Image for ${post.metadata.title}`}
              className="shadow-sm w-full rounded-xl"
              width={1300}
              height={630}
            />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className={`mb-6 text-lg text-gray-50 ${plus_jakarta_sans_semibold.className}`}>
              {formattedDate}
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className={`prose prose-invert md:prose-lg lg:prose-xl prose-a:underline hover:prose-a:text-sky-500 ${plus_jakarta_sans_regular.className}`}>
              <CustomMDX source={post.content} />
            </div>
          </div>
        </article>
        <DashedDivider />

      </main>
      <Footer />
    </>
  );
}