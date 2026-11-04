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
  { num: '2 / 2', text: 'bank integration with SCB and HSBC, where I led the QA team and prevented critical defects from reaching production.' },
  { num: '60%+', text: 'less manual testing across the Microfinance, SmartMF, HRMS and ePMS modules, through one-click API and regression automation.' },
  { num: '6×', text: 'faster regression for SmartMF, HRMS and ePMS: a two-hour manual run became a twenty-minute automated one.' },
  { num: '5×', text: 'faster test-data prep for HRMS Job Separation and Employee Transfer, two of its longest flows.' },
];

export const work = [
  {
    num: '01',
    href: '/work/epms-hrms-automation/',
    title: 'Building ePMS & HRMS automation from zero',
    summary: 'A Python + Playwright + pytest suite that made ePMS and HRMS regression 6× faster, plus data-prep scripts that made HRMS test setup 5× faster.',
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
    summary: "I led the QA team for BRAC's bank integration with SCB and HSBC: two launches in 2025, with critical defects prevented from reaching production.",
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

// Each role: a one-line summary (desc) and optional achievements, one short line each.
export const experience: {
  date: string;
  current?: boolean;
  role: string;
  desc: string;
  achievements?: string[];
}[] = [
  {
    date: 'From Nov 2026',
    current: true,
    role: 'Senior SQA Engineer · ShareViral',
    desc: 'Joining on 15 November 2026.',
  },
  {
    date: 'Jan 2025 – Oct 2026',
    role: 'Senior SQA Engineer · BRAC IT Services',
    desc: 'Quality lead across SmartMF, HRMS and ePMS, taking releases from manual checks to one-click automation.',
    achievements: [
      "Led QA for BRAC's bank integration with SCB and HSBC (loan disbursement phase) from test plan to go-live, signing off both releases.",
      'Owned the ePMS module and built its Playwright + pytest framework from scratch.',
      "Automated the HRMS basic flow for the smoke suite, and turned HRMS's two longest flows, Job Separation and Employee Transfer, into on-demand data scripts for reports, cross-module tests and CRs.",
      'Fully automated the Smart PO and BM loan-proposal and member-admission APIs with REST Assured: one click sends data straight to the ERP buffer.',
      'Cut manual testing by 60%+ across SmartMF, HRMS and ePMS with one-click API and regression automation.',
      'Strengthened defect detection by 35% through a structured API automation strategy.',
      'Migrated the Java UI suite from FluentLenium to Selenium WebDriver, TestNG and Gradle.',
      'Owned the SmartMF release lifecycle: validation, defect governance and release approval.',
    ],
  },
  {
    date: 'Jun 2022 – Dec 2024',
    role: 'SQA Engineer · BRAC IT Services',
    desc: 'Functional, integration and regression testing for Microfinance and HRMS, and the start of my API automation work.',
    achievements: [
      "Automated SmartMF's OTC APIs with REST Assured.",
      'Tested Android and iOS releases of the SmartMF apps.',
      'Validated the Microfinance and Procurement modules across functional, integration and regression cycles.',
    ],
  },
  {
    date: 'Feb – May 2022',
    role: 'SQA Engineer Intern · BRAC IT Services',
    desc: 'Module testing, defect documentation and requirement analysis on enterprise releases.',
    achievements: [
      'Moved into a full SQA Engineer role after four months.',
      'Validated modules across release cycles and logged defects with clear evidence.',
    ],
  },
  {
    date: 'Nov 2020 – Dec 2021',
    role: 'Research & Development Engineer · Artificial Intelligence Bangladesh',
    desc: 'Applied research, prototype testing and teaching.',
    achievements: [
      'Delivered technical workshops on emerging technology for learners and professionals.',
      'Tested and validated research prototypes and documented the results.',
    ],
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
