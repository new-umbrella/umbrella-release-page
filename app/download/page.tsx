import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Github,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink,
  Star,
  Users,
  Calendar,
  Download as DownloadIcon
} from "lucide-react"
import Link from "next/link"

export default function Download() {
  const releases = [
    {
      version: "v1.0.0-beta",
      date: "2025-01-15",
      size: "45.2 MB",
      downloads: 1250,
      changelog: [
        "Initial beta release",
        "Plugin system implementation",
        "Sandboxed execution environment",
        "Basic media player functionality"
      ],
      status: "latest",
      androidVersion: "API 21+"
    },
    {
      version: "v0.9.0-alpha",
      date: "2024-12-01",
      size: "42.8 MB",
      downloads: 890,
      changelog: [
        "Alpha release with core features",
        "Plugin loading mechanism",
        "Settings screen implementation",
        "UI improvements"
      ],
      status: "previous",
      androidVersion: "API 21+"
    }
  ]

  const requirements = [
    {
      icon: Smartphone,
      title: "Android Device",
      description: "Android 5.0 (API 21) or higher",
      required: true
    },
    {
      icon: CheckCircle,
      title: "Storage Permission",
      description: "Required for plugin downloads and media storage",
      required: true
    },
    {
      icon: Info,
      title: "Internet Connection",
      description: "Required for plugin downloads and updates",
      required: true
    },
    {
      icon: AlertTriangle,
      title: "Unknown Sources",
      description: "Enable installation from unknown sources in settings",
      required: true
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Header */}
        <section className="py-24 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Download Umbrella</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest version of Umbrella and start exploring the world of modular media applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://github.com/new-umbrella/umbrella/releases" target="_blank">
                <Button size="lg" className="text-lg px-8 py-6">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download Latest Release
                </Button>
              </Link>
              <Link href="https://github.com/new-umbrella/umbrella" target="_blank">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">System Requirements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {requirements.map((req, index) => (
                <Card key={index} className={req.required ? "border-primary/20" : ""}>
                  <CardHeader className="text-center">
                    <req.icon className={`h-12 w-12 mx-auto mb-4 ${req.required ? "text-primary" : "text-muted-foreground"}`} />
                    <CardTitle className="text-lg">{req.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>{req.description}</CardDescription>
                    {req.required && (
                      <Badge className="mt-4 bg-primary/10 text-primary border-primary/20">
                        Required
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Releases */}
        {/* <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Releases</h2>

            <div className="space-y-8">
              {releases.map((release, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <CardTitle className="text-2xl">{release.version}</CardTitle>
                        {release.status === "latest" && (
                          <Badge className="bg-green-500 text-white">
                            <Star className="mr-1 h-3 w-3" />
                            Latest
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          {release.date}
                        </div>
                        <div className="flex items-center">
                          <DownloadIcon className="mr-2 h-4 w-4" />
                          {release.size}
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          {release.downloads.toLocaleString()} downloads
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4">What's New</h4>
                        <ul className="space-y-2">
                          {release.changelog.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold mb-4">Requirements</h4>
                          <p className="text-sm text-muted-foreground">
                            Android {release.androidVersion}
                          </p>
                        </div>
                        <div className="flex gap-4 mt-6">
                          <Button className="flex-1">
                            <DownloadIcon className="mr-2 h-4 w-4" />
                            Download APK
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Release Notes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Installation Instructions */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Installation Instructions</h2>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-6">Step 1: Enable Unknown Sources</h3>
                <div className="bg-muted p-4 rounded mb-4">
                  <p className="font-mono text-sm">
                    Settings → Apps → Special access → Install unknown apps → [Your Browser] → Allow
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Enable installation from unknown sources to install the APK file.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-6">Step 2: Download and Install</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Click the download button above to get the APK file</li>
                  <li>Open the downloaded file to start installation</li>
                  <li>Follow the on-screen prompts to complete installation</li>
                  <li>Grant requested permissions when prompted</li>
                </ol>
              </div>

              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-6">Step 3: First Run</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Open Umbrella from your app drawer</li>
                  <li>Review and accept the initial setup prompts</li>
                  <li>Configure your preferences in Settings</li>
                  <li>Start installing plugins to extend functionality</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Beta Notice */}
        <section className="py-24 px-4 bg-yellow-50 dark:bg-yellow-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Beta Software Notice</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Umbrella is currently in beta. While we strive for stability, you may encounter bugs or incomplete features.
              Your feedback is invaluable in helping us improve the application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                Report Issues
              </Button>
              <Button variant="outline">
                Join Beta Testing
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
