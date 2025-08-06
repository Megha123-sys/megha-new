import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Deputy Manager - Digital Marketing",
      company: "Drishti IAS",
      location: "Delhi, India",
      period: "2024 – Present",
      description: [
        "Driving scaled campaign strategies for State PCS & UPSC",
        "Achieved 30% lower CPC through channel optimization",
        "Managing multi-channel digital marketing campaigns",
        "Leading team of marketing professionals"
      ]
    },
    {
      title: "Performance Marketing Specialist",
      company: "Pine Labs",
      location: "Noida, India",
      period: "2023 – 2024",
      description: [
        "Managed multi-channel paid campaigns and user acquisition",
        "Optimized campaign performance across Google Ads, Meta Ads, and LinkedIn",
        "Implemented data-driven strategies for lead generation",
        "Collaborated with cross-functional teams for campaign execution"
      ]
    },
    {
      title: "Digital Marketing Executive",
      company: "GRMI",
      location: "Delhi, India",
      period: "2022 – 2023",
      description: [
        "Executed end-to-end lead generation strategy across LinkedIn, Google, and content channels",
        "Managed social media presence and content marketing",
        "Conducted A/B testing for campaign optimization",
        "Analyzed campaign metrics and provided insights for improvement"
      ]
    }
  ]

  return (
    <section id="experience" ref={ref} className="section-padding">
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
            Where I've Worked
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-400 rounded-full transform md:-translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="card"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-100 mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <Building size={16} />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-green-400">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.6 + index * 0.2 + itemIndex * 0.1 }}
                            className="flex items-start gap-2 text-slate-300"
                          >
                            <span className="text-green-400 mt-1">▹</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 