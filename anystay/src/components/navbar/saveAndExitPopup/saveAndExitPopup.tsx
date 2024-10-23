import { useState } from "react";
import {
    SaveAndExitPopupWrapper,
    SaveAndExitPopupContent,
    SaveAndExitPopupContentTitle,
    SaveAndExitPopupContentSubtitle,
    SaveAndExitPopupContentImage,
    SaveAndExitPopupButtonWrapper,
    SaveAndExitPopupCancelButton,
} from "../desktopNavbar/navbarStyling";
import ContinueBtn from "../../btn/continueBtn/continueBtn";

import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { draftListingSelector } from "../../../state/selectors/draftListing";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import useClickOutside from "../../../hook/useClickOutside";
import { useNavigate } from "react-router-dom";
import AnimationWrapperForPopup from "../../animationWrapper/AnimationWrapperForPopup";
import { callApi } from "../../../utils/api/api";
import { UserHostModel } from "../../../interfaces/models/userHostModel";

function SaveAndExitPopup({ activated, closeSaveAndExitPopup }: { activated: boolean; closeSaveAndExitPopup: () => void }) {
    const wrapperRef = useClickOutside(activated, closeSaveAndExitPopup);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [draftListing, setDraftListing] = useRecoilState(draftListingSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const navigate = useNavigate();

    const createListingDraft = async () => {
        if (draftListing.draftListing) {
            if (draftListing.listingID) {
                await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `draft/${draftListing.listingID}`, {
                    headers: {
                        Authorization: accessToken,
                        listingID: draftListing.listingID,
                    },
                    body: {
                        newListingData: draftListing.draftListing,
                    },
                })
                    .then((res) => {
                        const draftDetail = {
                            ...draftListing.draftListing,
                            id: res.body.updateListing.id,
                        };
                        if (userHostModel) {
                            const userHostModelCopy = JSON.parse(JSON.stringify(userHostModel));
                            userHostModelCopy.ListingModels.items = [...userHostModelCopy.ListingModels.items, draftDetail];
                            setUserHostModel(userHostModelCopy);
                            navigate(`/your-listings/${userHostModel.id}`);
                        }
                    })
                    .catch((err) => console.log(err));
            } else {
                await callApi("put", `${process.env.REACT_APP_ENV}-anystay-listing`, "draft", {
                    headers: {
                        Authorization: accessToken,
                    },
                    body: {
                        newListingData: draftListing.draftListing,
                    },
                })
                    .then((res) => {
                        const draftDetail = {
                            ...draftListing.draftListing,
                            id: res.body.createListing.id,
                        };
                        if (userHostModel) {
                            const userHostModelCopy = JSON.parse(JSON.stringify(userHostModel));
                            userHostModelCopy.ListingModels.items = [...userHostModelCopy.ListingModels.items, draftDetail];
                            setUserHostModel(userHostModelCopy);
                            navigate(`/your-listings/${userHostModel.id}`);
                        }
                    })
                    .catch((err) => console.log(err));
            }
        }
    };

    return (
        <AnimationWrapperForPopup>
            <SaveAndExitPopupWrapper ref={wrapperRef}>
                <div></div>
                <SaveAndExitPopupContent>
                    <SaveAndExitPopupContentImage src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg"} alt={"Tick icon"} />
                    <SaveAndExitPopupContentTitle>Draft saved</SaveAndExitPopupContentTitle>
                    <SaveAndExitPopupContentSubtitle>You can return to it at any time from your listings.</SaveAndExitPopupContentSubtitle>
                </SaveAndExitPopupContent>
                <SaveAndExitPopupButtonWrapper>
                    <SaveAndExitPopupCancelButton onClick={() => closeSaveAndExitPopup()} type="button">
                        Cancel
                    </SaveAndExitPopupCancelButton>
                    <ContinueBtn
                        background={"black"}
                        style={{ width: "unset" }}
                        disabled={isContinueBtnLoading}
                        isLoading={isContinueBtnLoading}
                        onClick={async () => {
                            setIsContinueBtnLoading(true);
                            await createListingDraft();
                            closeSaveAndExitPopup();
                        }}
                    >
                        Exit
                    </ContinueBtn>
                </SaveAndExitPopupButtonWrapper>
            </SaveAndExitPopupWrapper>
        </AnimationWrapperForPopup>
    );
}

export default SaveAndExitPopup;
