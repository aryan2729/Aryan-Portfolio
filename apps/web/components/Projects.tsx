import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ExpandableVideo from "@/components/ExpandableVideo";

export default function Projects() {
  const data = [
    {
      title: "Ayutra",
      content: (
        <div className="grid md:grid-cols-2 gap-1 items-start">
          
          {/* LEFT: TEXT */}
          <div>
            <h4 className="text-3xl font-bold text-white mb-4">
              AI-Powered Ayurvedic Diet Platform
            </h4>
    
            <p className="text-neutral-300 mb-6 max-w-xl">
              Personalized Ayurvedic diet and lifestyle recommendations powered by AI.
            </p>
    
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-200">
              <li>AI-based Prakriti analysis using ML models</li>
              <li>Personalized diet & lifestyle plans</li>
              <li>Role-based dashboards (Admin, Practitioner, Patient)</li>
              <li>JWT authentication and secure REST APIs</li>
              <li>Progress tracking with analytics</li>
            </ul>
          </div>
    
          {/* RIGHT */}
          <div className="space-y-5">
           
            <ExpandableVideo src="https://res.cloudinary.com/drvyotehp/video/upload/v1766077704/Ayutra_jw8xpk.mp4" />

            <p className="text-sm text-neutral-300 leading-relaxed max-w-[520px]">
            Ayutra combines Ayurvedic knowledge with modern AI to deliver personalized, scalable healthcare guidance.
            </p>
          </div>
        </div>
      ),
    },    
    {
      title: "Nimbus Keyboard",
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-start">
    
          {/* LEFT: TEXT */}
          <div>
            <h4 className="text-3xl font-bold text-white mb-4">
              3D Interactive Product Website
            </h4>
    
            <p className="text-neutral-300 mb-6 max-w-xl">
              An immersive 3D product experience showcasing a mechanical keyboard with real-time interactions.
            </p>
    
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-200">
              <li>Real-time 3D keyboard visualization using Three.js</li>
              <li>Interactive keycap themes and switch demonstrations</li>
              <li>GSAP-powered smooth animations and transitions</li>
              <li>Stripe-based checkout integration</li>
              <li>CMS-driven content using Prismic</li>
            </ul>
          </div>
    
          {/* RIGHT: VIDEO */}
          <div className="space-y-5">
           <ExpandableVideo src="https://res.cloudinary.com/drvyotehp/video/upload/v1766080812/Screen_Recording_2025-12-18_at_11.15.46_PM-2_brkjzr.mov" />
    
            <p className="text-sm text-neutral-300 leading-relaxed max-w-[520px]">
            Nimbus delivers an immersive 3D product experience that combines storytelling, animation, and interactive e-commerce.
            </p>
          </div>
    
        </div>
      ),
    },    
    {
      title: "Second Brain",
      content: (
        <div className="grid md:grid-cols-2 gap-10 items-start">
    
          {/* LEFT: TEXT */}
          <div>
            <h4 className="text-3xl font-bold text-white mb-4">
              Personal Knowledge & Productivity Hub
            </h4>
    
            <p className="text-neutral-300 mb-6 max-w-xl">
              A centralized platform to capture, organize, search, and share digital knowledge.
            </p>
    
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-200">
              <li>Save notes, links, videos, articles, and repositories</li>
              <li>Full-text search with smart filters</li>
              <li>JWT-based authentication and secure APIs</li>
              <li>Public shareable collections via unique links</li>
              <li>Clean, responsive UI built with TypeScript</li>
            </ul>
          </div>
    
          {/* RIGHT: VIDEO */}
          <div className="space-y-5">
          <ExpandableVideo src="https://res.cloudinary.com/drvyotehp/video/upload/v1766077699/SecondBrain_ej8zn1.mp4" />
    
            <p className="text-sm text-neutral-300 leading-relaxed max-w-[520px]">
            Second Brain helps users organize scattered information into structured, searchable knowledge that boosts focus and productivity.
            </p>
          </div>
    
        </div>
      ),
    },    
  ];
  return (
    <div className="relative min-h-screen w-full ">
      <Timeline data={data}  />
    </div>
  );
}

