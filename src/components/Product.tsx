import { ProductType } from "@/types/ProductType"

type ProductProps = {
    product: ProductType
}
export default function Product({ product }: ProductProps ){
    return (
        <div className="flex flex-col shadow-lg h-96 bg-[#DEE5D4] p-5">
            <div className="relative max-h-72 flex-1">IMG</div>
            <div className="flex justify-between font-bold my-3">{product.title}</div>
            <div className="flex justify-between font-bold my-2">{product.price}</div>
            <button className="rounded-md bg-[#FEF9D9] px-3.5 py-2.5 text-sm text-center">Adicionar ao carrinho</button>
        </div>
    )
}