import { useState, useMemo } from "react";

import {
    PopupWrapper,
    DateWrapper,
    DateContentWrapper,
    DateDivider,
    Month,
    DayNum,
    Day,
    AvailableBtnWrapper,
    AvailableBtn,
    CloseBtn,
    CloseBtnIcon,
    PriceDiscountWrapper,
    PriceInputWrapper,
    InputDisplay,
} from "./popUpStyling";
import ContinueBtn from "../../../components/btn/continueBtn/continueBtn";
import { getPopupDate } from "../dateUtil/dateUtil";
import EditPricePopup from "./EditPopup/EditPricePopup";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import { CalendarSelectProp, CalendarMonthlySelectProp } from "../../../../node_modules/anystay-ui/dist/Calendar/interface";

interface PopUpProps {
    currentSelection: CalendarSelectProp | CalendarMonthlySelectProp;
    closePopup: () => void;
    loadListings: (nextTokenData: string | null) => Promise<void>;
    monthlyModeActiveListing: string;
}

const PopUp: React.FC<PopUpProps> = ({ currentSelection, closePopup, loadListings, monthlyModeActiveListing }) => {
    const priceDisplay = useMemo(() => {
        const prices: number[] = [];
        if ((currentSelection as CalendarSelectProp).rows !== undefined) {
            const rows = (currentSelection as CalendarSelectProp).rows;
            rows.forEach((row) => {
                row.cells.forEach((cell) => {
                    prices.push(Number(cell.value.replace("$", "")));
                });
            });
        } else if ((currentSelection as CalendarMonthlySelectProp).cells !== undefined) {
            const cells = (currentSelection as CalendarMonthlySelectProp).cells;
            cells.forEach((cell) => {
                prices.push(Number(cell.value.replace("$", "")));
            });
        }
        const minimumPrice = Math.min(...prices);
        const maximumPrice = Math.max(...prices);
        if (minimumPrice !== maximumPrice) {
            return `$${minimumPrice} - $${maximumPrice}`;
        } else {
            return `$${minimumPrice}`;
        }
    }, [currentSelection]);

    const availabilityDisplay = useMemo(() => {
        let hasNormal = false;
        let hasBlock = false;
        if ((currentSelection as CalendarSelectProp).rows !== undefined) {
            const rows = (currentSelection as CalendarSelectProp).rows;
            rows.forEach((row) => {
                row.cells.forEach((cell) => {
                    if (cell.status === "Normal") {
                        hasNormal = true;
                    } else if (cell.status === "Block") {
                        hasBlock = true;
                    }
                });
            });
        } else if ((currentSelection as CalendarMonthlySelectProp).cells !== undefined) {
            const cells = (currentSelection as CalendarMonthlySelectProp).cells;
            cells.forEach((cell) => {
                if (cell.status === "Normal") {
                    hasNormal = true;
                } else if (cell.status === "Block") {
                    hasBlock = true;
                }
            });
        }

        if (hasNormal && hasBlock) {
            return null; // Both normal and block statuses exist
        } else if (hasNormal) {
            return true; // All cells are normal
        } else if (hasBlock) {
            return false; // All cells are block
        }
    }, [currentSelection]);
    const startDate = useMemo(() => {
        return getPopupDate(currentSelection.startDate);
    }, [currentSelection.startDate]);
    const endDate = useMemo(() => {
        return getPopupDate(currentSelection.endDate);
    }, [currentSelection.endDate]);

    const [available, setAvailable] = useState(availabilityDisplay);
    const [isSaveContinueBtnLoading, setIsSaveContinueBtnLoading] = useState(false);
    const [editState, setEditState] = useState("main");
    const [newPrice, setNewPrice] = useState("");
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);

    const saveEventToTheDatabase = async () => {
        let listingModelIds = [];
        if ((currentSelection as CalendarSelectProp).rows !== undefined) {
            listingModelIds = (currentSelection as CalendarSelectProp).rows.map((row) => row.id);
        } else if ((currentSelection as CalendarMonthlySelectProp).cells !== undefined) {
            listingModelIds.push(monthlyModeActiveListing);
        }
        setIsSaveContinueBtnLoading(true);
        try {
            let response = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, "listing/calendar/rules", {
                headers: {
                    Authorization: accessToken,

                    listingModelIds: listingModelIds.join(","),
                },
                body: {
                    startDate: new Date(currentSelection.startDate).toString(),
                    endDate: new Date(currentSelection.endDate).toString(),
                    listingModelIds: listingModelIds,
                    minimumPrice: Number(newPrice) * 100,
                    disabled: !available,
                },
            });
            if (response.success) {
                console.log(response);
                await loadListings(null);
                setIsSaveContinueBtnLoading(false);
                closePopup();
            }
        } catch (err) {
            setIsSaveContinueBtnLoading(false);
            console.log(err);
        }
    };

    return (
        <>
            <div
                style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 99, background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(0px)" }}
                onClick={closePopup}
            ></div>
            {editState === "main" && (
                <PopupWrapper>
                    <CloseBtn onClick={closePopup}>
                        <CloseBtnIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg" alt="close btn" />
                    </CloseBtn>
                    <DateWrapper>
                        <DateContentWrapper>
                            <Month>{startDate.month}</Month>
                            <DayNum>{startDate.day}</DayNum>
                            <Day>{startDate.dayOfWeek}</Day>
                        </DateContentWrapper>
                        <DateDivider>-</DateDivider>
                        <DateContentWrapper>
                            <Month>{endDate.month}</Month>
                            <DayNum>{endDate.day}</DayNum>
                            <Day>{endDate.dayOfWeek}</Day>
                        </DateContentWrapper>
                    </DateWrapper>
                    <AvailableBtnWrapper>
                        <AvailableBtn
                            active={available === true}
                            onClick={() => {
                                setAvailable(true);
                            }}
                        >
                            Available
                        </AvailableBtn>
                        <AvailableBtn
                            active={available === false}
                            onClick={() => {
                                setAvailable(false);
                            }}
                        >
                            Unavailable
                        </AvailableBtn>
                    </AvailableBtnWrapper>
                    <PriceDiscountWrapper>
                        <PriceInputWrapper
                            onClick={() => {
                                setEditState("price");
                            }}
                        >
                            <InputDisplay>{newPrice ? `$${newPrice}` : priceDisplay}</InputDisplay>
                        </PriceInputWrapper>
                    </PriceDiscountWrapper>

                    <ContinueBtn
                        background={"black"}
                        style={{ width: "fit-content" }}
                        isLoading={isSaveContinueBtnLoading}
                        disabled={isSaveContinueBtnLoading || available === null}
                        onClick={saveEventToTheDatabase}
                    >
                        Done
                    </ContinueBtn>
                </PopupWrapper>
            )}
            {editState === "price" && <EditPricePopup setEditState={setEditState} setNewPrice={setNewPrice} />}
        </>
    );
};

export default PopUp;
