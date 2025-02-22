import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate } from "@/app/[locale]/blog/utils";
import { getBlogPost } from "@/lib/posts";
import UnavailablePost from "@/components/UnavailablePost"; // Import UnavailablePost

export default async function Blog({ params }) {
  const { slug, locale } = params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const isEnglish = locale === 'en';
  const isTitleAvailable = !!post.enTitle;
  const isContentAvailable = !!post.enContent;

  if (isEnglish && !isTitleAvailable && !isContentAvailable) {
    return <UnavailablePost />;
  }

  const titleToRender = isEnglish ? post.enTitle || post.title : post.title;
  const contentToRender = isEnglish ? post.enContent || post.content : post.content;

  return (
    <section className="px-5 sm:px-0">
      <h1 className="title font-semibold text-2xl tracking-tighter dark:text-neutral-200">
        {titleToRender}
      </h1>

      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.publishedAt.toString())}
        </p>
      </div>

      <article className="prose">
        <CustomMDX source={contentToRender} />
      </article>
    </section>
  );
}
