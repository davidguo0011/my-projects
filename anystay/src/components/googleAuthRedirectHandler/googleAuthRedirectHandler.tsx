import { Hub } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import { useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { pendingGoogleRedirectState } from "../../state/atoms/pendingGoogleRedirectState";

const GoogleAuthRedirectHandler = () => {
    const navigate = useNavigate();

    const userHostModel = useRecoilValue(userHostModelSelector);

    const setPendingGoogleRedirect = useSetRecoilState(pendingGoogleRedirectState);

    const [isProcessingAuth, setIsProcessingAuth] = useState(false);

    const handleRedirect = useRecoilCallback(
        ({ snapshot, set }) =>
            async (redirectURL: string) => {
                if (redirectURL === "/list-your-place") {
                    const userHostModelValue = await snapshot.getPromise(userHostModelSelector);
                    if (userHostModelValue && userHostModelValue.id) {
                        navigate(`/create-listing/${userHostModelValue.id}`);
                        set(pendingGoogleRedirectState, null);
                    } else {
                        set(pendingGoogleRedirectState, redirectURL);
                    }
                } else {
                    navigate(redirectURL);
                    set(pendingGoogleRedirectState, null);
                }
            },
        [navigate]
    );

    const checkPendingRedirect = useRecoilCallback(
        ({ snapshot }) =>
            async () => {
                const pendingRedirect = await snapshot.getPromise(pendingGoogleRedirectState);
                if (pendingRedirect === "/list-your-place" && userHostModel && userHostModel.id && !isProcessingAuth) {
                    navigate(`/create-listing/${userHostModel.id}`);
                    setPendingGoogleRedirect(null);
                }
            },
        [userHostModel, navigate, setPendingGoogleRedirect, isProcessingAuth]
    );

    useEffect(() => {
        const handleAuthStateChange = async (data: any) => {
            if (data.payload.event === "customOAuthState" && data.payload.data) {
                setIsProcessingAuth(true);
                try {
                    const customState = JSON.parse(data.payload.data);
                    if (customState.platform === "Google" && customState.redirectURL !== "/") {
                        handleRedirect(customState.redirectURL);
                        return;
                    }
                } catch (error) {
                    console.error("Error handling auth state change:", error);
                } finally {
                    setIsProcessingAuth(false);
                }
            }
        };

        const unsubscribe = Hub.listen("auth", handleAuthStateChange);

        return () => {
            unsubscribe();
        };
    }, [handleRedirect]);

    useEffect(() => {
        checkPendingRedirect();
    }, [checkPendingRedirect]);

    return null;
};

export default GoogleAuthRedirectHandler;
