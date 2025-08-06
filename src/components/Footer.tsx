import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gradient">
              Megha Aggerwal
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Performance Marketing Specialist with expertise in programmatic advertising, 
              CRM tools, and multichannel optimization.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-100">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-100">Contact</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:meghaggerwal5396@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>meghaggerwal5396@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+919953016285"
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors text-sm"
              >
                <Phone size={16} />
                <span>+91 9953016285</span>
              </motion.a>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={16} />
                <span>Vasundhara, Ghaziabad</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm">
            © 2024 Megha Aggerwal. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <motion.a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-400/20 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-slate-400 hover:text-green-400" />
            </motion.a>
            <motion.a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-400/20 transition-colors"
            >
              <Github className="w-4 h-4 text-slate-400 hover:text-green-400" />
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-400/20 transition-colors"
            >
              <ArrowUp className="w-4 h-4 text-slate-400 hover:text-green-400" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 