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
import { Eye, EyeOff, Mail, Lock, ArrowLeft, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    // Handle successful login
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-md">
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
            <h1 className="text-3xl font-bold mb-2">مرحباً بعودتك</h1>
            <p className="text-muted-foreground">سجل دخولك لمتابعة رحلتك معنا</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">تسجيل الدخول</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pr-10"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password">كلمة المرور</Label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="أدخل كلمة المرور"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm">
                      تذكرني
                    </Label>
                  </div>
                  <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                    نسيت كلمة المرور؟
                  </Link>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
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
                    تسجيل الدخول بـ Google
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Image
                      src="/placeholder.svg?height=20&width=20&text=A"
                      alt="Apple"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                    تسجيل الدخول بـ Apple
                  </Button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center pt-4">
                  <p className="text-muted-foreground">
                    ليس لديك حساب؟{" "}
                    <Link href="/auth/signup" className="text-primary hover:underline font-medium">
                      إنشاء حساب جديد
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Terms */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            بتسجيل الدخول، أنت توافق على{" "}
            <Link href="/policies" className="text-primary hover:underline">
              شروط الاستخدام
            </Link>{" "}
            و{" "}
            <Link href="/policies" className="text-primary hover:underline">
              سياسة الخصوصية
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex flex-1 relative"
      >
        <div className="relative w-full h-full">
          <Image
            src="/placeholder.svg?height=800&width=600&text=تسجيل+الدخول"
            alt="تسجيل الدخول"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-white">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h2 className="text-4xl font-bold mb-4">اكتشف العالم معنا</h2>
                <p className="text-xl opacity-90 mb-8">آلاف الوجهات في انتظارك مع توصيات مخصصة لك</p>
                <div className="flex items-center justify-center space-x-8 space-x-reverse">
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-80">وجهة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm opacity-80">مسافر</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">4.9</div>
                    <div className="text-sm opacity-80">تقييم</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
