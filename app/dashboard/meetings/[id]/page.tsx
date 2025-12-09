import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MeetingBriefingHeader from "@/components/meeting/MeetingBriefingHeader";
import MeetingAttendees from "@/components/meeting/MeetingAttendees";
import MeetingSummary from "@/components/meeting/MeetingSummary";
import CompanyOverview from "@/components/meeting/CompanyOverview";
import IndustryContext from "@/components/meeting/IndustryContext";
import AccountStatus from "@/components/meeting/AccountStatus";
import PastCommunication from "@/components/meeting/PastCommunication";
import StrategicGuidance from "@/components/meeting/StrategicGuidance";
import ActionItems from "@/components/meeting/ActionItems";
import TableOfContents from "@/components/meeting/TableOfContents";

// Dummy-Daten für Meeting Briefing
const dummyBriefing = {
  id: "1",
  title: "Q4 Strategy Review - Acme Corporation",
  date: "Thursday, January 15, 2024",
  time: "2:00 PM EST",
  duration: "60 minutes",
  type: "Sales Call",
  headerImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop",
  description: "Quarterly strategy review to discuss Q4 performance, expansion opportunities, and plan for Q1 2024. Focus on scaling the partnership and exploring new product integrations.",
  whyMeeting: "Expansion opportunity with existing customer. They're interested in expanding to additional departments and exploring new features. Need to align on implementation timeline and success metrics.",
  keyTalkingPoints: [
    "Review Q4 performance metrics and ROI",
    "Discuss expansion to 3 additional departments",
    "Explore new product integrations and use cases",
    "Align on implementation timeline and success metrics",
    "Address any technical or access concerns",
  ],
  internalAttendees: [
    {
      name: "Alex Martinez",
      role: "Account Executive",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    },
    {
      name: "Jordan Kim",
      role: "Solutions Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    },
  ],
  externalAttendees: [
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      isMainContact: true,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    },
  ],
  focusOn: {
    name: "Sarah Johnson",
    role: "VP of Sales",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
  },
  company: {
    name: "Acme Corporation",
    size: "500-1000 employees (Sales team size ~45)",
    industry: "Technology & Software",
    headquarters: "San Francisco, CA; offices in New York, London, and Tokyo",
    notes: "Long-standing customer since 2022. Initially used for basic CRM features. Now looking to expand usage across sales, marketing, and customer success teams. Strong growth trajectory and budget approved for Q1 2024.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  industryInsights: [
    "B2B SaaS companies in this space typically have 6-12 month sales cycles with multiple stakeholders involved in decision-making.",
    "Common challenges include data silos between departments, manual reporting, and difficulty tracking customer journey across touchpoints.",
    "Successful implementations focus on clear ROI metrics, executive buy-in, and phased rollouts starting with highest-impact use cases.",
  ],
  customerReferences: [
    {
      company: "TechCorp Solutions (similar size and industry)",
      useCase: "Expanded from sales to marketing and customer success teams",
      result: "Increased cross-department collaboration by 40% and improved customer retention metrics.",
    },
    {
      company: "Global Software Inc",
      useCase: "Implemented advanced analytics and reporting features",
      result: "Reduced reporting time by 60% and enabled data-driven decision making across teams.",
    },
    {
      company: "Enterprise Solutions Group",
      useCase: "Rolled out to multiple departments with phased approach",
      result: "Achieved 95% adoption rate within 6 months and strong executive sponsorship.",
    },
  ],
  accountStatus: {
    accountType: "Existing customer (since Mar 2022) — Expansion opportunity",
    engagementLevel: "High (active usage; strong relationship; budget approved)",
    relationshipHealth: "Strong partnership with consistent engagement and growth",
    milestones: [
      {
        date: "Mar 15, 2022",
        event: "Initial onboarding and contract signed",
        type: "positive",
      },
      {
        date: "Sep 2022",
        event: "First renewal and feature expansion",
        type: "positive",
      },
      {
        date: "Jun 2023",
        event: "Added marketing team to platform",
        type: "positive",
      },
      {
        date: "Dec 2023",
        event: "Q4 performance review and expansion discussion",
        type: "positive",
      },
      {
        date: "Jan 8, 2024",
        event: "Budget approval confirmed for Q1 expansion",
        type: "positive",
      },
    ],
    implications: "Strong expansion opportunity. Focus on demonstrating clear value, addressing any technical concerns, and setting up for successful multi-department rollout.",
  },
  communications: [
    {
      type: "Email",
      date: "Jan 10, 2024",
      title: "Q4 Review & Q1 Planning",
      summary: "Sarah confirmed meeting time and shared agenda items. Budget approved for expansion. Looking forward to discussing implementation timeline.",
      hubspotLink: "#",
    },
    {
      type: "Call",
      date: "Jan 5, 2024",
      title: "Discovery Call - Expansion Opportunities",
      summary: "30-minute call discussing expansion to 3 additional departments. Sarah mentioned interest in advanced analytics features.",
      hubspotLink: "#",
    },
    {
      type: "Email",
      date: "Dec 20, 2023",
      title: "Q4 Performance Summary",
      summary: "Shared Q4 performance report showing strong ROI and usage metrics. Customer very satisfied with results.",
      hubspotLink: "#",
    },
    {
      type: "Meeting",
      date: "Nov 15, 2023",
      title: "Quarterly Business Review",
      summary: "Discussed current usage, identified expansion opportunities, and aligned on Q1 goals.",
      hubspotLink: "#",
    },
  ],
  strategicGuidance: {
    howToTackle: [
      "Start with success: highlight Q4 wins and ROI to build momentum for expansion discussion.",
      "Map expansion plan: identify the 3 departments, their use cases, and expected outcomes for each.",
      "Address concerns proactively: discuss implementation timeline, training needs, and change management.",
      "Close with clear next steps: define rollout plan, success metrics, and follow-up schedule.",
    ],
    whatToAsk: [
      "What are the specific use cases for each of the 3 departments we're expanding to?",
      "What success metrics matter most to each department head?",
      "What's the ideal timeline for rollout, and are there any constraints we should be aware of?",
      "Who are the key stakeholders in each department we should involve in the rollout?",
      "What training and support will be needed to ensure successful adoption?",
    ],
    qualificationCriteria: [
      "Decision authority: Sarah has budget approval, but need alignment with department heads.",
      "Timeline: Target Q1 2024 rollout, with pilot starting in February.",
      "Technical readiness: Current infrastructure supports expansion, minimal setup required.",
      "Success metrics: Define adoption rates, usage metrics, and ROI targets for each department.",
    ],
    interpretationHelp: "This is a strong expansion opportunity with an engaged customer. Focus on maintaining momentum, addressing any concerns proactively, and setting up for successful multi-department rollout. High probability of closing expansion deal.",
  },
  actionItems: [
    "Review Q4 performance metrics and prepare summary",
    "Prepare expansion proposal for 3 departments",
    "Draft implementation timeline and rollout plan",
    "Identify key stakeholders in each department",
    "Schedule follow-up meeting with department heads",
  ],
  overallFeedback: "Strong expansion opportunity with high probability of success. Customer is engaged, budget is approved, and relationship is solid. Focus on clear communication, addressing concerns proactively, and setting up for successful rollout. This could be a significant expansion deal if executed well.",
};

