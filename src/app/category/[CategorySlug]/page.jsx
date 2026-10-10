"use client";

import ProductCard from "@/components/ProductCard";
import React, { useState, useEffect } from "react";
import { use } from "react";

const CategoryPage = ({ params }) => {
    const resolvedParams = use(params);
    const CategorySlug = resolvedParams.CategorySlug;

    const [catNameData, setCatNameData] = useState(null);
    const [catData, setCatData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState("default");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catNameRes, res] = await Promise.all([
                    fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${CategorySlug}`),
                    fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${CategorySlug}`),
                ]);

                const catNameJson = await catNameRes.json();
                const catJson = await res.json();

                setCatNameData(catNameJson);
                setCatData(catJson);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [CategorySlug]);

    const sortedProducts = [...catData].sort((a, b) => {
        if (sortOption === "low-high") {
            return a.today - b.today;
        } else if (sortOption === "high-low") {
            return b.today - a.today;
        }
        return 0;
    });

    if (loading) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-[#16A34A]"></span>
            </div>
        );
    }

    if (!catNameData) {
        return null;
    }

    return (
        <main className="min-h-screen bg-[#F4F7F4] px-5 py-10">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8 rounded-3xl border border-[#1D271F]/10 bg-white p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#EAF5ED] text-3xl">
                            {catNameData.icon}
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold text-[#1D271F] sm:text-3xl">
                                {catNameData.nameBn}
                            </h1>

                            <p className="mt-2 text-sm text-[#1D271F]/65 sm:text-base">
                                {catData.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-white p-4 sm:px-6 border border-[#1D271F]/10 shadow-sm">
                    <p className="text-sm sm:text-base text-[#1D271F]/75 font-medium">
                        মোট <span className=" text-[#1D271F]">{catData.length}</span>টি পণ্য দেখানো হচ্ছে
                    </p>

                    <div className="relative">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-[#1D271F]/70">সাজান</span>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 rounded-xl border border-[#1D271F]/20 bg-white px-4 py-2 text-sm font-medium text-[#1D271F] transition hover:border-[#1D271F]"
                            >
                                <span>
                                    {sortOption === "low-high"
                                        ? "দাম: কম থেকে বেশি"
                                        : sortOption === "high-low"
                                            ? "দাম: বেশি থেকে কম"
                                            : "ডিফল্ট"}
                                </span>
                                <span className="text-xs">▼</span>
                            </button>
                        </div>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-[#1D271F]/10 bg-white p-2 shadow-lg z-20">
                                <button
                                    onClick={() => {
                                        setSortOption("default");
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium transition ${sortOption === "default"
                                        ? "bg-[#EAF5ED] text-[#16A34A]"
                                        : "text-[#1D271F] hover:bg-gray-50"
                                        }`}
                                >
                                    {sortOption === "default" && "✓ "} ডিফল্ট
                                </button>
                                <button
                                    onClick={() => {
                                        setSortOption("low-high");
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium transition ${sortOption === "low-high"
                                        ? "bg-[#EAF5ED] text-[#16A34A]"
                                        : "text-[#1D271F] hover:bg-gray-50"
                                        }`}
                                >
                                    {sortOption === "low-high" && "✓ "} দাম: কম থেকে বেশি
                                </button>
                                <button
                                    onClick={() => {
                                        setSortOption("high-low");
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium transition ${sortOption === "high-low"
                                        ? "bg-[#EAF5ED] .text-[#16A34A]"
                                        : "text-[#1D271F] hover:bg-gray-50"
                                        }`}
                                >
                                    {sortOption === "high-low" && "✓ "} দাম: বেশি থেকে কম
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {sortedProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {sortedProducts.map((item) => (
                            <ProductCard
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-[#1D271F]/10 bg-white px-5 py-14 text-center">
                        <p className="text-lg font-semibold text-[#1D271F]">
                            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
                        </p>
                    </div>
                )}

            </div>
        </main>
    );
};

export default CategoryPage;