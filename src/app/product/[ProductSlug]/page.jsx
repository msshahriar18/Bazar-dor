import React from 'react';
import Link from 'next/link';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

const ProductPage = async ({ params }) => {
    const { ProductSlug } = await params;

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
        redirect('/sign-in');
    }

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${ProductSlug}`);
    const data = await res.json();

    const toBengaliNumber = (num) => {
        if (num === undefined || num === null) return '০';
        const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().replace(/\d/g, (d) => bnDigits[d]);
    };

    const getUnit = (unit) => {
        const units = {
            kg: "কেজি",
            liter: "লিটার",
            dozen: "ডজন",
            piece: "পিস",
        };
        return units[unit] || unit;
    };

    const isUp = data.change?.dir === "up";
    const isDown = data.change?.dir === "down";

    const marketsWithAvg = data.markets?.map((m) => {
        const avg = Math.round((m.min + m.max) / 2);
        return { ...m, avg };
    }) || [];

    const allMins = data.markets?.map(m => m.min) || [];
    const allMaxs = data.markets?.map(m => m.max) || [];
    const minPrice = allMins.length ? Math.min(...allMins) : 0;
    const maxPrice = allMaxs.length ? Math.max(...allMaxs) : 0;

    const allAvgs = marketsWithAvg.map(m => m.avg);
    const avgPrice = allAvgs.length ? Math.round(allAvgs.reduce((a, b) => a + b, 0) / allAvgs.length) : data.today;

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 font-sans">
            <div className="flex items-center gap-2 text-[15px] text-[#4B554D] mb-6">
                <Link href="/" className="hover:text-[#1D271F]">হোম</Link>
                <span>›</span>
                <Link href={`/category/${data.category}`} className="hover:text-[#1D271F]">{data.categoryNameBn}</Link>
                <span>›</span>
                <span className="text-[#1D271F] font-medium">{data.nameBn}</span>
            </div>

            <div className="rounded-[24px] border border-[#DCE4DE] bg-[#FCFDFC] p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-6">
                    <div className="flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-[22px] bg-[#F0F5F1] text-[48px]">
                        {data.image}
                    </div>
                    <div>
                        <h1 className="text-[32px] font-bold leading-tight text-[#1D271F]">
                            {data.nameBn}
                        </h1>
                        <p className="mt-1 text-[18px] text-[#4B554D]">
                            প্রতি {getUnit(data.unit)} · {data.categoryNameBn}
                        </p>
                        <p className="mt-2 text-[15px] text-[#4B554D]">
                            গতকালের তুলনায় আজ দাম <span className={isUp ? "text-[#E5484D] font-medium" : isDown ? "text-[#16A34A] font-medium" : "text-[#6D746E]"}>
                                {isUp ? "বেড়েছে" : isDown ? "কমেছে" : "পরিবর্তিত"} {toBengaliNumber(Math.abs(data.change?.pct || 0))}%
                            </span>
                        </p>
                    </div>
                </div>

                <div className="rounded-[20px] border border-[#DCE4DE] bg-[#F0F5F0] px-8 py-5 text-center min-w-[200px] shadow-sm">
                    <p className="text-[14px] text-[#4B554D]">আজকের দাম</p>
                    <div className="mt-1 flex items-baseline justify-center gap-1">
                        <span className="text-[36px] font-bold leading-none text-[#1D271F]">
                            {toBengaliNumber(data.today)}
                        </span>
                        <span className="text-[18px] text-[#4B554D]">টাকা</span>
                    </div>
                    <p className="mt-1 text-[14px] text-[#4B554D]">
                        টাকা / {getUnit(data.unit)}
                    </p>
                    <div className={`mt-2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[14px] font-bold ${isUp ? "bg-[#FFF0F0] text-[#E5484D]" : isDown ? "bg-[#E9F7EE] text-[#16A34A]" : "bg-[#F1F3F1] text-[#6D746E]"
                        }`}>
                        <span>{isUp ? "▲" : isDown ? "▼" : "—"}</span>
                        <span>{toBengaliNumber(Math.abs(data.change?.pct || 0))}%</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-[#DCE4DE] bg-[#FCFDFC] p-8 shadow-sm">
                <h2 className="text-[20px] font-bold text-[#1D271F] mb-5">দামের সারসংক্ষেপ</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-[18px] border border-[#DCE4DE] bg-white p-5">
                        <p className="text-[15px] text-[#4B554D]">সর্বনিম্ন দাম</p>
                        <div className="mt-2 flex items-baseline gap-1">
                            <span className="text-[28px] font-bold text-[#16A34A]">{toBengaliNumber(minPrice)}</span>
                            <span className="text-[16px] text-[#4B554D]">টাকা</span>
                        </div>
                        <p className="mt-1 text-[13px] text-[#6D746E]">সবচেয়ে কম দামের বাজার</p>
                    </div>

                    <div className="rounded-[18px] border border-[#DCE4DE] bg-white p-5">
                        <p className="text-[15px] text-[#4B554D]">সর্বাধিক দাম</p>
                        <div className="mt-2 flex items-baseline gap-1">
                            <span className="text-[28px] font-bold text-[#E5484D]">{toBengaliNumber(maxPrice)}</span>
                            <span className="text-[16px] text-[#4B554D]">টাকা</span>
                        </div>
                        <p className="mt-1 text-[13px] text-[#6D746E]">সবচেয়ে বেশি দামের বাজার</p>
                    </div>

                    {/* Avarage Price */}
                    <div className="rounded-[18px] border border-[#DCE4DE] bg-white p-5">
                        <p className="text-[15px] text-[#4B554D]">গড় দাম</p>
                        <div className="mt-2 flex items-baseline gap-1">
                            <span className="text-[28px] font-bold text-[#1D271F]">{toBengaliNumber(avgPrice)}</span>
                            <span className="text-[16px] text-[#4B554D]">টাকা</span>
                        </div>
                        <p className="mt-1 text-[13px] text-[#6D746E]">প্রতি {getUnit(data.unit)}-এর হিসাবে</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-[#DCE4DE] bg-[#FCFDFC] p-8 shadow-sm">
                <h2 className="text-[20px] font-bold text-[#1D271F] mb-6">বাজারভিত্তিক আজকের দাম</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[#DCE4DE] text-[15px] font-semibold text-[#4B554D]">
                                <th className="pb-4 font-semibold">বাজার</th>
                                <th className="pb-4 font-semibold">বিভাগ</th>
                                <th className="pb-4 font-semibold">সর্বনিম্ন</th>
                                <th className="pb-4 font-semibold">সর্বাধিক</th>
                                <th className="pb-4 font-semibold">গড়</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAEFEA]">
                            {marketsWithAvg.map((item, index) => (
                                <tr key={index} className="text-[16px] text-[#1D271F] hover:bg-[#F0F5F1]/50 transition">
                                    <td className="py-4 font-medium">{item.market}</td>
                                    <td className="py-4 text-[#4B554D]">{item.division}</td>
                                    <td className="py-4">{toBengaliNumber(item.min)} টাকা</td>
                                    <td className="py-4">{toBengaliNumber(item.max)} টাকা</td>
                                    <td className="py-4">{toBengaliNumber(item.avg)} টাকা</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductPage; 