import { useState } from 'react'
import { MotionCard } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { ThemeToggle } from '@/components/theme-toggle'

export const Customization = () => {
  const [isCustomColors, setIsCustomColors] = useState(false)

  const handleColorToggle = () => {
    setIsCustomColors((prev) => !prev)
    document.documentElement.classList.toggle('custom-colors', !isCustomColors)
  }

  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <CardHeader>
        <CardTitle>Customization</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="theme-toggle">Dark Mode</Label>
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="color-scheme-toggle">Color Scheme</Label>
          <Button onClick={handleColorToggle}>
            {isCustomColors ? 'Default Colors' : 'Custom Colors'}
          </Button>
        </div>
      </CardContent>
    </MotionCard>
  )
}
