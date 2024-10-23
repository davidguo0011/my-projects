import styled from "styled-components";
import { ColorTheme, TextTheme, BorderRadiusTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const EditListingCheckInInstruction = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: ${SpacingTheme.spacing_700.padding} ${SpacingTheme.spacing_400.padding} 0;

    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_1000.padding} ${SpacingTheme.spacing_800.padding} 0;
    }
`;

export const EditListingCheckInInstructionTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const EditListingCheckInInstructionTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    color: ${ColorTheme.Black.color};
    margin: 0;
    text-align: left;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    }
`;

export const EditListingCheckInInstructionSubtitleAndImgWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-bottom: 16px;
    :first-of-type {
        margin-top: 32px;
        @media (min-width: 768) {
            margin-top: 48px;
        }
    }

    @media (min-width: 768px) {
        margin-bottom: 80px;
        flex-direction: row;
        gap: ${SpacingTheme.spacing_800.gap};
    }
`;

export const EditListingCheckInInstructionSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    text-align: left;
    word-break: break-all;
    width: 100%;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500.fontSize};
        font-weight: ${TextTheme.sans_500.fontWeight};
        line-height: ${TextTheme.sans_500.lineHeight};
        width: calc(100% - 80px - 480px);
    }
`;

interface EditListingCheckInInstructionImgWrapperProps {
    hasImg?: boolean;
}
export const EditListingCheckInInstructionImgWrapper = styled.div<EditListingCheckInInstructionImgWrapperProps>`
    margin: 0;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    width: 100%;
    aspect-ratio: 1 / 1;
    @media (min-width: 480px) {
        width: 480px;
        height: ${(props) => (props.hasImg ? "480px" : "240px")};
    }
`;
export const EditListingCheckInInstructionImg = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    height: 100%;
    object-fit: cover;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
`;
