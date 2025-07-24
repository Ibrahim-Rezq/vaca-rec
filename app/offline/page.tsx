"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WifiOff, RefreshCw, Home, MapPin } from "lucide-react"
import Link from "next/link"

export default function OfflinePage() {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-muted/30 to-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md mx-auto"
      >
        <Card className="glass">
          <CardContent className="p-8">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <WifiOff className="w-12 h-12 text-muted-foreground" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold mb-4"
            >
              لا يوجد اتصال بالإنترنت
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              يبدو أنك غير متصل بالإنترنت. تحقق من اتصالك وحاول مرة أخرى، أو تصفح المحتوى المحفوظ محلياً.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <Button onClick={handleRefresh} className="w-full" size="lg">
                <RefreshCw className="w-5 h-5 ml-2" />
                إعادة المحاولة
              </Button>

              <div className="flex gap-3">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Home className="w-4 h-4 ml-2" />
                    الرئيسية
                  </Button>
                </Link>
                <Link href="/locations" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    <MapPin className="w-4 h-4 ml-2" />
                    الوجهات
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Tips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-4 bg-muted/50 rounded-lg"
            >
              <h3 className="font-semibold mb-2 text-sm">💡 نصائح:</h3>
              <ul className="text-xs text-muted-foreground space-y-1 text-right">
                <li>• تحقق من اتصال الواي فاي أو البيانات</li>
                <li>• جرب الانتقال إلى مكان بإشارة أقوى</li>
                <li>• أعد تشغيل التطبيق إذا استمرت المشكلة</li>
              </ul>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
