import {
    ViewListingVerifyListingBtn,
    ViewListingVerifyListingSubtitle,
    ViewListingVerifyListingTitle,
    ViewListingVerifyListingTitleWrapper,
    ViewListingVerifyListingWrapper,
} from "../viewListingStyling";

export default function ViewListingVerifyListing() {
    return (
        <ViewListingVerifyListingWrapper>
            <ViewListingVerifyListingTitleWrapper>
                <ViewListingVerifyListingTitle>Verified listing</ViewListingVerifyListingTitle>
                <ViewListingVerifyListingSubtitle>We have reviewed this property’s details.</ViewListingVerifyListingSubtitle>
            </ViewListingVerifyListingTitleWrapper>
            <ViewListingVerifyListingBtn href={"https://help.anystay.com.au/en/articles/7007366-verifying-your-identity"} target="_blank">
                Learn&nbsp;more
            </ViewListingVerifyListingBtn>
        </ViewListingVerifyListingWrapper>
    );
}
