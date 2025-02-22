import { Link } from "@/i18n/routing"; // Assuming you're using next-intl Link

export default function UnavailablePost() {
    return (
        <div className="text-center py-16">
            <h1 className="title font-semibold text-2xl tracking-tighter dark:text-neutral-200">
                This post isn&apos;t available in English yet.
            </h1>
            <Link href="/blog" className="text-sm text-neutral-600 dark:text-neutral-400 underline">
                Please check out other blog posts.
            </Link>
        </div>
    );
}
