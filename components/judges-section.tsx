"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function JudgesSection() {
  // Placeholder judges - in a real implementation, these would come from a CMS or API
  const judges: Judge[] = [
    {
      name: "Alex Johnson",
      role: "CTO at TechCorp",
      bio: "Alex has over 15 years of experience in software development and has been a judge at numerous hackathons worldwide. They specialize in AI and machine learning technologies.",
      image: "/images/judges/judge1.jpg",
    },
    {
      name: "Samantha Lee",
      role: "Founder of StartupHub",
      bio: "Samantha is a serial entrepreneur who has founded three successful tech startups. She is passionate about innovation and helping new founders bring their ideas to life.",
      image: "/images/judges/judge2.jpg",
    },
    {
      name: "Marcus Chen",
      role: "Lead Developer at CodeX",
      bio: "Marcus is an open source contributor and community leader who has built several popular developer tools. He focuses on developer experience and tooling innovation.",
      image: "/images/judges/judge3.jpg",
    },
    {
      name: "Priya Patel",
      role: "UX Director at DesignLabs",
      bio: "Priya has led design teams at several major tech companies and specializes in creating intuitive, accessible user experiences. She judges projects on both technical merit and design quality.",
      image: "/images/judges/judge4.jpg",
    },
  ]

  return (
    <section id="judges" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Our <span className="text-primary">Judges</span>
          </h2>
          <p className="text-lg text-gray-300">
            Our panel of industry experts will evaluate submissions based on creativity, technical complexity, design,
            and overall impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.name}
              className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={judge.image}
                  alt={judge.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{judge.name}</h3>
              <p className="text-primary font-medium mb-3">{judge.role}</p>
              <p className="text-gray-400 text-sm">{judge.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface Judge {
  name: string
  role: string
  bio: string
  image: string
}
