"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, MessageCircle, Headphones } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "رقم الهاتف",
    value: "+966 11 123 4567",
    description: "للاستفسارات العامة",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "+966 50 123 4567",
    description: "للدعم السريع",
    link: "https://wa.me/966501234567",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "support@travel-platform.com",
    description: "للاستفسارات التفصيلية",
    link: "mailto:support@travel-platform.com",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "الأحد - الخميس",
    description: "9:00 ص - 6:00 م",
  },
]

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-soft-blue-50/30 to-soft-beige-50/30 dark:from-soft-blue-900/5 dark:to-soft-beige-900/5">
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
            <Headphones className="w-4 h-4 ml-2" />
            تواصل معنا
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نحن هنا لمساعدتك</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            فريق الدعم متاح لمساعدتك في التخطيط لرحلتك المثالية والإجابة على جميع استفساراتك
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-soft-blue-100 dark:border-soft-blue-900/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-soft-blue-100 dark:bg-soft-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-soft-blue-600 dark:text-soft-blue-400" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-soft-blue-600 dark:text-soft-blue-400 font-medium hover:underline block mb-2"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium mb-2 text-soft-blue-600 dark:text-soft-blue-400">{item.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-soft-blue-500 to-soft-blue-600 text-white border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">تحدث معنا الآن</h3>
              <p className="mb-6 opacity-90">احصل على استشارة مجانية لتخطيط رحلتك المثالية مع خبرائنا في السفر</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-soft-blue-600 hover:bg-white/90 font-bold px-8 py-6 text-lg"
                >
                  <a
                    href="https://wa.me/966501234567?text=مرحباً، أرغب في الحصول على استشارة سياحية"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 ml-2" />
                    ابدأ المحادثة على واتساب
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="whatsapp-float md:hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <Button
            asChild
            size="lg"
            className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
          >
            <a
              href="https://wa.me/966501234567?text=مرحباً، أرغب في الحصول على استشارة سياحية"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-8 h-8" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
