import React from 'react';
import Image from 'next/image';

const NavLinks = async () => {
    const res = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/categories',

    );

    const navLinks = await res.json();

    return (
        <div className="flex items-center justify-center gap-7 border-t border-black/10 bg-[#FBFCFA] px-6 py-2.5">
            {navLinks.map((link) => (
                <a
                    key={link.id}
                    href={`/category/${link.slug}`}
                    className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-medium text-[#1d271f] hover:opacity-75"
                >
                    <span className="text-lg">
                        {link.icon}
                    </span>

                    <span>{link.nameBn}</span>
                </a>
            ))}
        </div>
    );
};

export default NavLinks;