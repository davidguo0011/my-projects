import { useState } from "react";
import {
    EditListingUpdateCardContentTitle,
    EditListingUpdateCardContentSubtitle,
    EditListingUpdateCardImportICalLinkButton,
    EditListingUpdateCardImportICalLinkInputWrapper,
    EditListingUpdateCardImportICalLinkUrlText,
    EditListingUpdateCardTitle,
} from "../editListingStyling";
import useClickOutside from "../../../hook/useClickOutside";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateExportICalProps {
    updateICalExportCard: boolean;
    deactivateUpdateCards: () => Promise<void>;
    iCalToken: string;
}

export default function UpdateExportICal({ updateICalExportCard, deactivateUpdateCards, iCalToken }: UpdateExportICalProps) {
    const wrapperRef = useClickOutside(updateICalExportCard, deactivateUpdateCards);
    const [copied, setCopied] = useState(false);

    return (
        <GlobalPopupContainerRight ref={wrapperRef} closePopup={deactivateUpdateCards} handleSave={deactivateUpdateCards} disable={false} isContinueBtnLoading={false} btnText="Done">
            <EditListingUpdateCardContentTitle>Export your calendar</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle invalid={false}>
                Copy your iCal link to sync Anystay's calendar with other apps. <a>Learn more</a>
            </EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardImportICalLinkInputWrapper>
                <EditListingUpdateCardImportICalLinkUrlText>{iCalToken}</EditListingUpdateCardImportICalLinkUrlText>
                <EditListingUpdateCardImportICalLinkButton
                    type="button"
                    onClick={() => {
                        setCopied(true);
                        navigator.clipboard.writeText(iCalToken);
                    }}
                >
                    {copied ? "Copied" : "Copy"}
                </EditListingUpdateCardImportICalLinkButton>
            </EditListingUpdateCardImportICalLinkInputWrapper>
        </GlobalPopupContainerRight>
    );
}
