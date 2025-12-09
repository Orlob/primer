"use client";

import { useState } from "react";
import { CheckSquare } from "lucide-react";
import { Check } from "lucide-react";

interface ActionItemsProps {
  items: string[];
  id?: string;
}

export default function ActionItems({ items, id }: ActionItemsProps) {
  const [completedItems, setCompletedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setCompletedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div id={id} className="bg-white border border-gray-200 rounded-xl p-8 mb-8 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <CheckSquare size={20} className="text-[#3A5AFE]" />
        <h2 className="text-lg font-semibold text-gray-900">Action Items</h2>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => {
          const isCompleted = completedItems.has(index);
          return (
            <li
              key={index}
              className="flex items-start gap-3 group cursor-pointer transition-all duration-200 hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg"
              onClick={() => toggleItem(index)}
            >
              <div
                className={`relative w-5 h-5 rounded border-2 mt-0.5 flex-shrink-0 transition-all duration-200 ${
                  isCompleted
                    ? "bg-[#3A5AFE] border-[#3A5AFE]"
                    : "border-gray-300 group-hover:border-[#3A5AFE]"
                }`}
              >
                {isCompleted && (
                  <Check
                    size={14}
                    className="absolute inset-0 m-auto text-white animate-in fade-in zoom-in duration-200"
                  />
                )}
              </div>
              <span
                className={`text-sm transition-all duration-200 ${
                  isCompleted
                    ? "text-gray-500 line-through"
                    : "text-gray-700 group-hover:text-gray-900"
                }`}
              >
                {item}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
