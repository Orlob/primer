"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import ButtonDemo from "./ButtonDemo";
import { Calendar, Clock, FileText, CheckCircle2, TrendingUp, Users, Building2, Mail, Phone, Target, ListChecks } from "lucide-react";
import config from "@/config";

const Hero = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demoBriefing = {
    title: "Q4 Strategy Review - Acme Corporation",
    date: "Today, 2:00 PM",
    duration: "60 min",
    type: "Sales Call",
    description: "Quarterly strategy review to discuss Q4 performance, expansion opportunities, and plan for Q1 2024. Focus on scaling the partnership and exploring new product integrations.",
    whyMeeting: "Expansion opportunity with existing customer. They're interested in expanding to additional departments and exploring new features.",
    keyTalkingPoints: [
      "Review Q4 performance metrics and ROI",
      "Discuss expansion to 3 additional departments",
      "Explore new product integrations",
      "Align on implementation timeline",
    ],
    focusOn: {
      name: "Sarah Johnson",
      role: "VP of Sales",
    },
    accountStatus: {
      type: "Enterprise",
      engagement: "High",
      health: "Strong",
      dealValue: "$45,000",
      dealStage: "Closing",
    },
    company: {
      name: "Acme Corporation",
      size: "500-1000 employees",
      industry: "Technology & Software",
    },
    communications: [
      { type: "Email", date: "Jan 10, 2024", title: "Q4 Review & Q1 Planning", summary: "Budget approved for expansion." },
      { type: "Call", date: "Jan 5, 2024", title: "Discovery Call", summary: "Discussed expansion to 3 departments." },
    ],
    strategicGuidance: [
      "Start with success: highlight Q4 wins and ROI",
      "Map expansion plan for 3 departments",
      "Address concerns proactively",
    ],
    actionItems: [
      { text: "Review Q4 performance metrics", completed: true },
      { text: "Prepare expansion proposal", completed: true },
      { text: "Draft implementation timeline", completed: false },
    ],
  };

  return (
    <section className="max-w-[960px] mx-auto px-8 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <div className={`flex flex-col gap-8 lg:gap-10 items-center lg:items-start text-center lg:text-left flex-1 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8EDFF] rounded-full text-sm font-medium text-[#3A5AFE] animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            AI-powered Meeting Preparation
          </div>

          <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl tracking-tight text-gray-900 max-w-2xl">
            Turn all CRM activity into a clean,{" "}
            <span className="text-[#3A5AFE] relative inline-block">
              <span className="relative z-10">actionable briefing</span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-[#E8EDFF] -z-0 animate-pulse"></span>
            </span>—automatically.
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            Primer connects directly to HubSpot and pulls the most relevant data for an upcoming meeting. 
            Instead of digging through a chaotic timeline, you receive a precise, AI-generated summary tailored to the meeting context.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <ButtonDemo 
              text="Watch Demo" 
              extraStyle="bg-[#3A5AFE] hover:bg-[#2A3FCC] text-white px-6 py-3 rounded-lg font-medium transition-all duration-150 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer" 
            />
            <ButtonSignin 
              text="Start Free Trial" 
              extraStyle="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-[#3A5AFE] px-6 py-3 rounded-lg font-medium transition-all duration-150 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer" 
            />
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 group">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3A5AFE] to-[#2A3FCC] border-2 border-white transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      zIndex: 5 - i,
                      animationDelay: `${i * 100}ms`,
                      animation: `float 3s ease-in-out infinite`
                    }}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">500+ active users</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-400 transition-transform duration-200 hover:scale-125"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="text-sm text-gray-600 font-medium ml-1">4.8/5</span>
            </div>
          </div>
        </div>

        {/* Demo Briefing - Using Meeting Structure */}
        <div className={`flex-1 w-full lg:w-auto max-w-md transition-all duration-700 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}>
          <div className="relative group">
            {/* HubSpot Integration Badge - Top Right */}
            <div className="absolute -top-4 -right-4 z-10 flex items-center gap-3 px-5 py-3 bg-white border-2 border-[#FF7A59] rounded-xl shadow-2xl animate-bounce hover:animate-none transition-all duration-200 hover:scale-105">
              <div className="w-8 h-8 rounded-lg bg-[#FF7A59] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 leading-tight">HubSpot</span>
                <span className="text-xs text-gray-600 leading-tight">Integrated</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#22C55E] rounded-full border-2 border-white animate-pulse"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-[#3A5AFE]/20 to-[#2A3FCC]/10 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative bg-white rounded-xl border border-gray-200 shadow-2xl overflow-hidden transition-all duration-300 group-hover:shadow-3xl group-hover:scale-[1.02]">
              {/* Meeting Header */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{demoBriefing.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#3A5AFE]" />
                        <span>{demoBriefing.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-[#3A5AFE]" />
                        <span>{demoBriefing.duration}</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-[#E8EDFF] text-[#3A5AFE] rounded-full transition-all duration-200 hover:bg-[#3A5AFE] hover:text-white">
                    {demoBriefing.type}
                  </span>
                </div>
              </div>

              {/* Meeting Content - Scrollable */}
              <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
                {/* Meeting Summary */}
                <div 
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 transition-all duration-200 hover:bg-white hover:border-[#3A5AFE]/30 hover:shadow-md cursor-pointer"
                  onMouseEnter={() => setHoveredSection("summary")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FileText size={16} className={`text-[#3A5AFE] transition-transform duration-200 ${
                      hoveredSection === "summary" ? "scale-110 rotate-3" : ""
                    }`} />
                    <h4 className="text-sm font-semibold text-gray-900">Meeting Information</h4>
                  </div>
                  <p className="text-xs text-gray-700 mb-3 leading-relaxed">{demoBriefing.description}</p>
                  <div className="mb-3 p-3 bg-white rounded-lg transition-all duration-200 hover:bg-[#E8EDFF]">
                    <h5 className="text-xs font-semibold text-gray-900 mb-1">Why are we meeting?</h5>
                    <p className="text-xs text-gray-700 leading-relaxed">{demoBriefing.whyMeeting}</p>
                  </div>
                  <div className="space-y-1.5">
                    {demoBriefing.keyTalkingPoints.map((point, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-2 text-xs text-gray-700 transition-all duration-200 hover:text-[#3A5AFE]"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CheckCircle2 size={12} className="text-[#3A5AFE] mt-0.5 flex-shrink-0 transition-transform duration-200 hover:scale-125" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Focus On */}
                <div 
                  className="bg-[#E8EDFF] rounded-lg p-4 border border-[#3A5AFE]/20 transition-all duration-200 hover:border-[#3A5AFE] hover:shadow-md cursor-pointer"
                  onMouseEnter={() => setHoveredSection("focus")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={16} className={`text-[#3A5AFE] transition-transform duration-200 ${
                      hoveredSection === "focus" ? "scale-110" : ""
                    }`} />
                    <h4 className="text-sm font-semibold text-gray-900">Focus On</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3A5AFE] flex items-center justify-center text-white font-semibold text-sm transition-transform duration-200 hover:scale-110 hover:rotate-6">
                      {demoBriefing.focusOn.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{demoBriefing.focusOn.name}</div>
                      <div className="text-xs text-gray-600">{demoBriefing.focusOn.role}</div>
                    </div>
                  </div>
                </div>

                {/* Company Overview */}
                <div 
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 transition-all duration-200 hover:bg-white hover:border-[#3A5AFE]/30 hover:shadow-md cursor-pointer"
                  onMouseEnter={() => setHoveredSection("company")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 size={16} className={`text-[#3A5AFE] transition-transform duration-200 ${
                      hoveredSection === "company" ? "scale-110 rotate-3" : ""
                    }`} />
                    <h4 className="text-sm font-semibold text-gray-900">Company Overview</h4>
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">{demoBriefing.company.name}</div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center gap-2 transition-colors duration-200 hover:text-[#3A5AFE]">
                      <Users size={12} />
                      <span>{demoBriefing.company.size}</span>
                    </div>
                    <div className="flex items-center gap-2 transition-colors duration-200 hover:text-[#3A5AFE]">
                      <Building2 size={12} />
                      <span>{demoBriefing.company.industry}</span>
                    </div>
                  </div>
                </div>

                {/* Account Status */}
                <div 
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 transition-all duration-200 hover:bg-white hover:border-[#3A5AFE]/30 hover:shadow-md cursor-pointer"
                  onMouseEnter={() => setHoveredSection("account")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp size={16} className={`text-[#3A5AFE] transition-transform duration-200 ${
                      hoveredSection === "account" ? "scale-110 rotate-3" : ""
                    }`} />
                    <h4 className="text-sm font-semibold text-gray-900">Account Status</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="transition-transform duration-200 hover:scale-105">
                      <div className="text-xs text-gray-500 mb-1">Type</div>
                      <div className="text-xs font-semibold text-gray-900">{demoBriefing.accountStatus.type}</div>
                    </div>
                    <div className="transition-transform duration-200 hover:scale-105">
                      <div className="text-xs text-gray-500 mb-1">Engagement</div>
                      <div className="text-xs font-semibold text-gray-900">{demoBriefing.accountStatus.engagement}</div>
                    </div>
                    <div className="transition-transform duration-200 hover:scale-105">
                      <div className="text-xs text-gray-500 mb-1">Health</div>
                      <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full text-green-700 bg-green-50 transition-all duration-200 hover:bg-green-100">
                        {demoBriefing.accountStatus.health}
                      </span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-1 transition-colors duration-200 hover:text-[#3A5AFE]">
                      <span className="text-xs text-gray-500">Deal Value</span>
                      <span className="text-sm font-semibold text-gray-900">{demoBriefing.accountStatus.dealValue}</span>
                    </div>
                    <div className="flex items-center justify-between transition-colors duration-200 hover:text-[#3A5AFE]">
                      <span className="text-xs text-gray-500">Stage</span>
                      <span className="text-xs font-medium text-[#3A5AFE]">{demoBriefing.accountStatus.dealStage}</span>
                    </div>
                  </div>
                </div>

                {/* Past Communication */}
                <div 
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 transition-all duration-200 hover:bg-white hover:border-[#3A5AFE]/30 hover:shadow-md cursor-pointer"
                  onMouseEnter={() => setHoveredSection("communication")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Mail size={16} className={`text-[#3A5AFE] transition-transform duration-200 ${
                      hoveredSection === "communication" ? "scale-110 rotate-3" : ""
                    }`} />
                    <h4 className="text-sm font-semibold text-gray-900">Past Communication</h4>
                  </div>
                  <div className="space-y-3">
                    {demoBriefing.communications.map((comm, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-2 pb-2 border-b border-gray-200 last:border-0 last:pb-0 transition-all duration-200 hover:bg-white hover:rounded-lg hover:p-2 -mx-2"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#E8EDFF] flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-110 hover:bg-[#3A5AFE] group">
                          {comm.type === "Email" ? (
                            <Mail size={12} className="text-[#3A5AFE] group-hover:text-white transition-colors" />
                          ) : (
                            <Phone size={12} className="text-[#3A5AFE] group-hover:text-white transition-colors" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-xs font-medium text-gray-900">{comm.type}</span>
                            <span className="text-xs text-gray-500">—</span>
                            <span className="text-xs font-medium text-gray-900 truncate">{comm.title}</span>
                            <span className="text-xs text-gray-500">{comm.date}</span>
                          </div>
                          <p className="text-xs text-gray-600">{comm.summary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Guidance */}
                <div 
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 transition-all duration-200 hover:bg-white hover:border-[#3A5AFE]/30 hover:shadow-md cursor-pointer"
                  onMouseEnter={() => setHoveredSection("guidance")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={16} className={`text-[#3A5AFE] transition-transform duration-200 ${
                      hoveredSection === "guidance" ? "scale-110 rotate-3" : ""
                    }`} />
                    <h4 className="text-sm font-semibold text-gray-900">Strategic Guidance</h4>
                  </div>
                  <div className="space-y-1.5">
                    {demoBriefing.strategicGuidance.map((point, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-2 text-xs text-gray-700 transition-all duration-200 hover:text-[#3A5AFE]"
                      >
                        <CheckCircle2 size={12} className="text-[#3A5AFE] mt-0.5 flex-shrink-0 transition-transform duration-200 hover:scale-125" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Items */}
                <div 
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 transition-all duration-200 hover:bg-white hover:border-[#3A5AFE]/30 hover:shadow-md cursor-pointer"
                  onMouseEnter={() => setHoveredSection("actions")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <ListChecks size={16} className={`text-[#3A5AFE] transition-transform duration-200 ${
                      hoveredSection === "actions" ? "scale-110 rotate-3" : ""
                    }`} />
                    <h4 className="text-sm font-semibold text-gray-900">Action Items</h4>
                  </div>
                  <div className="space-y-2">
                    {demoBriefing.actionItems.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2 text-xs text-gray-700 transition-all duration-200 hover:text-[#3A5AFE] group/item"
                      >
                        <div className={`w-3 h-3 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          item.completed 
                            ? "bg-[#3A5AFE] border-[#3A5AFE] group-hover/item:scale-110" 
                            : "border-gray-300 group-hover/item:border-[#3A5AFE]"
                        }`}>
                          {item.completed && (
                            <svg className="w-2 h-2 text-white transition-transform duration-200 group-hover/item:scale-125" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className={item.completed ? "line-through text-gray-500" : ""}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Summary */}
                <div className="bg-[#E8EDFF] rounded-lg p-4 border border-[#3A5AFE]/20 transition-all duration-200 hover:border-[#3A5AFE] hover:shadow-md">
                  <div className="text-xs font-medium text-[#3A5AFE] mb-2 flex items-center gap-2">
                    <span>AI Summary</span>
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-1 h-1 rounded-full bg-[#3A5AFE] animate-pulse"
                          style={{ animationDelay: `${i * 200}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Strong expansion opportunity with engaged customer. Budget approved. Focus on clear communication, 
                    addressing concerns proactively, and setting up for successful multi-department rollout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3A5AFE;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2A3FCC;
        }
      `}</style>
    </section>
  );
};

export default Hero;
