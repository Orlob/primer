"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Settings, Link2, LayoutDashboard } from "lucide-react";
import ButtonAccount from "@/components/ButtonAccount";

const navItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/meetings",
    label: "Meetings",
    icon: Calendar,
  },
  {
    href: "/dashboard/integrations",
    label: "Integrations",
    icon: Link2,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-colors ${
                    isActive
                      ? "border-[#3A5AFE] text-[#3A5AFE]"
                      : "border-transparent text-gray-700 hover:text-[#3A5AFE] hover:border-gray-300"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="py-2">
            <ButtonAccount />
          </div>
        </div>
      </div>
    </nav>
  );
}
