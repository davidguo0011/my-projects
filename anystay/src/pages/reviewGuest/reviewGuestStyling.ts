import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const ReviewGuestContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        min-height: 100vh;
        flex-direction: row;
    }
    @media (max-width: 1200px) {
        padding: 0 24px;
    }
`;

export const ReviewGuestWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 100%;
        margin: 0 auto;
    }
`;

export const ReviewGuestDesktopWrapper = styled.div`
    height: 80px;
    position: absolute;
    right: 0;
    bottom: 126px;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (max-width: 767px) {
        position: fixed;
        left: unset;
        z-index: 100;
        margin-top: auto;
        bottom: 0;
        margin-bottom: 33px;
    }
`;

export const ReviewGuestDesktopButtonWrapper = styled.div`
    height: 80px;
    position: fixed;
    right: 32px;
    bottom: 32px;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (max-width: 767px) {
        left: unset;
        z-index: 100;
        margin-top: auto;
        right: 24px;
        bottom: 24px;
    }
`;

interface ReviewGuestTitleWrapperProps {
    pageIndex: number;
}
export const ReviewGuestTitleWrapper = styled.div<ReviewGuestTitleWrapperProps>`
    padding-top: 120px;
    width: 100%;
    display: flex;
    margin-bottom: ${(props) => (props.pageIndex === 0 ? "48px" : "24px")};

    @media (min-width: 768px) {
        padding: 0;
        padding-top: 144px;
        margin-bottom: 12px !important;
    }
`;

export const ReviewGuestQualityAttributeWrapper = styled.div`
    @media (min-width: 768px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`;

export const ReviewGuestContentWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const ReviewGuestTitle = styled.p`
    font-size: ${TextTheme.sans_900_bold.fontSize};
    line-height: ${TextTheme.sans_900_bold.lineHeight};

    margin: 0;
    font-weight: ${TextTheme.sans_900_bold.fontWeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_bold.fontSize};
        line-height: ${TextTheme.sans_1000_bold.lineHeight};
        margin-left: 16px;
    }
`;

export const ReviewMobileExitButton = styled.button`
    background: none;
    border: none;
    position: absolute;
    right: 24px;
    top: 20px;
    z-index: 100;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ReviewGuestTitleIconButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const ReviewGuestTitleIcon = styled.img`
    height: 18px;
    object-fit: cover;
`;

export const ReviewGuestSubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    font-weight: ${TextTheme.sans_500.fontWeight};
    margin-bottom: 64px;
    @media (max-width: 767px) {
        display: none;
    }
`;

export const ReviewGuestQualityAttributesWrapper = styled.div`
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    margin: 0 auto;
    margin-bottom: 32px;
    cursor: pointer;
`;

export const ReviewGuestQualityAttributeButton = styled.button`
    height: 35px;
    width: 35px;
    border: none;
    border-radius: 50%;
    background: none;
    cursor: pointer;
    padding: 0;
`;

// export const ReviewGuestBodyInput = styled.textarea`
//     width: calc(100% - 48px);
//     min-height: 250px;
//     margin: 0 24px;
//     margin-bottom: 12px;
//     padding: ${SpacingTheme.spacing_300.padding};
//     border: 1px solid ${ColorTheme.Grey1.color};
//     border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
//     font-size: ${TextTheme.sans_300.fontSize};
//     line-height: ${TextTheme.sans_300.lineHeight};
//     font-weight: ${TextTheme.sans_300.fontWeight};
//
//     resize: none;

//     ::placeholder {
//         color: ${ColorTheme.Grey1.color};
//     }

//     @media (min-width: 768px) {
//         margin: 0;
//         margin-bottom: 16px;
//     }
// `;

export const ReviewGuestBodyInput = styled.textarea`
    width: 100%;
    height: 314px;
    margin-bottom: 12px;
    padding: ${SpacingTheme.spacing_300.padding};
    border: 1px solid ${ColorTheme.Grey1.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    resize: none;

    ::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
    @media (min-width: 768px) {
        height: 450px;
        width: 100%;
        margin-bottom: 16px;
    }
`;

export const ReviewGuestBodyInputSubtitle = styled.p`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    margin-left: 24px;
    @media (min-width: 768px) {
        margin: 0;
    }
`;

export const ReviewGuestMobileNavigationWrapper = styled.div`
    position: fixed;
    z-index: 11;
    bottom: 0;
    left: 0;
    background: ${ColorTheme.White.color};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    padding: 0 24px;
    width: 100%;
    padding-bottom: 32px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const ReviewGuestMobileNavigationDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${ColorTheme.Grey2.color};
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
`;

export const ReviewGuestMobileNavigationBackButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};

    text-decoration: underline;
    padding: 0;
    border: none;
    background: none;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-start;
    margin-top: 38px;
`;

export const ReviewStayWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        max-width: 567px;
    }
`;
