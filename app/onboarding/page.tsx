"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight, ArrowLeft, Link2, Calendar, Zap, Sparkles, Rocket } from "lucide-react";

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  fields?: {
    label: string;
    placeholder: string;
    type: "text" | "select";
    options?: string[];
  }[];
}

const steps: OnboardingStep[] = [
  {
    id: "welcome",
    title: "Welcome to Primer! 🎉",
    description: "Let's get you set up in just a few steps. This will only take 2 minutes.",
    icon: <Rocket size={32} className="text-[#3A5AFE]" />,
  },
  {
    id: "hubspot",
    title: "Connect Your HubSpot Account",
    description: "Connect your HubSpot CRM to automatically sync meetings, contacts, and deals.",
    icon: <Link2 size={32} className="text-[#3A5AFE]" />,
    fields: [
      {
        label: "HubSpot Account",
        placeholder: "Select your HubSpot account",
        type: "select",
        options: ["Connect new account", "Use existing connection"],
      },
    ],
  },
  {
    id: "calendar",
    title: "Sync Your Calendar",
    description: "Connect your calendar so Primer can automatically prepare briefings for your meetings.",
    icon: <Calendar size={32} className="text-[#3A5AFE]" />,
    fields: [
      {
        label: "Calendar Provider",
        placeholder: "Choose your calendar",
        type: "select",
        options: ["Google Calendar", "Microsoft Outlook", "Apple Calendar"],
      },
    ],
  },
  {
    id: "preferences",
    title: "Set Your Preferences",
    description: "Tell us how you'd like to receive your meeting briefings.",
    icon: <Zap size={32} className="text-[#3A5AFE]" />,
    fields: [
      {
        label: "Briefing Frequency",
        placeholder: "When should we prepare briefings?",
        type: "select",
        options: ["1 hour before meeting", "2 hours before meeting", "1 day before meeting"],
      },
      {
        label: "Notification Method",
        placeholder: "How should we notify you?",
        type: "select",
        options: ["Email", "In-app notification", "Both"],
      },
    ],
  },
  {
    id: "complete",
    title: "You're All Set! 🚀",
    description: "Primer is now ready to help you prepare for every meeting. Let's get started!",
    icon: <Sparkles size={32} className="text-[#3A5AFE]" />,
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps((prev) => new Set([...prev, currentStep]));
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFieldChange = (fieldLabel: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldLabel]: value,
    }));
  };

  const canProceed = () => {
    if (step.id === "welcome" || step.id === "complete") {
      return true;
    }
    if (step.fields) {
      return step.fields.every((field) => formData[field.label]);
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8EDFF] via-white to-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-[#3A5AFE]">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3A5AFE] to-[#2A3FCC] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-between mb-16">
          {steps.map((s, index) => {
            const isCompleted = completedSteps.has(index) || index < currentStep;
            const isCurrent = index === currentStep;
            const isPast = index < currentStep;

            return (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? "bg-[#3A5AFE] text-white scale-110"
                        : isCurrent
                        ? "bg-white border-2 border-[#3A5AFE] text-[#3A5AFE] shadow-lg scale-110"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={20} className="animate-pulse" />
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium text-center max-w-[80px] ${
                      isCurrent ? "text-[#3A5AFE]" : isPast ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {s.title.split(" ")[0]}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 transition-all duration-300 ${
                      isPast ? "bg-[#3A5AFE]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E8EDFF] mb-6 animate-pulse">
              {step.icon}
            </div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">{step.title}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{step.description}</p>
          </div>

          {/* Form Fields */}
          {step.fields && (
            <div className="space-y-6 max-w-md mx-auto">
              {step.fields.map((field, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      value={formData[field.label] || ""}
                      onChange={(e) => handleFieldChange(field.label, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5AFE] focus:border-transparent transition-all"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={formData[field.label] || ""}
                      onChange={(e) => handleFieldChange(field.label, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5AFE] focus:border-transparent transition-all"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Completion Screen */}
          {step.id === "complete" && (
            <div className="text-center animate-pulse">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#3A5AFE] to-[#2A3FCC] mb-6">
                  <CheckCircle2 size={64} className="text-white" />
                </div>
              </div>
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm text-green-800">HubSpot connected</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm text-green-800">Calendar synced</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-sm text-green-800">Preferences saved</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentStep === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-white transition-all ${
              canProceed()
                ? "bg-[#3A5AFE] hover:bg-[#2A3FCC] shadow-lg hover:shadow-xl transform hover:scale-105"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {currentStep === steps.length - 1 ? (
              <>
                Get Started
                <Rocket size={18} />
              </>
            ) : (
              <>
                Continue
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>

        {/* Skip Option */}
        {currentStep < steps.length - 1 && (
          <div className="text-center mt-8">
            <button
              onClick={() => router.push("/dashboard")}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Skip for now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
