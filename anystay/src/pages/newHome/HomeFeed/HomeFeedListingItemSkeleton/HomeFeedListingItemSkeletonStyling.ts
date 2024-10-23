import styled from "styled-components";
import { ColorTheme, BorderRadiusTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
export const HomeFeedListingItemSkeletonWrapper = styled.div`
    width: 100%;
    height: 100%;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

interface HomeFeedListingItemSkeletonImageProps {
    aspectRatio: number;
}

export const HomeFeedListingItemSkeletonImage = styled.div<HomeFeedListingItemSkeletonImageProps>`
    min-width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    margin-bottom: 8px;
    background-color: ${ColorTheme.Grey2.color};
    aspect-ratio: ${(props) => (props.aspectRatio > 1.33 ? 1.33 : `${props.aspectRatio}`)};
    height: 100%;

    @media (min-width: 768px) {
        width: 100%;
        height: 180px;
        /* max-width: 484px; //max aspect ratio 2/1 */
        min-width: 180px; // min aspect ratio 1/1
        margin-bottom: 12px;
    }
`;

export const HomeFeedListingItemSkeletonTitle = styled.div`
    background-color: ${ColorTheme.Grey2.color};
    width: 60%;
    height: 17px;
    margin-bottom: 4px;
`;
export const HomeFeedListingItemSkeletonSubtitle = styled.div`
    background-color: ${ColorTheme.Grey2.color};
    width: 40%;
    height: 17px;
    margin-bottom: 4px;
`;
export const HomeFeedListingItemSkeletonDate = styled.div`
    background-color: ${ColorTheme.Grey2.color};
    width: 50%;
    height: 17px;
    margin-bottom: 4px;
`;
export const HomeFeedListingItemSkeletonPrice = styled.div`
    background-color: ${ColorTheme.Grey2.color};
    width: 30%;
    height: 17px;
`;
