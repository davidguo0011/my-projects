import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { guestModeSelector } from "../../state/selectors/userModel";
import { userModelSelector } from "../../state/selectors/userModel";
import { useRecoilState } from "recoil";

export default function CheckGuestMode() {
    const location = useLocation();
    const [guestMode, setGuestMode] = useRecoilState(guestModeSelector);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);

    useEffect(() => {
        if (!location.pathname || !userModel) return;

        if (
            location.pathname.includes("/settings") ||
            location.pathname.includes("/edit-profile") ||
            location.pathname.includes("/security-settings") ||
            location.pathname.includes("/payout-settings") ||
            location.pathname.includes("/payment-settings") ||
            location.pathname.includes("/referral-page") ||
            location.pathname.includes("/host/profile") ||
            location.pathname.includes("/guest/profile")
        )
            return;
        if (
            location.pathname.includes("/your-listings") ||
            location.pathname.includes("/your-calendar") ||
            location.pathname.includes("/create-listing") ||
            location.pathname.includes("/booking-request") ||
            location.pathname.includes("/booking-receipt") ||
            location.pathname.includes("/review-guest") ||
            location.pathname.includes("/your-host-inbox") ||
            location.pathname.includes("/host-conversation") ||
            location.pathname.includes("/edit-listing") ||
            location.pathname.includes("/dashboard") ||
            location.pathname.includes("/all-bookings") ||
            location.pathname.includes("/payouts") ||
            location.pathname.includes("/payment-details")
        ) {
            setGuestMode(false);
            return;
        }
        setGuestMode(true);
        //don't use userModel in dependency, will cause inifinite rerender
    }, [location, setGuestMode, userModel?.guestMode]);

    return <></>;
}
