import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div>
        <div className='sm:h-[150px] sm:w-[150px] w-[300px] h-[300px] mt-6 sm:mt-0 relative m-auto sm:m-0'>
          <Image
            className="rounded-full transition delay-150 duration-150 ease-in-out sm:hover:scale-110"
            src="/img/iconv5.jpg"
            alt="Gabriela Cruz"
            draggable={false}
            quality={100}
            objectFit="cover"
            layout='fill'
            unoptimized
            priority
          />
        </div>
        <div className="mt-10 sm:mt-5 text-center sm:text-left text-[2.1em] sm:text-[2em] md:text-[2.2em] 2xl:text-[2.8em] color-black text-lin cursor-default font-bold hero" id="hero-text">
          <p>oi! eu sou a
            <span> </span><span className="sm:hover:text-black sm:hover:bg-[#fffcca]">Gabi</span>, uma
            <span> </span><span className="highlight-desktop bg-[#fffcca] sm:bg-white sm:hover:bg-[#fffcca] sm:hover:text-black">desenvolvedora de software</span><span> do </span>
            <span className="sm:hover:bg-[#fffcca] sm:hover:text-black">Rio de Janeiro</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
