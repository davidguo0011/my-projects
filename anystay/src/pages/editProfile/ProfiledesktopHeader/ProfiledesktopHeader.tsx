import {
    ProfileHeaderWrapper,
    ProfileHeaderTitleWrapper,
    ProfileHeaderTitle,
    ProfileDesktopHeaderWrapper,
    ProfileHeaderSubtitle,
    ProfileVerifiedWrapper,
    ProfileVerifiedContact,
    ProfileVerifiedContactIcon,
    ProfileVerifiedContactText,
    ProfileHeaderDesktopDivider,
    ProfileHeaderEditLink,
} from "../../profile/profileStyling";
import UploadProfilePhoto from "../ProfilePhoto/UploadProfilePhoto";
import { userModelSelector } from "../../../state/selectors/userModel";
import { stripeAccountSelector } from "../../../state/selectors/stripeAccount";
import { useRecoilState } from "recoil";

export default function ProfiledesktopHeader() {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [stripeAccount, setStripeAccount] = useRecoilState(stripeAccountSelector);
    if (!userModel) return null;
    return (
        <ProfileDesktopHeaderWrapper>
            <ProfileHeaderWrapper>
                <UploadProfilePhoto />
                <ProfileHeaderTitleWrapper>
                    <ProfileHeaderTitle>{userModel.firstName}</ProfileHeaderTitle>
                    <ProfileHeaderSubtitle>
                        {stripeAccount && stripeAccount?.individual?.verification!.status === "verified"
                            ? userModel.guestMode
                                ? "Verified guest"
                                : "Verified host"
                            : userModel.guestMode
                              ? (new Date(userModel.createdAt).getTime() - new Date().getTime()) / (1000 * 3600 * 24) <= 14
                                  ? "New guest"
                                  : "Guest"
                              : (new Date(userModel.createdAt).getTime() - new Date().getTime()) / (1000 * 3600 * 24) <= 14
                                ? "New host"
                                : "Host"}
                    </ProfileHeaderSubtitle>
                    <ProfileHeaderEditLink to={userModel.guestMode ? `/guest/profile/${userModel.id}` : `/host/profile/${userModel.id}`}>Go to profile</ProfileHeaderEditLink>
                </ProfileHeaderTitleWrapper>
            </ProfileHeaderWrapper>
            <ProfileHeaderDesktopDivider></ProfileHeaderDesktopDivider>
            <ProfileVerifiedWrapper>
                <ProfileVerifiedContact>
                    <ProfileVerifiedContactIcon
                        src={
                            stripeAccount && stripeAccount?.individual?.verification!.status === "verified"
                                ? "https://d292awxalydr86.cloudfront.net/Universal+icons/Identity.svg"
                                : "https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg"
                        }
                        alt={"Verified contact icon"}
                    />
                    <ProfileVerifiedContactText>{stripeAccount && stripeAccount?.individual?.verification!.status === "verified" ? "ID verified" : "ID unverified"}</ProfileVerifiedContactText>
                </ProfileVerifiedContact>
                <ProfileVerifiedContact>
                    <ProfileVerifiedContactIcon
                        src={
                            userModel.phoneConfirmed
                                ? "https://d292awxalydr86.cloudfront.net/Universal+icons/approved.svg"
                                : "https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg"
                        }
                        alt={"Verified contact icon"}
                    />
                    <ProfileVerifiedContactText>{userModel.phoneConfirmed ? "Phone verified" : "Phone unverified"}</ProfileVerifiedContactText>
                </ProfileVerifiedContact>
                <ProfileVerifiedContact>
                    <ProfileVerifiedContactIcon
                        src={
                            userModel.emailConfirmed
                                ? "https://d292awxalydr86.cloudfront.net/Universal+icons/approved.svg"
                                : "https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg"
                        }
                        alt={"Verified contact icon"}
                    />
                    <ProfileVerifiedContactText>{userModel.emailConfirmed ? "Email verified" : "Email unverified"}</ProfileVerifiedContactText>
                </ProfileVerifiedContact>
            </ProfileVerifiedWrapper>
        </ProfileDesktopHeaderWrapper>
    );
}
