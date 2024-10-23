import { EditListingContentInterface } from "../../editListing";
import { EditListingExperienceSubPageWrapper } from "../../editListingStyling";
import ExperienceItem from "./experienceItem/experienceItem";

export default function ExperienceDetails({ listingData, activateCard }: EditListingContentInterface) {
    const DataListName = [
        {
            icon: "https://d292awxalydr86.cloudfront.net/Universal+icons/Guide.svg",
            title: "Check-in",
            subTitle: `After ${listingData.checkInTime / 100}:00`,
            PopupName: "updateCheckInInstructionsCard",
        },
        {
            icon: "https://d292awxalydr86.cloudfront.net/Universal+icons/Guide.svg",
            title: "Check out",
            subTitle: `Before ${listingData.checkOutTime / 100}:00`,
            PopupName: "updateCheckOutInstructionsCard",
        },
        { icon: "https://d292awxalydr86.cloudfront.net/Amenities+icons/Wifi.svg", title: "Wi-Fi", subTitle: "Add info", PopupName: "updateWifi" },
        // { icon: "", title: "Entertainment", subTitle: "Add Info", PopupName: "updateCheckInInstructionsCard" },
    ];
    return (
        <EditListingExperienceSubPageWrapper>
            {DataListName.map((item, index) => (
                <ExperienceItem key={index} icon={item.icon} title={item.title} subTitle={item.subTitle} onClick={() => activateCard(item.PopupName)} />
            ))}
        </EditListingExperienceSubPageWrapper>
    );
}
