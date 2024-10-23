import { useState, Fragment } from "react";
import { ProfileListingsTitle, ProfileContentWrapper, ProfileDescriptionSocialIcon } from "../profileStyling";
import ProfileListingResults from "./ProfileListingResults/ProfileListingResults";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { UserModel } from "../../../interfaces/models/userModel";
import {
    ProfileDescriptionButton,
    ProfileDescriptionContainer,
    ProfileDescriptionSocial,
    ProfileDescriptionSocialsWrapper,
    ProfileDescriptionText,
    ProfileDescriptionWrapper,
} from "../../profile/profileStyling";

interface ProfileDescriptionProps {
    listings: any[];
    userModel: UserModel;
}

const ProfileDescription: React.FC<ProfileDescriptionProps> = ({ listings, userModel }) => {
    const [descriptionActive, setDescriptionActive] = useState<boolean>(false);
    // const [userModel, setUserModel] = useRecoilState(userModelSelector);

    // handleClick = () => {
    //     this.setState({descriptionActive: !this.state.descriptionActive})

    //     if (this.state.descriptionActive) {
    //         this.setState({currentDescription: this.state.description})
    //     } else {
    //         let newDescription = `${this.state.description.slice(0, 144)}...`
    //         this.setState({currentDescription: newDescription})
    //     }
    // }
    return (
        <Fragment>
            <ProfileDescriptionContainer>
                <ProfileDescriptionWrapper>
                    <ProfileDescriptionSocialsWrapper>
                        {userModel.instagramURL && (
                            <ProfileDescriptionSocial target="_blank" href={`https://www.instagram.com/${userModel.instagramURL}/`}>
                                <ProfileDescriptionSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Instagram.svg"} alt="" />
                            </ProfileDescriptionSocial>
                        )}
                        {userModel.facebookURL && (
                            <ProfileDescriptionSocial target="_blank" href={`https://www.facebook.com/${userModel.facebookURL}`}>
                                <ProfileDescriptionSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg"} alt="" />
                            </ProfileDescriptionSocial>
                        )}
                        {userModel.twitterURL && (
                            <ProfileDescriptionSocial target="_blank" href={`https://twitter.com/${userModel.twitterURL}`}>
                                <ProfileDescriptionSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg"} alt="" />
                            </ProfileDescriptionSocial>
                        )}
                        {userModel.tiktokURL && (
                            <ProfileDescriptionSocial target="_blank" href={`https://www.tiktok.com/@${userModel.tiktokURL}`}>
                                <ProfileDescriptionSocialIcon src={"https://d292awxalydr86.cloudfront.net/Social-Icons/Tiktok.svg"} alt="" />
                            </ProfileDescriptionSocial>
                        )}
                    </ProfileDescriptionSocialsWrapper>

                    {userModel.profileDescription === "" || userModel.profileDescription === null ? (
                        <ProfileDescriptionText>
                            <strong>{`${userModel.firstName} hasn’t written about them yet.`}</strong>
                            {` Don’t worry, you can still message them to ask questions or see what they’re like.`}
                        </ProfileDescriptionText>
                    ) : descriptionActive ? (
                        <ProfileDescriptionText>
                            {`${userModel.profileDescription} `}
                            {userModel.profileDescription.length > 244 && (
                                <ProfileDescriptionButton type="button" onClick={() => setDescriptionActive(false)}>
                                    Read less
                                </ProfileDescriptionButton>
                            )}
                        </ProfileDescriptionText>
                    ) : (
                        <ProfileDescriptionText>
                            {`${userModel.profileDescription.substring(0, 244)}${userModel.profileDescription.length > 244 ? "..." : ""} `}
                            {userModel.profileDescription.length > 244 && (
                                <ProfileDescriptionButton type="button" onClick={() => setDescriptionActive(true)}>
                                    Read more
                                </ProfileDescriptionButton>
                            )}
                        </ProfileDescriptionText>
                    )}
                    {/* <ProfileDescriptionButton type="button" onClick={() => this.handleClick()} >{this.state.descriptionActive ?  'Read more' : 'Read less'}</ProfileDescriptionButton> */}
                </ProfileDescriptionWrapper>
                {listings.length > 0 && (
                    <ProfileContentWrapper>
                        <ProfileListingsTitle>{listings.length} listings</ProfileListingsTitle>
                        <ProfileListingResults listings={listings} />
                    </ProfileContentWrapper>
                )}
                {/* <ProfileDescriptionWrapperReviews>
                        <ProfileDescriptionTitle>Reviews</ProfileDescriptionTitle>
                        <ProfileDescriptionText><strong>{this.props.name} has no reviews yet.</strong> You can help us welcome a new member to the community.</ProfileDescriptionText>
                    </ProfileDescriptionWrapperReviews> */}
            </ProfileDescriptionContainer>
        </Fragment>
    );
};

export default ProfileDescription;
