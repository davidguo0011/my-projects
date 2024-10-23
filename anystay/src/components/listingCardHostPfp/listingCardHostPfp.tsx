import { ListingCardHostPfpImg, ListingCardHostPfpWrapper } from "./listingCardHostPfpStyling";

interface ListingCardHostPfpProps {
    src: string;
}

const ListingCardHostPfp = ({ src }: ListingCardHostPfpProps) => {
    return (
        <ListingCardHostPfpWrapper>
            <ListingCardHostPfpImg src={src} />
        </ListingCardHostPfpWrapper>
    );
};
export default ListingCardHostPfp;
