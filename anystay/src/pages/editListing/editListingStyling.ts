import styled from "styled-components";
import Autocomplete from "react-google-autocomplete";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { TextTheme, ButtonTheme, ColorTheme, TallTextTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

interface NewListingBackButtonProps {
    subPageIndex: number;
}

export const EditListingDesktopContainer = styled.div`
    width: 100%;
    max-width: 1600px;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: 0 auto;
        margin-top: 128px;
    }
    @media (min-width: 1024px) {
        width: calc(100% - 160px);
    }
`;

export const EditListingContainer = styled.div`
    width: 100%;
    padding-bottom: 80px;
`;

export const EditListingDesktopTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 0;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const EditListingDesktopSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
    width: 100%;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const EditListingInternalWrapper = styled.div`
    margin-left: 24px;
    display: flex;
    align-items: center;
    width: fit-content;
    margin-top: 8px;
    @media (min-width: 768px) {
        margin-left: 0px;
    }
`;
export const EditListingInternalEditImage = styled.img`
    width: 14px;
    height: 14px;
    margin-left: 9px;
    cursor: pointer;
`;

export const EditListingInternalInput = styled.input`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    border: none;
    border-bottom: 1px solid ${ColorTheme.Grey.color};
    outline: none;
    width: 100%;
`;

export const EditListingDesktopTitle = styled.div`
    font-size: ${TextTheme.sans_900_bold.fontSize};
    font-weight: ${TextTheme.sans_900_bold.fontWeight};
    line-height: ${TextTheme.sans_900_bold.lineHeight};
    display: flex;
    align-items: center;
    margin: 0;
    margin-right: auto;
    padding-right: 24px;
    width: 65%;
    position: relative;
    @media (min-width: 1024px) {
        width: 70%;
    }
    @media (min-width: 1200px) {
        width: 75%;
    }
`;

export const EditListingDesktopActiveButton = styled.button`
    display: flex;
    align-items: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    height: fit-content;
    gap: ${SpacingTheme.spacing_250.gap};
    border: none;
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    background-color: transparent;
    border-radius: 9px;
    height: 48px;
    justify-content: center;
    padding: 0 24px;
    margin-right: 12px;
    margin-top: -12px;
    cursor: pointer;
    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

interface EditListingDesktopActiveIndicatorProps {
    selected: boolean;
}
export const EditListingDesktopActiveIndicator = styled.div<EditListingDesktopActiveIndicatorProps>`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: ${(props) => (props.selected ? ColorTheme.Green.color : ColorTheme.Red1.color)};
`;

export const EditListingDesktopPreviewButton = styled.button`
    padding: 0 32px;
    height: 48px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    border: none;
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    background: none;
    border: 1px solid ${ColorTheme.Black.color};
    margin-top: -12px;
    cursor: pointer;
`;

export const EditListingTitleWrapper = styled.div`
    width: calc(100% - 48px);
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};
    margin: 0 24px;
    padding-top: 64px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const EditListingTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
        margin-left: 24px;
    }
`;

export const EditListingHeaderImageWrapper = styled.div`
    height: 100px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    overflow: hidden;
`;

export const EditListingHeaderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const EditListingsContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
`;

export const EditListingsContentMenuWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        width: 100%;
    }
`;

export const EditListingsContentMenu = styled.div`
    width: calc(100% + 48px);
    margin-left: -24px;
    padding: 0 24px;
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    gap: ${SpacingTheme.spacing_400.gap};
    padding-top: 48px;

    &::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        width: 100%;
        margin-left: 0;
        padding-left: 0;
        padding-right: 0;
    }
`;

interface EditListingsContentMenuItemProps {
    selected: boolean;
}
export const EditListingsContentMenuItem = styled.p<EditListingsContentMenuItemProps>`
    margin: 0;
    padding-bottom: 16px;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    min-width: fit-content;
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    color: ${(props) => (props.selected ? ColorTheme.Black.color : ColorTheme.Grey.color)};
    border-bottom: ${(props) => (props.selected ? `2px solid ${ColorTheme.Black.color}` : "none")};
    cursor: pointer;
`;

export const EditListingExperienceSubPageWrapper = styled.div`
    width: calc(100% - 48px);
    height: 100%;
    margin: ${SpacingTheme.spacing_600.margin} ${SpacingTheme.spacing_400.margin} 0;
    display: flex;
    flex-direction: row;
    gap: ${SpacingTheme.spacing_400.gap};
    flex-wrap: wrap;

    @media (min-width: 768px) {
        width: 100%;
        margin: ${SpacingTheme.spacing_600.margin} 0 0;
    }
`;

export const EditListingListingDetailsSubPageWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    display: flex;
    flex-direction: column;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

export const EditListingListingDetailsImagesSectionTitleWrapper = styled.div`
    width: 100%;
    margin-top: 32px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        margin-top: 0px;
        margin-bottom: 24px;
    }
`;

export const EditListingListingDetailsSectionTitleWrapper = styled.div`
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

export const EditListingListingDetailsSectionTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    margin: 0;
`;

export const EditListingListingDetailsSectionEditButton = styled.button`
    background: none;
    border: none;
    text-decoration: underline;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    cursor: pointer;
    padding: 0;
