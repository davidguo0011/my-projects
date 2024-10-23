import styled from "styled-components";
import Autocomplete from "react-google-autocomplete";
import { TextTheme, TallTextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";
// Create Listing Page component styling

export const CreateListingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;
export const CreateListingHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} 0;
    height: 60px;
    @media (min-width: 768px) {
        height: 80px;
        padding: ${SpacingTheme.spacing_500.padding} ${SpacingTheme.spacing_500.padding} 0;
    }
`;

export const CreateListingWrapper = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    overflow: auto;
    @media (min-width: 768px) {
        height: calc(100% - 80px);
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const CreateListingNewListingQuestionsWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 24px 24px;
    margin: auto;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        padding: ${SpacingTheme.spacing_200.padding} 0 ${SpacingTheme.spacing_500.padding};
        width: 640px;
    }
`;
// New listing or continue prvious listing question
export const CreateListingNewListingQuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
`;
export const CreateListingNewListingBtnWrapper = styled.div`
    flex-shrink: 0;
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};
    width: 100%;
    overflow-x: scroll;
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding};
    margin: 0 -16px;
    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        position: unset;
        margin: ${SpacingTheme.spacing_600.margin} 0 0;
        width: 100%;
        padding: 0;
        overflow: visible;
    }
`;

export const CreateListingNewListingQuestionTitle = styled.p`
    margin-top: 52px;
    margin-bottom: 24px;
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};

    @media (min-width: 768px) {
        margin-top: 64px;
    }
`;

interface CreateListingNewListingQuestionProps {
    selected: boolean;
}

export const CreateListingNewListingQuestion = styled.div<CreateListingNewListingQuestionProps>`
    border: ${(props) => (props.selected ? `2px solid ${ColorTheme.Black.color}` : `2px solid ${ColorTheme.White.color}`)};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    cursor: pointer;
    padding: ${SpacingTheme.spacing_400.padding};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    min-width: 280px;
    @media (min-width: 768px) {
        margin: 0;
        width: calc((100% - 24px) / 2);
    }
`;
export const CreateListingDraftsWrapper = styled.div`
    height: 29%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        height: 31%;
    }
`;
export const CreateListingDraftListingWrapper = styled.div`
    height: 64px;
    width: 100%;
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-bottom: 24px;
    cursor: pointer;
`;
export const CreateListingDraftListingImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;
export const CreateListingDraftListingImgWrapper = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 10px;
    background-color: ${ColorTheme.Grey2.color};
`;
export const CreateListingDraftListingTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CreateListingGetStartedImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CreateListingGetStartedImg = styled.img`
    width: 128px;
    height: 128px;
    margin: 64px;
`;

export const CreateListingNewListingQuestionLabelTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin-top: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-right: 24px;
    margin-bottom: 8px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;
export const CreateListingDraftListingTitle = styled.p`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin-bottom: 4px;
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400_semi.fontSize};
        line-height: ${TextTheme.sans_400_semi.lineHeight};
    }
`;

export const CreateListingNewListingQuestionLabelSubtitle = styled.p`
    color: ${ColorTheme.Grey.color};
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const CreateListingQuestionsButtonsWrapper = styled.div`
    height: 80px;
    position: absolute;
    right: 0;
    bottom: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        z-index: 100;
    }
`;

// Add address question Styling

export const CreateListingAddAddressQuestionWrapper = styled.div`
    // height: calc(100vh - 105px);
    height: fit-content;

    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        height: auto;
    }
`;

export const CreateListingAddAddressTitle = styled.p`
    margin: 0;
    margin-top: 48px;
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        margin-top: 32px;
        display: flex;
        align-items: center;
    }
`;
export const CreateListingAddSubpremisesTitle = styled.p`
    margin: 0;
    margin-top: 48px;
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
        margin-top: 32px;
        display: flex;
        align-items: center;
    }
`;

export const CreateListingReadyToGoSubtitle = styled.p`
    margin: 0;
    margin-top: 10px;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_400.lineHeight};

    @media (min-width: 768px) {
        margin-top: 8px;
        font-size: ${TextTheme.sans_500.fontSize};
        line-height: ${TextTheme.sans_500.lineHeight};
    }
