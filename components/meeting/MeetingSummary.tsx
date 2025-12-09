import { FileText, CheckCircle2 } from "lucide-react";

interface MeetingSummaryProps {
  description?: string;
  keyTalkingPoints?: string[];
  whyMeeting?: string;
  id?: string;
}

export default function MeetingSummary({
  description,
  keyTalkingPoints = [],
  whyMeeting,
  id,
}: MeetingSummaryProps) {
  return (
    <div id={id} className="bg-white border border-gray-200 rounded-xl p-8 mb-8 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <FileText size={20} className="text-[#3A5AFE]" />
        <h2 className="text-lg font-semibold text-gray-900">Meeting Information</h2>
      </div>

      {description && (
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">{description}</p>
      )}

      {whyMeeting && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Why are we meeting?</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{whyMeeting}</p>
        </div>
      )}

      {keyTalkingPoints.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Talking Points / Opportunities</h3>
          <ul className="space-y-2">
            {keyTalkingPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                <CheckCircle2 size={16} className="text-[#3A5AFE] mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
