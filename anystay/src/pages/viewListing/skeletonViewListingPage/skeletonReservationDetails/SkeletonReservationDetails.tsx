import {
    ViewListingDesktopMenuWrapper,
    ViewListingDesktopMenu,
    ViewListingDesktopMenuPrice,
    ViewListingDesktopMenuDatesWrapper,
    ViewListingDesktopMenuDatesItem,
    ViewListingDesktopMenuDatesItemTitle,
    ViewListingDesktopMenuDatesItemSubtitle,
    ViewListingFooterButton,
    ViewListingDesktopMenuDatesSelectSubtitle,
} from "./SkeletonReservationDetailsStyling";
import { ColorTheme } from "../../../../components/globaStyledComponents/globalStyledComponentsStyling";
export default function SkeletonReservationDetails() {
    return (
        <ViewListingDesktopMenuWrapper>
            <ViewListingDesktopMenu>
                <ViewListingDesktopMenuPrice />
                <ViewListingDesktopMenuDatesWrapper>
                    <ViewListingDesktopMenuDatesItem style={{ gridColumn: "1/2" }}>
                        <ViewListingDesktopMenuDatesItemTitle />
                        <ViewListingDesktopMenuDatesItemSubtitle />
                    </ViewListingDesktopMenuDatesItem>
                    <ViewListingDesktopMenuDatesItem style={{ gridColumn: "2/3", borderLeft: `1px solid ${ColorTheme.Grey1.color}` }}>
                        <ViewListingDesktopMenuDatesItemTitle />
                        <ViewListingDesktopMenuDatesItemSubtitle />
                    </ViewListingDesktopMenuDatesItem>
                    <ViewListingDesktopMenuDatesItem style={{ gridColumn: "1/3", borderTop: `1px solid ${ColorTheme.Grey1.color}` }}>
                        <ViewListingDesktopMenuDatesItemTitle />
                        <ViewListingDesktopMenuDatesItemSubtitle />
                    </ViewListingDesktopMenuDatesItem>
                </ViewListingDesktopMenuDatesWrapper>
                <ViewListingFooterButton />
                <ViewListingDesktopMenuDatesSelectSubtitle />
            </ViewListingDesktopMenu>
        </ViewListingDesktopMenuWrapper>
    );
}
