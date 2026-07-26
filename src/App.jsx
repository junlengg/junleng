import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  Github,
  GraduationCap,
  LineChart,
  Mail,
  Menu,
  Moon,
  ShieldCheck,
  Sun,
  Terminal,
  X,
} from 'lucide-react';

const Motion = motion;

const navItems = [
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'direction', label: 'Direction' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

const proofPoints = [
  { value: '90%', label: 'faster employee clock-in workflow' },
  { value: '~100', label: 'employees supported by attendance tooling' },
  { value: '47/50', label: 'formal internship employer assessment' },
  { value: '150+', label: 'simulated trades reviewed and journaled' },
];

const roleTargets = [
  'Quantitative Developer Intern',
  'Software Engineer Intern',
  'Backend Engineer Intern',
  'Trading Systems Intern',
];

const credibilityNotes = [
  'Completed work is separated from ongoing project direction.',
  'Trading analysis is labelled as simulated, not live capital.',
  'Unvalidated ventures are kept off the site until there is real traction.',
];

const profileArc = [
  {
    label: '01',
    title: 'Shipped software',
    copy: 'Internal attendance tooling, reliability fixes and automation for real operational users.',
  },
  {
    label: '02',
    title: 'Ongoing quant projects',
    copy: 'Market microstructure, statistical arbitrage and simulated trading-performance analysis.',
  },
  {
    label: '03',
    title: 'Systems foundation',
    copy: 'C++, algorithms, probability, statistics, optimisation and backend-oriented engineering.',
  },
];

const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Aktus M.U. Kreativ Pte Ltd',
    period: 'Mar 2021 - Jul 2021',
    summary:
      'Improved reliability and data protection for an internal attendance workflow.',
    details: [
      'Created Firestore security protocols to reduce data tampering risk.',
      'Fixed a repeated clock-in bug caused by page refresh behavior.',
      'Implemented responsive CSS behavior for different display sizes.',
      'Received a 47/50 formal employer assessment.',
    ],
  },
  {
    role: 'Freelance Software Developer',
    company: 'Aktus M.U. Kreativ Pte Ltd',
    period: 'Mar 2022 - Aug 2022',
    summary:
      'Returned to build a full-stack attendance product for real operational users.',
    details: [
      'Improved clock-in time for roughly 100 employees by 90%.',
      'Integrated Google Maps API to validate employee clock-in location.',
      'Used Python, Flask, JavaScript, Bootstrap and Google Firestore.',
      'Deployed testing builds through ngrok while the product moved toward beta testing.',
    ],
  },
  {
    role: 'Administrative Support Assistant',
    company: 'Republic of Singapore Navy',
    period: 'Oct 2022 - Oct 2024',
    summary:
      'Maintained operational records and built lightweight administrative systems during National Service.',
    details: [
      'Used Excel and VBA to reduce repetitive administrative work.',
      'Handled verification workflows and sensitive operational information.',
    ],
  },
];

const provenWork = [
  {
    title: 'Attendance Workflow System',
    status: 'Shipped internal tool',
    icon: BriefcaseBusiness,
    summary:
      'A production-facing attendance workflow for Aktus, built after being asked back following internship performance.',
    outcomes: ['~100 employee workflow', '90% faster clock-in', '~99% location validation accuracy'],
    details: [
      'Built the web workflow with Python, Flask, JavaScript, Bootstrap and Firestore.',
      'Connected Google Maps validation to company address rules.',
      'Handled clock-in, clock-out and location data through Firestore reads and writes.',
    ],
    tags: ['Python', 'Flask', 'Firestore', 'Google Maps API'],
  },
  {
    title: 'SuperCart',
    status: 'Prototype completed',
    icon: Code2,
    summary:
      'A Raspberry Pi grocery-checkout prototype that turns object detections into checkout-ready records.',
    outcomes: ['89% successful detection', 'YOLOv8 inference', 'JSON checkout pipeline'],
    details: [
      'Integrated computer vision inference with a Raspberry Pi camera.',
      'Translated detected items into structured checkout data.',
    ],
    tags: ['Python', 'YOLOv8', 'Raspberry Pi'],
  },
  {
    title: 'NVIDIA Stock Prediction',
    status: 'ML experiment',
    icon: LineChart,
    summary:
      'Recurrent neural network experiment using five years of Yahoo Finance close-price data.',
    outcomes: ['RNN model', 'MinMaxScaler pipeline', 'Matplotlib evaluation'],
    details: [
      'Prepared train/test sets and visualised predicted versus actual price movement.',
      'Built a Keras Sequential model using Adam optimisation and mean squared error.',
    ],
    tags: ['Python', 'Keras', 'Yahoo Finance API'],
  },
];

