import styled from "styled-components";
import { Link } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import { TextTheme, ButtonTheme, ColorTheme, GradientTheme, ShadowTheme, BorderRadiusTheme, SpacingTheme } from "../../globaStyledComponents/globalStyledComponentsStyling";
// Styling for search listing page
interface MobileNavbarWrapperProps {
    hide: boolean | undefined | null;
    mobileSearchMenuActivated: boolean;
}
export const MobileNavbarWrapper = styled.div<MobileNavbarWrapperProps>`
    width: 100%;
    bottom: 0;
    position: fixed;
    z-index: 101;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    background: ${ColorTheme.White.color};
    height: 65px;

    transition: transform ${(props) => (props.mobileSearchMenuActivated ? "0s" : "0.3s")} ease-in-out;
    transform: ${(props) => (props.hide && props.hide != null ? "translateY(100%)" : "none")};

    @media (min-width: 768px) {
        display: none;
    }
`;
export const SearchBarClearButtonIcon = styled.img`
    height: 10px;
    width: 10px;
`;

export const MobileNavbarMenuWrapper = styled.div`
    width: calc(100% - 16px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: space-between;
    margin-top: 11px;
`;

export const MobileNavbarMenuWrapperNotLoggedIn = styled.div`
    width: calc(100% - 48px);
    display: grid;
    grid-template-columns: 100%;
    margin: auto;
    height: 100%;
`;

export const MobileNavbarMenuWrapperNotLoggedInLogInWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-top: 11px;
    align-items: flex-start;
`;

export const MobileNavbarMenuWrapperNotLoggedInIcon = styled.img`
    height: 24px;
    width: 24px;
    object-fit: cover;
    border-radius: 50%;
`;

interface MobileNavbarMenuItemProps {
    stroke?: string;
}
export const MobileNavbarMenuItem = styled.button<MobileNavbarMenuItemProps>`
    width: 100%;
    height: 100%;
    min-width: 60px;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    cursor: pointer;
    border: none;
    padding: 0;

    svg {
        height: 24px;
        width: 24px;
        g {
            fill: ${(props) => props.stroke};
        }
        path {
            stroke: ${(props) => props.stroke};
        }
    }
`;

interface MobileNavbarMenuItemLogInProps {
    stroke: string;
}
export const MobileNavbarMenuItemLogIn = styled.button<MobileNavbarMenuItemLogInProps>`
    width: 60px;
    height: 100%;
    display: flex;
    padding: 0;
    flex-direction: column;
    align-items: center;
    background: none;
    cursor: pointer;
    border: none;

    svg {
        height: 24px;
        width: 24px;
        g {
            fill: ${(props) => props.stroke};
        }
        path {
            stroke: ${(props) => props.stroke};
        }
    }
`;

export const MobileNavbarSearchMenuSearchIcon = styled.img`
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    justify-self: flex-end;
    height: 20px;
    width: 20px;
    position: relative;
`;

export const MobileNavbarMenuItemText = styled.p`
    text-align: center;
    margin: 0;
    margin-top: 6px;
    font-size: ${TextTheme.sans_100.fontSize};
    line-height: ${TextTheme.sans_100.lineHeight};
    font-weight: ${TextTheme.sans_100.fontWeight};
    color: ${(props) => props.color};
`;

// Search sub menu styling
export const MobileNavbarSearchMenuWrapper = styled.div`
    width: 100%;
    z-index: 102;
    background: ${ColorTheme.White.color};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    height: 100vh;
    height: 100dvh;
`;

export const MobileNavbarMenuImage = styled.img`
    height: 24px;
    width: 24px;
    object-fit: cover;
`;

export const MobileNavbarSearchMenuContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px;
    flex-direction: column;
`;

export const MobileNavbarSearchMenuWhenWhereWrapper = styled.div`
    width: calc(100% - 48px);
    height: 133px;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    box-shadow: ${ShadowTheme.shadow_100.boxShadow};
`;

