"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Trophy, Award, Medal, Gift, Zap } from "lucide-react"

export default function PrizesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      id="prizes"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-20 top-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ y, opacity }}
        />
        <motion.div
          className="absolute -left-40 bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prize <span className="text-primary">Pool</span>
          </h2>

          <div className="relative inline-block">
            <Zap className="absolute -left-8 -top-4 h-12 w-12 text-primary animate-pulse" />
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent pb-2">
              $1,000,000
            </h3>
            <Zap className="absolute -right-8 -top-4 h-12 w-12 text-primary animate-pulse" />
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
            Compete for a share of our massive prize pool across multiple categories and special awards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PrizeCard
            icon={<Trophy className="h-10 w-10 text-yellow-400" />}
            title="Grand Prize"
            amount="$250,000"
            description="For the overall best project that demonstrates exceptional innovation, technical complexity, and real-world impact."
            color="from-yellow-400/20 to-yellow-600/20"
            borderColor="border-yellow-400/50"
            delay={0}
          />

          <PrizeCard
            icon={<Award className="h-10 w-10 text-gray-300" />}
            title="Runner Up"
            amount="$100,000"
            description="For the second-place project that shows outstanding creativity and technical excellence."
            color="from-gray-300/20 to-gray-500/20"
            borderColor="border-gray-300/50"
            delay={0.1}
          />

          <PrizeCard
            icon={<Medal className="h-10 w-10 text-amber-600" />}
            title="Third Place"
            amount="$50,000"
            description="For the third-place project that demonstrates remarkable innovation and execution."
            color="from-amber-600/20 to-amber-800/20"
            borderColor="border-amber-600/50"
            delay={0.2}
          />

          <PrizeCard
            icon={<Gift className="h-10 w-10 text-primary" />}
            title="Category Prizes"
            amount="$600,000"
            description="Split across multiple categories including Best AI, Best Web3, Best Mobile, Best Design, and more."
            color="from-primary/20 to-blue-600/20"
            borderColor="border-primary/50"
            delay={0.3}
          />
        </div>

        <div className="mt-16 p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Award className="h-6 w-6 text-primary mr-2" />
            Special Recognition Awards
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="font-bold text-lg mb-2">Most Innovative</h4>
              <p className="text-gray-400 text-sm">
                For the project that introduces a truly novel approach or solution.
              </p>
            </div>

            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="font-bold text-lg mb-2">Best Solo Hack</h4>
              <p className="text-gray-400 text-sm">For the most impressive project built by a single participant.</p>
            </div>

            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="font-bold text-lg mb-2">Community Choice</h4>
              <p className="text-gray-400 text-sm">Voted by the community for the most popular project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PrizeCard({ icon, title, amount, description, color, borderColor, delay }: any) {
  return (
    <motion.div
      className={`bg-gradient-to-br ${color} backdrop-blur-sm rounded-xl p-6 border ${borderColor} transition-all duration-300 hover:border-primary`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="mb-4 p-3 bg-gray-900/50 rounded-full inline-block">{icon}</div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-2xl font-extrabold text-primary mb-3">{amount}</p>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  )
}

