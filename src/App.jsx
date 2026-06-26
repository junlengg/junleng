import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Download,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Moon,
  Send,
  Sun,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Motion = motion;

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const proofPoints = [
  { value: '90%', label: 'clock-in time improvement' },
  { value: '100+', label: 'employee-scale workflow' },
  { value: 'SUTD', label: 'bachelor degree in progress' },
];

const strengths = [
  'Responsive React interfaces',
  'Firebase and Firestore workflows',
  'Python automation for practical operations',
  'AI coursework and product-minded development',
];

const skillGroups = [
  ['Languages', ['Python', 'JavaScript', 'HTML', 'CSS']],
  ['Frontend', ['React', 'TailwindCSS', 'Framer Motion']],
  ['Data & AI', ['Firestore', 'SQL', 'Keras', 'Numpy']],
  ['APIs', ['Firebase', 'Google Maps API', 'ChatGPT API']],
];

const experience = [
  {
    title: 'Software Developer',
    company: 'Aktus M.U. Kreativ Pte Ltd',
    period: 'March 2022 - August 2022',
    description:
      'Returned as a freelance software engineer after a strong internship performance.',
    achievements: [
      'Created a Python web application that helped companies averaging 100 employees streamline clock-in time by 90%.',
      'Used Google Maps API to compare user location against company preset locations.',
      'Used Google Firestore to create and retrieve clock-in, clock-out, and location data.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Aktus M.U. Kreativ Pte Ltd',
    period: 'March 2021 - July 2021',
    description: 'School internship focused on improving internal software reliability.',
    achievements: [
      'Implemented Firestore security rules to protect sensitive data.',
      'Resolved a duplicate clock-in bug triggered by page refreshes.',
      'Improved UI responsiveness across screen sizes.',
    ],
  },
  {
    title: 'National Service',
    company: 'Singapore Navy',
    period: 'October 2022 - October 2024',
    description: 'Mandatory National Service for Singaporeans.',
    achievements: [
      'Built Excel sheets to track NSF parade states.',
      'Built certificate tracking to prevent duplicated printing.',
      'Managed NSMen messaging software through Postman.',
    ],
  },
  {
    title: 'Travelling',
    company: 'Travelling the World',
    period: 'October 2024 - June 2025',
    description: 'Experienced lifestyles across other countries before beginning university.',
    achievements: ['Melbourne x2', 'Tasmania', 'Korea', 'Kuala Lumpur', 'Johor Bahru', 'Japan'],
  },
];

const education = [
  {
    title: 'Bachelors Degree',
    institution: 'SUTD',
    period: '2025 - Present',
    description:
      'Currently working on obtaining a Bachelors Degree at Singapore University of Technology and Design.',
    achievements: ['Attended additional computing classes through a Python refresher course.'],
  },
  {
    title: 'Diploma in Information Technology',
    institution: 'Nanyang Polytechnic',
    period: '2019 - 2021',
    description: 'Specialized in artificial intelligence and software development fundamentals.',
    achievements: [
      'Coursework: Python, JavaScript, HTML/CSS.',
      'Data Structures & Algorithms, Advanced Programming.',
      'Foundation of AI, Machine Learning Techniques.',
    ],
  },
  {
    title: 'O-Level Certificate',
    institution: 'Dunman High Secondary',
    period: '2014 - 2018',
    description: 'Achieved O-Level Certificate.',
    achievements: ['Appointed as Assistant Patrol Leader for my group in Scouts CCA.'],
  },
];

const project = {
  title: 'FragmentAI',
  description:
    'A website created with the intent to help break down medical tasks into checklists utilizing the ChatGPT API.',
  image: '/fragmentai.JPG',
  tags: ['ReactJS', 'TailwindCSS', 'Firebase', 'Framer Motion', 'ChatGPT API'],
  live: 'https://fragment-ai-kappa.vercel.app/',
};

const contacts = [
  {
    label: 'Email',
    value: 'junleng.poh@gmail.com',
    href: 'mailto:junleng.poh@gmail.com',
    icon: Mail,
  },
  {
    label: 'Telegram',
    value: 't.me/somebrownguy',
    href: 'https://t.me/somebrownguy',
    icon: Send,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/poh-jun-leng',
    href: 'https://www.linkedin.com/in/poh-jun-leng/',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    value: 'instagram.com/_junleng',
    href: 'https://www.instagram.com/_junleng/?hl=en',
    icon: Instagram,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const scrollOffset = 88;

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <Motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.45 }}
      viewport={{ once: true, margin: '-80px' }}
      className="mb-10"
    >
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal text-stone-950 dark:text-stone-50 md:text-4xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-300">
          {copy}
        </p>
      )}
    </Motion.div>
  );
}

