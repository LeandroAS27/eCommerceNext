'use client'
import { formatPrice } from "@/lib/utils"
import { useCartStore } from "@/store"
import Image from "next/image"
import CheckoutButton from "./CheckoutButton"
import Checkout from "./Checkout"

export default function CartDrawer() {
    const useStore = useCartStore();

    const totalPrice = useStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!;
    }, 0);

    return (
        <div 
            onClick={() => useStore.toggleCart()}
            className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50">
            <div 
                onClick={(e) => e.stopPropagation()}
                className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll">
                <button 
                onClick={() => useStore.toggleCart()} 
                className="font-bold text-sm py-2 px-2 bg-blue-500 rounded-lg hover:bg-blue-700">
                    Voltar para a loja
                </button>
                <div className="border-t border-gray-400 my-4"></div>

                {useStore.onCheckout === 'cart' && (
                <>
                    {
                    useStore.cart.map((item) => (
                    <div key={item.id}
                    className="flex  gap-4 py-4 font-bold text-black">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={120}
                            height={120}
                            className='object-cover w-24'/>
                        <div>
                            <h2 className="w-42 truncate">{item.name}</h2>
                            <h2>Quantidade: {item.quantity}</h2>
                            <p className="text-[#5585B5] text-sm">{formatPrice(item.price)}</p>
                            <button className="py-1 px-2 border rounded-md mt-2 text-sm mr-1" onClick={() => useStore.addProduct(item)}>
                                Adicionar
                            </button>
                            <button className="py-1 px-2 border rounded-md mt-2 text-sm" onClick={() => useStore.removeProduct(item)}>
                                Remover
                            </button>
                        </div>
                    </div>
                    ))
                    }
                </>
                )}
                {
                    useStore.cart.length > 0 && useStore.onCheckout === 'cart' &&(
                        <CheckoutButton totalPrice={totalPrice}/>
                    )
                }
                {useStore.onCheckout === 'checkout' && <Checkout/>}
            </div>
        </div>
    )
}