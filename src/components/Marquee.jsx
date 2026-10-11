
import React from 'react';
import MarqueeComponent from './MarqueeComponent';

const Marquee = async () => {
    let data = null;

    try {
        const res = await fetch(
            'https://openapi.programming-hero.com/api/bazardor/products',
            {
                cache: 'no-store',
            }
        );

        if (res.ok) {
            data = await res.json();
        } else {
            console.error('Failed to fetch bazar products');
        }
    } catch (error) {
        console.error('Marquee API error:', error);
    }

    if (!data) {
        return null;
    }

    return <MarqueeComponent data={data} />;
};

export default Marquee;
