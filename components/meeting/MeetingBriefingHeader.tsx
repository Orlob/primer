import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

interface MeetingBriefingHeaderProps {
  title: string;
  date: string;
  time: string;
  duration?: string;
  type?: string;
  headerImage?: string;
}

export default function MeetingBriefingHeader({
  title,
  date,
  time,
  duration,
  type,
  headerImage,
}: MeetingBriefingHeaderProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
      {headerImage ? (
        <div className="relative h-48 w-full">
          <Image
            src={headerImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-8 right-8">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
                <div className="flex items-center gap-4 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{time} {duration && `(${duration})`}</span>
                  </div>
                </div>
              </div>
              {type && (
                <span className="px-4 py-2 text-sm font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">
                  {type}
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h1>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{time} {duration && `(${duration})`}</span>
            </div>
            {type && (
              <span className="px-3 py-1 text-xs font-medium bg-[#E8EDFF] text-[#3A5AFE] rounded-full">
                {type}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
