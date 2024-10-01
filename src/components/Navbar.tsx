import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

function Navbar() {
    return (
        <nav className="fixed top-0 w-full px-8 py-2 flex items-center justify-between z-50 bg-[#8EACCD] text-gray-800">
            <Link href='/' className="uppercase font-bold text-md h-12 flex items-center">
            eCommerce Next
            </Link>
            <div className="flex items-center gap-8 py-2 px-2 bg-green-700 rounded-lg text-white hover:bg-green-800">
                <SignedIn> <UserButton>Usuario logado</UserButton></SignedIn>
                <SignedOut><SignInButton mode="modal">Fazer login</SignInButton></SignedOut>
            </div>
        </nav>
    )
}

export default Navbar