import Image from 'next/image';
import React from 'react';
import Time from './Time';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-full border-b border-[#057C37]/5 bg-[#FBFCFA]">
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

                <div className="flex items-center gap-3">
                    <button className="rounded-lg px-5 py-2 text-sm font-semibold text-[#1d271f] transition hover:bg-[#057C37]/10">
                        সাইন ইন
                    </button>

                    <button className="rounded-lg bg-[#057C37] px-5 py-2 text-sm font-semibold text-[#FBFCFA] transition hover:bg-[#057C37]/90">
                        সাইন আপ
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
