import React from "react";
import ProductCard from "./ProductCard";

const AllProducts = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );

    const data = await res.json();

    return (
        <section id="সব-পণ্য" className="bg-[#F4F7F4] px-5 py-12">
            <div className="mx-auto max-w-7xl">

                <div className="mb-2 flex items-center gap-3">
                    <h2 className="text-3xl font-bold text-[#1D271F]">
                        সব পণ্য
                    </h2>
                </div>

                <p className="mb-8 text-base text-[#667168]">
                    নিত্যপ্রয়োজনীয় সব পণ্যের আজকের বাজারদর এক নজরে দেখুন।
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                    {data.map((item) => (
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

export default AllProducts;
