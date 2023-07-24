"use client"
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {it} from "node:test";
import CartIcon from "@/components/CartIcon";

const links = [
    {id: 1, title: "Home", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working Hours", url: "/"},
    {id: 4, title: "Contact", url: "/"}
];
const Menu = () => {

    const [open, setOpen] = useState(false);
    // Temporary User
    const user = false;

    return (
        <div>
            {!open ? <Image src="/open.png" alt="mobile menu" height="20" width={20} onClick={() => setOpen(true)}/> :
                <Image src="/close.png" alt="mobile menu" height="20" width={20} onClick={() => setOpen(false)}/>}

            {open &&
                <div
                    className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
                    {
                        links.map(item => (
                            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>

                        ))
                    }
                    {!user ? <Link href="/login" onClick={() => setOpen(false)}>Login</Link> :
                        <Link href="/order" onClick={() => setOpen(false)}>Order</Link>}
                    <Link href="cart"  onClick={() => setOpen(false)}>
                        <CartIcon/>
                    </Link>
                </div>}
        </div>
    );
};

export default Menu;
