import UpdateCheckInInstructions from "../popups/updateCheckInOutInstructions";
import UpdateTitle from "../popups/updateTitle";
import UpdateDescription from "../popups/updateDescription";
import UpdateGuests from "../popups/updateGuests";
import UpdatePropertyType from "../popups/updatePropertyType";
import UpdatePrice from "../popups/updatePrice";
import UpdateDiscount from "../popups/updateDiscount";
import UpdateCleaning from "../popups/updateCleaning";
import UpdateExtraGuests from "../popups/updateExtraGuests";
import UpdateMinimumStay from "../popups/updateMinimumStay";
import UpdateAdvancedNotice from "../popups/updateAdvancedNotice";
import UpdateAmenities from "../popups/updateAmenities";
import UpdateAddress from "../popups/updateAddress";
import UpdatePhotos from "../popups/updatePhotos";
import UpdateAvailableDates from "../popups/updateAvailableDates";
import UpdateICal from "../popups/updateICal";
import UpdateExportICal from "../popups/updateExportICal";
import UpdateCancellationPolicy from "../popups/updateCancellationPolicy";
import UpdateInstantBook from "../popups/updateInstantBook";
import UpdateCheckInCheckOut from "../popups/updateCheckInCheckOut";
import UpdatePreparationTime from "../popups/updatePreparationTime";
import UpdateDeposit from "../popups/updateDeposit";
import UpdateHouseRules from "../popups/updateHouseRules";
import UpdateStatus from "../popups/updateStatus";
import UpdateStraID from "../popups/updateStraID";
import DeleteListing from "../popups/deleteListing";
import DeleteListingFailed from "../popups/deleteListingFailed";
import UpdatePaymentPolicy from "../popups/updatePaymentPolicy";
import UpdateWifi from "../popups/updateWifi";
// import UpdateAddStraID from "../popups/updateAddStraID";
// import UpdateRestrictedDays from "../popups/updateRestrictedDays";
// import UpdateDateBlocking from "../popups/updateDateBlocking";
import UpdateArea from "../popups/updateArea";
import HostawayEditListingBlocker from "../popups/hostawayEditListingBlocker";
import { ListingDataInterface } from "../editListing";
import UpdateCheckInOutSteps from "../popups/updateCheckInOutSteps";
import UpdateCheckInOutType from "../popups/updateCheckInOutType";
import UpdateCheckInOutTime from "../popups/updateCheckInOutTime";

interface PopupContainerProps {
    popupName: string;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
    listingData: ListingDataInterface;
    deactivateUpdateCards: () => Promise<void>;
    accessToken: string;
    iCalToken: string;
    activateCard: (name: string) => void;
}

export interface PopupProps {
    deactivateUpdateCards: () => Promise<void>;
    listingData: ListingDataInterface;
    accessToken: string;
    setListingData: React.Dispatch<React.SetStateAction<ListingDataInterface | null>>;
}

