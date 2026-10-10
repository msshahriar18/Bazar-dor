
import React from 'react';
import MarqueeComponent from './MarqueeComponent';

const Marquee = async () => {
    try {
        const res = await fetch(
            'https://openapi.programming-hero.com/api/bazardor/products',
            {
                cache: 'no-store',
            }
        );

        if (!res.ok) {
            throw new Error('Failed to fetch bazar products');
        }

        const data = await res.json();

        return <MarqueeComponent data={data} />;
    } catch (error) {
        console.error('Marquee API error:', error);

        return null;
    }
};

export default Marquee;