import { motion } from 'framer-motion'

interface CursorBlobProps {
  mousePosition: { x: number; y: number }
}

const CursorBlob = ({ mousePosition }: CursorBlobProps) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl pointer-events-none z-0"
      animate={{
        x: mousePosition.x - 192,
        y: mousePosition.y - 192,
      }}
      transition={{
        type: "spring",
        mass: 0.6,
        stiffness: 100,
        damping: 20,
      }}
    />
  )
}

export default CursorBlob 