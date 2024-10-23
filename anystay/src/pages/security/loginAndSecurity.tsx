import { useEffect, useState, useCallback } from "react";
import { callApi } from "../../utils/api/api";
import {
    LoginAndSecurityWrapper,
    LoginAndSecurityContainer,
    LoginAndSecurityTitleWrapper,
    LoginAndSecurityTitle,
    LoginAndSecuritySectionTitle,
    LoginAndSecuritySectionInputWrapper,
    LoginAndSecuritySectionInputTitleWrapper,
    LoginAndSecuritySectionInputTitle,
    LoginAndSecuritySectionInputLink,
    LoginAndSecuritySectionInputValue,
    LoginAndSecurityDesktopMenu,
    DesktopMenuItemIcon,
    DesktopMenuItemText,
    LoginAndSecurityTitleLink,
    ProfileEditProfileButtonIcon,
    LoginAndSecurityConnectedService,
    LoginAndSecurityConnectedServiceImg,
    LoginAndSecurityConnectedServicesWrapper,
    LoginAndSecurityConnectedServiceTitle,
    LoginAndSecurityNoConnectedServiceTitle,
    LoginAndSecurityNoConnectedServiceSubtitle,
    LoginAndSecurityNoConnectedServiceWrapper,
    LoginAndSecuritySectionInputHoverWrapper,
    LoginAndSecurityContentWrapper,
} from "./loginAndSecurityStyling";

import ResetPasswordTab from "./popups/ResetPasswordTab";
import ChangePasswordForgotPasswordTab from "./popups/ChangePasswordForgotPasswordTab";
import DeactivateAccountPopup from "./popups/DeactivateAccountPopup";
import DeactivateAccountFailedPopup from "./popups/DeactivateAccountFailedPopup";
import InlineTextLoading from "../../components/spinner/inlineTextLoading/InlineTextLoading";
import HandleConnectedServicePopup from "./popups/HandleConnectedServicePopup";
import { userModelSelector } from "../../state/selectors/userModel";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { userSelector } from "../../state/selectors/user";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import HelmetTags from "../../components/Helmet/HelmetTags";
import DeleteConfirmationPopup from "../../components/deleteConfirmationPopup/DeleteConfirmationPopup";
import { UserModel } from "../../interfaces/models/userModel";
import { ExtendedCognitoUser } from "../../interfaces/models/user";
import { CodeDeliveryDetails } from "../../interfaces/state/codeDeliveryDetails";
import BackBtn from "../../components/btn/backBtn/backBtn";

interface CheckUserDeactivatedApiResponse {
    success: boolean;
    message: string;
    body: {
        canDeactivate: boolean;
    };
}

interface GetHostawayDetailsApiResponse {
    success: boolean;
    message: string;
    body: {
        hostawayKey: string;
        hostawaySecret: string;
    };
}

interface DeleteHostawayDetailsApiReponse {
    success: boolean;
    message: string;
}

