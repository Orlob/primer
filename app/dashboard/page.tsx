import Link from "next/link";
import Image from "next/image";
import { Calendar, Link2, ArrowRight, CheckCircle2, Rocket } from "lucide-react";
import ButtonAccount from "@/components/ButtonAccount";
import Avatar from "@/components/Avatar";
import OnboardingBanner from "@/components/OnboardingBanner";

// Dummy-Daten für Dashboard
const dummyStats = {
  upcomingMeetings: 3,
  completedThisWeek: 12,
  hubspotConnected: true,
  lastBriefing: "2 hours ago",
};

// Dummy-Daten für Onboarding-Status
// In der echten App würde das aus der Datenbank kommen
const onboardingStatus = {
  completedSteps: 2, // Beispiel: 2 von 5 Schritten abgeschlossen
  totalSteps: 5,
};

const dummyUpcomingMeetings = [
  {
    id: "1",
    title: "Q4 Strategy Review - Acme Corp",
    contact: "Sarah Johnson",
    contactAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    company: "Acme Corp",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    date: "2024-01-15",
    time: "14:00",
  },
  {
    id: "2",
    title: "Product Demo - TechStart Inc",
    contact: "Michael Chen",
    contactAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    company: "TechStart Inc",
    companyLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop",
    date: "2024-01-15",
    time: "16:30",
  },
];

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back. Here&apos;s your meeting overview.</p>
        </div>

        {/* Onboarding Banner */}
        <OnboardingBanner
          completedSteps={onboardingStatus.completedSteps}
          totalSteps={onboardingStatus.totalSteps}
        />

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Upcoming Meetings</span>
              <Calendar size={20} className="text-[#3A5AFE]" />
            </div>
            <div className="text-3xl font-semibold text-gray-900">{dummyStats.upcomingMeetings}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Completed This Week</span>
              <CheckCircle2 size={20} className="text-green-600" />
            </div>
            <div className="text-3xl font-semibold text-gray-900">{dummyStats.completedThisWeek}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">HubSpot Status</span>
              <Link2 size={20} className={dummyStats.hubspotConnected ? "text-[#3A5AFE]" : "text-gray-400"} />
            </div>
            <div className="text-3xl font-semibold text-gray-900">
              {dummyStats.hubspotConnected ? "Connected" : "Not Connected"}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Meetings</h2>
            <div className="space-y-3">
              {dummyUpcomingMeetings.map((meeting) => (
                <Link
                  key={meeting.id}
                  href={`/dashboard/meetings/${meeting.id}`}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={meeting.companyLogo}
                      alt={meeting.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">{meeting.title}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Avatar src={meeting.contactAvatar} name={meeting.contact} size="sm" />
                      <span className="text-sm text-gray-600 truncate">{meeting.contact}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {meeting.date} at {meeting.time}
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 flex-shrink-0" />
                </Link>
              ))}
            </div>
            <Link
              href="/dashboard/meetings"
              className="mt-4 inline-block text-sm font-medium text-[#3A5AFE] hover:text-[#2A3FCC]"
            >
              View all meetings →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {onboardingStatus.completedSteps < onboardingStatus.totalSteps && (
                <Link
                  href="/onboarding"
                  className="flex items-center justify-between p-4 border-2 border-[#3A5AFE] rounded-lg hover:bg-[#E8EDFF] transition-colors bg-[#E8EDFF]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#3A5AFE] flex items-center justify-center">
                      <Rocket size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 flex items-center gap-2">
                        Complete Setup
                        <span className="px-2 py-0.5 text-xs font-medium bg-[#3A5AFE] text-white rounded-full">
                          {onboardingStatus.totalSteps - onboardingStatus.completedSteps} left
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">Finish your onboarding</div>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-[#3A5AFE]" />
                </Link>
              )}
              <Link
                href="/dashboard/integrations"
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center">
                    <Link2 size={20} className="text-[#3A5AFE]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Manage Integrations</div>
                    <div className="text-sm text-gray-600">Connect HubSpot, Calendar, and more</div>
                  </div>
                </div>
                <ArrowRight size={18} className="text-gray-400" />
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-[#3A5AFE]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Account Settings</div>
                    <div className="text-sm text-gray-600">Update your profile and preferences</div>
                  </div>
                </div>
                <ArrowRight size={18} className="text-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
