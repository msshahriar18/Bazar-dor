import ProductCard from "./ProductCard";

const PriceHighToday = async () => {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products"
    );

    const data = await res.json();

    const risingProducts = data
        .filter((item) => item.change?.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <section className="bg-[#F4F7F4] px-5 py-12">
            <div className="mx-auto max-w-7xl">

                <div className="mb-7 flex items-center gap-3">
                    <span className="text-2xl text-[#D9363E]">
                        ▲
                    </span>

                    <h2 className="text-3xl font-bold text-[#1D271F]">
                        আজ দাম বেড়েছে
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                    {risingProducts.map((item) => (
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

export default PriceHighToday;