`;

export const EditListingImagesSectionWrapper = styled.div`
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;

export const EditListingImagesWrapper = styled.div`
    margin-left: -24px;
    height: 128px;
    overflow-x: scroll;
    display: flex;
    margin: ${SpacingTheme.spacing_300.margin} 0;
    flex-direction: row;
    gap: ${SpacingTheme.spacing_200.gap};
    margin-bottom: 12px;

    //scroll images left and right overflow
    width: calc(100% + 48px);
    padding: 0 24px;
    margin-left: -24px;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: 100%;
        height: 160px;
        margin-bottom: 24px;
        padding: 0;
        margin-left: 0;
    }
`;

export const EditListingImageWrapper = styled.div`
    height: 100%;
    min-width: 192px;
    /* max-height: 200px; */
    width: 100%;
    border-radius: 9px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    aspect-ratio: 3/2;
    cursor: pointer;

    @media (min-width: 768px) {
        min-width: 240px;
    }
`;

export const EditListingImage = styled.img`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 160px;
    }
`;

/* rooms and spaces photo card */
export const EditListingRoomCardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${SpacingTheme.spacing_400.gap};
    margin-bottom: 12px;
    //scroll images left and right overflow
    overflow-x: scroll;
    padding-top: 10px;
    margin-top: -10px;

    width: calc(100% + 48px);
    padding-left: 24px;
    padding-right: 24px;
    margin-left: -24px;

    &::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        padding-right: 10px;
        padding-left: 5px;
        margin-left: -5px;
        width: calc(100% + 10px);
        margin-bottom: 24px;
    }
`;
export const EditListingRoomCard = styled.div`
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_300.gap};
    cursor: pointer;
    @media (min-width: 768px) {
        width: 180px;
    }
`;
export const EditListingRoomImgWrapper = styled.div`
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 128px;
    box-sizing: border-box;
    border: 2px solid ${ColorTheme.White.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};

    @media (min-width: 768px) {
        width: 180px;
        height: 180px;
        border: 4px solid ${ColorTheme.White.color};
        border-radius: 14px;
    }
`;
export const EditListingRoomImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    @media (min-width: 768px) {
        border-radius: 14px;
    }
`;
export const EditListingRoomIcon = styled.img`
    width: 24px;
    height: 24px;
`;
export const EditListingRoomTitle = styled.p`
    width: 100%;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

/************************/

export const EditListingDeleteIcon = styled.img`
    height: 16px;
    width: 16px;
`;

export const EditListingImageFiller = styled.img`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const EditListingImageRemoveButton = styled.button`
    height: 32px;
    width: 32px;
    z-index: 2;
    background: none;
    border: none;
    margin: ${SpacingTheme.spacing_300.margin};
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    cursor: pointer;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const EditListingImageCover = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-start;
    height: 32px;
    background: ${ColorTheme.White.color};
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    z-index: 2;
    padding: 0 16px;
    margin: ${SpacingTheme.spacing_300.margin};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const EditListingBasicsQuestionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const EditListingBasicsQuestionTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    margin-top: 20px;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        margin-top: 36px;
        margin-bottom: 20px;
    }
`;

export const EditListingMarginWrapper = styled.div`
    margin-top: 24px;
`;

export const EditListingBasicsQuestionHoverWrapper = styled.div`
    width: calc(100% + 24px);
    margin-left: -12px;
    border-radius: 10px;
    padding: ${SpacingTheme.spacing_250.padding};
    &:hover {
        background-color: ${ColorTheme.Grey5.color};
    }
`;

export const EditListingBasicsQuestionTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    cursor: pointer;
`;

export const EditListingBasicsQuestionTitleText = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    margin: 0;
    margin-bottom: 16px;
`;

export const EditListingBasicsQuestionEditButton = styled.button`
    background: none;
    border: none;
    text-decoration: underline;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    cursor: pointer;
    padding: 0;
`;

export const EditListingBasicsQuestionText = styled.p`
    cursor: pointer;
    width: 100%;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

interface EditListingVerifyListingButtonProps {
    selected: boolean;
}
export const EditListingVerifyListingButton = styled.button<EditListingVerifyListingButtonProps>`
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/2;
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${(props) => (props.selected ? ColorTheme.Blue.color : ColorTheme.Yellow.color)};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-top: 24px;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

interface EditListingContentProps {
    selected: number;
}
export const EditListingContent = styled.div<EditListingContentProps>`
    width: 100%;

    /* Fixed height needs to go */
    /* height: ${(props) => (props.selected === 0 ? "1328px" : props.selected === 1 ? "816px" : props.selected === 2 ? "871px" : "964px")};

    @media (min-width: 768px) {
        height: ${(props) => (props.selected === 0 ? "fit-content" : props.selected === 1 ? "916px" : props.selected === 2 ? "1090px" : "1300px")};
    } */
`;

export const EditListingPricingDetailsSubPageWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

export const EditListingUpdateCardTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;

    @media (min-width: 768px) {
        min-height: unset;
        height: unset;
    }
`;

export const EditListingUpdateCardTitle = styled.p`
    position: relative;
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    padding-right: 16px;
    margin: 0 auto;
`;

export const EditListingUpdateCardTitleIcon = styled.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
    cursor: pointer;
`;

export const EditListingUpdateCardContentTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    margin-bottom: 12px;
    text-align: left;
`;

export const EditListingUpdateCardContentTitleDeposit = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    margin-top: 8px;
    margin-bottom: 16px;
    margin-right: auto;
    text-align: center;
`;

interface EditListingUpdateCardContentSubtitleProps {
    invalid: boolean;
}
export const EditListingUpdateCardContentSubtitle = styled.p<EditListingUpdateCardContentSubtitleProps>`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${(props) => (props.invalid ? ColorTheme.Red1.color : ColorTheme.Grey.color)};
    margin: 0 0 32px;
    text-align: left;
    max-width: 480px;

    strong {
        font-weight: ${TextTheme.sans_200_semi.fontWeight};
    }
`;

export const EditListingUpdateCardContentSubtitleDeposit = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin-top: 0;
    margin-bottom: 32px;
    text-align: left;
    max-width: calc(100% - 48px);

    strong {
        font-weight: ${TextTheme.sans_300_semi.fontWeight} !important;
    }

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
        max-width: calc(100% - 88px);
    }
`;

export const EditListingUpdateCardContentInputText = styled.input`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    padding-left: 16px;
    outline: none;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
`;

export const EditListingUpdateCardInvaidMsg = styled.div`
    width: 100%;
    margin-bottom: 96px;
    color: ${ColorTheme.Red1.color};
    font-size: 12px;
    text-align: left;
    margin-top: 8px;
`;

export const EditListingUpdateCardContentInputCount = styled.p`
    text-align: left;
    margin-left: auto;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin-top: 12px;
    margin-bottom: 64px;

    @media (min-width: 768px) {
        margin-right: 0px;
    }
`;

export const EditListingUpdateCardContentInputPrice = styled.input`
    min-height: 128px;
    width: 100%;
    border: none;
    text-align: center;
    outline: none;
    font-size: ${TextTheme.sans_1200_semi.fontSize};
    font-weight: ${TextTheme.sans_1200_semi.fontWeight};
    line-height: ${TextTheme.sans_1200_semi.lineHeight};

    @media (min-width: 768px) {
    }
`;

interface EditListingUpdateCardContentInputTextareaProps {
    height?: string;
    margin?: string;
}
export const EditListingUpdateCardContentInputTextarea = styled.textarea<EditListingUpdateCardContentInputTextareaProps>`
    height: ${(props) => (props.height ? props.height : "240px")};
    width: 100%;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey2.color};
    padding: ${SpacingTheme.spacing_300.padding};
    outline: none;
    font-size: ${TallTextTheme.sans_text_300.fontSize};
    font-weight: ${TallTextTheme.sans_text_300.fontWeight};
    line-height: ${TallTextTheme.sans_text_300.lineHeight};
    resize: none;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}

    @media (min-width: 768px) {
        width: 100%;
    }
`;

export const EditListingUpdateCardContentInputCheckbox = styled(Checkbox)`
    height: 16px;
    width: 16px;
    border-radius: 3px;
    border: 1px solid ${ColorTheme.Grey.color};

    @media (min-width: 768px) {
        height: 22px;
        width: 22px;
        border-radius: ${BorderRadiusTheme.radius_4.borderRadius};
    }
`;

export const EditListingUpdateCardContentInputCheckboxWrapper = styled(FormGroup)`
    position: relative;
    align-self: center;
    height: 140px;
    width: calc(100% - 48px);
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: calc(100% - 96px);
    }
`;

export const EditListingUpdateCardContentInputLabel = styled(FormControlLabel)`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    padding-bottom: 8px;

    & span {
        padding-left: 12px;
        @media (min-width: 768px) {
            padding-left: 18px;
        }
    }

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const EditListingUpdateCardButtonWrapper = styled.div`
    background: ${ColorTheme.White.color};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    margin-top: auto;

    @media (min-width: 768px) {
        border: none;
    }
`;

export const EditListingUpdateCardCancelButton = styled.button`
    background: none;
    border: none;
    text-decoration: underline;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    cursor: pointer;
    padding: 0;
`;
export const EditListingUpdateAddressForm = styled.div`
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${ColorTheme.Grey1.color};
    margin-bottom: 12px;
`;
export const EditListingUpdateAddressItem = styled.div`
    padding: 9px 16px;
    border-bottom: 1px solid ${ColorTheme.Grey1.color};
    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:last-child {
        border: none;
    }
`;
export const EditListingUpdateAddressItemTitle = styled.div`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin-bottom: 2px;
`;
export const EditListingUpdateAddressItemInput = styled.input`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${ColorTheme.Black.color};
    outline: none;
    border: none;
`;

interface EditListingUpdateAddressMsgProps {
    success: boolean | null;
}
export const EditListingUpdateAddressMsg = styled.p<EditListingUpdateAddressMsgProps>`
    font-size: ${TextTheme.sans_300_med.fontSize};
    font-weight: ${TextTheme.sans_300_med.fontWeight};
    line-height: ${TextTheme.sans_300_med.lineHeight};
    margin-bottom: 66px;
    text-align: left;
    color: ${(props) => {
        if (props.success === true) return ColorTheme.Green.color;
        if (props.success === false) return ColorTheme.Red2.color;
        return `transparent`;
    }};
    margin-right: auto;
    height: 18px;
`;

