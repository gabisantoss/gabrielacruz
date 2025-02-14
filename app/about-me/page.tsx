import CompanyCard from "app/components/CompanyCard"

const skills = {
    'pt': {
        'Linguagens': [
            'Python',
            'JavaScript',
            'TypeScript',
            'C#',
        ],
        'Front-end': [
            'Qt',
            'React.js',
            'Vue.js',
            'Next.js',
        ],
        'Back-End': [
            'Django',
            'Express',
            'Nest.js',
            'Node.js',
            '.NET'
        ],
        'Bancos de Dados': [
            'Firestore',
            'MySQL',
            'PostgreSQL',
            'MongoDB'
        ],
        'Infraestrutura': [
            'AWS',
            'Google Cloud',
            'Docker',
            'Jenkins',
            'Github Actions',
            'Gitlab CI/CD'
        ]
    },
    'en': {
        'Languages': [
            'Python',
            'JavaScript',
            'TypeScript',
            'C#',
        ],
        'Front-End Frameworks': [
            'Qt / PySide',
            'React',
            'Next.js',
            'Vue.js',
        ],
        'Back-End Frameworks': [
            'Django',
            'FastAPI',
            'Express',
            'Nest.js',
            '.NET'
        ],
        'Databases': [
            'MySQL',
            'PostgreSQL',
            'MongoDB',
            'Firestore'
        ],
        'Infrastructure': [
            'Cloud Computing',
            'Docker',
        ]
    }
}



const about = {
    'pt': (
        "Formada no Ensino Técnico em Informática com ênfase em Programação pelo <span class='continuous-text-highlight'>CEFET/RJ</span> aos 18 anos, " +
        "descobri cedo minha paixão pela tecnologia. Durante esse período, " +
        "desenvolvi uma base sólida em algoritmos, estrutura de dados e lógica de programação, " +
        "realizando meus primeiros projetos. Atualmente, estudo <span class='continuous-text-highlight'>Ciência da Computação</span> " +
        "na <span class='continuous-text-highlight'>Universidade Estadual do Rio de Janeiro</span>, " +
        "onde busco levar esse conhecimento para outro nível. <br><br>" +
        "Além disso, trabalho na <a href='https://somos.globo.com/'>maior emissora da América Latina</a> como <span class='continuous-text-highlight'>Desenvolvedora de Software Pleno</span>, " +
        "desenvolvendo uma <span class='continuous-text-highlight'>Pipeline</span> integrada aos softwares de criação de conteúdo " +
        "utilizados pelos designers de <span class='continuous-text-highlight'>Efeitos Visuais</span>. " +
        "O projeto envolve ferramentas em <span class='continuous-text-highlight'>Python</span> e <span class='continuous-text-highlight'>Qt</span>, " +
        "e tem como objetivo principal otimizar e facilitar o dia a dia dessa equipe."
    ),
    'en': (
        "Graduated in Technical Informatics with a focus on Programming at <span class='continuous-text-highlight'>CEFET/RJ</span>, " +
        "I discovered my passion for technology early on. During this period, " +
        "I built a strong foundation in algorithms, data structures, and programming logic, " +
        "working on my first projects. Today, I study <span class='continuous-text-highlight'>Computer Science</span> " +
        "at the <span class='continuous-text-highlight'>University of Rio de Janeiro State</span>, " +
        "where I continue to strengthen this foundation while learning new things every day. " +
        "Currently, I work at the largest broadcaster in Latin America as a " +
        "<span class='continuous-text-highlight'>Mid-Level Software Developer</span>, " +
        "developing an integrated <span class='continuous-text-highlight'>Pipeline</span> for the content creation software " +
        "used by <span class='continuous-text-highlight'>Visual Effects</span> designers. " +
        "The project involves tools in <span class='continuous-text-highlight'>Python</span> and <span class='continuous-text-highlight'>Qt</span>, " +
        "aiming to optimize and streamline their daily workflow."
    )
}

export const metadata = {
    title: 'Sobre',
    description: about['pt'].replace(/<[^>]*>?/gm, ''),
}

export default function Page() {
    return (
        <div>
            <section>
                <h1 className="font-bold text-xl mb-5">
                    Sobre mim
                </h1>
                <p
                    dangerouslySetInnerHTML={{ __html: about['pt'] }}
                    className="text-sm text-gray-800 text-justify mb-10"
                />
                <h2 className="font-bold text-sm/[2px] mt-5 mb-5 border-b border-gray-700"><span className="bg-white py-3 pr-4 ">Conhecimentos</span></h2>
                <div className="font-sans flex flex-col gap-4">
                    {Object.entries(skills['pt']).map(([category, skills]) => (
                        <div key={category}>
                            <h3 className="text-xs mb-1">{category}</h3>
                            <div className="flex flex-row flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span key={skill} className="text-xs bg-black font-semibold pr-2 pl-2 py-1 text-gray-200 transition delay-100 duration-150 ease-in-out hover:text-[#fffcca] rounded-sm cursor-default">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section >
        </div>
    )
}
