import React from 'react';
import Time from './Time';

const Hero = () => {
    return (
        <section className="bg-[#FBFCFA] px-6 py-10">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 rounded-[32px] border border-[#1d271f]/10 bg-white px-7 py-10 md:grid-cols-2 md:px-10 lg:px-12 lg:py-12">

                {/* Left Content */}
                <div className="max-w-3xl">

                    {/* Date */}
                    <div className="mb-6 inline-flex rounded-full bg-[#057C37]/10 px-5 py-2">
                        <div className="text-base font-medium text-[#1d271f]">
                            <Time />
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-[#1d271f] sm:text-5xl lg:text-6xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1d271f]/65">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                        দামের পরিবর্তন এক জায়গায়।
                    </p>

                    {/* Button */}
                    <button className="mt-8 rounded-xl bg-[#057C37] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-[#057C37]/90">
                        সব পণ্য দেখুন
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center">
                    <img
                        src="/bazar-hero.png"
                        alt="বাজারের পণ্য"
                        className="h-auto w-full max-w-[430px] object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;