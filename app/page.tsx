"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, TrendingUp, Sparkles, ArrowLeft, Heart, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AIRecommendationForm } from "@/components/ai-recommendation-form"
import { ContactSection } from "@/components/contact-section"

const featuredDestinations = [
  {
    id: "1",
    name: "جزر المالديف",
    image: "/placeholder.svg?height=300&width=400&text=جزر+المالديف",
    rating: 4.9,
    reviews: 1250,
    category: "شواطئ",
  },
  {
    id: "2",
    name: "سانتوريني، اليونان",
    image: "/placeholder.svg?height=300&width=400&text=سانتوريني",
    rating: 4.8,
    reviews: 980,
    category: "جزر",
  },
  {
    id: "3",
    name: "كيوتو، اليابان",
    image: "/placeholder.svg?height=300&width=400&text=كيوتو",
    rating: 4.7,
    reviews: 756,
    category: "ثقافة",
  },
]

const trendingDestinations = [
  {
    id: "4",
    name: "دبي، الإمارات",
    image: "/placeholder.svg?height=200&width=300&text=دبي",
    rating: 4.6,
    trend: "+15%",
  },
  {
    id: "5",
    name: "بالي، إندونيسيا",
    image: "/placeholder.svg?height=200&width=300&text=بالي",
    rating: 4.8,
    trend: "+22%",
  },
  {
    id: "6",
    name: "إسطنبول، تركيا",
    image: "/placeholder.svg?height=200&width=300&text=إسطنبول",
    rating: 4.5,
    trend: "+8%",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-10 right-10 w-32 h-32 bg-soft-blue-200 dark:bg-soft-blue-800 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 left-16 w-40 h-40 bg-soft-beige-200 dark:bg-soft-beige-800 rounded-full blur-3xl"
          />
        </div>

        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <Badge
                variant="secondary"
                className="mb-4 text-sm px-4 py-2 bg-soft-blue-100 text-soft-blue-800 dark:bg-soft-blue-900 dark:text-soft-blue-200"
              >
                <Sparkles className="w-4 h-4 ml-2" />
                اكتشف وجهتك المثالية
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              رحلتك القادمة
              <br />
              <span className="bg-gradient-to-r from-soft-blue-600 to-soft-blue-400 bg-clip-text text-transparent">
                تبدأ من هنا
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              اكتشف أجمل الوجهات السياحية حول العالم مع توصياتنا المخصصة والمدعومة بالذكاء الاصطناعي
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/locations">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 rounded-full soft-blue-gradient hover:opacity-90 soft-blue-glow"
                  >
                    استكشف الوجهات
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full bg-transparent border-soft-blue-300 text-soft-blue-700 hover:bg-soft-blue-50 dark:border-soft-blue-700 dark:text-soft-blue-300 dark:hover:bg-soft-blue-900/20"
                >
                  <Play className="w-5 h-5 ml-2" />
                  شاهد الجولة
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements with enhanced animations */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-soft-blue-300 to-soft-blue-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-soft-beige-300 to-soft-beige-500 rounded-full opacity-15"
        />
      </section>

      {/* Featured Recommendations */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="mb-4 border-soft-blue-300 text-soft-blue-700 dark:border-soft-blue-700 dark:text-soft-blue-300"
            >
              <Heart className="w-4 h-4 ml-2" />
              توصياتنا المميزة
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">وجهات لا تُنسى</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              مجموعة مختارة من أجمل الوجهات السياحية التي ستترك أثراً لا يُمحى في ذاكرتك
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 glass">
                  <div className="relative overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="glass bg-soft-blue-100 text-soft-blue-800 dark:bg-soft-blue-900 dark:text-soft-blue-200"
                      >
                        {destination.category}
                      </Badge>
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
                    <p className="text-muted-foreground text-sm mb-4">وجهة سياحية مميزة تستحق الزيارة</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{destination.rating}</span>
                        <span className="text-xs text-muted-foreground">({destination.reviews})</span>
                      </div>
                      <Link href={`/locations/${destination.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-soft-blue-600 hover:text-soft-blue-700 dark:text-soft-blue-400 dark:hover:text-soft-blue-300"
                        >
                          عرض التفاصيل
                          <ArrowLeft className="w-4 h-4 mr-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/locations">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-soft-blue-300 text-soft-blue-700 hover:bg-soft-blue-50 dark:border-soft-blue-700 dark:text-soft-blue-300 dark:hover:bg-soft-blue-900/20"
              >
                عرض جميع الوجهات
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="mb-4 border-soft-blue-300 text-soft-blue-700 dark:border-soft-blue-700 dark:text-soft-blue-300"
            >
              <TrendingUp className="w-4 h-4 ml-2" />
              الأكثر رواجاً
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">وجهات في المقدمة</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              الوجهات الأكثر شعبية هذا الموسم والتي يختارها المسافرون حول العالم
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {trendingDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-soft-blue-100 dark:border-soft-blue-900/50">
                  <div className="relative">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="text-xs bg-soft-blue-500 text-white">{destination.trend}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">{destination.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{destination.rating}</span>
                      </div>
                      <Link href={`/locations/${destination.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-soft-blue-600 hover:text-soft-blue-700 dark:text-soft-blue-400 dark:hover:text-soft-blue-300"
                        >
                          استكشف
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Recommendations Form */}
      <AIRecommendationForm />

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-soft-blue-600 to-soft-blue-500 text-white">
        <div className="container px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ رحلتك اليوم</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              انضم إلى آلاف المسافرين الذين اكتشفوا وجهاتهم المثالية معنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/locations">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 bg-white text-soft-blue-600 hover:bg-white/90"
                  >
                    استكشف الوجهات
                    <MapPin className="w-5 h-5 mr-2" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-soft-blue-600 bg-transparent"
                  >
                    إنشاء حساب
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
