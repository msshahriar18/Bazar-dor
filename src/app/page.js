import AllProducts from "@/components/AllProducts";
import Hero from "@/components/Hero";
import PriceHighToday from "@/components/PriceHighToday";
import PriceLowToday from "@/components/PriceLowToday";

export default function Home() {
  return (
    <div >
      <Hero />
      <PriceHighToday />
      <PriceLowToday />
      <AllProducts />
    </div>
  );
}
