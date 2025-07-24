"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { FavoritesButton } from "@/components/cart-button"
import { MapPin, Home, Info, FileText, Menu, X, User } from "lucide-react"

const navItems = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/locations", label: "الوجهات", icon: MapPin },
  { href: "/about", label: "عن المنصة", icon: Info },
  { href: "/policies", label: "السياسات", icon: FileText },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg" : "glass"
        } rounded-2xl border border-white/20 dark:border-white/10`}
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-br from-soft-blue-500 to-soft-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-foreground">سياحة</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 space-x-reverse">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-soft-blue-500 text-white shadow-sm"
                        : "hover:bg-white/10 dark:hover:bg-black/10 text-foreground hover:text-soft-blue-600 dark:hover:text-soft-blue-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 space-x-reverse">
              <FavoritesButton />
              <ThemeToggle />
              <Link href="/auth/signin">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex glass hover:bg-white/20 dark:hover:bg-black/20 text-foreground hover:text-soft-blue-600 dark:hover:text-soft-blue-400"
                >
                  <User className="w-4 h-4 ml-2" />
                  تسجيل الدخول
                </Button>
              </Link>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden glass hover:bg-white/20 dark:hover:bg-black/20"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden glass-strong rounded-2xl p-4 border border-white/20 dark:border-white/10 shadow-lg"
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 space-x-reverse p-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-soft-blue-500 text-white shadow-sm"
                        : "hover:bg-white/10 dark:hover:bg-black/10 text-foreground hover:text-soft-blue-600 dark:hover:text-soft-blue-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
              <div className="border-t border-white/20 dark:border-white/10 pt-2 mt-2">
                <Link
                  href="/auth/signin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-200 text-foreground hover:text-soft-blue-600 dark:hover:text-soft-blue-400"
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">تسجيل الدخول</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
