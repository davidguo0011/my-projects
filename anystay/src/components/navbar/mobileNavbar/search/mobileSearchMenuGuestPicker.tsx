import {
    MobileNavbarGuestsInputsWrapper,
    MobileNavbarGuestInputWrapper,
    MobileNavbarGuestInputTextWrapper,
    MobileNavbarGuestInputTitle,
    MobileNavbarGuestInputSubtitle,
    MobileNavbarGuestInputButtonWrapper,
    MobileNavbarGuestInputButton,
    MobileNavbarGuestInputValue,
} from "../mobileNavbarStyling";

export default function MobileNavbarGuestsInput({
    guests,
    setGuests,
}: {
    guests: {
        adults: number;
        children: number;
        pets: number;
        infants: number;
    };
    setGuests: React.Dispatch<
        React.SetStateAction<{
            adults: number;
            children: number;
            pets: number;
            infants: number;
        }>
    >;
}) {
    return (
        <MobileNavbarGuestsInputsWrapper>
            <MobileNavbarGuestInputWrapper>
                <MobileNavbarGuestInputTextWrapper>
                    <MobileNavbarGuestInputTitle>Adults</MobileNavbarGuestInputTitle>
                    <MobileNavbarGuestInputSubtitle>Ages 18+</MobileNavbarGuestInputSubtitle>
                </MobileNavbarGuestInputTextWrapper>
                <MobileNavbarGuestInputButtonWrapper>
                    <MobileNavbarGuestInputButton
                        type="button"
                        onClick={async () => {
                            if (guests.adults > 1) {
                                setGuests((prevState) => {
                                    return {
                                        ...prevState,
                                        adults: prevState.adults - 1,
                                    };
                                });
                            }
                        }}
                    >
                        -
                    </MobileNavbarGuestInputButton>
                    <MobileNavbarGuestInputValue>{guests.adults}</MobileNavbarGuestInputValue>
                    <MobileNavbarGuestInputButton
                        type="button"
                        onClick={async () => {
                            if (guests.adults < 99) {
                                setGuests((prevState) => {
                                    return {
                                        ...prevState,
                                        adults: prevState.adults + 1,
                                    };
                                });
                            }
                        }}
                    >
                        +
                    </MobileNavbarGuestInputButton>
                </MobileNavbarGuestInputButtonWrapper>
            </MobileNavbarGuestInputWrapper>
            <MobileNavbarGuestInputWrapper>
                <MobileNavbarGuestInputTextWrapper>
                    <MobileNavbarGuestInputTitle>Children</MobileNavbarGuestInputTitle>
                    <MobileNavbarGuestInputSubtitle>Ages 2 - 17</MobileNavbarGuestInputSubtitle>
                </MobileNavbarGuestInputTextWrapper>
                <MobileNavbarGuestInputButtonWrapper>
                    <MobileNavbarGuestInputButton
                        type="button"
                        onClick={async () => {
                            if (guests.children > 0) {
                                setGuests((prevState) => {
                                    return {
                                        ...prevState,
                                        children: prevState.children - 1,
                                    };
                                });
                            }
                        }}
                    >
                        -
                    </MobileNavbarGuestInputButton>
                    <MobileNavbarGuestInputValue>{guests.children}</MobileNavbarGuestInputValue>
                    <MobileNavbarGuestInputButton
                        type="button"
                        onClick={async () => {
                            if (guests.children < 99) {
                                setGuests((prevState) => {
                                    return {
                                        ...prevState,
                                        children: prevState.children + 1,
                                    };
                                });
                            }
                        }}
                    >
                        +
                    </MobileNavbarGuestInputButton>
                </MobileNavbarGuestInputButtonWrapper>
            </MobileNavbarGuestInputWrapper>
            <MobileNavbarGuestInputWrapper>
                <MobileNavbarGuestInputTextWrapper>
                    <MobileNavbarGuestInputTitle>Infants</MobileNavbarGuestInputTitle>
                    <MobileNavbarGuestInputSubtitle>Under 2</MobileNavbarGuestInputSubtitle>
                </MobileNavbarGuestInputTextWrapper>
                <MobileNavbarGuestInputButtonWrapper>
                    <MobileNavbarGuestInputButton
                        type="button"
                        onClick={async () => {
                            if (guests.infants > 0) {
                                setGuests((prevState) => {
                                    return {
                                        ...prevState,
                                        infants: prevState.infants - 1,
                                    };
                                });
                            }
                        }}
                    >
                        -
                    </MobileNavbarGuestInputButton>
                    <MobileNavbarGuestInputValue>{guests.infants}</MobileNavbarGuestInputValue>
                    <MobileNavbarGuestInputButton
                        type="button"
                        onClick={async () => {
                            if (guests.children < 99) {
                                setGuests((prevState) => {
                                    return {
                                        ...prevState,
                                        infants: prevState.infants + 1,
                                    };
                                });
                            }
                        }}
                    >
                        +
                    </MobileNavbarGuestInputButton>
                </MobileNavbarGuestInputButtonWrapper>
            </MobileNavbarGuestInputWrapper>
            <MobileNavbarGuestInputWrapper style={{ borderBottom: "none" }}>
                <MobileNavbarGuestInputTextWrapper>
                    <MobileNavbarGuestInputTitle>Pets</MobileNavbarGuestInputTitle>
                    <MobileNavbarGuestInputSubtitle>Friendly animals</MobileNavbarGuestInputSubtitle>
                </MobileNavbarGuestInputTextWrapper>
                <MobileNavbarGuestInputButtonWrapper>
                    <MobileNavbarGuestInputButton
                        type="button"
                        onClick={async () => {
                            if (guests.pets > 0) {
                                setGuests((prevState) => {
                                    return {
                                        ...prevState,
                                        pets: prevState.pets - 1,
                                    };
                                });
                            }
                        }}
                    >
                        -
                    </MobileNavbarGuestInputButton>
                    <MobileNavbarGuestInputValue>{guests.pets}</MobileNavbarGuestInputValue>
                    <MobileNavbarGuestInputButton
                        type="button"
                        onClick={async () => {
                            if (guests.pets < 99) {
                                setGuests((prevState) => {
                                    return {
                                        ...prevState,
                                        pets: prevState.pets + 1,
                                    };
                                });
                            }
                        }}
                    >
                        +
                    </MobileNavbarGuestInputButton>
                </MobileNavbarGuestInputButtonWrapper>
            </MobileNavbarGuestInputWrapper>
        </MobileNavbarGuestsInputsWrapper>
    );
}
