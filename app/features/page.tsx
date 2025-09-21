import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Puzzle,
  Shield,
  Zap,
  Globe,
  Settings,
  Smartphone,
  Code,
  Database,
  Lock,
  Cpu,
  Wifi,
  ExternalLink
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Puzzle,
      title: "Plugin System",
      description: "Dynamically download and execute JavaScript plugins through nodejs-mobile-react-native and vm2.",
      status: "completed",
      category: "core"
    },
    {
      icon: Shield,
      title: "Sandboxed Execution",
      description: "Secure Node.js environment for running untrusted code with limited permissions.",
      status: "completed",
      category: "security"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized plugin execution with minimal memory usage and fast startup times.",
      status: "in-progress",
      category: "performance"
    },
    {
      icon: Globe,
      title: "Web Scraping Support",
      description: "Built-in Node.js environment for web scraping and data extraction.",
      status: "completed",
      category: "functionality"
    },
    {
      icon: Database,
      title: "State Management",
      description: "Persistent state management using Zustand for storing and managing app data.",
      status: "completed",
      category: "architecture"
    },
    {
      icon: ExternalLink,
      title: "External App Integration",
      description: "Seamless integration with external media players like MX Player.",
      status: "completed",
      category: "integration"
    },
    {
      icon: Smartphone,
      title: "Material Design 3 UI",
      description: "Modern Material Design 3 inspired interface using React Native Paper.",
      status: "completed",
      category: "ui"
    },
    {
      icon: Settings,
      title: "Comprehensive Settings",
      description: "Full settings screen with app customization, playback, and account options.",
      status: "in-progress",
      category: "ui"
    }
  ]

  const plannedFeatures = [
    {
      title: "Plugin Versioning",
      description: "Version control system for plugins with backward compatibility.",
      category: "plugin-system"
    },
    {
      title: "Link-Based Plugin Loading",
      description: "Install plugins directly from URLs without browser navigation.",
      category: "plugin-system"
    },
    {
      title: "Enhanced Sandboxing",
      description: "Stricter sandboxing with configurable permission levels.",
      category: "security"
    },
    {
      title: "iOS Support",
      description: "Full iOS compatibility (waiting for Mac development environment).",
      category: "platform"
    },
    {
      title: "Web Platform",
      description: "Browser-based version with limited plugin functionality.",
      category: "platform"
    },
    {
      title: "Local Profiles",
      description: "Multiple user profiles with separate state and sync capabilities.",
      category: "user-experience"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      default:
        return "Planned"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Header */}
        <section className="py-24 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Features</h1>
            <p className="text-xl text-muted-foreground">
              Discover the powerful capabilities that make Umbrella the ultimate modular media platform.
            </p>
          </div>
        </section>

        {/* Current Features */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Current Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <feature.icon className="h-12 w-12 text-primary" />
                      <Badge className={`${getStatusColor(feature.status)} text-white`}>
                        {getStatusText(feature.status)}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Planned Features */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Planned Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plannedFeatures.map((feature, index) => (
                <Card key={index} className="border-dashed">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-4">
                      Coming Soon
                    </Badge>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Architecture Overview</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">CLEAN + MVVM Architecture</h3>
                <p className="text-muted-foreground mb-6">
                  Umbrella follows the CLEAN architecture principles combined with MVVM pattern,
                  ensuring maintainable, scalable, and testable code. The separation of concerns
                  allows for easy feature development and bug fixing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Code className="h-5 w-5 text-primary mr-3" />
                    <span>Modular component structure</span>
                  </li>
                  <li className="flex items-center">
                    <Database className="h-5 w-5 text-primary mr-3" />
                    <span>Centralized state management</span>
                  </li>
                  <li className="flex items-center">
                    <Lock className="h-5 w-5 text-primary mr-3" />
                    <span>Secure plugin execution environment</span>
                  </li>
                  <li className="flex items-center">
                    <Cpu className="h-5 w-5 text-primary mr-3" />
                    <span>Optimized performance across platforms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border">
                <h4 className="text-xl font-semibold mb-6">Technology Stack</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">Frontend</h5>
                    <p className="text-sm text-muted-foreground">
                      React Native, React Native Paper, Material Design 3
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Backend Runtime</h5>
                    <p className="text-sm text-muted-foreground">
                      Node.js, nodejs-mobile-react-native, vm2 sandboxing
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">State Management</h5>
                    <p className="text-sm text-muted-foreground">
                      Zustand with persistent storage
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Security</h5>
                    <p className="text-sm text-muted-foreground">
                      Sandboxed execution, permission-based access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
