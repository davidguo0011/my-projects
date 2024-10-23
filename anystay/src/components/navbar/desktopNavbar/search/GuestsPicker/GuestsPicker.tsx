import { GuestsPopupWrapper, GuestsPopupWrapperBodyWrapper, GuestItem, TextWrapper, TextHeader, TextDescription, ButtonWrapper, GuestNumBtn, GuestNumValue } from "./GuestsPickerStyling";
import { motion } from "framer-motion";
import useClickOutside from "../../../../../hook/useClickOutside";
import { useRecoilState } from "recoil";
import { searchFiltersSelector } from "../../../../../state/selectors/searchQuery";

function GuestsPicker({ activated, setAddGuestPopup }: { activated: boolean; setAddGuestPopup: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const wrapperRef = useClickOutside(
        activated,
        () => {
            setAddGuestPopup(false);
        },
        true
    );

    const data = [
        {
            id: 1,
            name: "Adults",
            description: "Ages 18+",
            num: searchFilters.adults,
            setIncrement: () => {
                setSearchFilters((prev) => {
                    return { ...prev, adults: prev.adults + 1, guests: prev.guests + 1 };
                });
            },
            setDecrement: () => {
                if (searchFilters.adults > 0) {
                    setSearchFilters((prev) => {
                        return { ...prev, adults: prev.adults - 1, guests: prev.guests - 1 };
                    });
                }
            },
        },
        {
            id: 2,
            name: "Children",
            description: "Ages 2-17",
            num: searchFilters.children,
            setIncrement: () => {
                setSearchFilters((prev) => {
                    return { ...prev, children: prev.children + 1, guests: prev.guests + 1 };
                });
            },
            setDecrement: () => {
                if (searchFilters.children > 0) {
                    setSearchFilters((prev) => {
                        return { ...prev, children: prev.children - 1, guests: prev.guests - 1 };
                    });
                }
            },
        },
        {
            id: 3,
            name: "Infants",
            description: "Under 2",
            num: searchFilters.infants,
            setIncrement: () => {
                setSearchFilters((prev) => {
                    return { ...prev, infants: prev.infants + 1 };
                });
            },
            setDecrement: () => {
                if (searchFilters.infants > 0) {
                    setSearchFilters((prev) => {
                        return { ...prev, infants: prev.infants - 1 };
                    });
                }
            },
        },
        {
            id: 4,
            name: "Pets",
            description: "Friendly animals",
            num: searchFilters.pets,
            setIncrement: () => {
                setSearchFilters((prev) => {
                    return { ...prev, pets: prev.pets + 1 };
                });
            },
            setDecrement: () => {
                if (searchFilters.pets > 0) {
                    setSearchFilters((prev) => {
                        return { ...prev, pets: prev.pets - 1 };
                    });
                }
            },
        },
    ];

    return (
        <motion.div
            initial={false}
            animate={{
                y: activated ? "0vh" : "100vh",
                opacity: activated ? 1 : 0,
                visibility: activated ? "visible" : "hidden",
                display: activated ? "block" : "none",
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            style={{ position: "fixed", zIndex: "102", left: "0", right: "0", top: "164px" }}
        >
            <GuestsPopupWrapper>
                <GuestsPopupWrapperBodyWrapper ref={wrapperRef}>
                    {data.map((item) => {
                        return (
                            <GuestItem key={item.id}>
                                <TextWrapper>
                                    <TextHeader>{item.name}</TextHeader>
                                    <TextDescription>{item.description}</TextDescription>
                                </TextWrapper>
                                <ButtonWrapper>
                                    <GuestNumBtn onClick={item.setDecrement}>-</GuestNumBtn>
                                    <GuestNumValue>{item.num}</GuestNumValue>
                                    <GuestNumBtn onClick={item.setIncrement}>+</GuestNumBtn>
                                </ButtonWrapper>
                            </GuestItem>
                        );
                    })}
                </GuestsPopupWrapperBodyWrapper>
            </GuestsPopupWrapper>
            ;
        </motion.div>
    );
}

export default GuestsPicker;
