import type { Metadata } from 'next'
import { CTVPinGate } from '@/components/ctv-pin-gate'

export const metadata: Metadata = {
  title: 'Cộng tác viên — Unemployed Team',
  description: 'Chính sách hợp tác CTV phân phối Tool Auto FC Mobile. Chiết khấu 50%, hỗ trợ toàn diện, hợp tác Win-Win.',
}

export default function CTVPage() {
  return <CTVPinGate />
}
