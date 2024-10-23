import {
    MobileHomeFeedWrapper,
    MobileHomeFeedColumn,
    MobileTopSignUpWrapper,
    MobileTopSignUpTitleWrapper,
    MobileTopSignUpTitle,
    MobileTopSignUpSubtitle,
    MobileTopSignUpBtn,
    MobileHomeFeedRow,
} from "../homeStyling";
import HomeFeedListingItem from "./HomeFeedListingItem/HomeFeedListingItem";
import { useEffect, useState, useCallback } from "react";

import { ListingImageObject } from "../../../interfaces/models/listingModel";
import { SearchListingModel } from "../../../interfaces/models/listingModel";
import { useRecoilState } from "recoil";
import { signInMenuActivatedSelector } from "../../../state/selectors/navbarToggle";

interface MobileHomeFeedProps {
    listings: SearchListingModel[];
    cache: boolean;
    clickedListingEvent: any;
    loggedIn: boolean;
}

const MobileHomeFeed: React.FC<MobileHomeFeedProps> = ({ listings, cache, clickedListingEvent, loggedIn }) => {
    const [columns, setColumns] = useState<SearchListingModel[][]>([[], []]);
    const [signInMenuActivated, setSignInMenuActivated] = useRecoilState(signInMenuActivatedSelector);

    const updateColumns = useCallback((listings: SearchListingModel[]) => {
        const newColumns = [[], []] as SearchListingModel[][];
        const columnHeights = [0, 0];

        if (listings) {
            listings.forEach((listing: SearchListingModel) => {
                const minHeightColumn = columnHeights[0] <= columnHeights[1] ? 0 : 1;
                newColumns[minHeightColumn].push(listing);
                if (!(listing.listingImages[0] as ListingImageObject).height && !(listing.listingImages[0] as ListingImageObject).width) {
                    columnHeights[minHeightColumn] += 300 / 400;
                } else {
                    columnHeights[minHeightColumn] += (listing.listingImages[0] as ListingImageObject).height / (listing.listingImages[0] as ListingImageObject).width;
                }
            });
        }
        setColumns(newColumns);
    }, []);

    useEffect(() => {
        updateColumns(listings);
    }, [listings, updateColumns]);

    return (
        <MobileHomeFeedWrapper>
            {!loggedIn && (
                <MobileTopSignUpWrapper>
                    <MobileTopSignUpTitleWrapper>
                        <MobileTopSignUpTitle>Sign up for 10% off</MobileTopSignUpTitle>
                        <MobileTopSignUpSubtitle>Unlock exclusive member rates</MobileTopSignUpSubtitle>
                    </MobileTopSignUpTitleWrapper>
                    <MobileTopSignUpBtn onClick={() => setSignInMenuActivated(true)}>Sign up</MobileTopSignUpBtn>
                </MobileTopSignUpWrapper>
            )}
            <MobileHomeFeedRow>
                <MobileHomeFeedColumn>
                    {columns[0].map((listing, index) => {
                        return <HomeFeedListingItem clickedListingEvent={clickedListingEvent} listing={listing} key={listing.id} delay={index * 0.05} cache={cache} />;
                    })}
                </MobileHomeFeedColumn>
                <MobileHomeFeedColumn>
                    {columns[1].map((listing, index) => {
                        return <HomeFeedListingItem clickedListingEvent={clickedListingEvent} listing={listing} key={listing.id} delay={index * 0.05} cache={cache} />;
                    })}
                </MobileHomeFeedColumn>
            </MobileHomeFeedRow>
        </MobileHomeFeedWrapper>
    );
};

export default MobileHomeFeed;
