import {
    ConversationMessageInputContentWrapper,
    BookingRequestButtonWrapper,
    BookingRequestDetailsButton,
    BookingRequestDetailsButtonComplete,
    // BookingRequestDetailsBtnComplete,
} from "../../conversationStyling";
import MessageInput from "./MessageInput/MessageInput";
import { BookingRequestModel } from "../../../../interfaces/models/bookingRequestModel";
import { ConversationModel } from "../../../../interfaces/models/conversationModel";
import { ListingModel } from "../../../../interfaces/models/listingModel";

interface MessageInputComponentProps {
    accessToken: string;
    addMessage: (message: any) => Promise<void>;
    scrollToBottomConversation: () => void;
    conversation: ConversationModel | null;
    bookingRequest: BookingRequestProps;
}

interface BookingRequestProps extends BookingRequestModel {
    ListingModel: ListingModel;
}

export default function MessageInputComponent({ accessToken, conversation, addMessage, scrollToBottomConversation, bookingRequest }: MessageInputComponentProps) {
    const currentDate = new Date();
    const arrivalDate = new Date(bookingRequest?.arrivalDate);
    // const departureDate = new Date(bookingRequest.departureDate);

    // const id = bookingRequest.ListingModel.id;
    // const [addDatesPopup, setAddDatesPopup] = useState(false);
    // const [listing, setListing] = useState(null);
    // const [dates, setDates] = useState({
    //     startDate: arrivalDate,
    //     endDate: departureDate,
    // });

    // const updateDates = async (date) => {
    //     setDates({ startDate: date[0], endDate: date[1] });
    //     await callApi("post", `${process.env.REACT_APP_ENV}-anystay-booking`, `conversation/${id}`, {
    //         headers: {
    //             Authorization: accessToken,
    //             conversationID: id,
    //         },
    //     })
    //         .then((res) => {})
    //         .catch((err) => console.log(err));
    // };
    // };

    // const initListing = useCallback(
    //     async (id, dates) => {
    //         try {
    //             let listingData = await callApi("get", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/${id}`, {
    //                 headers: {
    //                     Authorization: accessToken,
    //                 },
    //             });
    //             console.log("listingData", listingData);
    //             setListing(listingData.body.listing);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     },
    //     [accessToken]
    // );

    // useEffect(() => {
    //     const init = async () => {
    //         await initListing(id, dates);
    //     };
    //     init();
    // }, [dates, id, initListing]);
    // useEffect(() => {
    //     if (addDatesPopup) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "unset";
    //     }
    // }, [addDatesPopup]);

    return (
        <ConversationMessageInputContentWrapper>
            <MessageInput accessToken={accessToken} conversationmodelID={conversation!.id} addMessage={addMessage} scrollToBottomConversation={scrollToBottomConversation} />
            {bookingRequest &&
                (bookingRequest.completed ? (
                    <BookingRequestButtonWrapper>
                        <BookingRequestDetailsButton to={`/your-booking/${bookingRequest.id}`}>Details</BookingRequestDetailsButton>
                    </BookingRequestButtonWrapper>
                ) : currentDate > arrivalDate ? (
                    <BookingRequestButtonWrapper>
                        {/* <BookingRequestDetailsBtnComplete
                            onClick={() => {
                                setAddDatesPopup(true);
                            }}
                        >
                            Change date
                        </BookingRequestDetailsBtnComplete> */}
                    </BookingRequestButtonWrapper>
                ) : (
                    <BookingRequestButtonWrapper>
                        <BookingRequestDetailsButtonComplete to={`/complete-booking/${bookingRequest.id}`}>Complete booking</BookingRequestDetailsButtonComplete>
                    </BookingRequestButtonWrapper>
                ))}

            {/* {addDatesPopup && (
                <DatesPicker
                    // unavailableDates={unavailableDates}
                    startDate={dates.startDate}
                    endDate={dates.endDate}
                    listing={listing}
                    cancelFunc={() => {
                        setAddDatesPopup(!addDatesPopup);
                    }}
                    saveFunc={async (dateRange) => {
                        await updateDates(dateRange);
                    }}
                    handleClickOutside={() => {
                        setAddDatesPopup(!addDatesPopup);
                    }}
                />
            )} */}
        </ConversationMessageInputContentWrapper>
    );
}
