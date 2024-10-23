import { useNavigate } from "react-router-dom";
import { HomeLandingWrapper, HomeLandingImg, HomeLandingContentBtn, HomeLandingContent, HomeLandingContentHeader, HomeLandingContentMainTitle, HomeLandingContentSubtitle } from "../homeStyling";
import { useRecoilState } from "recoil";
import { titleSelector, startDateSelector, endDateSelector, searchFiltersSelector, placeIdSelector, searchQuerySelector } from "../../../state/selectors/searchQuery";

const HomeHeading: React.FC = () => {
    let navigate = useNavigate();
    const [title, setTitle] = useRecoilState(titleSelector);
    const [startDate, setStartDate] = useRecoilState(startDateSelector);
    const [endDate, setEndDate] = useRecoilState(endDateSelector);
    const [placeIdValue, setPlaceId] = useRecoilState(placeIdSelector);
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const [searchQuery, setSearchQuery] = useRecoilState(searchQuerySelector);

    return (
        <HomeLandingWrapper>
            <HomeLandingImg />
            <HomeLandingContent>
                <HomeLandingContentHeader>Australia</HomeLandingContentHeader>
                <HomeLandingContentMainTitle>Made for summer</HomeLandingContentMainTitle>
                <HomeLandingContentSubtitle>Hand picked stays from Brisbane to Kangaroo island.</HomeLandingContentSubtitle>
                <HomeLandingContentBtn
                    type="button"
                    onClick={() => {
                        let placeId = placeIdValue ? placeIdValue : "ChIJ38WHZwf9KysRUhNblaFnglM";
                        let placeTitle = title ? title : "Australia";
                        let arrivalDate = startDate
                            ? `${String((startDate as Date).getDate()).padStart(2, "0")}-${String((startDate as Date).getMonth() + 1).padStart(2, "0")}-${(startDate as Date).getFullYear()}`
                            : "anyArrival";
                        let departureDate = endDate
                            ? `${String((endDate as Date).getDate()).padStart(2, "0")}-${String((endDate as Date).getMonth() + 1).padStart(2, "0")}-${(endDate as Date).getFullYear()}`
                            : "anyDeparture";
                        let urlParams = `search/${placeTitle}/${placeId}/${arrivalDate}/${departureDate}/${JSON.stringify(searchFilters)}/${searchQuery.lat}/${searchQuery.lng}`;
                        navigate(urlParams);
                    }}
                >
                    Nearby stays
                </HomeLandingContentBtn>
            </HomeLandingContent>
        </HomeLandingWrapper>
    );
};

export default HomeHeading;
