"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, FileText, Eye, Lock, Users, AlertTriangle, Phone, Mail } from "lucide-react"

const sections = [
  {
    id: "privacy",
    title: "سياسة الخصوصية",
    icon: Shield,
    content: [
      {
        title: "جمع المعلومات",
        text: "نقوم بجمع المعلومات التي تقدمها لنا طوعاً عند التسجيل في منصتنا، مثل الاسم والبريد الإلكتروني ومعلومات السفر المفضلة. كما نجمع معلومات تقنية مثل عنوان IP ونوع المتصفح لتحسين تجربتك.",
      },
      {
        title: "استخدام المعلومات",
        text: "نستخدم معلوماتك لتقديم خدماتنا، وتخصيص التوصيات، وإرسال التحديثات المهمة، وتحسين منصتنا. لن نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك الصريحة.",
      },
      {
        title: "حماية البيانات",
        text: "نتخذ إجراءات أمنية صارمة لحماية معلوماتك، بما في ذلك التشفير وأنظمة الحماية المتقدمة. يتم تخزين بياناتك في خوادم آمنة ومحمية.",
      },
      {
        title: "حقوقك",
        text: "لديك الحق في الوصول إلى معلوماتك الشخصية وتعديلها أو حذفها في أي وقت. يمكنك أيضاً إلغاء الاشتراك في رسائلنا الإلكترونية.",
      },
    ],
  },
  {
    id: "terms",
    title: "شروط الاستخدام",
    icon: FileText,
    content: [
      {
        title: "قبول الشروط",
        text: "باستخدام منصتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.",
      },
      {
        title: "استخدام الخدمة",
        text: "يحق لك استخدام منصتنا للأغراض الشخصية والقانونية فقط. يُمنع استخدام المنصة لأي أنشطة غير قانونية أو ضارة أو مخالفة للآداب العامة.",
      },
      {
        title: "المحتوى والملكية الفكرية",
        text: "جميع المحتويات على منصتنا محمية بحقوق الطبع والنشر. لا يجوز نسخ أو توزيع أو تعديل أي محتوى دون إذن كتابي مسبق منا.",
      },
      {
        title: "المسؤولية",
        text: "نسعى لتقديم معلومات دقيقة ومحدثة، لكننا لا نضمن دقة جميع المعلومات. أنت مسؤول عن التحقق من المعلومات قبل اتخاذ قرارات السفر.",
      },
    ],
  },
  {
    id: "booking",
    title: "سياسة الحجز والإلغاء",
    icon: AlertTriangle,
    content: [
      {
        title: "عملية الحجز",
        text: "عند إتمام الحجز، ستتلقى رسالة تأكيد عبر البريد الإلكتروني تحتوي على تفاصيل حجزك ورقم المرجع. يرجى الاحتفاظ بهذه المعلومات.",
      },
      {
        title: "الدفع",
        text: "نقبل جميع بطاقات الائتمان الرئيسية والدفع الإلكتروني. جميع المدفوعات آمنة ومشفرة. الأسعار المعروضة تشمل جميع الرسوم والضرائب.",
      },
      {
        title: "الإلغاء المجاني",
        text: "يمكنك إلغاء حجزك مجاناً حتى 24 ساعة قبل موعد السفر. بعد هذا الموعد، قد تطبق رسوم إلغاء حسب نوع الحجز.",
      },
      {
        title: "التعديل",
        text: "يمكن تعديل تفاصيل الحجز حسب التوفر وقد تطبق رسوم إضافية. يرجى التواصل مع فريق الدعم لإجراء أي تعديلات.",
      },
    ],
  },
]

export default function PoliciesPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Lock className="w-4 h-4 ml-2" />
            السياسات والشروط
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الشروط والأحكام</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اقرأ سياساتنا وشروط الاستخدام لفهم حقوقك وواجباتك عند استخدام منصتنا
          </p>
          <div className="text-sm text-muted-foreground mt-4">آخر تحديث: 15 يناير 2024</div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="glass">
            <CardContent className="p-6">
              <h2 className="font-bold mb-4">الانتقال السريع</h2>
              <div className="flex flex-wrap gap-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-sm"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{section.title}</span>
                    </a>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 space-x-reverse mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
                    </div>

                    <div className="space-y-8">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <h3 className="text-xl font-bold mb-4 text-primary">
                            {itemIndex + 1}. {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">{item.text}</p>
                          {itemIndex < section.content.length - 1 && <Separator className="mt-6" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">هل لديك أسئلة؟</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                إذا كان لديك أي استفسارات حول سياساتنا أو شروط الاستخدام، لا تتردد في التواصل معنا. فريقنا مستعد
                لمساعدتك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>support@travel-platform.com</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+966 11 123 4567</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <Eye className="w-4 h-4 inline ml-2" />
              نحتفظ بالحق في تحديث هذه السياسات والشروط في أي وقت. سيتم إشعارك بأي تغييرات مهمة عبر البريد الإلكتروني أو
              من خلال المنصة.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
