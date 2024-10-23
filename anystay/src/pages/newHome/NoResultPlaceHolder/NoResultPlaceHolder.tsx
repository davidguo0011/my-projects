import { NoResultWrapper, NoResultIcon, NoResultTitle, NoResultSubtitle, NoResultBtn } from "./NoResultPlaceHolderStyling";
import { searchFiltersSelector } from "../../../state/selectors/searchQuery";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { defaultSearchFilter } from "../../../utils/defaultSearchQuery/defaultSearchQuery";

const NoResultPlaceHolder: React.FC = () => {
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const navigate = useNavigate();

    return (
        <NoResultWrapper>
            <NoResultIcon src="https://d292awxalydr86.cloudfront.net/Home+page/Noresults.svg" alt="no results" />
            <NoResultTitle>Uh oh...</NoResultTitle>
            <NoResultSubtitle>There are no results in your area</NoResultSubtitle>
            <NoResultBtn
                onClick={async () => {
                    setSearchFilters(defaultSearchFilter);
                    navigate("/search");
                }}
            >
                Explore nearby
            </NoResultBtn>
        </NoResultWrapper>
    );
};

export default NoResultPlaceHolder;
