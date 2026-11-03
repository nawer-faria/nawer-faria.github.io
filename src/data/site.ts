// Everything the homepage says lives here, so updating the site means editing data, not markup.

export const person = {
  name: 'Faria Nawer',
  role: 'Senior SQA Engineer',
  // The hero status line. Update it if your role changes.
  status: 'Senior SQA Engineer · ShareViral',
  location: 'Chattogram, Bangladesh',
  email: 'nawer.faria@gmail.com',
  linkedin: 'https://linkedin.com/in/faria-nawer-7344299a',
  github: 'https://github.com/nawer-faria',
  cv: '/faria-nawer-cv.pdf',
};

export const proof = [
  { num: 'Zero', text: 'critical defects at launch for the SCB and HSBC banking integrations, where I led the QA team.' },
  { num: '60%+', text: 'less manual testing on the SmartMF, HRMS and ePMS modules, through one-click API and regression automation.' },
  { num: '2h → 20m', text: 'regression time for ePMS and HRMS, after replacing manual runs with a Playwright suite.' },
  { num: '1h → 12m', text: 'test-data prep for HRMS Job Separation and Employee Transfer, two of its longest flows, now 10–12 minutes with scenario-based scripts.' },
];

export const work = [
  {
    num: '01',
    href: '/work/epms-hrms-automation/',
    title: 'Building ePMS & HRMS automation from zero',
    summary: 'A Python + Playwright + pytest suite that cut ePMS and HRMS regression from 2 hours to 20 minutes, plus data-prep scripts that turned an hour of HRMS setup into 10–12 minutes.',
    stack: 'Python · Playwright · pytest · Allure · GitLab',
  },
  {
    num: '02',
    href: '/work/java-modernization/',
    title: 'Modernizing a legacy Java UI suite',
    summary: 'Migrating from FluentLenium to Selenium WebDriver and TestNG with Gradle builds, and moving the toolchain from Windows to Ubuntu.',
    stack: 'Java · Selenium WebDriver · TestNG · Gradle · Ubuntu',
  },
  {
    num: '03',
    href: '/work/bank-integration/',
    title: 'Bank integration: BRAC with SCB and HSBC',
    summary: "I led the QA team for BRAC's bank integrations with SCB and HSBC: two launches in 2025, zero critical defects.",
    stack: 'REST Assured · Postman · Bearer / JWT · JIRA · Zephyr',
  },
];

// Point href at the repo itself once it is public on GitHub.
export const openSource = [
  {
    name: 'playwright-pytest-blueprint',
    status: 'In progress',
    href: 'https://github.com/nawer-faria',
    text: 'Multi-environment Playwright + pytest framework with fixtures, page objects, Allure reports and GitHub Actions CI.',
  },
  {
    name: 'restassured-oauth2-kit',
    status: 'In progress',
    href: 'https://github.com/nawer-faria',
    text: 'A reusable REST Assured base class for OAuth2 client-credentials and password grants, tested against Keycloak in Docker.',
  },
];

export const principles = [
  { title: 'Test by risk, not by habit.', text: "Coverage goes where a failure would cost the most: money movement, data integrity, people's records." },
  { title: 'A flaky test is a bug.', text: 'A suite nobody trusts is worse than no suite. Instability gets fixed, not retried.' },
  { title: 'Environments are part of the test.', text: "The same suite should pass on dev, staging and test, or tell you exactly why it doesn't." },
  { title: 'The release gate is a promise.', text: "Signing off a release means I'd stand behind it in production, and the evidence is written down." },
];

export const experience = [
  {
    date: 'From Nov 2026',
    current: true,
    role: 'Senior SQA Engineer · ShareViral',
    desc: 'Joining on 15 November 2026.',
  },
  {
    date: 'Jan 2025 – Oct 2026',
    role: 'Senior SQA Engineer · BRAC IT Services',
    desc: 'Led the QA team for the SCB and HSBC bank integrations, built ePMS and HRMS automation, modernized the Java suite, and owned the release gate for SmartMF.',
  },
  {
    date: 'Jun 2022 – Dec 2024',
    role: 'SQA Engineer · BRAC IT Services',
    desc: "Functional, integration and regression testing for Microfinance and HRMS; started API automation on SmartMF's OTC APIs.",
  },
  {
    date: 'Feb – May 2022',
    role: 'SQA Engineer Intern · BRAC IT Services',
    desc: 'Module testing, defect documentation and requirement analysis on enterprise releases.',
  },
  {
    date: 'Nov 2020 – Dec 2021',
    role: 'Research & Development Engineer · Artificial Intelligence Bangladesh',
    desc: 'Tested and validated R&D prototypes; taught workshops on applied AI and software.',
  },
];

export const toolkit = [
  { group: 'Frameworks', items: ['Playwright', 'Selenium WebDriver', 'TestNG · pytest', 'REST Assured', 'Appium · Allure'] },
  { group: 'Languages & data', items: ['Java · Python', 'SQL (PostgreSQL, MySQL)', 'MongoDB', 'Elasticsearch'] },
  { group: 'API & integration', items: ['Postman · Swagger UI', 'Bearer / JWT auth', 'Kafka · RabbitMQ', 'ActiveMQ · ELK'] },
  { group: 'Build & environments', items: ['Git · GitLab · Gradle', 'Linux (Ubuntu)', 'Multi-environment config', 'JMeter'] },
  { group: 'Process', items: ['Agile / Scrum', 'JIRA · Zephyr', 'Confluence', 'Release quality gates'] },
];

export const education = [
  { title: 'M.Sc. in Information & Communication Technology', sub: 'Bangladesh University of Professionals · 2024 · CGPA 3.79' },
  { title: 'B.Sc. in Electrical & Electronic Engineering', sub: 'Rajshahi University of Engineering & Technology · 2016' },
];

export const publication = {
  title: 'Indoor Environment Quality of Industrial Workplace in Bangladesh',
  sub: 'IEEE ICICT4SD · 2023 · peer-reviewed',
};

export const certifications = [
  'Software Manual & Automation Testing — SQA Learning Academy',
  'DevOps 101 — BRAC IT',
  'JMeter: Performance & Load Testing — LinkedIn Learning',
  'Learning SQL Programming — LinkedIn Learning',
];
