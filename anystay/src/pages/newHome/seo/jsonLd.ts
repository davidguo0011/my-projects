export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Anystay",
    "description": "Book the perfect Australian stay at the best prices with Anystay. Find amazing deals on the biggest range of accommodation in Australia.",
    "url": "https://www.anystay.com.au",
    "logo": "https://www.anystay.com.au/logo192.png",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.anystay.com.au/search?location={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    },
    "sameAs": [
        "https://www.instagram.com/anystay.com.au",
        "https://www.facebook.com/anystay.com.au",
        "https://www.tiktok.com/@anystay.com.au"
    ],
    "audience": {
        "@type": "Audience",
        "audienceType": "Travelers"
    },
    "areaServed": {
        "@type": "Country",
        "name": "Australia"
    },
    "offers": [
        {
            "@type": "Offer",
            "description": "Get 5% off your first stay in Australia",
            "priceCurrency": "AUD",
            "availabilityStarts": "2024-09-01",
            "availabilityEnds": "2024-12-31"
        }
    ]
};
