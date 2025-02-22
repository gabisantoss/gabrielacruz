'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { MouseEvent, ReactNode, useEffect, useState, useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';

type Props = {
    defaultValue: string;
};

export default function LocaleSwitcherSelect({
    defaultValue,
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    const [activeLocale, setActiveLocale] = useState<Locale>(defaultValue as Locale);

    useEffect(() => {
        setActiveLocale(defaultValue as Locale);
    }, [defaultValue]);

    function onButtonClick(event: MouseEvent<HTMLButtonElement>) {
        const nextLocale = event.currentTarget.value as Locale;

        if (nextLocale !== activeLocale) {
            setActiveLocale(nextLocale);
            startTransition(async () => {
                router.replace(
                    // @ts-expect-error -- TypeScript will validate that only known params
                    // are used in combination with a given pathname. Since the two will
                    // always match for the current route, we can skip runtime checks.
                    { pathname, params },
                    { locale: nextLocale }
                );
            });
        }
    }

    return (
        <div className="ml-2 sm:ml-0 flex flex-row items-center right-1 dark:bg-gray-300 bg-black rounded-md h-fit cursor-pointer">
            <button
                disabled={isPending}
                onClick={onButtonClick}
                value='pt'
                className={clsx(
                    "border-black dark:border-gray-300 border-2 text-nowrap cursor-pointer font-semibold rounded-bl-md rounded-tl-md appearance-none py-1 px-2 m-0 flex flex-row items-center text-xs transition-all duration-200 ease-in-out",
                    activeLocale === "pt"
                        ? "dark:bg-gray-300 bg-black dark:text-black text-gray-200 shadow-inner scale-95 translate-y-[1px]"
                        : "dark:bg-black dark:text-gray-200  bg-white text-black hover:opacity-80"
                )}
            >
                <span>PT-BR</span>
                <span className="ml-1"> <img src="https://img.icons8.com/fluency/48/brazil-circular.png" className="w-5 h-5" /></span>
            </button>

            <button disabled={isPending} onClick={onButtonClick} value='en' className={clsx(
                "border-black dark:border-gray-300 border-2 cursor-pointer font-semibold rounded-br-md rounded-tr-md appearance-none py-1 px-2 m-0 flex flex-row items-center text-xs transition-all duration-200 ease-in-out",
                activeLocale === "en"
                    ? "dark:bg-gray-300 bg-black dark:text-black text-gray-200 shadow-inner scale-95 translate-y-[1px]"
                    : "dark:bg-black dark:text-gray-200  bg-white text-black hover:opacity-90"
            )}

            >
                <span>EN</span>
                <span className="ml-1"> <img src="https://img.icons8.com/fluency/48/usa-circular.png" className="w-5 h-5" /></span>
            </button>
        </div>
    );
}