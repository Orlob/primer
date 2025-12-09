import { Mail, Phone, MessageSquare, FileText, ExternalLink } from "lucide-react";

interface Communication {
  type: "Email" | "Call" | "Meeting" | "Note";
  date: string;
  title: string;
  summary: string;
  hubspotLink?: string;
}

interface PastCommunicationProps {
  communications: Communication[];
  id?: string;
}

export default function PastCommunication({ communications, id }: PastCommunicationProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "Email":
        return <Mail size={18} className="text-[#3A5AFE]" />;
      case "Call":
        return <Phone size={18} className="text-[#3A5AFE]" />;
      case "Meeting":
        return <MessageSquare size={18} className="text-[#3A5AFE]" />;
      default:
        return <FileText size={18} className="text-[#3A5AFE]" />;
    }
  };

  return (
    <div id={id} className="bg-white border border-gray-200 rounded-xl p-8 mb-8 scroll-mt-24">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Past Communication</h2>
      <div className="space-y-4">
        {communications.map((comm, index) => (
          <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#E8EDFF] flex items-center justify-center">
                {getIcon(comm.type)}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-gray-900">{comm.type}</span>
                <span className="text-xs text-gray-500">—</span>
                <span className="text-sm font-medium text-gray-900">{comm.title}</span>
                <span className="text-xs text-gray-500">{comm.date}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{comm.summary}</p>
              {comm.hubspotLink && (
                <a
                  href={comm.hubspotLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#3A5AFE] hover:text-[#2A3FCC]"
                >
                  View in HubSpot
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
