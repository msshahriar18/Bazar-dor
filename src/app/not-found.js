import React from 'react';
import Link from 'next/link';
function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <div className="rounded-[24px] border border-[#DCE4DE] bg-[#FCFDFC] p-10 shadow-sm max-w-md w-full">
                <span className="text-[64px]">🔍</span>
                <h1 className="mt-4 text-[28px] font-bold text-[#1D271F]">
                    পেইজটি পাওয়া যায়নি
                </h1>

                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-block rounded-full bg-[#1D271F] px-8 py-3 text-[16px] font-semibold text-white transition hover:bg-[#2e3c30]"
                    >
                        হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;