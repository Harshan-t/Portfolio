"use client";
import React from "react";
import StickyScroll from "@/app/components/ui/sticky-scroll-reveal";

const projects = [
  {
    title: "Venue Booking System",
    description:
      "A comprehensive system for booking venues, managing schedules, and handling payments.",
    link: "",
    Image: "",
    gitlink: "https://github.com/Harshan-t/Venue_Booking_System_Web.git",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Venue Booking System
      </div>
    ),
  },
  {
    title: "Student registration Portal",
    description:
      "A portal for student registration, allowing students to enroll in courses and manage their profiles.",
    link: "",
    Image: "",
    gitlink: "https://github.com/Harshan-t/student_registration_portal_web.git",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Student registration Portal
      </div>
    ),
  },
  {
    title: "DID (Decentralized Identity) System",
    description:
      "A system for managing decentralized identities, enabling secure and private identity verification.",
    link: "",
    Image: "",
    gitlink: "https://github.com/Harshan-t/DID.git",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        DID (Decentralized Identity) System
      </div>
    ),
  },
  {
    title: "C",
    description:
      "A system for managing decentralized identities, enabling secure and private identity verification.",
    link: "",
    Image: "",
    gitlink: "",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        C
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="z-99">
      <StickyScroll content={projects} />
    </div>
  );
}
