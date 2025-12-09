"use client";

import { useState, useRef } from "react";
import type { JSX } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  type?: "video" | "image";
  path?: string;
  format?: string;
  alt?: string;
  svg?: JSX.Element;
  highlight?: string;
}

const features = [
  {
    title: "HubSpot Integration",
    description:
      "Direct connection to your HubSpot CRM. Automatically pulls emails, notes, calls, tasks, deal status, contact details, and timeline events for each meeting. Everything syncs in real-time, so your briefings are always up-to-date.",
    highlight: "31 unique integration features",
    type: "image",
    path: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    alt: "HubSpot Integration",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
  },
  {
    title: "AI-Powered Analysis",
    description:
      "Intelligent analysis of your CRM history. Identifies what matters most for each meeting context and surfaces the most relevant information automatically. No more scrolling through hundreds of emails—just the insights you need.",
    highlight: "Zero manual work required",
    type: "image",
    path: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1931&q=80",
    alt: "AI Analysis",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
  {
    title: "Structured Briefings",
    description:
      "Blueprint-style prep pages that make every meeting more efficient. Clean, structured layout with zero fluff. High clarity, engineering-grade precision. Every briefing is tailored to the specific meeting context and ready in seconds.",
    highlight: "Generated in under 30 seconds",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "Calendar Sync",
    description:
      "Automatic meeting detection from your calendar. Primer fetches, analyzes, and prepares your briefing before you even open it. Enter every meeting fully informed, every time. Works with Google Calendar, Outlook, and more.",
    highlight: "Works with all major calendars",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
] as Feature[];

const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, description, svg, highlight } = feature;

  return (
    <li>
      <button
        className="relative flex gap-3 items-center w-full py-5 text-base font-medium text-left md:text-lg border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150 rounded-lg px-2 -mx-2"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-150 flex-shrink-0 ${isOpen ? "text-[#3A5AFE]" : "text-gray-500"}`}>
          {svg}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className={`${isOpen ? "text-[#3A5AFE] font-semibold" : "text-gray-900"}`}>
              {title}
            </h3>
            {highlight && (
              <span className="text-xs px-2 py-1 bg-[#E8EDFF] text-[#3A5AFE] rounded-full font-medium">
                {highlight}
              </span>
            )}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#3A5AFE]" : "text-gray-400"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-gray-700 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed px-2">{description}</div>
      </div>
    </li>
  );
};

const Media = ({ feature }: { feature: Feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-lg aspect-square w-full sm:w-[26rem] shadow-xl border border-gray-200";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3A5AFE]/10 to-[#2A3FCC]/5 rounded-lg blur-2xl"></div>
        <Image
          src={path}
          alt={alt}
          className={`${style} relative object-cover object-center`}
          width={size.width}
          height={size.height}
        />
      </div>
    );
  } else {
    return (
      <div className={`${style} bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#3A5AFE]/10 to-[#2A3FCC]/5"></div>
        <div className="relative z-10 text-center p-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-[#3A5AFE] rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <div className="text-gray-900 font-semibold text-lg mb-2">Blueprint Briefing</div>
          <div className="text-gray-600 text-sm">Clean, structured, precise</div>
        </div>
      </div>
    );
  }
};

const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (
    <section
      className="py-16 md:py-24 space-y-16 md:space-y-24 max-w-[960px] mx-auto bg-white"
      id="features"
    >
      <div className="px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-semibold text-3xl lg:text-4xl tracking-tight mb-4 text-gray-900">
            Everything you need for better meetings
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Primer turns your CRM chaos into clear, actionable briefings. No manual work required.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>

            <div className="flex items-center justify-center">
              <Media feature={features[featureSelected]} key={featureSelected} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