export const MobileNavbarSearchMenuWhenWhereContent = styled.div`
    width: 100%;
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const MobileNavbarSearchMenuWhenWhereTitle = styled.div`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    margin-left: 16px;
`;

export const MobileNavbarSearchMenuWhenWhereSubtitle = styled.div`
    font-size: ${TextTheme.sans_300.fontSize};
    line-height: ${TextTheme.sans_300.lineHeight};
    font-weight: ${TextTheme.sans_300.fontWeight};
    margin-right: 16px;
`;

export const MobileNavbarSearchMenuWhenWhereDivider = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const MobileNavbarSearchMenuRecommendedCitiesWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: ${SpacingTheme.spacing_300.gap};
`;

export const MobileNavbarSearchMenuRecommendedCity = styled.div`
    border: none;
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    width: 100%;
    cursor: pointer;
`;

export const MobileNavbarSearchMenuRecommendedCitiesImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
`;

export const MobileNavbarSearchMenuRecommendedCitiesTextWrapper = styled.div`
    margin-left: 12px;
    display: flex;
    flex-direction: column;
`;

export const MobileNavbarSearchMenuRecommendedCitiesTitle = styled.div`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    font-weight: ${TextTheme.sans_300_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin-bottom: 4px;
`;

export const MobileNavbarSearchMenuRecommendedCitiesSubtitle = styled.div`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${TextTheme.sans_200.fontWeight};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Grey.color};
`;

export const DesktopNavbarSearchMenuRecommendedCitiesWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: ${SpacingTheme.spacing_300.gap};
    margin-bottom: 64px;
`;
interface DesktopNavbarSearchMenuRecommendedCityProps {
    url: string;
}
export const DesktopNavbarSearchMenuRecommendedCity = styled.button<DesktopNavbarSearchMenuRecommendedCityProps>`
    background: blue;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${(props) => props.url});
    background-size: cover;
    background-position: center center;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${BorderRadiusTheme.radius_12.borderRadius};
    width: 100%;
    padding: ${SpacingTheme.spacing_600.padding} 0;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    cursor: pointer;
    color: ${ColorTheme.White.color};
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
`;
export const MobileNavbarDateSearchTitleText = styled.div`
    color: ${ColorTheme.Black.color};
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    width: 100%;
    margin: 64px 24px 24px;
`;
export const MobileNavbarLocationSearchTitleText = styled.div`
    color: ${ColorTheme.Black.color};
    font-size: ${TextTheme.sans_900_semi.fontSize};
    font-weight: ${TextTheme.sans_900_semi.fontWeight};
    line-height: ${TextTheme.sans_900_semi.lineHeight};
    margin-left: 24px;
    margin-top: 64px;
    width: fit-content;
`;

export const MobileNavbarTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    margin-top: 24px;
    margin-left: 24px;
`;
export const MobileNavbarDateTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    margin-top: 48px;
    margin-left: 24px;
`;
export const MobileNavbarGuestTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    margin-top: 48px;
    margin-left: 24px;
`;

export const MobileNavbarAutocompleteInputWrapper = styled.div`
    z-index: 1003;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${SpacingTheme.spacing_400.margin} ${SpacingTheme.spacing_400.margin} ${SpacingTheme.spacing_500.margin} ${SpacingTheme.spacing_400.margin};
    border-radius: 12px;
    width: calc(100% - 48px);
    height: fit-content;
    background-color: ${ColorTheme.White.color};
    border: 1px solid ${ColorTheme.Grey2.color};
    box-shadow: rgba(0, 0, 0, 0.1) 1px 3px 12px 0px;
`;
export const MobileNavbarInputSearchIcon = styled.img`
    width: 16px;
    height: 16px;
    margin: auto 0 auto 16px;
`;

export const MobileNavbarCalendarWrapper = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    padding: 0 17px;

    .mbsc-datepicker-inline {
        width: 100%;
    }
    // border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const MobileNavbarGuestsWrapper = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    width: calc(100% - 48px);
    margin: ${SpacingTheme.spacing_600.margin} ${SpacingTheme.spacing_400.margin} 0;
    height: fit-content;
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_400.gap};
    flex-direction: column;
    // border-bottom: 1px solid ${ColorTheme.Grey2.color};
`;

