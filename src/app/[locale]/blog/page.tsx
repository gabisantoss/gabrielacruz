import { BlogPosts } from '@/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-xl mb-5 text-black dark:text-gray-200">
        Últimas Publicações
      </h1>
      <BlogPosts />
    </section>
  )
}
