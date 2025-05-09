import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Database, Globe, Smartphone, Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink, Code2, FileBadge, FileJson, BrainCircuit, Flame, Atom, MousePointer2, Instagram, Bot, Calculator } from 'lucide-react';

// Import shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// App component
export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'work', 'education', 'projects', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        {/* Header */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
          <div className="container mx-auto flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Poh Jun Leng</span>
            </motion.div>

            <nav className="hidden md:flex items-center gap-8">
              {['home', 'about', 'work', 'education', 'projects', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${activeSection === item ? 'text-blue-600 dark:text-blue-400' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              <Button className="hidden md:flex">
                <Download size={16} className="mr-2" />
                <a
                  href="/JunLengResume.pdf"
                  alt="resume"
                  download="Jun Leng's Resume.pdf"
                >
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="min-h-screen pt-24 flex items-center">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <Badge className="w-fit bg-green-300">Available for work</Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Software Engineer
                </span>
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Building robust and scalable web applications with modern technologies.
                Based in Singapore, crafting digital experiences that matter.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button size="lg" onClick={() => scrollToSection('contact')}>
                  Get in touch
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('projects')}>
                  View my work
                </Button>
              </div>

              <div className="flex gap-4 mt-6">
                <motion.a
                  href="https://github.com/junlengg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/poh-jun-leng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="font-mono text-xs md:text-sm overflow-x-auto p-4 rounded bg-slate-100 dark:bg-slate-800">
                    <code>
                      <span className="text-blue-600 dark:text-blue-400">const</span> <span className="text-green-600 dark:text-green-400">developer</span> = {`{`}<br />
                      {"  "}<span className="text-purple-600 dark:text-purple-400">name</span>: <span className="text-orange-600 dark:text-orange-400">'Poh Jun Leng'</span>,<br />
                      {"  "}<span className="text-purple-600 dark:text-purple-400">role</span>: <span className="text-orange-600 dark:text-orange-400">'Software Developer'</span>,<br />
                      {"  "}<span className="text-purple-600 dark:text-purple-400">location</span>: <span className="text-orange-600 dark:text-orange-400">'Singapore'</span>,<br />
                      {"  "}<span className="text-purple-600 dark:text-purple-400">skills</span>: [<br />
                      {"    "}<span className="text-orange-600 dark:text-orange-400">'React'</span>, <span className="text-orange-600 dark:text-orange-400">'Python'</span>, <span className="text-orange-600 dark:text-orange-400">'Javascript'</span>,<br />
                      {"     "}<span className="text-orange-600 dark:text-orange-400">HTML'</span>, <span className="text-orange-600 dark:text-orange-400">'CSS'</span>, <span className="text-orange-600 dark:text-orange-400">'Firestore'</span>, <span className="text-orange-600 dark:text-orange-400">'SQL'</span><br />
                      {"  "}],<br />
                      {"  "}<span className="text-purple-600 dark:text-purple-400">passion</span>: <span className="text-orange-600 dark:text-orange-400">'Building elegant solutions to complex problems'</span><br />
                      {`}`};<br /><br />
                      <span className="text-blue-600 dark:text-blue-400">function</span> <span className="text-yellow-600 dark:text-yellow-400">hire</span>() {`{`}<br />
                      {"  "}<span className="text-blue-600 dark:text-blue-400">return</span> <span className="text-green-600 dark:text-green-400">developer.contact</span>();<br />
                      {`}`}
                    </code>
                  </pre>
                </div>
              </div>

              <motion.div
                className="absolute -z-10 w-full h-full rounded-2xl bg-blue-600/20 dark:bg-blue-600/10 top-6 left-6"
                animate={{
                  top: [6, 12, 6],
                  left: [6, 10, 6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="pt-20 pb-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 items-center mb-16 text-center"
            >
              <Badge variant="outline" className="mb-2">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Get to know me better</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mt-2"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-md">
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-6">
                    <Avatar className="w-full h-auto aspect-square rounded-xl">
                      <AvatarImage src="/me.jpg" alt="Profile Image" className="object-cover" />
                      <AvatarFallback className="text-3xl">JL</AvatarFallback>
                    </Avatar>
                  </div>

                  <motion.div
                    className="absolute -z-10 w-full h-full rounded-2xl bg-blue-600/20 dark:bg-blue-600/10 top-6 -left-6"
                    animate={{
                      top: [6, 12, 6],
                      left: [-6, -10, -6],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-2xl font-bold">Software Engineer with a passion for creating impactful web experiences</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  I'm a 23 year old software engineer based in Singapore with 1 year of experience building modern web applications.
                  My journey in tech began with a deep curiosity about how digital products are built and has evolved into a
                  career focused on creating elegant solutions to complex problems.
                </p>

                <div className="flex flex-col gap-4 mt-2">
                  <div>
                    <h4 className="font-medium mb-4">Languages & Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                        <BrainCircuit className="w-5 h-5 text-blue-700" />
                        <span>Python</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                        <FileJson className="w-5 h-5 text-yellow-500" />
                        <span>JavaScript</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                        <Code2 className="w-5 h-5 text-blue-600" />
                        <span>HTML</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                        <Code2 className="w-5 h-5 text-blue-600" />
                        <span>CSS</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                        <Atom className="w-5 h-5 text-blue-500" />
                        <span>React</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                        <Bot className="w-5 h-5 text-blue-500" />
                        <span>Keras</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                        <Calculator className="w-5 h-5 text-blue-500" />
                        <span>Numpy</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                        <Flame className="w-5 h-5 text-orange-500" />
                        <span>Firestore</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                        <Database className="w-5 h-5 text-blue-400" />
                        <span>SQL</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-medium mb-2">Name</h4>
                    <p className="text-slate-700 dark:text-slate-300">Poh Jun Leng</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Email</h4>
                    <p className="text-slate-700 dark:text-slate-300">junleng.poh@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Location</h4>
                    <p className="text-slate-700 dark:text-slate-300">Singapore</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Experience</h4>
                    <p className="text-slate-700 dark:text-slate-300">1 Year</p>
                  </div>
                </div>

                <Button className="w-fit mt-4" onClick={() => scrollToSection('contact')}>
                  Let's work together
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="work" className="pt-25">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 items-center mb-12 text-center"
            >
              <Badge variant="outline" className="mb-2">My Work Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mt-2"></div>
            </motion.div>

            <div className="relative mx-auto max-w-6xl">
              {/* Timeline line */}
              <div className="absolute top-8 left-0 w-full h-0.5 bg-slate-300 dark:bg-slate-600"></div>

              <div className="flex flex-col md:flex-row gap-4 pb-8">
                {[
                  {
                    title: "Software Developer",
                    company: "Aktus M.U. Kreativ Pte Ltd",
                    period: "March 2021 - July 2021",
                    description: "Required Internship for School.",
                    achievements: [
                      "Implemented Firestore security rules to protect senstive data and support application scalability",
                      "Resolved bug causing duplicate clock-ins on page refresh",
                      "Improved UI responsiveness to maintain layout integrity across different screen sizes"
                    ]
                  },
                  {
                    title: "Software Developer",
                    company: "Aktus M.U. Kreativ Pte Ltd",
                    period: "March 2022 - August 2022",
                    description: "Returned as Freelance Software Engineer via request (Accepted due to good performances during internship).",
                    achievements: [
                      "Created a web application using Python to help companies, of on average 100 employees, streamline their clock in time by 90%",
                      "Used Google Maps API to retrieve user's location and compared to company's preset location, ensuring that user is clocking in from the correct location.",
                      "Utilized Google FireStore to create and retrieve user's data (e.g. clock in/ out times, location)."
                    ]
                  },
                  {
                    title: "National Service",
                    company: "Singapore Navy",
                    period: "October 2022 - October 2024",
                    description: "Mandatory National Service for Singaporeans.",
                    achievements: [
                      "Built Excel sheet to keep track of NSF's parade states",
                      "Built Excel sheet to keep track of certificates that have been printed (Avoid double printing)",
                      "Managed NSMen Messaging Software"
                    ]
                  },
                  {
                    title: "Travelling",
                    company: "Travelling the World",
                    period: "October 2022 - Present",
                    description: "Experiencing lifestyles of other countries.",
                    achievements: [
                      "Melbourne x2",
                      "Korea",
                      "Kuala Lumpur",
                      "Johor Bahru",
                      "Japan"
                    ]
                  }
                ].map((job, index) => (
                  <motion.div
                    key={job.title}
                    className="relative pt-12 flex-1"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-slate-800 transform -translate-x-1/2"></div>

                    <Card className="w-full h-full">
                      <CardHeader className="p-4">
                        <Badge className="w-fit mb-1">{job.period}</Badge>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription className="text-base font-medium">{job.company}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 space-y-2">
                        <p className="text-sm text-slate-700 dark:text-slate-300">{job.description}</p>
                        <ul className="space-y-1 list-disc pl-4 text-sm">
                          {job.achievements.map((item, i) => (
                            <li key={i} className="text-slate-700 dark:text-slate-300">{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="pt-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 items-center my-16 text-center"
            >
              <Badge variant="outline" className="mb-2">My Education Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mt-2"></div>
            </motion.div>

            <div className="relative mx-auto max-w-6xl">
              {/* Timeline line */}
              <div className="absolute top-8 left-0 w-full h-0.5 bg-slate-300 dark:bg-slate-600"></div>

              <div className="flex flex-col md:flex-row gap-4 pb-8">
                {[
                  {
                    title: "O-Level Certicate",
                    institution: "Dunman High Secondary",
                    period: "2014-2018",
                    description: "Achieving O-Level Certificate.",
                    achievements: [
                      "Appointed as Assistant Patrol Leader for my group in Scouts CCA"
                    ]
                  },
                  {
                    title: "Diploma in Information Technology",
                    institution: "Nanyang Polytechnic",
                    period: "2019-2021",
                    description: "Specialized in Artificial Intelligence and software development fundamentals.",
                    achievements: [
                      "Coursework: Python, JavaScript, HTML/CSS",
                      "Data Structures & Algorithms, Advanced Programming",
                      "Foundation of AI, Machine Learning Techniques"
                    ]
                  },
                  {
                    title: "Bachelors Degree",
                    institution: "SUTD",
                    period: "2025-Present",
                    description: "Currently working on obtaining Bachelors Degree at Singapore University of Technology and Design.",
                    achievements: ["Attended Additional Classes for Computing (Python Refresher Course)"]
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={edu.title}
                    className="relative pt-12 flex-1"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-slate-800 transform -translate-x-1/2"></div>

                    <Card className="w-full h-full">
                      <CardHeader className="p-4">
                        <Badge className="w-fit mb-1">{edu.period}</Badge>
                        <CardTitle className="text-lg">{edu.title}</CardTitle>
                        <CardDescription className="text-base font-medium">{edu.institution}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 space-y-2">
                        <p className="text-sm text-slate-700 dark:text-slate-300">{edu.description}</p>
                        {edu.achievements.length > 0 && (
                          <ul className="space-y-1 list-disc pl-4 text-sm">
                            {edu.achievements.map((item, i) => (
                              <li key={i} className="text-slate-700 dark:text-slate-300">{item}</li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 items-center mb-16 text-center"
            >
              <Badge variant="outline" className="mb-2">My Work</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mt-2"></div>
              <p className="max-w-2xl mt-4 text-slate-700 dark:text-slate-300">
                Here are some of my recent projects that showcase my technical skills. Some of the projects won't have a demo as I have plans for them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "FragmentAI (Under Development)",
                  description: "A website created with the intent to help break down medial tasks into checklists.",
                  image: "/fragmentai.JPG",
                  tags: ["ReactJS", "TailwindCSS", "Firebase", "Framer-Motion", "ChatGPT API"],
                  links: { github: "#", live: "#" }
                },
                {
                  title: "Field Booking Website - SCRC (Under Development)",
                  description: "An online field booking website created for deployment with a club that provides field booking.",
                  image: "/scrcwebsite.JPG",
                  tags: ["ReactJS", "TailWindCSS", "ShadCN/UI", "Firebase", "Axios"],
                  links: { live: "https://scrc-website.vercel.app/" }
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full flex flex-col border dark:border-slate-700">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 flex gap-2">
                          {project.links.live && project.links.live !== "#" && (
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-black/30 text-white border-white hover:bg-white/20 backdrop-blur-sm"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink size={14} className="mr-2" />
                                Demo
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-slate-900 dark:text-white">{project.title}</CardTitle>
                      <CardDescription className="pt-2 text-slate-600 dark:text-slate-300">{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-wrap gap-2 mt-auto pt-0">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">{tag}</Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-15">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 items-center mb-12 text-center"
            >
              <Badge variant="outline" className="mb-2">Get In Touch</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mt-2"></div>
              <p className="max-w-4xl mt-4 text-slate-700 dark:text-slate-300">
                I'm currently available for freelance work.
                If you have a project that needs coding or want to hire me, get in touch.
              </p>
            </motion.div>

            <div className='px-90 pb-20 pt-10'>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {/* Follow Me Box */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Contact Me</CardTitle>
                    <CardDescription>Connect with me on these platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <a
                        href="mailto:junleng.poh@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                          <Mail size={24} />
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">junleng.poh@gmail.com</p>
                        </div>
                      </a>
                      <a
                        href="https://t.me/somebrownguy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                          <MousePointer2 size={24} />
                        </div>
                        <div>
                          <h4 className="font-medium">Telegram</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">t.me/somebrownguy</p>
                        </div>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/poh-jun-leng/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                          <Linkedin size={24} />
                        </div>
                        <div>
                          <h4 className="font-medium">LinkedIn</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">linkedin.com/in/poh-jun-leng</p>
                        </div>
                      </a>
                      <a
                        href="https://www.instagram.com/_junleng/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                          <Instagram size={24} />
                        </div>
                        <div>
                          <h4 className="font-medium">Instagram</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">instagram.com/_junleng</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Back to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed right-6 bottom-6 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${scrollY > 300 ? 'opacity-100' : 'opacity-0'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}