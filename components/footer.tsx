import { Facebook, MessageCircle } from 'lucide-react'

export function Footer() {
  const teamContacts = [
    {
      name: 'Zalo Hỗ Trợ : 0984 309 204 (Đặng Nguyễn Tiến Phát)',
      icon: MessageCircle,
      url: 'https://zalo.me/0984309204',
      description: 'Chat qua Zalo để được hỗ trợ riêng biệt'
    },
    {
      name: 'Zalo Hỗ Trợ : 0347 451 855 (Phạm Khiêm)',
      icon: MessageCircle,
      url: 'https://zalo.me/0347451855',
      description: 'Chat qua Zalo để được hỗ trợ riêng biệt'
    },
    {
      name: 'Facebook Cá Nhân (Mẽo Ngọt)',
      icon: Facebook,
      url: 'https://www.facebook.com/uteam664dntp/',
      description: 'Nhắn tin qua Facebook'
    },
    {
      name: 'Facebook Cá Nhân (Phạm Khiêm)',
      icon: Facebook,
      url: 'https://www.facebook.com/pham.khiem.643159',
      description: 'Nhắn tin qua Facebook'
    },
    {
      name: 'Facebook Cá Nhân (Phạm Sỹ Hải)',
      icon: Facebook,
      url: 'https://www.facebook.com/SHsyhai',
      description: 'Nhắn tin qua Facebook'
    }
  ]

  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h3 className="font-bold text-xl mb-6">Liên hệ với chúng tôi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamContacts.map((contact, index) => {
              const Icon = contact.icon
              return (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm line-clamp-2 leading-tight">{contact.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{contact.description}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex items-center justify-center">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Unemployed Team. Đã đăng ký bản quyền.
          </p>
        </div>
      </div>
    </footer>
  )
}
