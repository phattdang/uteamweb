'use client'

import { 
  Banknote, Gamepad2, Wrench, RotateCcw, 
  Check, AlertTriangle, Users, Headset,
  ArrowRight, MessageCircle, Gift, Zap, 
  Shield, Clock, DollarSign, Star,
  ChevronRight
} from 'lucide-react'

export function CTVContent() {
  return (
    <div className="relative">
      {/* ─── HERO BANNER ─── */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-background to-indigo-950/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-indigo-600/8 rounded-full blur-[120px]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4 text-violet-700 dark:text-violet-400" />
            <span className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
              Chính sách hợp tác CTV
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Phân phối Tool Auto
            </span>
            <br />
            <span className="text-foreground">FC Mobile</span>
          </h1>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Chào bạn, cảm ơn bạn đã quan tâm đến việc hợp tác phát triển tool Auto. 
            Với tiêu chí <span className="text-foreground font-semibold">Win — Win</span>, 
            <span className="text-foreground font-semibold"> Hợp tác lâu dài</span>, 
            dưới đây là chi tiết quyền lợi, trách nhiệm và quy trình làm việc để anh em hiểu rõ nhau ngay từ đầu:
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">50%</div>
              <div className="text-xs text-muted-foreground mt-1">Hoa hồng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">0₫</div>
              <div className="text-xs text-muted-foreground mt-1">Chi phí</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-xs text-muted-foreground mt-1">Hỗ trợ</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CARDS ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* ── Card 1: Hoa hồng & Thưởng (Featured) ── */}
          <div className="lg:col-span-2 relative rounded-2xl border border-violet-500/30 bg-gradient-to-br from-card via-card to-violet-950/10 p-6 sm:p-8 overflow-hidden animate-pulse-glow">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/20">
                  <Banknote className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Chính sách Hoa hồng & Thưởng</h2>
                  <p className="text-sm text-muted-foreground">Nổi bật nhất — Thu nhập hấp dẫn</p>
                </div>
              </div>

              {/* Content grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Chiết khấu */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <DollarSign className="w-4.5 h-4.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Chiết khấu cơ bản</div>
                    <div className="text-2xl font-extrabold text-emerald-400 mt-1">50%</div>
                    <div className="text-xs text-muted-foreground mt-1">trên mỗi đơn hàng thành công</div>
                  </div>
                </div>

                {/* Bonus */}
                <div className="relative flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/25">
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-[10px] font-bold text-white uppercase">
                    🔥 Bonus
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-4.5 h-4.5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Thưởng doanh số</div>
                    <div className="text-sm text-amber-600 dark:text-amber-300 font-bold mt-1">Bán đủ 10 key →</div>
                    <div className="text-sm text-amber-700 dark:text-amber-200 mt-0.5">Key thứ 11 hưởng trọn <span className="font-extrabold text-amber-600 dark:text-amber-400">100%</span> doanh thu</div>
                    <div className="text-xs text-muted-foreground mt-1">(Cấp key miễn phí)</div>
                  </div>
                </div>

                {/* Chi phí */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="w-9 h-9 rounded-lg bg-violet-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4.5 h-4.5 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Chi phí tham gia</div>
                    <div className="text-xl font-extrabold text-violet-400 mt-1">0 đồng</div>
                    <div className="text-xs text-muted-foreground mt-1">Không cọc • Không ôm hàng • Không ép doanh số</div>
                  </div>
                </div>

                {/* Thanh toán */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4.5 h-4.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Thanh toán</div>
                    <div className="text-sm text-foreground font-bold mt-1">Cuốn chiếu theo đơn</div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">Tiền tươi thóc thật ngay lập tức! 💰</div>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="p-3 rounded-lg bg-muted/30 border border-border/20">
                <p className="text-xs text-muted-foreground italic">
                  <span className="font-semibold text-foreground/80">Lưu ý:</span> CTV tự do định giá bán cao hơn giá niêm yết, 
                  nhưng <span className="text-red-400 font-semibold uppercase">tuyệt đối không</span> bán thấp hơn giá sàn để tránh phá giá.
                </p>
              </div>
            </div>
          </div>

          {/* ── Card 2: Chính sách Dùng thử ── */}
          <div className="relative rounded-2xl border border-border/50 bg-card p-6 sm:p-8 overflow-hidden hover:border-border/70 transition-colors duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/20">
                  <Gamepad2 className="w-5.5 h-5.5 text-cyan-400" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">Chính sách Dùng thử</h2>
              </div>

              {/* Subtitle */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/15 mb-5">
                <Star className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300">Tăng tỷ lệ chốt đơn</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600 dark:text-cyan-400" strokeWidth={3} />
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Mọi khách hàng đều được cấp <span className="font-semibold text-cyan-600 dark:text-cyan-300">Key Test sử dụng full tính năng 1 ngày</span> trước khi mua.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600 dark:text-cyan-400" strokeWidth={3} />
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Hàng thật việc thật, khách ưng ý code chạy mượt rồi mới thu tiền. 
                    <span className="text-muted-foreground italic"> Không lo mang tiếng &quot;tool mõm&quot;.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 3: Phân chia Trách nhiệm ── */}
          <div className="relative rounded-2xl border border-border/50 bg-card p-6 sm:p-8 overflow-hidden hover:border-border/70 transition-colors duration-300">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center border border-violet-500/20">
                  <Wrench className="w-5.5 h-5.5 text-violet-400" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">Phân chia Trách nhiệm</h2>
              </div>

              {/* Two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* CTV Column */}
                <div className="p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">CTV</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Tier 1 — Sale</div>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      Sale & Chốt đơn
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      Hướng dẫn cài đặt cơ bản (có sẵn Video/Doc)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      Chăm sóc khách hàng (giải đáp cơ bản)
                    </li>
                  </ul>
                </div>

                {/* Dev Column */}
                <div className="p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-violet-500/15 flex items-center justify-center">
                      <Headset className="w-3.5 h-3.5 text-violet-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">Dev</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Tier 2 — Support</div>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                      Cung cấp Key & Server
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                      Update code (ngay khi có bản mới)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <ChevronRight className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                      Support chuyên sâu (fix lỗi tương thích máy khó)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 4: Quy trình Chốt đơn (Timeline) ── */}
          <div className="lg:col-span-2 relative rounded-2xl border border-border/50 bg-card p-6 sm:p-8 overflow-hidden hover:border-border/70 transition-colors duration-300">
            <div className="absolute top-0 left-1/2 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center border border-indigo-500/20">
                  <RotateCcw className="w-5.5 h-5.5 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">Quy trình Chốt đơn</h2>
                  <p className="text-sm text-muted-foreground">4 bước đơn giản</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  {
                    step: 'B1',
                    title: 'Tư vấn khách',
                    desc: 'Tư vấn khách → Khách đồng ý dùng thử.',
                    color: 'violet',
                    bgFrom: 'from-violet-500/15',
                    bgTo: 'to-violet-500/5',
                    borderColor: 'border-violet-500/25',
                    textColor: 'text-violet-700 dark:text-violet-400',
                    dotColor: 'bg-violet-500',
                  },
                  {
                    step: 'B2',
                    title: 'Lấy Gmail khách',
                    desc: 'Lấy Gmail khách → Báo Dev tạo Key Test 1 ngày → Gửi khách.',
                    color: 'indigo',
                    bgFrom: 'from-indigo-500/15',
                    bgTo: 'to-indigo-500/5',
                    borderColor: 'border-indigo-500/25',
                    textColor: 'text-indigo-700 dark:text-indigo-400',
                    dotColor: 'bg-indigo-500',
                  },
                  {
                    step: 'B3',
                    title: 'Chốt mua',
                    desc: 'Khách chốt mua → CTV gửi STK & nội dung CK của Admin cho khách.',
                    color: 'cyan',
                    bgFrom: 'from-cyan-500/15',
                    bgTo: 'to-cyan-500/5',
                    borderColor: 'border-cyan-500/25',
                    textColor: 'text-cyan-700 dark:text-cyan-400',
                    dotColor: 'bg-cyan-500',
                  },
                  {
                    step: 'B4',
                    title: 'Hoàn tất',
                    desc: 'Admin gửi key cho khách → Admin chuyển hoa hồng cho CTV → Done!',
                    color: 'emerald',
                    bgFrom: 'from-emerald-500/15',
                    bgTo: 'to-emerald-500/5',
                    borderColor: 'border-emerald-500/25',
                    textColor: 'text-emerald-700 dark:text-emerald-400',
                    dotColor: 'bg-emerald-500',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    {/* Connector line (hidden on mobile, shown on desktop) */}
                    {i < 3 && (
                      <div className="hidden lg:block absolute top-6 left-full w-full h-[2px] bg-gradient-to-r from-border/40 to-border/10 z-0" style={{ width: 'calc(100% - 2rem)' }} />
                    )}
                    
                    <div className={`relative p-4 rounded-xl bg-gradient-to-br ${item.bgFrom} ${item.bgTo} border ${item.borderColor}`}>
                      {/* Step number */}
                      <div className={`w-8 h-8 rounded-full ${item.dotColor} flex items-center justify-center mb-3`}>
                        <span className="text-xs font-bold text-white">{item.step}</span>
                      </div>
                      <h3 className={`text-sm font-bold ${item.textColor} mb-1.5`}>{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WARNING BOX ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-2xl border-2 border-red-500/30 bg-gradient-to-br from-red-950/20 via-card to-orange-950/10 p-6 sm:p-8 overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border border-red-500/25">
                <AlertTriangle className="w-5.5 h-5.5 text-red-400" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">Quy định chung & Chấm dứt hợp tác</h2>
                <p className="text-sm text-red-600 dark:text-red-400/80">Sẽ ngừng cấp key và ngắt hợp tác nếu phát hiện</p>
              </div>
            </div>

            {/* Items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
                <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center shrink-0">
                  <span className="text-sm">🚫</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-red-600 dark:text-red-400">Lừa đảo (Scam)</div>
                  <p className="text-xs text-muted-foreground mt-1">Hành vi lừa đảo tiền của khách hàng dưới mọi hình thức.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-500/5 border border-orange-500/15">
                <div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center shrink-0">
                  <span className="text-sm">📉</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-orange-600 dark:text-orange-400">Bán phá giá</div>
                  <p className="text-xs text-muted-foreground mt-1">Bán thấp hơn giá niêm yết tối thiểu do team quy định.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/15">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0">
                  <span className="text-sm">🙅</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-amber-600 dark:text-amber-400">Bỏ khách</div>
                  <p className="text-xs text-muted-foreground mt-1">Thái độ hỗ trợ khách hàng tệ, &quot;bỏ con bỏ chợ&quot;.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="relative rounded-2xl bg-gradient-to-br from-violet-600/10 via-card to-indigo-600/10 border border-violet-500/20 p-8 sm:p-12 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Sẵn sàng hợp tác? 🤝
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-lg mx-auto">
              Liên hệ ngay để nhận thông tin chi tiết và bắt đầu kiếm thu nhập cùng Unemployed Team!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://zalo.me/0984309204"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm
                  bg-gradient-to-r from-violet-600 to-indigo-600
                  hover:from-violet-500 hover:to-indigo-500
                  text-white shadow-lg shadow-violet-500/25
                  transition-all duration-300
                  hover:shadow-violet-500/40 hover:-translate-y-0.5
                  active:translate-y-0
                "
              >
                <MessageCircle className="w-4.5 h-4.5" />
                Liên hệ qua Zalo
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="https://www.facebook.com/uteam664dntp/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm
                  bg-card border border-border/50
                  hover:bg-muted/50 hover:border-border
                  text-foreground
                  transition-all duration-300
                  hover:-translate-y-0.5
                  active:translate-y-0
                "
              >
                Nhắn tin Facebook
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
