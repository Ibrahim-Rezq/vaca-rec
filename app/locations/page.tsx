"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Star, Search, Grid, List, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const destinations = [
  {
    id: "1",
    name: "جزر المالديف",
    image: "/placeholder.svg?height=300&width=400&text=جزر+المالديف",
    rating: 4.9,
    reviews: 1250,
    category: "شواطئ",
    region: "آسيا",
    description: "جنة استوائية بمياه صافية ورمال بيضاء",
  },
  {
    id: "2",
    name: "سانتوريني، اليونان",
    image: "/placeholder.svg?height=300&width=400&text=سانتوريني",
    rating: 4.8,
    reviews: 980,
    category: "جزر",
    region: "أوروبا",
    description: "جزيرة رومانسية بمناظر خلابة وغروب ساحر",
  },
  {
    id: "3",
    name: "كيوتو، اليابان",
    image: "/placeholder.svg?height=300&width=400&text=كيوتو",
    rating: 4.7,
    reviews: 756,
    category: "ثقافة",
    region: "آسيا",
    description: "مدينة تاريخية بمعابد قديمة وحدائق زهور الكرز",
  },
  {
    id: "4",
    name: "دبي، الإمارات",
    image: "/placeholder.svg?height=300&width=400&text=دبي",
    rating: 4.6,
    reviews: 1100,
    category: "مدن",
    region: "الشرق الأوسط",
    description: "مدينة المستقبل بناطحات سحاب وتسوق فاخر",
  },
  {
    id: "5",
    name: "بالي، إندونيسيا",
    image: "/placeholder.svg?height=300&width=400&text=بالي",
    rating: 4.8,
    reviews: 890,
    category: "طبيعة",
    region: "آسيا",
    description: "جزيرة الآلهة بمدرجات الأرز والشواطئ الذهبية",
  },
  {
    id: "6",
    name: "إسطنبول، تركيا",
    image: "/placeholder.svg?height=300&width=400&text=إسطنبول",
    rating: 4.5,
    reviews: 670,
    category: "ثقافة",
    region: "أوروبا",
    description: "مدينة تجمع بين الشرق والغرب بتاريخ عريق",
  },
  {
    id: "7",
    name: "جبال الألب السويسرية",
    image: "/placeholder.svg?height=300&width=400&text=جبال+الألب",
    rating: 4.9,
    reviews: 540,
    category: "جبال",
    region: "أوروبا",
    description: "قمم جبلية مغطاة بالثلوج ومناظر خلابة",
  },
  {
    id: "8",
    name: "باريس، فرنسا",
    image: "/placeholder.svg?height=300&width=400&text=باريس",
    rating: 4.7,
    reviews: 1500,
    category: "مدن",
    region: "أوروبا",
    description: "مدينة النور والحب بمعالم تاريخية رائعة",
  },
]

const categories = ["الكل", "شواطئ", "جزر", "ثقافة", "مدن", "طبيعة", "جبال"]
const regions = ["الكل", "آسيا", "أوروبا", "الشرق الأوسط"]

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [selectedRegion, setSelectedRegion] = useState("الكل")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("rating")

  const filteredDestinations = useMemo(() => {
    const filtered = destinations.filter((destination) => {
      const matchesSearch =
        destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "الكل" || destination.category === selectedCategory
      const matchesRegion = selectedRegion === "الكل" || destination.region === selectedRegion

      return matchesSearch && matchesCategory && matchesRegion
    })

    // Sort destinations
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, selectedRegion, sortBy])

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">استكشف الوجهات</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من الوجهات السياحية المميزة حول العالم
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-6 glass">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 items-end">
              <div className="lg:col-span-2">
                <label className="text-sm font-medium mb-2 block">البحث</label>
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="ابحث عن وجهة..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">الفئة</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">المنطقة</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
        >
          <div className="flex items-center space-x-4 space-x-reverse">
            <span className="text-sm text-muted-foreground">{filteredDestinations.length} وجهة</span>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-sm text-muted-foreground">ترتيب حسب:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">التقييم</SelectItem>
                <SelectItem value="reviews">عدد المراجعات</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMode}-${filteredDestinations.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {viewMode === "grid" ? (
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="glass">
                          {destination.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Button variant="ghost" size="sm" className="glass p-2">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center space-x-1 space-x-reverse glass px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium text-white">{destination.rating}</span>
                          <span className="text-xs text-white/80">({destination.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{destination.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{destination.rating}</span>
                          <span className="text-xs text-muted-foreground">({destination.reviews})</span>
                        </div>
                        <Link href={`/locations/${destination.id}`}>
                          <Button variant="ghost" size="sm">
                            عرض التفاصيل
                            <ArrowLeft className="w-4 h-4 mr-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
                        <Image
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          width={320}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="glass">
                            {destination.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="flex-1 p-6">
                        <div className="flex flex-col h-full">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                              <div className="flex items-center space-x-2 space-x-reverse mb-2">
                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{destination.region}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="p-2">
                              <Heart className="w-4 h-4" />
                            </Button>
                          </div>

                          <p className="text-muted-foreground mb-4 flex-1">{destination.description}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 space-x-reverse">
                              <div className="flex items-center space-x-1 space-x-reverse">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">{destination.rating}</span>
                                <span className="text-muted-foreground text-sm">({destination.reviews} مراجعة)</span>
                              </div>
                              <Badge variant="secondary">{destination.category}</Badge>
                            </div>
                            <Link href={`/locations/${destination.id}`}>
                              <Button>
                                عرض التفاصيل
                                <ArrowLeft className="w-4 h-4 mr-2" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">لا توجد نتائج</h3>
            <p className="text-muted-foreground mb-4">لم نجد وجهات تطابق معايير البحث الخاصة بك</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("الكل")
                setSelectedRegion("الكل")
              }}
            >
              إعادة تعيين الفلاتر
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
