import type { ArtigoTraduzido } from "@/data/artigos.en";

const FOOTER_EN =
  "Article written by Náyra Zanini, based on the learnings of the Software Testing course during the Postgraduate Program in Software Engineering (UNIP).";

export const ARTIGOS_APRENDIZADOS_EN: Record<string, ArtigoTraduzido> = {
  "testes-reduzir-incertezas-decisoes-estrategicas": {
    title: "Tests exist to reduce uncertainty",
    subject: "Software Testing · Class of Feb 4",
    summary:
      "Software is complex and dynamic: we will never have complete knowledge before production. Testing is about generating quality evidence to decide consciously.",
    paragraphs: [
      "The Software Testing classes have been extremely deep in the way they changed how I see testing. At the beginning of the postgraduate program I had already understood that testing was not only about finding errors, but about supporting strategic decisions. In this topic, however, it became clear that tests exist to reduce uncertainty. And that is not a failure of the process, but something natural in software development.",
      "Software is complex, dynamic and depends on many external factors, such as the runtime environment, user behavior and organizational decisions. Seen this way, we understand that it will never be possible to have complete knowledge of a system before putting it into production. Acknowledging uncertainty is the first step to acting responsibly.",
      "Tests take on a more strategic role: they should not guarantee perfection or completely eliminate risk, but turn part of the unknown into something more visible and understandable. When we test, we look for evidence about the real behavior of the system, which helps reduce the level of unknowns and allows decisions to be made more consciously.",
      "If tests are not well directed, they may only consume time and resources without producing relevant information. This makes me reflect that testing requires critical thinking and clear intent: which uncertainty am I trying to reduce, and what information can this test bring me?",
      "The decision to send a system to production does not depend on it being “defect-free”, but on understanding the risks that exist and whether they are acceptable in that context.",
      "Testing is generating quality evidence while accepting uncertainties that will always exist. We should choose to act based on information, not just on assumptions.",
    ],
    footer: FOOTER_EN,
  },
  "testar-e-verificar-ou-aprender": {
    title: "Is testing about verifying or learning?",
    subject: "Software Testing · Class of Feb 11",
    summary:
      "From verifying requirements to testing as a learning tool: uncertainty, risk, decision, and the bias of writing tests that only confirm expectations.",
    paragraphs: [
      "In the third class of the Software Testing course, I realized the content had stopped being merely technical and became conceptual. The central question — “is testing about verifying or learning?” — seems simple, but carries a deep change of mindset.",
      "For a long time, testing was treated as a verification activity. The logic is objective: there is a requirement, there is an expected behavior, and the test serves to confirm that the system conforms to that specification. In this classic view, the tester's role is to compare the obtained result with the expected one. If they match, the test passes.",
      "The problem is that this approach rests on a dangerous assumption: that requirements are complete, consistent and correct. In practice, they rarely are. Requirements reflect a human understanding that may contain gaps, ambiguities and unstated assumptions. When a test is run only to verify conformity, we may just be confirming a limited understanding of the problem.",
      "Tests do not need to be seen only as verification; they can — and should — be seen as learning instruments. From this perspective, testing resembles an experiment: there is a hypothesis about how the system should behave, I run the test, I observe and I produce evidence. That evidence can confirm or refute what I believed I knew.",
      "The difference between confirming that something works and discovering how it really behaves is subtle, but strategic. Confirming reinforces expectations. Discovering expands understanding. And in complex systems, what is not discovered tends to show up at the worst possible moment.",
      "This discussion connects directly to the theme of uncertainty, explored in depth in the bootcamp. The class makes it clear that uncertainty is not a failure of the process, but a structural condition of Software Engineering. Software operates in dynamic environments, with multiple technical, human and organizational variables, and its behavior cannot be completely predicted.",
      "Uncertainty appears in different dimensions: technical uncertainty, related to internal workings, integrations and performance; usage uncertainty, associated with how real users interact with the system; and organizational uncertainty, tied to strategic decisions, deadlines and priorities. Noticing these layers was essential to understand that testing does not mean eliminating uncertainty, but reducing it — and that reduction is always partial.",
      "Another striking point was the relationship between uncertainty, risk and decision. Uncertainty is the unknown. Risk is the assessment of the possible consequences of that unknown. Decision is the choice that must be made anyway. Tests act as the mechanism that turns part of the unknown uncertainty into known risk. They do not create absolute certainty, but produce enough evidence for more rational decisions.",
      "The class also brought an important reflection on human bias. There is a natural tendency to create tests that confirm expectations. This can create a false sense of security: the system “passes” the tests, but the tests did not explore critical or unlikely scenarios. Maturity in testing is not about quantity, but about the quality of the hypotheses formulated.",
      "By the end of the class, my perception was clearer: tests are not a pursuit of perfection, they are a mechanism for producing evidence. It is not about proving the system is flawless — because it never will be — but about understanding its behavior well enough to consciously accept the residual risk.",
      "This learning shifts the question from “is the system completely correct?” to “do we have enough information to decide responsibly?”. And this change of focus makes testing one of the most important pillars of contemporary Software Engineering.",
    ],
    footer: FOOTER_EN,
  },
  "niveis-de-teste-e-estrategia-orientada-a-risco": {
    title: "Test levels as layers of confidence",
    subject: "Software Testing · Class of Feb 25",
    summary:
      "Unit, integration, system and acceptance as complementary layers of confidence, and the risk-based testing strategy: probability and impact.",
    paragraphs: [
      "In this class it became clear that software testing is not just a final stage of development, but a continuous process of building confidence in the system. Tests work as a structured way to reduce uncertainty throughout the development cycle, allowing the quality of the software to be gradually assessed before its release.",
      "One of the main concepts covered was test levels as layers of confidence. Each level has a specific goal and reduces a different type of risk within the system. Unit testing verifies isolated code components, reducing local technical risks such as logic errors or incorrect calculations. Integration testing evaluates the communication between modules and systems, protecting against structural failures such as data incompatibility or integration problems. System testing validates the overall behavior of the software, checking whether complete flows work correctly. Finally, acceptance testing verifies whether the system meets business needs and truly delivers value to the end user.",
      "Another important point discussed was that these layers do not replace one another. Each level complements the previous one, building progressive confidence in how the system works. When one of these levels is neglected, simple defects may only be found in later stages of development, increasing the cost of fixing them and making it harder to identify the root cause.",
      "The class also covered the concept of a risk-based testing strategy, which changes how testing effort should be distributed. Instead of testing every feature with the same intensity, it is necessary to analyze which parts of the system have the highest probability of failure and the greatest impact on the business. This way, testing effort can be directed to the most critical areas, while lower-risk features can receive a leaner approach.",
      "In this context, risk is understood as the combination of probability of occurrence and impact of the consequence, which allows tests to be prioritized better and available resources to be used more efficiently. This approach is especially important when time and resources are limited, requiring strategic decisions about where to concentrate validation effort.",
      "Finally, it became clear that the goal of testing is not to completely eliminate risk, but to make it visible and understandable, allowing the team to make conscious decisions about releasing the system. Testing thus stops being just a technical activity and becomes a strategic risk management mechanism, helping ensure quality, reduce uncertainty and preserve business value.",
    ],
    footer: FOOTER_EN,
  },
  "estruturando-regras-de-negocio-em-testes": {
    title: "Structuring business rules in tests",
    subject: "Software Testing · Class of Mar 11",
    summary:
      "Scenario vs. test case; objective, preconditions, data, steps and a verifiable expected result: testing starts long before final validation.",
    paragraphs: [
      "While working through Bootcamps 09 and 10, I was able to better understand how to structure business rules in tests. At first, I saw testing only as a validation step after development, mainly because that is the reality in most companies. However, the class made it clear that testing starts much earlier.",
      "In a login scenario, for example, it is not enough to test a successful authentication. It is necessary to explore behaviors that are not so likely at first. This contributes to a more analytical view, since it is not only about checking whether something works, but about understanding “how it can fail”.",
      "Structuring a test around objective, preconditions, test data, steps and expected result gives much more clarity about what is actually being validated. In addition, the expected result must be verifiable, describing exactly the behavior expected from the system.",
      "I also understood the difference between a test scenario and a test case. The scenario represents a more general situation, while the test case details exactly how that situation will be validated.",
      "Even with all the explanations, it is still a challenging process to reason about and imagine, mainly because not every company has well-defined requirements documentation. Still, it is clear that testing goes far beyond validating what has already been built: it involves anticipating problems and imagining how the system should behave when facing failures.",
    ],
    footer: FOOTER_EN,
  },
  "metricas-ia-e-os-limites-dos-testes": {
    title: "Metrics, AI and the limits of testing",
    subject: "Software Testing · Class of Mar 25",
    summary:
      "Qase and Jira, well (and badly) interpreted metrics, the 100%-passing system that fails in production, and AI as support — not a substitute — for human reasoning.",
    paragraphs: [
      "Throughout Bootcamps 15, 16, 17 and 18, it became clear that testing software goes far beyond running test cases or validating isolated features. The testing process is directly tied to decision-making, risk analysis and professional responsibility, demanding not only technical knowledge but also critical thinking and a view of context.",
      "In Bootcamp 15, the focus was on structuring tests and using tools such as Qase and Jira, which allowed me to understand in practice how to organize test cases, record evidence and ensure traceability. This reinforced the importance of properly documenting tests, not only for control, but also for communication between teams and support for decision-making.",
      "In Bootcamp 16, the deeper dive into metrics brought a new perspective on software quality. Metrics should not be used only as quantitative indicators, but as instruments for analysis and continuous improvement. Misinterpreted metrics can create a false sense of quality, while well-used metrics help identify risks and guide more assertive decisions.",
      "Bootcamp 17 brought one of the most important reflections of the course: a system can pass 100% of its tests and still fail in production. This shows the limits of testing and reinforces that tests do not guarantee the absence of failures, they reduce uncertainty. The distinction between confidence, guarantee and illusion of safety showed that the biggest risk lies not only in running the tests, but in misinterpreting their results.",
      "Finally, Bootcamp 18 addressed the use of Artificial Intelligence to support testing, highlighting its role as a tool for acceleration and idea generation, but not as a substitute for human reasoning. AI is efficient for brainstorming and initial structuring, but limited in understanding context, prioritizing risks and technical depth. This reinforces the need for professional curation and critical analysis of everything it generates.",
      "Overall, the learnings from these bootcamps show that software quality depends less on tools and more on the human ability to interpret, question and decide. Testing is not just finding errors, but understanding the system, anticipating failures and taking responsibility for the decisions made. The role of the testing professional is thus consolidated as essential in building more reliable systems, even in scenarios of uncertainty.",
    ],
    footer: FOOTER_EN,
  },
  "testes-como-criterio-risco-e-responsabilidade": {
    title: "Testing as judgment, risk and responsibility",
    subject: "Software Testing · Class of Apr 1",
    summary:
      "From an operational view to an engineering view: tests are not neutral, they deal with uncertainty and support ethical and business decisions.",
    paragraphs: [
      "At the beginning of the course, my view of software testing was more operational, tied to running cases, validating features and logging defects. I thought of it as an important process, but still limited to what needed to be checked in the system in a purely functional way.",
      "Tests do not serve only to find errors, but to understand system behavior, reduce uncertainty and support decisions. One of the points that struck me most was the relationship between testing and risk. Not everything can be tested, not every defect will be found, and not every decision is comfortable. This brought an important change: testing is not about guaranteeing perfection, it is about dealing with uncertainty consciously.",
      "Another relevant point was understanding that tests are not neutral. There is responsibility involved. Deciding to release a system with flaws, omitting risks or softening problems is not just a technical decision, it is also an ethical one. And that decision can directly impact people.",
      "The course also showed that the role of the testing professional goes far beyond execution. There is a clear difference between someone who only runs tests and someone who uses tests to analyze context, interpret evidence and support decisions.",
      "Throughout the bootcamps, especially in the decision scenarios, it became evident that the most important thing is not following a process, but having judgment: knowing how to assess risk, understand impact and take a clear position, even under pressure.",
      "Today, I see testing as a central part of software engineering. Not as a final stage, but as a continuous practice that connects quality, business and responsibility. Perhaps that is the main evolution: moving from execution to a more conscious role within engineering decisions.",
    ],
    footer: FOOTER_EN,
  },
};