export const MobileNavbarAutocompleteInput = styled(Autocomplete)`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    background-color: ${ColorTheme.White.color};
    height: 38px;
    padding: 0;
    outline: none;
    border: 0px;
    margin: ${SpacingTheme.spacing_200.margin};
    flex: 1;
`;

export const MobileNavbarDateContinueButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding: ${SpacingTheme.spacing_300.padding} ${SpacingTheme.spacing_400.padding};
`;

export const MobileNavbarDateContinueButton = styled.button`
    height: 48px;
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    border: none;
    color: ${ColorTheme.White.color};
    border-radius: 9px;
    transition: 0.1s;
    background: ${GradientTheme.Red.background};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    cursor: pointer;
    padding: 0 32px;
`;

export const MobileNavbarDateBackButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    padding: 0px;
    text-decoration: underline;
    background: none;
    border: none;
    margin-right: auto;
    cursor: pointer;
`;

export const MobileNavbarGuestCancelButton = styled.button`
    font-size: ${ButtonTheme.sans_button_200.fontSize};
    font-weight: ${ButtonTheme.sans_button_200.fontWeight};
    line-height: ${ButtonTheme.sans_button_200.lineHeight};
    padding: 0px;
    text-decoration: underline;
    background: none;
    border: none;
    margin-right: auto;
    cursor: pointer;
`;

export const MobileNavbarDateSearchTitleIcon = styled.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
    z-index: 2;
    cursor: pointer;
`;
export const CloseBtn = styled.button`
    border: none;
    background-color: transparent;
    width: 16px;
    height: 16px;
    position: relative;
    cursor: pointer;
`;
export const CloseBtnIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const MobileNavbarDateSearchButtonIcon = styled.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
    justify-self: flex-start;
`;
export const MobileNavbarDateSearchButtonText = styled.div`
    color: ${ColorTheme.White.color};
`;

export const NavLink = styled(Link)`
    text-decoration: none !important;
    max-width: 100%;
    cursor: pointer;
`;

interface MobileNavbarProfilePictureWrapperProps {
    selected: boolean;
}
export const MobileNavbarProfilePictureWrapper = styled.div<MobileNavbarProfilePictureWrapperProps>`
    box-sizing: border-box;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    /* ${(props) => (props.selected ? "box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 2px #262626" : "")}; */
`;

export const MobileNavbarProfilePicture = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
`;

export const MobileNavbarGuestsInputsWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: ${SpacingTheme.spacing_400.gap};
    flex-direction: column;
`;

export const MobileNavbarGuestInputWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    @media (min-width: 768px) {
        min-height: 70px;
    }
`;

export const MobileNavbarGuestInputTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${SpacingTheme.spacing_100.gap};
`;

export const MobileNavbarGuestInputTitle = styled.p`
    font-size: ${TextTheme.sans_400_semi.fontSize};
    font-weight: ${TextTheme.sans_400_semi.fontWeight};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    margin: 0;
`;

export const MobileNavbarGuestInputSubtitle = styled.p`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${TextTheme.sans_300.fontWeight};
    color: ${ColorTheme.Grey.color};
    line-height: ${TextTheme.sans_300.lineHeight};
    margin: 0;
`;

export const MobileNavbarGuestInputButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${SpacingTheme.spacing_300.gap};
    width: 110px;
    justify-content: space-between;
`;

export const MobileNavbarGuestInputButton = styled.button`
    height: 35px;
    width: 35px;
    border: 1px solid ${ColorTheme.Grey1.color};
    background: none;
    border-radius: 50%;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    cursor: pointer;
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
`;

export const MobileNavbarGuestInputValue = styled.p`
    font-size: ${TextTheme.sans_400.fontSize};
    font-weight: ${TextTheme.sans_400.fontWeight};
    line-height: ${TextTheme.sans_400.lineHeight};
    margin: 0;
`;

export const SearchBarClearButton = styled.button`
    min-width: 20px;
    min-height: 20px;
    border-radius: 50%;
    background: ${ColorTheme.Grey3.color};
    margin: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${ColorTheme.Grey2.color};
    padding: 0;
`;
