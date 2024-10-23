import styled from "styled-components";
export const ConversationInboxContainerLoadingWrapper = styled.div`
    grid-column: 1/2;
    grid-row: 1/4;
    width: 100%;
    max-height: calc(100% - 162px);
    overflow-y: scroll !important;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        display: none;
    }
`;
