import BaseLayout from '@/components/BaseLayout';
import { routing } from '@/i18n/routing';

export default function GlobalNotFound() {
    return (
        <BaseLayout locale={routing.defaultLocale}>
            <section>
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                    404 - Page Not Found
                </h1>
                <p className="mb-4">A página que você está procurando não existe!</p>
            </section>
        </BaseLayout>
    );
}