export const EditListingUpdateCardSubmitButton = styled.button`
    background: none;
    border: none;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    color: ${ColorTheme.White.color};
    background: ${ColorTheme.Blue.color};
    height: 48px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 32px;

    @media (min-width: 768px) {
        font-size: ${ButtonTheme.sans_button_200.fontSize};
        line-height: ${ButtonTheme.sans_button_200.lineHeight};
        padding: 0 32px;
    }
`;

export const EditListingUpdateCardConnectButton = styled(Link)`
    background: none;
    border: none;
    font-size: ${TextTheme.sans_300_bold.fontSize};
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
    color: ${ColorTheme.White.color};
    line-height: ${TextTheme.sans_300_bold.lineHeight};
    background: ${ColorTheme.Blue.color};
    height: 50px;
    width: 160px;
    border-radius: 9px;
    text-decoration: none;
    margin: ${SpacingTheme.spacing_400.margin} 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;

    @media (min-width: 768px) {
        max-width: 104px;
    }
`;

export const EditListingUpdateCardSelectWrapperContainer = styled.div`
    margin-top: 24px;
    width: 100%;
`;

export const EditListingUpdateCardSelectWrapper = styled.div`
    width: 100%;
    max-height: 150px;

    .select-add-room__menu {
        z-index: 11;
    }
`;

export const EditListingUpdateCardSelectSubtitle = styled.p`
    width: 100%;
    text-align: left;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin-top: 12px;
    margin-bottom: 0;
`;

export const EditListingUpdateCardSelectSubtitleWithMargin = styled.p`
    width: 100%;
    text-align: left;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin-top: 12px;
    margin-bottom: 64px;
`;

export const EditListingUpdateCardAmenitiesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: ${SpacingTheme.spacing_300.gap};
    justify-content: start;
    margin-top: 16px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        gap: ${SpacingTheme.spacing_400.gap};
    }
`;

interface EditListingUpdateCardAmenitieWrapperProps {
    selected: boolean;
}
export const EditListingUpdateCardAmenitieWrapper = styled.button<EditListingUpdateCardAmenitieWrapperProps>`
    background: none;
    margin: 0;
    padding: 0;
    border: ${(props) => (props.selected ? `1px solid ${ColorTheme.Black.color}` : `1px solid ${ColorTheme.Grey1.color}`)};
    outline: ${(props) => (props.selected ? `1px solid ${ColorTheme.Black.color}` : null)};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    width: calc(50% - 9px);
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 133px;
        width: calc(50% - 13px);
    }
`;

export const EditListingUpdateCardAmenitieTitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const EditListingUpdateRuleTitleDotIndicator = styled.span`
    height: 12px;
    width: 12px;
    margin-right: 12px;
    border-radius: 50%;
    background: ${ColorTheme.Green.color};
    content: "";
`;

export const EditListingUpdateCardAmenitieImage = styled.img`
    height: 24px;
    width: 24px;
    margin-top: 24px;
    margin-bottom: 8px;

    @media (min-width: 768px) {
        height: 32px;
        width: 32px;
        margin-top: 32px;
        margin-bottom: 12px;
    }
`;

export const EditListingAutocompleteInputWrapper = styled.div`
    width: 100%;
    outline: none;
    position: relative;
`;

export const AutocompleteClearButton = styled.button`
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${ColorTheme.Grey3.color};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 16px;
`;

export const AutocompleteClearButtonIcon = styled.img`
    height: 10px;
    width: 10px;
`;

export const EditListingAutocompleteInput = styled(Autocomplete)`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: ${TextTheme.sans_400_med.fontSize};
    font-weight: ${TextTheme.sans_400_med.fontWeight};
    line-height: ${TextTheme.sans_400_med.lineHeight};
    border: none;
    outline: none;
    width: 100%;
    padding-right: 50px;

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const EditListingUploadWrapper = styled.div`
    width: 100%;
`;

interface EditListingUpdateRuleButtonProps {
    selected: boolean;
}
export const EditListingUpdateRuleButton = styled.button<EditListingUpdateRuleButtonProps>`
    background: none;
    border: ${(props) => (props.selected ? `1px solid ${ColorTheme.Black.color}` : `1px solid ${ColorTheme.Grey1.color}`)};
    outline: ${(props) => (props.selected ? `1px solid ${ColorTheme.Black.color}` : null)};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    width: 98%;
    margin-left: 2px;
    padding: ${SpacingTheme.spacing_400.padding};
    margin-bottom: 16px;
    cursor: pointer;
`;

interface EditListingUpdateRuleButtonRedProps {
    selected: boolean;
}
export const EditListingUpdateRuleButtonRed = styled.button<EditListingUpdateRuleButtonRedProps>`
    background: none;
    border: ${(props) => (props.selected ? `1px solid ${ColorTheme.Red1.color}` : `1px solid ${ColorTheme.Grey1.color}`)};
    outline: ${(props) => (props.selected ? `1px solid ${ColorTheme.Red1.color}` : null)};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius} !important;
    display: flex;
    flex-direction: column;
    width: 98%;
    margin-left: 2px;
    padding: ${SpacingTheme.spacing_400.padding};
    margin-bottom: 16px;
    cursor: pointer;

    @media (min-width: 768px) {
        margin-bottom: 20px;
    }
`;

