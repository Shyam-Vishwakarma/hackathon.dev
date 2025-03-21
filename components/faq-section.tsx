"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FAQSection() {
  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer:
        "Anyone can participate! Whether you're a seasoned developer, designer, or just starting your coding journey, this hackathon is open to all skill levels and backgrounds. You can participate individually or form a team of up to 4 people.",
    },
    {
      question: "Is there an entry fee?",
      answer:
        "No, participation in The World's Largest Hackathon is completely free. We want to make this event accessible to everyone who wants to build and innovate.",
    },
    {
      question: "Do I need to have a team?",
      answer:
        "No, you can participate solo or as part of a team. If you're looking for teammates, we'll have a dedicated channel for team formation before the event starts.",
    },
    {
      question: "What kind of projects can I build?",
      answer:
        "You have complete creative freedom! You can build web apps, mobile apps, games, AI tools, hardware projects, or anything else you can imagine. The only requirement is that your project must be created during the hackathon period.",
    },
    {
      question: "How will projects be judged?",
      answer:
        "Projects will be evaluated based on innovation, technical complexity, design/user experience, and potential impact. Our panel of industry experts will review all submissions to determine the winners.",
    },
    {
      question: "Will there be mentors or support available?",
      answer:
        "Yes! We'll have mentors from various tech companies available throughout the hackathon to provide guidance, answer questions, and help you overcome challenges.",
    },
    {
      question: "What happens after I submit my project?",
      answer:
        "After submissions close, our judges will review all projects. Finalists will be announced within a week, followed by a live awards ceremony where winners will be revealed.",
    },
    {
      question: "Do I retain ownership of my project?",
      answer:
        "You retain full ownership of your intellectual property. We only ask for permission to showcase your project on our website and social media channels.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-300">Everything you need to know about The World's Largest Hackathon.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <a
              href="#"
              className="inline-flex items-center bg-primary/20 hover:bg-primary/30 text-primary px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border border-gray-700 rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button className="w-full p-6 flex justify-between items-center text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium">{question}</h3>
        <ChevronDown
          className={cn("h-5 w-5 text-primary transition-transform duration-300", isOpen ? "rotate-180" : "")}
        />
      </button>

      <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96 p-6 pt-0" : "max-h-0")}>
        <p className="text-gray-400">{answer}</p>
      </div>
    </motion.div>
  )
}

