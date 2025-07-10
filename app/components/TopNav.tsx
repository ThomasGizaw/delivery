"use client";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TopNav({ onToggleAction }: { onToggleAction: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const isMenu = pathname === "/menu";
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <div className="sticky top-0 w-full bg-white z-10 h-14 flex items-center px-2 border-b gap-2">
        <Button variant="ghost" size="icon" onClick={onToggleAction} className="mr-1">
          <span className="text-xl">{isMenu ? "🎥" : "🍽️"}</span>
        </Button>
        <Button variant="outline" size="sm" className="mr-2">Allow location</Button>
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-3 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          onFocus={() => setShowSearch(true)}
          readOnly
        />
        <Button variant="ghost" size="icon" className="ml-1" onClick={() => setShowFilter(true)}>
          <span className="text-xl">⚙️</span>
        </Button>
      </div>
      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center" onClick={() => setShowSearch(false)}>
          <div className="bg-white rounded-xl p-6 w-80 shadow-lg" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-2">Search</h2>
            <input type="text" className="w-full border px-3 py-2 rounded mb-4" placeholder="Type to search..." autoFocus />
            <Button className="w-full" onClick={() => setShowSearch(false)}>Close</Button>
          </div>
        </div>
      )}
      {/* Filter Modal */}
      {showFilter && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center" onClick={() => setShowFilter(false)}>
          <div className="bg-white rounded-xl p-6 w-80 shadow-lg" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-2">Filters</h2>
            <div className="mb-4 text-gray-500">Cuisine, rating, distance, etc. (UI only)</div>
            <Button className="w-full" onClick={() => setShowFilter(false)}>Close</Button>
          </div>
        </div>
      )}
    </>
  );
} 