interface EditListingStatusBubbleProps {
    active: boolean;
}
export const EditListingStatusBubble = styled.span<EditListingStatusBubbleProps>`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    margin: 0;
    margin-right: 12px;
    background: ${(props) => (props.active ? ColorTheme.Green.color : ColorTheme.Red1.color)};
    content: "";
`;

export const EditListingUpdateRuleTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin: 0;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    text-align: center;
`;

export const EditListingUpdateRuleSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    text-align: left;
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const EditListingNoticePopupTitleWrapper = styled.div`
    height: 65px;
    width: calc(100% - 48px);
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const EditListingNoticePopupTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin: 0;
`;

export const EditListingNoticeIcon = styled.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    margin-top: 96px;
    margin-bottom: 48px;
`;

export const EditListingNoticeTitle = styled.p`
    font-size: ${TextTheme.sans_600_bold.fontSize};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    line-height: ${TextTheme.sans_600_bold.lineHeight};
    margin: 0;
`;

export const EditListingNoticeSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
    text-align: center;
    max-width: 250px;
    margin-top: 16px;
    margin-bottom: 248px;
`;

export const EditListingEditRoomWrapper = styled.div`
    width: calc((100% - 4 * 32px) / 5);
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const EditListingUpdateRoomWrapper = styled.div`
    width: calc(100% + 32px);
    display: flex;
    flex-wrap: wrap;
    gap: ${SpacingTheme.spacing_500.gap};
    overflow-y: scroll;
    padding: ${SpacingTheme.spacing_300.padding};
    margin: -16px;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const EditListingEditRoomButtonTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

interface EditListingEditRoomButtonSubtitleProps {
    added: boolean;
}
export const EditListingEditRoomButtonSubtitle = styled.p<EditListingEditRoomButtonSubtitleProps>`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    color: ${(props) => (props.added ? ColorTheme.Grey.color : ColorTheme.Blue.color)};
    line-height: ${TextTheme.sans_200.lineHeight};
    margin: 0;
    margin-left: 16px;
