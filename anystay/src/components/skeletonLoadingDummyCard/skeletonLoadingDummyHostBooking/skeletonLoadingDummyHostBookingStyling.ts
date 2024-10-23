import styled from "styled-components";
import { ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";

export const BookingRequestWrapper = styled.div`
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-top: 16px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-bottom: 0px;
    }
`;

export const BookingRequestTitle = styled.p`
    margin: 0;
    width: 50%;
    margin-left: 16px;
    height: 18px;
    background-color: ${ColorTheme.Grey2.color};
`;

export const BookingRequestSubtitle = styled.p`
    margin-left: 16px;
    margin-top: 4px;
    width: 70%;
    height: 18px;
    background-color: ${ColorTheme.Grey2.color};
`;

export const BookingRequestContentWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 24px;
    justify-content: space-between;
    @media (min-width: 768px) {
        margin-top: 76px;
    }
`;

export const BookingRequestContentTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 16px;

    @media (min-width: 768px) {
        gap: ${SpacingTheme.spacing_200.gap};
    }
`;

export const BookingRequestContentText = styled.p`
    width: 100px;
    height: 22px;
    margin: 0;
    background-color: ${ColorTheme.Grey2.color};
`;

export const BookingRequestRespondButton = styled.div`
    height: 48px;
    border: none;
    background: ${ColorTheme.Grey2.color};
    border-radius: 0px 0px 15px 15px;
    margin-top: 16px;
    width: 100%;
`;

export const BookingRequestGuestProfilePicture = styled.img`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-right: 16px;
    background-color: ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        height: 52px;
        width: 52px;
    }
`;
