import { CheckCircle2, XCircle, Link2, Calendar, Mail } from "lucide-react";

// Dummy-Daten für Integrations
const dummyIntegrations = [
  {
    id: "hubspot",
    name: "HubSpot",
    description: "Connect your HubSpot CRM to automatically sync contacts, deals, and meeting data",
    status: "connected",
    connectedAt: "2024-01-10",
    icon: Link2,
  },
  {
    id: "calendar",
    name: "Google Calendar",
    description: "Sync your calendar events to automatically create meeting briefings",
    status: "not_connected",
    icon: Calendar,
  },
  {
    id: "outlook",
    name: "Microsoft Outlook",
    description: "Connect Outlook calendar for seamless meeting preparation",
    status: "not_connected",
    icon: Calendar,
  },
  {
    id: "email",
    name: "Email Integration",
    description: "Sync email threads and conversations related to your meetings",
    status: "not_connected",
    icon: Mail,
  },
];

export const dynamic = "force-dynamic";

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Integrations</h1>
          <p className="text-gray-600">Connect your tools to automate meeting preparation</p>
        </div>

        <div className="space-y-4">
          {dummyIntegrations.map((integration) => {
            const Icon = integration.icon;
            const isConnected = integration.status === "connected";

            return (
              <div
                key={integration.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isConnected ? "bg-[#E8EDFF]" : "bg-gray-100"
                    }`}>
                      <Icon size={24} className={isConnected ? "text-[#3A5AFE]" : "text-gray-600"} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                        {isConnected && (
                          <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                            <CheckCircle2 size={14} />
                            Connected
                          </span>
                        )}
                        {!isConnected && (
                          <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                            Not Connected
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{integration.description}</p>
                      {isConnected && integration.connectedAt && (
                        <p className="text-xs text-gray-500">Connected on {integration.connectedAt}</p>
                      )}
                    </div>
                  </div>
                  <div className="ml-4">
                    {isConnected ? (
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Disconnect
                      </button>
                    ) : (
                      <button className="px-4 py-2 text-sm font-medium text-white bg-[#3A5AFE] rounded-lg hover:bg-[#2A3FCC] transition-colors">
                        Connect
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* HubSpot Setup Info */}
        <div className="mt-12 bg-[#E8EDFF] border border-[#3A5AFE]/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">HubSpot Integration</h3>
          <p className="text-sm text-gray-700 mb-4">
            Connect your HubSpot account to automatically pull contact information, deal status, emails, notes, and timeline events for your meetings.
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#3A5AFE]" />
              <span>Automatic contact and company data sync</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#3A5AFE]" />
              <span>Real-time deal status and pipeline information</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#3A5AFE]" />
              <span>Email threads and conversation history</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#3A5AFE]" />
              <span>Notes, tasks, and timeline events</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
