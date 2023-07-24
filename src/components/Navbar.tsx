import React from 'react';
import Menu from "@/components/Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "@/components/CartIcon";

const Navbar = () => {
    const user = false;
    return (
        <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">

            <div className="hidden md:flex">
                <Link href="/">Home</Link>
                <Link href="/">Menu</Link>
                <Link href="/">Working Hours</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Login</Link>
            </div>

            {/* Logo   */}
            <div className="text-xl">
                <Link href="/">Chef-Food</Link>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
                <Menu/>
            </div>
            {/*  Right Links   */}
            <div className="hidden md:flex gap-4">
                <div>
                    <Image src="/phone.png" alt="" height="8" width="8"/>
                    <span>01911 873 186</span>
                </div>

                {!user ? <Link href="/login">Login</Link> :
                    <Link href="/orders">Orders</Link>}
                <CartIcon/>
            </div>
        </div>
    );
};

export default Navbar;
