"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="sm" className="w-9 h-9 p-0 glass hover:bg-white/20 dark:hover:bg-black/20" />
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-9 h-9 p-0 glass hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200"
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? (
        <Moon className="h-4 w-4 text-soft-blue-600 dark:text-soft-blue-400" />
      ) : (
        <Sun className="h-4 w-4 text-soft-blue-600 dark:text-soft-blue-400" />
      )}
      <span className="sr-only">تبديل المظهر</span>
    </Button>
  )
}
