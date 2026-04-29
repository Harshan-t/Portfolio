"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Grid3X3Icon, XIcon } from "lucide-react"
import { IconHome, IconUser, IconFileText, IconMail } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { cn } from "@/app/lib/utils"

export default function AssistiveTouch() {
    const [isOpen, setIsOpen] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
    const constraintsRef = useRef(null)
    const hasDraggedRef = useRef(false)
    const buttonRef = useRef(null)
    const router = useRouter()

    // Navigation links from Navbar component
    const links = [
        {
            title: "Home",
            icon: IconHome,
            href: "/",
        },
        {
            title: "About me",
            icon: IconUser,
            href: "/pages/aboutme",
        },
        {
            title: "Resume",
            icon: IconFileText,
            href: "/pages/resume",
        },
        {
            title: "Contact",
            icon: IconMail,
            href: "/pages/contact",
        },
    ]

    const updateButtonPosition = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            setButtonPosition({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            })
        }
    }

    const handleDragStart = () => {
        setIsDragging(true)
        hasDraggedRef.current = true
    }

    const handleDrag = () => {
        if (isOpen) {
            updateButtonPosition()
        }
    }

    const handleDragEnd = () => {
        setIsDragging(false)
        updateButtonPosition()
        setTimeout(() => {
            hasDraggedRef.current = false
        }, 100)
    }

    const handleClick = (e) => {
        if (hasDraggedRef.current) {
            e.preventDefault()
            e.stopPropagation()
            return
        }
        updateButtonPosition()
        setIsOpen(!isOpen)
    }

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && buttonRef.current && !buttonRef.current.contains(event.target)) {
                const isMenuClick = event.target.closest("[data-menu-item]")
                if (!isMenuClick) {
                    setIsOpen(false)
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    const handleMenuItemClick = (href) => {
        router.push(href)
        setIsOpen(false)
    }

    return (
        <div ref={constraintsRef} className="fixed inset-0 z-50 pointer-events-none md:hidden">
            <motion.div
                ref={buttonRef}
                className={cn(
                    "fixed w-18 h-18 rounded-full flex items-center justify-center cursor-grab",
                    "bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90",
                    "shadow-2xl shadow-black/50",
                    "border border-gray-600/30",
                    "backdrop-blur-md",
                    "active:cursor-grabbing pointer-events-auto",
                    "hover:shadow-gray-700/40 transition-all duration-300",
                    isDragging ? "opacity-70" : "opacity-100",
                )}
                style={{ 
                    right: "-20px", 
                    top: "100px",
                    filter: isOpen ? "brightness(1.15)" : "brightness(1)",
                }}
                animate={{
                    scale: isOpen ? 1.1 : 1,
                    rotate: isOpen ? 180 : 0,
                }}
                transition={{
                    duration: 0.25,
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "tween"
                }}
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                dragMomentum={false}
                onDragStart={handleDragStart}
                onDrag={handleDrag} // Update position while dragging
                onDragEnd={handleDragEnd}
                onClick={handleClick}
                aria-label="Assistive Touch Menu"
            >
                {/* Animated inner glow */}
                <motion.div
                    className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent"
                    animate={{
                        opacity: isOpen ? 0.6 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                />
                
                {/* Pulsing ring effect */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-gray-500/20"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Icon container */}
                <motion.div
                    animate={{
                        rotate: isOpen ? 90 : 0,
                    }}
                    transition={{ 
                        duration: 0.2,
                        ease: [0.25, 0.1, 0.25, 1],
                        type: "tween"
                    }}
                    className="relative z-10"
                >
                    {isOpen ? (
                        <XIcon 
                            className="text-gray-300 drop-shadow-lg" 
                            style={{ width: '24px', height: '24px', minWidth: '24px', minHeight: '24px' }} 
                        />
                    ) : (
                        <Grid3X3Icon 
                            className="text-gray-300 drop-shadow-lg" 
                            style={{ width: '24px', height: '24px', minWidth: '24px', minHeight: '24px' }} 
                        />
                    )}
                </motion.div>
                
                <span className="sr-only">Assistive Touch Menu</span>
            </motion.div>

            {/* Circular menu positioned around the button */}
            {isOpen && (
                <div
                    className="fixed pointer-events-auto"
                    style={{
                        left: buttonPosition.x - 24,
                        top: buttonPosition.y - 24,
                        transition: isDragging ? "none" : "all 0.1s ease-out", // Smooth follow when not dragging
                    }}
                >
                    <div className="relative w-18 h-18">
                        {/* Home - Top */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.3 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.3 }}
                            transition={{
                                duration: 0.4,
                                delay: 0,
                                ease: "easeOut"
                            }}
                            style={{ position: "absolute", left: "-10px", top: "-68px" }}
                        >
                            <Button
                                variant="ghost"
                                className="w-12 h-12 rounded-full bg-gray-800/70 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-gray-700/70"
                                onClick={() => handleMenuItemClick(links[0].href)}
                                data-menu-item
                            >
                                <IconHome style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px' }} />
                            </Button>
                        </motion.div>

                        {/* About - Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.3 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.3 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.15,
                                ease: "easeOut"
                            }}
                            style={{ position: "absolute", left: "-64px", top: "-32px" }}
                        >
                            <Button
                                variant="ghost"
                                className="w-12 h-12 rounded-full bg-gray-800/70 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-gray-700/70"
                                onClick={() => handleMenuItemClick(links[1].href)}
                                data-menu-item
                            >
                                <IconUser style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px' }} />
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.3 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.3 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.3,
                                ease: "easeOut"
                            }}
                            style={{ position: "absolute", left: "-64px", top: "32px" }}
                        >
                            <Button
                                variant="ghost"
                                className="w-12 h-12 rounded-full bg-gray-800/70 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-gray-700/70"
                                onClick={() => handleMenuItemClick(links[2].href)}
                                data-menu-item
                            >
                                <IconFileText style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px' }} />
                            </Button>
                        </motion.div>

                        {/* Contact - Bottom */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.3 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.3 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.45,
                                ease: "easeOut"
                            }}
                            style={{ position: "absolute", left: "-10px", top: "68px" }}
                        >
                            <Button
                                variant="ghost"
                                className="w-12 h-12 rounded-full bg-gray-800/70 backdrop-blur-sm text-white shadow-lg flex items-center justify-center hover:bg-gray-700/70"
                                onClick={() => handleMenuItemClick(links[3].href)}
                                data-menu-item
                            >
                                <IconMail style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px' }} />
                            </Button>
                        </motion.div>

                        {/* Resume - Left */}
                    </div>
                </div>
            )}
        </div>
    )
}
