"use client"

import type React from "react"
import Link from "next/link"
import { Twitter, GitlabIcon as GitHub, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              <span className="text-primary">Hack</span>
              <span className="text-white">athon</span>
              <span className="text-primary">.</span>
              <span className="text-white">dev</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Join 100,000+ builders to create, innovate, and set a world record in the most epic hackathon ever
              organized.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<GitHub className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Mail className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#event">Event Info</FooterLink>
              <FooterLink href="#prizes">Prizes</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#submit">Submit</FooterLink>
              <FooterLink href="#sponsors">Sponsors</FooterLink>
              <FooterLink href="#judges">Judges</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Rules</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The World's Largest Hackathon. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-primary mx-1" /> by the Hackathon Team
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors duration-300"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-primary transition-colors duration-300" onClick={handleClick}>
        {children}
      </a>
    </li>
  )
}

