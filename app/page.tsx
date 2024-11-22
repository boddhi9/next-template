'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToastProvider } from '@/components/ui/toast'
import { ComponentsShowcase } from '@/components/components-showcase'
import { Customization } from '@/components/customization'
import { Documentation } from '@/components/documentation'
import { Features } from '@/components/features'
import { ThemeToggle } from '@/components/theme-toggle'

export default function WelcomePage() {
  const [selectedTab, setSelectedTab] = useState('components')

  return (
    <ToastProvider>
      <div className="container mx-auto p-4">
        <header className="mb-8 flex items-center justify-between">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to next-boil starter
          </motion.h1>
          <ThemeToggle />
        </header>

        <Tabs
          defaultValue="components"
          className="mb-8 w-full"
          onValueChange={(value) => setSelectedTab(value)}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="components">Components Showcase</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>
          <TabsContent value="components">
            <ComponentsShowcase />
          </TabsContent>
          <TabsContent value="features">
            <Features />
          </TabsContent>
        </Tabs>

        {selectedTab === 'features' && (
          <>
            <Separator className="my-8" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Documentation />
              <Customization />
            </div>
          </>
        )}
      </div>
    </ToastProvider>
  )
}
