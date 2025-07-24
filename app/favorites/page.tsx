"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useFavorites } from "@/components/cart-provider"
import { Trash2, Heart, MapPin, Star, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FavoritesPage() {
  const { state, dispatch } = useFavorites()

  const removeFromFavorites = (id: string) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: id })
  }

  const clearFavorites = () => {
    dispatch({ type: "CLEAR_FAVORITES" })
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-16 h-16 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-4">لا توجد وجهات مفضلة</h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              لم تقم بإضافة أي وجهات إلى قائمة المفضلة بعد. استكشف وجهاتنا المميزة وأضف ما يعجبك
            </p>
            <Link href="/locations">
              <Button size="lg">
                استكشف الوجهات
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">الوجهات المفضلة</h1>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {state.items.length} وجهة
            </Badge>
          </div>
          <p className="text-muted-foreground text-lg">وجهاتك المحفوظة للمراجعة والمقارنة</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">الوجهات المحفوظة</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFavorites}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4 ml-2" />
                    مسح الكل
                  </Button>
                </div>

                <div className="space-y-6">
                  {state.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col md:flex-row gap-4 p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg?height=200&width=300&text=وجهة+سياحية"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                            <div className="flex items-center space-x-2 space-x-reverse mb-2">
                              <div className="flex items-center space-x-1 space-x-reverse">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{item.rating}</span>
                              </div>
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromFavorites(item.id)}
                            className="text-destructive hover:text-destructive p-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">وجهة سياحية مميزة</div>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Link href={`/locations/${item.id}`}>
                              <Button variant="outline" size="sm">
                                عرض التفاصيل
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">وجهات مقترحة أخرى</h3>
                <p className="text-sm text-muted-foreground mb-4">بناءً على اختياراتك، قد تعجبك هذه الوجهات أيضاً</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "جبال الألب",
                      image: "/placeholder.svg?height=100&width=150&text=جبال+الألب",
                    },
                    { name: "باريس", image: "/placeholder.svg?height=100&width=150&text=باريس" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={40}
                        className="rounded object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">وجهة سياحية مميزة</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Heart className="w-3 h-3 ml-1" />
                        إضافة
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
