import Image from "next/image";
import { Building2, MapPin, Users } from "lucide-react";

interface CompanyOverviewProps {
  name: string;
  size?: string;
  industry?: string;
  headquarters?: string;
  notes?: string;
  logo?: string;
  id?: string;
}

export default function CompanyOverview({
  name,
  size,
  industry,
  headquarters,
  notes,
  logo,
  id,
}: CompanyOverviewProps) {
  return (
    <div id={id} className="bg-white border border-gray-200 rounded-xl p-8 mb-8 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <Building2 size={20} className="text-[#3A5AFE]" />
        <h2 className="text-lg font-semibold text-gray-900">Company Overview</h2>
      </div>

      <div className="flex items-start gap-4 mb-6">
        {logo && (
          <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
            <Image
              src={logo}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
          <div className="space-y-2 text-sm text-gray-600">
            {size && (
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{size}</span>
              </div>
            )}
            {industry && (
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <span>{industry}</span>
              </div>
            )}
            {headquarters && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{headquarters}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {notes && (
        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-700 leading-relaxed">{notes}</p>
        </div>
      )}
    </div>
  );
}
