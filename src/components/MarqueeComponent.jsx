'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeComponent = ({ data }) => {
    return (
        <div className="w-full border-y border-black/10 bg-[#FBFCFA]">
            <Marquee
                speed={180}
                gradient={false}
                pauseOnHover
            >
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-2 border-r border-black/10 px-5 py-1"
                    >
                        <span className="text-lg">
                            {item.image}
                        </span>

                        <span className="text-sm font-medium text-[#1d271f]">
                            {item.nameBn}
                        </span>

                        <span className="text-sm font-medium text-[#1d271f]">
                            {item.today} টাকা/{item.unit}
                        </span>

                        {item.change.dir === 'up' ? (
                            <span className="text-sm font-semibold text-[#E5484D]">
                                ▲ {item.change.pct}%
                            </span>
                        ) : (
                            <span className="text-sm font-semibold text-[#057C37]">
                                ▼ {item.change.pct}%
                            </span>
                        )}
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeComponent;