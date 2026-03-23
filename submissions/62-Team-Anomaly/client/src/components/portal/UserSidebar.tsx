"use client";

import {
    Bot,
    PlusCircle,
    Ticket,
    Activity,
    Bell,
    BookOpen,
    User,
    Settings,
    HelpCircle
} from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const userNavItems = [
    { name: "AI Assistant", href: "/portal/assistant", icon: Bot },
    { name: "New Complaint", href: "/portal/report", icon: PlusCircle },
    { name: "My Tickets", href: "/portal/tickets", icon: Ticket },
    { name: "Ticket Status", href: "/portal/status", icon: Activity },
    { name: "Notifications", href: "/portal/notifications", icon: Bell },
    { name: "Knowledge Base", href: "/portal/kb", icon: BookOpen },
    { name: "Profile", href: "/portal/profile", icon: User },
    { name: "Settings", href: "/portal/settings", icon: Settings },
];

export default function UserSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-full flex flex-col justify-between py-8 px-6 bg-black/20 backdrop-blur-3xl border-r border-white/5 relative z-20 shrink-0">
            <div>
                {/* Logo */}
                <div className="flex items-center gap-3 px-2 mb-10">
                    <div className="w-9 h-9 rounded-xl bg-[#4F7CFF] shadow-[0_0_20px_rgba(79,124,255,0.4)] flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
                        <div className="w-3.5 h-3.5 bg-black rounded-sm relative z-10" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading font-black text-xl tracking-tighter text-white uppercase leading-none">WorkSync</span>
                        <span className="text-[8px] font-black text-[#4F7CFF] uppercase tracking-[0.3em] mt-1">User Portal</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-1.5">
                    {userNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-500 relative text-[11px] font-black uppercase tracking-widest overflow-hidden group cursor-pointer",
                                    isActive
                                        ? "text-white bg-white/[0.07] shadow-lg border border-white/10"
                                        : "text-white/30 hover:text-white/80 hover:bg-white/[0.03]"
                                )}
                            >
                                {isActive && (
                                    <>
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4F7CFF] shadow-[0_0_15px_#4F7CFF]" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#4F7CFF]/10 to-transparent pointer-events-none" />
                                    </>
                                )}
                                <item.icon className={clsx("w-4 h-4 transition-transform duration-500 group-hover:scale-110", isActive ? "text-[#4F7CFF] drop-shadow-[0_0_8px_rgba(79,124,255,0.5)]" : "opacity-50")} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="flex flex-col gap-6">
                <button className="flex items-center gap-3 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors group">
                    <HelpCircle className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" /> System Info
                </button>

                <div className="glass-panel p-4 flex items-center gap-4 border-white/10 bg-white/[0.02]">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-cover border-2 border-white/10" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=33')" }} />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#4CAF9A] rounded-full border-2 border-[#0E0E10] shadow-[0_0_8px_#4CAF9A]" />
                    </div>
                    <div className="flex flex-col items-start leading-none gap-1">
                        <span className="text-sm font-bold text-white tracking-tight text-left">Jordan Smith</span>
                        <span className="text-[9px] uppercase font-black tracking-widest text-white/30 text-left">Employee</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
