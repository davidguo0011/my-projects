import {
    ConversationTitleWrapper,
    ConversationTitleBackButton,
    ConversationTitleIcon,
    ConversationTitle,
    ConversationBookingRequestMobileHeaderHostPhoneBtn,
    ConversationCallIcon,
} from "../../conversation/conversationStyling";
import { useNavigate } from "react-router-dom";
import { userHostModelSelector } from "../../../state/selectors/userHostModel";
import { useRecoilState } from "recoil";
import BackBtn from "../../../components/btn/backBtn/backBtn";

interface BookingGuestData {
    firstName: string;
    phone: string;
}

interface TopNavHeaderProps {
    bookingGuestData: BookingGuestData | null;
}

export default function TopNavHeader({ bookingGuestData }: TopNavHeaderProps) {
    const navigate = useNavigate();
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);
    if (!bookingGuestData) return null;
    return (
        <ConversationTitleWrapper>
            <BackBtn
                onClick={() => {
                    navigate(`/your-host-inbox/${userHostModel!.id}`);
                }}
                type="Arrow"
            />
            <ConversationTitle>{bookingGuestData.firstName}</ConversationTitle>
            <ConversationBookingRequestMobileHeaderHostPhoneBtn href={`tel:${bookingGuestData.phone}`}>
                <ConversationCallIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Call.svg"} alt={"Call"} />
            </ConversationBookingRequestMobileHeaderHostPhoneBtn>
        </ConversationTitleWrapper>
    );
}
