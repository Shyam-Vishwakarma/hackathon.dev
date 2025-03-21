"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = (Math.random() - 0.5) * 2
        this.color = `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
          Math.random() * 100 + 155,
        )}, 255, ${Math.random() * 0.5 + 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function initParticles() {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function connectParticles() {
      if (!ctx) return
      const maxDistance = 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.5})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="relative inline-block mb-6">
          <Zap className="text-primary absolute -left-8 -top-8 h-16 w-16 animate-pulse" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="block">The World's</span>
            <span className="text-primary animate-pulse">Largest</span>
            <span className="block">Hackathon</span>
          </h1>
          <Zap className="text-primary absolute -right-8 -bottom-8 h-16 w-16 animate-pulse" />
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Join 100,000+ builders to create, innovate, and set a world record in the most epic hackathon ever organized.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-black text-lg px-8 py-6 font-bold group">
            Register Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector("#about")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Learn More
          </Button>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a
            href="#event"
            className="text-gray-400 hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector("#event")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  )
}

