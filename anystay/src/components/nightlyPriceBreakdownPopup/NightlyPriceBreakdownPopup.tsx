import { Wrapper, BreakdownContentWrapper, Text, Divider, SubText, CloseBtn, CloseWrapper, CloseButton } from "./NightlyPriceBreakdownPopupStyling";
import useClickOutside from "../../hook/useClickOutside";
import AnimationWrapperForPopup from "../animationWrapper/AnimationWrapperForPopup";
import { BookingDetail } from "../../interfaces/models/bookingDetail";

interface NightlyPriceBreakdownPopupProps {
    bookingDetails: BookingDetail;
    toggleModal: () => void;
}

interface Price {
    date: string;
    price: number;
    extraGuestFee?: number;
    extraGuests?: number;
}

const NightlyPriceBreakdownPopup: React.FC<NightlyPriceBreakdownPopupProps> = ({ bookingDetails, toggleModal }) => {
    const wrapperRef = useClickOutside(true, toggleModal, true);
    return (
        <>
            {window.innerWidth < 768 ? (
                <div
                    style={{
                        height: "100vh",
                        width: "100vw",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        zIndex: 101,
                        background: "rgba(0, 0, 0, 0.25)",
                        backdropFilter: "blur(0px)",
                    }}
                    id={"loading-full-page-small-modal"}
                    onClick={toggleModal}
                >
                    <AnimationWrapperForPopup>
                        <Wrapper>
                            <CloseWrapper>
                                <CloseBtn onClick={toggleModal} />
                            </CloseWrapper>
                            {bookingDetails.nights > 7 && (
                                <BreakdownContentWrapper>
                                    <Text>{`${bookingDetails.nights} nights at $${(bookingDetails.nightlyPrices.averagePrice / 100).toFixed(2)} average per night`}</Text>
                                </BreakdownContentWrapper>
                            )}
                            {bookingDetails.nights <= 7 && (
                                <>
                                    {bookingDetails.nightlyPrices.everydayPrices.map((price: Price) => {
                                        return (
                                            <BreakdownContentWrapper key={price.date}>
                                                <Text>{price.date}</Text>
                                                <Text>
                                                    $
                                                    {price.extraGuestFee
                                                        ? `${(price.price / 100).toFixed(2)} (+$${(price.extraGuestFee / 100).toFixed(2)} for ${price.extraGuests} extra guests)`
                                                        : (price.price / 100).toFixed(2)}
                                                </Text>
                                            </BreakdownContentWrapper>
                                        );
                                    })}
                                </>
                            )}
                            <Divider />
                            <SubText>
                                Price shown is your final price <br />
                                including taxes and fees.
                            </SubText>
                            <CloseButton onClick={toggleModal}>Done</CloseButton>
                        </Wrapper>
                    </AnimationWrapperForPopup>
                </div>
            ) : (
                <Wrapper onClick={toggleModal} ref={wrapperRef}>
                    <CloseWrapper>
                        <CloseBtn onClick={toggleModal} />
                    </CloseWrapper>
                    {bookingDetails.nights > 7 && <Text>{`${bookingDetails.nights} nights at $${(bookingDetails.nightlyPrices.averagePrice / 100).toFixed(2)} average per night`}</Text>}
                    {bookingDetails.nights <= 7 && (
                        <>
                            {bookingDetails.nightlyPrices.everydayPrices.map((price) => {
                                return (
                                    <BreakdownContentWrapper key={price.date}>
                                        <Text>{price.date}</Text>
                                        <Text>
                                            $
                                            {price.extraGuestFee
                                                ? `${(price.price / 100).toFixed(2)} (+$${(price.extraGuestFee / 100).toFixed(2)} for ${price.extraGuests} extra guests)`
                                                : (price.price / 100).toFixed(2)}
                                        </Text>
                                    </BreakdownContentWrapper>
                                );
                            })}
                        </>
                    )}
                    <Divider />
                    <SubText>
                        Price shown is your final price <br />
                        including taxes and fees.
                    </SubText>
                </Wrapper>
            )}
        </>
    );
};

export default NightlyPriceBreakdownPopup;