const LoginAndSecurity: React.FC = () => {
    const [userModel, setUserModel] = useRecoilState<UserModel | null>(userModelSelector);
    const [user, setUser] = useRecoilState<ExtendedCognitoUser | null>(userSelector);
    const [accessToken, setAccessToken] = useRecoilState<string>(accessTokenSelector);
    const navigate = useNavigate();
    const [popupName, setPopupName] = useState("");

    const [codeDeliveryDetails, setCodeDeliveryDetails] = useState<CodeDeliveryDetails | null>(null);

    const [loading, setLoading] = useState<boolean>(false);

    const deactivatePopupCards = async () => {
        setPopupName("");
        document.body.style.overflow = "unset";
    };

    const activateCard = (name: string) => {
        setPopupName(name);
        document.body.style.overflow = "hidden";
    };

    const [hostawayKey, setHostawayKey] = useState<string>("");
    const [hostawaySecret, setHostawaySecret] = useState<string>("");

    const checkDeactivateAccount = async (): Promise<void> => {
        try {
            const res: CheckUserDeactivatedApiResponse = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-user`, "user/deactivate/check", {
                headers: {
                    Authorization: accessToken,
                },
            });
            if (res.success) {
                if (res.body.canDeactivate) {
                    activateCard("deactivateAccount");
                } else {
                    activateCard("deactivateAccountFailed");
                }
            }
        } catch (err: any) {
            console.error(err);
            throw new Error("error checking deactivated account: ", err.message);
        }
    };
    const getDataFromService = useCallback(async (): Promise<void> => {
        try {
            const res: GetHostawayDetailsApiResponse = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-hostaway`, `hostaway/details`, {
                headers: {
                    Authorization: accessToken,
                },
            });
            if (res.success) {
                setHostawayKey(res.body.hostawayKey);
                setHostawaySecret(res.body.hostawaySecret);
            }
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }, [accessToken]);

    useEffect(() => {
        getDataFromService();
    }, [getDataFromService]);

    const disconnectService = async (): Promise<void> => {
        try {
            const res: DeleteHostawayDetailsApiReponse = await callApi("del", `${process.env.REACT_APP_ENV}-anystay-hostaway`, `hostaway/details`, {
                headers: {
                    Authorization: accessToken,
                },
            });
            if (res.success) {
                setHostawayKey("");
                setHostawaySecret("");
                deactivatePopupCards();
            }
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    if (!userModel) {
        return null;
    }

    return (
        <>
            <HelmetTags title="Security | Anystay" />
            <LoginAndSecurityWrapper>
                <LoginAndSecurityTitleWrapper>
                    <BackBtn onClick={handleBack} type="Arrow" mobileTop={24} mobileLeft={24} />
                    <LoginAndSecurityTitle>Login & sharing</LoginAndSecurityTitle>
                </LoginAndSecurityTitleWrapper>

                <LoginAndSecurityContentWrapper>
                    <LoginAndSecurityContainer>
                        <LoginAndSecuritySectionTitle>Login</LoginAndSecuritySectionTitle>

                        <LoginAndSecuritySectionInputHoverWrapper>
                            <LoginAndSecuritySectionInputWrapper onClick={() => activateCard("changePassword")}>
                                <LoginAndSecuritySectionInputTitleWrapper>
                                    <LoginAndSecuritySectionInputTitle>Password</LoginAndSecuritySectionInputTitle>
                                    <LoginAndSecuritySectionInputLink onClick={() => activateCard("changePassword")}>Reset</LoginAndSecuritySectionInputLink>
                                </LoginAndSecuritySectionInputTitleWrapper>
                                <LoginAndSecuritySectionInputValue>Never share your password!</LoginAndSecuritySectionInputValue>
                            </LoginAndSecuritySectionInputWrapper>
                        </LoginAndSecuritySectionInputHoverWrapper>

                        <LoginAndSecuritySectionInputHoverWrapper>
                            <LoginAndSecuritySectionInputWrapper
                                onClick={async () => {
                                    if (loading) {
                                        return;
                                    } else {
                                        setLoading(true);
                                        await checkDeactivateAccount();
                                        setLoading(false);
                                    }
                                }}
                            >
                                <LoginAndSecuritySectionInputTitleWrapper>
                                    <LoginAndSecuritySectionInputTitle>Account</LoginAndSecuritySectionInputTitle>
                                    {loading ? (
                                        <InlineTextLoading />
                                    ) : (
                                        <LoginAndSecuritySectionInputLink
                                            onClick={async (event) => {
                                                event.stopPropagation();
                                                setLoading(true);
                                                await checkDeactivateAccount();
                                                setLoading(false);
                                            }}
                                        >
                                            Deactivate
                                        </LoginAndSecuritySectionInputLink>
                                    )}
                                </LoginAndSecuritySectionInputTitleWrapper>
                                <LoginAndSecuritySectionInputValue>Your account is active</LoginAndSecuritySectionInputValue>
                            </LoginAndSecuritySectionInputWrapper>
                        </LoginAndSecuritySectionInputHoverWrapper>
                        <LoginAndSecuritySectionTitle>Connected services</LoginAndSecuritySectionTitle>
                        <LoginAndSecurityConnectedServicesWrapper>
                            {hostawayKey && hostawaySecret && (
                                <LoginAndSecurityConnectedService onClick={() => activateCard("handleConnectedService")}>
                                    <LoginAndSecurityConnectedServiceImg src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Hostaway.svg" alt="hostaway logo" />
                                    <LoginAndSecurityConnectedServiceTitle>Hostaway</LoginAndSecurityConnectedServiceTitle>
                                </LoginAndSecurityConnectedService>
                            )}
                            {/* {hostawayKey && hostawaySecret && (
                                <LoginAndSecurityConnectedService onClick={() => activateCard("handleConnectedService")}>
                                    <LoginAndSecurityConnectedServiceImg src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Lodgify.svg" alt="hostaway logo" />
                                    <LoginAndSecurityConnectedServiceTitle>Lodgify</LoginAndSecurityConnectedServiceTitle>
                                </LoginAndSecurityConnectedService>
                            )}
                            {hostawayKey && hostawaySecret && (
                                <LoginAndSecurityConnectedService onClick={() => activateCard("handleConnectedService")}>
                                    <LoginAndSecurityConnectedServiceImg src="https://d292awxalydr86.cloudfront.net/Branding/Partners/Hospitable.svg" alt="hostaway logo" />
                                    <LoginAndSecurityConnectedServiceTitle>Hospitable</LoginAndSecurityConnectedServiceTitle>
                                </LoginAndSecurityConnectedService>
                            )} */}
                            {!(hostawayKey && hostawaySecret) && (
                                <LoginAndSecurityNoConnectedServiceWrapper>
                                    <LoginAndSecurityNoConnectedServiceTitle>No connected services</LoginAndSecurityNoConnectedServiceTitle>
                                    <LoginAndSecurityNoConnectedServiceSubtitle>Your third party connections will appear here</LoginAndSecurityNoConnectedServiceSubtitle>
                                </LoginAndSecurityNoConnectedServiceWrapper>
                            )}
                        </LoginAndSecurityConnectedServicesWrapper>
                    </LoginAndSecurityContainer>
                    {/* titleText, subtitleText, closeModal, submitFunc, cancelBtnText, submitBtnText, backFunc */}
                    <LoginAndSecurityDesktopMenu>
                        <DesktopMenuItemIcon src={"https://d292awxalydr86.cloudfront.net/Settings+page/Profile.svg"} alt={"Profile icon"} />
                        <DesktopMenuItemText>Don't share your password with anyone, we will never ask for it.</DesktopMenuItemText>
                    </LoginAndSecurityDesktopMenu>
                </LoginAndSecurityContentWrapper>

                {popupName === "changePassword" && <ChangePasswordForgotPasswordTab activateCard={activateCard} deactivatePopupCards={deactivatePopupCards} />}
                {popupName === "resetPassword" && (
                    <ResetPasswordTab
                        updateCodeDeliveryDetails={(value) => setCodeDeliveryDetails(value)}
                        popupName={popupName}
                        deactivatePopupCards={deactivatePopupCards}
                        codeDeliveryDetails={codeDeliveryDetails}
                    />
                )}

                {popupName === "deactivateAccount" && <DeactivateAccountPopup accessToken={accessToken} deactivatePopupCards={deactivatePopupCards} />}

                {popupName === "deactivateAccountFailed" && <DeactivateAccountFailedPopup deactivatePopupCards={deactivatePopupCards} />}
                {popupName === "handleConnectedService" && (
                    <HandleConnectedServicePopup deactivatePopupCards={deactivatePopupCards} activateCard={activateCard} hostawayKey={hostawayKey} hostawaySecret={hostawaySecret} />
                )}

                {popupName === "confirmDisconnectPopup" && (
                    <DeleteConfirmationPopup
                        titleText={"Disconnect Hostaway?"}
                        subtitleText={"You will no longer be able to update your listings and calendar."}
                        closeModal={() => {
                            deactivatePopupCards();
                        }}
                        submitFunc={disconnectService}
                        activateCard={activateCard}
                    />
                )}
            </LoginAndSecurityWrapper>
        </>
    );
};

export default LoginAndSecurity;
