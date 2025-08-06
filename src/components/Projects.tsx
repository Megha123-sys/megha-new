import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, BarChart3, Zap, Search } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Marketing Automation Funnel",
      description: "Designed and implemented a comprehensive marketing automation funnel using MoEngage, resulting in 40% increase in lead conversion rates and improved customer journey tracking.",
      tech: ["MoEngage", "CRM Integration", "Automation", "Analytics"],
      icon: Zap,
      link: "#",
      github: "#"
    },
    {
      title: "AI-powered SEO Strategy",
      description: "Developed and executed an AI-powered SEO strategy using Clearscope, achieving 60% improvement in organic search rankings and 45% increase in organic traffic.",
      tech: ["Clearscope", "AI/ML", "SEO", "Content Strategy"],
      icon: Search,
      link: "#",
      github: "#"
    },
    {
      title: "State PCS Campaign Dashboard",
      description: "Created a comprehensive campaign dashboard using Looker Studio for State PCS campaigns, providing real-time insights and performance metrics for data-driven decision making.",
      tech: ["Looker Studio", "Data Visualization", "Analytics", "Reporting"],
      icon: BarChart3,
      link: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2 }}
            className="section-title"
          >
            Some Things I've Built
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="card group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-400/20 transition-colors"
                      >
                        <Github className="w-4 h-4 text-slate-400 group-hover:text-green-400" />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-400/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-green-400" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.6 + index * 0.2 + techIndex * 0.1 }}
                        className="px-2 py-1 bg-green-400/10 text-green-400 rounded text-xs font-mono"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <motion.a
              href="mailto:meghaggerwal5396@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 