"use client"
 
import React, { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Palette,
  Smartphone,
  Globe,
  ChevronDown,
  MapPin,
  Calendar,
  Award,
  Coffee,
} from "lucide-react"
import {Button}  from "./button"
import { Card, CardContent } from "./card"
import  {Badge} from "./badge"
import image from "../assets/image.JPG"
export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? "text-cyan-400" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center p-5 justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-bounce" />
            <div
              className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 pt-10 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <motion.p
                className="text-lg sm:text-3xl text-cyan-400 font-medium tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Hello, I'm
              </motion.p>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Sohanlal Patel
                </span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-2"
              >
                <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light">Full Stack Developer</p>
                <div className="flex items-center justify-center space-x-2 text-cyan-400">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <p className="text-sm sm:text-base">Building Digital Experiences</p>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I craft beautiful, responsive web applications with modern technologies. Passionate about clean code,
              innovative solutions, and creating digital experiences that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto"
                >
                  View My Work
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href= "/Sohanlal.pdf" download>
                <Button
                  variant="outline"
                  className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 rounded-full text-base sm:text-lg font-semibold backdrop-blur-sm bg-white/5 transition-all duration-300 w-full sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { icon: Github,  href: "https://github.com/sohanlalpatel",target:"_blank" , label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/sohanlal-patel-656563222", label: "LinkedIn" },
                { icon: Mail, href: "https://sohanlalsp205@gmail.com  ", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  target="_blank"
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-white/60 text-sm hidden sm:block">Scroll Down</span>
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
        </motion.div> */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-30" />
                <img
                  src= {image}
                  alt="sohan"
                  className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating digital experiences that
                make a difference. I specialize in React, Node.js, and modern web technologies.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <span className="text-white/70">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-cyan-400" />
                  <span className="text-white/70">5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-cyan-400" />
                  <span className="text-white/70">50+ Projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="h-5 w-5 text-cyan-400" />
                  <span className="text-white/70">Coffee Enthusiast</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20  px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-8 ">
            {[
              { icon: Code, title: "Frontend", skills: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"] },
              { icon: Globe, title: "Backend", skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"] },
              { icon: Smartphone, title: "Mobile", skills: ["React Native", "Flutter", "iOS", "Android", "PWA"] },
              { icon: Palette, title: "Design", skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping", "Branding"] },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-4 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <category.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration.",
                image: "/placeholder.svg?height=300&width=400",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                github: "#",
                live: "#",
              },
              {
                title: "Task Management App",
                description: "Collaborative task management tool with real-time updates and team features.",
                image: "/placeholder.svg?height=300&width=400",
                tech: ["Vue.js", "Firebase", "Vuetify", "PWA"],
                github: "#",
                live: "#",
              },
              {
                title: "Weather Dashboard",
                description: "Beautiful weather app with location-based forecasts and interactive maps.",
                image: "/placeholder.svg?height=300&width=400",
                tech: ["React", "TypeScript", "API", "Charts"],
                github: "#",
                live: "#",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Senior Full Stack Developer",
                company: "TechCorp Inc.",
                period: "2022 - Present",
                description:
                  "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved team productivity by 40%.",
              },
              {
                title: "Frontend Developer",
                company: "StartupXYZ",
                period: "2020 - 2022",
                description:
                  "Built responsive web applications and mobile-first designs. Collaborated with UX/UI designers to implement pixel-perfect interfaces.",
              },
              {
                title: "Junior Web Developer",
                company: "WebSolutions Ltd.",
                period: "2019 - 2020",
                description:
                  "Developed and maintained client websites using modern web technologies. Gained experience in full-stack development and agile methodologies.",
              },
            ].map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center mb-8">
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full relative z-10" />
                  <div className="flex-grow ml-8">
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                            <p className="text-purple-400 font-medium">{job.company}</p>
                          </div>
                          <Badge variant="outline" className="border-blue-500/30 text-blue-300 mt-2 md:mt-0">
                            {job.period}
                          </Badge>
                        </div>
                        <p className="text-white/70">{job.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {index < 2 && (
                  <div className="absolute left-2 top-4 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-cyan-500" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            <p className="text-xl text-white/70 mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <motion.a
                      href="https://sohanlalsp205@gmail.com"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <Mail className="h-6 w-6 text-cyan-400" />
                      <span className="text-white">sohanlalsp205@gmail.com</span>
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/sohanlalPatel"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <Linkedin className="h-6 w-6 text-cyan-400" />
                      <span className="text-white">linkedin.com/in/sohanlal Patel</span>
                    </motion.a>
                    <motion.a
                      href="https://github.com/SohanlalPatel"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <Github className="h-6 w-6 text-cyan-400" />
                      <span className="text-white">github.com/SohanlalPatel</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 pt-5 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                      <div>
                        <textarea
                          rows={5}
                          placeholder="Your Message"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">© 2025 Sohan Patel. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
