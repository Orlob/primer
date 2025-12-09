import Avatar from "@/components/Avatar";
import { User, MapPin } from "lucide-react";

interface Attendee {
  name: string;
  role?: string;
  avatar?: string;
  isMainContact?: boolean;
}

interface MeetingAttendeesProps {
  internalAttendees?: Attendee[];
  externalAttendees?: Attendee[];
  focusOn?: Attendee;
  id?: string;
}

export default function MeetingAttendees({
  internalAttendees = [],
  externalAttendees = [],
  focusOn,
  id,
}: MeetingAttendeesProps) {
  return (
    <div id={id} className="bg-white border border-gray-200 rounded-xl p-8 mb-8 scroll-mt-24">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Attendees</h2>

      {focusOn && (
        <div className="mb-6 p-4 bg-[#E8EDFF] border border-[#3A5AFE]/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-[#3A5AFE]" />
            <span className="text-sm font-semibold text-[#3A5AFE]">Focus on</span>
          </div>
          <div className="flex items-center gap-3">
            <Avatar src={focusOn.avatar} name={focusOn.name} size="md" />
            <div>
              <div className="font-semibold text-gray-900">{focusOn.name}</div>
              {focusOn.role && (
                <div className="text-sm text-gray-600">{focusOn.role}</div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {internalAttendees.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User size={16} className="text-gray-600" />
              <h3 className="text-sm font-semibold text-gray-900">Internal Attendees</h3>
            </div>
            <div className="space-y-3">
              {internalAttendees.map((attendee, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar src={attendee.avatar} name={attendee.name} size="sm" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{attendee.name}</div>
                    {attendee.role && (
                      <div className="text-xs text-gray-600">{attendee.role}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {externalAttendees.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User size={16} className="text-gray-600" />
              <h3 className="text-sm font-semibold text-gray-900">External Attendees</h3>
            </div>
            <div className="space-y-3">
              {externalAttendees.map((attendee, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar src={attendee.avatar} name={attendee.name} size="sm" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">{attendee.name}</span>
                      {attendee.isMainContact && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-[#3A5AFE] text-white rounded-full">
                          Main Contact
                        </span>
                      )}
                    </div>
                    {attendee.role && (
                      <div className="text-xs text-gray-600">{attendee.role}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
