"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, RefreshCw, Star, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const questions = [
  {
    id: "budget",
    question: "ما هي ميزانيتك المفضلة للرحلة؟",
    type: "radio",
    options: [
      { value: "budget", label: "اقتصادية (أقل من 5000 ريال)" },
      { value: "mid", label: "متوسطة (5000 - 15000 ريال)" },
      { value: "luxury", label: "فاخرة (أكثر من 15000 ريال)" },
    ],
  },
  {
    id: "climate",
    question: "ما نوع المناخ الذي تفضله؟",
    type: "radio",
    options: [
      { value: "tropical", label: "استوائي دافئ" },
      { value: "temperate", label: "معتدل" },
      { value: "cold", label: "بارد ومنعش" },
      { value: "desert", label: "صحراوي جاف" },
    ],
  },
  {
    id: "activities",
    question: "ما نوع الأنشطة التي تستمتع بها؟",
    type: "select",
    options: [
      { value: "adventure", label: "مغامرات وأنشطة خارجية" },
      { value: "culture", label: "استكشاف الثقافة والتاريخ" },
      { value: "relaxation", label: "الاسترخاء والهدوء" },
      { value: "nightlife", label: "الحياة الليلية والترفيه" },
      { value: "nature", label: "الطبيعة والمناظر الخلابة" },
    ],
  },
  {
    id: "duration",
    question: "كم مدة الرحلة المفضلة لديك؟",
    type: "radio",
    options: [
      { value: "short", label: "قصيرة (2-4 أيام)" },
      { value: "medium", label: "متوسطة (5-7 أيام)" },
      { value: "long", label: "طويلة (أكثر من أسبوع)" },
    ],
  },
  {
    id: "companions",
    question: "مع من ستسافر؟",
    type: "select",
    options: [
      { value: "solo", label: "بمفردي" },
      { value: "couple", label: "مع الشريك" },
      { value: "family", label: "مع العائلة" },
      { value: "friends", label: "مع الأصدقاء" },
    ],
  },
]

const destinations = [
  {
    id: "1",
    name: "جزر المالديف",
    image: "/placeholder.svg?height=300&width=400&text=جزر+المالديف",
    description: "جنة استوائية بمياه صافية ومنتجعات فاخرة",
    rating: 4.9,
    tags: ["tropical", "luxury", "relaxation"],
  },
  {
    id: "2",
    name: "سانتوريني، اليونان",
    image: "/placeholder.svg?height=300&width=400&text=سانتوريني",
    description: "جزيرة رومانسية بمناظر خلابة وغروب ساحر",
    rating: 4.8,
    tags: ["temperate", "couple", "culture"],
  },
  {
    id: "3",
    name: "كيوتو، اليابان",
    image: "/placeholder.svg?height=300&width=400&text=كيوتو",
    description: "مدينة تاريخية بمعابد قديمة وثقافة عريقة",
    rating: 4.7,
    tags: ["temperate", "culture", "nature"],
  },
  {
    id: "4",
    name: "دبي، الإمارات",
    image: "/placeholder.svg?height=300&width=400&text=دبي",
    description: "مدينة المستقبل بناطحات سحاب وتسوق فاخر",
    rating: 4.6,
    tags: ["desert", "luxury", "nightlife"],
  },
  {
    id: "5",
    name: "بالي، إندونيسيا",
    image: "/placeholder.svg?height=300&width=400&text=بالي",
    description: "جزيرة الآلهة بطبيعة خلابة وثقافة روحانية",
    rating: 4.8,
    tags: ["tropical", "nature", "relaxation"],
  },
  {
    id: "6",
    name: "جبال الألب السويسرية",
    image: "/placeholder.svg?height=300&width=400&text=جبال+الألب",
    description: "قمم جبلية مغطاة بالثلوج ومناظر خلابة",
    rating: 4.9,
    tags: ["cold", "adventure", "nature"],
  },
]

