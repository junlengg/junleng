import React, { useEffect, useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const Motion = motion;

const EMAIL = 'junleng.poh@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/poh-jun-leng/';
const GITHUB = 'https://github.com/junlengg';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
];

const socials = [
  { label: 'GitHub', href: GITHUB, icon: Github },
  { label: 'LinkedIn', href: LINKEDIN, icon: Linkedin },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: Mail },
];

const experience = [
  {
    period: 'Oct 2022 - Oct 2024',
    role: 'Administrative Support Assistant',
    company: 'Republic of Singapore Navy',
    note: 'National Service',
    description:
      'Gave administrative support using Excel with basic VBA. Ran the Postman call-up system for NSmen returning for In-Camp Training.',
    tags: ['Excel', 'VBA'],
  },
  {
    period: 'Mar 2022 - Aug 2022',
    role: 'Software Developer',
    company: 'Aktus M.U. Kreativ',
    note: 'Freelance',
    description: (
      <>
        Came back after my internship to keep building the company attendance web app for about 100 employees.
        Cut clock-in time by <strong className="font-medium text-fg">90%</strong>. Checked clock-in location
        through the Google Maps API with about <strong className="font-medium text-fg">99%</strong> accuracy.
      </>
    ),
    tags: ['JavaScript', 'Flask', 'Firestore', 'Google Maps API'],
  },
  {
    period: 'Mar 2021 - Jul 2021',
    role: 'Software Developer Intern',
    company: 'Aktus M.U. Kreativ',
    note: 'Internship',
    description: 'My first software job. Started work on the attendance web app with JavaScript, Flask and Google Firestore.',
    tags: ['JavaScript', 'Flask', 'Firestore'],
  },
];

const projects = [
  {
    title: 'SuperCart',
    meta: 'Team project · Jan - Mar 2026',
    image: '/supercart.png',
    imageAlt: 'SuperCart grocery-checkout prototype using YOLOv8 object detection on a Raspberry Pi',
    description: (
      <>
        Python object-detection pipeline for a Raspberry Pi grocery-checkout prototype. YOLOv8 runs on a Raspberry Pi
        Camera Module. Each detection is mapped to a product ID and price, then sent as JSON to the team&apos;s
        checkout interface. Reached <strong className="font-medium text-fg">89%</strong> item-detection success
        across 15 controlled trials, against an 85% target. I traced the failures to lighting variation, partial
        occlusion and limited training data.
      </>
    ),
    tags: ['Python', 'YOLOv8', 'Raspberry Pi', 'Computer vision'],
  },
  {
    title: 'FragmentAI',
    meta: 'Live on Vercel',
    href: 'https://fragment-ai-jun-lengs-projects.vercel.app/',
    image: '/fragmentai-preview.png',
    imageAlt: 'FragmentAI task-planning web app built with React and the ChatGPT API',
    description:
      'Task-planning app that turns a typed prompt into a personalised task list through the ChatGPT API. Google sign-in, with tasks and chat history stored in Firestore.',
    tags: ['React', 'ChatGPT API', 'Firestore', 'Tailwind CSS', 'ShadCN/UI', 'Vercel'],
  },
];

const education = [
  {
    period: '2025 - 2029',
    school: 'Singapore University of Technology and Design',
    credential: 'Bachelor of Engineering, Computer Science and Design',
    coursework: [
      'Data Driven World',
      'Computational Thinking for Design',
      'Linear Algebra',
      'Multivariable Calculus',
      'Optimisation',
      'Probability and Statistics',
      'Spatial Design World',
    ],
  },
  {
    period: 'Sep - Dec 2026',
    school: 'Zhejiang University',
    credential: 'Exchange semester',
  },
  {
    period: '2019 - 2021',
    school: 'Nanyang Polytechnic',
    credential: 'Diploma in Information Technology, Artificial Intelligence',
  },
];

const skills = [
  { title: 'Languages', items: 'Python, JavaScript, SQL' },
  { title: 'Frameworks and tools', items: 'Flask, React, Git' },
  {
    title: 'Foundations',
    items: 'Data structures and algorithms, object-oriented programming, computer vision, intro machine learning',
  },
  {
    title: 'Used in projects',
    items: 'YOLOv8, Raspberry Pi, Google Firestore, Google Maps API, ChatGPT API, Tailwind CSS, ShadCN/UI, Vercel',
  },
];

const linkClass = 'font-medium text-brand underline-offset-4 transition hover:underline';

function useActiveSection() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

function Section({ id, label, children }) {
  return (
    <section id={id} aria-label={label} className="mb-24 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-ink/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-fg">{label}</h2>
      </div>
      <Motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Motion.div>
    </section>
  );
}

function Tags({ items }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
      {items.map((item) => (
        <li key={item} className="rounded-full bg-brand-bg px-3 py-1 text-xs font-medium leading-5 text-brand">
          {item}
        </li>
      ))}
    </ul>
  );
}

// One row in a list: date or thumbnail on the left, content on the right.
// On large screens the hovered row lights up and its siblings dim.
function Entry({ aside, children }) {
  return (
    <li className="group relative grid gap-2 transition-opacity sm:grid-cols-8 sm:gap-8 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
      <div className="absolute -inset-x-6 -inset-y-4 z-0 hidden rounded-lg transition lg:block lg:group-hover:bg-surface lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]" />
      <div className="z-10 sm:col-span-2">{aside}</div>
      <div className="z-10 sm:col-span-6">{children}</div>
    </li>
  );
}

function DateLabel({ children }) {
  return <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-fg-subtle">{children}</p>;
}

