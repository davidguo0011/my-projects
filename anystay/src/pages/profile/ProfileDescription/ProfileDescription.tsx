import { Fragment, useState } from "react";
import {
    ProfileDescriptionWrapper,
    ProfileDescriptionText,
    ProfileDescriptionButton,
    ProfileDescriptionContainer,
    ProfileDescriptionSocialsWrapper,
    ProfileDescriptionSocial,
    ProfileDescriptionSocialIcon,
} from "../profileStyling";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { UserModel } from "../../../interfaces/models/userModel";

interface ProfileDescriptionProps {
    guestUserModel: UserModel;
}

const ProfileDescription: React.FC<ProfileDescriptionProps> = ({ guestUserModel }) => {
    const [descriptionActive, setDescriptionActive] = useState<boolean>(false);
    const [userModel, setUserModel] = useRecoilState<UserModel | null>(userModelSelector);

    return (
        <Fragment>
            <ProfileDescriptionContainer>
                <ProfileDescriptionWrapper>
                    <ProfileDescriptionSocialsWrapper>
                        {userModel?.instagramURL && (
                            <ProfileDescriptionSocial target="_blank" href={`https://www.instagram.com/${userModel?.instagramURL}/`}>
                                <ProfileDescriptionSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Instagram.svg"} alt="" />
                            </ProfileDescriptionSocial>
                        )}
                        {userModel?.facebookURL && (
                            <ProfileDescriptionSocial target="_blank" href={`https://www.facebook.com/${userModel?.facebookURL}`}>
                                <ProfileDescriptionSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg"} alt="" />
                            </ProfileDescriptionSocial>
                        )}
                        {userModel?.twitterURL && (
                            <ProfileDescriptionSocial target="_blank" href={`https://twitter.com/${userModel?.twitterURL}`}>
                                <ProfileDescriptionSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg"} alt="" />
                            </ProfileDescriptionSocial>
                        )}
                        {userModel?.tiktokURL && (
                            <ProfileDescriptionSocial target="_blank" href={`https://www.tiktok.com/@${userModel?.tiktokURL}`}>
                                <ProfileDescriptionSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Tiktok.svg"} alt="" />
                            </ProfileDescriptionSocial>
                        )}
                    </ProfileDescriptionSocialsWrapper>
                    {/* {!(userModel.instagramURL || userModel.facebookURL || userModel.twitterURL || userModel.tiktokURL) &&
                            <ProfileDescriptionTitle>Bio</ProfileDescriptionTitle>
                        } */}
                    {userModel?.profileDescription === "" || userModel?.profileDescription === null ? (
                        <ProfileDescriptionText>
                            <strong>{`${guestUserModel.firstName} hasn’t written about them yet.`}</strong>
                            {` Don’t worry, you can still message them to ask questions or see what they’re like.`}
                        </ProfileDescriptionText>
                    ) : descriptionActive ? (
                        <ProfileDescriptionText>
                            {`${userModel?.profileDescription} `}
                            {userModel?.profileDescription && userModel.profileDescription.length > 244 && (
                                <ProfileDescriptionButton
                                    type="button"
                                    onClick={() => {
                                        setDescriptionActive(false);
                                    }}
                                >
                                    Read less
                                </ProfileDescriptionButton>
                            )}
                        </ProfileDescriptionText>
                    ) : (
                        <ProfileDescriptionText>
                            {`${userModel?.profileDescription.substring(0, 244)}${userModel?.profileDescription && userModel.profileDescription.length > 244 ? "..." : ""} `}
                            {userModel?.profileDescription && userModel.profileDescription.length > 244 && (
                                <ProfileDescriptionButton
                                    type="button"
                                    onClick={() => {
                                        setDescriptionActive(true);
                                    }}
                                >
                                    Read more
                                </ProfileDescriptionButton>
                            )}
                        </ProfileDescriptionText>
                    )}
                </ProfileDescriptionWrapper>
            </ProfileDescriptionContainer>
        </Fragment>
    );
};

export default ProfileDescription;
