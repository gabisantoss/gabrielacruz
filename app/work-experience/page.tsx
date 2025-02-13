import CompanyCard from "app/components/CompanyCard"

export const metadata = {
    title: 'Sobre',
    description: 'Read my blog.',
}

const companies = [
    {
        "name": "Globo",
        "image": "/img/globo.jpg",
        "url": "https://somos.globo.com/",
        "position": "Desenvolvedora de Software Pleno",
        "startDate": "Fev 2024",
        "endDate": "Atualmente",
        "description": (
            "Trabalho no desenvolvimento de uma aplicações de Pipeline " +
            "para controle de processos em VFX com <span class='continuous-text-highlight'>Python</span>, " +
            "criando soluções ágeis para colaborar com desempenho, organização e produtividade " +
            "de Designers. Colaboro arquiteturalmente com o projeto de ponta a ponta, " +
            "desde a orquestração de serviços com <span class='continuous-text-highlight'>Docker</span> e na implementação " +
            "de <span class='continuous-text-highlight'>computação em nuvem</span> na Google Cloud Platform, além de atuar com bancos de dados, " +
            "tanto NoSQL (Firestore) quanto relacionais, como MySQL. " +
            "Também participo ativamente de decisões estratégicas sobre " +
            "<span class='continuous-text-highlight'>padrões de projeto</span>, atuo no entendimento das regras de negócio do software e em sua documentação."
        ),
        "descriptionEng": (
            "I worked on developing solutions with <span class='continuous-text-highlight'>JavaScript</span>, " +
            "TypeScript, and <span class='continuous-text-highlight'>Node.js</span>, enhancing and maintaining " +
            "systems related to the platform's LMS. I implemented new features " +
            "using RESTful and GraphQL APIs, ensuring efficiency and scalability. " +
            "I was also responsible for deployments in local development environments " +
            "using <span class='continuous-text-highlight'>Docker</span> and for monitoring application health " +
            "with Grafana and Sentry. Additionally, I contributed to automating and managing " +
            "CI/CD pipelines using tools like Jenkins and GitHub Actions, ensuring " +
            "continuous integration and efficient delivery."
        )
    },
    {
        name: "Descomplica",
        image: "/img/descomplica.jpg",
        url: "https://descomplica.com.br/",
        position: "Desenvolvedora de Software Jr.",
        startDate: "Ago 2022",
        endDate: "Fev 2024",
        description: (
            "Trabalhei no desenvolvimento de soluções com <span class='continuous-text-highlight'>JavaScript</span>, " +
            "TypeScript e <span class='continuous-text-highlight'>Node.js</span>, criando e aprimorando sistemas " +
            "associados ao LMS da plataforma. Atuei na implementação de novas features " +
            "com <span class='continuous-text-highlight'>APIs RESTful</span> e <span class='continuous-text-highlight'>GraphQL</span>, garantindo eficiência e escalabilidade. " +
            "Também fui responsável por deploys em ambientes locais utilizando <span class='continuous-text-highlight'>Docker</span> " +
            "e pelo monitoramento da saúde das aplicações com Grafana e Sentry. " +
            "Além disso, contribuí para a automação e controle de pipelines de CI/CD " +
            "com ferramentas como Jenkins e GitHub Actions, garantindo integração contínua " +
            "e entregas ágeis."
        ),
        "descriptionEng": (
            "I worked on the development of solutions with JavaScript, " +
            "TypeScript, and Node.js, creating and improving systems associated " +
            "with the platform's LMS. I worked on the implementation of new features " +
            "with RESTful APIs and GraphQL, ensuring efficiency and scalability. " +
            "I was also responsible for deploys in local environments using Docker " +
            "and for monitoring the health of applications with Grafana and Sentry. " +
            "In addition, I contributed to the automation and control of CI/CD pipelines " +
            "with tools like Jenkins and GitHub Actions, ensuring continuous integration " +
            "and agile deliveries."
        ),
    },
    {
        name: "Concilie Online",
        image: "/img/concilie.jpg",
        url: "https://www.concilie.com.br/",
        position: "Desenvolvedora de Software Jr.",
        startDate: "Ago 2022",
        endDate: "Fev 2024",
        description: (
            "Trabalhei no desenvolvimento full stack com <span class='continuous-text-highlight'>Python</span>, " +
            "<span class='continuous-text-highlight'>Django</span>, <span class='continuous-text-highlight'>Node.js</span> e <span class='continuous-text-highlight'>React</span>, criando e aprimorando " +
            "funcionalidades no lado cliente e servidor. Atuei na implementação de APIs RESTful " +
            "e integração com tecnologias como WebSocket para comunicação em tempo real. " +
            "Desenvolvi interfaces interativas e responsivas com React, garantindo uma melhor " +
            "experiência do usuário. Também participei de reuniões estratégicas para definição " +
            "de novas soluções com base no levantamento de requisitos. " +
            "Implementei serviços serverless com <span class='continuous-text-highlight'>AWS Lambda</span> " +
            "e trabalhei com metodologias ágeis como Scrum e Kanban para otimizar " +
            "a gestão de projetos e entregas."
        ),
        descriptionEng: (
            "I worked on full-stack development using <span class='continuous-text-highlight'>Python</span>, " +
            "<span class='continuous-text-highlight'>Django</span>, <span class='continuous-text-highlight'>Node.js</span>, and <span class='continuous-text-highlight'>React</span>, developing and " +
            "enhancing features on both the client and server sides. I implemented RESTful APIs " +
            "and integrated WebSocket technology for real-time communication. " +
            "I built interactive and responsive interfaces with React, improving the user experience. " +
            "I also participated in strategic meetings to design new project solutions " +
            "based on requirements gathering. Additionally, I implemented serverless " +
            "services using <span class='continuous-text-highlight'>AWS Lambda</span> and worked with agile methodologies " +
            "like Scrum and Kanban to optimize project management and delivery."
        )
    },
]

export default function Page() {
    return (
        <div>
            <section>
                <h1 className="font-bold text-xl mb-5">
                    Experiência de trabalho
                </h1>
                <div className="font-sans flex flex-col gap-4">
                    {companies.map((company) => (
                        <CompanyCard key={company.name} company={company} />
                    ))}
                </div>
            </section >
        </div>
    )
}
