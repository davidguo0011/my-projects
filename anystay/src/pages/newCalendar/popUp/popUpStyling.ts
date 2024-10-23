import styled from "styled-components";
import { TextTheme, ButtonTheme, ColorTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

export const PopupWrapper = styled.div`
    min-width: 400px;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    padding: ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_400.padding} ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};
    border-top: 1px solid ${ColorTheme.Grey2.color};
    border-left: 1px solid ${ColorTheme.Grey2.color};
    overflow-y: scroll;
    position: fixed;
    right: 0;
    z-index: 100;
    top: -2px;
    background-color: white;
    margin-top: 80px;
`;

export const DateWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${SpacingTheme.spacing_350.gap};
    margin-top: 8px;
`;

export const DateContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DateDivider = styled.div`
    width: 18px;
    height: 5px;
    margin-top: 10px;
    background-color: black;
`;

export const Month = styled.p`
    margin: 0;
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    font-size: ${TextTheme.sans_700_semi.fontSize};
`;

export const DayNum = styled.p`
    margin: 0;
    font-weight: ${TextTheme.sans_1300_bold.fontWeight};
    font-size: ${TextTheme.sans_1300_bold.fontSize};
`;

export const Day = styled.p`
    margin: 0;
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
`;

export const AvailableBtnWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface AvailableBtnProps {
    active: boolean;
}

export const AvailableBtn = styled.button<AvailableBtnProps>`
    border: none;
    background-color: ${(props) => (props.active ? ColorTheme.Black.color : "white")};
    color: ${(props) => (props.active ? "white" : ColorTheme.Grey.color)};
    width: 102px;
    height: 36px;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    cursor: pointer;
`;

export const CloseBtn = styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    top: 24px;
    left: 24px;
    cursor: pointer;
`;
export const BackBtn = styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    top: 24px;
    left: 24px;
    cursor: pointer;
`;
export const CloseBtnIcon = styled.img`
    width: 16px;
    height: 16px;
`;
export const BackBtnIcon = styled.img`
    width: 16px;
    height: 16px;
`;
export const DeleteBtn = styled.button`
    width: 28px;
    height: 28px;
    position: absolute;
    top: 19px;
    right: 30px;
    cursor: pointer;
    border: none;
    background-color: transparent;
`;
export const DeleteBtnIcon = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const SaveBtn = styled.button`
    border: none;
    width: 102px;
    height: 48px;
    border-radius: 9px;
    background-color: ${ColorTheme.Blue.color};
    color: white;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    cursor: pointer;
`;

export const PriceDiscountWrapper = styled.div`
    width: 100%;
`;

export const PriceInputWrapper = styled.div`
    border-radius: 9px;
    /* border-radius: 10px 10px 0px 0px; */
    /* border-bottom: 1px; */
    background: ${ColorTheme.White.color};
    height: 91px;
    display: flex;
    gap: ${SpacingTheme.spacing_300.gap};
    justify-content: center;
    align-items: center;
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
    padding: ${SpacingTheme.spacing_400.padding};
    cursor: pointer;
    position: relative;
`;
export const InputLabel = styled.p`
    font-size: ${TextTheme.sans_800_semi.fontSize};
    font-weight: ${TextTheme.sans_800_semi.fontWeight};
    line-height: ${TextTheme.sans_800_semi.lineHeight};
    position: absolute;
    top: 30px;
`;

export const DiscountInputWrapper = styled.div`
    border-radius: 0px 0px 10px 10px;
    border: 1px solid ${ColorTheme.Grey1.color};
    background: ${ColorTheme.White.color};
    height: 91px;
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_200.gap};
    padding: ${SpacingTheme.spacing_300.padding};
`;

export const Input = styled.input`
    font-size: ${TextTheme.sans_800_semi.fontSize};
    font-style: normal;
    font-weight: ${TextTheme.sans_800_semi.fontWeight};
    line-height: ${TextTheme.sans_800_semi.lineHeight};
    border: none;
    outline: none;
    margin-left: 20px;
    ::placeholder {
        color: ${ColorTheme.Grey1.color};
    }
`;
export const InputDisplay = styled.p`
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
`;
export const ErrMsg = styled.p`
    color: ${ColorTheme.Red1.color};
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin: 0;
    margin-top: 12px;
`;

export const InputDisplayEditIconWrapper = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${ColorTheme.Grey1.color};
    cursor: pointer;
`;
export const InputDisplayEditIcon = styled.img`
    width: 12px;
    height: 12px;
`;
export const EditPopupTitle = styled.p`
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: ${TextTheme.sans_700_semi.fontSize};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
`;