const quantDirection = [
  {
    title: 'Market Microstructure Simulator',
    status: 'Ongoing project',
    summary:
      'Event-driven limit order book for studying order flow, liquidity, latency and execution quality.',
    proof: 'Intended proof: matching engine, price-time priority, slippage and fill analysis.',
    tags: ['Python', 'Event-driven systems', 'Market microstructure'],
  },
  {
    title: 'Pairs Trading Backtester',
    status: 'Ongoing project',
    summary:
      'Statistical-arbitrage research pipeline for identifying and evaluating mean-reverting equity pairs.',
    proof: 'Intended proof: cointegration, ADF testing, spread modelling, Sharpe ratio and drawdown.',
    tags: ['Python', 'pandas', 'statsmodels'],
  },
  {
    title: 'Trading Performance Analysis',
    status: 'Simulated evaluation',
    summary:
      'Review of a simulated trading evaluation under explicit profit-target and drawdown rules.',
    proof: 'Evidence: 150+ simulated trades reviewed with win rate, expectancy, sizing and drawdown.',
    tags: ['Risk analysis', 'Trade journal', 'Position sizing'],
  },
];

const education = [
  {
    school: 'Singapore University of Technology and Design',
    credential: 'Bachelor of Engineering, Computer Science and Design',
    period: 'Expected May 2029',
    detail: 'Linear Algebra, Multivariable Calculus, Optimisation, Probability and Statistics',
  },
  {
    school: 'Nanyang Polytechnic',
    credential: 'Diploma in Information Technology, Artificial Intelligence',
    period: '2019 - 2021',
    detail:
      'Databases, Data Structures and Algorithms, Advanced Programming, Foundation of AI, Machine Learning, Robotic Process Automation',
  },
];

const skillGroups = [
  ['Programming', ['Python', 'C++', 'SQL', 'JavaScript', 'Git']],
  ['Quant & data', ['Probability', 'Statistics', 'Optimisation', 'NumPy', 'pandas']],
  ['Systems', ['Data Structures', 'Algorithms', 'OOP', 'Backend Engineering', 'Databases']],
  ['Tools', ['React', 'Flask', 'Firestore', 'REST APIs', 'Keras', 'Matplotlib']],
];