`;

export const CreatelistingInstructionText = styled.p`
    color: ${ColorTheme.Grey.color};
    font-size: ${TextTheme.sans_500.fontSize};
    font-weight: ${TextTheme.sans_500.fontWeight};
    line-height: ${TextTheme.sans_500.lineHeight};
    margin: ${SpacingTheme.spacing_200.margin} 0px 0px 0px;
`;

interface CreateListingAddAddressQuestionSubtitleProps {
    invalidAddress?: boolean;
}

export const CreateListingAddAddressQuestionSubtitle = styled.p<CreateListingAddAddressQuestionSubtitleProps>`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${(props) => (props.invalidAddress ? ColorTheme.Red.color : ColorTheme.Grey.color)};
    margin-top: 8px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500.fontSize};
        line-height: ${TextTheme.sans_500.lineHeight};
        margin-bottom: 32px;
    }
`;
export const CreateListingAddSubpremisesForm = styled.div`
    margin-top: 16px;
    border-radius: 12px;
    border: 1px solid ${ColorTheme.Grey1.color};
    height: 284px;
    width: 100%;
    max-width: 640px;
`;
export const CreateListingAddSubpremisesItem = styled.div`
    padding: 9px 16px;
    border-bottom: 1px solid ${ColorTheme.Grey1.color};
    height: 56px;
    cursor: not-allowed;
    &:last-child {
        border: none;
    }
`;
export const CreateListingAddSubpremisesItemTitle = styled.div`
    font-size: ${TextTheme.sans_200_med.fontSize};
    font-weight: ${TextTheme.sans_200_med.fontWeight};
    line-height: ${TextTheme.sans_200_med.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin-bottom: 2px;
`;
export const CreateListingAddSubpremisesItemContent = styled.div`
    font-size: ${TextTheme.sans_400_med.fontSize};
    font-weight: ${TextTheme.sans_400_med.fontWeight};
    line-height: ${TextTheme.sans_400_med.lineHeight};
`;
export const CreateListingAddSubpremisesInput = styled.input`
    width: 100%;
    height: 100%;
    font-size: ${TextTheme.sans_400_med.fontSize};
    line-height: ${TextTheme.sans_400_med.lineHeight};
    font-weight: ${TextTheme.sans_400_med.fontWeight};
    border: none;
    outline: none;

    &::placeholder {
        color: ${ColorTheme.Grey.color};
    }
`;

export const CreateListingAddAdressAutocompleteInputWrapper = styled.div`
    width: 100%;
    height: 54px;
    border-radius: 9px;
    border: 1px solid ${ColorTheme.Grey1.color};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    align-items: center;
`;

export const CreateListingAddAdressAutocompleteInput = styled(Autocomplete)`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    color: ${ColorTheme.Grey1.color};
    line-height: ${TextTheme.sans_400.lineHeight};
    padding-left: 16px;
    padding-right: 50px;
    outline: none;
    grid-row: 1/2;
    grid-column: 1/2;
    border: none;
    height: 100%;
`;

export const CreateListingCheckboxInputLabel = styled.label`
    /* position: relative; */
    /* width: calc(100% - 16px); */
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: 1px solid ${ColorTheme.Grey1.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-top: 16px; */
    cursor: pointer;

    @media (min-width: 768px) {
    }
`;

export const CreateListingCheckboxInput = styled.input`
    height: 0;
    width: 0;
`;

export const CreateListingCheckboxInputImage = styled.img`
    height: 24px;
    width: 24px;
    margin: 0 auto;
    padding: 0;
    margin-top: 24px;

    @media (min-width: 768px) {
        height: 32px;
        width: 32px;
        margin-top: 32px;
    }
`;

export const CreateListingCheckboxInputTitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    line-height: ${TextTheme.sans_400.lineHeight};
    font-weight: ${TextTheme.sans_400.fontWeight};
    text-align: center;
    margin-top: 12px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-bottom: 32px;
    }
`;

// New Listing Property Type Question
export const NewListingPropertyTypeQuestionTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin-bottom: 16px;
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin-top: 32px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500_semi.fontSize};
        line-height: ${TextTheme.sans_500_semi.lineHeight};
        margin-top: 48px;
    }
`;

// New Listing Basic Details Question
export const NewListingAddAmenitiesQuestionWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

// New Listing Basic Details Question
export const NewListingAddServicesQuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    @media (max-width: 767px) {
        overflow: scroll;
    }
`;

