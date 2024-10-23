import { useState } from "react";
import {
    GuestPickerGuestsWrapper,
    GuestPickerGuestsTitleWrapper,
    GuestPickerGuestsTitle,
    GuestPickerGuestsTitleTextWrapper,
    GuestPickerGuestsSubtitle,
    GuestPickerRow,
    GuestPickerRowTextTitle,
    GuestPickerRowTextSubtitle,
    GuestPickerRowTextWrapper,
    GuestPickerRowTextNotAllowed,
    GuestPickerButtonWrapper,
    GuestPickerButton,
} from "./GuestPickerStyling";
import useClickOutside from "../../hook/useClickOutside";
import { ColorTheme } from "../globaStyledComponents/globalStyledComponentsStyling";
import { UserModel } from "../../interfaces/models/userModel";
import { ListingModel } from "../../interfaces/models/listingModel";
import GlobalPopupContainerCenter from "../globalPopup/GlobalPopupContainerCenter";

interface GuestPickerProps {
    adults: number;
    children: number;
    infants: number;
    pets: number;
    listingOwnerData: UserModel;
    listing: ListingModel;
    toggleGuests: () => void;
    updateGuests: (guests: { adults: number; children: number; infants: number; pets: number }) => Promise<void>;
}

export default function GuestPicker({ adults, children, infants, pets, listingOwnerData, listing, toggleGuests, updateGuests }: GuestPickerProps) {
    const [adultsNum, setAdultsNum] = useState(adults);
    const [childrenNum, setChildrenNum] = useState(children);
    const [infantsNum, setInfantsNum] = useState(infants);
    const [petsNum, setPetsNum] = useState(pets);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const wrapperRef = useClickOutside(true, () => {
        if (!isContinueBtnLoading) {
            toggleGuests();
        }
    });
    const onSubmit = async () => {
        setIsContinueBtnLoading(true);
        await updateGuests({
            adults: adultsNum,
            children: childrenNum,
            infants: infantsNum,
            pets: petsNum,
        });
        toggleGuests();
    };

    return (
        <GlobalPopupContainerCenter style={{ width: '480px' }} ref={wrapperRef} backBtnType={"Arrow"} closePopup={toggleGuests} handleSave={onSubmit} disable={isContinueBtnLoading} isContinueBtnLoading={isContinueBtnLoading}>
            <GuestPickerGuestsWrapper>
                <GuestPickerGuestsTitleWrapper>
                    <GuestPickerGuestsTitleTextWrapper>
                        <GuestPickerGuestsTitle>Guests</GuestPickerGuestsTitle>
                        <GuestPickerGuestsSubtitle>
                            {listingOwnerData ? `${listingOwnerData.firstName}'s` : "This"} place has a maximum of
                            <strong> {listing.guests} guests</strong>
                        </GuestPickerGuestsSubtitle>
                    </GuestPickerGuestsTitleTextWrapper>
                </GuestPickerGuestsTitleWrapper>
                <GuestPickerRow>
                    <GuestPickerRowTextWrapper>
                        <GuestPickerRowTextTitle>Adults</GuestPickerRowTextTitle>
                        <GuestPickerRowTextSubtitle>Ages 18+</GuestPickerRowTextSubtitle>
                    </GuestPickerRowTextWrapper>
                    <GuestPickerButtonWrapper>
                        <GuestPickerButton
                            type="button"
                            valid={adultsNum > 1}
                            onClick={() => {
                                if (adultsNum > 1) {
                                    setAdultsNum((prevState) => prevState - 1);
                                }
                            }}
                        >
                            -
                        </GuestPickerButton>
                        <GuestPickerRowTextTitle>{adultsNum}</GuestPickerRowTextTitle>
                        <GuestPickerButton
                            type="button"
                            valid={adultsNum + childrenNum < listing.guests}
                            onClick={() => {
                                if (adultsNum + childrenNum < listing.guests) {
                                    setAdultsNum((prevState) => prevState + 1);
                                }
                            }}
                        >
                            +
                        </GuestPickerButton>
                    </GuestPickerButtonWrapper>
                </GuestPickerRow>
                <GuestPickerRow>
                    <GuestPickerRowTextWrapper>
                        <GuestPickerRowTextTitle>Children</GuestPickerRowTextTitle>
                        <GuestPickerRowTextSubtitle>Ages 2 - 17</GuestPickerRowTextSubtitle>
                    </GuestPickerRowTextWrapper>
                    {listing.houseRules.includes("No children") ? (
                        <GuestPickerRowTextNotAllowed>Not allowed</GuestPickerRowTextNotAllowed>
                    ) : (
                        <GuestPickerButtonWrapper>
                            <GuestPickerButton
                                type="button"
                                valid={childrenNum > 0}
                                onClick={() => {
                                    if (childrenNum > 0) {
                                        setChildrenNum((prevState) => prevState - 1);
                                    }
                                }}
                            >
                                -
                            </GuestPickerButton>
                            <GuestPickerRowTextTitle>{childrenNum}</GuestPickerRowTextTitle>
                            <GuestPickerButton
                                type="button"
                                valid={adultsNum + childrenNum < listing.guests}
                                onClick={() => {
                                    if (adultsNum + childrenNum < listing.guests) {
                                        setChildrenNum((prevState) => prevState + 1);
                                    }
                                }}
                            >
                                +
                            </GuestPickerButton>
                        </GuestPickerButtonWrapper>
                    )}
                </GuestPickerRow>
                <GuestPickerRow>
                    <GuestPickerRowTextWrapper>
                        <GuestPickerRowTextTitle>Infants</GuestPickerRowTextTitle>
                        <GuestPickerRowTextSubtitle>Under 2</GuestPickerRowTextSubtitle>
                    </GuestPickerRowTextWrapper>
                    {listing.houseRules.includes("No infants") ? (
                        <GuestPickerRowTextNotAllowed>Not allowed</GuestPickerRowTextNotAllowed>
                    ) : (
                        <GuestPickerButtonWrapper>
                            <GuestPickerButton
                                type="button"
                                valid={infantsNum > 0}
                                onClick={() => {
                                    if (infantsNum > 0) {
                                        setInfantsNum((prevState) => prevState - 1);
                                    }
                                }}
                            >
                                -
                            </GuestPickerButton>
                            <GuestPickerRowTextTitle>{infantsNum}</GuestPickerRowTextTitle>
                            <GuestPickerButton
                                type="button"
                                valid={infantsNum < 99}
                                onClick={() => {
                                    if (infantsNum < 99) {
                                        setInfantsNum((prevState) => prevState + 1);
                                    }
                                }}
                            >
                                +
                            </GuestPickerButton>
                        </GuestPickerButtonWrapper>
                    )}
                </GuestPickerRow>
                <GuestPickerRow style={{ borderBottom: `1px solid ${ColorTheme.Grey2.color}` }}>
                    <GuestPickerRowTextWrapper>
                        <GuestPickerRowTextTitle>Pets</GuestPickerRowTextTitle>
                        <GuestPickerRowTextSubtitle>Friendly animals</GuestPickerRowTextSubtitle>
                        {/* <GuestPickerSubtitle>Under 2</GuestPickerSubtitle> */}
                    </GuestPickerRowTextWrapper>
                    {listing.houseRules.includes("No pets") ? (
                        <GuestPickerRowTextNotAllowed>Not allowed</GuestPickerRowTextNotAllowed>
                    ) : (
                        <GuestPickerButtonWrapper>
                            <GuestPickerButton
                                type="button"
                                valid={petsNum > 0}
                                onClick={() => {
                                    if (petsNum > 0) {
                                        setPetsNum((prevState) => prevState - 1);
                                    }
                                }}
                            >
                                -
                            </GuestPickerButton>
                            <GuestPickerRowTextTitle>{petsNum}</GuestPickerRowTextTitle>
                            <GuestPickerButton
                                type="button"
                                valid={petsNum < 99}
                                onClick={() => {
                                    if (petsNum < 99) {
                                        setPetsNum((prevState) => prevState + 1);
                                    }
                                }}
                            >
                                +
                            </GuestPickerButton>
                        </GuestPickerButtonWrapper>
                    )}
                </GuestPickerRow>
            </GuestPickerGuestsWrapper>
        </GlobalPopupContainerCenter>
    );
}
