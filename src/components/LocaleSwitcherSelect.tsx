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
        // Ensure state reflects the correct locale on mount
        setActiveLocale(defaultValue as Locale);
    }, [defaultValue]);

    function onButtonClick(event: MouseEvent<HTMLButtonElement>) {
        const nextLocale = event.currentTarget.value as Locale;

        if (nextLocale !== activeLocale) {
            setActiveLocale(nextLocale);
            startTransition(() => {
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
        <div className="flex flex-row items-center mt-1 right-1 dark:bg-gray-300 bg-gray-800 rounded-md h-fit cursor-pointer">
            <button
                disabled={isPending}
                onClick={onButtonClick}
                value='pt'
                className={clsx(
                    "border-gray-800 dark:border-gray-300 border-2 cursor-pointer font-semibold rounded-bl-md rounded-tl-md appearance-none py-1 px-2 m-0 flex flex-row items-center text-xs transition-all duration-200 ease-in-out",
                    activeLocale === "pt"
                        ? "dark:bg-gray-300 bg-gray-800 dark:text-gray-800 text-gray-200 shadow-inner scale-95 translate-y-[1px]"  // Pressed style
                        : "dark:bg-black dark:text-gray-200  bg-white text-gray-800 hover:opacity-80"
                )}
            >
                <span>PT-BR</span>
                <span className="ml-1"> <img src="https://img.icons8.com/fluency/48/brazil-circular.png" className="w-5 h-5" /></span>
            </button>

            <button disabled={isPending} onClick={onButtonClick} value='en' className={clsx(
                "border-gray-800 dark:border-gray-300 border-2 cursor-pointer font-semibold rounded-br-md rounded-tr-md appearance-none py-1 px-2 m-0 flex flex-row items-center text-xs transition-all duration-200 ease-in-out",
                activeLocale === "en"
                    ? "dark:bg-gray-300 bg-gray-800 dark:text-gray-800 text-gray-200 shadow-inner scale-95 translate-y-[1px]"  // Pressed style
                    : "dark:bg-black dark:text-gray-200  bg-white text-gray-800 hover:opacity-90"
            )}

            >
                <span>EN</span>
                <span className="ml-1"> <img src="https://img.icons8.com/fluency/48/usa-circular.png" className="w-5 h-5" /></span>
            </button>
        </div>
    );
}