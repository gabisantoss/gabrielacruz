import { Link, getPathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { formatDate } from "@/app/[locale]/blog/utils";
import { getBlogPosts } from "@/lib/posts";

export default async function BlogPosts() {
  const locale = useLocale();
  const t = useTranslations("BlogPosts");
  let allBlogs = await getBlogPosts();

  const filteredPosts = allBlogs.filter((post) => {
    if (locale === "en") {
      return post.enContent && post.enTitle;
    }
    return true;
  });


  return (
    <div>
      {filteredPosts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={getPathname("/blog/[slug]", { slug: post.slug })}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDate(post.publishedAt.toString(), false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight underline">
              {post.title}
            </p>
          </div>
        </Link>
      ))}

      {/* Show message if no posts are available in English */}
      {filteredPosts.length === 0 && (
        <p className="text-neutral-600 dark:text-neutral-400 italic">
          {t('noPostsMessage')}
        </p>
      )}
    </div>
  );
}
