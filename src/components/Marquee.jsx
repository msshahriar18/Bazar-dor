import MarqueeComponent from './MarqueeComponent';

const Marquee = async () => {
    const res = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/products',
    );

    const data = await res.json();

    return <MarqueeComponent data={data} />;
};

export default Marquee;