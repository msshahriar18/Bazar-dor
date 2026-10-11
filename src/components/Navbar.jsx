"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Time from "./Time";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

const Navbar = () => {
    const { data: session, isPending } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = async () => {
        await signOut();
        setMenuOpen(false);
        toast.success("সাইন আউট হয়েছে");
    };

    return (
        <nav className="relative z-50 w-full border-b border-[#057C37]/5 bg-[#FBFCFA]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">

                <Link href="/">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#057C37] p-2">
                            <Image
                                src="/logo-icon.png"
                                alt="বাজার দর"
                                width={25}
                                height={25}
                                className="h-6 w-6 object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-[16px] font-bold leading-[1.1] text-black/90">
                                বাজার দর
                            </h1>

                            <div className="mt-0.5 text-[11px] leading-tight text-[#057C37]/70">
                                <Time />
                            </div>
                        </div>
                    </div>
                </Link>

                {isPending ? (
                    <div className="h-9 w-24 animate-pulse rounded-lg bg-black/5" />
                ) : session ? (
                    <div className="relative">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-[#057C37]/10"
                        >
                            {session.user.image ? (
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name}
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#057C37] text-sm font-semibold text-white">
                                    {session.user.name?.charAt(0).toUpperCase()}
                                </div>
                            )}
                            <span className="text-sm font-semibold text-[#1d271f]">
                                {session.user.name}
                            </span>
                        </button>

                        {menuOpen && (
                            <div className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-black/5 bg-white p-3 shadow-lg">
                                <p className="text-sm font-semibold text-[#1d271f]">
                                    {session.user.name}
                                </p>
                                <p className="text-xs text-[#1d271f]/60">
                                    {session.user.email}
                                </p>

                                <Link
                                    href="/profile"
                                    onClick={() => setMenuOpen(false)}
                                    className="mt-3 block text-sm text-[#1d271f]/80 hover:text-[#057C37]"
                                >
                                    আমার প্রোফাইল
                                </Link>

                                <button
                                    onClick={handleSignOut}
                                    className="mt-2 text-sm font-semibold text-red-600 hover:text-red-700"
                                >
                                    সাইন আউট
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link
                            href="/sign-in"
                            className="rounded-lg px-5 py-2 text-sm font-semibold text-[#1d271f] transition hover:bg-[#057C37]/10"
                        >
                            সাইন ইন
                        </Link>

                        <Link
                            href="/sign-up"
                            className="rounded-lg bg-[#057C37] px-5 py-2 text-sm font-semibold text-[#FBFCFA] transition hover:bg-[#057C37]/90"
                        >
                            সাইন আপ
                        </Link>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;
