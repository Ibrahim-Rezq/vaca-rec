"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Star, Heart, Share2, Camera, ArrowLeft, MessageCircle, ThumbsUp, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useFavorites } from "@/components/cart-provider"
import dynamic from "next/dynamic"

// Dynamically import map component to avoid SSR issues
const LocationMap = dynamic(() => import("@/components/location-map"), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-muted rounded-lg animate-pulse" />,
})

const destination = {
  id: "1",
  name: "جزر المالديف",
  images: [
    "/placeholder.svg?height=600&width=800&text=جزر+المالديف+1",
    "/placeholder.svg?height=600&width=800&text=جزر+المالديف+2",
    "/placeholder.svg?height=600&width=800&text=جزر+المالديف+3",
    "/placeholder.svg?height=600&width=800&text=جزر+المالديف+4",
  ],
  rating: 4.9,
  reviews: 1250,
  category: "شواطئ",
  region: "آسيا",
  coordinates: [3.2028, 73.2207],
  description: `جزر المالديف هي جنة استوائية تقع في المحيط الهندي، تتكون من 1192 جزيرة مرجانية موزعة على 26 جزيرة مرجانية. تشتهر بمياهها الصافية الزرقاء الفيروزية، والشواطئ الرملية البيضاء النقية، والحياة البحرية المتنوعة.

تعتبر المالديف وجهة مثالية لقضاء شهر العسل والاسترخاء، حيث توفر منتجعات فاخرة مع فيلات مائية خاصة. يمكن للزوار الاستمتاع بالغطس والغوص لاستكشاف الشعاب المرجانية الملونة، أو ببساطة الاسترخاء على الشاطئ والاستمتاع بالمناظر الخلابة.

المناخ استوائي دافئ على مدار السنة، مما يجعلها وجهة مثالية في أي وقت. أفضل وقت للزيارة هو من نوفمبر إلى أبريل عندما يكون الطقس جافاً ومشمساً.`,
  highlights: [
    "شواطئ رملية بيضاء نقية",
    "مياه صافية فيروزية اللون",
    "فيلات مائية فاخرة",
    "غطس وغوص مميز",
    "حياة بحرية متنوعة",
    "منتجعات عالمية المستوى",
  ],
  activities: ["الغطس والغوص", "رحلات الدولفين", "صيد الأسماك", "رياضات مائية", "جلسات سبا", "رحلات غروب الشمس"],
  bestTime: "نوفمبر - أبريل",
  duration: "5-7 أيام",
  difficulty: "سهل",
}

const reviews = [
  {
    id: "1",
    user: "أحمد محمد",
    rating: 5,
    date: "2024-01-15",
    comment: "تجربة لا تُنسى! المناظر خلابة والخدمة ممتازة. أنصح بشدة بزيارة هذا المكان الرائع.",
    likes: 12,
  },
  {
    id: "2",
    user: "فاطمة علي",
    rating: 5,
    date: "2024-01-10",
    comment: "جنة على الأرض! قضيت أجمل أسبوع في حياتي هناك. المياه صافية والشواطئ نظيفة.",
    likes: 8,
  },
  {
    id: "3",
    user: "خالد السعيد",
    rating: 4,
    date: "2024-01-05",
    comment: "مكان رائع للاسترخاء والهدوء. الفيلات المائية تجربة فريدة من نوعها.",
    likes: 15,
  },
]

export default function LocationDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [newReview, setNewReview] = useState("")
  const [userRating, setUserRating] = useState(0)
  const { dispatch } = useFavorites()

  const addToFavorites = () => {
    dispatch({
      type: "ADD_FAVORITE",
      payload: {
        id: destination.id,
        name: destination.name,
        image: destination.images[0],
        rating: destination.rating,
      },
    })
  }

  return (
    <div className="min-h-screen">
      {/* Image Gallery */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={destination.images[currentImageIndex] || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Image Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
            {destination.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2 space-x-reverse">
            <Button variant="secondary" size="sm" className="glass">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="sm" className="glass">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="sm" className="glass">
              <Camera className="w-4 h-4" />
            </Button>
          </div>

          {/* Back Button */}
          <div className="absolute top-4 left-4">
            <Link href="/locations">
              <Button variant="secondary" size="sm" className="glass">
                <ArrowLeft className="w-4 h-4 ml-2" />
                العودة
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <Badge variant="secondary">{destination.category}</Badge>
                    <Badge variant="outline">{destination.region}</Badge>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{destination.name}</h1>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{destination.rating}</span>
                      <span className="text-muted-foreground">({destination.reviews} مراجعة)</span>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.region}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">عن هذه الوجهة</h2>
                  <div className="prose prose-gray max-w-none">
                    {destination.description.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Highlights & Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">المميزات الرئيسية</h3>
                  <ul className="space-y-2">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">الأنشطة المتاحة</h3>
                  <ul className="space-y-2">
                    {destination.activities.map((activity, index) => (
                      <li key={index} className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">الموقع على الخريطة</h3>
                  <LocationMap coordinates={destination.coordinates} name={destination.name} />
                </CardContent>
              </Card>
            </motion.div>

            {/* Reviews */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-6">المراجعات والتقييمات</h3>

                  {/* Add Review */}
                  <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-3">أضف مراجعتك</h4>
                    <div className="flex items-center space-x-2 space-x-reverse mb-3">
                      <span className="text-sm">التقييم:</span>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} onClick={() => setUserRating(star)} className="transition-colors">
                          <Star
                            className={`w-5 h-5 ${
                              star <= userRating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <Textarea
                      placeholder="شاركنا تجربتك مع هذه الوجهة..."
                      value={newReview}
                      onChange={(e) => setNewReview(e.target.value)}
                      className="mb-3"
                    />
                    <Button size="sm">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      إضافة مراجعة
                    </Button>
                  </div>

                  <Separator className="mb-6" />

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center space-x-2 space-x-reverse mb-1">
                              <span className="font-semibold">{review.user}</span>
                              <div className="flex items-center space-x-1 space-x-reverse">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString("ar-SA")}
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3 leading-relaxed">{review.comment}</p>
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="w-4 h-4 ml-1" />
                            مفيد ({review.likes})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="w-4 h-4 ml-1" />
                            رد
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">احجز رحلتك</h3>
                    <p className="text-muted-foreground">اختر منصة الحجز المفضلة لديك</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">أفضل وقت للزيارة</span>
                      <span className="font-medium">{destination.bestTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">المدة المقترحة</span>
                      <span className="font-medium">{destination.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">مستوى الصعوبة</span>
                      <span className="font-medium">{destination.difficulty}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" asChild>
                      <a href="https://booking.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 ml-2" />
                        احجز عبر Booking.com
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="lg" asChild>
                      <a href="https://expedia.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 ml-2" />
                        احجز عبر Expedia
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full" size="lg" onClick={addToFavorites}>
                      <Heart className="w-5 h-5 ml-2" />
                      إضافة للمفضلة
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>منصة توصيات سياحية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">معلومات سريعة</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">التقييم العام</span>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{destination.rating}/5</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">عدد المراجعات</span>
                      <span className="font-medium">{destination.reviews}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">الفئة</span>
                      <span className="font-medium">{destination.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">المنطقة</span>
                      <span className="font-medium">{destination.region}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
