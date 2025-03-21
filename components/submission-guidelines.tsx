"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Twitter, Upload, Video, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SubmissionGuidelines() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Create Your Project",
      description: "Build anything you want - a web app, mobile app, game, or creative project.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Upload to Bolt",
      description: "Upload your project to Bolt and get a shareable URL.",
      icon: <Upload className="h-6 w-6" />,
    },
    {
      title: "Record a Demo",
      description: "Create a short video demonstrating your project's functionality.",
      icon: <Video className="h-6 w-6" />,
    },
    {
      title: "Share on Twitter",
      description: "Quote tweet the official post with your Bolt URL and demo video.",
      icon: <Twitter className="h-6 w-6" />,
    },
  ]

  return (
    <section id="submit" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Submission <span className="text-primary">Guidelines</span>
          </h2>
          <p className="text-lg text-gray-300">
            Follow these simple steps to submit your project and be part of the world's largest hackathon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="space-y-6 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-700" />

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start relative ${activeStep >= index ? "opacity-100" : "opacity-50"}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: activeStep >= index ? 1 : 0.5, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      activeStep >= index ? "bg-primary text-black" : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {activeStep > index ? <Check className="h-6 w-6" /> : step.icon}
                  </div>
                  <div className="ml-4 pt-1">
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pl-16">
              <Button
                className="bg-primary hover:bg-primary/90 text-black font-medium"
                onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))}
                disabled={activeStep === steps.length - 1}
              >
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Submission Requirements</h3>

            <ul className="space-y-4">
              <RequirementItem>Your project must be created during the hackathon period</RequirementItem>
              <RequirementItem>All submissions must include a working demo</RequirementItem>
              <RequirementItem>Your tweet must include the official hashtag #WorldsLargestHackathon</RequirementItem>
              <RequirementItem>Projects can be built individually or in teams of up to 4 people</RequirementItem>
              <RequirementItem>
                All code must be original or properly attributed if using open source components
              </RequirementItem>
            </ul>

            <div className="mt-8 p-4 bg-gray-900/50 rounded-md border border-gray-700">
              <h4 className="text-sm font-bold uppercase text-gray-400 mb-2">Pro Tip</h4>
              <p className="text-sm text-gray-300">
                Make your demo video short and impactful. Focus on showing what your project does and why it's
                innovative. Aim for 2-3 minutes maximum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RequirementItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
        <Check className="h-3.5 w-3.5 text-primary" />
      </div>
      <span className="ml-3 text-gray-300">{children}</span>
    </li>
  )
}

function Code(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

