"use client";

import StickyScroll from "@/app/components/ui/sticky-scroll-reveal";
import { CanvasRevealEffect } from "@/app/components/ui/canvas-reveal-effect";
import { CardSpotlight } from "@/app/components/ui/card-spotlight";
import { SiGooglecloud, SiGithub } from "react-icons/si";
import { SocialSidebar } from "@/app/components/SocialSideBar";

const projects = [
  {
    id: "1",
    title: "Venue Booking System",
    description:
      "A comprehensive system for booking venues, managing schedules, and handling payments.",
    gitlink: "https://github.com/Harshan-t/Venue_Booking_System_Web.git",
    image: "/project_img/image.png",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Venue Booking System
      </div>
    ),
  },
  {
    id: "2",
    title: "Student registration Portal",
    description:
      "A portal for student registration, allowing students to enroll in courses and manage their profiles.",
    gitlink: "https://github.com/Harshan-t/student_registration_portal_web.git",
    image: "/project_img/stu_adm.jpg",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Student registration Portal
      </div>
    ),
  },
];

const skillsData = {
  frontend: [
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 40 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "Tailwind CSS", level: 90 },
    { name: "GSAP", level: 65 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 78 },
    { name: "MongoDB", level: 80 },
    { name: "Git/GitHub", level: 85 }
  ]
};

export default function ScrollGalleryDemo() {
  return (
    <div className="text-white px-4 sm:px-6 lg:px-8">
      <SocialSidebar 
        urls={{
          github: "https://github.com/Harshan-t",
          linkedin: "https://www.linkedin.com/in/harshan-t/",
          leetcode: "https://leetcode.com/your-username",
          email: "harshanthangavel123@gmail.com",
          credly: "https://www.credly.com/users/stellar2703"
        }}
      />
      {/* Header Section */}
      <div className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
        Hi, Yo! I am Harshan, Yo!
      </div>
      
      {/* Introduction */}
      <div className="text-sm sm:text-base lg:text-lg leading-relaxed mb-12 max-w-4xl mx-auto">
        Hey! I'm a student at Bannari Amman Institute of Technology and a passionate web developer who loves turning creative ideas into interactive digital experiences. I enjoy building smooth, responsive UIs and immersive 3D environments using tools like React, Next.js, Three.js, and Tailwind CSS.
      </div>

      {/* Professional Summary */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-purple-300">Professional Summary</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <CardSpotlight className="h-auto" color="#1a1a2e">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-100 leading-relaxed">
                Proficient in building responsive web applications using React.js, Next.js, Tailwind CSS, and GSAP for modern UI/UX.
              </p>
            </div>
          </CardSpotlight>
          
          <CardSpotlight className="h-auto" color="#1a2332">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-100 leading-relaxed">
                Experienced with JavaScript (ES6+), Node.js, and MongoDB/PostgreSQL for full-stack development.
              </p>
            </div>
          </CardSpotlight>
          
          <CardSpotlight className="h-auto" color="#1a2e26">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-100 leading-relaxed">
                Skilled in version control with Git/GitHub and deployment on Vercel & Netlify.
              </p>
            </div>
          </CardSpotlight>
          
          <CardSpotlight className="h-auto" color="#2e251a">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-100 leading-relaxed">
                Familiar with Figma, Postman, and Docker, ensuring smooth design, testing, and delivery workflows.
              </p>
            </div>
          </CardSpotlight>
        </div>
      </div>

      {/* Experience Section - Timeline */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-purple-300">Experience</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-400 to-transparent"></div>
          
          {/* Timeline Item */}
          <div className="relative pl-20 pb-8">
            {/* Timeline Dot */}
            <div className="absolute left-6 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 shadow-lg shadow-purple-500/50"></div>
            
            {/* Content Card */}
            <CardSpotlight className="h-auto" color="#1a1a2e">
              <div className="relative z-50">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Software Development Intern (DevOps/Cloud)</h3>
                    <p className="text-purple-400 font-medium">Rampex Technologies</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="whitespace-nowrap">August 2025 - Present</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-100 leading-relaxed">
                    Contributing to the development of a Learning Management System (LMS) portal, focusing on building scalable features, enhancing user experience, and ensuring seamless integration with company workflows.
                  </p>
                </div>
              </div>
            </CardSpotlight>
          </div>

          {/* You can add more timeline items here in the future */}
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-purple-300">🔧 Skills & Tools</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Frontend Development */}
          <CardSpotlight className="h-auto" color="#1a1a2e">
            <h3 className="text-xl font-semibold mb-6 text-purple-400 flex items-center">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
              Frontend Development
            </h3>
            <div className="space-y-4">
              {skillsData.frontend.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                    <span className="text-purple-400 text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardSpotlight>

          {/* Backend & Full Stack */}
          <CardSpotlight className="h-auto" color="#1a2e26">
            <h3 className="text-xl font-semibold mb-6 text-purple-400 flex items-center">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
              Backend & Full Stack
            </h3>
            <div className="space-y-4">
              {skillsData.backend.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                    <span className="text-purple-400 text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardSpotlight>
        </div>
      </div>

      {/* Certifications & Achievements Section */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-purple-300">Certifications & Achievements</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">

            {/* GitHub Foundations */}
            <CardSpotlight className="h-auto w-full">
              <div className="text-center relative z-50">
                <div className="bg-gray-600/20 rounded-lg mx-auto w-fit mb-4 p-4 z-50">
                  <SiGithub className="w-10 h-10 text-gray-300 relative z-50" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 relative z-50">GitHub Foundations</h3>
                <p className="text-gray-400 text-sm relative z-50">GitHub</p>
              </div>
            </CardSpotlight>
          </div>

          {/* Key Achievements */}
          <CardSpotlight className="h-auto w-full">
            <div className="">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="bg-purple-600/20 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">80%</div>
                  <div className="text-gray-300 text-sm">Manual Work Reduction</div>
                  <div className="text-gray-500 text-xs">Student Portal Project</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">30%</div>
                  <div className="text-gray-300 text-sm">AI Response Accuracy</div>
                  <div className="text-gray-500 text-xs">Harvey Legal Assistant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">70%</div>
                  <div className="text-gray-300 text-sm">Conflict Reduction</div>
                  <div className="text-gray-500 text-xs">Venue Booking System</div>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-8" id="projects">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-purple-300">Featured Projects</h2>
        <StickyScroll items={projects} />
      </div>
    </div>
  )
}
