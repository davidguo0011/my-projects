import { Datepicker, momentTimezone } from "@mobiscroll/react";

interface MobileNavbarSearchMenuCalendarProps {
    date: (string | Date | null)[];
    setStartDate: React.Dispatch<React.SetStateAction<string | Date | null>>;
    setEndDate: React.Dispatch<React.SetStateAction<string | Date | null>>;
    setDate: React.Dispatch<React.SetStateAction<(string | Date | null)[]>>;
}

export default function MobileNavbarSearchMenuCalendar({ date, setStartDate, setEndDate, setDate }: MobileNavbarSearchMenuCalendarProps) {
    const today = new Date();
    const yesterday = new Date(today.getTime() - 86400000);

    return (
        <Datepicker
            select="range"
            returnFormat="jsdate"
            timezonePlugin={momentTimezone}
            dataTimezone={"Australia/Brisbane"}
            displayTimezone={"Australia/Brisbane"}
            exclusiveEndDates={false}
            value={date}
            min={yesterday}
            minRange={2}
            invalid={[yesterday]}
            animate={false}
            theme={"material"}
            themeVariant={"light"}
            showRangeLabels={false}
            showOuterDays={false}
            display={"inline"}
            onChange={(dateRange: { value: Date[] | [Date | null, Date | null] }) => {
                if (dateRange.value[0] && dateRange.value[1]) {
                    setDate(dateRange.value);
                    setStartDate(dateRange.value[0]);
                    setEndDate(dateRange.value[1]);
                } else {
                    setDate(dateRange.value);
                }
            }}
        />
    );
}
