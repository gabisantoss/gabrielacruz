import BlogPosts from '@/components/posts'
import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations("BlogPosts");

  return (
    <section className="px-5 sm:px-0">
      <h1 className="font-bold text-xl mb-5 text-black dark:text-gray-200">
        {t('lastPublications')}
      </h1>
      <BlogPosts />
    </section>
  )
}
