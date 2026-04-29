import Link from "next/link";
import { SocialSidebar } from "@/app/components/SocialSideBar";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden" id="hero">
      <SocialSidebar 
        urls={{
          github: "https://github.com/Harshan-t",
          linkedin: "https://www.linkedin.com/in/harshan-t/",
          leetcode: "https://leetcode.com/your-username",
          email: "harshanthangavel123@gmail.com",
          credly: "https://www.credly.com/users/stellar2703"
        }}
      />
      <div className="relative z-10 min-h-screen flex items-start justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex flex-col items-center space-y-6 animate-slide-in-up">
            <div>
              <img
                src="favicon.ico"
                alt=""
                className="h-[32px] w-[32px] md:h-[80px] md:w-[80px] hover:h-[38px] hover:w-[38px] md:hover:h-[100px] md:hover:w-[100px] transition-all duration-300 rounded-full"
              />
            </div>
            <div className="h-[54px] px-[8px] text-xl bg-[#171717] flex items-center justify-center rounded-full border-[2px] border-[#363636] pr-4">
              <div className="bg-[#262626] flex items-center justify-center rounded-full size-[40px] text-[20px] mr-2 -rotate-40">
                <div className="animate-wave">🖐</div>
              </div>
              Hi!! I am Harshan
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-up delay-100">

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I'm a passionate student exploring the MERN stack every day, building JavaScript-powered applications and
              constantly learning new technologies.
            </p>
          </div>

          <div className="animate-slide-in-up delay-100">
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {["React", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript"].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-600 hover:border-purple-600 hover:text-purple-600 transition-all duration-500 ease-out hover:scale-105"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 animate-slide-in-up delay-400">
            <p className="text-gray-400">I'd love to connect, collaborate, or just chat about web development!</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/pages/contact">
                <button className="group relative px-8 py-3 bg-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 overflow-hidden cursor-pointer">
                  <span className="relative z-10">Let's Collaborate</span>
                </button>
              </Link>

              <Link href="/pages/aboutme#projects">
                <button className="px-8 py-3 bg-gray-800 text-gray-300 rounded-xl font-medium border border-gray-600 hover:border-purple-600 hover:text-purple-600 transition-all duration-500 ease-out hover:scale-105 cursor-pointer">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
