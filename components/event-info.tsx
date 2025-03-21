"use client"
import { Calendar, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function EventInfo() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section id="event" className="py-20 bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Event <span className="text-primary">Details</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <EventCard
            icon={<MapPin className="h-10 w-10 text-primary" />}
            title="Location"
            description="Virtual - Global Participation"
            variants={item}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
          />

          <EventCard
            icon={<Calendar className="h-10 w-10 text-primary" />}
            title="Date"
            description="Coming Soon"
            variants={item}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
          />

          <EventCard
            icon={<Clock className="h-10 w-10 text-primary" />}
            title="Duration"
            description="24 Hours of Building"
            variants={item}
            className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  )
}

function EventCard({ icon, title, description, variants, className }: any) {
  return (
    <motion.div
      variants={variants}
      className={className}
    >
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}
