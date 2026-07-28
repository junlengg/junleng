import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Code2,
  Eye,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Send,
  X,
} from 'lucide-react';

const Motion = motion;

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
];

const proofStats = [
  { value: '3', label: 'featured projects' },
  { value: '1', label: 'live project link' },
  { value: '90%', label: 'faster clock-in workflow' },
  { value: '47/50', label: 'internship assessment' },
];

const activityStats = [
  ['Verified Public Repo', 'junleng'],
  ['Portfolio URL', 'junleng.vercel.app'],
  ['Project Links', 'FragmentAI live'],
];

const publicRepos = [
  {
    name: 'junleng',
    description: 'Personal portfolio website',
    href: 'https://github.com/junlengg/junleng',
    meta: 'JavaScript · public',
  },
  {
    name: 'project work samples',
    description: 'Software and applied AI projects are shown as structured summaries here, with deeper notes available on request.',
    href: '#contact',
    meta: 'Details available on request',
  },
];

const experience = [
  {
    role: 'Administrative Support Assistant',
    company: 'Republic of Singapore Navy',
    mark: 'RSN',
    logo: '/rsn-logo.png',
    context: 'National Service',
    period: 'Oct 2022 - Oct 2024',
    location: 'Singapore',
    summary: 'Operational record keeping, verification workflows and lightweight automation.',
    details: [
      'Used Excel and VBA to reduce repetitive administrative work.',
      'Handled verification workflows and sensitive operational information.',
    ],
    tags: ['Excel', 'VBA', 'Operations'],
  },
  {
    role: 'Freelance Software Developer',
    company: 'Aktus M.U. Kreativ Pte Ltd',
    mark: 'Aktus',
    logo: '/aktus-logo.png',
    context: 'Freelance',
    period: 'Mar 2022 - Aug 2022',
    location: 'Singapore',
    summary: 'Full-stack attendance product for real operational users after being asked back.',
    details: [
      'Improved clock-in time for roughly 100 employees by 90%.',
      'Integrated Google Maps API to validate employee clock-in location.',
      'Built with Python, Flask, JavaScript, Bootstrap and Google Firestore.',
      'Deployed testing builds through ngrok while the product moved toward beta testing.',
    ],
    tags: ['Python', 'Flask', 'Google Maps API', 'Firestore'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Aktus M.U. Kreativ Pte Ltd',
    mark: 'Aktus',
    logo: '/aktus-logo.png',
    context: 'Internship',
    period: 'Mar 2021 - Jul 2021',
    location: 'Singapore',
    summary: 'Internal attendance workflow reliability, UI responsiveness and Firestore security.',
    details: [
      'Created Firestore security protocols to reduce data tampering risk.',
      'Fixed a repeated clock-in bug caused by page refresh behavior.',
      'Implemented responsive CSS behavior for different display sizes.',
      'Received a 47/50 formal employer assessment.',
    ],
    tags: ['Firestore', 'JavaScript', 'CSS'],
  },
];

const projectTimeline = [
  {
    title: 'Northstar',
    source: 'Personal operating system',
    date: '2026',
    status: 'Vercel-ready',
    icon: Code2,
    image: '/northstar.png',
    previewFit: 'cover',
    previewAspect: '2940 / 1612',
    previewDomain: 'northstar.local',
    summary:
      'A local-first personal operating system for planning, tracking, knowledge and reflection, with private Firebase sync.',
    details: [
      'Built a private workspace for goals, projects, tasks, notes, reviews and connected records.',
      'Integrated Google sign-in, Firebase Authentication and user-scoped Firestore storage.',
      'Prepared the project for deployment through a native Next.js and Vercel setup.',
    ],
    moreInfo: [
      'Developed a local-first personal operating system that brings goals, projects, tasks, notes, habits, reviews and relationships into one private workspace.',
      'Designed an Obsidian-style workspace with collapsible folders, closable tabs, editable Markdown documents and split editor panes.',
      'Implemented wiki-link autocomplete, clickable backlinks, related-record navigation and a draggable relationship graph.',
      'Integrated Google sign-in with Firebase Authentication and user-scoped Firestore vault documents.',
      'Added realtime synchronization, persistent browser caching and offline write support so the workspace can keep working through connection changes.',
      'Migrated the application to native Next.js, configured it for Vercel and pushed the verified source to a private GitHub repository.',
    ],
    tags: ['Next.js', 'Firebase', 'Firestore', 'Local-first'],
  },
  {
    title: 'FragmentAI',
    source: 'AI productivity app',
    date: '2026',
    status: 'Live',
    icon: Check,
    image: '/fragmentai-preview.png',
    previewFit: 'cover',
    previewAspect: '2940 / 1618',
    previewDomain: 'fragment-ai.app',
    liveUrl: 'https://fragment-ai-jun-lengs-projects.vercel.app/',
    summary:
      'An AI-powered checklist app that turns complex tasks into structured, actionable plans.',
    details: [
      'Built a clean landing experience around AI-generated task checklists.',
      'Designed the product flow to help users break broad goals into practical next steps.',
      'Deployed the project publicly on Vercel.',
    ],
    moreInfo: [
      'Developed an AI-powered task-management prototype that converts broad user goals into structured, actionable checklists through a clean web interface.',
      'Built the frontend experience with React and focused on making the product easy to understand from the first screen.',
      'Designed the checklist workflow so users can move from a high-level task prompt to practical next steps.',
      'Created a ticket system that lets users submit recommendations and improvement ideas for future site upgrades.',
      'Created a polished landing page and product preview to communicate the value of AI-generated task breakdowns clearly.',
      'Deployed the project publicly on Vercel so it can be viewed as a live web application.',
      'Used the project to practise product presentation, frontend polish and deployment workflow.',
    ],
    tags: ['React', 'AI workflow', 'Vercel'],
  },
  {
    title: 'SuperCart',
    source: 'Computer vision prototype',
    date: '2025 - 2026',
    status: 'Prototype',
    icon: Code2,
    image: '/supercart.png',
    previewFit: 'contain',
    previewAspect: '1668 / 796',
    previewDomain: 'supercart.prototype',
    summary:
      'Raspberry Pi grocery-checkout prototype that turns object detections into checkout-ready records.',
    details: [
      'Integrated YOLOv8 inference with a Raspberry Pi camera.',
      'Reached 89% successful detection across controlled trials.',
    ],
    moreInfo: [
      'Developed the Python object-detection pipeline for a Raspberry Pi grocery-checkout prototype that identifies products, maps detections to stored prices and generates structured JSON for a checkout interface.',
      'Integrated YOLOv8 inference with a Raspberry Pi Camera Module for real-time item detection.',
      'Converted model detections into product identifiers, prices and checkout-ready JSON records.',
      'Achieved an 89% successful item-detection rate across 15 controlled project trials, exceeding the project target of 85%.',
      'Tested bounding-box consistency, subtotal calculations and JSON compatibility with the checkout interface.',
      'Investigated failure cases caused by lighting variation, partial occlusion and limited training data.',
      'Collaborated with the project team to integrate the detection pipeline with the user-facing checkout workflow.',
    ],
    tags: ['Python', 'YOLOv8', 'Raspberry Pi'],
  },
];

const techStack = [
  'Python',
  'C++',
  'SQL',
  'JavaScript',
  'React',
  'Flask',
  'Firestore',
  'REST APIs',
  'Vercel',
  'NumPy',
  'pandas',
  'YOLOv8',
  'Google Maps API',
  'Excel VBA',
  'Git',
];

const contactLinks = [
  {
    label: 'Email',
    value: 'junleng.poh@gmail.com',
    href: 'mailto:junleng.poh@gmail.com',
    icon: Mail,
  },
  {
    label: 'Telegram',
    value: '@somebrownguy',
    href: 'https://t.me/somebrownguy',
    icon: Send,
  },
  {
    label: 'LinkedIn',
    value: 'poh-jun-leng',
    href: 'https://www.linkedin.com/in/poh-jun-leng/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'junlengg',
    href: 'https://github.com/junlengg',
    icon: Github,
  },
];

const education = [
  {
    school: 'Singapore University of Technology and Design',
    credential: 'Bachelor of Engineering, Computer Science and Design',
    period: 'Expected May 2029',
  },
  {
    school: 'Nanyang Polytechnic',
    credential: 'Diploma in Information Technology, Artificial Intelligence',
    period: '2019 - 2021',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const containerClass = 'mx-auto w-full max-w-5xl px-5 sm:px-7 lg:px-8';
const projectContainerClass = containerClass;

function SectionTitle({ eyebrow, title, copy, featured = false, centered = false }) {
  if (featured) {
    return (
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.45 }}
        viewport={{ once: true, margin: '-90px' }}
        className={`mb-12 max-w-5xl ${centered ? 'mx-auto text-center' : ''}`}
      >
        <h2 className="text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl md:text-5xl">
          {title}
          <span className="text-cyan-200">.</span>
        </h2>
        {copy && (
          <p className={`mt-5 max-w-4xl text-base leading-7 text-white/62 sm:text-lg md:leading-8 ${centered ? 'mx-auto' : ''}`}>
            {copy}
          </p>
        )}
      </Motion.div>
    );
  }

  return (
    <Motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.45 }}
      viewport={{ once: true, margin: '-90px' }}
      className="mb-9"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/45">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-normal text-white md:text-4xl">{title}</h2>
      {copy && (
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/58 sm:text-base">{copy}</p>
      )}
    </Motion.div>
  );
}

