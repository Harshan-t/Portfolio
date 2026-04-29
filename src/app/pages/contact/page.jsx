"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane, FaPhone, FaHackerrank } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { SocialSidebar } from "@/app/components/SocialSideBar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add email service integration here
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12 px-4 sm:px-6">
      <SocialSidebar 
        urls={{
          github: "https://github.com/Harshan-t",
          linkedin: "https://www.linkedin.com/in/harshan-t/",
          leetcode: "https://leetcode.com/your-username",
          email: "harshanthangavel123@gmail.com",
          credly: "https://www.credly.com/users/stellar2703"
        }}
      />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborating on projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Send me a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2 sm:py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25 text-sm md:text-base"
              >
                <FaPaperPlane className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 flex-shrink-0" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-5 md:space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                Contact Information
              </h2>
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                  <div className="bg-purple-600/20 p-2 sm:p-2.5 md:p-3 rounded-lg flex-shrink-0">
                    <MdEmail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-300 text-xs sm:text-sm">Email</p>
                    <a
                      href="mailto:harshanthangavel123@gmail.com"
                      className="text-white hover:text-purple-300 transition-colors text-sm md:text-base break-all"
                    >
                      harshanthangavel123@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                  <div className="bg-purple-600/20 p-2 sm:p-2.5 md:p-3 rounded-lg flex-shrink-0">
                    <MdPhone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm">Phone</p>
                    <a
                      href="tel:+918778257295"
                      className="text-white hover:text-purple-300 transition-colors text-sm md:text-base"
                    >
                      +91 87782 57295
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                  <div className="bg-purple-600/20 p-2 sm:p-2.5 md:p-3 rounded-lg flex-shrink-0">
                    <MdLocationOn className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm">Location</p>
                    <p className="text-white text-sm md:text-base">Tirupur, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6">Follow Me</h2>
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                <a
                  href="https://github.com/Harshan-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600/20 hover:bg-purple-600/30 p-2 w-fit sm:p-2.5 md:p-4 rounded-lg transition-all duration-300 group"
                  title="GitHub"
                >
                  <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400 group-hover:text-purple-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/harshan-t/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600/20 hover:bg-purple-600/30 p-2 w-fit sm:p-2.5 md:p-4 rounded-lg transition-all duration-300 group"
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400 group-hover:text-purple-300" />
                </a>
                <a
                  href="https://leetcode.com/u/Harshan-t/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600/20 hover:bg-purple-600/30 p-2 w-fit sm:p-2.5 md:p-4 rounded-lg transition-all duration-300 group"
                  title="LeetCode"
                >
                  <SiLeetcode className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400 group-hover:text-purple-300" />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/harshanthangave1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600/20 hover:bg-purple-600/30 p-2 w-fit sm:p-2.5 md:p-4 rounded-lg transition-all duration-300 group"
                  title="HackerRank"
                >
                  <FaHackerrank className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400 group-hover:text-purple-300" />
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2.5 sm:mb-3 md:mb-4">
                Let's Connect
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                I'm currently pursuing B.Tech in AI & Data Science and am passionate about web development, DevOps, and
                AI technologies. Whether you have a project in mind, need technical consultation, or just want to
                connect, I'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
