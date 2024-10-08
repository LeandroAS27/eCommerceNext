'use client';
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type CheckoutButtonProps = {
    totalPrice: number;
};

export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {
    const router = useRouter();
    const { user } = useUser();
    const cartStore = useCartStore();

    const handleCheckout = async () => {
        if(!user){
            cartStore.toggleCart();
            router.push(`/sign-in?redirectUrl='/'`);
            return;
        }
        cartStore.setCheckout('checkout');
    };
    return(
        <div className="flex justify-between flex-row-reverse text-[#5585B5] font-bold">
            <p>Total: {formatPrice(totalPrice)}</p>
            <button 
            onClick={handleCheckout}
            className="font-bold text-sm py-2 px-2 bg-blue-500 rounded-lg hover:bg-blue-700 text-black">
                Finalizar compra
            </button>
        </div>
    )
}