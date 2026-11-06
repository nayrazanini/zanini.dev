import type { Artigo } from "@/data/artigos";

// Traduções para inglês dos artigos (chave = slug do artigo em src/data/artigos.ts).
export type ArtigoTraduzido = Pick<Artigo, "title" | "subject" | "summary" | "paragraphs" | "footer">;

export const ARTIGOS_EN: Record<string, ArtigoTraduzido> = {
  "como-o-exercicio-fisico-transformou-minha-rotina-de-estudos": {
    title: "How did physical exercise transform my study routine?",
    subject: "Personal experience · LinkedIn",
    summary:
      "Discipline, focus and organization that came from consistency in training: how physical exercise became a central part of my study planning and productivity — through lived experience and science.",
    paragraphs: [
      "Discipline, focus and organization did not come only from books; they came from consistency in my workouts. Physical exercise changed my study routine and increased my professional performance. It is more a strategy than a lifestyle.",
      "On my other social networks, my connection with sports is a little clearer. It is no news to anyone that physical activity helps us in many aspects of life. But today I want to share my personal experience.",
      "In 2020, the company where I work adopted remote work for a period. It was a turbulent time, full of uncertainty. Back then, I discovered a knee problem caused by being overweight and by a lack of muscle strengthening. Since then, I decided to transform my life. And no, this is not “gym coach talk”, it is reality: I was in physical pain and facing emotional challenges at the worst possible moment for it: in the middle of the pandemic.",
      "With all of that, I decided I no longer wanted to live with pain of any kind. I bought some dumbbells and started exercising at home, and also began physical therapy. That is where I rediscovered myself. When the pandemic calmed down and restrictions were lifted, I went back to the gym and to playing soccer, which has been my passion since I was little.",
      "The purpose of this article is to show you how beneficial it has been to incorporate physical exercise into my routine, especially for my studies and professional development. It is not about becoming an athlete or a “fitness influencer”. It is about taking care of mind and body so I can grow with more consistency and balance.",
      "How did physical exercise transform me? Today, I am a person who: has more discipline and mental clarity; is much more focused and productive; is more organized, with a structured routine and realistic goals; understands that self-care is a tool for growth; and sleeps better and respects my own pace.",
      "Today, physical exercise is not something I “fit in when I can”; it is a central part of my routine. I do not adjust my workouts to my routine. It is the other tasks that organize themselves around my self-care time. This way of thinking gave me more consistency and balance to deal with everything I need to do day to day, from studies to professional life.",
      "It is not only about me. Science confirms that physical exercise is a powerful tool for the brain and cognitive performance. A study of more than 250,000 people, published in the British Journal of Sports Medicine, showed that exercises such as brisk walking, yoga and interactive games improve memory, focus and executive cognitive functions.",
      "University College London found that doing 30 minutes of physical activity and sleeping well can increase memory capacity by 2% to 5% the next day. In a study with thousands of teenagers, those who practiced regular physical activity, even outside school, showed better performance in math, greater attention and fewer signs of burnout. European research has also shown that exercising about 4 hours after studying helps consolidate information better in long-term memory (Instituto Einstein / FAPESP).",
      "Bringing movement into my daily life changed my relationship with studying, with work and with myself. Today, physical exercise is part of my productivity planning. I need to do it to feel well and to handle the things in my day. It is where I find focus, creativity and emotional regulation to handle my routine in technology and my personal projects.",
      "If you are also looking for more focus, organization, mental balance and better results in your studies, maybe the first step is not only a new course, but putting your body in motion.",
    ],
    footer: "Article originally published on LinkedIn by Náyra Zanini on June 27, 2025.",
  },
  "testes-software-decisao-estrategica": {
    title: "Software Testing as a Strategic Decision: Quality, Risk and Business Continuity",
    subject: "Software Testing · Class of January 28",
    summary:
      "From the traditional view of hunting for defects to conscious risk management: why quality is born from decisions throughout the lifecycle, and how ISO 22301 reinforces resilience as the central focus of testing.",
    paragraphs: [
      "The first class of the Software Testing course breaks with the traditional view that associates testing exclusively with identifying technical defects. From the start, the material proposes a change of mindset: testing is not an operational activity or a final stage of development, but a strategic decision directly related to business continuity.",
      "One of the main lessons of the class was understanding that software quality is not born in the testing phase, but in the choices made throughout the entire lifecycle of the system. Every decision carries risks that directly impact the business. In this way, the role of the testing professional stops being reactive, focused only on executing test cases, and becomes strategic, acting in the conscious management of risks.",
      "In this context, the course reinforces that traditional metrics, such as the number of bugs found or requirements coverage, are insufficient to measure real quality. A system can have few technical defects and still fail critically in production, whether through unavailability, slowness, integration failures or an inability to recover from incidents. Thus, the focus of testing should shift from “does it work or not” to the central question: what impact does this failure have on the business?",
      "The introduction of ISO 22301, the Business Continuity Management standard, deepens this view even further. The standard makes it clear that failures are inevitable and that the real challenge is ensuring that critical processes keep operating or are quickly recovered. Applied to software testing, this perspective reinforces the need to validate not only functionality, but also resilience, recovery, performance under stress and exception handling. To test, therefore, comes to mean ensuring that the business survives even when something goes off plan.",
      "The class's practical bootcamp consolidated this learning by moving the focus from technique to decision. Throughout the activities, it became clear that testing everything is impossible and that professional maturity lies in the ability to justify, technically and strategically, the choices made, including before executive levels. This approach requires technical mastery, but above all analytical ability, clear communication and an understanding of the organizational context.",
      "It follows, therefore, that the main lesson of the first class is the redefinition of the role of software testing: it does not exist to guarantee technical perfection, but to protect the business from unacceptable risks, consciously accepting the trade-offs involved. The course does not only train testers, but professionals capable of sustaining critical decisions, aligning technology, business and operational continuity.",
    ],
    footer:
      "Article written by Náyra Zanini, based on the learnings of the Software Testing course during the Postgraduate Program in Software Engineering (UNIP).",
  },
  "evolucao-qa-bootcamps-testes-software": {
    title: "From Execution to Decision: The Evolution of the QA Role in Software Testing Bootcamps",
    subject: "Software Testing · Class of March 18",
    summary:
      "A summary of Bootcamps 11 to 14: from defect logging to risk-based prioritization, through the agile sprint, all the way to Go/No-Go decisions in CI/CD pipelines.",
    paragraphs: [
      "Throughout Bootcamps 11, 12, 13 and 14, it became clear that the field of software testing goes far beyond technical execution and is directly linked to strategic decision-making within a project. What began as identifying and logging defects gradually evolved into a broader view, where quality, risk and business move together.",
      "In Bootcamp 11, the focus was on identifying and logging defects in a structured way, using tools such as Qase and Jira. At that point, it became clear that a defect is not just an error in the system, but a problem that directly impacts the user. I also realized that the way a defect is described directly influences how it gets resolved. A poorly documented defect can generate rework, communication failures and delays, showing that quality is also in the clarity of information.",
      "In Bootcamp 12, the analysis went deeper by introducing the concepts of severity and priority. It became possible to understand that not every defect should be handled immediately and that the decision to fix depends on context. The idea of consciously accepting risks brought a more realistic view of software development, where the goal is not to eliminate all problems, but to manage their impact. This reinforces that quality is not perfection, but a balance between risk and delivered value.",
      "In Bootcamp 13, the scenario came even closer to reality by simulating an agile sprint. The time limit forced the prioritization of tests and showed that trying to validate everything can be an inefficient strategy. In this context, tests came to be seen as a tool that supports decisions, and not only as technical validation. It also became evident how defects directly affect the progress of the sprint, influencing the backlog, planning and deliveries.",
      "Finally, Bootcamp 14 consolidated all of this learning by introducing the concept of the CI/CD pipeline and release decisions. At that point, the focus was no longer only on identifying and prioritizing problems, but on deciding whether the system is ready for production. Analyzing failures at different levels, using quality gates and assessing risks showed that the “Go or No-Go” decision is not only technical, but also involves business impact and confidence in the system. The final reflection reinforced that a reliable pipeline is one that represents reality, not just one that always passes.",
      "In this way, a clear evolution can be seen: from defect logging to prioritization, from prioritization to execution in a real context, and from execution to evidence-based decision-making. This process shows that the role of QA is not limited to validation, but extends to quality assurance in a broad sense, acting as a link between technology, process and business.",
      "At the end of these bootcamps, the main change in perception was understanding that testing is not just finding errors, but providing reliable information so that decisions can be made safely. This positions the testing professional not just as an executor, but as an essential part of the software development strategy.",
    ],
    footer:
      "Article written by Náyra Zanini, based on the learnings of Bootcamps 11, 12, 13 and 14 of the Software Testing course during the Postgraduate Program in Software Engineering (UNIP).",
  },
  "evolucao-qualidade-engenharia-software": {
    title: "Evolution, Quality and Challenges of Software Engineering in the Contemporary Era",
    subject: "Software Engineering Paradigms · Class 01",
    summary:
      "From the evolution of the 1960s to DevOps, through the Spiral Model, Quality at the Source, the Chaos Report and the Shape Up methodology — a critical summary of the current state of Software Engineering.",
    paragraphs: [
      "During the class, several prompts were used so that Artificial Intelligence could support classroom learning, alongside the explanation by Professor Marcelo Nogueira.",
      "We covered the evolution of technology from the 1960s to the present day, reinforcing the importance of Research and Development (R&D), the increase in strategic investments and the adaptation of engineering processes to the modern market with methodologies such as DevOps.",
      "Boehm's Spiral Model was discussed, structured in phases such as defining objectives, risk analysis, development, validation and continuous planning, ideal for complex projects.",
      "Reading the book “Imitation to Innovation: The Dynamics of Korea’s Technological Learning” taught me about the importance of strategic imitation and of investing in knowledge to overcome technological barriers.",
      "The concept of “Quality at the Source” and its relationship with agile methodologies was also discussed, highlighting defect prevention from the start of the project, collective responsibility and continuous improvement, connecting with the concept of “Kaizen in Engineering”.",
      "The Chaos Report made us reflect on the real challenges of software development, with low success rates and high rates of project failures and cancellations.",
      "The definition of Software Engineering by Prof. Dr. Marcelo Nogueira was compared with the AI's view, with different wording but the same essence: methods, procedures and tools to deliver quality software.",
      "We explored the AIDA technique (Attention, Interest, Desire and Action) to explain technical concepts to laypeople. I tested it with my family during the break and realized that, although challenging, it is possible to communicate well with patience and clarity.",
      "We analyzed the Project Ara case and the concepts of coupling and cohesion, as well as the notion of Ad-hoc: solutions created without standardization, specific to a given purpose.",
      "We also mentioned the text “No Silver Bullet”, which reinforces that there is no magic solution for all software problems. Each challenge requires a specific approach, experience and adaptation.",
      "The “Best Jobs in America” report showed that most promising careers are tied to technology, reinforcing the importance of continuous education to keep up with this demand.",
      "The professor shared his experience with PBQP-SW, a Brazilian program that seeks to increase national competitiveness in software development, still little used in the country.",
      "Finally, the agile methodology Shape Up was presented, an alternative to Scrum, based on six-week cycles to deliver projects with more clarity and autonomy.",
      "This class provided a critical and current view of Software Engineering, demanding constant study, adaptation to change and a connection between theory and practice.",
    ],
    footer:
      "Article written by Náyra Zanini, based on the learnings of the Software Engineering Paradigms course, taught by Prof. Dr. Marcelo Nogueira during the Postgraduate Program in Software Engineering (UNIP). The study during class was done with the support of Artificial Intelligence, through prompts prepared by the professor, and this article is the result.",
  },
  "engenharia-de-requisitos": {
    title: "Requirements Engineering: The Human and Strategic Foundation for Technology Solutions",
    subject: "Software Engineering Paradigms · Class 02",
    summary:
      "Why getting it right the first time matters: elicitation, analysis, communication, PoC, the spiral model and human factors in requirements engineering.",
    paragraphs: [
      "The Requirements Engineering class aimed to present something extremely fundamental to software development. It was a class to start learning how to establish a foundation on which the entire project is built, with the goal of identifying, analyzing, specifying and managing the needs of users, customers and other stakeholders.",
      "With Requirements Engineering, we can see how important it is to do it well the first time, to avoid rework, unnecessary costs in the future and to align expectations. In this area we can highlight the interdependence of human, technical and organizational factors, since they need to be connected for the project to work.",
      "Requirements Engineering presents itself as the link between the real world and the technical solution, and the definition proposed by Professor Marcelo Nogueira makes this clear: to elicit, analyze and negotiate, specify, model, verify, validate and manage system functions and constraints, fully covering the lifecycle of requirements, encompassing the functional and non-functional aspects, which are the system’s functionalities and its constraints.",
      "Having well-defined requirements is reinforced by the ideas of great theorists such as Frederick Brooks and Philip Crosby: the former is an author who brings to light the complexity of software projects and the need for careful planning, while Crosby defends the principle of doing it right the first time, which connects with Requirements Engineering and the culture of quality and error prevention.",
      "There was also a moment in class mentioning the Butterfly Effect, which is extremely connected to the topic, since any change, good or bad, in the project can greatly impact the entire system and its development.",
      "In a topic I had already seen in other courses, there is the PoC (Proof of Concept), a strategic tool to validate the technical feasibility of a solution before fully developing it, serving as a practical experiment.",
      "Eliciting requirements is what starts the process, since it is where we collect information through interviews, questionnaires, observation, prototyping, etc. to convert the wishes and expectations of stakeholders into clear and achievable requirements. It demands technical skills and empathy, such as active listening and effective communication.",
      "Communication is one of the most frequently pointed-out problems in Requirements Engineering, because understanding what is wanted, removing ambiguity and handling constant changes becomes extremely difficult when the customer does not know exactly what they want and cannot express the information.",
      "The spiral model is an approach that directly influences how requirements are handled, since it proposes iterative cycles of planning, building, evaluating and refining information. It is extremely well suited to requirements that evolve over time.",
      "We noticed there is a growing appreciation of human factors in software development, using science and cognitive ergonomics. We can see how users behave when using a system, where they get stuck and, in this way, make it more accessible and efficient.",
      "In conclusion, the field of Requirements Engineering is broad and multidisciplinary, integrating concepts from technology, psychology, management and communication. It is important to understand the human side in order to develop a system; this way we can carry out efficient and consistent projects, with strategic solutions that facilitate the process. When the fundamentals of this discipline are mastered, we can work with excellence in developing technology solutions that involve people and results.",
    ],
    footer:
      "Article written by Náyra Zanini, based on the learnings of the Software Engineering Paradigms course, taught by Prof. Dr. Marcelo Nogueira during the Postgraduate Program in Software Engineering (UNIP). The study during class was done with the support of Artificial Intelligence, through prompts prepared by the professor, and this article is the result.",
  },
  "qualidade-de-software": {
    title: "Software Quality: Culture, Metrics and Responsibility in Development",
    subject: "Software Engineering Paradigms · Class 03",
    summary:
      "From Crosby, Juran and Deming to ISO 25010, CMMI and GQM: quality as culture, prevention and shared responsibility throughout the entire development cycle.",
    paragraphs: [
      "The growing dependence on computer systems makes it essential to guarantee their quality. Failures such as those of the Mars Climate Orbiter probe and the Boeing 737 MAX show the impact that software defects can have, reinforcing the importance of processes that ensure quality from the early stages of development.",
      "Quality is not only meeting requirements, but anticipating needs and avoiding failures. ISO 8402 defines quality as “the totality of characteristics of an entity that bear on its ability to satisfy stated and implied needs”. The contributions of Crosby, Juran and Deming reinforce that quality must be planned, built and monitored systematically.",
      "Quality results from excellence in internal processes, such as modularity and maintainability, and shows up externally in the efficiency and reliability perceived by the user. The development cycle — requirements, design, implementation, validation and evolution — must be conducted with rigor and integration. The GQM method helps define metrics aligned with strategic goals, such as reducing rework, measured by MTTR, which assesses efficiency in fixing failures.",
      "Traditional Quality Assurance (QA) focuses on final tests and corrective actions, while Quality Culture involves prevention and the participation of everyone involved in the development cycle. Models such as ISO 25010 and CMMI guide this transition, promoting organizational maturity and continuous improvement.",
      "Clearly defining who does what is essential to guarantee quality. Responsibility means carrying out tasks; accountability requires answering for the results. Tools such as Jira and practices such as retrospectives promote transparency and continuous evolution.",
      "Software quality is built throughout the entire process, through a committed organizational culture, structured processes and the proper use of metrics. A focus on prevention, continuous improvement and clearly defined responsibilities is indispensable to ensure reliable products aligned with users’ needs.",
    ],
    footer:
      "Article written by Náyra Zanini, based on the learnings of the Software Engineering Paradigms course, taught by Prof. Dr. Marcelo Nogueira during the Postgraduate Program in Software Engineering (UNIP). The study during class was done with the support of Artificial Intelligence, through prompts prepared by the professor, and this article is the result.",
  },
};

/** Data de publicação por extenso em inglês, ex.: "June 27, 2025" (a partir da data ISO). */
export const dataEn = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
};