const fadeUp = {
  hidden: { opacity: 1, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const containerClass = 'mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-10';

function SectionHeading({ index, eyebrow, title, copy }) {
  return (
    <Motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.45 }}
      viewport={{ once: true, margin: '-80px' }}
      className="grid gap-5 border-t border-neutral-950/12 pt-6 dark:border-white/12 md:grid-cols-[8rem_1fr]"
    >
      <div className="flex items-center gap-3 md:block">
        <span className="block h-px w-8 bg-cyan-700 dark:bg-cyan-300 md:mb-4" />
        <p className="font-mono text-xs uppercase text-neutral-500 dark:text-neutral-500">
          {index} / {eyebrow}
        </p>
      </div>
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold leading-tight tracking-normal text-neutral-950 dark:text-neutral-50 md:text-5xl">
          {title}
        </h2>
        {copy && (
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400 md:text-lg">
            {copy}
          </p>
        )}
      </div>
    </Motion.div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f3f1ea] text-neutral-950 transition-colors duration-300 dark:bg-[#080b0b] dark:text-neutral-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-950/8 bg-[#f3f1ea]/88 backdrop-blur-xl dark:border-white/8 dark:bg-[#080b0b]/88">
        <div className={`${containerClass} flex h-16 items-center justify-between`}>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 text-left"
          >
            <span className="grid size-8 place-items-center rounded-md bg-neutral-950 font-mono text-[10px] font-semibold text-white dark:bg-white dark:text-neutral-950">
              JL
            </span>
            <span className="hidden text-sm font-semibold sm:block">Poh Jun Leng</span>
          </button>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href="/JunLengResume.pdf"
              download="Poh-Jun-Leng-Resume.pdf"
              className="hidden items-center gap-2 rounded-md border border-neutral-950/10 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-950/[0.04] hover:text-neutral-950 dark:border-white/12 dark:text-neutral-200 dark:hover:bg-white/[0.06] dark:hover:text-white sm:inline-flex"
            >
              <Download className="size-4" />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="grid size-9 place-items-center rounded-md transition-colors hover:bg-neutral-950/[0.05] dark:hover:bg-white/[0.07]"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="grid size-9 place-items-center rounded-md transition-colors hover:bg-neutral-950/[0.05] dark:hover:bg-white/[0.07] md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className={`${containerClass} border-t border-neutral-950/8 py-4 dark:border-white/8 md:hidden`}
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className="rounded-md px-3 py-3 text-left text-sm text-neutral-600 hover:bg-neutral-950/[0.04] dark:text-neutral-300 dark:hover:bg-white/[0.05]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section className="relative pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(8,145,178,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.08)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(rgba(103,232,249,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.08)_1px,transparent_1px)]" />
        <div className={`${containerClass} relative grid min-h-[calc(100vh-4rem)] items-center py-16 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-16 lg:py-20`}>
          <Motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>
            <div className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase text-neutral-500 dark:text-neutral-500">
              <span className="h-px w-8 bg-cyan-700 dark:bg-cyan-300" />
              <span>Poh Jun Leng</span>
              <span className="text-neutral-300 dark:text-neutral-700">/</span>
              <span>SUTD Computer Science and Design</span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-neutral-950 dark:text-neutral-50 md:text-7xl">
              Software engineering with a quant systems direction.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400 md:text-xl">
              I build reliable internal tools, automation workflows and data-heavy projects. My current focus is
              moving that foundation toward quantitative development, backend systems and trading infrastructure.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => goTo('work')}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-neutral-950 px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-neutral-950"
              >
                View work
                <ArrowUpRight className="size-4" />
              </button>
              <a
                href="mailto:junleng.poh@gmail.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-neutral-950/12 bg-[#f3f1ea]/70 px-6 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-950/[0.04] hover:text-neutral-950 dark:border-white/14 dark:bg-white/[0.03] dark:text-neutral-100 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                Contact me
                <Mail className="size-4" />
              </a>
            </div>
          </Motion.div>

          <Motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-14 rounded-lg border border-neutral-950/10 bg-[#f3f1ea]/78 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.035] lg:mt-0"
          >
            <p className="font-mono text-[10px] uppercase text-neutral-500">Recruiter signal</p>
            <div className="mt-5 grid gap-3">
              {roleTargets.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-4 border-t border-neutral-950/10 pt-3 text-sm dark:border-white/10"
                >
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                  <span className="size-1.5 shrink-0 rounded-full bg-cyan-700 dark:bg-cyan-300" />
                </div>
              ))}
            </div>
            <div className="mt-7 border-t border-neutral-950/10 pt-5 dark:border-white/10">
              <p className="font-mono text-[10px] uppercase text-neutral-500">Credibility filter</p>
              <ul className="mt-4 space-y-3">
                {credibilityNotes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    <ShieldCheck className="mt-1 size-4 shrink-0 text-cyan-700 dark:text-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Motion.aside>
        </div>

        <div className={`${containerClass} relative pb-20`}>
          <div className="grid rounded-lg border border-neutral-950/10 bg-neutral-950 text-white dark:border-white/10 dark:bg-white dark:text-neutral-950 sm:grid-cols-4">
            {proofPoints.map((point, index) => (
              <div
                key={point.label}
                className={`p-5 sm:p-6 ${index > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0 dark:border-neutral-950/10' : ''}`}
              >
                <p className="text-3xl font-semibold tracking-normal">{point.value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase leading-5 text-white/55 dark:text-neutral-500">
                  {point.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid overflow-hidden rounded-lg border border-neutral-950/10 bg-[#f3f1ea]/82 backdrop-blur dark:border-white/10 dark:bg-white/[0.035] lg:grid-cols-3">
            {profileArc.map((item, index) => (
              <div
                key={item.title}
                className={`p-5 sm:p-6 ${index > 0 ? 'border-t border-neutral-950/10 dark:border-white/10 lg:border-l lg:border-t-0' : ''}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase text-cyan-800 dark:text-cyan-300">
                    {item.label}
                  </span>
                  <span className="h-px w-10 bg-neutral-950/14 dark:bg-white/14" />
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-normal text-neutral-950 dark:text-neutral-50">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 py-20">
        <div className={containerClass}>
          <SectionHeading
            index="01"
            eyebrow="Experience"
            title="A sequential path from shipped tools to systems work."
            copy="The experience section stays chronological and evidence-led: internship fixes, freelance product work, then operational discipline from National Service."
          />

          <div className="mt-12 grid gap-4">
            {experience.map((item, index) => (
              <Motion.article
                key={item.role}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="group grid gap-6 rounded-lg border border-neutral-950/10 bg-white/56 p-5 transition-all hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_20px_60px_rgba(20,20,18,0.07)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.045] sm:p-6 md:grid-cols-[10rem_1fr]"
              >
                <div className="flex items-start gap-4 md:block">
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-neutral-950 font-mono text-[11px] text-white transition-transform group-hover:-translate-y-0.5 dark:bg-white dark:text-neutral-950">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 md:mt-5">
                    <p className="font-mono text-xs uppercase leading-5 text-neutral-500">{item.period}</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">{item.company}</p>
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold tracking-normal text-neutral-950 dark:text-neutral-50">
                    {item.role}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-400">
                    {item.summary}
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-700 dark:bg-cyan-300" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 py-20">
        <div className={containerClass}>
          <SectionHeading
            index="02"
            eyebrow="Proven Work"
            title="Completed work that can be explained quickly."
            copy="Three completed projects with concrete outcomes, implementation detail and enough context for a recruiter to understand the engineering work quickly."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {provenWork.map((project, index) => {
              const Icon = project.icon;
              return (
                <Motion.article
                  key={project.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className={`flex flex-col rounded-lg border border-neutral-950/10 bg-white/60 p-5 transition-all hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_20px_60px_rgba(20,20,18,0.07)] dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-white/[0.055] sm:p-6 ${
                    index === 0 ? 'lg:col-span-2' : 'min-h-[25rem]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-10 place-items-center rounded-md bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
                      <Icon className="size-4" />
                    </span>
                    <span className="rounded-md border border-cyan-700/25 px-2.5 py-1.5 font-mono text-[10px] uppercase text-cyan-800 dark:border-cyan-300/25 dark:text-cyan-300">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-normal">{project.title}</h3>
                  <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">{project.summary}</p>
                  <div className={`mt-6 grid gap-2 ${index === 0 ? 'sm:grid-cols-3' : ''}`}>
                    {project.outcomes.map((outcome) => (
                      <div key={outcome} className="border-t border-neutral-950/10 pt-2 font-mono text-[10px] uppercase leading-5 text-neutral-500 dark:border-white/10">
                        {outcome}
                      </div>
                    ))}
                  </div>
                  <ul className="mt-5 space-y-2">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                        <Check className="mt-1 size-4 shrink-0 text-neutral-950 dark:text-white" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-neutral-950/10 px-2.5 py-1.5 font-mono text-[10px] uppercase text-neutral-500 dark:border-white/10 dark:text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="direction" className="scroll-mt-24 py-20">
        <div className={containerClass}>
          <SectionHeading
            index="03"
            eyebrow="Quant Direction"
            title="Ongoing projects, labelled honestly."
            copy="These are the market-focused projects that point toward quant development. They are presented as ongoing projects or simulated analysis, not exaggerated work history."
          />

          <div className="mt-12 overflow-hidden rounded-lg border border-neutral-950/10 dark:border-white/10">
            {quantDirection.map((project, index) => (
              <Motion.article
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true, margin: '-60px' }}
                className="grid gap-6 border-b border-neutral-950/10 bg-[#f3f1ea]/70 p-5 last:border-b-0 dark:border-white/10 dark:bg-white/[0.025] sm:p-6 lg:grid-cols-[0.25fr_0.5fr_0.25fr]"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase text-cyan-800 dark:text-cyan-300">
                    {project.status}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-normal">{project.title}</h3>
                </div>
                <div>
                  <p className="leading-7 text-neutral-600 dark:text-neutral-400">{project.summary}</p>
                  <p className="mt-4 text-sm leading-6 text-neutral-500">{project.proof}</p>
                </div>
                <div className="flex flex-wrap content-start gap-2 lg:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-neutral-950/10 px-2.5 py-1.5 font-mono text-[10px] uppercase text-neutral-500 dark:border-white/10 dark:text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="scroll-mt-24 py-20">
        <div className={containerClass}>
          <SectionHeading
            index="04"
            eyebrow="Stack"
            title="The tools behind the direction."
            copy="The skill hierarchy now matches the target roles: programming, quant foundations and backend systems first; web tooling remains as supporting evidence."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <p className="text-xl leading-9 text-neutral-700 dark:text-neutral-300">
                My path started with internal software for a real company, continued through two
                years of National Service, and now runs through SUTD’s Computer Science and Design
                programme. I’m deepening C++, algorithms, probability, statistics and optimisation
                while applying them to market-focused systems.
              </p>

              <div className="mt-9 space-y-4">
                {education.map((item) => (
                  <div key={item.school} className="rounded-lg border border-neutral-950/10 bg-white/52 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="flex items-start gap-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-md bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
                        <GraduationCap className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                          <h3 className="font-semibold">{item.school}</h3>
                          <span className="shrink-0 font-mono text-[10px] uppercase text-neutral-500">
                            {item.period}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{item.credential}</p>
                        <p className="mt-3 text-xs leading-6 text-neutral-500">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.45, delay: 0.05 }}
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {skillGroups.map(([group, skills]) => (
                <div key={group} className="rounded-lg border border-neutral-950/10 bg-white/52 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="flex items-center gap-3">
                    <Terminal className="size-4 text-cyan-800 dark:text-cyan-300" />
                    <p className="font-mono text-[10px] uppercase text-neutral-500">{group}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-neutral-950/10 px-3 py-1.5 text-xs text-neutral-600 dark:border-white/12 dark:text-neutral-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-20">
        <div className={containerClass}>
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="rounded-lg bg-neutral-950 px-6 py-14 text-white dark:bg-white dark:text-neutral-950 sm:px-10 md:px-14"
          >
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-mono text-[10px] uppercase text-white/55 dark:text-neutral-500">05 / Contact</p>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-normal md:text-6xl">
                  Looking for internship opportunities in quant development, software engineering and backend systems.
                </h2>
              </div>
              <a
                href="mailto:junleng.poh@gmail.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-neutral-950 transition-transform hover:-translate-y-0.5 dark:bg-neutral-950 dark:text-white"
              >
                Email me
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/70 dark:border-neutral-950/15 dark:text-neutral-600">
              <a href="https://github.com/junlengg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white dark:hover:text-neutral-950">
                <Github className="size-4" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/poh-jun-leng/" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-neutral-950">
                LinkedIn
              </a>
              <a href="/JunLengResume.pdf" download="Poh-Jun-Leng-Resume.pdf" className="hover:text-white dark:hover:text-neutral-950">
                Download resume
              </a>
            </div>
          </Motion.div>
        </div>
      </section>

      <footer className="border-t border-neutral-950/10 py-8 text-sm text-neutral-500 dark:border-white/10">
        <div className={`${containerClass} flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`}>
          <p>© {currentYear} Poh Jun Leng</p>
          <p className="font-mono text-[10px] uppercase">Built with React in Singapore</p>
        </div>
      </footer>

      <Motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 8 }}
        className={`fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-md border border-neutral-950/10 bg-white text-neutral-950 shadow-xl dark:border-white/10 dark:bg-[#171716] dark:text-white ${
          showTop ? '' : 'pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="size-4" />
      </Motion.button>
    </main>
  );
}

export default App;