function App() {
  const active = useActiveSection();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ink text-fg-muted antialiased selection:bg-brand-bright selection:text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            {/* Left column: identity, navigation and links. Sticky on large screens. */}
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                  <a href="/">Poh Jun Leng</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-fg sm:text-xl">
                  Software Engineering Student
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                  Software engineering student at SUTD. Python, Flask, computer vision.
                </p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm text-fg-muted">
                  <span className="size-1.5 rounded-full bg-brand-bright" aria-hidden="true" />
                  Open to software engineering internships
                </p>

                <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
                  <ul className="w-max">
                    {sections.map(({ id, label }) => {
                      const isActive = active === id;
                      return (
                        <li key={id}>
                          <a
                            href={`#${id}`}
                            className="group flex items-center py-3"
                            aria-current={isActive ? 'true' : undefined}
                          >
                            <span
                              className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                                isActive ? 'w-16 bg-fg' : 'w-8 bg-line-strong group-hover:w-16 group-hover:bg-fg'
                              }`}
                            />
                            <span
                              className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                                isActive ? 'text-fg' : 'text-fg-subtle group-hover:text-fg'
                              }`}
                            >
                              {label}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
                {socials.map(({ label, href, icon }) => {
                  const Icon = icon;
                  return (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      title={label}
                      className="block text-fg-subtle transition hover:text-fg"
                    >
                      <Icon className="size-6" />
                    </a>
                  </li>
                  );
                })}
              </ul>
            </header>

            {/* Right column: content. */}
            <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
              <Section id="about" label="About">
                <div className="space-y-4 leading-relaxed">
                  <p>
                    I&apos;m a Computer Science and Design student at the{' '}
                    <span className="text-fg">Singapore University of Technology and Design</span>, looking for
                    a software engineering internship. From September to December 2026 I&apos;m on exchange at{' '}
                    <span className="text-fg">Zhejiang University</span>.
                  </p>
                  <p>
                    My first software job was at Aktus M.U. Kreativ. I worked on the company attendance web app as an
                    intern in 2021 and came back as a freelancer in 2022. It was built for about 100 employees with
                    JavaScript, <span className="text-fg">Flask</span> and Google Firestore, and it cut clock-in
                    time by 90%.
                  </p>
                  <p>
                    At SUTD I worked on <span className="text-fg">SuperCart</span>, a computer vision checkout
                    prototype that runs YOLOv8 on a Raspberry Pi. I also built{' '}
                    <a href="#projects" className={linkClass}>
                      FragmentAI
                    </a>
                    , a React task-planning app on the ChatGPT API.
                  </p>
                </div>
              </Section>

              <Section id="experience" label="Experience">
                <ol className="group/list space-y-12">
                  {experience.map((item) => (
                    <Entry key={item.role + item.period} aside={<DateLabel>{item.period}</DateLabel>}>
                      <h3 className="font-medium leading-snug text-fg">
                        {item.role} <span className="text-fg-subtle">·</span> {item.company}
                      </h3>
                      <p className="mt-0.5 text-sm text-fg-subtle">{item.note}</p>
                      <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                      <Tags items={item.tags} />
                    </Entry>
                  ))}
                </ol>
              </Section>

              <Section id="projects" label="Projects">
                <ul className="group/list space-y-12">
                  {projects.map((project) => (
                    <Entry
                      key={project.title}
                      aside={
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                          width="200"
                          height="113"
                          className="mt-1 aspect-video w-40 rounded border-2 border-line object-cover transition group-hover:border-line-strong sm:w-full"
                        />
                      }
                    >
                      <h3 className="font-medium leading-snug text-fg">
                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-baseline transition hover:text-brand focus-visible:text-brand"
                          >
                            {/* Stretches the link over the whole row on large screens. */}
                            <span className="absolute -inset-x-6 -inset-y-4 z-20 hidden rounded-lg lg:block" />
                            {project.title}
                            <ArrowUpRight
                              className="ml-1 size-4 translate-y-0.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:translate-y-0"
                              aria-hidden="true"
                            />
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p className="mt-0.5 text-sm text-fg-subtle">{project.meta}</p>
                      <p className="mt-2 text-sm leading-relaxed">{project.description}</p>
                      <Tags items={project.tags} />
                    </Entry>
                  ))}
                </ul>
              </Section>

              <Section id="education" label="Education">
                <ol className="group/list space-y-12">
                  {education.map((item) => (
                    <Entry key={item.school} aside={<DateLabel>{item.period}</DateLabel>}>
                      <h3 className="font-medium leading-snug text-fg">{item.school}</h3>
                      <p className="mt-0.5 text-sm">{item.credential}</p>
                      {item.coursework && (
                        <p className="mt-3 text-sm leading-relaxed text-fg-subtle">
                          <span className="text-fg-muted">Coursework:</span> {item.coursework.join(', ')}.
                        </p>
                      )}
                    </Entry>
                  ))}
                </ol>
              </Section>

              <Section id="skills" label="Skills">
                <dl className="space-y-6">
                  {skills.map((group) => (
                    <div key={group.title} className="grid gap-1 sm:grid-cols-8 sm:gap-8">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-fg-subtle sm:col-span-2 sm:mt-1">
                        {group.title}
                      </dt>
                      <dd className="text-sm leading-relaxed text-fg sm:col-span-6">{group.items}</dd>
                    </div>
                  ))}
                </dl>
              </Section>

              <footer className="max-w-md pb-16 text-sm leading-relaxed text-fg-subtle sm:pb-0">
                <p>
                  The best way to reach me is email:{' '}
                  <a href={`mailto:${EMAIL}`} className={linkClass}>
                    {EMAIL}
                  </a>
                  . You can also find me on{' '}
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    LinkedIn
                  </a>{' '}
                  and{' '}
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    GitHub
                  </a>
                  .
                </p>
                <p className="mt-4">Built with React and Tailwind CSS, deployed on Vercel.</p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
