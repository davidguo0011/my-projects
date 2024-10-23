import styled from "styled-components";
export const ConversationMessagesContainerLoadingWrapper = styled.div`
    grid-row: 3/4;
    grid-column: 1/2;
    width: 100%;
    max-height: calc(100% - 162px);
    overflow-y: scroll !important;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding-bottom: 132px;
    @media (min-width: 768px) {
        grid-column: 2/3;
        max-height: calc(100% - 110px);
    }
`;
