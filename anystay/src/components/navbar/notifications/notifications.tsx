import useClickOutside from "../../../hook/useClickOutside";
import {
    NotificationDropDownItem,
    NotificationDropDownItemImageWrapper,
    NotificationDropDownItemText,
    NotificationDropDownItemTime,
    NotificationDropDownNoContentSubTitle,
    NotificationDropDownNoContentTitle,
    NotificationDropDownNoContentWrapper,
    NotificationDropDownTitle,
    NotificationDropDownWrapper,
} from "../desktopNavbar/navbarStyling";

interface NotificationDropDownProps {
    notificationsPopup: boolean;
    closeNotificationDropDown: () => void;
    setNotificationsPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const NotificationDropDown = ({ notificationsPopup, closeNotificationDropDown, setNotificationsPopup }: NotificationDropDownProps) => {
    const wrapperRef = useClickOutside(
        notificationsPopup,
        () => {
            setNotificationsPopup(false);
        },
        true
    );
    return (
        <NotificationDropDownWrapper ref={wrapperRef}>
            <NotificationDropDownTitle>Notifications</NotificationDropDownTitle>
            {/* <NotificationDropDownItem onClick={() => closeNotificationDropDown()}>
                <NotificationDropDownItemImageWrapper></NotificationDropDownItemImageWrapper>
                <NotificationDropDownItemText>Anystay messaged you: “I understand you have issues checking in?” and what do you think?</NotificationDropDownItemText>
                <NotificationDropDownItemTime>1d</NotificationDropDownItemTime>
            </NotificationDropDownItem>
            <NotificationDropDownItem onClick={() => closeNotificationDropDown()}>
                <NotificationDropDownItemImageWrapper></NotificationDropDownItemImageWrapper>
                <NotificationDropDownItemText>Test 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 get</NotificationDropDownItemText>
                <NotificationDropDownItemTime>1d</NotificationDropDownItemTime>
            </NotificationDropDownItem>
            <NotificationDropDownItem onClick={() => closeNotificationDropDown()}>
                <NotificationDropDownItemImageWrapper></NotificationDropDownItemImageWrapper>
                <NotificationDropDownItemText>Hello 123</NotificationDropDownItemText>
                <NotificationDropDownItemTime>1d</NotificationDropDownItemTime>
            </NotificationDropDownItem> */}
            <NotificationDropDownNoContentWrapper>
                <NotificationDropDownNoContentTitle>No notifications</NotificationDropDownNoContentTitle>
                <NotificationDropDownNoContentSubTitle>Under construction...</NotificationDropDownNoContentSubTitle>
            </NotificationDropDownNoContentWrapper>
        </NotificationDropDownWrapper>
    );
};

export default NotificationDropDown;
