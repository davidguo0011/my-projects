import { useState } from "react";
import {
    EditListingUpdateCardContentTitle,
    EditListingUpdateCardContentSubtitle,
    EditListingUpdateCardImportICalLinkInput,
    EditListingUpdateCardImportICalLinkSubtitle,
    EditListingUpdateCardImportICalLinkInputWrapper,
    EditListingUpdateCardImportICalLinkItem,
    EditListingUpdateCardImportICalLinkItemText,
    EditListingUpdateCardImportICalLinkItemRemoveButton,
    EditListingUpdateCardImportICalLinkWrapper,
} from "../editListingStyling";
import ContinueBtn from "../../../components/btn/continueBtn/continueBtn";
import InlineTextLoading from "../../../components/spinner/inlineTextLoading/InlineTextLoading";
import useClickOutside from "../../../hook/useClickOutside";
import { callApi } from "../../../utils/api/api";
import { ListingDataInterface } from "../editListing";
import { PopupProps } from "../PopupContainer/PopupContainer";
import GlobalPopupContainerRight from "../../../components/globalPopup/GlobalPopupContainerRight";

interface UpdateICalProps extends PopupProps {
    updateICalCard: boolean;
}

export default function UpdateICal({ updateICalCard, deactivateUpdateCards, listingData, accessToken, setListingData }: UpdateICalProps) {
    const wrapperRef = useClickOutside(updateICalCard, () => {
        if (!isContinueBtnLoading) {
            deactivateUpdateCards();
        }
    });
    const [iCalInput, setICalInput] = useState("");
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [invalidLink, setInvalidLink] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isDeleteLoading, setIsDeleteLoading] = useState<{ loading: boolean; index: number | null }>({ loading: false, index: null });

    const importIcalLink = async () => {
        setIsContinueBtnLoading(true);
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/ical/${listingData.id}`, {
            headers: {
                Authorization: accessToken,
                listingID: listingData.id,
            },
            body: {
                iCalLink: iCalInput,
            },
        })
            .then((res) => {
                console.log(res);
                if (res.success) {
                    updateIcalLinks(res.body.iCalLinks);
                    setInvalidLink(false);
                    setErrorMsg("");
                } else {
                    setInvalidLink(true);
                    setErrorMsg(res.message);
                }
                setIsContinueBtnLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsContinueBtnLoading(false);
                setInvalidLink(true);
                setErrorMsg("Something went wrong, please try again");
            });
    };

    const deleteIcalLink = async (link: string, index: number) => {
        setIsDeleteLoading({ loading: true, index });
        await callApi("del", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/ical/${listingData.id}`, {
            headers: {
                Authorization: accessToken,
                listingID: listingData.id,
            },
            body: {
                iCalLink: link,
            },
        })
            .then((res) => {
                console.log(res);
                if (res.success) {
                    updateIcalLinks(res.body.iCalLinks);
                    setIsDeleteLoading({ loading: false, index: null });
                }
            })
            .catch((err) => {
                console.log(err);
                setIsDeleteLoading({ loading: false, index: null });
            });
    };

    const updateIcalLinks = async (iCalLinks: string[]) => {
        const copyListingData = JSON.parse(JSON.stringify(listingData)) as ListingDataInterface;
        copyListingData.iCalImportLinks = iCalLinks;
        setListingData(copyListingData);
    };

    return (
        <GlobalPopupContainerRight
            ref={wrapperRef}
            closePopup={deactivateUpdateCards}
            handleSave={deactivateUpdateCards}
            disable={isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
            btnText="Done"
        >
            <EditListingUpdateCardContentTitle>Import calendars</EditListingUpdateCardContentTitle>
            <EditListingUpdateCardContentSubtitle style={{ height: "40px" }} invalid={invalidLink}>
                {invalidLink && errorMsg ? errorMsg : "Paste iCal links from other apps to sync your calendar"}
            </EditListingUpdateCardContentSubtitle>
            <EditListingUpdateCardImportICalLinkInputWrapper>
                <EditListingUpdateCardImportICalLinkInput
                    placeholder="Paste your iCal link here"
                    value={iCalInput}
                    onChange={(e) => {
                        setICalInput(e.target.value);
                    }}
                />
                <ContinueBtn
                    style={{
                        height: "38px",
                        width: "83px",
                        borderRadius: "8px",
                        gridRow: "1/2",
                        gridColumn: "1/2",
                        marginLeft: "auto",
                        zIndex: 11,
                        marginBottom: "7px",
                    }}
                    isLoading={isContinueBtnLoading}
                    background={"blue"}
                    disabled={iCalInput === "" || isContinueBtnLoading}
                    continueType="button"
                    onClick={importIcalLink}
                >
                    Import
                </ContinueBtn>
            </EditListingUpdateCardImportICalLinkInputWrapper>
            <EditListingUpdateCardImportICalLinkSubtitle>Sync with other platforms and services.</EditListingUpdateCardImportICalLinkSubtitle>
            <EditListingUpdateCardImportICalLinkWrapper>
                {listingData.iCalImportLinks.map((link, index) => {
                    return (
                        <EditListingUpdateCardImportICalLinkItem key={link} style={{ marginBottom: index === listingData.iCalImportLinks.length - 1 ? "64px" : "16px" }}>
                            <EditListingUpdateCardImportICalLinkItemText>{link}</EditListingUpdateCardImportICalLinkItemText>
                            {isDeleteLoading.loading && isDeleteLoading.index === index ? (
                                <InlineTextLoading style={{ marginLeft: "auto", marginRight: "16px" }} />
                            ) : (
                                <EditListingUpdateCardImportICalLinkItemRemoveButton
                                    onClick={() => {
                                        deleteIcalLink(link, index);
                                    }}
                                >
                                    x
                                </EditListingUpdateCardImportICalLinkItemRemoveButton>
                            )}
                        </EditListingUpdateCardImportICalLinkItem>
                    );
                })}
            </EditListingUpdateCardImportICalLinkWrapper>
        </GlobalPopupContainerRight>
    );
}
