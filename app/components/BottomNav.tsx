"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/home", label: "Feed", icon: "🏠" },
  { href: "/saved", label: "Saved", icon: "❤️" },
  { href: "/discover", label: "Discover", icon: "🔍" },
  { href: "/activity", label: "Activity", icon: "🕒" },
  { href: "/profile", label: "Profile", icon: "👤" },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-white border-t flex items-center justify-around z-20">
      {nav.map((item) => (
        <Link key={item.href} href={item.href} className="flex flex-col items-center justify-center">
          <Button variant="ghost" size="icon" className={pathname === item.href ? "text-orange-500" : "text-gray-500"}>
            <span className="text-2xl">{item.icon}</span>
          </Button>
          <span className={`text-xs ${pathname === item.href ? "text-orange-500" : "text-gray-500"}`}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
} 