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
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getBookingRequestModel } from "../graphql/queries";
import { updateBookingRequestModel } from "../graphql/mutations";
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
export default function BookingRequestModelUpdateForm(props) {
  const {
    id: idProp,
    bookingRequestModel: bookingRequestModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    owners: [],
    arrivalDate: "",
    departureDate: "",
    guests: "",
    adults: "",
    children: "",
    infants: "",
    pets: "",
    maxGuests: "",
    expired: false,
    paymentmodelID: "",
    stripeAccountID: "",
    confirmationCode: "",
    conversationmodelID: "",
    confirmed: false,
    confirmedAt: "",
    couponCode: "",
    couponDiscountAmount: "",
    declined: false,
    reasonDeclined: "",
    cancelled: false,
    cancelledAt: "",
    cancelledBy: "",
    reasonCancelled: "",
    completed: false,
    stayReviewed: false,
    guestReviewed: false,
    checkInTime: "",
    checkOutTime: "",
    cancellationPolicy: "",
    bookingAmount: "",
    bookingAmountIncludingServiceFee: "",
    paymentAmount: "",
    pricePerNight: "",
    serviceFee: "",
    cleaningFee: "",
    extraGuestFee: "",
    extraMaxGuests: "",
    weeklyDiscount: "",
    monthlyDiscount: "",
    paymentModels: [],
    transferModels: [],
    refundModels: [],
    transferReversalModels: [],
    deposit: "",
    refundedAmount: "",
    standardServiceFee: false,
    hostPaid: false,
  };
  const [owners, setOwners] = React.useState(initialValues.owners);
  const [arrivalDate, setArrivalDate] = React.useState(
    initialValues.arrivalDate
  );
  const [departureDate, setDepartureDate] = React.useState(
    initialValues.departureDate
  );
  const [guests, setGuests] = React.useState(initialValues.guests);
  const [adults, setAdults] = React.useState(initialValues.adults);
  const [children, setChildren] = React.useState(initialValues.children);
  const [infants, setInfants] = React.useState(initialValues.infants);
  const [pets, setPets] = React.useState(initialValues.pets);
  const [maxGuests, setMaxGuests] = React.useState(initialValues.maxGuests);
  const [expired, setExpired] = React.useState(initialValues.expired);
  const [paymentmodelID, setPaymentmodelID] = React.useState(
    initialValues.paymentmodelID
  );
  const [stripeAccountID, setStripeAccountID] = React.useState(
    initialValues.stripeAccountID
  );
  const [confirmationCode, setConfirmationCode] = React.useState(
    initialValues.confirmationCode
  );
  const [conversationmodelID, setConversationmodelID] = React.useState(
    initialValues.conversationmodelID
  );
  const [confirmed, setConfirmed] = React.useState(initialValues.confirmed);
  const [confirmedAt, setConfirmedAt] = React.useState(
    initialValues.confirmedAt
  );
  const [couponCode, setCouponCode] = React.useState(initialValues.couponCode);
  const [couponDiscountAmount, setCouponDiscountAmount] = React.useState(
    initialValues.couponDiscountAmount
  );
  const [declined, setDeclined] = React.useState(initialValues.declined);
  const [reasonDeclined, setReasonDeclined] = React.useState(
    initialValues.reasonDeclined
  );
  const [cancelled, setCancelled] = React.useState(initialValues.cancelled);
  const [cancelledAt, setCancelledAt] = React.useState(
    initialValues.cancelledAt
  );
  const [cancelledBy, setCancelledBy] = React.useState(
    initialValues.cancelledBy
  );
  const [reasonCancelled, setReasonCancelled] = React.useState(
    initialValues.reasonCancelled
  );
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [stayReviewed, setStayReviewed] = React.useState(
    initialValues.stayReviewed
  );
  const [guestReviewed, setGuestReviewed] = React.useState(
    initialValues.guestReviewed
  );
  const [checkInTime, setCheckInTime] = React.useState(
    initialValues.checkInTime
  );
  const [checkOutTime, setCheckOutTime] = React.useState(
    initialValues.checkOutTime
  );
  const [cancellationPolicy, setCancellationPolicy] = React.useState(
    initialValues.cancellationPolicy
  );
  const [bookingAmount, setBookingAmount] = React.useState(
    initialValues.bookingAmount
  );
  const [
    bookingAmountIncludingServiceFee,
    setBookingAmountIncludingServiceFee,
  ] = React.useState(initialValues.bookingAmountIncludingServiceFee);
  const [paymentAmount, setPaymentAmount] = React.useState(
    initialValues.paymentAmount
  );
  const [pricePerNight, setPricePerNight] = React.useState(
    initialValues.pricePerNight
  );
  const [serviceFee, setServiceFee] = React.useState(initialValues.serviceFee);
  const [cleaningFee, setCleaningFee] = React.useState(
    initialValues.cleaningFee
  );
  const [extraGuestFee, setExtraGuestFee] = React.useState(
    initialValues.extraGuestFee
  );
  const [extraMaxGuests, setExtraMaxGuests] = React.useState(
    initialValues.extraMaxGuests
  );
  const [weeklyDiscount, setWeeklyDiscount] = React.useState(
    initialValues.weeklyDiscount
  );
  const [monthlyDiscount, setMonthlyDiscount] = React.useState(
    initialValues.monthlyDiscount
  );
  const [paymentModels, setPaymentModels] = React.useState(
    initialValues.paymentModels
  );
  const [transferModels, setTransferModels] = React.useState(
    initialValues.transferModels
  );
  const [refundModels, setRefundModels] = React.useState(
    initialValues.refundModels
  );
  const [transferReversalModels, setTransferReversalModels] = React.useState(
    initialValues.transferReversalModels
  );
  const [deposit, setDeposit] = React.useState(initialValues.deposit);
  const [refundedAmount, setRefundedAmount] = React.useState(
    initialValues.refundedAmount
  );
  const [standardServiceFee, setStandardServiceFee] = React.useState(
    initialValues.standardServiceFee
  );
  const [hostPaid, setHostPaid] = React.useState(initialValues.hostPaid);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bookingRequestModelRecord
      ? { ...initialValues, ...bookingRequestModelRecord }
      : initialValues;
    setOwners(cleanValues.owners ?? []);
    setCurrentOwnersValue("");
    setArrivalDate(cleanValues.arrivalDate);
    setDepartureDate(cleanValues.departureDate);
    setGuests(cleanValues.guests);
    setAdults(cleanValues.adults);
    setChildren(cleanValues.children);
    setInfants(cleanValues.infants);
    setPets(cleanValues.pets);
    setMaxGuests(cleanValues.maxGuests);
    setExpired(cleanValues.expired);
    setPaymentmodelID(cleanValues.paymentmodelID);
    setStripeAccountID(cleanValues.stripeAccountID);
    setConfirmationCode(cleanValues.confirmationCode);
    setConversationmodelID(cleanValues.conversationmodelID);
    setConfirmed(cleanValues.confirmed);
    setConfirmedAt(cleanValues.confirmedAt);
    setCouponCode(cleanValues.couponCode);
    setCouponDiscountAmount(cleanValues.couponDiscountAmount);
    setDeclined(cleanValues.declined);
    setReasonDeclined(cleanValues.reasonDeclined);
    setCancelled(cleanValues.cancelled);
    setCancelledAt(cleanValues.cancelledAt);
    setCancelledBy(cleanValues.cancelledBy);
    setReasonCancelled(cleanValues.reasonCancelled);
    setCompleted(cleanValues.completed);
    setStayReviewed(cleanValues.stayReviewed);
    setGuestReviewed(cleanValues.guestReviewed);
    setCheckInTime(cleanValues.checkInTime);
    setCheckOutTime(cleanValues.checkOutTime);
    setCancellationPolicy(cleanValues.cancellationPolicy);
    setBookingAmount(cleanValues.bookingAmount);
    setBookingAmountIncludingServiceFee(
      cleanValues.bookingAmountIncludingServiceFee
    );
    setPaymentAmount(cleanValues.paymentAmount);
    setPricePerNight(cleanValues.pricePerNight);
    setServiceFee(cleanValues.serviceFee);
    setCleaningFee(cleanValues.cleaningFee);
    setExtraGuestFee(cleanValues.extraGuestFee);
    setExtraMaxGuests(cleanValues.extraMaxGuests);
    setWeeklyDiscount(cleanValues.weeklyDiscount);
    setMonthlyDiscount(cleanValues.monthlyDiscount);
    setPaymentModels(cleanValues.paymentModels ?? []);
    setCurrentPaymentModelsValue("");
    setTransferModels(cleanValues.transferModels ?? []);
    setCurrentTransferModelsValue("");
    setRefundModels(cleanValues.refundModels ?? []);
    setCurrentRefundModelsValue("");
    setTransferReversalModels(cleanValues.transferReversalModels ?? []);
    setCurrentTransferReversalModelsValue("");
    setDeposit(cleanValues.deposit);
    setRefundedAmount(cleanValues.refundedAmount);
    setStandardServiceFee(cleanValues.standardServiceFee);
    setHostPaid(cleanValues.hostPaid);
    setErrors({});
  };
  const [bookingRequestModelRecord, setBookingRequestModelRecord] =
    React.useState(bookingRequestModelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getBookingRequestModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBookingRequestModel
        : bookingRequestModelModelProp;
      setBookingRequestModelRecord(record);
    };
    queryData();
  }, [idProp, bookingRequestModelModelProp]);
  React.useEffect(resetStateValues, [bookingRequestModelRecord]);
  const [currentOwnersValue, setCurrentOwnersValue] = React.useState("");
  const ownersRef = React.createRef();
  const [currentPaymentModelsValue, setCurrentPaymentModelsValue] =
    React.useState("");
  const paymentModelsRef = React.createRef();
  const [currentTransferModelsValue, setCurrentTransferModelsValue] =
    React.useState("");
  const transferModelsRef = React.createRef();
  const [currentRefundModelsValue, setCurrentRefundModelsValue] =
    React.useState("");
  const refundModelsRef = React.createRef();
  const [
    currentTransferReversalModelsValue,
    setCurrentTransferReversalModelsValue,
  ] = React.useState("");
  const transferReversalModelsRef = React.createRef();
  const validations = {
    owners: [{ type: "Required" }],
    arrivalDate: [],
    departureDate: [],
    guests: [],
    adults: [],
    children: [],
    infants: [],
    pets: [],
    maxGuests: [],
    expired: [],
    paymentmodelID: [],
    stripeAccountID: [],
    confirmationCode: [],
    conversationmodelID: [],
    confirmed: [],
    confirmedAt: [],
    couponCode: [],
    couponDiscountAmount: [],
    declined: [],
    reasonDeclined: [],
    cancelled: [],
    cancelledAt: [],
    cancelledBy: [],
    reasonCancelled: [],
    completed: [],
    stayReviewed: [],
    guestReviewed: [],
    checkInTime: [],
    checkOutTime: [],
    cancellationPolicy: [],
    bookingAmount: [],
    bookingAmountIncludingServiceFee: [],
    paymentAmount: [],
    pricePerNight: [],
    serviceFee: [],
    cleaningFee: [],
    extraGuestFee: [],
    extraMaxGuests: [],
    weeklyDiscount: [],
    monthlyDiscount: [],
    paymentModels: [],
    transferModels: [],
    refundModels: [],
    transferReversalModels: [],
    deposit: [],
    refundedAmount: [],
    standardServiceFee: [],
    hostPaid: [],
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
          owners,
          arrivalDate: arrivalDate ?? null,
          departureDate: departureDate ?? null,
          guests: guests ?? null,
          adults: adults ?? null,
          children: children ?? null,
          infants: infants ?? null,
          pets: pets ?? null,
          maxGuests: maxGuests ?? null,
          expired: expired ?? null,
          paymentmodelID: paymentmodelID ?? null,
          stripeAccountID: stripeAccountID ?? null,
          confirmationCode: confirmationCode ?? null,
          conversationmodelID: conversationmodelID ?? null,
          confirmed: confirmed ?? null,
          confirmedAt: confirmedAt ?? null,
          couponCode: couponCode ?? null,
          couponDiscountAmount: couponDiscountAmount ?? null,
          declined: declined ?? null,
          reasonDeclined: reasonDeclined ?? null,
          cancelled: cancelled ?? null,
          cancelledAt: cancelledAt ?? null,
          cancelledBy: cancelledBy ?? null,
          reasonCancelled: reasonCancelled ?? null,
          completed: completed ?? null,
          stayReviewed: stayReviewed ?? null,
          guestReviewed: guestReviewed ?? null,
          checkInTime: checkInTime ?? null,
          checkOutTime: checkOutTime ?? null,
          cancellationPolicy: cancellationPolicy ?? null,
          bookingAmount: bookingAmount ?? null,
          bookingAmountIncludingServiceFee:
            bookingAmountIncludingServiceFee ?? null,
          paymentAmount: paymentAmount ?? null,
          pricePerNight: pricePerNight ?? null,
          serviceFee: serviceFee ?? null,
          cleaningFee: cleaningFee ?? null,
          extraGuestFee: extraGuestFee ?? null,
          extraMaxGuests: extraMaxGuests ?? null,
          weeklyDiscount: weeklyDiscount ?? null,
          monthlyDiscount: monthlyDiscount ?? null,
          paymentModels: paymentModels ?? null,
          transferModels: transferModels ?? null,
          refundModels: refundModels ?? null,
          transferReversalModels: transferReversalModels ?? null,
          deposit: deposit ?? null,
          refundedAmount: refundedAmount ?? null,
          standardServiceFee: standardServiceFee ?? null,
          hostPaid: hostPaid ?? null,
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
            query: updateBookingRequestModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bookingRequestModelRecord.id,
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
      {...getOverrideProps(overrides, "BookingRequestModelUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owners: values,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
      <TextField
        label="Arrival date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={arrivalDate && convertToLocal(new Date(arrivalDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate: value,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.arrivalDate ?? value;
          }
          if (errors.arrivalDate?.hasError) {
            runValidationTasks("arrivalDate", value);
          }
          setArrivalDate(value);
        }}
        onBlur={() => runValidationTasks("arrivalDate", arrivalDate)}
        errorMessage={errors.arrivalDate?.errorMessage}
        hasError={errors.arrivalDate?.hasError}
        {...getOverrideProps(overrides, "arrivalDate")}
      ></TextField>
      <TextField
        label="Departure date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={departureDate && convertToLocal(new Date(departureDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate: value,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.departureDate ?? value;
          }
          if (errors.departureDate?.hasError) {
            runValidationTasks("departureDate", value);
          }
          setDepartureDate(value);
        }}
        onBlur={() => runValidationTasks("departureDate", departureDate)}
        errorMessage={errors.departureDate?.errorMessage}
        hasError={errors.departureDate?.hasError}
        {...getOverrideProps(overrides, "departureDate")}
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
              owners,
              arrivalDate,
              departureDate,
              guests: value,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
        label="Adults"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={adults}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults: value,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.adults ?? value;
          }
          if (errors.adults?.hasError) {
            runValidationTasks("adults", value);
          }
          setAdults(value);
        }}
        onBlur={() => runValidationTasks("adults", adults)}
        errorMessage={errors.adults?.errorMessage}
        hasError={errors.adults?.hasError}
        {...getOverrideProps(overrides, "adults")}
      ></TextField>
      <TextField
        label="Children"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={children}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children: value,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.children ?? value;
          }
          if (errors.children?.hasError) {
            runValidationTasks("children", value);
          }
          setChildren(value);
        }}
        onBlur={() => runValidationTasks("children", children)}
        errorMessage={errors.children?.errorMessage}
        hasError={errors.children?.hasError}
        {...getOverrideProps(overrides, "children")}
      ></TextField>
      <TextField
        label="Infants"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={infants}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants: value,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.infants ?? value;
          }
          if (errors.infants?.hasError) {
            runValidationTasks("infants", value);
          }
          setInfants(value);
        }}
        onBlur={() => runValidationTasks("infants", infants)}
        errorMessage={errors.infants?.errorMessage}
        hasError={errors.infants?.hasError}
        {...getOverrideProps(overrides, "infants")}
      ></TextField>
      <TextField
        label="Pets"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pets}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets: value,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.pets ?? value;
          }
          if (errors.pets?.hasError) {
            runValidationTasks("pets", value);
          }
          setPets(value);
        }}
        onBlur={() => runValidationTasks("pets", pets)}
        errorMessage={errors.pets?.errorMessage}
        hasError={errors.pets?.hasError}
        {...getOverrideProps(overrides, "pets")}
      ></TextField>
      <TextField
        label="Max guests"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxGuests}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests: value,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.maxGuests ?? value;
          }
          if (errors.maxGuests?.hasError) {
            runValidationTasks("maxGuests", value);
          }
          setMaxGuests(value);
        }}
        onBlur={() => runValidationTasks("maxGuests", maxGuests)}
        errorMessage={errors.maxGuests?.errorMessage}
        hasError={errors.maxGuests?.hasError}
        {...getOverrideProps(overrides, "maxGuests")}
      ></TextField>
      <SwitchField
        label="Expired"
        defaultChecked={false}
        isDisabled={false}
        isChecked={expired}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired: value,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.expired ?? value;
          }
          if (errors.expired?.hasError) {
            runValidationTasks("expired", value);
          }
          setExpired(value);
        }}
        onBlur={() => runValidationTasks("expired", expired)}
        errorMessage={errors.expired?.errorMessage}
        hasError={errors.expired?.hasError}
        {...getOverrideProps(overrides, "expired")}
      ></SwitchField>
      <TextField
        label="Paymentmodel id"
        isRequired={false}
        isReadOnly={false}
        value={paymentmodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID: value,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.paymentmodelID ?? value;
          }
          if (errors.paymentmodelID?.hasError) {
            runValidationTasks("paymentmodelID", value);
          }
          setPaymentmodelID(value);
        }}
        onBlur={() => runValidationTasks("paymentmodelID", paymentmodelID)}
        errorMessage={errors.paymentmodelID?.errorMessage}
        hasError={errors.paymentmodelID?.hasError}
        {...getOverrideProps(overrides, "paymentmodelID")}
      ></TextField>
      <TextField
        label="Stripe account id"
        isRequired={false}
        isReadOnly={false}
        value={stripeAccountID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID: value,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.stripeAccountID ?? value;
          }
          if (errors.stripeAccountID?.hasError) {
            runValidationTasks("stripeAccountID", value);
          }
          setStripeAccountID(value);
        }}
        onBlur={() => runValidationTasks("stripeAccountID", stripeAccountID)}
        errorMessage={errors.stripeAccountID?.errorMessage}
        hasError={errors.stripeAccountID?.hasError}
        {...getOverrideProps(overrides, "stripeAccountID")}
      ></TextField>
      <TextField
        label="Confirmation code"
        isRequired={false}
        isReadOnly={false}
        value={confirmationCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode: value,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.confirmationCode ?? value;
          }
          if (errors.confirmationCode?.hasError) {
            runValidationTasks("confirmationCode", value);
          }
          setConfirmationCode(value);
        }}
        onBlur={() => runValidationTasks("confirmationCode", confirmationCode)}
        errorMessage={errors.confirmationCode?.errorMessage}
        hasError={errors.confirmationCode?.hasError}
        {...getOverrideProps(overrides, "confirmationCode")}
      ></TextField>
      <TextField
        label="Conversationmodel id"
        isRequired={false}
        isReadOnly={false}
        value={conversationmodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID: value,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.conversationmodelID ?? value;
          }
          if (errors.conversationmodelID?.hasError) {
            runValidationTasks("conversationmodelID", value);
          }
          setConversationmodelID(value);
        }}
        onBlur={() =>
          runValidationTasks("conversationmodelID", conversationmodelID)
        }
        errorMessage={errors.conversationmodelID?.errorMessage}
        hasError={errors.conversationmodelID?.hasError}
        {...getOverrideProps(overrides, "conversationmodelID")}
      ></TextField>
      <SwitchField
        label="Confirmed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={confirmed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed: value,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.confirmed ?? value;
          }
          if (errors.confirmed?.hasError) {
            runValidationTasks("confirmed", value);
          }
          setConfirmed(value);
        }}
        onBlur={() => runValidationTasks("confirmed", confirmed)}
        errorMessage={errors.confirmed?.errorMessage}
        hasError={errors.confirmed?.hasError}
        {...getOverrideProps(overrides, "confirmed")}
      ></SwitchField>
      <TextField
        label="Confirmed at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={confirmedAt && convertToLocal(new Date(confirmedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt: value,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.confirmedAt ?? value;
          }
          if (errors.confirmedAt?.hasError) {
            runValidationTasks("confirmedAt", value);
          }
          setConfirmedAt(value);
        }}
        onBlur={() => runValidationTasks("confirmedAt", confirmedAt)}
        errorMessage={errors.confirmedAt?.errorMessage}
        hasError={errors.confirmedAt?.hasError}
        {...getOverrideProps(overrides, "confirmedAt")}
      ></TextField>
      <TextField
        label="Coupon code"
        isRequired={false}
        isReadOnly={false}
        value={couponCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode: value,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.couponCode ?? value;
          }
          if (errors.couponCode?.hasError) {
            runValidationTasks("couponCode", value);
          }
          setCouponCode(value);
        }}
        onBlur={() => runValidationTasks("couponCode", couponCode)}
        errorMessage={errors.couponCode?.errorMessage}
        hasError={errors.couponCode?.hasError}
        {...getOverrideProps(overrides, "couponCode")}
      ></TextField>
      <TextField
        label="Coupon discount amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={couponDiscountAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount: value,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.couponDiscountAmount ?? value;
          }
          if (errors.couponDiscountAmount?.hasError) {
            runValidationTasks("couponDiscountAmount", value);
          }
          setCouponDiscountAmount(value);
        }}
        onBlur={() =>
          runValidationTasks("couponDiscountAmount", couponDiscountAmount)
        }
        errorMessage={errors.couponDiscountAmount?.errorMessage}
        hasError={errors.couponDiscountAmount?.hasError}
        {...getOverrideProps(overrides, "couponDiscountAmount")}
      ></TextField>
      <SwitchField
        label="Declined"
        defaultChecked={false}
        isDisabled={false}
        isChecked={declined}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined: value,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.declined ?? value;
          }
          if (errors.declined?.hasError) {
            runValidationTasks("declined", value);
          }
          setDeclined(value);
        }}
        onBlur={() => runValidationTasks("declined", declined)}
        errorMessage={errors.declined?.errorMessage}
        hasError={errors.declined?.hasError}
        {...getOverrideProps(overrides, "declined")}
      ></SwitchField>
      <TextField
        label="Reason declined"
        isRequired={false}
        isReadOnly={false}
        value={reasonDeclined}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined: value,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.reasonDeclined ?? value;
          }
          if (errors.reasonDeclined?.hasError) {
            runValidationTasks("reasonDeclined", value);
          }
          setReasonDeclined(value);
        }}
        onBlur={() => runValidationTasks("reasonDeclined", reasonDeclined)}
        errorMessage={errors.reasonDeclined?.errorMessage}
        hasError={errors.reasonDeclined?.hasError}
        {...getOverrideProps(overrides, "reasonDeclined")}
      ></TextField>
      <SwitchField
        label="Cancelled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={cancelled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled: value,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.cancelled ?? value;
          }
          if (errors.cancelled?.hasError) {
            runValidationTasks("cancelled", value);
          }
          setCancelled(value);
        }}
        onBlur={() => runValidationTasks("cancelled", cancelled)}
        errorMessage={errors.cancelled?.errorMessage}
        hasError={errors.cancelled?.hasError}
        {...getOverrideProps(overrides, "cancelled")}
      ></SwitchField>
      <TextField
        label="Cancelled at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={cancelledAt && convertToLocal(new Date(cancelledAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt: value,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.cancelledAt ?? value;
          }
          if (errors.cancelledAt?.hasError) {
            runValidationTasks("cancelledAt", value);
          }
          setCancelledAt(value);
        }}
        onBlur={() => runValidationTasks("cancelledAt", cancelledAt)}
        errorMessage={errors.cancelledAt?.errorMessage}
        hasError={errors.cancelledAt?.hasError}
        {...getOverrideProps(overrides, "cancelledAt")}
      ></TextField>
      <TextField
        label="Cancelled by"
        isRequired={false}
        isReadOnly={false}
        value={cancelledBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy: value,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.cancelledBy ?? value;
          }
          if (errors.cancelledBy?.hasError) {
            runValidationTasks("cancelledBy", value);
          }
          setCancelledBy(value);
        }}
        onBlur={() => runValidationTasks("cancelledBy", cancelledBy)}
        errorMessage={errors.cancelledBy?.errorMessage}
        hasError={errors.cancelledBy?.hasError}
        {...getOverrideProps(overrides, "cancelledBy")}
      ></TextField>
      <TextField
        label="Reason cancelled"
        isRequired={false}
        isReadOnly={false}
        value={reasonCancelled}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled: value,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.reasonCancelled ?? value;
          }
          if (errors.reasonCancelled?.hasError) {
            runValidationTasks("reasonCancelled", value);
          }
          setReasonCancelled(value);
        }}
        onBlur={() => runValidationTasks("reasonCancelled", reasonCancelled)}
        errorMessage={errors.reasonCancelled?.errorMessage}
        hasError={errors.reasonCancelled?.hasError}
        {...getOverrideProps(overrides, "reasonCancelled")}
      ></TextField>
      <SwitchField
        label="Completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed: value,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.completed ?? value;
          }
          if (errors.completed?.hasError) {
            runValidationTasks("completed", value);
          }
          setCompleted(value);
        }}
        onBlur={() => runValidationTasks("completed", completed)}
        errorMessage={errors.completed?.errorMessage}
        hasError={errors.completed?.hasError}
        {...getOverrideProps(overrides, "completed")}
      ></SwitchField>
      <SwitchField
        label="Stay reviewed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={stayReviewed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed: value,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.stayReviewed ?? value;
          }
          if (errors.stayReviewed?.hasError) {
            runValidationTasks("stayReviewed", value);
          }
          setStayReviewed(value);
        }}
        onBlur={() => runValidationTasks("stayReviewed", stayReviewed)}
        errorMessage={errors.stayReviewed?.errorMessage}
        hasError={errors.stayReviewed?.hasError}
        {...getOverrideProps(overrides, "stayReviewed")}
      ></SwitchField>
      <SwitchField
        label="Guest reviewed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={guestReviewed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed: value,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.guestReviewed ?? value;
          }
          if (errors.guestReviewed?.hasError) {
            runValidationTasks("guestReviewed", value);
          }
          setGuestReviewed(value);
        }}
        onBlur={() => runValidationTasks("guestReviewed", guestReviewed)}
        errorMessage={errors.guestReviewed?.errorMessage}
        hasError={errors.guestReviewed?.hasError}
        {...getOverrideProps(overrides, "guestReviewed")}
      ></SwitchField>
      <TextField
        label="Check in time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={checkInTime}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime: value,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime: value,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
        label="Cancellation policy"
        isRequired={false}
        isReadOnly={false}
        value={cancellationPolicy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy: value,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
      <TextField
        label="Booking amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bookingAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount: value,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.bookingAmount ?? value;
          }
          if (errors.bookingAmount?.hasError) {
            runValidationTasks("bookingAmount", value);
          }
          setBookingAmount(value);
        }}
        onBlur={() => runValidationTasks("bookingAmount", bookingAmount)}
        errorMessage={errors.bookingAmount?.errorMessage}
        hasError={errors.bookingAmount?.hasError}
        {...getOverrideProps(overrides, "bookingAmount")}
      ></TextField>
      <TextField
        label="Booking amount including service fee"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bookingAmountIncludingServiceFee}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee: value,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.bookingAmountIncludingServiceFee ?? value;
          }
          if (errors.bookingAmountIncludingServiceFee?.hasError) {
            runValidationTasks("bookingAmountIncludingServiceFee", value);
          }
          setBookingAmountIncludingServiceFee(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "bookingAmountIncludingServiceFee",
            bookingAmountIncludingServiceFee
          )
        }
        errorMessage={errors.bookingAmountIncludingServiceFee?.errorMessage}
        hasError={errors.bookingAmountIncludingServiceFee?.hasError}
        {...getOverrideProps(overrides, "bookingAmountIncludingServiceFee")}
      ></TextField>
      <TextField
        label="Payment amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={paymentAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount: value,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.paymentAmount ?? value;
          }
          if (errors.paymentAmount?.hasError) {
            runValidationTasks("paymentAmount", value);
          }
          setPaymentAmount(value);
        }}
        onBlur={() => runValidationTasks("paymentAmount", paymentAmount)}
        errorMessage={errors.paymentAmount?.errorMessage}
        hasError={errors.paymentAmount?.hasError}
        {...getOverrideProps(overrides, "paymentAmount")}
      ></TextField>
      <TextField
        label="Price per night"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pricePerNight}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight: value,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.pricePerNight ?? value;
          }
          if (errors.pricePerNight?.hasError) {
            runValidationTasks("pricePerNight", value);
          }
          setPricePerNight(value);
        }}
        onBlur={() => runValidationTasks("pricePerNight", pricePerNight)}
        errorMessage={errors.pricePerNight?.errorMessage}
        hasError={errors.pricePerNight?.hasError}
        {...getOverrideProps(overrides, "pricePerNight")}
      ></TextField>
      <TextField
        label="Service fee"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={serviceFee}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee: value,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.serviceFee ?? value;
          }
          if (errors.serviceFee?.hasError) {
            runValidationTasks("serviceFee", value);
          }
          setServiceFee(value);
        }}
        onBlur={() => runValidationTasks("serviceFee", serviceFee)}
        errorMessage={errors.serviceFee?.errorMessage}
        hasError={errors.serviceFee?.hasError}
        {...getOverrideProps(overrides, "serviceFee")}
      ></TextField>
      <TextField
        label="Cleaning fee"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cleaningFee}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee: value,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
        label="Extra guest fee"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={extraGuestFee}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee: value,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests: value,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
      <TextField
        label="Weekly discount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weeklyDiscount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount: value,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount: value,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels: values,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            values = result?.paymentModels ?? values;
          }
          setPaymentModels(values);
          setCurrentPaymentModelsValue("");
        }}
        currentFieldValue={currentPaymentModelsValue}
        label={"Payment models"}
        items={paymentModels}
        hasError={errors?.paymentModels?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("paymentModels", currentPaymentModelsValue)
        }
        errorMessage={errors?.paymentModels?.errorMessage}
        setFieldValue={setCurrentPaymentModelsValue}
        inputFieldRef={paymentModelsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Payment models"
          isRequired={false}
          isReadOnly={false}
          value={currentPaymentModelsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.paymentModels?.hasError) {
              runValidationTasks("paymentModels", value);
            }
            setCurrentPaymentModelsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("paymentModels", currentPaymentModelsValue)
          }
          errorMessage={errors.paymentModels?.errorMessage}
          hasError={errors.paymentModels?.hasError}
          ref={paymentModelsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "paymentModels")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels: values,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            values = result?.transferModels ?? values;
          }
          setTransferModels(values);
          setCurrentTransferModelsValue("");
        }}
        currentFieldValue={currentTransferModelsValue}
        label={"Transfer models"}
        items={transferModels}
        hasError={errors?.transferModels?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("transferModels", currentTransferModelsValue)
        }
        errorMessage={errors?.transferModels?.errorMessage}
        setFieldValue={setCurrentTransferModelsValue}
        inputFieldRef={transferModelsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Transfer models"
          isRequired={false}
          isReadOnly={false}
          value={currentTransferModelsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.transferModels?.hasError) {
              runValidationTasks("transferModels", value);
            }
            setCurrentTransferModelsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("transferModels", currentTransferModelsValue)
          }
          errorMessage={errors.transferModels?.errorMessage}
          hasError={errors.transferModels?.hasError}
          ref={transferModelsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "transferModels")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels: values,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            values = result?.refundModels ?? values;
          }
          setRefundModels(values);
          setCurrentRefundModelsValue("");
        }}
        currentFieldValue={currentRefundModelsValue}
        label={"Refund models"}
        items={refundModels}
        hasError={errors?.refundModels?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("refundModels", currentRefundModelsValue)
        }
        errorMessage={errors?.refundModels?.errorMessage}
        setFieldValue={setCurrentRefundModelsValue}
        inputFieldRef={refundModelsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Refund models"
          isRequired={false}
          isReadOnly={false}
          value={currentRefundModelsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.refundModels?.hasError) {
              runValidationTasks("refundModels", value);
            }
            setCurrentRefundModelsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("refundModels", currentRefundModelsValue)
          }
          errorMessage={errors.refundModels?.errorMessage}
          hasError={errors.refundModels?.hasError}
          ref={refundModelsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "refundModels")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels: values,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            values = result?.transferReversalModels ?? values;
          }
          setTransferReversalModels(values);
          setCurrentTransferReversalModelsValue("");
        }}
        currentFieldValue={currentTransferReversalModelsValue}
        label={"Transfer reversal models"}
        items={transferReversalModels}
        hasError={errors?.transferReversalModels?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "transferReversalModels",
            currentTransferReversalModelsValue
          )
        }
        errorMessage={errors?.transferReversalModels?.errorMessage}
        setFieldValue={setCurrentTransferReversalModelsValue}
        inputFieldRef={transferReversalModelsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Transfer reversal models"
          isRequired={false}
          isReadOnly={false}
          value={currentTransferReversalModelsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.transferReversalModels?.hasError) {
              runValidationTasks("transferReversalModels", value);
            }
            setCurrentTransferReversalModelsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "transferReversalModels",
              currentTransferReversalModelsValue
            )
          }
          errorMessage={errors.transferReversalModels?.errorMessage}
          hasError={errors.transferReversalModels?.hasError}
          ref={transferReversalModelsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "transferReversalModels")}
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
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit: value,
              refundedAmount,
              standardServiceFee,
              hostPaid,
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
        label="Refunded amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={refundedAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount: value,
              standardServiceFee,
              hostPaid,
            };
            const result = onChange(modelFields);
            value = result?.refundedAmount ?? value;
          }
          if (errors.refundedAmount?.hasError) {
            runValidationTasks("refundedAmount", value);
          }
          setRefundedAmount(value);
        }}
        onBlur={() => runValidationTasks("refundedAmount", refundedAmount)}
        errorMessage={errors.refundedAmount?.errorMessage}
        hasError={errors.refundedAmount?.hasError}
        {...getOverrideProps(overrides, "refundedAmount")}
      ></TextField>
      <SwitchField
        label="Standard service fee"
        defaultChecked={false}
        isDisabled={false}
        isChecked={standardServiceFee}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee: value,
              hostPaid,
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
        label="Host paid"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hostPaid}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owners,
              arrivalDate,
              departureDate,
              guests,
              adults,
              children,
              infants,
              pets,
              maxGuests,
              expired,
              paymentmodelID,
              stripeAccountID,
              confirmationCode,
              conversationmodelID,
              confirmed,
              confirmedAt,
              couponCode,
              couponDiscountAmount,
              declined,
              reasonDeclined,
              cancelled,
              cancelledAt,
              cancelledBy,
              reasonCancelled,
              completed,
              stayReviewed,
              guestReviewed,
              checkInTime,
              checkOutTime,
              cancellationPolicy,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              paymentAmount,
              pricePerNight,
              serviceFee,
              cleaningFee,
              extraGuestFee,
              extraMaxGuests,
              weeklyDiscount,
              monthlyDiscount,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
              deposit,
              refundedAmount,
              standardServiceFee,
              hostPaid: value,
            };
            const result = onChange(modelFields);
            value = result?.hostPaid ?? value;
          }
          if (errors.hostPaid?.hasError) {
            runValidationTasks("hostPaid", value);
          }
          setHostPaid(value);
        }}
        onBlur={() => runValidationTasks("hostPaid", hostPaid)}
        errorMessage={errors.hostPaid?.errorMessage}
        hasError={errors.hostPaid?.hasError}
        {...getOverrideProps(overrides, "hostPaid")}
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
          isDisabled={!(idProp || bookingRequestModelModelProp)}
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
              !(idProp || bookingRequestModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
