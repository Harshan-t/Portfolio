"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollStickyGallery({ items = [] }) {
  const containerRef = useRef(null)
  const imagesRef = useRef(null)
  const mobileTextSectionsRef = useRef([])
  const desktopTextSectionsRef = useRef([])
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [hoveredItem, setHoveredItem] = useState(null)
  const [visibleIndex, setVisibleIndex] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const setupScrollTriggers = () => {
      // Clear existing triggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Get active text sections based on current layout
      const mobileContainer = containerRef.current.querySelector('.block.md\\:hidden')
      const desktopContainer = containerRef.current.querySelector('.hidden.md\\:flex')
      
      let activeTextSections = []
      
      if (mobileContainer && window.getComputedStyle(mobileContainer).display !== 'none') {
        // Mobile is active
        activeTextSections = mobileTextSectionsRef.current.filter(Boolean)
      } else if (desktopContainer && window.getComputedStyle(desktopContainer).display !== 'none') {
        // Desktop is active
        activeTextSections = desktopTextSectionsRef.current.filter(Boolean)
      }

      // Create scroll triggers for active text sections
      activeTextSections.forEach((section, index) => {
        if (!section) return

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setVisibleIndex(index),
          onEnterBack: () => setVisibleIndex(index),
        })
      })
    }

    // Setup initial triggers
    setupScrollTriggers()

    // Re-setup on resize
    const handleResize = () => {
      setTimeout(setupScrollTriggers, 100)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      window.removeEventListener('resize', handleResize)
    }
  }, [items])

  return (
    <div ref={containerRef} className="relative">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Sticky Image at Top */}
        <div className="sticky top-0 z-20 h-[50vh] flex items-center justify-center">
          <div className="h-full w-full flex items-center justify-center p-4 relative">
            {items.map((item, index) => (
              <div
                key={`mobile-image-${item.id}`}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: visibleIndex === index ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  zIndex: visibleIndex === index ? 10 : 5,
                }}
              >
                {item.image ? (
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="object-cover rounded-lg shadow-2xl"
                    style={{ 
                      width: '400px',
                      height: '225px',
                      aspectRatio: '16/9',
                    }}
                  />
                ) : (
                  <div 
                    className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-2xl flex items-center justify-center text-white"
                    style={{ 
                      width: '400px',
                      height: '225px',
                      aspectRatio: '16/9' 
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Text Content */}
        <div className="relative z-10">
          {items.map((item, index) => (
            <div
              key={`mobile-text-${item.id}`}
              ref={(el) => (mobileTextSectionsRef.current[index] = el)}
              className="min-h-[60vh] flex flex-col justify-center py-12 px-6"
            >
              <div className="max-w-lg mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">{item.title}</h2>
                <p className="text-base leading-relaxed text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex min-h-screen">
        {/* Text Content - Left Side */}
        <div className="w-1/2 pr-8 order-1 lg:pl-24">
          {items.map((item, index) => (
            <div
              key={`desktop-text-${item.id}`}
              ref={(el) => (desktopTextSectionsRef.current[index] = el)}
              className="min-h-[80vh] flex flex-col justify-center py-16 px-8"
            >
              <div className="max-w-lg">
                <h2 className="text-4xl font-bold mb-6">{item.title}</h2>
                <p className="text-lg leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Images - Right Side (Sticky) */}
        <div className="w-1/2 relative order-2">
          <div ref={imagesRef} className="sticky top-0 h-screen flex items-center justify-center">
            {items.map((item, index) => (
              <div
                key={`desktop-image-${item.id}`}
                className="gallery-image absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: visibleIndex === index ? 1 : 0,
                  pointerEvents: visibleIndex === index ? "auto" : "none",
                  transition: "opacity 0.5s",
                }}
              >
                {item.image ? (
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="object-cover rounded-lg shadow-2xl cursor-pointer"
                    style={{ 
                      width: '500px',
                      height: '281px',
                      aspectRatio: '16/9' 
                    }}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => item.gitlink && window.open(item.gitlink, "_blank")}
                  />
                ) : (
                  <div
                    className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-2xl flex items-center justify-center cursor-pointer"
                    style={{ 
                      width: '500px',
                      height: '281px',
                      aspectRatio: '16/9' 
                    }}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => item.gitlink && window.open(item.gitlink, "_blank")}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Cursor - Desktop Only */}
      {hoveredItem && (
        <div
          className="fixed pointer-events-none z-50 hidden md:block"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Rotating Background Circle */}
          <div className="absolute inset-0 w-20 h-20 bg-white/10 backdrop-invert-80 rounded-full animate-spin flex items-center justify-center">
          </div>

          {/* Rotating Text */}
          <div className="relative w-20 h-20 animate-spin">
            <svg className="w-full h-full" viewBox="0 0 80 80">
              <defs>
                <path id="circle-path" d="M 40, 40 m -25, 0 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" />
              </defs>
              <text className="text-sm fill-white/80 font-medium">
                <textPath href="#circle-path" startOffset="0%">
                  Click to see my project ~
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 10s linear infinite;
        }
      `}</style>
    </div>
  )
}
 