const tableOfContentsItems = [
  { id: "meeting-info", label: "Meeting Information" },
  { id: "attendees", label: "Attendees" },
  { id: "company", label: "Company Overview" },
  { id: "industry", label: "Industry Context" },
  { id: "account-status", label: "Account Status" },
  { id: "communication", label: "Past Communication" },
  { id: "guidance", label: "Strategic Guidance" },
  { id: "action-items", label: "Action Items" },
  { id: "feedback", label: "Overall Feedback" },
];

export const dynamic = "force-dynamic";

export default function MeetingDetailPage({ params }: { params: { id: string } }) {
  const briefing = dummyBriefing;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <Link
          href="/dashboard/meetings"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#3A5AFE] mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back to Meetings</span>
        </Link>

        <MeetingBriefingHeader
          title={briefing.title}
          date={briefing.date}
          time={briefing.time}
          duration={briefing.duration}
          type={briefing.type}
          headerImage={briefing.headerImage}
        />

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <MeetingSummary
              id="meeting-info"
              description={briefing.description}
              whyMeeting={briefing.whyMeeting}
              keyTalkingPoints={briefing.keyTalkingPoints}
            />

            <MeetingAttendees
              id="attendees"
              internalAttendees={briefing.internalAttendees}
              externalAttendees={briefing.externalAttendees}
              focusOn={briefing.focusOn}
            />

            <CompanyOverview
              id="company"
              name={briefing.company.name}
              size={briefing.company.size}
              industry={briefing.company.industry}
              headquarters={briefing.company.headquarters}
              notes={briefing.company.notes}
              logo={briefing.company.logo}
            />

            <IndustryContext
              id="industry"
              insights={briefing.industryInsights}
              customerReferences={briefing.customerReferences}
            />

            <AccountStatus
              id="account-status"
              accountType={briefing.accountStatus.accountType}
              engagementLevel={briefing.accountStatus.engagementLevel}
              relationshipHealth={briefing.accountStatus.relationshipHealth}
              milestones={briefing.accountStatus.milestones}
              implications={briefing.accountStatus.implications}
            />

            <PastCommunication id="communication" communications={briefing.communications} />

            <StrategicGuidance
              id="guidance"
              howToTackle={briefing.strategicGuidance.howToTackle}
              whatToAsk={briefing.strategicGuidance.whatToAsk}
              qualificationCriteria={briefing.strategicGuidance.qualificationCriteria}
              interpretationHelp={briefing.strategicGuidance.interpretationHelp}
            />

            <ActionItems id="action-items" items={briefing.actionItems} />

            {/* Overall Feedback */}
            {briefing.overallFeedback && (
              <div id="feedback" className="bg-[#E8EDFF] border border-[#3A5AFE]/20 rounded-xl p-8 scroll-mt-24">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Overall Feedback</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{briefing.overallFeedback}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <TableOfContents items={tableOfContentsItems} />
          </div>
        </div>
      </div>
    </main>
  );
}
