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

                {/* Logos */}
                <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
                    {publications.map((pub) => (
                        <a
                            key={pub.name}
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-50 hover:opacity-100 transition-opacity"
                            title={`${pub.relationship} at ${pub.name}`}
                        >
                            <Image
                                src={pub.logo}
                                alt={pub.name}
                                width={pub.width}
                                height={pub.height}
                                className="h-6 md:h-8 w-auto object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
