import { clsx, type ClassValue } from 'clsx'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { Card } from '@/components/ui/card'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const MotionCard = motion(Card)
