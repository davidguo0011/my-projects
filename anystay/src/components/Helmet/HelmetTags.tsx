import { Helmet } from "react-helmet";

interface HelmetTagsProps {
    title?: string;
    description?: string;
    imgUrl?: string;
    url?: string;
    jsonLd?: any;
}

const HelmetTags: React.FC<HelmetTagsProps> = ({
    title = "Anystay | Short & Long Stays, Holiday Homes, Rooms & More",
    description = "Book the perfect Australian stay at the best prices with Anystay. Find amazing deals on the biggest range of accommodation in Australia.",
    imgUrl = "https://d292awxalydr86.cloudfront.net/General/Stays+in+Australia.jpg",
    url = "https://www.anystay.com.au/",
    jsonLd,
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="twitter:title" content={title} />
            <meta property="og:type" content="website" />

            <meta name="description" content={description} />
            <meta property="twitter:description" content={description} />
            <meta property="og:description" content={description} />

            <meta property="og:url" content={url} />
            <meta property="twitter:url" content={url} />

            <meta property="og:image" content={imgUrl} />
            <meta property="twitter:image" content={imgUrl} />
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default HelmetTags;
