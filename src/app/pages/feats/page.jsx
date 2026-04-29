import { SocialSidebar } from "@/app/components/SocialSideBar";

export default function Home() {
  return (
    <div className="min-h-[90vh] text-2xl font-bold flex items-center justify-center">
      <SocialSidebar 
        urls={{
          github: "https://github.com/Harshan-t",
          linkedin: "https://www.linkedin.com/in/harshan-t/",
          leetcode: "https://leetcode.com/your-username",
          email: "harshanthangavel123@gmail.com",
          credly: "https://www.credly.com/users/"
        }}
      />
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="pb-24">
          My Achievements.
        </div>
      </div>
    </div>
  );
}