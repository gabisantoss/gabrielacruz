import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="mb-4">
        <Image
          className="rounded-full mb-5 cursor-pointer transition delay-150 duration-150 ease-in-out hover:scale-110"
          src="/img/iconv5.jpg"
          width={120}
          height={120}
          alt="Gabriela Cruz"
          draggable={false}
          quality={100}
          unoptimized
          priority
        />
        <div className="text-[3em] color-black text-lin cursor-default max-[900] font-bold text-justify w-[450px] hero" id="hero-text">
          <p>oi! eu sou a
            <span> </span><span className="highlight c1">Gabi</span>, uma
            <span> </span><span className="highlight c2">desenvolvedora de software</span><span> do </span>
            <span className="highlight c3">Rio de Janeiro</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