export const NewListingAddAmenitiesTitle = styled.p`
    margin-top: 32px;
    margin-bottom: 16px;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    @media (min-width: 768px) {
        margin-top: 48px;
        font-size: ${TextTheme.sans_500_semi.fontSize};
        line-height: ${TextTheme.sans_500_semi.lineHeight};
    }
`;

export const CreatListingPriceErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${ColorTheme.Grey.color};
    height: 48px;
    background-color: ${ColorTheme.Grey3.color};
    border-radius: 9px;
    margin-top: 20px;
    font-size: ${TextTheme.sans_300.fontSize};
`;

export const NewListingAddAmenitiesCheckboxQuestionWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow-x: visible;
    grid-gap: ${SpacingTheme.spacing_300.gap};
    padding-bottom: 120px;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const NewListingAmenityCategoryWrapper = styled.div`
    padding: 0 1px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: visible;
    grid-gap: ${SpacingTheme.spacing_300.gap};
    padding-bottom: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

// New Listing Add Images Question
export const NewListingAddImagesQuestionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const NewListingAddImagesQuestionTitle = styled.p`
    margin-top: 32px;
    margin-bottom: 4px;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500_semi.fontSize};
        line-height: ${TextTheme.sans_500_semi.lineHeight};
        margin-top: 48px;
    }
`;

export const NewListingAddImagesQuestionSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin-top: 0;
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin-bottom: 24px;

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

// New Listing Write Title Question
export const NewListingWriteTitleQuestionSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin-top: 12px;
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    margin-bottom: 0;
`;

export const NewListingWriteTitleQuestionInputCount = styled.p`
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
    text-align: right;
    width: 100%;
    padding: 0;
`;

interface NewListingWriteTitleQuestionInputTextareaProps {
    textAreaType: string;
    description: boolean;
}

export const NewListingWriteTitleQuestionInputTextarea = styled.textarea<NewListingWriteTitleQuestionInputTextareaProps>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: ${(props) => (props.textAreaType === "title" ? "134px;" : "320px")};
    font-size: ${(props) => (props.description ? TallTextTheme.sans_text_300.fontSize : TextTheme.sans_900_semi.fontSize)};
    line-height: ${(props) => (props.description ? TallTextTheme.sans_text_300.lineHeight : TextTheme.sans_900_semi.lineHeight)};
    font-weight: ${(props) => (props.description ? TallTextTheme.sans_text_300.fontWeight : TextTheme.sans_900_semi.fontWeight)};
    padding: ${SpacingTheme.spacing_300.padding};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius} !important;
    border: 1px solid ${ColorTheme.Grey2.color};
    outline: none;
    margin-top: 24px;
    margin-bottom: 16px;
    resize: none;

    @media (min-width: 768px) {
        height: ${(props) => (props.textAreaType === "title" ? "177px;" : "448px")};
        font-size: ${(props) => (props.description ? TextTheme.sans_400.fontSize : TextTheme.sans_1000.fontSize)};
        padding: ${SpacingTheme.spacing_350.padding};
        margin-top: 32px;
    }

    &::placeholder {
        font-size: ${(props) => (props.description ? TextTheme.sans_400.fontSize : TextTheme.sans_1000_semi.fontSize)};
        line-height: ${(props) => (props.description ? TextTheme.sans_400.lineHeight : TextTheme.sans_1000_semi.lineHeight)};
        font-weight: ${(props) => (props.description ? TextTheme.sans_400.fontWeight : TextTheme.sans_1000_semi.fontWeight)};
        color: ${ColorTheme.Grey1.color};
        padding-top: 0px;
        padding-right: 12px;
    }
`;

export const NewListingMinimumStayOptionsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 124px;
    margin-top: 32px;
`;

export const NewListingPriceQuestionInput = styled.input`
    width: calc(100% - 16px);
    height: 100%;
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    padding-left: 8px;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;

