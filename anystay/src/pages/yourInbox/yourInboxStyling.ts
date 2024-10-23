import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextTheme, ButtonTheme, ColorTheme, BorderRadiusTheme, SpacingTheme } from "../../components/globaStyledComponents/globalStyledComponentsStyling";

export const YourInboxContainer = styled.div`
    width: calc(100% - 48px);
    height: 100dvh;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 24px;
    padding-bottom: 100px;
    //disable scrollbar
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const YourInboxTitle = styled.h1`
    font-size: ${TextTheme.sans_1000_semi.fontSize};
    line-height: ${TextTheme.sans_1000_semi.lineHeight};
    font-weight: ${TextTheme.sans_1000_semi.fontWeight};

    margin: 36px 0 12px;
    margin-right: auto;
`;

export const YourInboxNoStaysTitle = styled.p`
    font-size: ${TextTheme.sans_700_semi.fontSize};
    line-height: ${TextTheme.sans_700_semi.lineHeight};
    font-weight: ${TextTheme.sans_700_semi.fontWeight};
    color: ${ColorTheme.Grey1.color};
    margin: ${SpacingTheme.spacing_500.margin} 0 ${SpacingTheme.spacing_250.margin};
    margin-right: auto;
`;

export const YourInboxNoStaysSubtitle = styled.p`
    font-size: ${TextTheme.sans_500.fontSize};
    line-height: ${TextTheme.sans_500.lineHeight};
    font-weight: ${TextTheme.sans_500.fontWeight};
    color: ${ColorTheme.Grey1.color};
    max-width: 170px;
    margin: 0;
    margin-right: auto;

    @media (min-width: 768px) {
        max-width: 199px;
        font-size: ${TextTheme.sans_400.fontSize};
        line-height: ${TextTheme.sans_400.lineHeight};
    }
`;

export const YourInboxConversationWrapperLink = styled(Link)`
    text-decoration: none;
    border-top: 1px solid ${ColorTheme.Grey2.color};
    cursor: pointer;
`;

export const YourInboxCovnersationsWrapper = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
`;

export const LoadingWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const YourInboxConversationWrapper = styled(Link)`
    width: 100%;
    padding: ${SpacingTheme.spacing_300.padding} 0;
    text-decoration: none;
    display: flex;
    cursor: pointer;
`;

export const YourInboxGuestConversationImage = styled.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    border-radius: ${BorderRadiusTheme.radius_8.borderRadius};
    background: ${ColorTheme.Grey1.color};
`;

export const YourInboxHostConversationImage = styled.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    border-radius: ${BorderRadiusTheme.radius_100.borderRadius};
    background: ${ColorTheme.Grey1.color};
`;

export const YourInboxConversationTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    flex: 1;
`;

interface YourInboxConversationTextFirstNameProps {
    guestSeen?: boolean;
}
export const YourInboxConversationTextFirstName = styled.p<YourInboxConversationTextFirstNameProps>`
    font-size: ${TextTheme.sans_300_semi.fontSize};
    line-height: ${TextTheme.sans_300_semi.lineHeight};
    font-weight: ${(props) => (props.guestSeen ? TextTheme.sans_300.fontWeight : TextTheme.sans_300_semi.fontWeight)};

    margin: 0;
`;

export const YourInboxConversationTextMessage = styled.p<YourInboxConversationTextFirstNameProps>`
    font-size: ${TextTheme.sans_300.fontSize};
    font-weight: ${(props) => (props.guestSeen ? TextTheme.sans_300.fontWeight : TextTheme.sans_300_semi.fontWeight)};

    line-height: ${TextTheme.sans_300.lineHeight};
    margin: ${SpacingTheme.spacing_100.margin} 0;
`;

export const YourInboxConversationTextType = styled.p<YourInboxConversationTextFirstNameProps>`
    font-size: ${TextTheme.sans_200.fontSize};
    font-weight: ${(props) => (props.guestSeen ? TextTheme.sans_200.fontWeight : TextTheme.sans_200.fontWeight)};
    line-height: ${TextTheme.sans_200.lineHeight};
    color: ${ColorTheme.Grey.color};
    margin: 0;
`;

export const YourMessagesAddListingButton = styled(Link)`
    width: calc(100 - 48px);
    margin: 0 24px;
    height: 50px;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${ButtonTheme.sans_button_100.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    cursor: pointer;
    border-radius: 9px;
`;

export const YourMessagesAddListingDivider = styled.div`
    height: 1px;
    background: ${ColorTheme.Grey2.color};
    width: calc(100 - 48px);
    margin: ${SpacingTheme.spacing_400.margin};
`;

export const YourInboxExploreButton = styled(Link)`
    width: calc(100% - 48px);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    font-size: ${ButtonTheme.sans_button_100.fontSize};
    font-weight: ${TextTheme.sans_300_bold.fontWeight};
    text-decoration: none;
    line-height: ${ButtonTheme.sans_button_100.lineHeight};
    background: ${ColorTheme.Red.color};
    margin-top: auto;
    border: none;
    color: ${ColorTheme.White.color};
    position: absolute;
    bottom: 114px;
    cursor: pointer;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 0px;
        background: ${ColorTheme.Grey1.color};
        top: -24px;
    }
`;
