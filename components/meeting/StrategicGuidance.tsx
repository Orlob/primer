import { Target, HelpCircle, CheckCircle2, Lightbulb } from "lucide-react";

interface StrategicGuidanceProps {
  howToTackle?: string[];
  whatToAsk?: string[];
  qualificationCriteria?: string[];
  interpretationHelp?: string;
  id?: string;
}

export default function StrategicGuidance({
  howToTackle = [],
  whatToAsk = [],
  qualificationCriteria = [],
  interpretationHelp,
  id,
}: StrategicGuidanceProps) {
  return (
    <div id={id} className="bg-white border border-gray-200 rounded-xl p-8 mb-8 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <Target size={20} className="text-[#3A5AFE]" />
        <h2 className="text-lg font-semibold text-gray-900">Strategic Guidance</h2>
      </div>

      {howToTackle.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={16} className="text-[#3A5AFE]" />
            <h3 className="text-sm font-semibold text-gray-900">How to Tackle</h3>
          </div>
          <ul className="space-y-2">
            {howToTackle.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-[#3A5AFE] mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {whatToAsk.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle size={16} className="text-[#3A5AFE]" />
            <h3 className="text-sm font-semibold text-gray-900">What to Ask</h3>
          </div>
          <ul className="space-y-2">
            {whatToAsk.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-[#3A5AFE] mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {qualificationCriteria.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 size={16} className="text-[#3A5AFE]" />
            <h3 className="text-sm font-semibold text-gray-900">Qualification Criteria</h3>
          </div>
          <ul className="space-y-2">
            {qualificationCriteria.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-[#3A5AFE] mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {interpretationHelp && (
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Interpretation Help</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{interpretationHelp}</p>
        </div>
      )}
    </div>
  );
}
