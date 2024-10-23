import styled from "styled-components";
import { ColorTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
export const ConversationBookingRequestDesktopWrapperLoadingWrapper = styled.div`
    grid-row: 1/4;
    grid-column: 3/4;
    height: 100%;
    width: 100%;
    border-left: 1px solid ${ColorTheme.Grey2.color};
    padding: 44px 32px;
    padding-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
        display: none;
    }
`;
