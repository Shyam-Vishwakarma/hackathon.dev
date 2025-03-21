"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-primary">Hack</span>
          <span className="text-white">athon</span>
          <span className="text-primary">.</span>
          <span className="text-white">dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#" 
            className="text-white hover:text-primary transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ 
                top: 0, 
                behavior: 'smooth'
              });
            }}
          >
            Home
          </Link>
          <NavLinks />
          <Button className="bg-primary hover:bg-primary/90 text-black font-bold">Register Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col gap-4">
            <Link 
              href="#" 
              className="text-white hover:text-primary transition-colors duration-300 text-xl py-2"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ 
                  top: 0, 
                  behavior: 'smooth'
                });
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
            <Button className="bg-primary hover:bg-primary/90 text-black font-bold w-full">Register Now</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLinks({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (onClick) onClick();
    }
  };

  return (
    <>
      <Link
        href="#about"
        className={cn(
          "text-white hover:text-primary transition-colors duration-300",
          mobile && "text-xl py-2"
        )}
        onClick={(e) => handleClick(e, "#about")}
      >
        About
      </Link>
      <Link
        href="#event"
        className={cn(
          "text-white hover:text-primary transition-colors duration-300",
          mobile && "text-xl py-2"
        )}
        onClick={(e) => handleClick(e, "#event")}
      >
        Event
      </Link>
      <Link
        href="#prizes"
        className={cn(
          "text-white hover:text-primary transition-colors duration-300",
          mobile && "text-xl py-2"
        )}
        onClick={(e) => handleClick(e, "#prizes")}
      >
        Prizes
      </Link>
      <Link
        href="#sponsors"
        className={cn(
          "text-white hover:text-primary transition-colors duration-300",
          mobile && "text-xl py-2"
        )}
        onClick={(e) => handleClick(e, "#sponsors")}
      >
        Sponsors
      </Link>
      <Link
        href="#judges"
        className={cn(
          "text-white hover:text-primary transition-colors duration-300",
          mobile && "text-xl py-2"
        )}
        onClick={(e) => handleClick(e, "#judges")}
      >
        Judges
      </Link>
      <Link
        href="#faq"
        className={cn(
          "text-white hover:text-primary transition-colors duration-300",
          mobile && "text-xl py-2"
        )}
        onClick={(e) => handleClick(e, "#faq")}
      >
        FAQ
      </Link>
    </>
  )
}
