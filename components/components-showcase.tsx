import { MotionCard } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const ComponentsShowcase = () => {
  return (
    <MotionCard
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader>
        <CardTitle>shadcn/ui components</CardTitle>
        <CardDescription>
          Explore some of the components included in this starter
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Buttons */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Buttons</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Badges */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Badges</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        {/* Inputs and Switches */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Inputs and Switches</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Input placeholder="Enter text" className="max-w-sm" />
            <Switch />
          </div>
        </div>

        {/* Slider */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Slider</h3>
          <Slider defaultValue={[50]} max={100} step={5} />
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Progress</h3>
          <Progress value={70} className="w-full" />
        </div>

        {/* Table */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Table</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>30</TableCell>
                <TableCell>Developer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>25</TableCell>
                <TableCell>Designer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sam Wilson</TableCell>
                <TableCell>35</TableCell>
                <TableCell>Manager</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </MotionCard>
  )
}
