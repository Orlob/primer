import { Clock, Search, EyeOff, FileText } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "You waste time scrolling through CRM timelines",
      description: "Manually digging through emails, notes, and calls before every meeting",
      color: "bg-red-50 border-red-200 text-red-700",
      iconColor: "text-red-500",
    },
    {
      icon: Search,
      title: "Important context gets buried",
      description: "Key details from past interactions are lost in the noise",
      color: "bg-orange-50 border-orange-200 text-orange-700",
      iconColor: "text-orange-500",
    },
    {
      icon: EyeOff,
      title: "You enter meetings blind",
      description: "No clear overview of deal status, recent activity, or what matters",
      color: "bg-yellow-50 border-yellow-200 text-yellow-700",
      iconColor: "text-yellow-500",
    },
    {
      icon: FileText,
      title: "No structured briefing",
      description: "Everything is scattered—emails here, notes there, tasks somewhere else",
      color: "bg-purple-50 border-purple-200 text-purple-700",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[960px] mx-auto px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900">
            Blind meetings start with{" "}
            <span className="text-[#EF4444] line-through decoration-2">poor preparation</span>.
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Without Primer, you&apos;re manually piecing together context before every meeting. Here&apos;s what that looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className={`${problem.color} rounded-xl p-6 border-2 transition-all duration-150 hover:shadow-lg hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${problem.iconColor} flex-shrink-0`}>
                    <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                    <p className="text-sm opacity-90">{problem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#E8EDFF] rounded-xl border-2 border-[#3A5AFE]/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-[#3A5AFE]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Open your calendar. Click the meeting.</div>
              <div className="text-sm text-gray-700">Primer prepares your briefing automatically.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
