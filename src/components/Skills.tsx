import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  BarChart3, 
  Target, 
  Users, 
  TrendingUp, 
  Search, 
  Database, 
  Code, 
  Mail, 
  FileText,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  PieChart,
  Settings
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Programmatic Advertising",
      skills: [
        { name: "DV360", icon: Target },
        { name: "The Trade Desk", icon: TrendingUp }
      ]
    },
    {
      title: "Paid Advertising",
      skills: [
        { name: "Google Ads", icon: Globe },
        { name: "Meta Ads", icon: Smartphone },
        { name: "LinkedIn Ads", icon: Users }
      ]
    },
    {
      title: "CRM & Analytics",
      skills: [
        { name: "HubSpot", icon: Users },
        { name: "Salesforce", icon: Database },
        { name: "MoEngage", icon: Zap }
      ]
    },
    {
      title: "Testing & Optimization",
      skills: [
        { name: "A/B Testing", icon: BarChart3 },
        { name: "CRO", icon: TrendingUp }
      ]
    },
    {
      title: "Analytics & BI",
      skills: [
        { name: "GA4", icon: PieChart },
        { name: "Power BI", icon: BarChart3 },
        { name: "Looker Studio", icon: Monitor }
      ]
    },
    {
      title: "SEO Tools",
      skills: [
        { name: "Ahrefs", icon: Search },
        { name: "SurferSEO", icon: FileText },
        { name: "Clearscope", icon: Target }
      ]
    },
    {
      title: "Automation",
      skills: [
        { name: "Segment", icon: Zap },
        { name: "CleverTap", icon: Settings }
      ]
    },
    {
      title: "Marketing",
      skills: [
        { name: "Email Marketing", icon: Mail },
        { name: "Content Marketing", icon: FileText }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Python (Basic)", icon: Code },
        { name: "SQL", icon: Database }
      ]
    }
  ]

  return (
    <section id="skills" ref={ref} className="section-padding">
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
            className="text-3xl sm:text-4xl font-bold text-gray-100 mb-12 text-center"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                className="bg-dark-700 rounded-lg p-6 border border-dark-600 hover:border-primary-400/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-100 mb-4">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center text-center p-3 bg-dark-600 rounded-lg hover:bg-primary-500/10 transition-colors group"
                      >
                        <IconComponent className="w-6 h-6 text-primary-400 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <div className="bg-dark-700 rounded-lg p-6 border border-dark-600">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Key Achievements
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">30%</div>
                  <div className="text-gray-400">CPC Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">200+</div>
                  <div className="text-gray-400">Campaigns Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">4+</div>
                  <div className="text-gray-400">Industries Covered</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 