const tagMarks = {
  'Next.js': 'N',
  Firebase: '🔥',
  Firestore: '▣',
  'Local-first': '⌂',
  React: '⚛',
  'AI workflow': '✦',
  Vercel: '▲',
  Python: 'Py',
  YOLOv8: '⌁',
  'Raspberry Pi': 'RP',
  Excel: 'XL',
  VBA: 'VB',
  Operations: 'Ops',
  Flask: 'Fl',
  'Google Maps API': '⌖',
  JavaScript: 'JS',
  CSS: '#',
};

function Tag({ children }) {
  const mark = tagMarks[children];

  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-white/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]">
      {mark && (
        <span className="grid size-4 place-items-center rounded bg-white/[0.07] text-[0.6rem] font-semibold leading-none text-cyan-200">
          {mark}
        </span>
      )}
      {children}
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const scrollToSection = (id, behavior = 'smooth') => {
    const target = document.getElementById(id);
    if (!target) return;

    const sectionOffsets = {
      about: 16,
      experience: 0,
      work: 0,
    };
    const navbarOffset = sectionOffsets[id] ?? 92;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: Math.max(0, top), behavior });
  };

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 620);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;

    const targetId = window.location.hash.slice(1);
    const scrollToHash = () => scrollToSection(targetId, 'auto');
    const timers = [80, 320, 700, 1400].map((delay) => window.setTimeout(scrollToHash, delay));
    window.requestAnimationFrame(scrollToHash);
    window.addEventListener('load', scrollToHash, { once: true });
    document.fonts?.ready.then(scrollToHash);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('load', scrollToHash);
    };
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const targetId = window.location.hash.slice(1);
      if (!targetId) return;
      window.setTimeout(() => scrollToSection(targetId), 0);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  const goTo = (id, event) => {
    event?.preventDefault();
    setMenuOpen(false);
    window.history.pushState(null, '', `#${id}`);
    scrollToSection(id);
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#030505] text-white selection:bg-cyan-300 selection:text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#030505]/80 backdrop-blur-xl">
        <div className={`${containerClass} grid h-16 grid-cols-[1fr_auto_1fr] items-center`}>
          <a href="#home" onClick={(event) => goTo('home', event)} className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-md bg-white text-xs font-bold text-black">
              JL.
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => goTo(item.id, event)}
                className="text-sm text-white/56 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="grid size-9 place-items-center rounded-md text-white/70 transition hover:bg-white/[0.06] hover:text-white md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className={`${containerClass} border-t border-white/8 py-3 md:hidden`} aria-label="Mobile navigation">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => goTo(item.id, event)}
                  className="rounded-md px-3 py-3 text-left text-sm text-white/64 hover:bg-white/[0.06]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section id="home" className="relative min-h-[78svh] overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[#030505]">
          <img
            src="/banner-football.png"
            alt=""
            className="absolute inset-y-0 right-0 h-full w-full object-cover object-[center_52%] opacity-45 saturate-[0.72] contrast-110 sm:w-[68%] lg:w-[55%]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_10%,rgba(34,211,238,0.14),transparent_34%),linear-gradient(90deg,rgba(3,5,5,0.9)_0%,rgba(3,5,5,0.66)_52%,rgba(3,5,5,0.3)_100%),linear-gradient(180deg,rgba(3,5,5,0.22),#030505_92%)]" />
        <div className={`${containerClass} relative flex min-h-[calc(78svh-4rem)] flex-col justify-start pt-8 pb-12 sm:pt-10 lg:pt-12`}>
          <Motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold text-white/58">About me</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl md:text-5xl">
              hey, I&apos;m Jun Leng
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/62 sm:text-base md:text-lg">
              Computer Science and Design undergraduate at SUTD building reliable internal tools,
              automation workflows and data-heavy projects, now moving deeper into quantitative
              development and backend systems.
            </p>
          </Motion.div>

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-12 max-w-3xl"
          >
            <h2 className="text-xl font-semibold tracking-normal text-white md:text-2xl">My Mission</h2>
            <p className="mt-4 text-sm leading-7 text-white/58 sm:text-base">
              Bridging practical software engineering and market-focused systems: where correctness,
              clean architecture and measurable outcomes meet.
            </p>
            <p className="mt-4 text-sm font-medium text-white/72 sm:text-base">Keep building, keep learning, keep it honest.</p>
          </Motion.div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025] py-6">
        <div className={`${containerClass} grid gap-3 sm:grid-cols-2 lg:grid-cols-4`}>
          {proofStats.map((item) => (
            <a
              key={item.label}
              href={item.label.includes('projects') || item.label.includes('builds') ? '#work' : '#experience'}
              className="group rounded-lg border border-white/10 bg-black/24 p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-3xl font-semibold leading-none tracking-normal">{item.value}</p>
                <ArrowUpRight className="size-4 text-white/34 transition group-hover:text-cyan-200" />
              </div>
              <p className="mt-3 text-sm text-white/48">{item.label}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-24 py-20">
        <div className={`${containerClass} grid gap-8 lg:grid-cols-[0.72fr_0.28fr]`}>
          <div>
            <SectionTitle
              eyebrow="About me."
              title="I build software that explains itself through outcomes."
            />
            <div className="space-y-5 text-base leading-7 text-white/58 md:leading-8">
              <p>
                I started with practical software work at Aktus, where I fixed reliability issues,
                hardened Firestore access and improved responsive UI behavior for an internal
                attendance workflow.
              </p>
              <p>
                I was later asked back as a freelance developer to build a fuller attendance system
                with Flask, Firestore and Google Maps API validation. That project gave me a useful
                habit: measure the workflow, not just the code.
              </p>
              <p>
                Right now, I am focused on strengthening quant development fundamentals:
                probability, statistics, optimisation, C++, SQL and backend systems.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/junlengg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              >
                View my GitHub
                <Github className="size-4" />
              </a>
              <button
                type="button"
                onClick={() => goTo('contact')}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/10 px-5 text-sm font-semibold text-white/76 transition hover:bg-white/[0.06] hover:text-white"
              >
                Contact me
                <Mail className="size-4" />
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm font-semibold text-white/58">Education</p>
            <div className="mt-5 space-y-5">
              {education.map((item) => (
                <div key={item.school} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <GraduationCap className="mb-3 size-5 text-cyan-200" />
                <h3 className="text-base font-semibold leading-6 text-white">{item.school}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/54">{item.credential}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.08em] text-white/34">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className={containerClass}>
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white/54">GitHub Activity</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-normal text-white">
                  Public profile snapshot
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/46">
                  Public GitHub currently highlights the portfolio repository. Quant project writeups,
                  implementation notes and deeper technical context are available on request.
                </p>
              </div>
              <a
                href="https://github.com/junlengg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/54 hover:text-white"
              >
                github.com/junlengg
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-md border border-white/8 bg-[#050808]">
              <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-cyan-200" />
                  <span className="text-xs uppercase tracking-[0.08em] text-white/36">public GitHub</span>
                </div>
                <span className="text-xs text-white/32">verified public data</span>
              </div>
              <div className="grid gap-3 p-4 md:grid-cols-2">
                {publicRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.href}
                    target={repo.href.startsWith('http') ? '_blank' : undefined}
                    rel={repo.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={repo.href.startsWith('#') ? (event) => goTo('contact', event) : undefined}
                    className="group rounded-md border border-white/8 bg-black/24 p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold leading-6 text-white">{repo.name}</p>
                        <p className="mt-2 text-sm leading-6 text-white/48">{repo.description}</p>
                      </div>
                      <ArrowUpRight className="size-4 text-white/30 transition group-hover:text-cyan-200" />
                    </div>
                    <p className="mt-5 text-xs uppercase tracking-[0.08em] text-white/32">{repo.meta}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {activityStats.map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/8 bg-black/18 p-4">
                  <p className="text-xs uppercase tracking-[0.08em] text-white/38">{label}</p>
                  <p className="mt-2 text-lg font-semibold leading-6 text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 py-20">
        <div className={containerClass}>
          <SectionTitle
            eyebrow="Experience."
            title="Experience"
            copy="A timeline of my work: operational discipline, workflow automation, and hands-on software development."
            featured
          />

          <div className="space-y-5">
            {experience.map((item, index) => (
              <Motion.article
                key={item.role}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-6"
              >
                <div className="grid gap-5 lg:grid-cols-[5.5rem_1fr]">
                  <div className="flex items-center gap-3 lg:block">
                    <div className="grid size-14 place-items-center overflow-hidden rounded-lg border border-white/10 bg-white p-0.5 text-base font-bold text-black shadow-[0_18px_50px_rgba(0,0,0,0.26)]">
                      {item.logo ? (
                        <img src={item.logo} alt={`${item.company} logo`} className="h-full w-full object-contain" />
                      ) : (
                        item.mark
                      )}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/34 lg:mt-4">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold leading-tight tracking-normal text-white">{item.role}</h3>
                        <p className="mt-1 text-sm text-white/46">{item.context}</p>
                        <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/70">
                          {item.company}
                          <ArrowUpRight className="size-3.5 text-white/34" />
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-sm text-white/58">{item.period}</p>
                        <p className="mt-1 text-sm text-white/38">{item.location}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-base leading-7 text-white/58">{item.summary}</p>
                    <ul className="mt-5 grid gap-3">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-sm leading-6 text-white/56">
                          <Check className="mt-1 size-4 shrink-0 text-cyan-200" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 py-20">
        <div className={containerClass}>
          <SectionTitle
            eyebrow="Featured Projects."
            title="Featured Projects"
            copy="Highlighting my latest work: productivity tooling, personal systems and applied computer-vision prototypes."
            featured
            centered
          />
        </div>

        <div className={projectContainerClass}>
          <div className="space-y-8">
            {projectTimeline.map((project, index) => {
              const imageFirst = index % 2 === 0;

              return (
                <Motion.article
                  key={project.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.025))] shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
                >
                  <div className="grid items-stretch lg:grid-cols-2">
                    <div
                      className={`border-white/10 bg-black/[0.18] p-5 sm:p-6 lg:p-7 ${
                        imageFirst ? 'lg:border-r' : 'lg:order-2 lg:border-l'
                      }`}
                    >
                      <div className="mx-auto w-full overflow-hidden rounded-lg border border-white/10 bg-[#111] shadow-[0_18px_54px_rgba(0,0,0,0.38)]">
                        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.09] px-3.5 py-3">
                          <div className="flex gap-1.5">
                            <span className="size-2.5 rounded-full bg-red-400" />
                            <span className="size-2.5 rounded-full bg-yellow-300" />
                            <span className="size-2.5 rounded-full bg-green-400" />
                          </div>
                          <div className="min-w-0 flex-1 rounded-md bg-white/[0.13] px-3 py-1 text-center text-[0.68rem] text-white/38">
                            {project.previewDomain}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => openProjectDetails(project)}
                          aria-label={`Open project overview for ${project.title}`}
                          className="group relative block w-full overflow-hidden bg-[#f4f7fb] text-left"
                          style={{ aspectRatio: project.previewAspect ?? '1731 / 909' }}
                        >
                          <img
                            src={project.image}
                            alt={`${project.title} project preview`}
                            className={`h-full w-full object-center transition duration-500 group-hover:scale-[1.025] ${
                              project.previewFit === 'contain' ? 'object-contain' : 'object-cover'
                            } brightness-100 saturate-100 group-hover:brightness-[0.62] group-hover:saturate-[0.9] group-focus-visible:brightness-[0.62] group-focus-visible:saturate-[0.9]`}
                          />
                          <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black opacity-0 shadow-[0_16px_45px_rgba(0,0,0,0.32)] transition duration-300 group-hover:scale-[1.04] group-hover:opacity-100 group-focus-visible:scale-[1.04] group-focus-visible:opacity-100">
                            <Eye className="size-4" />
                            Project Overview
                          </span>
                        </button>
                      </div>
                    </div>
                    <div
                      className={`flex min-h-[24rem] flex-col justify-center bg-white/[0.025] p-5 sm:p-6 lg:p-8 ${
                        imageFirst ? '' : 'lg:order-1'
                      }`}
                    >
                      <p className="text-xs text-white/38">{project.date} - {project.status}</p>
                      <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-normal text-white">
                        {project.title}
                      </h3>
                      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">{project.summary}</p>
                      <button
                        type="button"
                        onClick={() => openProjectDetails(project)}
                        aria-label={`Read more about ${project.title}`}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                      >
                        Read more
                        <span className="text-xs">⌄</span>
                      </button>

                      <div className="mt-7 flex max-w-2xl flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-wrap gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live website`}
                            className="inline-flex h-11 items-center gap-2 rounded-md bg-blue-500 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
                          >
                            View Live
                            <ArrowUpRight className="size-4" />
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => openProjectDetails(project)}
                          aria-label={`Open project overview for ${project.title}`}
                          className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-white/[0.08] px-5 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:bg-white/[0.12] hover:text-white"
                        >
                          <FileText className="size-4" />
                          Project Overview
                        </button>
                      </div>
                    </div>
                  </div>
                </Motion.article>
              );
            })}
          </div>

          <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:flex sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-semibold text-white/58">Want to see more?</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
                I can share implementation notes, design decisions and project context when a
                recruiter wants to go deeper.
              </p>
            </div>
            <button
              type="button"
              onClick={() => goTo('contact')}
              aria-label="Request more project work"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-md border border-white/10 px-4 text-sm font-semibold text-white/72 transition hover:bg-white/[0.06] hover:text-white sm:mt-0"
            >
              More Projects
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      <section id="tech" className="scroll-mt-24 py-20">
        <div className={containerClass}>
          <SectionTitle
            eyebrow="Technologies I use."
            title="Tools I use to build software, data systems and prototypes."
            copy="The emphasis is Python, backend development, data analysis, systems thinking and practical deployment."
          />

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {techStack.map((tech) => (
              <a
                key={tech}
                href="#contact"
                onClick={(event) => goTo('contact', event)}
                aria-label={`Contact Jun Leng about ${tech}`}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-white/62 transition hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-white"
              >
                <span>{tech}</span>
                <ArrowUpRight className="size-4 text-white/28" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-20">
        <div className={containerClass}>
          <SectionTitle
            eyebrow="Contact me."
            title="Open to quant development, software engineering and backend internships."
            copy="If you are hiring for a role where software, data and systems judgement matter, send me a note."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-md bg-white text-black">
                      <Icon className="size-5" />
                    </span>
                    <ArrowUpRight className="size-4 text-white/30 transition group-hover:text-cyan-200" />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-7 text-white">{item.label}</p>
                  <p className="mt-1 break-words text-sm leading-6 text-white/48">{item.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-sm text-white/42">
        <div className={containerClass}>
          <p>Copyright &copy; 2021 - {currentYear} Poh Jun Leng</p>
        </div>
      </footer>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/76 px-4 py-6 backdrop-blur-md"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <Motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="max-h-[88svh] w-full max-w-4xl overflow-y-auto rounded-lg border border-white/10 bg-[#070909] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#070909]/92 px-5 py-4 backdrop-blur">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-cyan-200">
                  {selectedProject.source}
                </p>
                <h2 id="project-dialog-title" className="mt-1 text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="grid size-9 shrink-0 place-items-center rounded-md border border-white/10 text-white/58 transition hover:bg-white/[0.06] hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="grid gap-6 p-5 lg:grid-cols-[0.44fr_0.56fr] lg:p-6">
              {selectedProject.image && (
                <div className="overflow-hidden rounded-md border border-white/10 bg-black">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} project preview`}
                    className="max-h-[28rem] w-full object-cover object-center"
                  />
                </div>
              )}

              <div>
                <div className="flex flex-wrap gap-2">
                  <Tag>{selectedProject.date}</Tag>
                  <Tag>{selectedProject.status}</Tag>
                  <Tag>{selectedProject.source}</Tag>
                </div>

                <p className="mt-5 text-base leading-7 text-white/66">{selectedProject.summary}</p>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-white/72">Project Overview</p>
                  <p className="mt-3 text-sm leading-6 text-white/60">{selectedProject.moreInfo[0]}</p>
                  <ul className="mt-4 grid gap-3">
                    {selectedProject.moreInfo.slice(1).map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-white/56">
                        <Check className="mt-1 size-4 shrink-0 text-cyan-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex h-10 items-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                  >
                    Open live site
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            </div>
          </Motion.div>
        </div>
      )}

      <Motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 8 }}
        className={`fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-md border border-white/10 bg-white text-black shadow-2xl ${
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
