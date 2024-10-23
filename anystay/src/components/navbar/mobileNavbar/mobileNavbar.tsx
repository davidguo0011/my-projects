import { MobileNavbarWrapper } from "./mobileNavbarStyling";

// Import search components
import MobileSearchMenu from "./search/mobileSearchMenu";
import MobileNavbarMenuItems from "./mobileNavbarMenuItems";
import { mobileSearchMenuActivatedSelector } from "../../../state/selectors/navbarToggle";
import { useRecoilState } from "recoil";

interface MobileNavbarProps {
    hide?: boolean | null | undefined;
    isTouchDevice?: boolean;
}

export default function MobileNavbar({ hide, isTouchDevice }: MobileNavbarProps) {
    const [mobileSearchMenuActivated, setMobileSearchMenuActivated] = useRecoilState(mobileSearchMenuActivatedSelector);
    return (
        <MobileNavbarWrapper hide={!mobileSearchMenuActivated && hide} mobileSearchMenuActivated={mobileSearchMenuActivated}>
            <MobileNavbarMenuItems isTouchDevice={isTouchDevice} />
            {mobileSearchMenuActivated && <MobileSearchMenu setMobileSearchMenuActivated={setMobileSearchMenuActivated} isTouchDevice={isTouchDevice} />}
        </MobileNavbarWrapper>
    );
}
