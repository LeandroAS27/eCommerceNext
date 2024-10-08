import Product from "@/components/Product";
import { fetchProducts } from "./actions";
import InfiniteScroll from "@/components/InfiniteScroll";

export default async function Home() {
  const {formattedProducts} = await fetchProducts({})
  return (
    <div className="max-w-7xl mx-auto  pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        <InfiniteScroll initialProducts={formattedProducts}/>
      </div>
    </div>
  );
}
