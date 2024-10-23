import { useState } from "react";
import {
    ProfileSocialMediaInputPopupWrapper,
    ProfileSocialMediaInputPopupBackButton,
    ProfileSocialMediaInputPopupBackIcon,
    ProfileSocialMediaInputPopupIcon,
    ProfileSocialMediaInputPopupTitle,
    ProfileSocialMediaInputPopupSubtitle,
    ProfileSocialMediaInput,
    ProfileSocialMediaPopupFooter,
    ProfileSocialMediaPopupCancelButton,
} from "../../security/loginAndSecurityStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import AnimationWrapperForPopup from "../../../components/animationWrapper/AnimationWrapperForPopup";
import { callApi } from "../../../utils/api/api";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import ContinueBtn from "../../../components/btn/continueBtn/continueBtn";

interface SocialMediaInputProps {
    selected: boolean;
    toggleSelected: () => void;
}

const SocialMediaInputTwitter: React.FC<SocialMediaInputProps> = ({ selected, toggleSelected }) => {
    const wrapperRef = useClickOutside(selected, () => {
        if (!isContinueBtnLoading) {
            toggleSelected();
        }
    });
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [url, setUrl] = useState(userModel?.twitterURL ? userModel.twitterURL : "");
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    const updateURL = async () => {
        try {
            await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/twitter", {
                headers: {
                    Authorization: accessToken,
                },
                body: {
                    twitterURL: url,
                },
            });

            const userModelCopy = JSON.parse(JSON.stringify(userModel));
            userModelCopy.twitterURL = url;
            setUserModel(userModelCopy);
            toggleSelected();
        } catch (err) {
            console.error(err);
            setIsContinueBtnLoading(false);
        }
    };

    return (
        <AnimationWrapperForPopup>
            <ProfileSocialMediaInputPopupWrapper ref={wrapperRef}>
                <ProfileSocialMediaInputPopupBackButton type="button" disabled={isContinueBtnLoading} onClick={toggleSelected}>
                    <ProfileSocialMediaInputPopupBackIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt="" />
                </ProfileSocialMediaInputPopupBackButton>
                <ProfileSocialMediaInputPopupIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg"} alt="" />
                <ProfileSocialMediaInputPopupTitle>Add your X</ProfileSocialMediaInputPopupTitle>
                <ProfileSocialMediaInputPopupSubtitle>Enter your X @ to show on your profile.</ProfileSocialMediaInputPopupSubtitle>
                <ProfileSocialMediaInput value={url} onChange={(e) => setUrl(e.target.value)} placeholder="AnystayApp" />
                <ProfileSocialMediaPopupFooter>
                    <ProfileSocialMediaPopupCancelButton type="button" disabled={isContinueBtnLoading} onClick={toggleSelected}>
                        Cancel
                    </ProfileSocialMediaPopupCancelButton>
                    <ContinueBtn
                        background={"black"}
                        style={{ width: "unset" }}
                        isLoading={isContinueBtnLoading}
                        disabled={isContinueBtnLoading}
                        onClick={() => {
                            setIsContinueBtnLoading(true);
                            updateURL();
                        }}
                    >
                        Add
                    </ContinueBtn>
                </ProfileSocialMediaPopupFooter>
            </ProfileSocialMediaInputPopupWrapper>
        </AnimationWrapperForPopup>
    );
};
export default SocialMediaInputTwitter;
