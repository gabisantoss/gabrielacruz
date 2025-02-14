import parse from "html-react-parser";

import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function home() {
  const t = useTranslations("HomePage"); // Hook para tradução
  return (
    <section>
      <div>
        <div className='sm:h-[150px] sm:w-[150px] w-[300px] h-[300px] mt-6 sm:mt-0 relative m-auto sm:m-0 '>
          <Image
            className="rounded-full transition delay-150 duration-150 ease-in-out sm:hover:scale-110"
            src="/img/iconv5.jpg"
            alt="Gabriela Cruz"
            draggable={false}
            quality={100}
            width={300}
            height={300}
            unoptimized
            priority
          />
        </div>
        <div className="mt-10 sm:mt-5 text-center max-w-lg sm:text-left text-[2.1em] sm:text-[1.8em] md:text-[2.2em] 2xl:text-[2.8em] color-black dark:text-gray-200 text-lin cursor-default font-bold hero" id="hero-text">
          <p>{parse(t.raw("hero"))}</p>
        </div>
      </div>
    </section>
  )
}
