import Image from "next/image";
import { BarChart3, Users, Star, CheckCircle2 } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      number: "30%",
      label: "Faster meeting prep",
      description: "Teams save hours per week",
      color: "#3A5AFE",
      icon: BarChart3,
    },
    {
      number: "500+",
      label: "Active users",
      description: "Trusted by sales teams",
      color: "#22C55E",
      icon: Users,
    },
    {
      number: "4.8/5",
      label: "Average rating",
      description: "On G2 and Capterra",
      color: "#F59E0B",
      icon: Star,
    },
    {
      number: "2.5x",
      label: "More prepared",
      description: "Enter meetings with confidence",
      color: "#EF4444",
      icon: CheckCircle2,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sales Director",
      company: "TechFlow Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      quote: "Our team saves 15 hours per week with Primer. No more scrambling before meetings—we're always prepared.",
      metric: "15 hours",
      metricLabel: "Saved per week",
      color: "#3A5AFE",
    },
    {
      name: "Michael Rodriguez",
      role: "Account Executive",
      company: "CloudScale",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      quote: "I feel real confidence when I see a Primer briefing. That's information I couldn't see across the deal before.",
      metric: "30%",
      metricLabel: "Faster deal closure",
      color: "#22C55E",
    },
    {
      name: "Emily Watson",
      role: "VP of Sales",
      company: "DataVault",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      quote: "Primer eliminated our blind meetings. Every rep enters calls fully informed, and our win rate shows it.",
      metric: "25%",
      metricLabel: "Increase in win rate",
      color: "#F59E0B",
    },
    {
      name: "David Kim",
      role: "Customer Success Manager",
      company: "GrowthLabs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      quote: "The AI analysis is spot-on. It surfaces exactly what I need to know, every time. No more digging through emails.",
      metric: "90%",
      metricLabel: "Less prep time",
      color: "#EF4444",
    },
  ];

  return (
    <section className="bg-[#F3F4F6] py-16 md:py-24">
      <div className="max-w-[960px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-semibold text-[32px] leading-[1.2] tracking-tight mb-4 text-[#111827]">
            Don't just take our word for it
          </h2>
          <p className="text-lg text-[#374151]">
            Real results from teams using Primer
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[12px] p-6 border border-[#E5E7EB] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-150 ease-in-out hover:scale-[1.02]"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ backgroundColor: stat.color }}
                >
                  <IconComponent className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="text-[32px] font-semibold text-[#111827] mb-2 leading-none">
                  {stat.number}
                </div>
                <div className="font-semibold text-[20px] text-[#111827] mb-1">
                  {stat.label}
                </div>
                <div className="text-[14px] text-[#6B7280]">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-150 ease-in-out overflow-hidden"
            >
              {/* Image Background with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Color Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 0%, transparent 30%, ${testimonial.color} 100%)`,
                    opacity: 0.85,
                  }}
                ></div>
                {/* Dark Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/20"></div>
                
                {/* Metric overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-[32px] font-semibold mb-1 leading-none">
                    {testimonial.metric}
                  </div>
                  <div className="text-[14px] opacity-90">
                    {testimonial.metricLabel}
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <p className="text-[16px] text-[#374151] mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-[16px] text-[#111827]">
                    {testimonial.name}
                  </div>
                  <div className="text-[14px] text-[#6B7280]">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
