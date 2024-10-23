import { useState } from "react";
import { AddDatesPopupWrapper, AddDatesPopupTitleWrapper, AddDatesPopupTitle } from "../../navbarStyling";
import { motion } from "framer-motion";
import { Datepicker, momentTimezone } from "@mobiscroll/react";
import moment from "moment-timezone";
import useClickOutside from "../../../../../hook/useClickOutside";

import { useRecoilState } from "recoil";
import { searchQuerySelector } from "../../../../../state/selectors/searchQuery";

momentTimezone.moment = moment;

interface AddDatesPopupProps {
    activated: boolean;
    setAddDatesPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setAddGuestPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddDatesPopup({ activated, setAddDatesPopup, setAddGuestPopup }: AddDatesPopupProps) {
    const wrapperRef = useClickOutside(
        activated,
        () => {
            setAddDatesPopup(false);
        },
        true
    );
    const currentDate = new Date();
    const yesterday = new Date(currentDate.getTime() - 86400000);
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [searchQuery, setSearchQuery] = useRecoilState(searchQuerySelector);
    const [date, setDate] = useState([new Date(searchQuery.startDate || currentDate), new Date(searchQuery.endDate || currentDate)]);

    const updateDate = (startDate: Date | string, endDate: Date | string) => {
        setSearchQuery({ ...searchQuery, startDate: startDate, endDate: endDate });
        setDate([new Date(startDate), new Date(endDate)]);
    };

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
            <AddDatesPopupWrapper ref={wrapperRef} onClick={(e) => e.stopPropagation()}>
                {/* <AddDatesPopupTitleWrapper>
                    <AddDatesPopupTitle selected={!date[1]}>{date[0] ? `${date[0].getDate()} ${month[date[0].getMonth()]}` : "Arrive"}</AddDatesPopupTitle>
                    <AddDatesPopupTitle selected={date[1]}>{date[1] ? `${date[1].getDate()} ${month[date[1].getMonth()]}` : "Depart"}</AddDatesPopupTitle>
                </AddDatesPopupTitleWrapper> */}
                <Datepicker
                    select="range"
                    returnFormat="jsdate"
                    value={date}
                    timezonePlugin={momentTimezone}
                    dataTimezone={"Australia/Brisbane"}
                    displayTimezone={"Australia/Brisbane"}
                    exclusiveEndDates={false}
                    minRange={2}
                    min={yesterday}
                    pages={"auto"}
                    animate={false}
                    theme={"material"}
                    themeVariant={"light"}
                    showRangeLabels={false}
                    showOuterDays={false}
                    display={"inline"}
                    invalid={[yesterday]}
                    onChange={(dateRange: { value: Date[] | [Date | null, Date | null] }) => {
                        if (dateRange.value && dateRange.value[0] && dateRange.value[1]) {
                            updateDate(dateRange.value[0], dateRange.value[1]);
                            setTimeout(() => {
                                setAddDatesPopup(false);
                                setAddGuestPopup(true);
                            });
                        } else {
                            setDate(dateRange.value as Date[]);
                        }
                    }}
                />
            </AddDatesPopupWrapper>
        </motion.div>
    );
}
