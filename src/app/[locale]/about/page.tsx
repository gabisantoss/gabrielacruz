import { useTranslations } from "next-intl";
import parse from "html-react-parser";

export const metadata = {
    title: 'Sobre',
    // description: about['pt'].replace(/<[^>]*>?/gm, ''),
}

export default function Page() {
    const t = useTranslations('About');
    const skills = t.raw('skills');

    return (
        <div>
            <section className="text-gray-800 dark:text-gray-200 ">
                <h1 className="font-bold text-xl mb-5">
                    {t("title")}
                </h1>
                <p
                    className="text-sm text-justify mb-10"
                >
                    {parse(t.raw("text"))}
                </p>
                <h2 className="font-bold text-sm/[2px] mt-5 mb-5 border-b border-gray-700 dark:border-gray-500"><span className="bg-white dark:bg-black py-3 pr-4 ">{t("skillsTitle")}</span></h2>
                <div className="font-sans flex flex-col gap-4">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category}>
                            <h3 className="text-xs mb-1">{category}</h3>
                            <div className="flex flex-row flex-wrap gap-2">
                                {skillList.map((skill) => (
                                    <span key={skill} className="text-xs bg-black font-semibold pr-2 pl-2 py-1 text-gray-200 transition delay-100 duration-150 ease-in-out hover:text-blue-400 rounded-sm cursor-default dark:bg-gray-200 dark:text-black">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section >
        </div>
    )
}
