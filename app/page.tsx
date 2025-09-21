import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Shield, Zap, Puzzle, Globe, Settings, Smartphone, Code } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      icon: Puzzle,
      title: "Plugin System",
      description: "Dynamically download and execute JavaScript plugins in a secure environment."
    },
    {
      icon: Shield,
      title: "Sandboxed Execution",
      description: "Secure Node.js environment for running untrusted code safely."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for fast plugin execution and minimal memory usage."
    },
    {
      icon: Globe,
      title: "Web Scraping",
      description: "Built-in Node.js support for web scraping and data extraction."
    },
    {
      icon: Settings,
      title: "Comprehensive Settings",
      description: "Full customization options for app behavior and user preferences."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Android support with planned iOS, web, and desktop compatibility."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroCarousel />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Umbrella
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A modular React Native application featuring a plugin-based architecture
            that allows dynamic downloading and execution of JavaScript plugins in a secure Node.js sandbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/screenshots">
              <Button size="lg" className="text-lg px-8 py-6">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
            </Link>
            <Link href="https://github.com/new-umbrella/umbrella" target="_blank">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Code className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the next generation of media applications with our innovative plugin system
                and enterprise-grade security features.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who have discovered the power of modular media applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://github.com/new-umbrella/umbrella/releases">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </Link>
              <Link href="https://github.com/new-umbrella/umbrella" target="_blank">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">Umbrella</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Umbrella. Built with React Native and Node.js.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
