import Link from 'next/link'
import { MotionCard } from '@/lib/utils'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Documentation = () => {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader>
        <CardTitle>Documentation</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link href="https://nextjs.org/docs" target="_blank">
              <span className="text-blue-500 hover:underline">
                Next.js Documentation
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://tailwindcss.com/docs" target="_blank">
              <span className="text-blue-500 hover:underline">
                Tailwind CSS Documentation
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://storybook.js.org/docs/react" target="_blank">
              <span className="text-blue-500 hover:underline">
                Storybook Documentation
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://ui.shadcn.com/docs" target="_blank">
              <span className="text-blue-500 hover:underline">
                shadcn/ui Documentation
              </span>
            </Link>
          </li>
        </ul>
      </CardContent>
    </MotionCard>
  )
}