function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      let currentSection = navItems[0].id;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (!element) continue;

        const sectionTop = element.offsetTop - scrollOffset - 24;
        if (window.scrollY >= sectionTop) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const top = sectionId === 'home' ? 0 : element.offsetTop - scrollOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-950 transition-colors duration-300 dark:bg-[#0e0e0d] dark:text-stone-50">
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
          scrollY > 20
            ? 'border-b border-stone-200 bg-stone-50/90 backdrop-blur-xl dark:border-stone-800 dark:bg-[#0e0e0d]/90'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left"
            aria-label="Go to top"
          >
            <span className="text-sm font-semibold">Poh Jun Leng</span>
            <span className="hidden text-sm text-stone-500 dark:text-stone-400 sm:inline">
              Software Engineer
            </span>
          </button>

          <nav className="hidden items-center gap-5 md:flex">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors ${
                  activeSection === item.id
                    ? 'text-stone-950 dark:text-stone-50'
                    : 'text-stone-500 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden h-9 px-3 md:inline-flex">
              <a href="/JunLengResume.pdf" download="Jun Leng's Resume.pdf">
                <Download />
                Resume
              </a>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode((value) => !value)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="px-5 pb-20 pt-32 md:pb-28 md:pt-40">
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-stone-500 dark:text-stone-400">
            <span>Available for work</span>
            <span className="h-px w-8 bg-stone-300 dark:bg-stone-700" />
            <span>Singapore</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-stone-950 dark:text-stone-50 md:text-7xl">
            Software engineer building useful web products.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
            I am Poh Jun Leng, a 23 year old software engineer focused on React,
            Firebase, Python, and AI-assisted workflows. I care about clean interfaces,
            dependable data flows, and products that make real work easier.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="h-11 bg-stone-950 px-5 text-stone-50 hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-200"
            >
              <Mail />
              Get in touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="h-11 border-stone-300 bg-transparent px-5 dark:border-stone-700"
            >
              <ExternalLink />
              View work
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-stone-300 bg-transparent px-5 dark:border-stone-700 md:hidden"
            >
              <a href="/JunLengResume.pdf" download="Jun Leng's Resume.pdf">
                <Download />
                Resume
              </a>
            </Button>
          </div>

          <div className="mt-14 grid gap-6 border-y border-stone-200 py-6 dark:border-stone-800 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point.label}>
                <p className="text-3xl font-semibold">{point.value}</p>
                <p className="mt-1 text-sm leading-5 text-stone-500 dark:text-stone-400">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </Motion.div>
      </section>

      <section id="about" className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="About"
            title="Clear thinker, practical builder, fast learner."
            copy="I like building web applications where the details matter: responsive interfaces, protected data, and flows that remove friction from everyday work."
          />

          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <Motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">
                What I bring
              </h3>
              <ul className="mt-5 space-y-3">
                {strengths.map((strength) => (
                  <li key={strength} className="border-l border-stone-300 pl-4 text-stone-700 dark:border-stone-700 dark:text-stone-300">
                    {strength}
                  </li>
                ))}
              </ul>
            </Motion.div>

            <Motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.45, delay: 0.05 }}
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {skillGroups.map(([group, skills]) => (
                <div key={group}>
                  <h3 className="text-sm font-medium text-stone-500 dark:text-stone-400">
                    {group}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-stone-300 bg-transparent text-stone-700 dark:border-stone-700 dark:text-stone-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-stone-200 px-5 py-20 dark:border-stone-800">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Work"
            title="Experience shaped around reliability and business impact."
            copy="The through-line is simple: spot the friction, build the tool, and make the workflow more dependable."
          />

          <div className="divide-y divide-stone-200 dark:divide-stone-800">
            {experience.map((job, index) => (
              <Motion.article
                key={`${job.company}-${job.period}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true, margin: '-80px' }}
                className="grid gap-5 py-8 md:grid-cols-[0.35fr_0.65fr]"
              >
                <div>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{job.period}</p>
                  <h3 className="mt-2 text-xl font-semibold">{job.title}</h3>
                  <p className="mt-1 text-stone-600 dark:text-stone-300">{job.company}</p>
                </div>
                <div>
                  <p className="leading-7 text-stone-600 dark:text-stone-300">{job.description}</p>
                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="leading-7 text-stone-700 dark:text-stone-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="border-t border-stone-200 px-5 py-20 dark:border-stone-800">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Education"
            title="Foundations in IT, AI, and computing."
            copy="My education connects software fundamentals with AI coursework and continued computing practice."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {education.map((item, index) => (
              <Motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border-t border-stone-200 pt-5 dark:border-stone-800"
              >
                <p className="text-sm text-stone-500 dark:text-stone-400">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-stone-600 dark:text-stone-300">{item.institution}</p>
                <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-500 dark:text-stone-400">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-stone-200 px-5 py-20 dark:border-stone-800">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work."
            copy="A focused project that shows how I combine React, Firebase, and AI-assisted workflows."
          />

          <Motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.45 }}
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-8 border-t border-stone-200 pt-8 dark:border-stone-800 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="overflow-hidden rounded-md border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-900">
              <img
                src={project.image}
                alt={`${project.title} application screenshot`}
                className="h-full min-h-[240px] w-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-semibold tracking-normal">{project.title}</h3>
              <p className="mt-4 text-lg leading-8 text-stone-600 dark:text-stone-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-stone-300 bg-transparent text-stone-700 dark:border-stone-700 dark:text-stone-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                className="mt-7 h-11 border-stone-300 bg-transparent dark:border-stone-700"
              >
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  Open live site
                </a>
              </Button>
            </div>
          </Motion.article>
        </div>
      </section>

      <section id="contact" className="border-t border-stone-200 px-5 py-20 dark:border-stone-800">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something useful together."
            copy="I am currently available for freelance work. If you have a project that needs coding, or want to hire me, get in touch."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group rounded-md border border-stone-200 bg-white/35 p-5 transition-colors hover:border-stone-300 hover:bg-white/70 dark:border-stone-800 dark:bg-white/[0.02] dark:hover:border-stone-700 dark:hover:bg-white/[0.04]"
                >
                  <span className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-md border border-stone-200 text-stone-700 dark:border-stone-800 dark:text-stone-200">
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium text-stone-950 dark:text-stone-50">
                        {contact.label}
                      </span>
                      <span className="mt-1 block break-words text-sm leading-6 text-stone-500 dark:text-stone-400">
                        {contact.value}
                      </span>
                    </span>
                    <span className="grid size-9 shrink-0 place-items-center rounded-md text-stone-400 transition-colors group-hover:bg-stone-100 group-hover:text-stone-700 dark:group-hover:bg-stone-900 dark:group-hover:text-stone-200">
                      <ExternalLink className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-11 bg-stone-950 text-stone-50 hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-200">
              <a href="mailto:junleng.poh@gmail.com">
                <Mail />
                Email me
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-stone-300 bg-transparent dark:border-stone-700"
            >
              <a href="/JunLengResume.pdf" download="Jun Leng's Resume.pdf">
                <Download />
                Download resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 px-5 py-8 text-sm text-stone-500 dark:border-stone-800 dark:text-stone-400">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Poh Jun Leng. Built with React and hosted on Vercel.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/junlengg" target="_blank" rel="noopener noreferrer" className="hover:text-stone-950 dark:hover:text-stone-50">
              <Github className="size-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/poh-jun-leng/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-950 dark:hover:text-stone-50">
              <Linkedin className="size-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>

      <Motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-md border border-stone-200 bg-stone-50 text-stone-950 shadow-sm transition-opacity duration-300 dark:border-stone-800 dark:bg-[#0e0e0d] dark:text-stone-50 ${
          scrollY > 360 ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Back to top"
      >
        <ArrowUp className="size-5" />
      </Motion.button>
    </main>
  );
}

export default LandingPage;
