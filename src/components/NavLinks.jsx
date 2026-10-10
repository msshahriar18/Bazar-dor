import React from 'react';
import Link from 'next/link';

const NavLinks = async () => {
    let navLinks = [];

    try {
        const res = await fetch(
            'hhttps://openapi.programming-hero.com/api/bazardor/categories',
            { cache: 'no-store' }
        );

        if (res.ok) {
            navLinks = await res.json();
        } else {
            console.warn(`API returned status ${res.status}: Failed to fetch categories`);
        }
    } catch (error) {
        console.error('Network or parsing error while fetching categories:', error);
    }

    // If the API failed, don't crash—just render nothing or a safe fallback
    if (!navLinks || navLinks.length === 0) {
        return null;
    }

    return (
        <div className="flex items-center justify-center gap-7 border-t border-black/10 bg-[#FBFCFA] px-6 py-2.5 overflow-x-auto">
            {navLinks.map((link) => (
                <Link
                    key={link.id || link.slug}
                    href={`/category/${link.slug}`}
                    className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-medium text-[#1d271f] hover:opacity-75"
                >
                    <span className="text-lg">
                        {link.icon}
                    </span>
                    <span>{link.nameBn}</span>
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;