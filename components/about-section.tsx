"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Zap, Code, Lightbulb, Users } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-20 top-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          style={{ y, opacity }}
        />
        <motion.div
          className="absolute -left-40 bottom-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About the <span className="text-primary">Hackathon</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Join us for an exciting 24-hour journey of innovation and creativity. This global hackathon brings together developers, 
            designers, and creators from around the world to build amazing projects. Whether you're a seasoned developer or just 
            starting out, this is your opportunity to showcase your skills and connect with fellow innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <FeatureCard
              icon={<Lightbulb className="h-6 w-6 text-primary" />}
              title="Creative Freedom"
              description="Build anything you can imagine - web apps, mobile apps, games, art installations, or experimental projects. No limits on your creativity."
            />

            <FeatureCard
              icon={<Code className="h-6 w-6 text-primary" />}
              title="Global Collaboration"
              description="Connect with developers from around the world, form teams, and collaborate on groundbreaking projects regardless of your location."
            />

            <FeatureCard
              icon={<Users className="h-6 w-6 text-primary" />}
              title="Community Building"
              description="Join a vibrant community of like-minded builders, share knowledge, and make connections that last beyond the hackathon."
            />
          </div>

          <div className="relative flex">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="h-20 w-20 text-primary animate-pulse" />
                <span className="sr-only">Hackathon video placeholder</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold mb-1">Watch the Teaser</h3>
                <p className="text-sm text-gray-300">See what makes this hackathon special</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <motion.div
      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-primary transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start">
        <div className="mr-4 p-2 bg-gray-900/50 rounded-md">{icon}</div>
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
