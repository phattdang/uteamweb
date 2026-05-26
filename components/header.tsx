'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navLinks: Array<{ label: string; hash?: string; href?: string }> = [
  { label: 'Tính năng', hash: 'features' },
  { label: 'Sản phẩm', hash: 'tools' },
  { label: 'Chính sách', hash: 'policies' },
  { label: 'Cộng tác viên', href: '/ctv' },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setIsMobileMenuOpen(false)
    // If we're on the homepage, do smooth scroll
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    // Otherwise, let the browser navigate to /#hash
  }

  const renderNav = () => (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) =>
        link.href ? (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={link.hash}
            href={`/#${link.hash}`}
            onClick={(e) => handleNavClick(e, link.hash!)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        )
      )}
    </nav>
  )

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <img 
              src="https://res.cloudinary.com/dkrrib3mb/image/upload/v1775490962/logo_remove_background_fl6k7i.png" 
              alt="Unemployed Team Logo" 
              className="w-8 h-8 object-contain"
            />
            Unemployed Team
          </Link>
          {renderNav()}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9" />
            <div className="md:hidden w-9 h-9" />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
          <img 
            src="https://res.cloudinary.com/dkrrib3mb/image/upload/v1775490962/logo_remove_background_fl6k7i.png" 
            alt="Unemployed Team Logo" 
            className="w-8 h-8 object-contain"
          />
          Unemployed Team
        </Link>
        {renderNav()}
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-card hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-card hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col px-4 pt-2 pb-4 gap-1">
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.hash}
                  href={`/#${link.hash}`}
                  onClick={(e) => handleNavClick(e, link.hash!)}
                  className="px-4 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
