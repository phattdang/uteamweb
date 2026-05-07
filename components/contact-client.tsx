'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ContactModal } from './contact-modal'
import { ToolContact } from '@/lib/tools-data'

export interface ContactClientProps {
  contacts?: ToolContact[]
}

export function ContactClient({ contacts }: ContactClientProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button 
        className="w-full py-6 text-lg" 
        size="lg"
        onClick={() => setOpen(true)}
      >
        Liên hệ
      </Button>
      <ContactModal open={open} onOpenChange={setOpen} contacts={contacts} />
    </>
  )
}