export default function PopupContainer({ popupName, setListingData, listingData, deactivateUpdateCards, accessToken, iCalToken, activateCard }: PopupContainerProps) {
    return (
        <>
            {popupName === "updateTitleCard" && (
                <UpdateTitle
                    updateTitleCard={popupName === "updateTitleCard"}
                    setListingData={setListingData}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    accessToken={accessToken}
                />
            )}
            {popupName === "updateDescriptionCard" && (
                <UpdateDescription
                    updateDescriptionCard={popupName === "updateDescriptionCard"}
                    setListingData={setListingData}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    accessToken={accessToken}
                />
            )}
            {(popupName === "updateCheckInInstructionsCard" || popupName === "updateCheckOutInstructionsCard") && (
                <UpdateCheckInInstructions
                    isCheckIn={popupName === "updateCheckInInstructionsCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    activateCard={activateCard}
                />
            )}
            {(popupName === "updateCheckInStepsCard" || popupName === "updateCheckOutStepsCard") && (
                <UpdateCheckInOutSteps
                    isCheckIn={popupName === "updateCheckInStepsCard"}
                    setListingData={setListingData}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    activateCard={activateCard}
                    accessToken={accessToken}
                />
            )}
            {(popupName === "updateCheckInTypeCard" || popupName === "updateCheckOutTypeCard") && (
                <UpdateCheckInOutType
                    isCheckIn={popupName === "updateCheckInTypeCard"}
                    setListingData={setListingData}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    activateCard={activateCard}
                    accessToken={accessToken}
                />
            )}
            {(popupName === "updateCheckOutTimeCard" || popupName === "updateCheckInTimeCard") && (
                <UpdateCheckInOutTime
                    isCheckIn={popupName === "updateCheckInTimeCard"}
                    setListingData={setListingData}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    activateCard={activateCard}
                    accessToken={accessToken}
                />
            )}
            {popupName === "updateListingAreaCard" && (
                <UpdateArea
                    updateListingAreaCard={popupName === "updateListingAreaCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateGuestsCard" && (
                <UpdateGuests
                    updateGuestsCard={popupName === "updateGuestsCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updatePropertyTypeCard" && (
                <UpdatePropertyType
                    updatePropertyTypeCard={popupName === "updatePropertyTypeCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updatePriceCard" && (
                <UpdatePrice
                    updatePriceCard={popupName === "updatePriceCard"}
                    listingData={listingData}
                    accessToken={accessToken}
                    setListingData={setListingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateDiscountCard" && (
                <UpdateDiscount
                    updateDiscountCard={popupName === "updateDiscountCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateCleaningCard" && (
                <UpdateCleaning
                    updateCleaningCard={popupName === "updateCleaningCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateExtraGuestCard" && (
                <UpdateExtraGuests
                    updateExtraGuestCard={popupName === "updateExtraGuestCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateMinimumStayCard" && (
                <UpdateMinimumStay
                    updateMinimumStayCard={popupName === "updateMinimumStayCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateAdvancedNoticeCard" && (
                <UpdateAdvancedNotice
                    updateAdvancedNoticeCard={popupName === "updateAdvancedNoticeCard"}
                    accessToken={accessToken}
                    setListingData={setListingData}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateAmenitiesCard" && (
                <UpdateAmenities
                    updateAmenitiesCard={popupName === "updateAmenitiesCard"}
                    accessToken={accessToken}
                    setListingData={setListingData}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateAddressCard" && (
                <UpdateAddress
                    updateAddressCard={popupName === "updateAddressCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updatePhotosCard" && (
                <UpdatePhotos
                    updatePhotosCard={popupName === "updatePhotosCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateAvailableDatesCard" && (
                <UpdateAvailableDates
                    updateAvailableDatesCard={popupName === "updateAvailableDatesCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateICalCard" && (
                <UpdateICal
                    accessToken={accessToken}
                    updateICalCard={popupName === "updateICalCard"}
                    setListingData={setListingData}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateICalExportCard" && (
                <UpdateExportICal updateICalExportCard={popupName === "updateICalExportCard"} deactivateUpdateCards={deactivateUpdateCards} iCalToken={iCalToken} />
            )}
            {popupName === "updateCancellationCard" && (
                <UpdateCancellationPolicy
                    updateCancellationCard={popupName === "updateCancellationCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateInstantBookCard" && (
                <UpdateInstantBook
                    updateInstantBookCard={popupName === "updateInstantBookCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateCheckInCheckOutCard" && (
                <UpdateCheckInCheckOut
                    updateCheckInCheckOutCard={popupName === "updateCheckInCheckOutCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updatePreparationTimeCard" && (
                <UpdatePreparationTime
                    updatePreparationTimeCard={popupName === "updatePreparationTimeCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateDepositCard" && (
                <UpdateDeposit
                    updateDepositCard={popupName === "updateDepositCard"}
                    setListingData={setListingData}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    accessToken={accessToken}
                />
            )}

            {popupName === "updateHouseRulesCard" && (
                <UpdateHouseRules
                    updateHouseRulesCard={popupName === "updateHouseRulesCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "updateListingStatusCard" && (
                <UpdateStatus
                    updateListingStatusCard={popupName === "updateListingStatusCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    activateCard={activateCard}
                />
            )}
            {popupName === "updateStraIDCard" && (
                <UpdateStraID
                    updateStraIDCard={popupName === "updateStraIDCard"}
                    setListingData={setListingData}
                    accessToken={accessToken}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                />
            )}
            {popupName === "deleteListingCard" && (
                <DeleteListing accessToken={accessToken} deleteListingCard={popupName === "deleteListingCard"} listingData={listingData} deactivateUpdateCards={deactivateUpdateCards} />
            )}
            {popupName === "deleteListingFailedCard" && <DeleteListingFailed deleteListingFailedCard={popupName === "deleteListingFailedCard"} deactivateUpdateCards={deactivateUpdateCards} />}
            {/* {popupName === "updateRestrictedDaysCard" && <UpdateRestrictedDays updateRestrictedDaysCard={popupName === "updateRestrictedDaysCard"} deactivateUpdateCards={deactivateUpdateCards} />} */}
            {/* {popupName === "updateDateBlockingCard" && <UpdateDateBlocking updateDateBlockingCard={popupName === "updateDateBlockingCard"} deactivateUpdateCards={deactivateUpdateCards} />} */}
            {popupName === "updatePaymentPolicyCard" && (
                <UpdatePaymentPolicy
                    updatePaymentPolicyCard={popupName === "updatePaymentPolicyCard"}
                    listingData={listingData}
                    deactivateUpdateCards={deactivateUpdateCards}
                    setListingData={setListingData}
                />
            )}
            {popupName === "updateWifi" && (
                <UpdateWifi
                    updateWifiCard={popupName === "updateWifi"}
                    listingData={listingData}
                    accessToken={accessToken}
                    deactivateUpdateCards={deactivateUpdateCards}
                    setListingData={setListingData}
                />
            )}
            {/* {popupName === "updateStripeSettingsCard" && <UpdatePayouts updateStripeSettingsCard={popupName === "updateStripeSettingsCard"} deactivateUpdateCards={deactivateUpdateCards} />} */}
            {/* {popupName === "updateListingAddStraIDCard" && (
                <UpdateAddStraID updateListingAddStraIDCard={popupName === "updateListingAddStraIDCard"} activateCard={activateCard} deactivateUpdateCards={deactivateUpdateCards} />
            )} */}
            {popupName === "blocker" && <HostawayEditListingBlocker deactivateUpdateCards={deactivateUpdateCards} hostawayListingId={listingData.hostawayListingId} />}
        </>
    );
}
