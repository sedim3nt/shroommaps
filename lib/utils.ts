import type { Vertical } from './types'

export const VERTICAL_COLORS: Record<Vertical, string> = {
  therapeutic: '#7B68AE',
  medicinal: '#87A878',
  gourmet: '#D4853A',
}

export const VERTICAL_LABELS: Record<Vertical, string> = {
  therapeutic: '🧠 Therapeutic',
  medicinal: '💊 Medicinal',
  gourmet: '🍽️ Gourmet',
}

export const VERTICAL_DESCRIPTIONS: Record<Vertical, string> = {
  therapeutic: 'Licensed psilocybin healing centers and guided therapy sessions',
  medicinal: 'Lion\'s mane, reishi, chaga, turkey tail supplements and tinctures',
  gourmet: 'Fresh mushrooms, grow kits, specialty fungi for the culinary enthusiast',
}

export function formatRating(rating: number): string {
  return rating.toFixed(1)
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  return phone
}

export function isOpenNow(hours: Record<string, string | null | undefined>): boolean {
  const now = new Date()
  const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const today = dayNames[now.getDay()]
  const todayHours = hours[today]

  if (!todayHours) return false

  const [open, close] = todayHours.split('-').map((t) => {
    const [h, m] = t.trim().split(':').map(Number)
    return h * 60 + (m || 0)
  })

  const current = now.getHours() * 60 + now.getMinutes()
  return current >= open && current < close
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
