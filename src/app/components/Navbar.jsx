import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";

import {
  IconHome,
  IconUser,
  IconAward,
  IconFileText,
  IconMail,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About me",
      icon: (
        <IconUser className="h-full w-full text-neutral-300" />
      ),
      href: "/pages/aboutme",
    },
    {
      title: "Resume",
      icon: (
        <IconFileText className="h-full w-full text-neutral-300" />
      ),
      href: "/pages/resume",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-300" />
      ),
      href: "/pages/contact",
    },
  ];
  return (
    <div className="flex items-center justify-center mb-10 w-full">
      <FloatingDock
        mobileClassName=""
        items={links} />
    </div>
  );
}