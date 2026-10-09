import ProductCard from '@/components/ProductCard';
import React from 'react';

const CategoryPage = async ({ params }) => {
    const { CategorySlug } = await params;

    const catNameRes = await fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${CategorySlug}`);
    const catNameData = await catNameRes.json();

    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${CategorySlug}`);
    const CatData = await res.json();

    // সংখ্যা বাংলায় রূপান্তর করার ফাংশন
    const toBengaliNumber = (num) => {
        const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().replace(/\d/g, (d) => bnDigits[d]);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* ক্যাটাগরি হেডার সেকশন */}
            <div className="rounded-[24px] border border-[#DCE4DE] bg-[#FCFDFC] p-8 shadow-sm">
                <div className="flex items-center gap-4">
                    <span className="flex h-[60px] w-[60px] items-center justify-center rounded-[18px] bg-[#F0F5F1] text-[32px]">
                        {catNameData.icon}
                    </span>
                    <div>
                        <h1 className="text-[32px] font-bold text-[#1D271F]">
                            {catNameData.nameBn}
                        </h1>
                        <p className="mt-1 text-[16px] text-[#4B554D]">
                            {toBengaliNumber(CatData.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-[16px] text-[#4B554D] mt-12">
                মোট <span className=" text-[#1D271F]">{toBengaliNumber(CatData.length)}</span>টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {CatData.map((item) => (
                    <ProductCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;