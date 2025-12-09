"use client";

import Link from "next/link";
import { Rocket, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface OnboardingBannerProps {
  completedSteps: number;
  totalSteps: number;
  onDismiss?: () => void;
}

export default function OnboardingBanner({
  completedSteps,
  totalSteps,
  onDismiss,
}: OnboardingBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  const progress = (completedSteps / totalSteps) * 100;
  const hasIncompleteSteps = completedSteps < totalSteps;

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed || !hasIncompleteSteps) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-[#E8EDFF] to-[#F0F4FF] border border-[#3A5AFE]/20 rounded-xl p-6 mb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A5AFE]/5 rounded-full -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#3A5AFE]/5 rounded-full -ml-12 -mb-12" />

      <div className="relative flex items-start justify-between gap-6">
        <div className="flex items-start gap-4 flex-1">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#3A5AFE] flex items-center justify-center">
              <Rocket size={24} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Complete Your Setup</h3>
              <span className="px-2 py-0.5 text-xs font-medium bg-[#3A5AFE] text-white rounded-full">
                {totalSteps - completedSteps} steps left
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Finish setting up Primer to get the most out of your meeting briefings. Only {totalSteps - completedSteps} step{totalSteps - completedSteps !== 1 ? "s" : ""} remaining!
            </p>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-600">Setup Progress</span>
                <span className="text-xs font-medium text-[#3A5AFE]">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#3A5AFE] to-[#2A3FCC] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3A5AFE] text-white rounded-lg font-medium hover:bg-[#2A3FCC] transition-colors shadow-sm hover:shadow-md"
            >
              <Rocket size={16} />
              Continue Setup
            </Link>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="flex-shrink-0 p-1 rounded-lg hover:bg-white/60 transition-colors"
          aria-label="Dismiss"
        >
          <X size={20} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
}
