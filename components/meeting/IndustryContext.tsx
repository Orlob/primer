import { TrendingUp, Users } from "lucide-react";

interface Reference {
  company: string;
  useCase: string;
  result: string;
}

interface IndustryContextProps {
  insights?: string[];
  customerReferences?: Reference[];
  id?: string;
}

export default function IndustryContext({
  insights = [],
  customerReferences = [],
  id,
}: IndustryContextProps) {
  return (
    <div id={id} className="bg-white border border-gray-200 rounded-xl p-8 mb-8 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp size={20} className="text-[#3A5AFE]" />
        <h2 className="text-lg font-semibold text-gray-900">Industry Context & Customer References</h2>
      </div>

      {insights.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Industry Insights</h3>
          <ul className="space-y-2">
            {insights.map((insight, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-[#3A5AFE] mt-0.5">•</span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {customerReferences.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Customer References</h3>
          <div className="space-y-4">
            {customerReferences.map((ref, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={16} className="text-[#3A5AFE]" />
                  <span className="text-sm font-semibold text-gray-900">{ref.company}</span>
                </div>
                <p className="text-sm text-gray-700 mb-1">{ref.useCase}</p>
                <p className="text-sm text-gray-600">{ref.result}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