export function AIRecommendationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSpinning, setIsSpinning] = useState(false)
  const [recommendations, setRecommendations] = useState<typeof destinations>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      generateRecommendations()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const generateRecommendations = () => {
    setIsSpinning(true)

    // Simulate AI processing
    setTimeout(() => {
      // Simple matching algorithm based on answers
      const matchedDestinations = destinations.filter((dest) => {
        const userPreferences = Object.values(answers)
        return dest.tags.some((tag) => userPreferences.includes(tag))
      })

      // Get top 2 recommendations or random if no matches
      const finalRecommendations =
        matchedDestinations.length >= 2 ? matchedDestinations.slice(0, 2) : destinations.slice(0, 2)

      setRecommendations(finalRecommendations)
      setIsSpinning(false)
      setShowResults(true)
    }, 3000)
  }

  const resetForm = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
    setRecommendations([])
  }

  const currentQuestion = questions[currentStep]
  const isLastStep = currentStep === questions.length - 1
  const canProceed = answers[currentQuestion?.id]

  if (showResults) {
    return (
      <section className="py-20 bg-gradient-to-br from-soft-blue-50/50 to-soft-beige-50/50 dark:from-soft-blue-900/10 dark:to-soft-beige-900/10">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 bg-soft-blue-100 text-soft-blue-800 dark:bg-soft-blue-900 dark:text-soft-blue-200"
            >
              <Sparkles className="w-4 h-4 ml-2" />
              توصياتك المخصصة
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">وجهاتك المثالية</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              بناءً على إجاباتك، اخترنا لك هذه الوجهات المميزة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {recommendations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-soft-blue-200 dark:border-soft-blue-800">
                  <div className="relative overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-soft-blue-500 text-white">توصية مخصصة</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-1 space-x-reverse glass px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-white">{destination.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-muted-foreground mb-4">{destination.description}</p>
                    <Link href={`/locations/${destination.id}`}>
                      <Button className="w-full soft-blue-gradient hover:opacity-90">
                        اكتشف هذه الوجهة
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Button onClick={resetForm} variant="outline" size="lg" className="bg-transparent">
              <RefreshCw className="w-5 h-5 ml-2" />
              جرب مرة أخرى
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-soft-blue-50/50 to-soft-beige-50/50 dark:from-soft-blue-900/10 dark:to-soft-beige-900/10">
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
            <Sparkles className="w-4 h-4 ml-2" />
            توصيات ذكية
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">اكتشف وجهتك المثالية</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            أجب على بعض الأسئلة البسيطة وسنقترح عليك أفضل الوجهات المناسبة لك
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {isSpinning ? (
              <motion.div
                key="spinning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="roulette-container mb-8">
                  <motion.div
                    animate={{ rotateY: 1440 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="roulette-card w-32 h-32 mx-auto"
                  >
                    <div className="w-full h-full bg-soft-blue-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-16 h-16 text-white" />
                    </div>
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-4">جاري البحث عن وجهاتك المثالية...</h3>
                <p className="text-muted-foreground">نحلل إجاباتك لنجد لك أفضل التوصيات</p>
              </motion.div>
            ) : (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="border-soft-blue-200 dark:border-soft-blue-800">
                  <CardContent className="p-8">
                    {/* Progress Bar */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">
                          السؤال {currentStep + 1} من {questions.length}
                        </span>
                        <span className="text-sm font-medium text-soft-blue-600 dark:text-soft-blue-400">
                          {Math.round(((currentStep + 1) / questions.length) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-soft-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* Question */}
                    <div className="mb-8">
                      <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">{currentQuestion.question}</h3>

                      {currentQuestion.type === "radio" ? (
                        <RadioGroup
                          value={answers[currentQuestion.id] || ""}
                          onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
                          className="space-y-4"
                        >
                          {currentQuestion.options.map((option) => (
                            <div key={option.value} className="flex items-center space-x-3 space-x-reverse">
                              <RadioGroupItem value={option.value} id={option.value} />
                              <Label
                                htmlFor={option.value}
                                className="flex-1 cursor-pointer p-4 rounded-lg border border-border hover:bg-soft-blue-50 dark:hover:bg-soft-blue-900/20 transition-colors"
                              >
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      ) : (
                        <Select
                          value={answers[currentQuestion.id] || ""}
                          onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
                        >
                          <SelectTrigger className="w-full h-14 text-lg">
                            <SelectValue placeholder="اختر إجابتك..." />
                          </SelectTrigger>
                          <SelectContent>
                            {currentQuestion.options.map((option) => (
                              <SelectItem key={option.value} value={option.value} className="text-lg py-3">
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="bg-transparent"
                      >
                        السابق
                      </Button>
                      <Button onClick={nextStep} disabled={!canProceed} className="soft-blue-gradient hover:opacity-90">
                        {isLastStep ? "احصل على التوصيات" : "التالي"}
                        {!isLastStep && <ArrowLeft className="w-4 h-4 mr-2" />}
                        {isLastStep && <Sparkles className="w-4 h-4 mr-2" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
