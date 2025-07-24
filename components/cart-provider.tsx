"use client"

import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"

interface FavoriteItem {
  id: string
  name: string
  image: string
  rating: number
}

interface FavoritesState {
  items: FavoriteItem[]
}

type FavoritesAction =
  | { type: "ADD_FAVORITE"; payload: FavoriteItem }
  | { type: "REMOVE_FAVORITE"; payload: string }
  | { type: "CLEAR_FAVORITES" }

const FavoritesContext = createContext<{
  state: FavoritesState
  dispatch: React.Dispatch<FavoritesAction>
} | null>(null)

function favoritesReducer(state: FavoritesState, action: FavoritesAction): FavoritesState {
  switch (action.type) {
    case "ADD_FAVORITE":
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        return state
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case "REMOVE_FAVORITE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
    case "CLEAR_FAVORITES":
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(favoritesReducer, {
    items: [],
  })

  return <FavoritesContext.Provider value={{ state, dispatch }}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider")
  }
  return context
}
