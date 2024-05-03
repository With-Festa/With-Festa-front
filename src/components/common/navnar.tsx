'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItem = ({ href, text }) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`${pathname === href && 'text-blue-600 font-bold'}`}>
            {text}
        </Link>
    );
};
export default function Navbar() {
    const navItems = [
        { href: '/about', text: '회사소개' },
        { href: '/product', text: '제품소개' },
        { href: '/support', text: '지원' },
    ];

    return (
        <nav className="flex items-center justify-between h-14 px-[10%] bg-white">
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4">
                    {navItems.map((n, idx) => (
                        <NavItem key={idx} href={n.href} text={n.text} />
                    ))}
                </div>
            </div>
        </nav>
    );
}
