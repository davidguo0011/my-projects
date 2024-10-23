/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getListingModel } from "../graphql/queries";
import { updateListingModel } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ListingModelUpdateForm(props) {
  const {
    id: idProp,
    listingModel: listingModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    createdAt: "",
    owners: [],
    readOnlyOwners: [],
    placeId: "",
    unitNumber: "",
    streetNumber: "",
    street: "",
    suburb: "",
    postcode: "",
    state: "",
    stateShort: "",
    city: "",
    country: "",
    beds: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    typeOfPlace: "",
    propertyDescription: "",
    propertyDescriptionEmbedding: [],
    propertySoftEmbedding: [],
    trainingEvolutions: "",
    translatedPropertyDescription: "",
    listingImages: [],
    status: "",
    amenities: [],
    categories: [],
    tags: [],
    deposit: "",
    guests: "",
    minimumStay: "",
    minimumPrice: "",
    maximumPrice: "",
    nightlyPrices: [],
    maximumStay: "",
    weeklyMinimumPrice: "",
    weeklyMaximumStay: "",
    location: "",
    propertyTitle: "",
    internalName: "",
    translatedPropertyTitle: "",
    houseRules: [],
    draft: false,
    verified: false,
    verifiedDocuments: [],
    weeklyDiscount: "",
    monthlyDiscount: "",
    cleaningFee: "",
    cleaningFrequency: "",
    availabilityRange: "",
    rooms: [],
    totalReviews: "",
    qualityScore: "",
    overallAverage: "",
    communicationAverage: "",
    amenitiesAverage: "",
    cleaningAverage: "",
    locationAverage: "",
    serviceAverage: "",
    valueAverage: "",
    cancellationPolicy: "",
    onceOffPaymentsOnly: false,
    instantBookEnabled: false,
    stayType: "",
    averageStayLength: [],
    checkInTime: "",
    checkOutTime: "",
    checkInInstructions: "",
    checkOutInstructions: "",
    timeBeforeCheckIn: "",
    timeAfterCheckOut: "",
    extraGuestFee: "",
    extraMaxGuests: "",
    disabledDates: [],
    unavailableDates: [],
    iCalUnavailableDates: [],
    iCalImportLinks: [],
    straID: "",
    advanceNotice: "",
    advanceNoticeTime: "",
    approved: false,
    standardServiceFee: false,
    fliggyApproved: false,
    fliggyHidden: false,
    fliggyID: "",
    wifiName: "",
    wifiPassword: "",
    piggyApproved: false,
    piggyUpdatedAt: "",
    areaValue: "",
    areaUnit: "",
    xiaozhuRoomId: "",
    xiaozhuReviewApproved: false,
    xiaozhuAddressId: "",
    xiaozhuRejectReasons: [],
    customServiceFeePercent: "",
    hostawayListingId: "",
    hostawayLastSyncedAt: "",
    hostawayReviewLastSyncedAt: "",
    hostawaySyncEnabled: false,
    guestyListingId: "",
    guestyLastSyncedAt: "",
    guestySyncEnabled: false,
    homeheroListingId: [],
    homeheroLastSyncedAt: "",
    homeheroSyncEnabled: false,
    hospitableListingId: "",
    hospitableLastSyncedAt: "",
    hospitableSyncEnabled: false,
    hospitableSyncCompleted: false,
    invitedUsers: [],
    readOnlyInvitedUsers: [],
    seoUpdatedAt: "",
    lodgifyPropertyId: "",
    lodgifyRoomId: "",
    lodgifyLastSyncedAt: "",
    lodgifySyncEnabled: false,
    isHotel: false,
  };
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [owners, setOwners] = React.useState(initialValues.owners);
  const [readOnlyOwners, setReadOnlyOwners] = React.useState(
    initialValues.readOnlyOwners
  );
  const [placeId, setPlaceId] = React.useState(initialValues.placeId);
  const [unitNumber, setUnitNumber] = React.useState(initialValues.unitNumber);
  const [streetNumber, setStreetNumber] = React.useState(
    initialValues.streetNumber
  );
  const [street, setStreet] = React.useState(initialValues.street);
  const [suburb, setSuburb] = React.useState(initialValues.suburb);
  const [postcode, setPostcode] = React.useState(initialValues.postcode);
  const [state, setState] = React.useState(initialValues.state);
  const [stateShort, setStateShort] = React.useState(initialValues.stateShort);
  const [city, setCity] = React.useState(initialValues.city);
  const [country, setCountry] = React.useState(initialValues.country);
  const [beds, setBeds] = React.useState(initialValues.beds);
  const [bedrooms, setBedrooms] = React.useState(initialValues.bedrooms);
  const [bathrooms, setBathrooms] = React.useState(initialValues.bathrooms);
  const [propertyType, setPropertyType] = React.useState(
    initialValues.propertyType
  );
  const [typeOfPlace, setTypeOfPlace] = React.useState(
    initialValues.typeOfPlace
  );
  const [propertyDescription, setPropertyDescription] = React.useState(
    initialValues.propertyDescription
  );
  const [propertyDescriptionEmbedding, setPropertyDescriptionEmbedding] =
    React.useState(initialValues.propertyDescriptionEmbedding);
  const [propertySoftEmbedding, setPropertySoftEmbedding] = React.useState(
    initialValues.propertySoftEmbedding
  );
  const [trainingEvolutions, setTrainingEvolutions] = React.useState(
    initialValues.trainingEvolutions
  );
  const [translatedPropertyDescription, setTranslatedPropertyDescription] =
    React.useState(initialValues.translatedPropertyDescription);
  const [listingImages, setListingImages] = React.useState(
    initialValues.listingImages
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [amenities, setAmenities] = React.useState(initialValues.amenities);
  const [categories, setCategories] = React.useState(initialValues.categories);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [deposit, setDeposit] = React.useState(initialValues.deposit);
  const [guests, setGuests] = React.useState(initialValues.guests);
  const [minimumStay, setMinimumStay] = React.useState(
    initialValues.minimumStay
  );
  const [minimumPrice, setMinimumPrice] = React.useState(
    initialValues.minimumPrice
  );
  const [maximumPrice, setMaximumPrice] = React.useState(
    initialValues.maximumPrice
  );
  const [nightlyPrices, setNightlyPrices] = React.useState(
    initialValues.nightlyPrices
  );
  const [maximumStay, setMaximumStay] = React.useState(
    initialValues.maximumStay
  );
  const [weeklyMinimumPrice, setWeeklyMinimumPrice] = React.useState(
    initialValues.weeklyMinimumPrice
  );
  const [weeklyMaximumStay, setWeeklyMaximumStay] = React.useState(
    initialValues.weeklyMaximumStay
  );
  const [location, setLocation] = React.useState(initialValues.location);
  const [propertyTitle, setPropertyTitle] = React.useState(
    initialValues.propertyTitle
  );
  const [internalName, setInternalName] = React.useState(
    initialValues.internalName
  );
  const [translatedPropertyTitle, setTranslatedPropertyTitle] = React.useState(
    initialValues.translatedPropertyTitle
  );
  const [houseRules, setHouseRules] = React.useState(initialValues.houseRules);
  const [draft, setDraft] = React.useState(initialValues.draft);
  const [verified, setVerified] = React.useState(initialValues.verified);
  const [verifiedDocuments, setVerifiedDocuments] = React.useState(
    initialValues.verifiedDocuments
  );
  const [weeklyDiscount, setWeeklyDiscount] = React.useState(
    initialValues.weeklyDiscount
  );
  const [monthlyDiscount, setMonthlyDiscount] = React.useState(
    initialValues.monthlyDiscount
  );
  const [cleaningFee, setCleaningFee] = React.useState(
    initialValues.cleaningFee
  );
  const [cleaningFrequency, setCleaningFrequency] = React.useState(
    initialValues.cleaningFrequency
  );
  const [availabilityRange, setAvailabilityRange] = React.useState(
    initialValues.availabilityRange
  );
  const [rooms, setRooms] = React.useState(initialValues.rooms);
  const [totalReviews, setTotalReviews] = React.useState(
    initialValues.totalReviews
  );
  const [qualityScore, setQualityScore] = React.useState(
    initialValues.qualityScore
  );
  const [overallAverage, setOverallAverage] = React.useState(
    initialValues.overallAverage
  );
  const [communicationAverage, setCommunicationAverage] = React.useState(
    initialValues.communicationAverage
  );
  const [amenitiesAverage, setAmenitiesAverage] = React.useState(
    initialValues.amenitiesAverage
  );
  const [cleaningAverage, setCleaningAverage] = React.useState(
    initialValues.cleaningAverage
  );
  const [locationAverage, setLocationAverage] = React.useState(
    initialValues.locationAverage
  );
  const [serviceAverage, setServiceAverage] = React.useState(
    initialValues.serviceAverage
  );
  const [valueAverage, setValueAverage] = React.useState(
    initialValues.valueAverage
  );
  const [cancellationPolicy, setCancellationPolicy] = React.useState(
    initialValues.cancellationPolicy
  );
  const [onceOffPaymentsOnly, setOnceOffPaymentsOnly] = React.useState(
    initialValues.onceOffPaymentsOnly
  );
  const [instantBookEnabled, setInstantBookEnabled] = React.useState(
    initialValues.instantBookEnabled
  );
  const [stayType, setStayType] = React.useState(initialValues.stayType);
  const [averageStayLength, setAverageStayLength] = React.useState(
    initialValues.averageStayLength
  );
  const [checkInTime, setCheckInTime] = React.useState(
    initialValues.checkInTime
  );
  const [checkOutTime, setCheckOutTime] = React.useState(
    initialValues.checkOutTime
  );
  const [checkInInstructions, setCheckInInstructions] = React.useState(
    initialValues.checkInInstructions
  );
  const [checkOutInstructions, setCheckOutInstructions] = React.useState(
    initialValues.checkOutInstructions
  );
  const [timeBeforeCheckIn, setTimeBeforeCheckIn] = React.useState(
    initialValues.timeBeforeCheckIn
  );
  const [timeAfterCheckOut, setTimeAfterCheckOut] = React.useState(
    initialValues.timeAfterCheckOut
  );
  const [extraGuestFee, setExtraGuestFee] = React.useState(
    initialValues.extraGuestFee
  );
  const [extraMaxGuests, setExtraMaxGuests] = React.useState(
    initialValues.extraMaxGuests
  );
  const [disabledDates, setDisabledDates] = React.useState(
    initialValues.disabledDates
  );
  const [unavailableDates, setUnavailableDates] = React.useState(
    initialValues.unavailableDates
  );
  const [iCalUnavailableDates, setICalUnavailableDates] = React.useState(
    initialValues.iCalUnavailableDates
  );
  const [iCalImportLinks, setICalImportLinks] = React.useState(
    initialValues.iCalImportLinks
  );
  const [straID, setStraID] = React.useState(initialValues.straID);
  const [advanceNotice, setAdvanceNotice] = React.useState(
    initialValues.advanceNotice
  );
  const [advanceNoticeTime, setAdvanceNoticeTime] = React.useState(
    initialValues.advanceNoticeTime
  );
  const [approved, setApproved] = React.useState(initialValues.approved);
  const [standardServiceFee, setStandardServiceFee] = React.useState(
    initialValues.standardServiceFee
  );
  const [fliggyApproved, setFliggyApproved] = React.useState(
    initialValues.fliggyApproved
  );
  const [fliggyHidden, setFliggyHidden] = React.useState(
    initialValues.fliggyHidden
  );
  const [fliggyID, setFliggyID] = React.useState(initialValues.fliggyID);
  const [wifiName, setWifiName] = React.useState(initialValues.wifiName);
  const [wifiPassword, setWifiPassword] = React.useState(
    initialValues.wifiPassword
  );
  const [piggyApproved, setPiggyApproved] = React.useState(
    initialValues.piggyApproved
  );
  const [piggyUpdatedAt, setPiggyUpdatedAt] = React.useState(
    initialValues.piggyUpdatedAt
  );
  const [areaValue, setAreaValue] = React.useState(initialValues.areaValue);
  const [areaUnit, setAreaUnit] = React.useState(initialValues.areaUnit);
  const [xiaozhuRoomId, setXiaozhuRoomId] = React.useState(
    initialValues.xiaozhuRoomId
  );
  const [xiaozhuReviewApproved, setXiaozhuReviewApproved] = React.useState(
    initialValues.xiaozhuReviewApproved
  );
  const [xiaozhuAddressId, setXiaozhuAddressId] = React.useState(
    initialValues.xiaozhuAddressId
  );
  const [xiaozhuRejectReasons, setXiaozhuRejectReasons] = React.useState(
    initialValues.xiaozhuRejectReasons
  );
  const [customServiceFeePercent, setCustomServiceFeePercent] = React.useState(
    initialValues.customServiceFeePercent
  );
  const [hostawayListingId, setHostawayListingId] = React.useState(
    initialValues.hostawayListingId
  );
  const [hostawayLastSyncedAt, setHostawayLastSyncedAt] = React.useState(
    initialValues.hostawayLastSyncedAt
  );
  const [hostawayReviewLastSyncedAt, setHostawayReviewLastSyncedAt] =
    React.useState(initialValues.hostawayReviewLastSyncedAt);
  const [hostawaySyncEnabled, setHostawaySyncEnabled] = React.useState(
    initialValues.hostawaySyncEnabled
  );
  const [guestyListingId, setGuestyListingId] = React.useState(
    initialValues.guestyListingId
  );
  const [guestyLastSyncedAt, setGuestyLastSyncedAt] = React.useState(
    initialValues.guestyLastSyncedAt
  );
  const [guestySyncEnabled, setGuestySyncEnabled] = React.useState(
    initialValues.guestySyncEnabled
  );
  const [homeheroListingId, setHomeheroListingId] = React.useState(
    initialValues.homeheroListingId
  );
  const [homeheroLastSyncedAt, setHomeheroLastSyncedAt] = React.useState(
    initialValues.homeheroLastSyncedAt
  );
  const [homeheroSyncEnabled, setHomeheroSyncEnabled] = React.useState(
    initialValues.homeheroSyncEnabled
  );
  const [hospitableListingId, setHospitableListingId] = React.useState(
    initialValues.hospitableListingId
  );
  const [hospitableLastSyncedAt, setHospitableLastSyncedAt] = React.useState(
    initialValues.hospitableLastSyncedAt
  );
  const [hospitableSyncEnabled, setHospitableSyncEnabled] = React.useState(
    initialValues.hospitableSyncEnabled
  );
  const [hospitableSyncCompleted, setHospitableSyncCompleted] = React.useState(
    initialValues.hospitableSyncCompleted
  );
  const [invitedUsers, setInvitedUsers] = React.useState(
    initialValues.invitedUsers
  );
  const [readOnlyInvitedUsers, setReadOnlyInvitedUsers] = React.useState(
    initialValues.readOnlyInvitedUsers
  );
  const [seoUpdatedAt, setSeoUpdatedAt] = React.useState(
    initialValues.seoUpdatedAt
  );
  const [lodgifyPropertyId, setLodgifyPropertyId] = React.useState(
    initialValues.lodgifyPropertyId
  );
  const [lodgifyRoomId, setLodgifyRoomId] = React.useState(
    initialValues.lodgifyRoomId
  );
  const [lodgifyLastSyncedAt, setLodgifyLastSyncedAt] = React.useState(
    initialValues.lodgifyLastSyncedAt
  );
  const [lodgifySyncEnabled, setLodgifySyncEnabled] = React.useState(
    initialValues.lodgifySyncEnabled
  );
  const [isHotel, setIsHotel] = React.useState(initialValues.isHotel);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = listingModelRecord
      ? { ...initialValues, ...listingModelRecord }
      : initialValues;
    setCreatedAt(cleanValues.createdAt);
    setOwners(cleanValues.owners ?? []);
    setCurrentOwnersValue("");
    setReadOnlyOwners(cleanValues.readOnlyOwners ?? []);
    setCurrentReadOnlyOwnersValue("");
    setPlaceId(cleanValues.placeId);
    setUnitNumber(cleanValues.unitNumber);
    setStreetNumber(cleanValues.streetNumber);
    setStreet(cleanValues.street);
    setSuburb(cleanValues.suburb);
    setPostcode(cleanValues.postcode);
    setState(cleanValues.state);
    setStateShort(cleanValues.stateShort);
    setCity(cleanValues.city);
    setCountry(cleanValues.country);
    setBeds(cleanValues.beds);
    setBedrooms(cleanValues.bedrooms);
    setBathrooms(cleanValues.bathrooms);
    setPropertyType(cleanValues.propertyType);
    setTypeOfPlace(cleanValues.typeOfPlace);
    setPropertyDescription(cleanValues.propertyDescription);
    setPropertyDescriptionEmbedding(
      cleanValues.propertyDescriptionEmbedding ?? []
    );
    setCurrentPropertyDescriptionEmbeddingValue("");
    setPropertySoftEmbedding(cleanValues.propertySoftEmbedding ?? []);
    setCurrentPropertySoftEmbeddingValue("");
    setTrainingEvolutions(cleanValues.trainingEvolutions);
    setTranslatedPropertyDescription(cleanValues.translatedPropertyDescription);
    setListingImages(cleanValues.listingImages ?? []);
    setCurrentListingImagesValue("");
    setStatus(cleanValues.status);
    setAmenities(cleanValues.amenities ?? []);
    setCurrentAmenitiesValue("");
    setCategories(cleanValues.categories ?? []);
    setCurrentCategoriesValue("");
    setTags(cleanValues.tags ?? []);
    setCurrentTagsValue("");
    setDeposit(cleanValues.deposit);
    setGuests(cleanValues.guests);
    setMinimumStay(cleanValues.minimumStay);
    setMinimumPrice(cleanValues.minimumPrice);
    setMaximumPrice(cleanValues.maximumPrice);
    setNightlyPrices(cleanValues.nightlyPrices ?? []);
    setCurrentNightlyPricesValue("");
    setMaximumStay(cleanValues.maximumStay);
    setWeeklyMinimumPrice(cleanValues.weeklyMinimumPrice);
    setWeeklyMaximumStay(cleanValues.weeklyMaximumStay);
    setLocation(
      typeof cleanValues.location === "string" || cleanValues.location === null
        ? cleanValues.location
        : JSON.stringify(cleanValues.location)
    );
    setPropertyTitle(cleanValues.propertyTitle);
    setInternalName(cleanValues.internalName);
    setTranslatedPropertyTitle(cleanValues.translatedPropertyTitle);
    setHouseRules(cleanValues.houseRules ?? []);
    setCurrentHouseRulesValue("");
    setDraft(cleanValues.draft);
    setVerified(cleanValues.verified);
    setVerifiedDocuments(cleanValues.verifiedDocuments ?? []);
    setCurrentVerifiedDocumentsValue("");
    setWeeklyDiscount(cleanValues.weeklyDiscount);
    setMonthlyDiscount(cleanValues.monthlyDiscount);
    setCleaningFee(cleanValues.cleaningFee);
    setCleaningFrequency(cleanValues.cleaningFrequency);
    setAvailabilityRange(cleanValues.availabilityRange);
    setRooms(cleanValues.rooms ?? []);
    setCurrentRoomsValue("");
    setTotalReviews(cleanValues.totalReviews);
    setQualityScore(cleanValues.qualityScore);
    setOverallAverage(cleanValues.overallAverage);
    setCommunicationAverage(cleanValues.communicationAverage);
    setAmenitiesAverage(cleanValues.amenitiesAverage);
    setCleaningAverage(cleanValues.cleaningAverage);
    setLocationAverage(cleanValues.locationAverage);
    setServiceAverage(cleanValues.serviceAverage);
    setValueAverage(cleanValues.valueAverage);
    setCancellationPolicy(cleanValues.cancellationPolicy);
    setOnceOffPaymentsOnly(cleanValues.onceOffPaymentsOnly);
    setInstantBookEnabled(cleanValues.instantBookEnabled);
    setStayType(cleanValues.stayType);
    setAverageStayLength(cleanValues.averageStayLength ?? []);
    setCurrentAverageStayLengthValue("");
    setCheckInTime(cleanValues.checkInTime);
    setCheckOutTime(cleanValues.checkOutTime);
    setCheckInInstructions(cleanValues.checkInInstructions);
    setCheckOutInstructions(cleanValues.checkOutInstructions);
    setTimeBeforeCheckIn(cleanValues.timeBeforeCheckIn);
    setTimeAfterCheckOut(cleanValues.timeAfterCheckOut);
    setExtraGuestFee(cleanValues.extraGuestFee);
    setExtraMaxGuests(cleanValues.extraMaxGuests);
    setDisabledDates(cleanValues.disabledDates ?? []);
    setCurrentDisabledDatesValue("");
    setUnavailableDates(cleanValues.unavailableDates ?? []);
    setCurrentUnavailableDatesValue("");
    setICalUnavailableDates(cleanValues.iCalUnavailableDates ?? []);
    setCurrentICalUnavailableDatesValue("");
    setICalImportLinks(cleanValues.iCalImportLinks ?? []);
    setCurrentICalImportLinksValue("");
    setStraID(cleanValues.straID);
    setAdvanceNotice(cleanValues.advanceNotice);
    setAdvanceNoticeTime(cleanValues.advanceNoticeTime);
    setApproved(cleanValues.approved);
    setStandardServiceFee(cleanValues.standardServiceFee);
    setFliggyApproved(cleanValues.fliggyApproved);
    setFliggyHidden(cleanValues.fliggyHidden);
    setFliggyID(cleanValues.fliggyID);
    setWifiName(cleanValues.wifiName);
    setWifiPassword(cleanValues.wifiPassword);
    setPiggyApproved(cleanValues.piggyApproved);
    setPiggyUpdatedAt(cleanValues.piggyUpdatedAt);
    setAreaValue(cleanValues.areaValue);
    setAreaUnit(cleanValues.areaUnit);
    setXiaozhuRoomId(cleanValues.xiaozhuRoomId);
    setXiaozhuReviewApproved(cleanValues.xiaozhuReviewApproved);
    setXiaozhuAddressId(cleanValues.xiaozhuAddressId);
    setXiaozhuRejectReasons(cleanValues.xiaozhuRejectReasons ?? []);
    setCurrentXiaozhuRejectReasonsValue("");
    setCustomServiceFeePercent(cleanValues.customServiceFeePercent);
    setHostawayListingId(cleanValues.hostawayListingId);
    setHostawayLastSyncedAt(cleanValues.hostawayLastSyncedAt);
    setHostawayReviewLastSyncedAt(cleanValues.hostawayReviewLastSyncedAt);
    setHostawaySyncEnabled(cleanValues.hostawaySyncEnabled);
    setGuestyListingId(cleanValues.guestyListingId);
    setGuestyLastSyncedAt(cleanValues.guestyLastSyncedAt);
    setGuestySyncEnabled(cleanValues.guestySyncEnabled);
    setHomeheroListingId(cleanValues.homeheroListingId ?? []);
    setCurrentHomeheroListingIdValue("");
    setHomeheroLastSyncedAt(cleanValues.homeheroLastSyncedAt);
    setHomeheroSyncEnabled(cleanValues.homeheroSyncEnabled);
    setHospitableListingId(cleanValues.hospitableListingId);
    setHospitableLastSyncedAt(cleanValues.hospitableLastSyncedAt);
    setHospitableSyncEnabled(cleanValues.hospitableSyncEnabled);
    setHospitableSyncCompleted(cleanValues.hospitableSyncCompleted);
    setInvitedUsers(cleanValues.invitedUsers ?? []);
    setCurrentInvitedUsersValue("");
    setReadOnlyInvitedUsers(cleanValues.readOnlyInvitedUsers ?? []);
    setCurrentReadOnlyInvitedUsersValue("");
    setSeoUpdatedAt(cleanValues.seoUpdatedAt);
    setLodgifyPropertyId(cleanValues.lodgifyPropertyId);
    setLodgifyRoomId(cleanValues.lodgifyRoomId);
    setLodgifyLastSyncedAt(cleanValues.lodgifyLastSyncedAt);
    setLodgifySyncEnabled(cleanValues.lodgifySyncEnabled);
    setIsHotel(cleanValues.isHotel);
    setErrors({});
  };
  const [listingModelRecord, setListingModelRecord] = React.useState(
    listingModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getListingModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getListingModel
        : listingModelModelProp;
      setListingModelRecord(record);
    };
    queryData();
  }, [idProp, listingModelModelProp]);
  React.useEffect(resetStateValues, [listingModelRecord]);
  const [currentOwnersValue, setCurrentOwnersValue] = React.useState("");
  const ownersRef = React.createRef();
  const [currentReadOnlyOwnersValue, setCurrentReadOnlyOwnersValue] =
    React.useState("");
  const readOnlyOwnersRef = React.createRef();
  const [
    currentPropertyDescriptionEmbeddingValue,
    setCurrentPropertyDescriptionEmbeddingValue,
  ] = React.useState("");
  const propertyDescriptionEmbeddingRef = React.createRef();
  const [
    currentPropertySoftEmbeddingValue,
    setCurrentPropertySoftEmbeddingValue,
  ] = React.useState("");
  const propertySoftEmbeddingRef = React.createRef();
  const [currentListingImagesValue, setCurrentListingImagesValue] =
    React.useState("");
  const listingImagesRef = React.createRef();
  const [currentAmenitiesValue, setCurrentAmenitiesValue] = React.useState("");
  const amenitiesRef = React.createRef();
  const [currentCategoriesValue, setCurrentCategoriesValue] =
    React.useState("");
  const categoriesRef = React.createRef();
  const [currentTagsValue, setCurrentTagsValue] = React.useState("");
  const tagsRef = React.createRef();
  const [currentNightlyPricesValue, setCurrentNightlyPricesValue] =
    React.useState("");
  const nightlyPricesRef = React.createRef();
  const [currentHouseRulesValue, setCurrentHouseRulesValue] =
    React.useState("");
  const houseRulesRef = React.createRef();
  const [currentVerifiedDocumentsValue, setCurrentVerifiedDocumentsValue] =
    React.useState("");
  const verifiedDocumentsRef = React.createRef();
  const [currentRoomsValue, setCurrentRoomsValue] = React.useState("");
  const roomsRef = React.createRef();
  const [currentAverageStayLengthValue, setCurrentAverageStayLengthValue] =
    React.useState("");
  const averageStayLengthRef = React.createRef();
  const [currentDisabledDatesValue, setCurrentDisabledDatesValue] =
    React.useState("");
  const disabledDatesRef = React.createRef();
  const [currentUnavailableDatesValue, setCurrentUnavailableDatesValue] =
    React.useState("");
  const unavailableDatesRef = React.createRef();
  const [
    currentICalUnavailableDatesValue,
    setCurrentICalUnavailableDatesValue,
  ] = React.useState("");
  const iCalUnavailableDatesRef = React.createRef();
  const [currentICalImportLinksValue, setCurrentICalImportLinksValue] =
    React.useState("");
  const iCalImportLinksRef = React.createRef();
  const [
    currentXiaozhuRejectReasonsValue,
    setCurrentXiaozhuRejectReasonsValue,
  ] = React.useState("");
  const xiaozhuRejectReasonsRef = React.createRef();
  const [currentHomeheroListingIdValue, setCurrentHomeheroListingIdValue] =
    React.useState("");
  const homeheroListingIdRef = React.createRef();
  const [currentInvitedUsersValue, setCurrentInvitedUsersValue] =
    React.useState("");
  const invitedUsersRef = React.createRef();
  const [
    currentReadOnlyInvitedUsersValue,
    setCurrentReadOnlyInvitedUsersValue,
  ] = React.useState("");
  const readOnlyInvitedUsersRef = React.createRef();
  const validations = {
    createdAt: [],
    owners: [{ type: "Required" }],
    readOnlyOwners: [],
    placeId: [],
    unitNumber: [],
    streetNumber: [],
    street: [],
    suburb: [],
    postcode: [],
    state: [],
    stateShort: [],
    city: [],
    country: [],
    beds: [],
    bedrooms: [],
    bathrooms: [],
    propertyType: [],
    typeOfPlace: [],
    propertyDescription: [],
    propertyDescriptionEmbedding: [],
    propertySoftEmbedding: [],
    trainingEvolutions: [],
    translatedPropertyDescription: [],
    listingImages: [{ type: "JSON" }],
    status: [],
    amenities: [],
    categories: [],
    tags: [],
    deposit: [],
    guests: [],
    minimumStay: [],
    minimumPrice: [],
    maximumPrice: [],
    nightlyPrices: [{ type: "JSON" }],
    maximumStay: [],
    weeklyMinimumPrice: [],
    weeklyMaximumStay: [],
    location: [{ type: "JSON" }],
    propertyTitle: [],
    internalName: [],
    translatedPropertyTitle: [],
    houseRules: [],
    draft: [],
    verified: [],
    verifiedDocuments: [],
    weeklyDiscount: [],
    monthlyDiscount: [],
    cleaningFee: [],
    cleaningFrequency: [],
    availabilityRange: [],
    rooms: [{ type: "JSON" }],
    totalReviews: [],
    qualityScore: [],
    overallAverage: [],
    communicationAverage: [],
    amenitiesAverage: [],
    cleaningAverage: [],
    locationAverage: [],
    serviceAverage: [],
    valueAverage: [],
    cancellationPolicy: [],
    onceOffPaymentsOnly: [],
    instantBookEnabled: [],
    stayType: [],
    averageStayLength: [],
    checkInTime: [],
    checkOutTime: [],
    checkInInstructions: [],
    checkOutInstructions: [],
    timeBeforeCheckIn: [],
    timeAfterCheckOut: [],
    extraGuestFee: [],
    extraMaxGuests: [],
    disabledDates: [{ type: "JSON" }],
    unavailableDates: [{ type: "JSON" }],
    iCalUnavailableDates: [{ type: "JSON" }],
    iCalImportLinks: [],
    straID: [],
    advanceNotice: [],
    advanceNoticeTime: [],
    approved: [],
    standardServiceFee: [],
    fliggyApproved: [],
    fliggyHidden: [],
    fliggyID: [],
    wifiName: [],
    wifiPassword: [],
    piggyApproved: [],
    piggyUpdatedAt: [],
    areaValue: [],
    areaUnit: [],
    xiaozhuRoomId: [],
    xiaozhuReviewApproved: [],
    xiaozhuAddressId: [],
    xiaozhuRejectReasons: [],
    customServiceFeePercent: [],
    hostawayListingId: [],
    hostawayLastSyncedAt: [],
    hostawayReviewLastSyncedAt: [],
    hostawaySyncEnabled: [],
    guestyListingId: [],
    guestyLastSyncedAt: [],
    guestySyncEnabled: [],
    homeheroListingId: [{ type: "JSON" }],
    homeheroLastSyncedAt: [],
    homeheroSyncEnabled: [],
    hospitableListingId: [],
    hospitableLastSyncedAt: [],
    hospitableSyncEnabled: [],
    hospitableSyncCompleted: [],
    invitedUsers: [],
    readOnlyInvitedUsers: [],
    seoUpdatedAt: [],
    lodgifyPropertyId: [],
    lodgifyRoomId: [],
    lodgifyLastSyncedAt: [],
    lodgifySyncEnabled: [],
    isHotel: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          createdAt: createdAt ?? null,
          owners,
          readOnlyOwners: readOnlyOwners ?? null,
          placeId: placeId ?? null,
          unitNumber: unitNumber ?? null,
          streetNumber: streetNumber ?? null,
          street: street ?? null,
          suburb: suburb ?? null,
          postcode: postcode ?? null,
          state: state ?? null,
          stateShort: stateShort ?? null,
          city: city ?? null,
          country: country ?? null,
          beds: beds ?? null,
          bedrooms: bedrooms ?? null,
          bathrooms: bathrooms ?? null,
          propertyType: propertyType ?? null,
          typeOfPlace: typeOfPlace ?? null,
          propertyDescription: propertyDescription ?? null,
          propertyDescriptionEmbedding: propertyDescriptionEmbedding ?? null,
          propertySoftEmbedding: propertySoftEmbedding ?? null,
          trainingEvolutions: trainingEvolutions ?? null,
          translatedPropertyDescription: translatedPropertyDescription ?? null,
          listingImages: listingImages ?? null,
          status: status ?? null,
          amenities: amenities ?? null,
          categories: categories ?? null,
          tags: tags ?? null,
          deposit: deposit ?? null,
          guests: guests ?? null,
          minimumStay: minimumStay ?? null,
          minimumPrice: minimumPrice ?? null,
          maximumPrice: maximumPrice ?? null,
          nightlyPrices: nightlyPrices ?? null,
          maximumStay: maximumStay ?? null,
          weeklyMinimumPrice: weeklyMinimumPrice ?? null,
          weeklyMaximumStay: weeklyMaximumStay ?? null,
          location: location ?? null,
          propertyTitle: propertyTitle ?? null,
          internalName: internalName ?? null,
          translatedPropertyTitle: translatedPropertyTitle ?? null,
          houseRules: houseRules ?? null,
          draft: draft ?? null,
          verified: verified ?? null,
          verifiedDocuments: verifiedDocuments ?? null,
          weeklyDiscount: weeklyDiscount ?? null,
          monthlyDiscount: monthlyDiscount ?? null,
          cleaningFee: cleaningFee ?? null,
          cleaningFrequency: cleaningFrequency ?? null,
          availabilityRange: availabilityRange ?? null,
          rooms: rooms ?? null,
          totalReviews: totalReviews ?? null,
          qualityScore: qualityScore ?? null,
          overallAverage: overallAverage ?? null,
          communicationAverage: communicationAverage ?? null,
          amenitiesAverage: amenitiesAverage ?? null,
          cleaningAverage: cleaningAverage ?? null,
          locationAverage: locationAverage ?? null,
          serviceAverage: serviceAverage ?? null,
          valueAverage: valueAverage ?? null,
          cancellationPolicy: cancellationPolicy ?? null,
          onceOffPaymentsOnly: onceOffPaymentsOnly ?? null,
          instantBookEnabled: instantBookEnabled ?? null,
          stayType: stayType ?? null,
          averageStayLength: averageStayLength ?? null,
          checkInTime: checkInTime ?? null,
          checkOutTime: checkOutTime ?? null,
          checkInInstructions: checkInInstructions ?? null,
          checkOutInstructions: checkOutInstructions ?? null,
          timeBeforeCheckIn: timeBeforeCheckIn ?? null,
          timeAfterCheckOut: timeAfterCheckOut ?? null,
          extraGuestFee: extraGuestFee ?? null,
          extraMaxGuests: extraMaxGuests ?? null,
          disabledDates: disabledDates ?? null,
          unavailableDates: unavailableDates ?? null,
          iCalUnavailableDates: iCalUnavailableDates ?? null,
          iCalImportLinks: iCalImportLinks ?? null,
          straID: straID ?? null,
          advanceNotice: advanceNotice ?? null,
          advanceNoticeTime: advanceNoticeTime ?? null,
          approved: approved ?? null,
          standardServiceFee: standardServiceFee ?? null,
          fliggyApproved: fliggyApproved ?? null,
          fliggyHidden: fliggyHidden ?? null,
          fliggyID: fliggyID ?? null,
          wifiName: wifiName ?? null,
          wifiPassword: wifiPassword ?? null,
          piggyApproved: piggyApproved ?? null,
          piggyUpdatedAt: piggyUpdatedAt ?? null,
          areaValue: areaValue ?? null,
          areaUnit: areaUnit ?? null,
          xiaozhuRoomId: xiaozhuRoomId ?? null,
          xiaozhuReviewApproved: xiaozhuReviewApproved ?? null,
          xiaozhuAddressId: xiaozhuAddressId ?? null,
          xiaozhuRejectReasons: xiaozhuRejectReasons ?? null,
          customServiceFeePercent: customServiceFeePercent ?? null,
          hostawayListingId: hostawayListingId ?? null,
          hostawayLastSyncedAt: hostawayLastSyncedAt ?? null,
          hostawayReviewLastSyncedAt: hostawayReviewLastSyncedAt ?? null,
          hostawaySyncEnabled: hostawaySyncEnabled ?? null,
          guestyListingId: guestyListingId ?? null,
          guestyLastSyncedAt: guestyLastSyncedAt ?? null,
          guestySyncEnabled: guestySyncEnabled ?? null,
          homeheroListingId: homeheroListingId ?? null,
          homeheroLastSyncedAt: homeheroLastSyncedAt ?? null,
          homeheroSyncEnabled: homeheroSyncEnabled ?? null,
          hospitableListingId: hospitableListingId ?? null,
          hospitableLastSyncedAt: hospitableLastSyncedAt ?? null,
          hospitableSyncEnabled: hospitableSyncEnabled ?? null,
          hospitableSyncCompleted: hospitableSyncCompleted ?? null,
          invitedUsers: invitedUsers ?? null,
          readOnlyInvitedUsers: readOnlyInvitedUsers ?? null,
          seoUpdatedAt: seoUpdatedAt ?? null,
          lodgifyPropertyId: lodgifyPropertyId ?? null,
          lodgifyRoomId: lodgifyRoomId ?? null,
          lodgifyLastSyncedAt: lodgifyLastSyncedAt ?? null,
          lodgifySyncEnabled: lodgifySyncEnabled ?? null,
          isHotel: isHotel ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateListingModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: listingModelRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ListingModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdAt: value,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners: values,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.owners ?? values;
          }
          setOwners(values);
          setCurrentOwnersValue("");
        }}
        currentFieldValue={currentOwnersValue}
        label={"Owners"}
        items={owners}
        hasError={errors?.owners?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("owners", currentOwnersValue)
        }
        errorMessage={errors?.owners?.errorMessage}
        setFieldValue={setCurrentOwnersValue}
        inputFieldRef={ownersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Owners"
          isRequired={true}
          isReadOnly={false}
          value={currentOwnersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.owners?.hasError) {
              runValidationTasks("owners", value);
            }
            setCurrentOwnersValue(value);
          }}
          onBlur={() => runValidationTasks("owners", currentOwnersValue)}
          errorMessage={errors.owners?.errorMessage}
          hasError={errors.owners?.hasError}
          ref={ownersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "owners")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners: values,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.readOnlyOwners ?? values;
          }
          setReadOnlyOwners(values);
          setCurrentReadOnlyOwnersValue("");
        }}
        currentFieldValue={currentReadOnlyOwnersValue}
        label={"Read only owners"}
        items={readOnlyOwners}
        hasError={errors?.readOnlyOwners?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("readOnlyOwners", currentReadOnlyOwnersValue)
        }
        errorMessage={errors?.readOnlyOwners?.errorMessage}
        setFieldValue={setCurrentReadOnlyOwnersValue}
        inputFieldRef={readOnlyOwnersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Read only owners"
          isRequired={false}
          isReadOnly={false}
          value={currentReadOnlyOwnersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.readOnlyOwners?.hasError) {
              runValidationTasks("readOnlyOwners", value);
            }
            setCurrentReadOnlyOwnersValue(value);
          }}
          onBlur={() =>
            runValidationTasks("readOnlyOwners", currentReadOnlyOwnersValue)
          }
          errorMessage={errors.readOnlyOwners?.errorMessage}
          hasError={errors.readOnlyOwners?.hasError}
          ref={readOnlyOwnersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "readOnlyOwners")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Place id"
        isRequired={false}
        isReadOnly={false}
        value={placeId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId: value,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.placeId ?? value;
          }
          if (errors.placeId?.hasError) {
            runValidationTasks("placeId", value);
          }
          setPlaceId(value);
        }}
        onBlur={() => runValidationTasks("placeId", placeId)}
        errorMessage={errors.placeId?.errorMessage}
        hasError={errors.placeId?.hasError}
        {...getOverrideProps(overrides, "placeId")}
      ></TextField>
      <TextField
        label="Unit number"
        isRequired={false}
        isReadOnly={false}
        value={unitNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber: value,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.unitNumber ?? value;
          }
          if (errors.unitNumber?.hasError) {
            runValidationTasks("unitNumber", value);
          }
          setUnitNumber(value);
        }}
        onBlur={() => runValidationTasks("unitNumber", unitNumber)}
        errorMessage={errors.unitNumber?.errorMessage}
        hasError={errors.unitNumber?.hasError}
        {...getOverrideProps(overrides, "unitNumber")}
      ></TextField>
      <TextField
        label="Street number"
        isRequired={false}
        isReadOnly={false}
        value={streetNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber: value,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.streetNumber ?? value;
          }
          if (errors.streetNumber?.hasError) {
            runValidationTasks("streetNumber", value);
          }
          setStreetNumber(value);
        }}
        onBlur={() => runValidationTasks("streetNumber", streetNumber)}
        errorMessage={errors.streetNumber?.errorMessage}
        hasError={errors.streetNumber?.hasError}
        {...getOverrideProps(overrides, "streetNumber")}
      ></TextField>
      <TextField
        label="Street"
        isRequired={false}
        isReadOnly={false}
        value={street}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street: value,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.street ?? value;
          }
          if (errors.street?.hasError) {
            runValidationTasks("street", value);
          }
          setStreet(value);
        }}
        onBlur={() => runValidationTasks("street", street)}
        errorMessage={errors.street?.errorMessage}
        hasError={errors.street?.hasError}
        {...getOverrideProps(overrides, "street")}
      ></TextField>
      <TextField
        label="Suburb"
        isRequired={false}
        isReadOnly={false}
        value={suburb}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb: value,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.suburb ?? value;
          }
          if (errors.suburb?.hasError) {
            runValidationTasks("suburb", value);
          }
          setSuburb(value);
        }}
        onBlur={() => runValidationTasks("suburb", suburb)}
        errorMessage={errors.suburb?.errorMessage}
        hasError={errors.suburb?.hasError}
        {...getOverrideProps(overrides, "suburb")}
      ></TextField>
      <TextField
        label="Postcode"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={postcode}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode: value,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.postcode ?? value;
          }
          if (errors.postcode?.hasError) {
            runValidationTasks("postcode", value);
          }
          setPostcode(value);
        }}
        onBlur={() => runValidationTasks("postcode", postcode)}
        errorMessage={errors.postcode?.errorMessage}
        hasError={errors.postcode?.hasError}
        {...getOverrideProps(overrides, "postcode")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state: value,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="State short"
        isRequired={false}
        isReadOnly={false}
        value={stateShort}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort: value,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.stateShort ?? value;
          }
          if (errors.stateShort?.hasError) {
            runValidationTasks("stateShort", value);
          }
          setStateShort(value);
        }}
        onBlur={() => runValidationTasks("stateShort", stateShort)}
        errorMessage={errors.stateShort?.errorMessage}
        hasError={errors.stateShort?.hasError}
        {...getOverrideProps(overrides, "stateShort")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city: value,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country: value,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Beds"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beds}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds: value,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.beds ?? value;
          }
          if (errors.beds?.hasError) {
            runValidationTasks("beds", value);
          }
          setBeds(value);
        }}
        onBlur={() => runValidationTasks("beds", beds)}
        errorMessage={errors.beds?.errorMessage}
        hasError={errors.beds?.hasError}
        {...getOverrideProps(overrides, "beds")}
      ></TextField>
      <TextField
        label="Bedrooms"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bedrooms}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms: value,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.bedrooms ?? value;
          }
          if (errors.bedrooms?.hasError) {
            runValidationTasks("bedrooms", value);
          }
          setBedrooms(value);
        }}
        onBlur={() => runValidationTasks("bedrooms", bedrooms)}
        errorMessage={errors.bedrooms?.errorMessage}
        hasError={errors.bedrooms?.hasError}
        {...getOverrideProps(overrides, "bedrooms")}
      ></TextField>
      <TextField
        label="Bathrooms"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bathrooms}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms: value,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.bathrooms ?? value;
          }
          if (errors.bathrooms?.hasError) {
            runValidationTasks("bathrooms", value);
          }
          setBathrooms(value);
        }}
        onBlur={() => runValidationTasks("bathrooms", bathrooms)}
        errorMessage={errors.bathrooms?.errorMessage}
        hasError={errors.bathrooms?.hasError}
        {...getOverrideProps(overrides, "bathrooms")}
      ></TextField>
      <TextField
        label="Property type"
        isRequired={false}
        isReadOnly={false}
        value={propertyType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType: value,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.propertyType ?? value;
          }
          if (errors.propertyType?.hasError) {
            runValidationTasks("propertyType", value);
          }
          setPropertyType(value);
        }}
        onBlur={() => runValidationTasks("propertyType", propertyType)}
        errorMessage={errors.propertyType?.errorMessage}
        hasError={errors.propertyType?.hasError}
        {...getOverrideProps(overrides, "propertyType")}
      ></TextField>
      <TextField
        label="Type of place"
        isRequired={false}
        isReadOnly={false}
        value={typeOfPlace}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace: value,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.typeOfPlace ?? value;
          }
          if (errors.typeOfPlace?.hasError) {
            runValidationTasks("typeOfPlace", value);
          }
          setTypeOfPlace(value);
        }}
        onBlur={() => runValidationTasks("typeOfPlace", typeOfPlace)}
        errorMessage={errors.typeOfPlace?.errorMessage}
        hasError={errors.typeOfPlace?.hasError}
        {...getOverrideProps(overrides, "typeOfPlace")}
      ></TextField>
      <TextField
        label="Property description"
        isRequired={false}
        isReadOnly={false}
        value={propertyDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription: value,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.propertyDescription ?? value;
          }
          if (errors.propertyDescription?.hasError) {
            runValidationTasks("propertyDescription", value);
          }
          setPropertyDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("propertyDescription", propertyDescription)
        }
        errorMessage={errors.propertyDescription?.errorMessage}
        hasError={errors.propertyDescription?.hasError}
        {...getOverrideProps(overrides, "propertyDescription")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding: values,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.propertyDescriptionEmbedding ?? values;
          }
          setPropertyDescriptionEmbedding(values);
          setCurrentPropertyDescriptionEmbeddingValue("");
        }}
        currentFieldValue={currentPropertyDescriptionEmbeddingValue}
        label={"Property description embedding"}
        items={propertyDescriptionEmbedding}
        hasError={errors?.propertyDescriptionEmbedding?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "propertyDescriptionEmbedding",
            currentPropertyDescriptionEmbeddingValue
          )
        }
        errorMessage={errors?.propertyDescriptionEmbedding?.errorMessage}
        setFieldValue={setCurrentPropertyDescriptionEmbeddingValue}
        inputFieldRef={propertyDescriptionEmbeddingRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Property description embedding"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentPropertyDescriptionEmbeddingValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.propertyDescriptionEmbedding?.hasError) {
              runValidationTasks("propertyDescriptionEmbedding", value);
            }
            setCurrentPropertyDescriptionEmbeddingValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "propertyDescriptionEmbedding",
              currentPropertyDescriptionEmbeddingValue
            )
          }
          errorMessage={errors.propertyDescriptionEmbedding?.errorMessage}
          hasError={errors.propertyDescriptionEmbedding?.hasError}
          ref={propertyDescriptionEmbeddingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "propertyDescriptionEmbedding")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding: values,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.propertySoftEmbedding ?? values;
          }
          setPropertySoftEmbedding(values);
          setCurrentPropertySoftEmbeddingValue("");
        }}
        currentFieldValue={currentPropertySoftEmbeddingValue}
        label={"Property soft embedding"}
        items={propertySoftEmbedding}
        hasError={errors?.propertySoftEmbedding?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "propertySoftEmbedding",
            currentPropertySoftEmbeddingValue
          )
        }
        errorMessage={errors?.propertySoftEmbedding?.errorMessage}
        setFieldValue={setCurrentPropertySoftEmbeddingValue}
        inputFieldRef={propertySoftEmbeddingRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Property soft embedding"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentPropertySoftEmbeddingValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.propertySoftEmbedding?.hasError) {
              runValidationTasks("propertySoftEmbedding", value);
            }
            setCurrentPropertySoftEmbeddingValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "propertySoftEmbedding",
              currentPropertySoftEmbeddingValue
            )
          }
          errorMessage={errors.propertySoftEmbedding?.errorMessage}
          hasError={errors.propertySoftEmbedding?.hasError}
          ref={propertySoftEmbeddingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "propertySoftEmbedding")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Training evolutions"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trainingEvolutions}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions: value,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.trainingEvolutions ?? value;
          }
          if (errors.trainingEvolutions?.hasError) {
            runValidationTasks("trainingEvolutions", value);
          }
          setTrainingEvolutions(value);
        }}
        onBlur={() =>
          runValidationTasks("trainingEvolutions", trainingEvolutions)
        }
        errorMessage={errors.trainingEvolutions?.errorMessage}
        hasError={errors.trainingEvolutions?.hasError}
        {...getOverrideProps(overrides, "trainingEvolutions")}
      ></TextField>
      <TextField
        label="Translated property description"
        isRequired={false}
        isReadOnly={false}
        value={translatedPropertyDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription: value,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.translatedPropertyDescription ?? value;
          }
          if (errors.translatedPropertyDescription?.hasError) {
            runValidationTasks("translatedPropertyDescription", value);
          }
          setTranslatedPropertyDescription(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "translatedPropertyDescription",
            translatedPropertyDescription
          )
        }
        errorMessage={errors.translatedPropertyDescription?.errorMessage}
        hasError={errors.translatedPropertyDescription?.hasError}
        {...getOverrideProps(overrides, "translatedPropertyDescription")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages: values,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.listingImages ?? values;
          }
          setListingImages(values);
          setCurrentListingImagesValue("");
        }}
        currentFieldValue={currentListingImagesValue}
        label={"Listing images"}
        items={listingImages}
        hasError={errors?.listingImages?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("listingImages", currentListingImagesValue)
        }
        errorMessage={errors?.listingImages?.errorMessage}
        setFieldValue={setCurrentListingImagesValue}
        inputFieldRef={listingImagesRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Listing images"
          isRequired={false}
          isReadOnly={false}
          value={currentListingImagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.listingImages?.hasError) {
              runValidationTasks("listingImages", value);
            }
            setCurrentListingImagesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("listingImages", currentListingImagesValue)
          }
          errorMessage={errors.listingImages?.errorMessage}
          hasError={errors.listingImages?.hasError}
          ref={listingImagesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "listingImages")}
        ></TextAreaField>
      </ArrayField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status: value,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities: values,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.amenities ?? values;
          }
          setAmenities(values);
          setCurrentAmenitiesValue("");
        }}
        currentFieldValue={currentAmenitiesValue}
        label={"Amenities"}
        items={amenities}
        hasError={errors?.amenities?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("amenities", currentAmenitiesValue)
        }
        errorMessage={errors?.amenities?.errorMessage}
        setFieldValue={setCurrentAmenitiesValue}
        inputFieldRef={amenitiesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Amenities"
          isRequired={false}
          isReadOnly={false}
          value={currentAmenitiesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.amenities?.hasError) {
              runValidationTasks("amenities", value);
            }
            setCurrentAmenitiesValue(value);
          }}
          onBlur={() => runValidationTasks("amenities", currentAmenitiesValue)}
          errorMessage={errors.amenities?.errorMessage}
          hasError={errors.amenities?.hasError}
          ref={amenitiesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "amenities")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories: values,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.categories ?? values;
          }
          setCategories(values);
          setCurrentCategoriesValue("");
        }}
        currentFieldValue={currentCategoriesValue}
        label={"Categories"}
        items={categories}
        hasError={errors?.categories?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("categories", currentCategoriesValue)
        }
        errorMessage={errors?.categories?.errorMessage}
        setFieldValue={setCurrentCategoriesValue}
        inputFieldRef={categoriesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Categories"
          isRequired={false}
          isReadOnly={false}
          value={currentCategoriesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.categories?.hasError) {
              runValidationTasks("categories", value);
            }
            setCurrentCategoriesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("categories", currentCategoriesValue)
          }
          errorMessage={errors.categories?.errorMessage}
          hasError={errors.categories?.hasError}
          ref={categoriesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "categories")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags: values,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tags", currentTagsValue)
        }
        errorMessage={errors?.tags?.errorMessage}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          value={currentTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Deposit"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={deposit}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit: value,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.deposit ?? value;
          }
          if (errors.deposit?.hasError) {
            runValidationTasks("deposit", value);
          }
          setDeposit(value);
        }}
        onBlur={() => runValidationTasks("deposit", deposit)}
        errorMessage={errors.deposit?.errorMessage}
        hasError={errors.deposit?.hasError}
        {...getOverrideProps(overrides, "deposit")}
      ></TextField>
      <TextField
        label="Guests"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={guests}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests: value,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.guests ?? value;
          }
          if (errors.guests?.hasError) {
            runValidationTasks("guests", value);
          }
          setGuests(value);
        }}
        onBlur={() => runValidationTasks("guests", guests)}
        errorMessage={errors.guests?.errorMessage}
        hasError={errors.guests?.hasError}
        {...getOverrideProps(overrides, "guests")}
      ></TextField>
      <TextField
        label="Minimum stay"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minimumStay}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay: value,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.minimumStay ?? value;
          }
          if (errors.minimumStay?.hasError) {
            runValidationTasks("minimumStay", value);
          }
          setMinimumStay(value);
        }}
        onBlur={() => runValidationTasks("minimumStay", minimumStay)}
        errorMessage={errors.minimumStay?.errorMessage}
        hasError={errors.minimumStay?.hasError}
        {...getOverrideProps(overrides, "minimumStay")}
      ></TextField>
      <TextField
        label="Minimum price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minimumPrice}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice: value,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.minimumPrice ?? value;
          }
          if (errors.minimumPrice?.hasError) {
            runValidationTasks("minimumPrice", value);
          }
          setMinimumPrice(value);
        }}
        onBlur={() => runValidationTasks("minimumPrice", minimumPrice)}
        errorMessage={errors.minimumPrice?.errorMessage}
        hasError={errors.minimumPrice?.hasError}
        {...getOverrideProps(overrides, "minimumPrice")}
      ></TextField>
      <TextField
        label="Maximum price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maximumPrice}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice: value,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.maximumPrice ?? value;
          }
          if (errors.maximumPrice?.hasError) {
            runValidationTasks("maximumPrice", value);
          }
          setMaximumPrice(value);
        }}
        onBlur={() => runValidationTasks("maximumPrice", maximumPrice)}
        errorMessage={errors.maximumPrice?.errorMessage}
        hasError={errors.maximumPrice?.hasError}
        {...getOverrideProps(overrides, "maximumPrice")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices: values,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.nightlyPrices ?? values;
          }
          setNightlyPrices(values);
          setCurrentNightlyPricesValue("");
        }}
        currentFieldValue={currentNightlyPricesValue}
        label={"Nightly prices"}
        items={nightlyPrices}
        hasError={errors?.nightlyPrices?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("nightlyPrices", currentNightlyPricesValue)
        }
        errorMessage={errors?.nightlyPrices?.errorMessage}
        setFieldValue={setCurrentNightlyPricesValue}
        inputFieldRef={nightlyPricesRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Nightly prices"
          isRequired={false}
          isReadOnly={false}
          value={currentNightlyPricesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.nightlyPrices?.hasError) {
              runValidationTasks("nightlyPrices", value);
            }
            setCurrentNightlyPricesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("nightlyPrices", currentNightlyPricesValue)
          }
          errorMessage={errors.nightlyPrices?.errorMessage}
          hasError={errors.nightlyPrices?.hasError}
          ref={nightlyPricesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "nightlyPrices")}
        ></TextAreaField>
      </ArrayField>
      <TextField
        label="Maximum stay"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maximumStay}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay: value,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.maximumStay ?? value;
          }
          if (errors.maximumStay?.hasError) {
            runValidationTasks("maximumStay", value);
          }
          setMaximumStay(value);
        }}
        onBlur={() => runValidationTasks("maximumStay", maximumStay)}
        errorMessage={errors.maximumStay?.errorMessage}
        hasError={errors.maximumStay?.hasError}
        {...getOverrideProps(overrides, "maximumStay")}
      ></TextField>
      <TextField
        label="Weekly minimum price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weeklyMinimumPrice}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice: value,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.weeklyMinimumPrice ?? value;
          }
          if (errors.weeklyMinimumPrice?.hasError) {
            runValidationTasks("weeklyMinimumPrice", value);
          }
          setWeeklyMinimumPrice(value);
        }}
        onBlur={() =>
          runValidationTasks("weeklyMinimumPrice", weeklyMinimumPrice)
        }
        errorMessage={errors.weeklyMinimumPrice?.errorMessage}
        hasError={errors.weeklyMinimumPrice?.hasError}
        {...getOverrideProps(overrides, "weeklyMinimumPrice")}
      ></TextField>
      <TextField
        label="Weekly maximum stay"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weeklyMaximumStay}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay: value,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.weeklyMaximumStay ?? value;
          }
          if (errors.weeklyMaximumStay?.hasError) {
            runValidationTasks("weeklyMaximumStay", value);
          }
          setWeeklyMaximumStay(value);
        }}
        onBlur={() =>
          runValidationTasks("weeklyMaximumStay", weeklyMaximumStay)
        }
        errorMessage={errors.weeklyMaximumStay?.errorMessage}
        hasError={errors.weeklyMaximumStay?.hasError}
        {...getOverrideProps(overrides, "weeklyMaximumStay")}
      ></TextField>
      <TextAreaField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location: value,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextAreaField>
      <TextField
        label="Property title"
        isRequired={false}
        isReadOnly={false}
        value={propertyTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle: value,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.propertyTitle ?? value;
          }
          if (errors.propertyTitle?.hasError) {
            runValidationTasks("propertyTitle", value);
          }
          setPropertyTitle(value);
        }}
        onBlur={() => runValidationTasks("propertyTitle", propertyTitle)}
        errorMessage={errors.propertyTitle?.errorMessage}
        hasError={errors.propertyTitle?.hasError}
        {...getOverrideProps(overrides, "propertyTitle")}
      ></TextField>
      <TextField
        label="Internal name"
        isRequired={false}
        isReadOnly={false}
        value={internalName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName: value,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.internalName ?? value;
          }
          if (errors.internalName?.hasError) {
            runValidationTasks("internalName", value);
          }
          setInternalName(value);
        }}
        onBlur={() => runValidationTasks("internalName", internalName)}
        errorMessage={errors.internalName?.errorMessage}
        hasError={errors.internalName?.hasError}
        {...getOverrideProps(overrides, "internalName")}
      ></TextField>
      <TextField
        label="Translated property title"
        isRequired={false}
        isReadOnly={false}
        value={translatedPropertyTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle: value,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.translatedPropertyTitle ?? value;
          }
          if (errors.translatedPropertyTitle?.hasError) {
            runValidationTasks("translatedPropertyTitle", value);
          }
          setTranslatedPropertyTitle(value);
        }}
        onBlur={() =>
          runValidationTasks("translatedPropertyTitle", translatedPropertyTitle)
        }
        errorMessage={errors.translatedPropertyTitle?.errorMessage}
        hasError={errors.translatedPropertyTitle?.hasError}
        {...getOverrideProps(overrides, "translatedPropertyTitle")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules: values,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.houseRules ?? values;
          }
          setHouseRules(values);
          setCurrentHouseRulesValue("");
        }}
        currentFieldValue={currentHouseRulesValue}
        label={"House rules"}
        items={houseRules}
        hasError={errors?.houseRules?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("houseRules", currentHouseRulesValue)
        }
        errorMessage={errors?.houseRules?.errorMessage}
        setFieldValue={setCurrentHouseRulesValue}
        inputFieldRef={houseRulesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="House rules"
          isRequired={false}
          isReadOnly={false}
          value={currentHouseRulesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.houseRules?.hasError) {
              runValidationTasks("houseRules", value);
            }
            setCurrentHouseRulesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("houseRules", currentHouseRulesValue)
          }
          errorMessage={errors.houseRules?.errorMessage}
          hasError={errors.houseRules?.hasError}
          ref={houseRulesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "houseRules")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Draft"
        defaultChecked={false}
        isDisabled={false}
        isChecked={draft}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft: value,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.draft ?? value;
          }
          if (errors.draft?.hasError) {
            runValidationTasks("draft", value);
          }
          setDraft(value);
        }}
        onBlur={() => runValidationTasks("draft", draft)}
        errorMessage={errors.draft?.errorMessage}
        hasError={errors.draft?.hasError}
        {...getOverrideProps(overrides, "draft")}
      ></SwitchField>
      <SwitchField
        label="Verified"
        defaultChecked={false}
        isDisabled={false}
        isChecked={verified}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified: value,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.verified ?? value;
          }
          if (errors.verified?.hasError) {
            runValidationTasks("verified", value);
          }
          setVerified(value);
        }}
        onBlur={() => runValidationTasks("verified", verified)}
        errorMessage={errors.verified?.errorMessage}
        hasError={errors.verified?.hasError}
        {...getOverrideProps(overrides, "verified")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments: values,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.verifiedDocuments ?? values;
          }
          setVerifiedDocuments(values);
          setCurrentVerifiedDocumentsValue("");
        }}
        currentFieldValue={currentVerifiedDocumentsValue}
        label={"Verified documents"}
        items={verifiedDocuments}
        hasError={errors?.verifiedDocuments?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "verifiedDocuments",
            currentVerifiedDocumentsValue
          )
        }
        errorMessage={errors?.verifiedDocuments?.errorMessage}
        setFieldValue={setCurrentVerifiedDocumentsValue}
        inputFieldRef={verifiedDocumentsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Verified documents"
          isRequired={false}
          isReadOnly={false}
          value={currentVerifiedDocumentsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.verifiedDocuments?.hasError) {
              runValidationTasks("verifiedDocuments", value);
            }
            setCurrentVerifiedDocumentsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "verifiedDocuments",
              currentVerifiedDocumentsValue
            )
          }
          errorMessage={errors.verifiedDocuments?.errorMessage}
          hasError={errors.verifiedDocuments?.hasError}
          ref={verifiedDocumentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "verifiedDocuments")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Weekly discount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weeklyDiscount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount: value,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.weeklyDiscount ?? value;
          }
          if (errors.weeklyDiscount?.hasError) {
            runValidationTasks("weeklyDiscount", value);
          }
          setWeeklyDiscount(value);
        }}
        onBlur={() => runValidationTasks("weeklyDiscount", weeklyDiscount)}
        errorMessage={errors.weeklyDiscount?.errorMessage}
        hasError={errors.weeklyDiscount?.hasError}
        {...getOverrideProps(overrides, "weeklyDiscount")}
      ></TextField>
      <TextField
        label="Monthly discount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={monthlyDiscount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount: value,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.monthlyDiscount ?? value;
          }
          if (errors.monthlyDiscount?.hasError) {
            runValidationTasks("monthlyDiscount", value);
          }
          setMonthlyDiscount(value);
        }}
        onBlur={() => runValidationTasks("monthlyDiscount", monthlyDiscount)}
        errorMessage={errors.monthlyDiscount?.errorMessage}
        hasError={errors.monthlyDiscount?.hasError}
        {...getOverrideProps(overrides, "monthlyDiscount")}
      ></TextField>
      <TextField
        label="Cleaning fee"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cleaningFee}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee: value,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.cleaningFee ?? value;
          }
          if (errors.cleaningFee?.hasError) {
            runValidationTasks("cleaningFee", value);
          }
          setCleaningFee(value);
        }}
        onBlur={() => runValidationTasks("cleaningFee", cleaningFee)}
        errorMessage={errors.cleaningFee?.errorMessage}
        hasError={errors.cleaningFee?.hasError}
        {...getOverrideProps(overrides, "cleaningFee")}
      ></TextField>
      <TextField
        label="Cleaning frequency"
        isRequired={false}
        isReadOnly={false}
        value={cleaningFrequency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency: value,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.cleaningFrequency ?? value;
          }
          if (errors.cleaningFrequency?.hasError) {
            runValidationTasks("cleaningFrequency", value);
          }
          setCleaningFrequency(value);
        }}
        onBlur={() =>
          runValidationTasks("cleaningFrequency", cleaningFrequency)
        }
        errorMessage={errors.cleaningFrequency?.errorMessage}
        hasError={errors.cleaningFrequency?.hasError}
        {...getOverrideProps(overrides, "cleaningFrequency")}
      ></TextField>
      <TextField
        label="Availability range"
        isRequired={false}
        isReadOnly={false}
        value={availabilityRange}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange: value,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.availabilityRange ?? value;
          }
          if (errors.availabilityRange?.hasError) {
            runValidationTasks("availabilityRange", value);
          }
          setAvailabilityRange(value);
        }}
        onBlur={() =>
          runValidationTasks("availabilityRange", availabilityRange)
        }
        errorMessage={errors.availabilityRange?.errorMessage}
        hasError={errors.availabilityRange?.hasError}
        {...getOverrideProps(overrides, "availabilityRange")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms: values,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.rooms ?? values;
          }
          setRooms(values);
          setCurrentRoomsValue("");
        }}
        currentFieldValue={currentRoomsValue}
        label={"Rooms"}
        items={rooms}
        hasError={errors?.rooms?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("rooms", currentRoomsValue)
        }
        errorMessage={errors?.rooms?.errorMessage}
        setFieldValue={setCurrentRoomsValue}
        inputFieldRef={roomsRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Rooms"
          isRequired={false}
          isReadOnly={false}
          value={currentRoomsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.rooms?.hasError) {
              runValidationTasks("rooms", value);
            }
            setCurrentRoomsValue(value);
          }}
          onBlur={() => runValidationTasks("rooms", currentRoomsValue)}
          errorMessage={errors.rooms?.errorMessage}
          hasError={errors.rooms?.hasError}
          ref={roomsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "rooms")}
        ></TextAreaField>
      </ArrayField>
      <TextField
        label="Total reviews"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalReviews}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews: value,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.totalReviews ?? value;
          }
          if (errors.totalReviews?.hasError) {
            runValidationTasks("totalReviews", value);
          }
          setTotalReviews(value);
        }}
        onBlur={() => runValidationTasks("totalReviews", totalReviews)}
        errorMessage={errors.totalReviews?.errorMessage}
        hasError={errors.totalReviews?.hasError}
        {...getOverrideProps(overrides, "totalReviews")}
      ></TextField>
      <TextField
        label="Quality score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={qualityScore}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore: value,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.qualityScore ?? value;
          }
          if (errors.qualityScore?.hasError) {
            runValidationTasks("qualityScore", value);
          }
          setQualityScore(value);
        }}
        onBlur={() => runValidationTasks("qualityScore", qualityScore)}
        errorMessage={errors.qualityScore?.errorMessage}
        hasError={errors.qualityScore?.hasError}
        {...getOverrideProps(overrides, "qualityScore")}
      ></TextField>
      <TextField
        label="Overall average"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={overallAverage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage: value,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.overallAverage ?? value;
          }
          if (errors.overallAverage?.hasError) {
            runValidationTasks("overallAverage", value);
          }
          setOverallAverage(value);
        }}
        onBlur={() => runValidationTasks("overallAverage", overallAverage)}
        errorMessage={errors.overallAverage?.errorMessage}
        hasError={errors.overallAverage?.hasError}
        {...getOverrideProps(overrides, "overallAverage")}
      ></TextField>
      <TextField
        label="Communication average"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={communicationAverage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage: value,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.communicationAverage ?? value;
          }
          if (errors.communicationAverage?.hasError) {
            runValidationTasks("communicationAverage", value);
          }
          setCommunicationAverage(value);
        }}
        onBlur={() =>
          runValidationTasks("communicationAverage", communicationAverage)
        }
        errorMessage={errors.communicationAverage?.errorMessage}
        hasError={errors.communicationAverage?.hasError}
        {...getOverrideProps(overrides, "communicationAverage")}
      ></TextField>
      <TextField
        label="Amenities average"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={amenitiesAverage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage: value,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.amenitiesAverage ?? value;
          }
          if (errors.amenitiesAverage?.hasError) {
            runValidationTasks("amenitiesAverage", value);
          }
          setAmenitiesAverage(value);
        }}
        onBlur={() => runValidationTasks("amenitiesAverage", amenitiesAverage)}
        errorMessage={errors.amenitiesAverage?.errorMessage}
        hasError={errors.amenitiesAverage?.hasError}
        {...getOverrideProps(overrides, "amenitiesAverage")}
      ></TextField>
      <TextField
        label="Cleaning average"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cleaningAverage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage: value,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.cleaningAverage ?? value;
          }
          if (errors.cleaningAverage?.hasError) {
            runValidationTasks("cleaningAverage", value);
          }
          setCleaningAverage(value);
        }}
        onBlur={() => runValidationTasks("cleaningAverage", cleaningAverage)}
        errorMessage={errors.cleaningAverage?.errorMessage}
        hasError={errors.cleaningAverage?.hasError}
        {...getOverrideProps(overrides, "cleaningAverage")}
      ></TextField>
      <TextField
        label="Location average"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={locationAverage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage: value,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.locationAverage ?? value;
          }
          if (errors.locationAverage?.hasError) {
            runValidationTasks("locationAverage", value);
          }
          setLocationAverage(value);
        }}
        onBlur={() => runValidationTasks("locationAverage", locationAverage)}
        errorMessage={errors.locationAverage?.errorMessage}
        hasError={errors.locationAverage?.hasError}
        {...getOverrideProps(overrides, "locationAverage")}
      ></TextField>
      <TextField
        label="Service average"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={serviceAverage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage: value,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.serviceAverage ?? value;
          }
          if (errors.serviceAverage?.hasError) {
            runValidationTasks("serviceAverage", value);
          }
          setServiceAverage(value);
        }}
        onBlur={() => runValidationTasks("serviceAverage", serviceAverage)}
        errorMessage={errors.serviceAverage?.errorMessage}
        hasError={errors.serviceAverage?.hasError}
        {...getOverrideProps(overrides, "serviceAverage")}
      ></TextField>
      <TextField
        label="Value average"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={valueAverage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage: value,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.valueAverage ?? value;
          }
          if (errors.valueAverage?.hasError) {
            runValidationTasks("valueAverage", value);
          }
          setValueAverage(value);
        }}
        onBlur={() => runValidationTasks("valueAverage", valueAverage)}
        errorMessage={errors.valueAverage?.errorMessage}
        hasError={errors.valueAverage?.hasError}
        {...getOverrideProps(overrides, "valueAverage")}
      ></TextField>
      <TextField
        label="Cancellation policy"
        isRequired={false}
        isReadOnly={false}
        value={cancellationPolicy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy: value,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.cancellationPolicy ?? value;
          }
          if (errors.cancellationPolicy?.hasError) {
            runValidationTasks("cancellationPolicy", value);
          }
          setCancellationPolicy(value);
        }}
        onBlur={() =>
          runValidationTasks("cancellationPolicy", cancellationPolicy)
        }
        errorMessage={errors.cancellationPolicy?.errorMessage}
        hasError={errors.cancellationPolicy?.hasError}
        {...getOverrideProps(overrides, "cancellationPolicy")}
      ></TextField>
      <SwitchField
        label="Once off payments only"
        defaultChecked={false}
        isDisabled={false}
        isChecked={onceOffPaymentsOnly}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly: value,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.onceOffPaymentsOnly ?? value;
          }
          if (errors.onceOffPaymentsOnly?.hasError) {
            runValidationTasks("onceOffPaymentsOnly", value);
          }
          setOnceOffPaymentsOnly(value);
        }}
        onBlur={() =>
          runValidationTasks("onceOffPaymentsOnly", onceOffPaymentsOnly)
        }
        errorMessage={errors.onceOffPaymentsOnly?.errorMessage}
        hasError={errors.onceOffPaymentsOnly?.hasError}
        {...getOverrideProps(overrides, "onceOffPaymentsOnly")}
      ></SwitchField>
      <SwitchField
        label="Instant book enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={instantBookEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled: value,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.instantBookEnabled ?? value;
          }
          if (errors.instantBookEnabled?.hasError) {
            runValidationTasks("instantBookEnabled", value);
          }
          setInstantBookEnabled(value);
        }}
        onBlur={() =>
          runValidationTasks("instantBookEnabled", instantBookEnabled)
        }
        errorMessage={errors.instantBookEnabled?.errorMessage}
        hasError={errors.instantBookEnabled?.hasError}
        {...getOverrideProps(overrides, "instantBookEnabled")}
      ></SwitchField>
      <TextField
        label="Stay type"
        isRequired={false}
        isReadOnly={false}
        value={stayType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType: value,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.stayType ?? value;
          }
          if (errors.stayType?.hasError) {
            runValidationTasks("stayType", value);
          }
          setStayType(value);
        }}
        onBlur={() => runValidationTasks("stayType", stayType)}
        errorMessage={errors.stayType?.errorMessage}
        hasError={errors.stayType?.hasError}
        {...getOverrideProps(overrides, "stayType")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength: values,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.averageStayLength ?? values;
          }
          setAverageStayLength(values);
          setCurrentAverageStayLengthValue("");
        }}
        currentFieldValue={currentAverageStayLengthValue}
        label={"Average stay length"}
        items={averageStayLength}
        hasError={errors?.averageStayLength?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "averageStayLength",
            currentAverageStayLengthValue
          )
        }
        errorMessage={errors?.averageStayLength?.errorMessage}
        setFieldValue={setCurrentAverageStayLengthValue}
        inputFieldRef={averageStayLengthRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Average stay length"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentAverageStayLengthValue}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (errors.averageStayLength?.hasError) {
              runValidationTasks("averageStayLength", value);
            }
            setCurrentAverageStayLengthValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "averageStayLength",
              currentAverageStayLengthValue
            )
          }
          errorMessage={errors.averageStayLength?.errorMessage}
          hasError={errors.averageStayLength?.hasError}
          ref={averageStayLengthRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "averageStayLength")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Check in time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={checkInTime}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime: value,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.checkInTime ?? value;
          }
          if (errors.checkInTime?.hasError) {
            runValidationTasks("checkInTime", value);
          }
          setCheckInTime(value);
        }}
        onBlur={() => runValidationTasks("checkInTime", checkInTime)}
        errorMessage={errors.checkInTime?.errorMessage}
        hasError={errors.checkInTime?.hasError}
        {...getOverrideProps(overrides, "checkInTime")}
      ></TextField>
      <TextField
        label="Check out time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={checkOutTime}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime: value,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.checkOutTime ?? value;
          }
          if (errors.checkOutTime?.hasError) {
            runValidationTasks("checkOutTime", value);
          }
          setCheckOutTime(value);
        }}
        onBlur={() => runValidationTasks("checkOutTime", checkOutTime)}
        errorMessage={errors.checkOutTime?.errorMessage}
        hasError={errors.checkOutTime?.hasError}
        {...getOverrideProps(overrides, "checkOutTime")}
      ></TextField>
      <TextField
        label="Check in instructions"
        isRequired={false}
        isReadOnly={false}
        value={checkInInstructions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions: value,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.checkInInstructions ?? value;
          }
          if (errors.checkInInstructions?.hasError) {
            runValidationTasks("checkInInstructions", value);
          }
          setCheckInInstructions(value);
        }}
        onBlur={() =>
          runValidationTasks("checkInInstructions", checkInInstructions)
        }
        errorMessage={errors.checkInInstructions?.errorMessage}
        hasError={errors.checkInInstructions?.hasError}
        {...getOverrideProps(overrides, "checkInInstructions")}
      ></TextField>
      <TextField
        label="Check out instructions"
        isRequired={false}
        isReadOnly={false}
        value={checkOutInstructions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions: value,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.checkOutInstructions ?? value;
          }
          if (errors.checkOutInstructions?.hasError) {
            runValidationTasks("checkOutInstructions", value);
          }
          setCheckOutInstructions(value);
        }}
        onBlur={() =>
          runValidationTasks("checkOutInstructions", checkOutInstructions)
        }
        errorMessage={errors.checkOutInstructions?.errorMessage}
        hasError={errors.checkOutInstructions?.hasError}
        {...getOverrideProps(overrides, "checkOutInstructions")}
      ></TextField>
      <TextField
        label="Time before check in"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={timeBeforeCheckIn}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn: value,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.timeBeforeCheckIn ?? value;
          }
          if (errors.timeBeforeCheckIn?.hasError) {
            runValidationTasks("timeBeforeCheckIn", value);
          }
          setTimeBeforeCheckIn(value);
        }}
        onBlur={() =>
          runValidationTasks("timeBeforeCheckIn", timeBeforeCheckIn)
        }
        errorMessage={errors.timeBeforeCheckIn?.errorMessage}
        hasError={errors.timeBeforeCheckIn?.hasError}
        {...getOverrideProps(overrides, "timeBeforeCheckIn")}
      ></TextField>
      <TextField
        label="Time after check out"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={timeAfterCheckOut}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut: value,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.timeAfterCheckOut ?? value;
          }
          if (errors.timeAfterCheckOut?.hasError) {
            runValidationTasks("timeAfterCheckOut", value);
          }
          setTimeAfterCheckOut(value);
        }}
        onBlur={() =>
          runValidationTasks("timeAfterCheckOut", timeAfterCheckOut)
        }
        errorMessage={errors.timeAfterCheckOut?.errorMessage}
        hasError={errors.timeAfterCheckOut?.hasError}
        {...getOverrideProps(overrides, "timeAfterCheckOut")}
      ></TextField>
      <TextField
        label="Extra guest fee"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={extraGuestFee}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee: value,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.extraGuestFee ?? value;
          }
          if (errors.extraGuestFee?.hasError) {
            runValidationTasks("extraGuestFee", value);
          }
          setExtraGuestFee(value);
        }}
        onBlur={() => runValidationTasks("extraGuestFee", extraGuestFee)}
        errorMessage={errors.extraGuestFee?.errorMessage}
        hasError={errors.extraGuestFee?.hasError}
        {...getOverrideProps(overrides, "extraGuestFee")}
      ></TextField>
      <TextField
        label="Extra max guests"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={extraMaxGuests}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests: value,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.extraMaxGuests ?? value;
          }
          if (errors.extraMaxGuests?.hasError) {
            runValidationTasks("extraMaxGuests", value);
          }
          setExtraMaxGuests(value);
        }}
        onBlur={() => runValidationTasks("extraMaxGuests", extraMaxGuests)}
        errorMessage={errors.extraMaxGuests?.errorMessage}
        hasError={errors.extraMaxGuests?.hasError}
        {...getOverrideProps(overrides, "extraMaxGuests")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates: values,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.disabledDates ?? values;
          }
          setDisabledDates(values);
          setCurrentDisabledDatesValue("");
        }}
        currentFieldValue={currentDisabledDatesValue}
        label={"Disabled dates"}
        items={disabledDates}
        hasError={errors?.disabledDates?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("disabledDates", currentDisabledDatesValue)
        }
        errorMessage={errors?.disabledDates?.errorMessage}
        setFieldValue={setCurrentDisabledDatesValue}
        inputFieldRef={disabledDatesRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Disabled dates"
          isRequired={false}
          isReadOnly={false}
          value={currentDisabledDatesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.disabledDates?.hasError) {
              runValidationTasks("disabledDates", value);
            }
            setCurrentDisabledDatesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("disabledDates", currentDisabledDatesValue)
          }
          errorMessage={errors.disabledDates?.errorMessage}
          hasError={errors.disabledDates?.hasError}
          ref={disabledDatesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "disabledDates")}
        ></TextAreaField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates: values,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.unavailableDates ?? values;
          }
          setUnavailableDates(values);
          setCurrentUnavailableDatesValue("");
        }}
        currentFieldValue={currentUnavailableDatesValue}
        label={"Unavailable dates"}
        items={unavailableDates}
        hasError={errors?.unavailableDates?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "unavailableDates",
            currentUnavailableDatesValue
          )
        }
        errorMessage={errors?.unavailableDates?.errorMessage}
        setFieldValue={setCurrentUnavailableDatesValue}
        inputFieldRef={unavailableDatesRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Unavailable dates"
          isRequired={false}
          isReadOnly={false}
          value={currentUnavailableDatesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.unavailableDates?.hasError) {
              runValidationTasks("unavailableDates", value);
            }
            setCurrentUnavailableDatesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("unavailableDates", currentUnavailableDatesValue)
          }
          errorMessage={errors.unavailableDates?.errorMessage}
          hasError={errors.unavailableDates?.hasError}
          ref={unavailableDatesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "unavailableDates")}
        ></TextAreaField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates: values,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.iCalUnavailableDates ?? values;
          }
          setICalUnavailableDates(values);
          setCurrentICalUnavailableDatesValue("");
        }}
        currentFieldValue={currentICalUnavailableDatesValue}
        label={"I cal unavailable dates"}
        items={iCalUnavailableDates}
        hasError={errors?.iCalUnavailableDates?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "iCalUnavailableDates",
            currentICalUnavailableDatesValue
          )
        }
        errorMessage={errors?.iCalUnavailableDates?.errorMessage}
        setFieldValue={setCurrentICalUnavailableDatesValue}
        inputFieldRef={iCalUnavailableDatesRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="I cal unavailable dates"
          isRequired={false}
          isReadOnly={false}
          value={currentICalUnavailableDatesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.iCalUnavailableDates?.hasError) {
              runValidationTasks("iCalUnavailableDates", value);
            }
            setCurrentICalUnavailableDatesValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "iCalUnavailableDates",
              currentICalUnavailableDatesValue
            )
          }
          errorMessage={errors.iCalUnavailableDates?.errorMessage}
          hasError={errors.iCalUnavailableDates?.hasError}
          ref={iCalUnavailableDatesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "iCalUnavailableDates")}
        ></TextAreaField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks: values,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.iCalImportLinks ?? values;
          }
          setICalImportLinks(values);
          setCurrentICalImportLinksValue("");
        }}
        currentFieldValue={currentICalImportLinksValue}
        label={"I cal import links"}
        items={iCalImportLinks}
        hasError={errors?.iCalImportLinks?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "iCalImportLinks",
            currentICalImportLinksValue
          )
        }
        errorMessage={errors?.iCalImportLinks?.errorMessage}
        setFieldValue={setCurrentICalImportLinksValue}
        inputFieldRef={iCalImportLinksRef}
        defaultFieldValue={""}
      >
        <TextField
          label="I cal import links"
          isRequired={false}
          isReadOnly={false}
          value={currentICalImportLinksValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.iCalImportLinks?.hasError) {
              runValidationTasks("iCalImportLinks", value);
            }
            setCurrentICalImportLinksValue(value);
          }}
          onBlur={() =>
            runValidationTasks("iCalImportLinks", currentICalImportLinksValue)
          }
          errorMessage={errors.iCalImportLinks?.errorMessage}
          hasError={errors.iCalImportLinks?.hasError}
          ref={iCalImportLinksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "iCalImportLinks")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Stra id"
        isRequired={false}
        isReadOnly={false}
        value={straID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID: value,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.straID ?? value;
          }
          if (errors.straID?.hasError) {
            runValidationTasks("straID", value);
          }
          setStraID(value);
        }}
        onBlur={() => runValidationTasks("straID", straID)}
        errorMessage={errors.straID?.errorMessage}
        hasError={errors.straID?.hasError}
        {...getOverrideProps(overrides, "straID")}
      ></TextField>
      <TextField
        label="Advance notice"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={advanceNotice}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice: value,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.advanceNotice ?? value;
          }
          if (errors.advanceNotice?.hasError) {
            runValidationTasks("advanceNotice", value);
          }
          setAdvanceNotice(value);
        }}
        onBlur={() => runValidationTasks("advanceNotice", advanceNotice)}
        errorMessage={errors.advanceNotice?.errorMessage}
        hasError={errors.advanceNotice?.hasError}
        {...getOverrideProps(overrides, "advanceNotice")}
      ></TextField>
      <TextField
        label="Advance notice time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={advanceNoticeTime}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime: value,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.advanceNoticeTime ?? value;
          }
          if (errors.advanceNoticeTime?.hasError) {
            runValidationTasks("advanceNoticeTime", value);
          }
          setAdvanceNoticeTime(value);
        }}
        onBlur={() =>
          runValidationTasks("advanceNoticeTime", advanceNoticeTime)
        }
        errorMessage={errors.advanceNoticeTime?.errorMessage}
        hasError={errors.advanceNoticeTime?.hasError}
        {...getOverrideProps(overrides, "advanceNoticeTime")}
      ></TextField>
      <SwitchField
        label="Approved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={approved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved: value,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.approved ?? value;
          }
          if (errors.approved?.hasError) {
            runValidationTasks("approved", value);
          }
          setApproved(value);
        }}
        onBlur={() => runValidationTasks("approved", approved)}
        errorMessage={errors.approved?.errorMessage}
        hasError={errors.approved?.hasError}
        {...getOverrideProps(overrides, "approved")}
      ></SwitchField>
      <SwitchField
        label="Standard service fee"
        defaultChecked={false}
        isDisabled={false}
        isChecked={standardServiceFee}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee: value,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.standardServiceFee ?? value;
          }
          if (errors.standardServiceFee?.hasError) {
            runValidationTasks("standardServiceFee", value);
          }
          setStandardServiceFee(value);
        }}
        onBlur={() =>
          runValidationTasks("standardServiceFee", standardServiceFee)
        }
        errorMessage={errors.standardServiceFee?.errorMessage}
        hasError={errors.standardServiceFee?.hasError}
        {...getOverrideProps(overrides, "standardServiceFee")}
      ></SwitchField>
      <SwitchField
        label="Fliggy approved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={fliggyApproved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved: value,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.fliggyApproved ?? value;
          }
          if (errors.fliggyApproved?.hasError) {
            runValidationTasks("fliggyApproved", value);
          }
          setFliggyApproved(value);
        }}
        onBlur={() => runValidationTasks("fliggyApproved", fliggyApproved)}
        errorMessage={errors.fliggyApproved?.errorMessage}
        hasError={errors.fliggyApproved?.hasError}
        {...getOverrideProps(overrides, "fliggyApproved")}
      ></SwitchField>
      <SwitchField
        label="Fliggy hidden"
        defaultChecked={false}
        isDisabled={false}
        isChecked={fliggyHidden}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden: value,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.fliggyHidden ?? value;
          }
          if (errors.fliggyHidden?.hasError) {
            runValidationTasks("fliggyHidden", value);
          }
          setFliggyHidden(value);
        }}
        onBlur={() => runValidationTasks("fliggyHidden", fliggyHidden)}
        errorMessage={errors.fliggyHidden?.errorMessage}
        hasError={errors.fliggyHidden?.hasError}
        {...getOverrideProps(overrides, "fliggyHidden")}
      ></SwitchField>
      <TextField
        label="Fliggy id"
        isRequired={false}
        isReadOnly={false}
        value={fliggyID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID: value,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.fliggyID ?? value;
          }
          if (errors.fliggyID?.hasError) {
            runValidationTasks("fliggyID", value);
          }
          setFliggyID(value);
        }}
        onBlur={() => runValidationTasks("fliggyID", fliggyID)}
        errorMessage={errors.fliggyID?.errorMessage}
        hasError={errors.fliggyID?.hasError}
        {...getOverrideProps(overrides, "fliggyID")}
      ></TextField>
      <TextField
        label="Wifi name"
        isRequired={false}
        isReadOnly={false}
        value={wifiName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName: value,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.wifiName ?? value;
          }
          if (errors.wifiName?.hasError) {
            runValidationTasks("wifiName", value);
          }
          setWifiName(value);
        }}
        onBlur={() => runValidationTasks("wifiName", wifiName)}
        errorMessage={errors.wifiName?.errorMessage}
        hasError={errors.wifiName?.hasError}
        {...getOverrideProps(overrides, "wifiName")}
      ></TextField>
      <TextField
        label="Wifi password"
        isRequired={false}
        isReadOnly={false}
        value={wifiPassword}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword: value,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.wifiPassword ?? value;
          }
          if (errors.wifiPassword?.hasError) {
            runValidationTasks("wifiPassword", value);
          }
          setWifiPassword(value);
        }}
        onBlur={() => runValidationTasks("wifiPassword", wifiPassword)}
        errorMessage={errors.wifiPassword?.errorMessage}
        hasError={errors.wifiPassword?.hasError}
        {...getOverrideProps(overrides, "wifiPassword")}
      ></TextField>
      <SwitchField
        label="Piggy approved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={piggyApproved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved: value,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.piggyApproved ?? value;
          }
          if (errors.piggyApproved?.hasError) {
            runValidationTasks("piggyApproved", value);
          }
          setPiggyApproved(value);
        }}
        onBlur={() => runValidationTasks("piggyApproved", piggyApproved)}
        errorMessage={errors.piggyApproved?.errorMessage}
        hasError={errors.piggyApproved?.hasError}
        {...getOverrideProps(overrides, "piggyApproved")}
      ></SwitchField>
      <TextField
        label="Piggy updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={piggyUpdatedAt && convertToLocal(new Date(piggyUpdatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt: value,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.piggyUpdatedAt ?? value;
          }
          if (errors.piggyUpdatedAt?.hasError) {
            runValidationTasks("piggyUpdatedAt", value);
          }
          setPiggyUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("piggyUpdatedAt", piggyUpdatedAt)}
        errorMessage={errors.piggyUpdatedAt?.errorMessage}
        hasError={errors.piggyUpdatedAt?.hasError}
        {...getOverrideProps(overrides, "piggyUpdatedAt")}
      ></TextField>
      <TextField
        label="Area value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={areaValue}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue: value,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.areaValue ?? value;
          }
          if (errors.areaValue?.hasError) {
            runValidationTasks("areaValue", value);
          }
          setAreaValue(value);
        }}
        onBlur={() => runValidationTasks("areaValue", areaValue)}
        errorMessage={errors.areaValue?.errorMessage}
        hasError={errors.areaValue?.hasError}
        {...getOverrideProps(overrides, "areaValue")}
      ></TextField>
      <TextField
        label="Area unit"
        isRequired={false}
        isReadOnly={false}
        value={areaUnit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit: value,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.areaUnit ?? value;
          }
          if (errors.areaUnit?.hasError) {
            runValidationTasks("areaUnit", value);
          }
          setAreaUnit(value);
        }}
        onBlur={() => runValidationTasks("areaUnit", areaUnit)}
        errorMessage={errors.areaUnit?.errorMessage}
        hasError={errors.areaUnit?.hasError}
        {...getOverrideProps(overrides, "areaUnit")}
      ></TextField>
      <TextField
        label="Xiaozhu room id"
        isRequired={false}
        isReadOnly={false}
        value={xiaozhuRoomId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId: value,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.xiaozhuRoomId ?? value;
          }
          if (errors.xiaozhuRoomId?.hasError) {
            runValidationTasks("xiaozhuRoomId", value);
          }
          setXiaozhuRoomId(value);
        }}
        onBlur={() => runValidationTasks("xiaozhuRoomId", xiaozhuRoomId)}
        errorMessage={errors.xiaozhuRoomId?.errorMessage}
        hasError={errors.xiaozhuRoomId?.hasError}
        {...getOverrideProps(overrides, "xiaozhuRoomId")}
      ></TextField>
      <SwitchField
        label="Xiaozhu review approved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={xiaozhuReviewApproved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved: value,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.xiaozhuReviewApproved ?? value;
          }
          if (errors.xiaozhuReviewApproved?.hasError) {
            runValidationTasks("xiaozhuReviewApproved", value);
          }
          setXiaozhuReviewApproved(value);
        }}
        onBlur={() =>
          runValidationTasks("xiaozhuReviewApproved", xiaozhuReviewApproved)
        }
        errorMessage={errors.xiaozhuReviewApproved?.errorMessage}
        hasError={errors.xiaozhuReviewApproved?.hasError}
        {...getOverrideProps(overrides, "xiaozhuReviewApproved")}
      ></SwitchField>
      <TextField
        label="Xiaozhu address id"
        isRequired={false}
        isReadOnly={false}
        value={xiaozhuAddressId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId: value,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.xiaozhuAddressId ?? value;
          }
          if (errors.xiaozhuAddressId?.hasError) {
            runValidationTasks("xiaozhuAddressId", value);
          }
          setXiaozhuAddressId(value);
        }}
        onBlur={() => runValidationTasks("xiaozhuAddressId", xiaozhuAddressId)}
        errorMessage={errors.xiaozhuAddressId?.errorMessage}
        hasError={errors.xiaozhuAddressId?.hasError}
        {...getOverrideProps(overrides, "xiaozhuAddressId")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons: values,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.xiaozhuRejectReasons ?? values;
          }
          setXiaozhuRejectReasons(values);
          setCurrentXiaozhuRejectReasonsValue("");
        }}
        currentFieldValue={currentXiaozhuRejectReasonsValue}
        label={"Xiaozhu reject reasons"}
        items={xiaozhuRejectReasons}
        hasError={errors?.xiaozhuRejectReasons?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "xiaozhuRejectReasons",
            currentXiaozhuRejectReasonsValue
          )
        }
        errorMessage={errors?.xiaozhuRejectReasons?.errorMessage}
        setFieldValue={setCurrentXiaozhuRejectReasonsValue}
        inputFieldRef={xiaozhuRejectReasonsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Xiaozhu reject reasons"
          isRequired={false}
          isReadOnly={false}
          value={currentXiaozhuRejectReasonsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.xiaozhuRejectReasons?.hasError) {
              runValidationTasks("xiaozhuRejectReasons", value);
            }
            setCurrentXiaozhuRejectReasonsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "xiaozhuRejectReasons",
              currentXiaozhuRejectReasonsValue
            )
          }
          errorMessage={errors.xiaozhuRejectReasons?.errorMessage}
          hasError={errors.xiaozhuRejectReasons?.hasError}
          ref={xiaozhuRejectReasonsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "xiaozhuRejectReasons")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Custom service fee percent"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={customServiceFeePercent}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent: value,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.customServiceFeePercent ?? value;
          }
          if (errors.customServiceFeePercent?.hasError) {
            runValidationTasks("customServiceFeePercent", value);
          }
          setCustomServiceFeePercent(value);
        }}
        onBlur={() =>
          runValidationTasks("customServiceFeePercent", customServiceFeePercent)
        }
        errorMessage={errors.customServiceFeePercent?.errorMessage}
        hasError={errors.customServiceFeePercent?.hasError}
        {...getOverrideProps(overrides, "customServiceFeePercent")}
      ></TextField>
      <TextField
        label="Hostaway listing id"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hostawayListingId}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId: value,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.hostawayListingId ?? value;
          }
          if (errors.hostawayListingId?.hasError) {
            runValidationTasks("hostawayListingId", value);
          }
          setHostawayListingId(value);
        }}
        onBlur={() =>
          runValidationTasks("hostawayListingId", hostawayListingId)
        }
        errorMessage={errors.hostawayListingId?.errorMessage}
        hasError={errors.hostawayListingId?.hasError}
        {...getOverrideProps(overrides, "hostawayListingId")}
      ></TextField>
      <TextField
        label="Hostaway last synced at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          hostawayLastSyncedAt && convertToLocal(new Date(hostawayLastSyncedAt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt: value,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.hostawayLastSyncedAt ?? value;
          }
          if (errors.hostawayLastSyncedAt?.hasError) {
            runValidationTasks("hostawayLastSyncedAt", value);
          }
          setHostawayLastSyncedAt(value);
        }}
        onBlur={() =>
          runValidationTasks("hostawayLastSyncedAt", hostawayLastSyncedAt)
        }
        errorMessage={errors.hostawayLastSyncedAt?.errorMessage}
        hasError={errors.hostawayLastSyncedAt?.hasError}
        {...getOverrideProps(overrides, "hostawayLastSyncedAt")}
      ></TextField>
      <TextField
        label="Hostaway review last synced at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          hostawayReviewLastSyncedAt &&
          convertToLocal(new Date(hostawayReviewLastSyncedAt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt: value,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.hostawayReviewLastSyncedAt ?? value;
          }
          if (errors.hostawayReviewLastSyncedAt?.hasError) {
            runValidationTasks("hostawayReviewLastSyncedAt", value);
          }
          setHostawayReviewLastSyncedAt(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "hostawayReviewLastSyncedAt",
            hostawayReviewLastSyncedAt
          )
        }
        errorMessage={errors.hostawayReviewLastSyncedAt?.errorMessage}
        hasError={errors.hostawayReviewLastSyncedAt?.hasError}
        {...getOverrideProps(overrides, "hostawayReviewLastSyncedAt")}
      ></TextField>
      <SwitchField
        label="Hostaway sync enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hostawaySyncEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled: value,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.hostawaySyncEnabled ?? value;
          }
          if (errors.hostawaySyncEnabled?.hasError) {
            runValidationTasks("hostawaySyncEnabled", value);
          }
          setHostawaySyncEnabled(value);
        }}
        onBlur={() =>
          runValidationTasks("hostawaySyncEnabled", hostawaySyncEnabled)
        }
        errorMessage={errors.hostawaySyncEnabled?.errorMessage}
        hasError={errors.hostawaySyncEnabled?.hasError}
        {...getOverrideProps(overrides, "hostawaySyncEnabled")}
      ></SwitchField>
      <TextField
        label="Guesty listing id"
        isRequired={false}
        isReadOnly={false}
        value={guestyListingId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId: value,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.guestyListingId ?? value;
          }
          if (errors.guestyListingId?.hasError) {
            runValidationTasks("guestyListingId", value);
          }
          setGuestyListingId(value);
        }}
        onBlur={() => runValidationTasks("guestyListingId", guestyListingId)}
        errorMessage={errors.guestyListingId?.errorMessage}
        hasError={errors.guestyListingId?.hasError}
        {...getOverrideProps(overrides, "guestyListingId")}
      ></TextField>
      <TextField
        label="Guesty last synced at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          guestyLastSyncedAt && convertToLocal(new Date(guestyLastSyncedAt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt: value,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.guestyLastSyncedAt ?? value;
          }
          if (errors.guestyLastSyncedAt?.hasError) {
            runValidationTasks("guestyLastSyncedAt", value);
          }
          setGuestyLastSyncedAt(value);
        }}
        onBlur={() =>
          runValidationTasks("guestyLastSyncedAt", guestyLastSyncedAt)
        }
        errorMessage={errors.guestyLastSyncedAt?.errorMessage}
        hasError={errors.guestyLastSyncedAt?.hasError}
        {...getOverrideProps(overrides, "guestyLastSyncedAt")}
      ></TextField>
      <SwitchField
        label="Guesty sync enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={guestySyncEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled: value,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.guestySyncEnabled ?? value;
          }
          if (errors.guestySyncEnabled?.hasError) {
            runValidationTasks("guestySyncEnabled", value);
          }
          setGuestySyncEnabled(value);
        }}
        onBlur={() =>
          runValidationTasks("guestySyncEnabled", guestySyncEnabled)
        }
        errorMessage={errors.guestySyncEnabled?.errorMessage}
        hasError={errors.guestySyncEnabled?.hasError}
        {...getOverrideProps(overrides, "guestySyncEnabled")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId: values,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.homeheroListingId ?? values;
          }
          setHomeheroListingId(values);
          setCurrentHomeheroListingIdValue("");
        }}
        currentFieldValue={currentHomeheroListingIdValue}
        label={"Homehero listing id"}
        items={homeheroListingId}
        hasError={errors?.homeheroListingId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "homeheroListingId",
            currentHomeheroListingIdValue
          )
        }
        errorMessage={errors?.homeheroListingId?.errorMessage}
        setFieldValue={setCurrentHomeheroListingIdValue}
        inputFieldRef={homeheroListingIdRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Homehero listing id"
          isRequired={false}
          isReadOnly={false}
          value={currentHomeheroListingIdValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.homeheroListingId?.hasError) {
              runValidationTasks("homeheroListingId", value);
            }
            setCurrentHomeheroListingIdValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "homeheroListingId",
              currentHomeheroListingIdValue
            )
          }
          errorMessage={errors.homeheroListingId?.errorMessage}
          hasError={errors.homeheroListingId?.hasError}
          ref={homeheroListingIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "homeheroListingId")}
        ></TextAreaField>
      </ArrayField>
      <TextField
        label="Homehero last synced at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          homeheroLastSyncedAt && convertToLocal(new Date(homeheroLastSyncedAt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt: value,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.homeheroLastSyncedAt ?? value;
          }
          if (errors.homeheroLastSyncedAt?.hasError) {
            runValidationTasks("homeheroLastSyncedAt", value);
          }
          setHomeheroLastSyncedAt(value);
        }}
        onBlur={() =>
          runValidationTasks("homeheroLastSyncedAt", homeheroLastSyncedAt)
        }
        errorMessage={errors.homeheroLastSyncedAt?.errorMessage}
        hasError={errors.homeheroLastSyncedAt?.hasError}
        {...getOverrideProps(overrides, "homeheroLastSyncedAt")}
      ></TextField>
      <SwitchField
        label="Homehero sync enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={homeheroSyncEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled: value,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.homeheroSyncEnabled ?? value;
          }
          if (errors.homeheroSyncEnabled?.hasError) {
            runValidationTasks("homeheroSyncEnabled", value);
          }
          setHomeheroSyncEnabled(value);
        }}
        onBlur={() =>
          runValidationTasks("homeheroSyncEnabled", homeheroSyncEnabled)
        }
        errorMessage={errors.homeheroSyncEnabled?.errorMessage}
        hasError={errors.homeheroSyncEnabled?.hasError}
        {...getOverrideProps(overrides, "homeheroSyncEnabled")}
      ></SwitchField>
      <TextField
        label="Hospitable listing id"
        isRequired={false}
        isReadOnly={false}
        value={hospitableListingId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId: value,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.hospitableListingId ?? value;
          }
          if (errors.hospitableListingId?.hasError) {
            runValidationTasks("hospitableListingId", value);
          }
          setHospitableListingId(value);
        }}
        onBlur={() =>
          runValidationTasks("hospitableListingId", hospitableListingId)
        }
        errorMessage={errors.hospitableListingId?.errorMessage}
        hasError={errors.hospitableListingId?.hasError}
        {...getOverrideProps(overrides, "hospitableListingId")}
      ></TextField>
      <TextField
        label="Hospitable last synced at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          hospitableLastSyncedAt &&
          convertToLocal(new Date(hospitableLastSyncedAt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt: value,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.hospitableLastSyncedAt ?? value;
          }
          if (errors.hospitableLastSyncedAt?.hasError) {
            runValidationTasks("hospitableLastSyncedAt", value);
          }
          setHospitableLastSyncedAt(value);
        }}
        onBlur={() =>
          runValidationTasks("hospitableLastSyncedAt", hospitableLastSyncedAt)
        }
        errorMessage={errors.hospitableLastSyncedAt?.errorMessage}
        hasError={errors.hospitableLastSyncedAt?.hasError}
        {...getOverrideProps(overrides, "hospitableLastSyncedAt")}
      ></TextField>
      <SwitchField
        label="Hospitable sync enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hospitableSyncEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled: value,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.hospitableSyncEnabled ?? value;
          }
          if (errors.hospitableSyncEnabled?.hasError) {
            runValidationTasks("hospitableSyncEnabled", value);
          }
          setHospitableSyncEnabled(value);
        }}
        onBlur={() =>
          runValidationTasks("hospitableSyncEnabled", hospitableSyncEnabled)
        }
        errorMessage={errors.hospitableSyncEnabled?.errorMessage}
        hasError={errors.hospitableSyncEnabled?.hasError}
        {...getOverrideProps(overrides, "hospitableSyncEnabled")}
      ></SwitchField>
      <SwitchField
        label="Hospitable sync completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hospitableSyncCompleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted: value,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.hospitableSyncCompleted ?? value;
          }
          if (errors.hospitableSyncCompleted?.hasError) {
            runValidationTasks("hospitableSyncCompleted", value);
          }
          setHospitableSyncCompleted(value);
        }}
        onBlur={() =>
          runValidationTasks("hospitableSyncCompleted", hospitableSyncCompleted)
        }
        errorMessage={errors.hospitableSyncCompleted?.errorMessage}
        hasError={errors.hospitableSyncCompleted?.hasError}
        {...getOverrideProps(overrides, "hospitableSyncCompleted")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers: values,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.invitedUsers ?? values;
          }
          setInvitedUsers(values);
          setCurrentInvitedUsersValue("");
        }}
        currentFieldValue={currentInvitedUsersValue}
        label={"Invited users"}
        items={invitedUsers}
        hasError={errors?.invitedUsers?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("invitedUsers", currentInvitedUsersValue)
        }
        errorMessage={errors?.invitedUsers?.errorMessage}
        setFieldValue={setCurrentInvitedUsersValue}
        inputFieldRef={invitedUsersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Invited users"
          isRequired={false}
          isReadOnly={false}
          value={currentInvitedUsersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.invitedUsers?.hasError) {
              runValidationTasks("invitedUsers", value);
            }
            setCurrentInvitedUsersValue(value);
          }}
          onBlur={() =>
            runValidationTasks("invitedUsers", currentInvitedUsersValue)
          }
          errorMessage={errors.invitedUsers?.errorMessage}
          hasError={errors.invitedUsers?.hasError}
          ref={invitedUsersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "invitedUsers")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers: values,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            values = result?.readOnlyInvitedUsers ?? values;
          }
          setReadOnlyInvitedUsers(values);
          setCurrentReadOnlyInvitedUsersValue("");
        }}
        currentFieldValue={currentReadOnlyInvitedUsersValue}
        label={"Read only invited users"}
        items={readOnlyInvitedUsers}
        hasError={errors?.readOnlyInvitedUsers?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "readOnlyInvitedUsers",
            currentReadOnlyInvitedUsersValue
          )
        }
        errorMessage={errors?.readOnlyInvitedUsers?.errorMessage}
        setFieldValue={setCurrentReadOnlyInvitedUsersValue}
        inputFieldRef={readOnlyInvitedUsersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Read only invited users"
          isRequired={false}
          isReadOnly={false}
          value={currentReadOnlyInvitedUsersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.readOnlyInvitedUsers?.hasError) {
              runValidationTasks("readOnlyInvitedUsers", value);
            }
            setCurrentReadOnlyInvitedUsersValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "readOnlyInvitedUsers",
              currentReadOnlyInvitedUsersValue
            )
          }
          errorMessage={errors.readOnlyInvitedUsers?.errorMessage}
          hasError={errors.readOnlyInvitedUsers?.hasError}
          ref={readOnlyInvitedUsersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "readOnlyInvitedUsers")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Seo updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={seoUpdatedAt && convertToLocal(new Date(seoUpdatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt: value,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.seoUpdatedAt ?? value;
          }
          if (errors.seoUpdatedAt?.hasError) {
            runValidationTasks("seoUpdatedAt", value);
          }
          setSeoUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("seoUpdatedAt", seoUpdatedAt)}
        errorMessage={errors.seoUpdatedAt?.errorMessage}
        hasError={errors.seoUpdatedAt?.hasError}
        {...getOverrideProps(overrides, "seoUpdatedAt")}
      ></TextField>
      <TextField
        label="Lodgify property id"
        isRequired={false}
        isReadOnly={false}
        value={lodgifyPropertyId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId: value,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.lodgifyPropertyId ?? value;
          }
          if (errors.lodgifyPropertyId?.hasError) {
            runValidationTasks("lodgifyPropertyId", value);
          }
          setLodgifyPropertyId(value);
        }}
        onBlur={() =>
          runValidationTasks("lodgifyPropertyId", lodgifyPropertyId)
        }
        errorMessage={errors.lodgifyPropertyId?.errorMessage}
        hasError={errors.lodgifyPropertyId?.hasError}
        {...getOverrideProps(overrides, "lodgifyPropertyId")}
      ></TextField>
      <TextField
        label="Lodgify room id"
        isRequired={false}
        isReadOnly={false}
        value={lodgifyRoomId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId: value,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.lodgifyRoomId ?? value;
          }
          if (errors.lodgifyRoomId?.hasError) {
            runValidationTasks("lodgifyRoomId", value);
          }
          setLodgifyRoomId(value);
        }}
        onBlur={() => runValidationTasks("lodgifyRoomId", lodgifyRoomId)}
        errorMessage={errors.lodgifyRoomId?.errorMessage}
        hasError={errors.lodgifyRoomId?.hasError}
        {...getOverrideProps(overrides, "lodgifyRoomId")}
      ></TextField>
      <TextField
        label="Lodgify last synced at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          lodgifyLastSyncedAt && convertToLocal(new Date(lodgifyLastSyncedAt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt: value,
              lodgifySyncEnabled,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.lodgifyLastSyncedAt ?? value;
          }
          if (errors.lodgifyLastSyncedAt?.hasError) {
            runValidationTasks("lodgifyLastSyncedAt", value);
          }
          setLodgifyLastSyncedAt(value);
        }}
        onBlur={() =>
          runValidationTasks("lodgifyLastSyncedAt", lodgifyLastSyncedAt)
        }
        errorMessage={errors.lodgifyLastSyncedAt?.errorMessage}
        hasError={errors.lodgifyLastSyncedAt?.hasError}
        {...getOverrideProps(overrides, "lodgifyLastSyncedAt")}
      ></TextField>
      <SwitchField
        label="Lodgify sync enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={lodgifySyncEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled: value,
              isHotel,
            };
            const result = onChange(modelFields);
            value = result?.lodgifySyncEnabled ?? value;
          }
          if (errors.lodgifySyncEnabled?.hasError) {
            runValidationTasks("lodgifySyncEnabled", value);
          }
          setLodgifySyncEnabled(value);
        }}
        onBlur={() =>
          runValidationTasks("lodgifySyncEnabled", lodgifySyncEnabled)
        }
        errorMessage={errors.lodgifySyncEnabled?.errorMessage}
        hasError={errors.lodgifySyncEnabled?.hasError}
        {...getOverrideProps(overrides, "lodgifySyncEnabled")}
      ></SwitchField>
      <SwitchField
        label="Is hotel"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isHotel}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              owners,
              readOnlyOwners,
              placeId,
              unitNumber,
              streetNumber,
              street,
              suburb,
              postcode,
              state,
              stateShort,
              city,
              country,
              beds,
              bedrooms,
              bathrooms,
              propertyType,
              typeOfPlace,
              propertyDescription,
              propertyDescriptionEmbedding,
              propertySoftEmbedding,
              trainingEvolutions,
              translatedPropertyDescription,
              listingImages,
              status,
              amenities,
              categories,
              tags,
              deposit,
              guests,
              minimumStay,
              minimumPrice,
              maximumPrice,
              nightlyPrices,
              maximumStay,
              weeklyMinimumPrice,
              weeklyMaximumStay,
              location,
              propertyTitle,
              internalName,
              translatedPropertyTitle,
              houseRules,
              draft,
              verified,
              verifiedDocuments,
              weeklyDiscount,
              monthlyDiscount,
              cleaningFee,
              cleaningFrequency,
              availabilityRange,
              rooms,
              totalReviews,
              qualityScore,
              overallAverage,
              communicationAverage,
              amenitiesAverage,
              cleaningAverage,
              locationAverage,
              serviceAverage,
              valueAverage,
              cancellationPolicy,
              onceOffPaymentsOnly,
              instantBookEnabled,
              stayType,
              averageStayLength,
              checkInTime,
              checkOutTime,
              checkInInstructions,
              checkOutInstructions,
              timeBeforeCheckIn,
              timeAfterCheckOut,
              extraGuestFee,
              extraMaxGuests,
              disabledDates,
              unavailableDates,
              iCalUnavailableDates,
              iCalImportLinks,
              straID,
              advanceNotice,
              advanceNoticeTime,
              approved,
              standardServiceFee,
              fliggyApproved,
              fliggyHidden,
              fliggyID,
              wifiName,
              wifiPassword,
              piggyApproved,
              piggyUpdatedAt,
              areaValue,
              areaUnit,
              xiaozhuRoomId,
              xiaozhuReviewApproved,
              xiaozhuAddressId,
              xiaozhuRejectReasons,
              customServiceFeePercent,
              hostawayListingId,
              hostawayLastSyncedAt,
              hostawayReviewLastSyncedAt,
              hostawaySyncEnabled,
              guestyListingId,
              guestyLastSyncedAt,
              guestySyncEnabled,
              homeheroListingId,
              homeheroLastSyncedAt,
              homeheroSyncEnabled,
              hospitableListingId,
              hospitableLastSyncedAt,
              hospitableSyncEnabled,
              hospitableSyncCompleted,
              invitedUsers,
              readOnlyInvitedUsers,
              seoUpdatedAt,
              lodgifyPropertyId,
              lodgifyRoomId,
              lodgifyLastSyncedAt,
              lodgifySyncEnabled,
              isHotel: value,
            };
            const result = onChange(modelFields);
            value = result?.isHotel ?? value;
          }
          if (errors.isHotel?.hasError) {
            runValidationTasks("isHotel", value);
          }
          setIsHotel(value);
        }}
        onBlur={() => runValidationTasks("isHotel", isHotel)}
        errorMessage={errors.isHotel?.errorMessage}
        hasError={errors.isHotel?.hasError}
        {...getOverrideProps(overrides, "isHotel")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || listingModelModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || listingModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