export const NewListingBackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: transparent;
    border: 1px solid ${ColorTheme.Grey1.color};
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background: ${ColorTheme.Grey5.color};
    }
    @media (min-width: 768px) {
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

export const NewListingReadyToGoChecklist = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    gap: ${SpacingTheme.spacing_400.gap};

    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;

export const NewListingReadyToGoChecklistItem = styled.div`
    display: flex;
    align-items: center;
`;

export const NewListingReadyToGoChecklistItemIcon = styled.img`
    height: 16px;
    width: 16px;
    margin: 0;
    padding: 0;
    margin-right: 16px;
    @media (min-width: 768px) {
        height: 21px;
        width: 21px;
    }
`;

export const NewListingReadyToGoChecklistItemText = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    text-decoration: underline;
    margin: 0;
    padding: 0;
    cursor: pointer;
`;

export const NewListingMapWrapper = styled.div`
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    margin-top: 32px;
    width: 100%;
    overflow: hidden;
    height: 240px;

    @media (min-width: 768px) {
        height: 400px;
    }
`;

export const CreateListingNewListingDesktopTitle = styled.p`
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    margin: 0;
    margin-top: 32px;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        margin-top: 48px;
        font-size: ${TextTheme.sans_900_semi.fontSize};
        font-weight: ${TextTheme.sans_900_semi.fontWeight};
        line-height: ${TextTheme.sans_900_semi.lineHeight};
    }
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
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    z-index: 2;
    padding: 0 16px;
    margin: ${SpacingTheme.spacing_300.margin};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
`;

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
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    cursor: pointer;
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
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    cursor: pointer;
    touch-action: none;
`;

export const EditListingImageWrapper = styled.div`
    height: 200px;
    max-height: 200px;
    width: 100%;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    overflow: hidden;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;

    @media (min-width: 768px) {
        height: 180px;
    }
`;

export const SortableImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-top: 16px;
    margin-bottom: 80px;

    @media (min-width: 768px) {
        display: grid !important;
        grid-template-columns: calc(50% - 10px) calc(50% - 10px);
        margin-top: 24px;
        margin-bottom: unset;
    }
`;

interface ImageUploadInputWrapperProps {
    expanded: boolean;
}

export const ImageUploadInputWrapper = styled.div<ImageUploadInputWrapperProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    line-height: ${TextTheme.sans_300.lineHeight};
    color: ${ColorTheme.Grey.color};
    background: none;
    min-width: 100%;
    min-height: ${(props) => (props.expanded ? "200px" : "128px")};
    border: 1px dashed ${ColorTheme.Grey1.color};
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
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
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: flex-end;
    margin-right: 16px;
`;

export const AutocompleteClearButtonIcon = styled.img`
    height: 10px;
    width: 10px;
`;

export const CreateListingAddAreaSubtitle = styled.p`
    margin: 0;
    margin-top: 8px;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${ColorTheme.Grey.color};

    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_500.fontSize};
        font-weight: ${TextTheme.sans_500.fontWeight};
        line-height: ${TextTheme.sans_500.lineHeight};
    }
`;

export const CreateListingAddAreaInputText = styled.input`
    height: 80px;
    border-radius: 9px;
    border-color: transparent;
    outline: none;
    font-size: ${TextTheme.sans_1300_semi.fontSize};
    line-height: ${TextTheme.sans_1300_semi.lineHeight};
    font-weight: ${TextTheme.sans_1300_semi.fontWeight};
    text-align: center;

    @media (min-width: 768px) {
        font-size: 72px;
        line-height: 80;
    }
`;

export const CreateListingAddAreaInputWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    overflow: hidden;
`;

//connect with channel manager subpages
export const ChooseChannelManagerPlatformTitle = styled.div`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    margin-bottom: 32px;
    margin-top: 32px;
    @media (min-width: 768px) {
        margin-bottom: 48px;
        margin-top: 48px;
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
    }
`;

export const ChooseChannelManagerPlatformCardWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};
    flex-wrap: wrap;
`;

interface ChooseChannelManagerPlatformCardProps {
    selected: boolean;
}
export const ChooseChannelManagerPlatformCard = styled.div<ChooseChannelManagerPlatformCardProps>`
    width: calc((100% - 24px) / 2);
    aspect-ratio: 1/1;
    border-radius: 12px;
    box-shadow: 1.3px 3px 16px 0px #0000001a;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    border: ${(props) => (props.selected ? `1px solid ${ColorTheme.Black.color}` : `1px solid ${ColorTheme.White.color}`)};
    outline: ${(props) => (props.selected ? `1px solid ${ColorTheme.Black.color}` : "none")};
    display: flex;
    flex-direction: column;
    cursor: pointer;
    @media (min-width: 768px) {
        height: 376px;
    }
`;

export const ChooseChannelManagerPlatformCardImg = styled.img`
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius} 12px 0 0;
    width: 55%;
    height: 55%;
    object-fit: contain;
    margin: auto;
`;

export const ChooseChannelManagerPlatformCardTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    margin-top: 16px;
    margin-left: 16px;
    margin-bottom: 16px;
    @media (min-width: 768px) {
        margin-top: 24px;
        margin-left: 24px;
        margin-bottom: 24px;
    }
`;

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

export const ConnectWithChannelManagerTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    margin-bottom: 48px;
`;
export const ConnectWithChannelManagerTitle = styled.p`
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    text-align: center;
    margin-bottom: 8px;
`;
export const ConnectWithChannelManagerSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${ColorTheme.Grey.color};
    text-align: center;
`;
export const ConnectWithChannelManagerIntro = styled.div`
    border-radius: 10px;
    border: 1px solid ${ColorTheme.Grey2.color};
`;
export const ConnectWithChannelManagerIntroItem = styled.div`
    padding: ${SpacingTheme.spacing_300.padding};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    &:last-child {
        border-bottom: none;
    }
`;
export const ConnectWithChannelManagerIntroItemTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
    margin-bottom: 8px;
`;
export const ConnectWithChannelManagerIntroItemSubtitle = styled.p`
    font-size: ${TextTheme.sans_300_med.fontSize};
    font-weight: ${TextTheme.sans_300_med.fontWeight};
    line-height: ${TextTheme.sans_300_med.lineHeight};
    color: ${ColorTheme.Grey.color};
`;
export const AddChannelManagerKeyTitle = styled.p`
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    margin-top: 48px;
    @media (min-width: 768px) {
        margin-top: 32px;
    }
`;
export const AddChannelManagerKeyTitleMobile = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    margin-top: 37px;
    @media (min-width: 768px) {
        display: none;
    }
`;
export const AddChannelManagerInstructionSectionTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    margin-bottom: 24px;
`;
export const AddChannelManagerInstructionItem = styled.div`
    width: 100%;
    margin-bottom: 48px;
`;
export const AddChannelManagerInstructionTextWrapper = styled.div`
    margin-top: 16px;
`;
export const AddChannelManagerInstructionTitle = styled.p`
    font-size: ${TextTheme.sans_500_semi.fontSize};
    font-weight: ${TextTheme.sans_500_semi.fontWeight};
    line-height: ${TextTheme.sans_500_semi.lineHeight};
    margin-bottom: 4px;
`;
export const AddChannelManagerInstructionSubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${ColorTheme.Grey.color};
`;
export const AddChannelManagerLink = styled.a`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_400_semi.lineHeight};
`;
export const AddChannelManagerInstructionImg = styled.img`
    width: 100%;
    height: 400px;
    object-fit: contain;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    border: 1px solid ${ColorTheme.Grey2.color};
`;
export const AddChannelManagerKeySubtitle = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    color: ${ColorTheme.Grey.color};
    @media (min-width: 768px) {
        display: none;
    }
`;
export const AddChannelManagerKeyForm = styled.div`
    border-radius: 10px;
    border: 1px solid ${ColorTheme.Grey2.color};
    margin-top: 32px;
    margin-bottom: 12px;
    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;

interface AddChannelManagerKeyErrMsgProps {
    invalidKey: string | boolean;
}
export const AddChannelManagerKeyErrMsg = styled.p<AddChannelManagerKeyErrMsgProps>`
    color: ${ColorTheme.Red.color};
    opacity: ${(props) => (props.invalidKey ? "1" : "0")};
    margin-bottom: 48px;
`;
export const AddChannelManagerKeyItem = styled.div`
    padding: ${SpacingTheme.spacing_300.padding};
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
    &:last-child {
        border-bottom: none;
    }
`;
export const AddChannelManagerKeyInput = styled.input`
    border: none;
    outline: none;
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    width: 100%;
    &::placeholder {
        color: ${ColorTheme.Grey.color};
    }
`;
export const ConnectWithChannelManagerDoneIcon = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-bottom: 32px;
`;
export const ConnectWithChannelManagerDoneTitle = styled.p`
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    @media (min-width: 768px) {
        font-size: ${TextTheme.sans_1000_semi.fontSize};
        font-weight: ${TextTheme.sans_1000_semi.fontWeight};
        line-height: ${TextTheme.sans_1000_semi.lineHeight};
    }
`;
export const ConnectWithChannelManagerDoneWrapper = styled.div`
    margin-top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
