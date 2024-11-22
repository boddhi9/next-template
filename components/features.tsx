import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { MotionCard } from '@/lib/utils'
import { CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export const Features = () => {
  return (
    <MotionCard
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader>
        <CardTitle>Key Features</CardTitle>
        <CardDescription>What&apos;s included in this starter</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {[
            'Next.js 15 with App Router',
            'Tailwind CSS for styling',
            'shadcn/ui components',
            'Storybook for component development',
            'TypeScript support',
            'ESLint and Prettier for code quality',
            'Dark mode support with next-themes',
            'Framer Motion for animations',
            'Toast notifications',
          ].map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Zap className="h-5 w-5 text-yellow-500" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </MotionCard>
  )
}
