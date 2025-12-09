import { TrendingUp, Clock, AlertCircle, CheckCircle2 } from "lucide-react";

interface Milestone {
  date: string;
  event: string;
  type?: "positive" | "neutral" | "warning";
}

interface AccountStatusProps {
  accountType: string;
  engagementLevel: string;
  relationshipHealth: string;
  milestones?: Milestone[];
  implications?: string;
  id?: string;
}

export default function AccountStatus({
  accountType,
  engagementLevel,
  relationshipHealth,
  milestones = [],
  implications,
  id,
}: AccountStatusProps) {
  const getHealthColor = (health: string) => {
    if (health.toLowerCase().includes("strong") || health.toLowerCase().includes("good")) {
      return "text-green-700 bg-green-50";
    }
    if (health.toLowerCase().includes("warning") || health.toLowerCase().includes("friction")) {
      return "text-yellow-700 bg-yellow-50";
    }
    return "text-gray-700 bg-gray-50";
  };

  const getMilestoneIcon = (type?: string) => {
    switch (type) {
      case "positive":
        return <CheckCircle2 size={16} className="text-green-600" />;
      case "warning":
        return <AlertCircle size={16} className="text-yellow-600" />;
      default:
        return <Clock size={16} className="text-gray-600" />;
    }
  };

  return (
    <div id={id} className="bg-white border border-gray-200 rounded-xl p-8 mb-8 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp size={20} className="text-[#3A5AFE]" />
        <h2 className="text-lg font-semibold text-gray-900">Account Status & Historical Context</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <div className="text-xs text-gray-500 mb-1">Account Type</div>
          <div className="text-sm font-semibold text-gray-900">{accountType}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Engagement Level</div>
          <div className="text-sm font-semibold text-gray-900">{engagementLevel}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Relationship Health</div>
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getHealthColor(relationshipHealth)}`}>
            {relationshipHealth}
          </span>
        </div>
      </div>

      {milestones.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Milestones</h3>
          <div className="space-y-2">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-3 text-sm">
                {getMilestoneIcon(milestone.type)}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{milestone.event}</span>
                    <span className="text-xs text-gray-500">{milestone.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {implications && (
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Implication</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{implications}</p>
        </div>
      )}
    </div>
  );
}
