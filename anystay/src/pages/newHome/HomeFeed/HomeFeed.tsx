import { HomeFeedWrapper } from "../homeStyling";
import HomeFeedListingItem from "./HomeFeedListingItem/HomeFeedListingItem";

import { SearchListingModel } from "../../../interfaces/models/listingModel";

interface HomeFeedProps {
    listings: SearchListingModel[];
    cache: boolean;
    clickedListingEvent: any;
}

const HomeFeed: React.FC<HomeFeedProps> = ({ listings, cache, clickedListingEvent }) => {
    return (
        <HomeFeedWrapper>
            {listings &&
                listings.map((listing, index) => {
                    // the delay is random in strict mode(cause of rendering twice so the listings order is different), but it's fine in staging and production
                    return <HomeFeedListingItem clickedListingEvent={clickedListingEvent} listing={listing} key={listing.id} delay={index * 0.05} cache={cache} />;
                })}
        </HomeFeedWrapper>
    );
};

export default HomeFeed;
