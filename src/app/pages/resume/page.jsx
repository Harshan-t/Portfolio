"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { SocialSidebar } from "@/app/components/SocialSideBar";

export default function Resume() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to place your resume.pdf in the public folder
    link.download = 'Harshan_T_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <SocialSidebar 
        urls={{
          github: "https://github.com/Harshan-t",
          linkedin: "https://www.linkedin.com/in/harshan-t/",
          leetcode: "https://leetcode.com/your-username",
          email: "harshanthangavel123@gmail.com",
          credly: "https://www.credly.com/users/stellar2703"
        }}
      />
      <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
        {/* Download Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50 cursor-pointer"
          >
            <FaDownload className="h-5 w-5" />
            Download Resume
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">HARSHAN T</h1>
          <p className="text-lg md:text-xl text-purple-300 mb-6">B.Tech in Artificial Intelligence and Data Science</p>
          
          {/* Contact Info - With Icons */}
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-purple-400" />
              <p className="text-sm">Tirupur, Tamil Nadu</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MdPhone className="text-purple-400" />
              <p className="text-sm">+91 87782 57295</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-purple-400" />
              <p className="text-sm">harshanthangavel123@gmail.com</p>
            </div>
            <div className="flex justify-center gap-6 text-sm mt-4">
              <a href="https://github.com/Harshan-t" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <FaGithub className="text-lg" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/harshan-t/" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500 pb-2">Education</h2>
          <div className="space-y-4">
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white">Bannari Amman Institute of Technology</h3>
              <p className="text-purple-300">B.Tech in Artificial Intelligence and Data Science</p>
              <p className="text-gray-300 text-sm">2023 - 2027 | <strong>CGPA:</strong> 8/10</p>
            </div>
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white">A.V.P. Trust School</h3>
              <p className="text-purple-300">Higher Secondary Education</p>
              <p className="text-gray-300 text-sm">2008 - 2023 | <strong>Score:</strong> 92%</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500 pb-2">Projects</h2>
          <div className="space-y-6">
            {/* Triburg */}
            <div className="bg-gray-700/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Triburg– Company Product Showcase Website</h3>
              <ul className="text-gray-300 space-y-2 mb-3">
                <li>• Developed a responsive website for showcasing company products with a clean UI.</li>
                <li>• Improved brand presentation and enhanced product exploration for clients.</li>
              </ul>
              <p className="text-sm text-purple-300 mb-2"><strong>Technologies:</strong> React, Express, MySQL</p>
              <a href="#" className="text-purple-400 hover:text-purple-300 text-sm">GitHub Repository</a>
            </div>

            {/* Student Application Portal */}
            <div className="bg-gray-700/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Student Application Portal</h3>
              <ul className="text-gray-300 space-y-2 mb-3">
                <li>• Built and deployed a student admission portal using Docker (NGINX).</li>
                <li>• Reduced manual work by 80%, handling 2000+ applications yearly.</li>
              </ul>
              <p className="text-sm text-purple-300 mb-2"><strong>Technologies:</strong> React, Express, MySQL, Docker</p>
              <a href="https://github.com/Harshan-t/student_registration_portal_web.git" className="text-purple-400 hover:text-purple-300 text-sm">GitHub Repository</a>
            </div>

            {/* Harvey: Legal AI Assistant */}
            <div className="bg-gray-700/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Harvey: Legal AI Assistant</h3>
              <ul className="text-gray-300 space-y-2 mb-3">
                <li>• Led a 3-member team to build an AI chatbot for legal queries.</li>
                <li>• Improved response accuracy by 30% and reduced manual costs.</li>
              </ul>
              <p className="text-sm text-purple-300 mb-2"><strong>Technologies:</strong> Ollama, React</p>
              <a href="https://github.com/Harshan-t/law-bot.git" className="text-purple-400 hover:text-purple-300 text-sm">GitHub Repository</a>
            </div>

            {/* Venue Booking System */}
            <div className="bg-gray-700/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Venue Booking System</h3>
              <ul className="text-gray-300 space-y-2 mb-3">
                <li>• Developed a scheduling system reducing booking conflicts by 70%.</li>
              </ul>
              <p className="text-sm text-purple-300 mb-2"><strong>Technologies:</strong> ReactJS, ExpressJS, MySQL</p>
              <a href="https://github.com/Harshan-t/Venue_Booking_System_Web.git" className="text-purple-400 hover:text-purple-300 text-sm">GitHub Repository</a>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500 pb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="text-purple-300 font-semibold mb-2">Web Development</h3>
              <p className="text-gray-300 text-sm">React, Express, JavaScript</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="text-purple-300 font-semibold mb-2">DevOps & Systems</h3>
              <p className="text-gray-300 text-sm">Docker, Proxmox, Linux</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="text-purple-300 font-semibold mb-2">Programming</h3>
              <p className="text-gray-300 text-sm">C, C++, Python, JavaScript</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="text-purple-300 font-semibold mb-2">AI/ML Tools</h3>
              <p className="text-gray-300 text-sm">Ollama, Vertex AI</p>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500 pb-2">Certifications & Achievements</h2>
          <div className="bg-gray-700/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-3">Google Cloud Certifications</h3>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• Introduction to Generative AI</li>
              <li>• Prompt Design in Vertex AI</li>
              <li>• GenAI Apps with Gemini & Streamlit</li>
            </ul>
            <div className="mt-4">
              <h4 className="text-purple-300 font-semibold mb-2">Leadership & Collaboration</h4>
              <p className="text-gray-300 text-sm">Strong experience in project leadership & cross-functional collaboration</p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500 pb-2">Languages</h2>
          <div className="bg-gray-700/30 p-4 rounded-lg">
            <div className="flex flex-wrap gap-4">
              <div className="text-gray-300">
                <span className="font-semibold text-white">English:</span> Fluent
              </div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">Tamil:</span> Native
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}