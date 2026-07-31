import React from 'react';

export default function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
    const fullItems = items.length > 0 && items[0].name === 'Home' 
        ? items 
        : [{ name: 'Home', url: 'https://www.richardewing.io/' }, ...items];

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": fullItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
