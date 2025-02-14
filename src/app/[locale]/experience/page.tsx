import { useTranslations } from "next-intl";

import CompanyCard from "@/components/CompanyCard"

export const metadata = {
    title: 'Experiência',
    description: 'Read my blog.',
}
export default function experience() {
    const t = useTranslations("Experience");

    const companies = t.raw("companies");
    return (
        <div>
            <section>
                <h1 className="font-bold text-black dark:text-gray-200 text-xl mb-5">
                    {t("title")}
                </h1>
                <div className="font-sans flex flex-col gap-4">
                    {companies.map((company) => (
                        <CompanyCard company={company} />
                    ))}
                </div>
            </section >
        </div>
    )
}
