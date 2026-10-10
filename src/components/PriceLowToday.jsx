import React from "react";
import ProductCard from "./ProductCard";

const PriceLowToday = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );

    const data = await res.json();

    const fallingProducts = data
        .filter((item) => item.change?.dir === "down")
        .sort(
            (a, b) =>
                Math.abs(b.change.pct) - Math.abs(a.change.pct)
        )
        .slice(0, 6);

    return (
        <section className="bg-[#F4F7F4] px-5 py-12">
            <div className="mx-auto max-w-7xl">

                <div className="mb-7 flex items-center gap-3">
                    <span className="text-2xl font-bold text-[#16A34A]">
                        ▼
                    </span>

                    <h2 className="text-3xl font-bold text-[#1D271F]">
                        আজ দাম কমেছে
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {fallingProducts.map((item) => (
                        <ProductCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PriceLowToday;