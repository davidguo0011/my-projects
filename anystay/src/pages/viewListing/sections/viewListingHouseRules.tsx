import {
    ViewListingExpandableSectionWrapper,
    ViewListingExpandableSectionTitle,
    ViewListingExpandableSectionContainer,
    ViewListingHouseRulesIconWrapper,
    ViewListingHouseRulesIcon,
    ViewListingHouseRulesText,
    ViewListingHouseRulesIconsWrapper,
} from "../viewListingStyling";

interface ViewListingHouseRulesSectionProps {
    points: string[];
    checkInTime: number;
    checkOutTime: number;
    title: string;
}

export default function ViewListingHouseRulesSection({ points, checkInTime, checkOutTime, title }: ViewListingHouseRulesSectionProps) {
    const getTime = (time: number) => {
        const timeMap: { [key: number]: string } = {
            100: "1am",
            200: "2am",
            300: "3am",
            400: "4am",
            500: "5am",
            600: "6am",
            700: "7am",
            800: "8am",
            900: "9am",
            1000: "10am",
            1100: "11am",
            1200: "12pm",
            1300: "1pm",
            1400: "2pm",
            1500: "3pm",
            1600: "4pm",
            1700: "5pm",
            1800: "6pm",
            1900: "7pm",
            2000: "8pm",
            2100: "9pm",
            2200: "10pm",
            2300: "11pm",
            2400: "12am",
        };
        return timeMap[time] || "";
    };

    const pointsData = [`Check-in after ${checkInTime ? `${getTime(checkInTime)}` : "3pm"}`, `Check-out before ${checkOutTime ? `${getTime(checkOutTime)}` : "11am"}`, ...points];

    const getHouseRuleIcon = (houseRule: string) => {
        if (houseRule.startsWith("Check-in")) {
            return "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Check-in.svg";
        } else if (houseRule.startsWith("Check-out")) {
            return "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Check+out.svg";
        } else {
            switch (houseRule) {
                case "No smoking":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+smoking.svg";
                case "No events":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+events.svg";
                case "No pets":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+pets.svg";
                case "No parties":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+events.svg";
                case "Commercial use":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/Commercial+use.svg";
                case "No instruments":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+instruments.svg";
                case "No children":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+children.svg";
                case "No infants":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+infants.svg";
                case "No alcohol":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/No+alcohol.svg";
                case "Male only":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/Male+only.svg";
                case "Female only":
                    return "https://d292awxalydr86.cloudfront.net/House+rules+icons/Female+only.svg";
                default:
                    return "https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg";
            }
        }
    };
    if (!pointsData) return null;

    return (
        <ViewListingExpandableSectionContainer>
            <ViewListingExpandableSectionWrapper>
                <ViewListingExpandableSectionTitle>{title}</ViewListingExpandableSectionTitle>

                {/* <ViewListingHouseRulesTitleWrapper>
                            <ViewListingHouseRulesIcon src={getHouseRuleIcon(props.points.length > 0 ? props.points[0] : "")} alt="House rule icon" />
                            <ViewListingHouseRulesText>{points.length > 0 ? points[0] : "None found"}</ViewListingHouseRulesText>
                        </ViewListingHouseRulesTitleWrapper> */}

                {/* <ViewListingExpandableSectionSubtitle>
                        {expanded || window.innerWidth > 768 &&  props.points.length > 1 ?
                            null
                            :
                            props.points.length > 0 ?
                                props.points[0]
                                :
                                'None found'
                        }
                    </ViewListingExpandableSectionSubtitle> */}
                {/* <ViewListingExpandableSectionButton
                        src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
                        alt={"Exapandable section open/close button"}
                        style={rotated()}
                    /> */}
            </ViewListingExpandableSectionWrapper>
            <ViewListingHouseRulesIconsWrapper>
                {pointsData.map(function (point, i) {
                    return (
                        <ViewListingHouseRulesIconWrapper key={i}>
                            <ViewListingHouseRulesIcon src={getHouseRuleIcon(point)} alt="House rule icon" />
                            <ViewListingHouseRulesText>{point}</ViewListingHouseRulesText>
                        </ViewListingHouseRulesIconWrapper>
                    );
                })}
            </ViewListingHouseRulesIconsWrapper>
        </ViewListingExpandableSectionContainer>
    );
}
