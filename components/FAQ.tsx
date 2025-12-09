"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "How does Primer connect to HubSpot?",
    answer: (
      <div className="space-y-2 leading-relaxed text-gray-700">
        Primer connects directly to your HubSpot account via OAuth. Once connected, 
        it automatically syncs with your CRM to pull emails, notes, calls, tasks, deal status, 
        and contact information for each meeting.
      </div>
    ),
  },
  {
    question: "What data does Primer analyze?",
    answer: (
      <div className="space-y-2 leading-relaxed text-gray-700">
        Primer analyzes all relevant CRM activity including emails, notes, calls, tasks, 
        deal status, contact details, and timeline events. It uses AI to identify what matters 
        most for each specific meeting context and surfaces only the most relevant information.
      </div>
    ),
  },
  {
    question: "How long does it take to prepare a briefing?",
    answer: (
      <div className="space-y-2 leading-relaxed text-gray-700">
        Briefings are generated automatically and instantly. Once Primer is connected to your 
        HubSpot account and calendar, it prepares briefings for all upcoming meetings in real-time. 
        You can access them anytime before your meeting.
      </div>
    ),
  },
  {
    question: "Is my data secure?",
    answer: (
      <div className="space-y-2 leading-relaxed text-gray-700">
        Yes. Primer uses secure OAuth connections and follows industry-standard security practices. 
        Your data is encrypted in transit and at rest. We never store your HubSpot credentials.
      </div>
    ),
  },
  {
    question: "Can I customize the briefing format?",
    answer: (
      <div className="space-y-2 leading-relaxed text-gray-700">
        Yes, Team plans include custom briefing templates. You can structure briefings to match 
        your workflow and preferences.
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left md:text-lg border-t border-gray-300"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 ${isOpen ? "text-[#3A5AFE]" : "text-gray-900"}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
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
        className={`transition-all duration-300 ease-in-out overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-gray-100" id="faq">
      <div className="py-16 md:py-24 px-8 max-w-[960px] mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-[#3A5AFE] mb-4 text-sm uppercase tracking-wide">
            FAQ
          </p>
          <p className="sm:text-4xl text-3xl font-semibold text-gray-900">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
