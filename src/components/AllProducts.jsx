"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState("default");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    "https://openapi.programming-hero.com/api/bazardor/products"
                );
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const sortedData = [...data].sort((a, b) => {
        if (sortOption === "low-high") {
            return a.today - b.today;
        } else if (sortOption === "high-low") {
            return b.today - a.today;
        }
        return 0;
    });

    return (
        <section id="সব-পণ্য" className="bg-[#F4F7F4] px-5 py-12">
            <div className="mx-auto max-w-7xl">

                <div className="mb-2 flex items-center justify-between gap-3">
                    <h2 className="text-3xl font-bold text-[#1D271F]">
                        সব পণ্য
                    </h2>

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
                                        ? "bg-[#EAF5ED] text-[#16A34A]"
                                        : "text-[#1D271F] hover:bg-gray-50"
                                        }`}
                                >
                                    {sortOption === "high-low" && "✓ "} দাম: বেশি থেকে কম
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <p className="mb-8 text-base text-[#667168]">
                    নিত্যপ্রয়োজনীয় সব পণ্যের আজকের বাজারদর এক নজরে দেখুন।
                </p>

                {loading ? (
                    <div className="flex min-h-[30vh] items-center justify-center">
                        <span className="loading loading-spinner loading-lg text-[#16A34A]"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                        {sortedData.map((item) => (
                            <ProductCard
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );

};

export default AllProducts;
