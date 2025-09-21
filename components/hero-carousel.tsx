"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const screenshots = [
  {
    image: "/assets/images/screenshots/SplashScreen.png",
    title: "Splash Screen",
    description: "Welcome to Umbrella with elegant branding and smooth loading experience"
  },
  {
    image: "/assets/images/screenshots/HomeScreen.png",
    title: "Home Dashboard",
    description: "Intuitive dashboard providing quick access to all your media content"
  },
  {
    image: "/assets/images/screenshots/DetailsScreen.png",
    title: "Content Details",
    description: "Detailed view of media content with metadata and options"
  },
  {
    image: "/assets/images/screenshots/PluginList.png",
    title: "Plugin Management",
    description: "Powerful plugin system allowing dynamic content sources and features"
  }
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {screenshots.map((screenshot, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentIndex
            ? "opacity-30 scale-100"
            : "opacity-0 scale-95"
            }`}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 flex items-center justify-center">
            <div className="text-center transform transition-all duration-1000 ease-in-out">
              <div className="w-80 h-[600px] bg-card/80 backdrop-blur-sm rounded-3xl border shadow-2xl flex flex-col items-center justify-center p-8 mx-auto relative overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-card rounded-b-2xl border-b border-border"></div>

                <div className="mt-8 text-center">
                  <div className="w-full h-80 relative mb-6 rounded-2xl overflow-hidden">
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {screenshot.description}
                  </p>
                </div>

                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-20 left-8 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  <div className="absolute top-32 right-12 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-20 right-8 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
              ? "bg-primary scale-125"
              : "bg-primary/40 hover:bg-primary/60"
              }`}
          />
        ))}
      </div>
    </div>
  )
}
