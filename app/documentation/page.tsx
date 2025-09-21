import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Download,
  Code,
  Book,
  Zap,
  Shield,
  Settings,
  ExternalLink,
  Terminal,
  FileText,
  Users,
  Github
} from "lucide-react"
import Link from "next/link"

export default function Documentation() {
  const docs = [
    {
      icon: Download,
      title: "Installation",
      description: "Get started with Umbrella - download and install the app",
      sections: ["Android APK", "Building from Source", "Requirements"]
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Configure Umbrella to match your preferences and needs",
      sections: ["Initial Setup", "Plugin Management", "App Settings"]
    },
    {
      icon: Code,
      title: "Plugin Development",
      description: "Create your own plugins for Umbrella",
      sections: ["Plugin API", "Sandbox Environment", "Publishing Plugins"]
    },
    {
      icon: Shield,
      title: "Security",
      description: "Understanding Umbrella's security model and best practices",
      sections: ["Sandboxing", "Permissions", "Code Review"]
    },
    {
      icon: Terminal,
      title: "API Reference",
      description: "Complete API documentation for plugin developers",
      sections: ["Core APIs", "Media APIs", "Storage APIs"]
    },
    {
      icon: Book,
      title: "Guides",
      description: "Step-by-step guides for common tasks and use cases",
      sections: ["Basic Usage", "Advanced Features", "Troubleshooting"]
    }
  ]

  const quickStart = [
    {
      step: 1,
      title: "Download APK",
      description: "Download the latest APK from our releases page"
    },
    {
      step: 2,
      title: "Install App",
      description: "Install the APK on your Android device"
    },
    {
      step: 3,
      title: "Grant Permissions",
      description: "Grant necessary permissions for full functionality"
    },
    {
      step: 4,
      title: "Install Plugins",
      description: "Download and install plugins from trusted sources"
    },
    {
      step: 5,
      title: "Start Exploring",
      description: "Begin using Umbrella with your favorite plugins"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Header */}
        <section className="py-24 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Umbrella - from installation to advanced plugin development.
            </p>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Quick Start</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {quickStart.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Documentation</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docs.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <doc.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{doc.title}</CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {doc.sections.map((section, sectionIndex) => (
                        <Badge key={sectionIndex} variant="outline" className="mr-2">
                          {section}
                        </Badge>
                      ))}
                    </div>
                    <Link href="https://github.com/new-umbrella/umbrella#readme" target="_blank">
                      <Button className="w-full">
                        Read Documentation
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Plugin Development */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Plugin Development</h2>
              <p className="text-xl text-muted-foreground">
                Create powerful plugins that extend Umbrella's functionality
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Getting Started</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Code className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Plugin Structure</h4>
                      <p className="text-muted-foreground text-sm">
                        Learn the basic structure and required files for Umbrella plugins
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Security Model</h4>
                      <p className="text-muted-foreground text-sm">
                        Understand how plugins run in a sandboxed environment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">API Access</h4>
                      <p className="text-muted-foreground text-sm">
                        Access Umbrella's APIs for media playback, storage, and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border">
                <h4 className="text-xl font-semibold mb-6">Sample Plugin</h4>
                <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
                  {`// example-plugin.js
import { type CheerioAPI, load } from "cheerio";

class ExamplePlugin {
  async search(query: string, page?: number) {
    ...
  }
  async getCategory(category: string, page?: number): Promise<object> {
    ...
  }
  async getHomeCategories(): Promise<object[]> {
    ...
  }
  async getItemDetails(id: string): Promise<object> {
    ...
  }
  async getItemMedia(id: string): Promise<object[]> {
    ...
  }
}

module.exports = {
  ...
};

export default ExamplePlugin;
`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Support */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Community & Support</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Get help, contribute to the project, and connect with other developers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Github className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>GitHub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Report issues, contribute code, and track development progress
                  </p>
                  <Link href="https://github.com/new-umbrella/umbrella" target="_blank">
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Repository
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Discussions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Join community discussions and get help from other users
                  </p>
                  <Link href="https://github.com/new-umbrella/umbrella/discussions" target="_blank">
                    <Button variant="outline" className="w-full">
                      Join Community
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Contributing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn how to contribute to Umbrella's development
                  </p>
                  <Link href="https://github.com/new-umbrella/umbrella/blob/master/CONTRIBUTING.md" target="_blank">
                    <Button variant="outline" className="w-full">
                      Read Guidelines
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
