import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="section-padding">
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
            About Me
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-slate-300 leading-relaxed"
            >
              <p>
                Hello! I'm Megha, a performance marketing specialist with 2.5+ years of experience 
                leading 200+ cross-industry campaigns in ecommerce, retail, logistics, and edtech.
              </p>
              
              <p>
                I create scalable, ROI-driven strategies through programmatic advertising, CRM tools, 
                and multichannel optimization. My expertise spans across multiple digital marketing 
                channels including Google Ads, Meta Ads, LinkedIn Ads, and programmatic platforms 
                like DV360 and The Trade Desk.
              </p>
              
              <p>
                I specialize in data-driven decision making, A/B testing, and conversion rate 
                optimization to maximize campaign performance. Currently working as Deputy Manager 
                - Digital Marketing at Drishti IAS, I'm passionate about leveraging technology 
                and analytics to drive meaningful business outcomes.
              </p>
              
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {[
                  'Google Ads & Meta Ads',
                  'DV360 & The Trade Desk',
                  'HubSpot & Salesforce',
                  'GA4 & Power BI',
                  'A/B Testing & CRO',
                  'Python & SQL'
                ].map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 text-slate-400"
                  >
                    <span className="text-green-400">▹</span>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 bg-slate-800 rounded-lg p-6 border border-slate-700"
                >
                  <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">MA</div>
                      <div className="text-slate-400 text-sm">Profile Picture</div>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute inset-0 bg-green-400 rounded-lg transform rotate-3 scale-105 opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 