import Link from "next/link"

function Navbar() {
    return (
        <nav className="fixed top-0 w-full px-8 py-2 flex items-center justify-between z-50 bg-[#8EACCD] text-gray-300">
            <Link href='/' className="uppercase font-bold text-md h-12 flex items-center">
            eCommerce Next
            </Link>
        </nav>
    )
}

export default Navbar