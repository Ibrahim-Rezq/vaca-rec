"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/components/cart-provider"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function FavoritesButton() {
  const { state } = useFavorites()

  return (
    <Link href="/favorites">
      <Button
        variant="ghost"
        size="sm"
        className="relative glass hover:bg-white/20 dark:hover:bg-black/20 text-foreground hover:text-soft-blue-600 dark:hover:text-soft-blue-400"
      >
        <Heart className="w-4 h-4" />
        {state.items.length > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs bg-soft-blue-500 hover:bg-soft-blue-600 border-0"
          >
            {state.items.length}
          </Badge>
        )}
      </Button>
    </Link>
  )
}
