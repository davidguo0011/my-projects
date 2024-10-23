import { useNavigate } from "react-router-dom";
import CycleBtn from "../../components/btn/cycleBtn/cycleBtn";
import { NavbarCreateListingExitButton } from "../../components/navbar/desktopNavbar/navbarStyling";
import {
    ConnectWithChannelManagerDoneIcon,
    ConnectWithChannelManagerDoneTitle,
    ConnectWithChannelManagerDoneWrapper,
    ConnectWithChannelManagerIntroItemSubtitle,
    ConnectWithChannelManagerIntroItemTitle,
    CreateListingAddAddressTitle,
    CreateListingContainer,
    CreateListingHeaderWrapper,
    CreateListingNewListingQuestionsWrapper,
    CreateListingNewListingQuestionWrapper,
    CreateListingWrapper,
    NewListingBackButton,
    NewListingBackButtonArrow,
} from "../createListing/createListingStyling";
import { IntegrationResultSubTitle, IntegrationResultText, IntegrationResultTodoItem, IntegrationResultTodoItemsWrapper } from "./integrationResultStyling";
import { useRecoilState } from "recoil";
import { userHostModelSelector } from "../../state/selectors/userHostModel";

interface IntegrationResultProps {
    isSuccess: boolean | null;
    platform: string;
}

const IntegrationResult = ({ isSuccess, platform }: IntegrationResultProps) => {
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const navigate = useNavigate();
    return (
        <CreateListingContainer>
            <CreateListingHeaderWrapper>
                <NewListingBackButton
                    type="button"
                    onClick={() => {
                        navigate(`/create-listing/${userHostModel?.id}`, { state: { from: "integrationResult", platform: platform } });
                    }}
                >
                    <NewListingBackButtonArrow />
                </NewListingBackButton>

                <NavbarCreateListingExitButton
                    type="button"
                    onClick={() => {
                        navigate(`/your-listings/${userHostModel?.id}`);
                    }}
                >
                    Exit
                </NavbarCreateListingExitButton>
            </CreateListingHeaderWrapper>
            <CreateListingWrapper>
                <CreateListingNewListingQuestionsWrapper>
                    {isSuccess && platform === "hospitable" && (
                        <>
                            <CreateListingNewListingQuestionWrapper>
                                <CreateListingAddAddressTitle>What you’ll need to do</CreateListingAddAddressTitle>
                                <IntegrationResultSubTitle>Set up what won’t be synced</IntegrationResultSubTitle>
                            </CreateListingNewListingQuestionWrapper>
                            <IntegrationResultTodoItemsWrapper>
                                <IntegrationResultTodoItem>
                                    <ConnectWithChannelManagerIntroItemTitle>Cleaning fee</ConnectWithChannelManagerIntroItemTitle>
                                    <ConnectWithChannelManagerIntroItemSubtitle>Set your cleaning fee for each stay</ConnectWithChannelManagerIntroItemSubtitle>
                                </IntegrationResultTodoItem>
                                <IntegrationResultTodoItem>
                                    <ConnectWithChannelManagerIntroItemTitle>Deposit</ConnectWithChannelManagerIntroItemTitle>
                                    <ConnectWithChannelManagerIntroItemSubtitle>Set deposits you’re charging to guests</ConnectWithChannelManagerIntroItemSubtitle>
                                </IntegrationResultTodoItem>
                            </IntegrationResultTodoItemsWrapper>
                            <IntegrationResultSubTitle>What you need to know</IntegrationResultSubTitle>
                            <IntegrationResultText>You’ll have to respond to booking enquiries, messages and change requests from Anystay. </IntegrationResultText>
                        </>
                    )}
                    {isSuccess === false && (
                        <CreateListingNewListingQuestionWrapper>
                            <ConnectWithChannelManagerDoneWrapper>
                                <ConnectWithChannelManagerDoneIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg"} alt={"exclamation icon"} />
                                <ConnectWithChannelManagerDoneTitle>Something went wrong</ConnectWithChannelManagerDoneTitle>
                            </ConnectWithChannelManagerDoneWrapper>
                        </CreateListingNewListingQuestionWrapper>
                    )}
                </CreateListingNewListingQuestionsWrapper>
            </CreateListingWrapper>
            <CycleBtn
                isLoading={false}
                disabled={false}
                background={"black"}
                style={{ position: "absolute", right: `${window.innerWidth >= 768 ? "32px" : "24px"}`, bottom: `${window.innerWidth >= 768 ? "32px" : "24px"}` }}
                onClick={() => {
                    if (isSuccess === false) {
                        navigate(`/create-listing/${userHostModel!.id}`, { state: { from: "integrationResult", platform: platform } });
                    } else {
                        navigate(`/your-listings/${userHostModel!.id}`);
                    }
                }}
            />
        </CreateListingContainer>
    );
};

export default IntegrationResult;
