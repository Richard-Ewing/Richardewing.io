import Image from 'next/image';

const publications = [
    {
        name: 'CIO.com',
        logo: '/logos/cio-logo.svg',
        url: 'https://www.cio.com/author/richard-ewing/',
        relationship: 'Expert Contributor',
        width: 60,
        height: 20
    },
    {
        name: 'Built In',
        logo: '/logos/builtin-logo.svg',
        url: 'https://builtin.com/authors/richard-ewing',
        relationship: 'Expert Contributor',
        width: 80,
        height: 20
    },
    {
        name: 'Mind the Product',
        logo: '/logos/mindtheproduct-logo.svg',
        url: 'https://www.mindtheproduct.com/author/richard-ewing/',
        relationship: 'Contributor',
        width: 50,
        height: 20
    },
    {
        name: 'HackerNoon',
        logo: '/logos/hackernoon-logo.svg',
        url: 'https://hackernoon.com/u/richardewing',
        relationship: 'Published',
        width: 100,
        height: 20
    }
];

export const AsSeenIn = () => {
    return (
        <div className="py-8 border-y border-zinc-400 my-8">
            <div className="text-center">
                {/* Label */}
                <p className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest mb-6 font-mono">
                    As Seen In
                </p>

                {/* Infinite Scrolling Logos */}
                <div className="relative w-full overflow-hidden py-4">
                    {/* Shadow gradients on the edges for a premium fade effect */}
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F5F0EB] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F5F0EB] to-transparent z-10 pointer-events-none" />
                    
                    <div className="animate-marquee flex gap-12 md:gap-20 items-center whitespace-nowrap">
                        {/* Set 1 */}
                        {publications.map((pub) => (
                            <a
                                key={`${pub.name}-1`}
                                href={pub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-50 hover:opacity-100 transition-opacity inline-block shrink-0 px-4"
                                title={`${pub.relationship} at ${pub.name}`}
                            >
                                <Image
                                    src={pub.logo}
                                    alt={pub.name}
                                    width={pub.width}
                                    height={pub.height}
                                    className="h-6 md:h-8 w-auto object-contain select-none"
                                />
                            </a>
                        ))}
                        {/* Set 2 (for seamless loop) */}
                        {publications.map((pub) => (
                            <a
                                key={`${pub.name}-2`}
                                href={pub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-50 hover:opacity-100 transition-opacity inline-block shrink-0 px-4"
                                title={`${pub.relationship} at ${pub.name}`}
                            >
                                <Image
                                    src={pub.logo}
                                    alt={pub.name}
                                    width={pub.width}
                                    height={pub.height}
                                    className="h-6 md:h-8 w-auto object-contain select-none"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
