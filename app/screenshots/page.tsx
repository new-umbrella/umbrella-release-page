"use client";

import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Smartphone, Monitor, Tablet, Download, Github, ZoomIn, Code } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link";

export default function Screenshots() {
  const [selectedScreenshot, setSelectedScreenshot] = useState<typeof screenshots[0] | null>(null)
  const screenshots = [
    {
      image: "/assets/images/screenshots/SplashScreen.png",
      title: "Splash Screen",
      description: "Elegant splash screen showcasing the Umbrella branding and loading experience",
      category: "ui",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/PluginListNoPlugins.png",
      title: "Empty Plugin List",
      description: "Clean interface when no plugins are installed, ready for plugin discovery",
      category: "plugins",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/PluginList.png",
      title: "Plugin Management",
      description: "Comprehensive plugin list with installed plugins and management options",
      category: "plugins",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/InstallPluginDialog.png",
      title: "Install Plugin Dialog",
      description: "User-friendly dialog for installing plugins from URLs or local files",
      category: "plugins",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/DeletePluginDialog.png",
      title: "Delete Plugin Confirmation",
      description: "Confirmation dialog for safely removing plugins from the system",
      category: "plugins",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/PluginInfoScreen.png",
      title: "Plugin Information",
      description: "Detailed plugin information screen with capabilities and settings",
      category: "plugins",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/HomeScreen.png",
      title: "Home Dashboard",
      description: "Main dashboard with quick access to media content and features",
      category: "navigation",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/SearchScreen.png",
      title: "Search Interface",
      description: "Powerful search functionality with category filtering and results",
      category: "search",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/SearchScreenModal.png",
      title: "Advanced Search Modal",
      description: "Modal interface for advanced search options and filters",
      category: "search",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/SearchPageFullModal.png",
      title: "Full Search Experience",
      description: "Complete search interface with detailed results and navigation",
      category: "search",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/LibraryScreen.png",
      title: "Media Library",
      description: "Organized library view for managing saved media content",
      category: "library",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/DetailsScreen.png",
      title: "Content Details",
      description: "Detailed view of media content with metadata and options",
      category: "content",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/DetailsScreenBottom.png",
      title: "Content Actions",
      description: "Bottom section of content details with action buttons and options",
      category: "content",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/SettingsScreen.png",
      title: "Settings & Preferences",
      description: "Comprehensive settings screen with app customization and preferences",
      category: "settings",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/CreateProfileScreen.png",
      title: "Profile Creation",
      description: "Create new user profiles for personalized experiences",
      category: "user",
      device: "phone"
    },
    {
      image: "/assets/images/screenshots/SelectProfileScreen.png",
      title: "Profile Selection",
      description: "Choose between different user profiles for customized access",
      category: "user",
      device: "phone"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ui":
        return "bg-blue-500"
      case "plugins":
        return "bg-purple-500"
      case "settings":
        return "bg-green-500"
      case "navigation":
        return "bg-indigo-500"
      case "search":
        return "bg-cyan-500"
      case "library":
        return "bg-orange-500"
      case "content":
        return "bg-red-500"
      case "user":
        return "bg-pink-500"
      default:
        return "bg-gray-500"
    }
  }

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case "phone":
        return Smartphone
      case "tablet":
        return Tablet
      case "desktop":
        return Monitor
      default:
        return Smartphone
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Header */}
        <section className="py-24 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Screenshots</h1>
            <p className="text-xl text-muted-foreground">
              Explore the beautiful and intuitive interface of Umbrella across different screens and features.
            </p>
          </div>
        </section>

        {/* Screenshots Grid */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {screenshots.map((screenshot, index) => {
                const DeviceIcon = getDeviceIcon(screenshot.device)
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedScreenshot(screenshot)}
                  >
                    <div className="aspect-[9/16] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                      <Image
                        src={screenshot.image}
                        alt={screenshot.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getCategoryColor(screenshot.category)} text-white text-xs`}>
                          {screenshot.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
                          <DeviceIcon className="h-3 w-3" />
                          <span>Phone</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{screenshot.title}</h3>
                      <p className="text-muted-foreground text-sm">{screenshot.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Device Types */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Multi-Device Support</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Umbrella is designed to work seamlessly across different devices and screen sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Smartphone className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile</h3>
                <p className="text-muted-foreground text-center">
                  Optimized for Android smartphones with touch-friendly interface
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Tablet className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tablet</h3>
                <p className="text-muted-foreground text-center">
                  Tablet-optimized layout with enhanced viewing experience
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Monitor className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Desktop</h3>
                <p className="text-muted-foreground text-center">
                  Future web version for desktop browsers (planned)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Experience Umbrella</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Download the app and see these beautiful interfaces in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://github.com/new-umbrella/umbrella/releases" target="_blank">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </Link>
              <Link href="https://github.com/new-umbrella/umbrella" target="_blank">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Code className="mr-2 h-5 w-5" />
                  View Source Code
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Screenshot Modal */}
      <Dialog open={!!selectedScreenshot} onOpenChange={() => setSelectedScreenshot(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedScreenshot && (
            <>
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-xl">{selectedScreenshot.title}</DialogTitle>
                <DialogDescription>{selectedScreenshot.description}</DialogDescription>
              </DialogHeader>
              <div className="relative w-full h-[70vh] overflow-hidden">
                <Image
                  src={selectedScreenshot.image}
                  alt={selectedScreenshot.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="flex items-center justify-between p-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Badge className={`${getCategoryColor(selectedScreenshot.category)} text-white`}>
                    {selectedScreenshot.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Smartphone className="h-4 w-4" />
                    <span>Mobile Screenshot</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open(selectedScreenshot.image, '_blank')}
                >
                  Open Full Size
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
