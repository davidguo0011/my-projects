import {
    ConversationTitleWrapper,
    ConversationTitleBackButton,
    ConversationTitleIcon,
    ConversationTitle,
    ConversationBookingRequestMobileHeaderHostPhoneBtn,
    ConversationCallIcon,
} from "../conversationStyling";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { BookingRequestModel } from "../../../interfaces/models/bookingRequestModel";
import { ListingModel } from "../../../interfaces/models/listingModel";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import BackBtn from "../../../components/btn/backBtn/backBtn";
interface ExtendedBookingRequest extends BookingRequestModel {
    expired: boolean;
    checkInTime: number;
    checkOutTime: number;
    ListingModel: ListingModel;
}

interface TopNavHeaderProps {
    listingOwnerData: {
        firstName: string;
        phone: string;
    } | null;
    bookingRequest: ExtendedBookingRequest | null;
}

export default function TopNavHeader({ listingOwnerData, bookingRequest }: TopNavHeaderProps) {
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const navigate = useNavigate();
    return (
        <ConversationTitleWrapper>
            <BackBtn
                onClick={() => {
                    navigate(`/your-inbox/${userModel!.id}`);
                }}
                type="Arrow"
            />
            {listingOwnerData && (
                <>
                    <ConversationTitle>{listingOwnerData.firstName}</ConversationTitle>
                    <ConversationBookingRequestMobileHeaderHostPhoneBtn href={`tel:${listingOwnerData.phone}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21.6858 16.5986C21.6652 16.478 21.6385 16.3585 21.6058 16.2406C21.5132 15.9282 21.3338 15.6485 
                        21.0884 15.4342C20.843 15.2198 20.5418 15.0795 20.2198 15.0296L15.8878 14.3086C15.5777 
                        14.2551 15.2588 14.2865 14.965 14.3993C14.6712 14.5121 14.4134 14.7023 14.2188 
                        14.9496C14.1648 15.0186 14.1128 15.0886 14.0648 15.1606C14.0296 15.2225 13.9736 15.2698 
                        13.9067 15.2942C13.8399 15.3186 13.7665 15.3184 13.6998 15.2936C11.4577 14.3238 9.66961 
                        12.5358 8.69981 10.2936C8.67581 10.2279 8.67557 10.1558 8.69913 10.0898C8.72269 10.0239 8.76857 
                        9.9683 8.82881 9.93264C8.92381 9.86864 9.01481 9.80064 9.10481 9.73264C9.34463 9.53754 9.5291 
                        9.28298 9.63982 8.99434C9.75054 8.70569 9.78364 8.39306 9.73581 8.08764L9.06781 3.83164C9.02021 
                        3.5149 8.88591 3.2175 8.67977 2.97236C8.47363 2.72721 8.20369 2.54388 7.89981 2.44264C7.73374 
                        2.38819 7.56397 2.34574 7.39181 2.31564C6.76329 2.20436 6.11785 2.23487 5.50263 2.40493C4.88741
                         2.575 4.31794 2.88034 3.83581 3.29864C3.3221 3.73777 2.91321 4.28633 2.63911 4.90407C2.36502 
                         5.52182 2.23269 6.19308 2.25181 6.86864C2.35658 10.7805 3.95707 14.5034 6.7238 17.2709C9.49054 
                         20.0383 13.213 21.6398 17.1248 21.7456C17.1658 21.7456 17.2068 21.7456 17.2478 21.7456C17.8993 
                         21.7457 18.5432 21.6049 19.1352 21.3328C19.7272 21.0608 20.2535 20.664 20.6778 20.1696C21.1009 
                         19.6869 21.4109 19.1158 21.5853 18.498C21.7596 17.8803 21.794 17.2314 21.6858 16.5986ZM19.5438 
                         19.1916C19.2482 19.5303 18.882 19.8002 18.4711 19.9825C18.0601 20.1647 17.6143 20.2549 17.1648 
                         20.2466C13.6372 20.151 10.2805 18.7069 7.78528 16.2115C5.29008 13.7161 3.84623 10.3592 3.75081 
                         6.83164C3.73845 6.379 3.82739 5.92931 4.01113 5.51546C4.19487 5.1016 4.46877 4.73404 4.81281 
                         4.43964C5.31554 3.99663 5.96176 3.75079 6.63181 3.74764C6.79944 3.74773 6.96674 3.76245 7.13181 3.79164C7.23342 
                         3.80969 7.33366 3.83475 7.43181 3.86664C7.47421 3.88202 7.51152 3.90886 7.53958 3.94416C7.56765 
                         3.97947 7.58539 4.02186 7.59081 4.06664L8.26181 8.32164C8.26893 8.36664 8.26419 8.41273 8.24806 
                         8.45534C8.23193 8.49796 8.20496 8.53563 8.16981 8.56464C8.11181 8.61164 8.05281 8.65564 7.99181
                          8.69764C7.63908 8.92679 7.37907 9.27363 7.25804 9.67647C7.137 10.0793 7.16279 10.512 7.33081 
                          10.8976C8.45164 13.484 10.514 15.5475 13.0998 16.6696C13.4861 16.8353 13.9183 16.8596 14.3207 
                          16.7382C14.7231 16.6167 15.0697 16.3574 15.2998 16.0056C15.3298 15.9616 15.3608 15.9186 15.3948 
                          15.8756C15.4241 15.8411 15.462 15.8147 15.5046 15.7993C15.5472 15.7839 15.5932 15.7798 15.6378 
                          15.7876L19.9698 16.5086C20.0105 16.5126 20.0494 16.5274 20.0825 16.5515C20.1156 16.5756 20.1416 
                          16.6081 20.1578 16.6456C20.1748 16.7076 20.1908 16.7766 20.2048 16.8556C20.2748 17.2697 20.2519 
                          17.6941 20.1375 18.0981C20.0232 18.5022 19.8204 18.8757 19.5438 19.1916Z"
                                fill={bookingRequest!.completed ? ColorTheme.Black.color : ColorTheme.Grey1.color}
                            />
                        </svg>
                    </ConversationBookingRequestMobileHeaderHostPhoneBtn>
                </>
            )}
        </ConversationTitleWrapper>
    );
}
