"use client"

import { motion } from "framer-motion"

export default function SponsorsSection() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="sponsors" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-40 top-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute -left-20 bottom-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"
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
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-primary">Sponsors</span>
          </h2>
          <p className="text-lg text-gray-300">
            The World's Largest Hackathon is made possible by these amazing companies. Interested in sponsoring?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>

        {/* Title Sponsor */}
        <motion.div 
          className="mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-8 text-center">Title Sponsor 🏆</h3>

          <motion.div
            variants={item}
            className="flex justify-center"
          >
            <div className="group relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-xl p-8 w-full max-w-md transition-all duration-300 ease-in-out hover:border-primary/50 hover:scale-[1.02]">
              <div className="h-20 flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Bolt
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Sponsors */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-8 text-center">Additional Sponsors</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "Vercel",
              "GitHub",
              "AWS",
              "MongoDB",
              "Supabase",
              "Stripe",
              "Cloudflare",
              "Figma",
              "Digital Ocean",
              "Auth0",
            ].map((sponsor, index) => (
              <motion.div
                key={sponsor}
                variants={item}
                className="group relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-xl p-4 transition-all duration-300 ease-in-out hover:border-primary/50 hover:scale-[1.02]"
              >
                <div className="text-center">
                  <span className="text-base font-semibold text-gray-400 group-hover:text-primary transition-colors">
                    {sponsor}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-4">Want to join these amazing sponsors?</p>
          <a
            href="#"
            className="inline-block bg-primary/20 hover:bg-primary/30 text-primary px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Download Sponsorship Deck
          </a>
        </div>
      </div>
    </section>
  )
}
