import React from "react";
import Link from "next/link";

const ProductCard = ({ item }) => {
    const getUnit = (unit) => {
        const units = {
            kg: "কেজি",
            liter: "লিটার",
            dozen: "ডজন",
            piece: "পিস",
        };

        return units[unit] || unit;
    };

    const isUp = item.change?.dir === "up";
    const isDown = item.change?.dir === "down";

    return (
        <Link href={`/product/${item.id}`} className="block">
            <div className="h-[232px] rounded-[26px] border border-[#DCE4DE] bg-[#FCFDFC] p-7 transition duration-200 hover:-translate-y-1 hover:border-[#C9D5CC] hover:shadow-md">

                <div className="flex items-center gap-5">

                    <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-[20px] bg-[#F0F5F1] text-[43px]">
                        {item.image}
                    </div>

                    <div>
                        <h3 className="text-[27px] font-bold leading-[1.1] text-[#1D271F]">
                            {item.nameBn}
                        </h3>

                        <p className="mt-2 text-[18px] text-[#4B554D]">
                            প্রতি {getUnit(item.unit)}
                        </p>
                    </div>
                </div>

                <div className="mt-[38px] flex items-end justify-between">

                    <div>
                        <p className="text-[17px] text-[#4B554D]">
                            আজকের দাম
                        </p>

                        <div className="mt-2 flex items-baseline gap-2">
                            <span className="text-[31px] font-bold leading-none text-[#1D271F]">
                                {item.today.toLocaleString("bn-BD")}
                            </span>

                            <span className="text-[20px] text-[#4B554D]">
                                টাকা
                            </span>
                        </div>
                    </div>

                    <div
                        className={`flex items-center gap-2 rounded-full px-4 py-2 ${isUp
                            ? "bg-[#FFF0F0] text-[#E5484D]"
                            : isDown
                                ? "bg-[#E9F7EE] text-[#16A34A]"
                                : "bg-[#F1F3F1] text-[#6D746E]"
                            }`}
                    >
                        <span className="text-[17px] font-bold">
                            {isUp ? "▲" : isDown ? "▼" : "—"}
                        </span>

                        <span className="text-[17px] font-semibold">
                            {Math.abs(item.change?.pct || 0).toLocaleString("bn-BD")}%
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;