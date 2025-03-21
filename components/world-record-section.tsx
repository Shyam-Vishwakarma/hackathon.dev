"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function WorldRecordSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-1/4 top-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-1/4 top-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            World Record <span className="text-primary">Attempt</span>
          </h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're aiming to set the{" "}
            <span className="text-primary font-semibold">Guinness World Record</span>{" "}
            for the largest hackathon ever organized. With a goal of{" "}
            <span className="text-primary font-semibold">100,000+ participants</span>,
            <br className="hidden md:block" />
            we're making history together while building amazing projects.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
