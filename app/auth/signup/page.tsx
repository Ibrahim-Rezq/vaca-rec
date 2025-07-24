"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowLeft, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
    travelPreferences: [] as string[],
  })
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [acceptMarketing, setAcceptMarketing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptTerms) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    // Handle successful registration
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex flex-1 relative"
      >
        <div className="relative w-full h-full">
          <Image
            src="/placeholder.svg?height=800&width=600&text=إنشاء+حساب"
            alt="إنشاء حساب"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20" />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-white">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h2 className="text-4xl font-bold mb-4">انضم إلى مجتمعنا</h2>
                <p className="text-xl opacity-90 mb-8">ابدأ رحلتك في اكتشاف أجمل الوجهات حول العالم</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">توصيات ذكية</div>
                    <div className="text-sm opacity-80">مخصصة لتفضيلاتك</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">حجز آمن</div>
                    <div className="text-sm opacity-80">مع ضمان الجودة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">دعم 24/7</div>
                    <div className="text-sm opacity-80">في أي وقت</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">إلغاء مجاني</div>
                    <div className="text-sm opacity-80">حتى 24 ساعة</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-md">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 ml-2" />
            العودة للرئيسية
          </Link>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">سياحة</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">إنشاء حساب جديد</h1>
            <p className="text-muted-foreground">انضم إلينا واكتشف وجهات لا تُنسى</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">معلوماتك الشخصية</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="firstName"
                        placeholder="الاسم الأول"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">اسم العائلة</Label>
                    <Input
                      id="lastName"
                      placeholder="اسم العائلة"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pr-10"
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+966 5X XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pr-10"
                      required
                    />
                  </div>
                </div>

                {/* Birth Date and Gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">تاريخ الميلاد</Label>
                    <div className="relative">
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange("birthDate", e.target.value)}
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">الجنس</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الجنس" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">ذكر</SelectItem>
                        <SelectItem value="female">أنثى</SelectItem>
                        <SelectItem value="other">آخر</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Password Fields */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">كلمة المرور</Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="أدخل كلمة مرور قوية"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pr-10 pl-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="أعد إدخال كلمة المرور"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pr-10 pl-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Terms and Marketing */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2 space-x-reverse">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      أوافق على{" "}
                      <Link href="/policies" className="text-primary hover:underline">
                        شروط الاستخدام
                      </Link>{" "}
                      و{" "}
                      <Link href="/policies" className="text-primary hover:underline">
                        سياسة الخصوصية
                      </Link>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2 space-x-reverse">
                    <Checkbox
                      id="marketing"
                      checked={acceptMarketing}
                      onCheckedChange={(checked) => setAcceptMarketing(checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="marketing" className="text-sm leading-relaxed">
                      أرغب في تلقي العروض الخاصة والنشرات الإخبارية
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full" size="lg" disabled={isLoading || !acceptTerms}>
                  {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
                </Button>

                {/* Divider */}
                <div className="relative">
                  <Separator />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-sm text-muted-foreground">
                    أو
                  </span>
                </div>

                {/* Social Login */}
                <div className="space-y-3">
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Image
                      src="/placeholder.svg?height=20&width=20&text=G"
                      alt="Google"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                    التسجيل بـ Google
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Image
                      src="/placeholder.svg?height=20&width=20&text=A"
                      alt="Apple"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                    التسجيل بـ Apple
                  </Button>
                </div>

                {/* Sign In Link */}
                <div className="text-center pt-4">
                  <p className="text-muted-foreground">
                    لديك حساب بالفعل؟{" "}
                    <Link href="/auth/signin" className="text-primary hover:underline font-medium">
                      تسجيل الدخول
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