`;

export const EditListingEditTitleWrapper = styled.div`
    width: 100%;
    /* margin: 0 auto; */
    /* margin-top: 4px; */
    /* margin-bottom: 20px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const EditListingEditRoomTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
`;

export const EditListingEditRoomAddRoomButton = styled.button`
    display: none;

    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
    }
`;

export const EditListingEditRoomFilterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-top: 24px;
    margin-bottom: 32px;
    gap: ${SpacingTheme.spacing_250.gap};
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const EditListingEditRoomFilter = styled.div`
    background: none;
    height: 40px;
    padding: 0 16px;
    border: 1px solid ${ColorTheme.Grey1.color};
    box-sizing: border-box;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Black.color};
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
`;

export const EditListingDeleteRoomWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${SpacingTheme.spacing_400.gap};
    margin: ${SpacingTheme.spacing_600.margin} 0 ${SpacingTheme.spacing_300.margin};
    padding: 0 24px;
    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_600.margin} 0 ${SpacingTheme.spacing_400.margin};
    }
`;

export const EditListingDeleteRoomTitle = styled.p`
    margin: 0 auto;
    font-size: ${TextTheme.sans_600_bold.fontSize};
    font-weight: ${TextTheme.sans_600_bold.fontWeight};
    line-height: ${TextTheme.sans_600_bold.lineHeight};
    text-align: center;
`;

export const EditListingDeleteRoomSubtitle = styled.p`
    margin: 0 auto;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    max-width: 240px;
    text-align: center;
`;

export const EditListingDeleteListingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const EditListingDeleteRoomIcon = styled.img`
    height: 64px;
    width: 64px;
    margin: 0 auto;
    object-fit: cover;
`;

export const EditListingMobileCalendarButtonWrapper = styled.div`
    width: 100%;
    background: ${ColorTheme.White.color};
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    left: 0;
    bottom: 0;
`;

export const EditListingMobileCalendarButtonDivider = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    height: 1px;
    background: ${ColorTheme.Grey2.color};
`;

export const EditListingMobileCalendarButton = styled.button`
    width: calc(100% - 48px);
    height: 48px;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    margin: ${SpacingTheme.spacing_300.margin} auto;
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    color: ${ColorTheme.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    border: none;
    background: ${ColorTheme.Blue.color};
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const EditListingDeleteTitle = styled.p`
    font-size: ${TextTheme.sans_700_bold.fontSize};
    line-height: ${TextTheme.sans_700_bold.lineHeight};
    font-weight: ${TextTheme.sans_700_bold.fontWeight};
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 12px;
    max-width: 320px;
    text-align: center;
`;

export const EditListingDeleteSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    margin: 0 auto;
    max-width: 240px;
    text-align: center;
    margin-bottom: 170px;
`;

export const SortableImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-top: 24px;

    @media (min-width: 768px) {
        display: grid !important;
        grid-template-columns: calc(50% - 10px) calc(50% - 10px);
    }
`;

export const ImageUploadInputWrapper = styled.div`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    background: none;
    min-width: 100%;
    height: 96px;
    border: 1px dashed ${ColorTheme.Grey1.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`;

export const EditListingUpdatePhotoContentWrapper = styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;

    //hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const EditListingUpdateCardTitleIconButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`;

export const EditListingUpdateCardImportICalLinkInputWrapper = styled.div`
    height: 54px;
    width: 100%;
    margin-top: 32px;
    margin: 0 auto;
    margin-bottom: 12px;
    padding: 0 8px 0 16px;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const EditListingUpdateCardImportICalLinkInput = styled.input`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    width: 70%;
    z-index: 10;
    border: none;
    outline: none;
    overflow: scroll;
    @media (min-width: 768px) {
        width: 80%;
    }

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const EditListingUpdateCardImportICalLinkUrlText = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: 10;
    border: none;
    outline: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 70%;
    overflow: hidden;

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const EditListingUpdateCardImportICalLinkSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    line-height: ${TextTheme.sans_300.lineHeight};
    text-align: left;
    margin-right: auto;
    margin-bottom: 32px;
`;

export const EditListingUpdateCardImportICalLinkButton = styled.button`
    height: 38px !important;
    width: 83px !important;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    border: none;
    background: ${ColorTheme.Blue.color};
    text-decoration: none;
    cursor: pointer;
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: 11;
    margin-left: auto;
`;

export const EditListingUpdateCardImportICalLinkItem = styled.div`
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 0 16px;
    cursor: pointer;
    border: 1px solid ${ColorTheme.Grey1.color};
    border-radius: 9px;
    background: none;
    text-decoration: none;
    margin-bottom: 16px;
`;

export const EditListingUpdateCardImportICalLinkItemText = styled.p`
    z-index: 10;
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    overflow: scroll;
    width: 80%;
    white-space: nowrap;
    //hide scroll bar
    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        width: 85%;
    }
`;

export const EditListingUpdateCardImportICalLinkItemRemoveButton = styled.p`
    z-index: 11;
    height: 21px;
    width: 21px;
    border-radius: 50%;
    display: flex;
    align-items: enter;
    background: ${ColorTheme.Grey3.color};
    justify-content: center;
    margin-left: auto;
`;
export const EditListingUpdateCardImportICalLinkWrapper = styled.div`
    width: 100%;
    margin-bottom: 24px;
    height: 200px;
`;

export const EditListingImageMoveButton = styled.button`
    height: 32px;
    width: 32px;
    z-index: 2;
    background: none;
    border: none;
    margin: ${SpacingTheme.spacing_300.margin};
    margin-right: 56px;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${ColorTheme.White.color};
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    cursor: grab;
    touch-action: none;
`;

export const EditListingPriceErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    background-color: ${ColorTheme.White.color};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    border-radius: 9px;
    padding: 0 24px;
    width: fit-content;
`;

export const EditListingAddAreaInputWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`;

export const EditListingAddAreaInputText = styled.input`
    height: 80px;
    border-radius: 9px;
    border-color: transparent;
    outline: none;
    font-size: ${TextTheme.sans_1300_bold.fontSize};
    line-height: ${TextTheme.sans_1300_bold.lineHeight};
    font-weight: ${TextTheme.sans_1300_bold.fontWeight};
    text-align: center;

    @media (min-width: 768px) {
        font-size: 72px;
        line-height: 80;
    }
`;

export const EditListingAddAreaTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 38px;
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};

    @media (min-width: 768px) {
        margin-top: 31px;
    }
`;

export const EditListingAddAreaSubtitle = styled.p`
    width: 174px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 12px;
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};

    @media (min-width: 768px) {
        margin-top: 8px;
    }
`;

// hostaway edit listing blocker
export const BlockerWrapper = styled.div`
    position: fixed;
    width: 100dvw;
    height: 100dvh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const BlockerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const BlockerTitle = styled.p`
    margin: ${SpacingTheme.spacing_600.margin} 0 ${SpacingTheme.spacing_500.margin};
    font-size: ${TextTheme.sans_800_semi.fontSize};
    font-weight: ${TextTheme.sans_800_semi.fontWeight};
    line-height: ${TextTheme.sans_800_semi.lineHeight};
    color: ${ColorTheme.White.color};
`;
export const BlockerBtn = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ColorTheme.Black.color};
    padding: 14px 32px;
    border-radius: 9px;
    cursor: pointer;
`;
export const BlockerBtnText = styled.p`
    color: ${ColorTheme.White.color};
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
`;

//hostawayEditListingbLOCKED
export const ConnectWithChannelManagerHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${SpacingTheme.spacing_500.gap};
    margin-top: 32px;
    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;
export const ConnectWithChannelManagerHeaderBubble = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    object-fit: contain;
    padding: ${SpacingTheme.spacing_300.padding};
`;
export const ConnectWithChannelManagerHeaderIcon = styled.img`
    width: 24px;
    height: 24px;
`;
export const NewListingBackButton = styled.button<NewListingBackButtonProps>`
    display: ${(props) => (props.subPageIndex < 2 ? "none" : "flex")};
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: transparent;
    border: 1px solid ${ColorTheme.Grey1.color};
    border-radius: 50%;
    position: absolute;
    left: 24px;
    top: 24px;
    cursor: pointer;
    &:hover {
        background: ${ColorTheme.Grey5.color};
    }
    @media (min-width: 768px) {
        left: 32px;
        top: 32px;
        width: 40px;
        height: 40px;
    }
`;
export const NewListingBackButtonArrow = styled.div`
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: 0.2s;
    &:after {
        position: absolute;
        display: block;
        content: "";
        width: 11px;
        height: 11px;
        top: -3.33px;
        border-bottom: solid 1px ${ColorTheme.Black.color};
        transform: translatex(3.55px);
    }

    &:before {
        position: absolute;
        display: block;
        content: "";
        width: 7.5px;
        height: 7.5px;
        border-top: solid 1px ${ColorTheme.Black.color};
        border-left: solid 1px ${ColorTheme.Black.color};
        top: 50%;
        left: 2px;
        transform-origin: 0% 0%;
        transform: rotatez(-45deg);
    }
`;

// edit checkin/checkout instructions
export const EditListingUpdateCheckInOutInstructionCardWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 98%;
    bottom: 0;
    left: 0;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius} 16px 0 0;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ColorTheme.White.color};
    z-index: 102;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        border-radius: unset;
        height: 100%;
    }
`;

export const EditListingUpdateCheckInOutInstructionContentWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 36px 24px 16px;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        width: 50%;
        min-width: 720px;
        padding: ${SpacingTheme.spacing_800.padding};
    }
`;

export const EditListingCheckInOutInstructionTitle = styled.p`
    font-size: ${TextTheme.sans_600_semi.fontSize};
    line-height: ${TextTheme.sans_600_semi.lineHeight};
    font-weight: ${TextTheme.sans_600_semi.fontWeight};
    margin: 0;
    text-align: center;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
        text-align: left;
    }
`;

export const EditListingCheckInOutInstructionSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: ${SpacingTheme.spacing_200.margin} 0 16px;
    text-align: center;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500.fontSize};
        font-weight: ${TextTheme.sans_500.fontWeight};
        line-height: ${TextTheme.sans_500.lineHeight};
        margin: ${SpacingTheme.spacing_250.margin} 0 ${SpacingTheme.spacing_500.margin};
        text-align: left;
    }
`;

// edit Room popup
interface EditListingRoomWrapperProps {
    mobileHeight?: string;
}
export const EditListingRoomWrapper = styled.div<EditListingRoomWrapperProps>`
    position: fixed;
    width: 100%;
    height: ${(props) => (props.mobileHeight ? props.mobileHeight : "98%")};
    bottom: 0;
    left: 0;
    border-radius: ${BorderRadiusTheme.radius_16.borderRadius} 16px 0 0;
    box-shadow: ${ShadowTheme.shadow_300.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ColorTheme.White.color};
    z-index: 102;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        border-radius: unset;
        height: 100%;
    }
`;
// updateRoom
interface EditListingUpdateRoomContentWrapperProps {
    paddingTop?: string;
}
export const EditListingUpdateRoomContentWrapper = styled.div<EditListingUpdateRoomContentWrapperProps>`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 36px 24px 16px;
    ${(props) => (props.paddingTop ? `padding-top: ${props.paddingTop};` : null)}

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_800.padding};
    }
`;
// addRoom
export const EditListingAddRoomContentWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: ${SpacingTheme.spacing_600.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};
    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_1000.padding} 0 ${SpacingTheme.spacing_300.padding};
        width: 640px;
    }
`;
interface EditListingAddRoomTitleProps {
    marginBottom?: string;
}
export const EditListingAddRoomTitle = styled.h1<EditListingAddRoomTitleProps>`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "24px")};
    text-align: center;
    text-overflow: ellipsis;
    @media (min-width: 768px) {
        text-align: left;
        font-size: ${TextTheme.sans_900_semi.fontSize};
        font-weight: ${TextTheme.sans_900_semi.fontWeight};
        line-height: ${TextTheme.sans_900_semi.lineHeight};
        margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "32px")};
    }
`;
export const EditListingRoomSelectorWarning = styled.p`
    height: 48px;
    width: 100%;
    background: ${ColorTheme.Grey3.color};
    color: ${ColorTheme.Grey.color};
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    border-radius: 10px;
`;
// editRoom
export const EditListingEditRoomAttributesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-bottom: 16px;
    @media (min-width: 768px) {
        gap: ${SpacingTheme.spacing_400.gap};
    }
`;

// editRoom edit title
export const EditListingEditRoomTitleWordCount = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin-top: 12px;
    text-align: right;
`;
// editRoom edit beds
export const EditListingEditBedSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    text-align: center;
    margin-bottom: 14px;
    @media (min-width: 768px) {
        text-align: left;
        font-size: ${TextTheme.sans_500.fontSize};
        font-weight: ${TextTheme.sans_500.fontWeight};
        color: ${ColorTheme.Grey.color};
        line-height: ${TextTheme.sans_500.lineHeight};
    }
`;
export const BedSelectorButtonWrapper = styled.div`
    padding-top: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const BedSelectorButtonTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500_semi.fontSize};
        line-height: ${TextTheme.sans_500_semi.lineHeight};
        font-weight: ${TextTheme.sans_500_semi.fontWeight};
    }
`;
export const BedSelectorButtonSelectorWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: ${SpacingTheme.spacing_250.gap};
`;
interface BedSelectorButtonSelectorProps {
    disabled?: boolean;
}
export const BedSelectorButtonSelector = styled.div<BedSelectorButtonSelectorProps>`
    height: 35px;
    width: 35px;
    background: ${ColorTheme.White.color};
    border-radius: 50%;
    color: ${(props) => (props.disabled ? `${ColorTheme.Grey2.color}` : `${ColorTheme.Black.color}`)};
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: ${(props) => (props.disabled ? `1px solid ${ColorTheme.Grey2.color}` : `1px solid ${ColorTheme.Grey1.color}`)};
    ${(props) => (props.disabled ? `pointer-events: none;` : null)}
`;
export const BedSelectorButtonSelectorValue = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
// edit room image
export const EditListingRoomSubtitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin: ${SpacingTheme.spacing_500.margin} 0 ${SpacingTheme.spacing_400.margin};
    @media (min-width: 768px) {
        margin: ${SpacingTheme.spacing_600.margin} 0 ${SpacingTheme.spacing_400.margin};
        font-size: ${TextTheme.sans_700_semi.fontSize};
        line-height: ${TextTheme.sans_700_semi.lineHeight};
        font-weight: ${TextTheme.sans_700_semi.fontWeight};
    }
`;
export const EditListingRoomImagesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${SpacingTheme.spacing_400.gap};
`;
export const EditRoomImgSection = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

// updateRoom mobile cards section
export const EditListingUpdateRoomMobileCardsWrapper = styled.div`
    width: calc(100% + 32px);
    display: flex;
    flex-wrap: wrap;
    padding: ${SpacingTheme.spacing_300.padding};
    margin: -16px;
    overflow: hidden scroll;
    gap: ${SpacingTheme.spacing_300.gap};
`;
export const EditListingUpdateRoomMobileCardWrapper = styled.div`
    width: calc((100% - 16px) / 2);
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_250.gap};
`;
export const EditListingUpdateRoomMobileCardTitle = styled.p`
    width: 90%;
    font-size: ${TextTheme.sans_350_semi.fontSize};
    line-height: ${TextTheme.sans_350_semi.lineHeight};
    font-weight: ${TextTheme.sans_350_semi.fontWeight};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
export const EditListingUpdateRoomMobileAddBtn = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    right: 24px;
    bottom: 24px;
`;

export const EditListingUpdateWifiContentTitle = styled.p`
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    margin-top: 8px;
    margin-bottom: 12px;
    text-align: start;
`;

export const EditListingUpdateWifiContentSubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    font-weight: ${TextTheme.sans_500.fontWeight};
    line-height: ${TextTheme.sans_500.lineHeight};
    width: 100%;
    color: ${ColorTheme.Grey.color};
    margin-bottom: 32px;
    text-align: start;
`;

export const EditListingUpdateWifiContentInputText = styled.input`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    padding-left: 16px;
    outline: none;
    margin-bottom: 32px;
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
`;

// update check-in/out instruction
export const EditListingCheckInOutStepsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    gap: ${SpacingTheme.spacing_500.gap};
    @media (min-width: 768px) {
        gap: ${SpacingTheme.spacing_600.gap};
    }
`;
export const EditListingCheckInOutStep = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const EditListingCheckInOutStepImgUploadWrapper = styled.div`
    width: 100%;
    aspect-ratio: 4/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${SpacingTheme.spacing_400.gap};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
`;
export const EditListingCheckInOutStepAddDeleteBtn = styled.button`
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: ${ColorTheme.Grey5.color};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const EditListingCheckInOutStepAddDeleteBtnIcon = styled.img`
    width: 16px;
    height: 16px;
`;
export const EditListingCheckInOutTimeRangeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    @media (min-width: 768px) {
        gap: ${SpacingTheme.spacing_400.gap};
    }
`;
export const EditListingCheckInOutTimeInputWrapper = styled.div`
    width: calc((100% - 16px * 3) / 2);
    & .mbsc-windows.mbsc-textfield-wrapper {
        margin: 0;
        input {
            height: 80px;
            border-radius: 10px;
            text-align: center;
            @media (min-width: 768px) {
                height: 96px;
                font-size: ${TextTheme.sans_1300_semi.fontSize};
                line-height: ${TextTheme.sans_1300_semi.lineHeight};
                font-weight: ${TextTheme.sans_1300_semi.fontWeight};
                ::placeholder {
                    text-align: left;
                    position: relative;
                    transform: translateY(-50%);
                    font-size: ${TextTheme.sans_900.fontSize};
                    line-height: ${TextTheme.sans_900.lineHeight};
                    font-weight: ${TextTheme.sans_900.fontWeight};
                }
            }
        }
    }
    @media (min-width: 768px) {
        width: calc((100% - 24px * 3) / 2);
        height: 96px;
    }
`;
export const EditListingCheckInOutTimeDivider = styled.div`
    width: 16px;
    height: 1px;
    background: ${ColorTheme.Grey.color};
    @media (min-width: 768px) {
        width: 24px;
    }
`;
