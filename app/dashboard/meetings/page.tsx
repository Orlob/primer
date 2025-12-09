import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Building2, ArrowRight } from "lucide-react";
import Avatar from "@/components/Avatar";

// Dummy-Daten für Meetings
const dummyMeetings = [
  {
    id: "1",
    title: "Q4 Strategy Review - Acme Corp",
    contact: "Sarah Johnson",
    contactAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    company: "Acme Corp",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    date: "2024-01-15",
    time: "14:00",
    type: "Sales Call",
    status: "upcoming",
    lastActivity: "2 hours ago",
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
    type: "Demo",
    status: "upcoming",
    lastActivity: "5 hours ago",
  },
  {
    id: "3",
    title: "Onboarding Check-in - DataFlow",
    contact: "Emily Rodriguez",
    contactAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    company: "DataFlow Solutions",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
    date: "2024-01-16",
    time: "10:00",
    type: "Success",
    status: "upcoming",
    lastActivity: "1 day ago",
  },
  {
    id: "4",
    title: "Contract Renewal - GlobalTech",
    contact: "David Park",
    contactAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    company: "GlobalTech Industries",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    date: "2024-01-12",
    time: "11:00",
    type: "Sales Call",
    status: "completed",
    lastActivity: "3 days ago",
  },
];

export const dynamic = "force-dynamic";

export default function MeetingsPage() {
  const upcomingMeetings = dummyMeetings.filter((m) => m.status === "upcoming");
  const completedMeetings = dummyMeetings.filter((m) => m.status === "completed");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Meetings</h1>
          <p className="text-gray-600">Übersicht aller geplanten und abgeschlossenen Meetings</p>
        </div>

        {/* Upcoming Meetings */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming</h2>
          <div className="grid gap-4">
            {upcomingMeetings.map((meeting) => (
              <Link
                key={meeting.id}
                href={`/dashboard/meetings/${meeting.id}`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={meeting.companyLogo}
                      alt={meeting.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{meeting.title}</h3>
                          <span className="px-3 py-1 text-xs font-medium bg-[#E8EDFF] text-[#3A5AFE] rounded-full">
                            {meeting.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{meeting.time}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight size={20} className="text-gray-400 ml-4" />
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <Avatar src={meeting.contactAvatar} name={meeting.contact} size="sm" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{meeting.contact}</div>
                        <div className="text-xs text-gray-600">{meeting.company}</div>
                      </div>
                      <div className="ml-auto text-xs text-gray-500">Last activity: {meeting.lastActivity}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Completed Meetings */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Completed</h2>
          <div className="grid gap-4">
            {completedMeetings.map((meeting) => (
              <Link
                key={meeting.id}
                href={`/dashboard/meetings/${meeting.id}`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow opacity-75"
              >
                <div className="flex">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={meeting.companyLogo}
                      alt={meeting.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{meeting.title}</h3>
                          <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                            {meeting.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{meeting.time}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight size={20} className="text-gray-400 ml-4" />
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <Avatar src={meeting.contactAvatar} name={meeting.contact} size="sm" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{meeting.contact}</div>
                        <div className="text-xs text-gray-600">{meeting.company}</div>
                      </div>
                      <div className="ml-auto text-xs text-gray-500">Last activity: {meeting.lastActivity}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
