import styled from "styled-components";
import { TextTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const BookingReviewedRatingIcon = styled.div`
    border-radius: 50%;
    background-color: ${ColorTheme.White.color};
    border: 2px solid ${ColorTheme.Black.color};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    font-size: ${TextTheme.sans_400_semi.fontSize};
`;

export const BookingReviewedBtnWrapper = styled.button`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: ${SpacingTheme.spacing_300.padding} 17px;
    width: 567px;
    height: 82px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    margin: ${SpacingTheme.spacing_400.margin} auto;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    background: white;
    border: none;
    cursor: pointer;
    @media (max-width: 767px) {
        width: calc(100% - 48px);
    }
`;

export const BookingReviewedRatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex: 1;
    overflow: hidden;
    margin-left: 20px;
`;

export const BookingReviewedRatingTitle = styled.div`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const BookingReviewedRatingComment = styled.div`
    font-size: ${TextTheme.sans_300.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
`;

export const BookingReviewedRatingArrow = styled.img`
    width: 12px;
    height: 12px;
    transform: rotate(180deg);
    margin-left: auto;
`;
