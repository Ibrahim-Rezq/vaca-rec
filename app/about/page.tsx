"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Users,
  Award,
  Globe,
  Heart,
  Sparkles,
  Shield,
  Clock,
  Star,
  TrendingUp,
  Camera,
  Compass,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { icon: MapPin, label: "وجهة سياحية", value: "500+" },
  { icon: Users, label: "مسافر سعيد", value: "50,000+" },
  { icon: Award, label: "جائزة تميز", value: "25+" },
  { icon: Globe, label: "دولة", value: "80+" },
]

const features = [
  {
    icon: Sparkles,
    title: "توصيات ذكية",
    description: "نستخدم الذكاء الاصطناعي لتقديم توصيات مخصصة تناسب تفضيلاتك وأسلوب سفرك",
  },
  {
    icon: Shield,
    title: "حجز آمن",
    description: "نضمن لك تجربة حجز آمنة ومحمية مع إمكانية الإلغاء المجاني",
  },
  {
    icon: Clock,
    title: "دعم على مدار الساعة",
    description: "فريق الدعم متاح 24/7 لمساعدتك في أي استفسار أو مشكلة",
  },
  {
    icon: Heart,
    title: "تجارب لا تُنسى",
    description: "نختار لك أفضل الوجهات والتجارب التي ستترك أثراً جميلاً في ذاكرتك",
  },
]

const team = [
  {
    name: "أحمد محمد",
    role: "المؤسس والرئيس التنفيذي",
    image: "/placeholder.svg?height=200&width=200&text=أحمد+محمد",
    description: "خبير في السياحة لأكثر من 15 عاماً",
  },
  {
    name: "فاطمة علي",
    role: "مديرة التطوير",
    image: "/placeholder.svg?height=200&width=200&text=فاطمة+علي",
    description: "متخصصة في تطوير المنصات الرقمية",
  },
  {
    name: "خالد السعيد",
    role: "مدير المحتوى",
    image: "/placeholder.svg?height=200&width=200&text=خالد+السعيد",
    description: "كاتب ومصور سفر محترف",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 ml-2" />
              عن منصتنا
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              نحن هنا لنجعل
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                رحلاتك استثنائية
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              منصة سياحية عربية رائدة تهدف إلى تقديم أفضل التوصيات السياحية المخصصة لكل مسافر، مع الاستفادة من أحدث
              تقنيات الذكاء الاصطناعي
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Badge variant="outline" className="mb-4">
                <Compass className="w-4 h-4 ml-2" />
                قصتنا
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">رحلة بدأت بحلم</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  بدأت فكرة منصتنا من شغف حقيقي بالسفر والاستكشاف. لاحظنا أن المسافرين العرب يواجهون صعوبة في العثور على
                  معلومات موثوقة ومخصصة باللغة العربية حول الوجهات السياحية.
                </p>
                <p>
                  قررنا إنشاء منصة تجمع بين الخبرة البشرية والذكاء الاصطناعي لتقديم توصيات دقيقة ومخصصة لكل مسافر، مع
                  التركيز على الجودة والموثوقية.
                </p>
                <p>اليوم، نفخر بخدمة آلاف المسافرين وتقديم تجارب سفر لا تُنسى في أكثر من 80 دولة حول العالم.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=قصة+المنصة"
                  alt="قصة المنصة"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-15"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Star className="w-4 h-4 ml-2" />
              مميزاتنا
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختار منصتنا؟</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نقدم لك تجربة سفر متكاملة مع أحدث التقنيات وأفضل الخدمات
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Users className="w-4 h-4 ml-2" />
              فريق العمل
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الأشخاص وراء النجاح</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              فريق من الخبراء المتحمسين للسفر والتكنولوجيا
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ رحلتك معنا اليوم</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              انضم إلى مجتمعنا من المسافرين واكتشف وجهات جديدة مع توصياتنا المخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/locations">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  استكشف الوجهات
                  <Camera className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  إنشاء حساب
                  <TrendingUp className="w-5 h-5 mr-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
