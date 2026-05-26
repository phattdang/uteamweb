'use client'

import { useState, useEffect, useRef } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp'
import { Lock, ShieldCheck, ArrowRight } from 'lucide-react'
import { CTVContent } from './ctv-content'

const CORRECT_PIN = '05062004'

export function CTVPinGate() {
  const [pin, setPin] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState('')
  const [isShaking, setIsShaking] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check sessionStorage for previous unlock
    const unlocked = sessionStorage.getItem('ctv_unlocked')
    if (unlocked === 'true') {
      setIsUnlocked(true)
    }
  }, [])

  const handleSubmit = () => {
    if (pin === CORRECT_PIN) {
      setError('')
      setIsUnlocking(true)
      sessionStorage.setItem('ctv_unlocked', 'true')
      setTimeout(() => {
        setIsUnlocked(true)
      }, 600)
    } else {
      setError('Mã PIN không chính xác. Vui lòng thử lại!')
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      setPin('')
    }
  }

  const handlePinChange = (value: string) => {
    setPin(value)
    setError('')
    // Auto-submit when all 8 digits entered
    if (value.length === 8) {
      setTimeout(() => {
        if (value === CORRECT_PIN) {
          setError('')
          setIsUnlocking(true)
          sessionStorage.setItem('ctv_unlocked', 'true')
          setTimeout(() => {
            setIsUnlocked(true)
          }, 600)
        } else {
          setError('Mã PIN không chính xác. Vui lòng thử lại!')
          setIsShaking(true)
          setTimeout(() => setIsShaking(false), 500)
          setPin('')
        }
      }, 200)
    }
  }

  if (!mounted) return null

  if (isUnlocked) {
    return (
      <div className="animate-fade-in-up">
        <CTVContent />
      </div>
    )
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-violet-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-20 left-[15%] w-2 h-2 bg-violet-400/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 bg-indigo-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-[30%] w-1 h-1 bg-violet-300/25 rounded-full animate-float" style={{ animationDelay: '3s' }} />

      {/* Gate card */}
      <div className={`relative z-10 ${isUnlocking ? 'animate-gate-unlock' : ''}`}>
        <div 
          className={`
            relative w-full max-w-md mx-4 p-8 sm:p-10 rounded-2xl
            bg-card/80 backdrop-blur-xl
            border border-border/50
            shadow-2xl shadow-violet-500/5
            ${isShaking ? 'animate-shake' : ''}
          `}
        >
          {/* Glow border effect */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-violet-500/20 via-transparent to-indigo-500/20 -z-10" />
          
          {/* Lock icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 flex items-center justify-center border border-violet-500/20">
                <Lock className="w-9 h-9 text-violet-400" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center">
                <ShieldCheck className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Khu vực Cộng tác viên
            </h1>
            <p className="text-sm text-muted-foreground">
              Nhập mã PIN 8 số để truy cập nội dung
            </p>
          </div>

          {/* PIN Input */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center">
              <InputOTP
                maxLength={8}
                value={pin}
                onChange={handlePinChange}
                containerClassName="gap-1.5 sm:gap-2"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl font-bold rounded-lg border-border/60 bg-background/60 data-[active=true]:border-violet-500 data-[active=true]:ring-violet-500/30" />
                  <InputOTPSlot index={1} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl font-bold rounded-lg border-border/60 bg-background/60 data-[active=true]:border-violet-500 data-[active=true]:ring-violet-500/30" />
                  <InputOTPSlot index={2} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl font-bold rounded-lg border-border/60 bg-background/60 data-[active=true]:border-violet-500 data-[active=true]:ring-violet-500/30" />
                  <InputOTPSlot index={3} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl font-bold rounded-lg border-border/60 bg-background/60 data-[active=true]:border-violet-500 data-[active=true]:ring-violet-500/30" />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl font-bold rounded-lg border-border/60 bg-background/60 data-[active=true]:border-violet-500 data-[active=true]:ring-violet-500/30" />
                  <InputOTPSlot index={5} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl font-bold rounded-lg border-border/60 bg-background/60 data-[active=true]:border-violet-500 data-[active=true]:ring-violet-500/30" />
                  <InputOTPSlot index={6} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl font-bold rounded-lg border-border/60 bg-background/60 data-[active=true]:border-violet-500 data-[active=true]:ring-violet-500/30" />
                  <InputOTPSlot index={7} className="w-10 h-12 sm:w-12 sm:h-14 text-lg sm:text-xl font-bold rounded-lg border-border/60 bg-background/60 data-[active=true]:border-violet-500 data-[active=true]:ring-violet-500/30" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* Error message */}
            {error && (
              <p className="text-sm text-red-500 font-medium animate-fade-in-up text-center">
                {error}
              </p>
            )}

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={pin.length < 8}
              className="
                w-full py-3 px-6 rounded-xl font-semibold text-sm
                bg-gradient-to-r from-violet-600 to-indigo-600
                hover:from-violet-500 hover:to-indigo-500
                text-white shadow-lg shadow-violet-500/25
                disabled:opacity-40 disabled:cursor-not-allowed
                transition-all duration-300
                flex items-center justify-center gap-2
                hover:shadow-violet-500/40 hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              Xác nhận
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom hint */}
          <p className="text-xs text-muted-foreground/60 text-center mt-6">
            Liên hệ quản trị viên nếu bạn chưa có mã PIN
          </p>
        </div>
      </div>
    </div>
  )
}
