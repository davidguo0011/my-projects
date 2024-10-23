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
import { getOrderModel } from "../graphql/queries";
import { updateOrderModel } from "../graphql/mutations";
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
export default function OrderModelUpdateForm(props) {
  const {
    id: idProp,
    orderModel: orderModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    owner: "",
    productmodelID: "",
    quantity: "",
    status: "",
    confirmed: false,
    declined: false,
    expired: false,
    completed: false,
    cancelled: false,
    instantBookEnabled: false,
    people: "",
    guests: "",
    adults: "",
    children: "",
    infants: "",
    pets: "",
    items: "",
    startDate: "",
    endDate: "",
    bookingAmount: "",
    bookingAmountIncludingServiceFee: "",
    serviceFee: "",
    couponCode: "",
    couponDiscountAmount: "",
    refunded: "",
    paymentModels: [],
    transferModels: [],
    refundModels: [],
    transferReversalModels: [],
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [productmodelID, setProductmodelID] = React.useState(
    initialValues.productmodelID
  );
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [status, setStatus] = React.useState(initialValues.status);
  const [confirmed, setConfirmed] = React.useState(initialValues.confirmed);
  const [declined, setDeclined] = React.useState(initialValues.declined);
  const [expired, setExpired] = React.useState(initialValues.expired);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [cancelled, setCancelled] = React.useState(initialValues.cancelled);
  const [instantBookEnabled, setInstantBookEnabled] = React.useState(
    initialValues.instantBookEnabled
  );
  const [people, setPeople] = React.useState(initialValues.people);
  const [guests, setGuests] = React.useState(initialValues.guests);
  const [adults, setAdults] = React.useState(initialValues.adults);
  const [children, setChildren] = React.useState(initialValues.children);
  const [infants, setInfants] = React.useState(initialValues.infants);
  const [pets, setPets] = React.useState(initialValues.pets);
  const [items, setItems] = React.useState(initialValues.items);
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [bookingAmount, setBookingAmount] = React.useState(
    initialValues.bookingAmount
  );
  const [
    bookingAmountIncludingServiceFee,
    setBookingAmountIncludingServiceFee,
  ] = React.useState(initialValues.bookingAmountIncludingServiceFee);
  const [serviceFee, setServiceFee] = React.useState(initialValues.serviceFee);
  const [couponCode, setCouponCode] = React.useState(initialValues.couponCode);
  const [couponDiscountAmount, setCouponDiscountAmount] = React.useState(
    initialValues.couponDiscountAmount
  );
  const [refunded, setRefunded] = React.useState(initialValues.refunded);
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderModelRecord
      ? { ...initialValues, ...orderModelRecord }
      : initialValues;
    setOwner(cleanValues.owner);
    setProductmodelID(cleanValues.productmodelID);
    setQuantity(cleanValues.quantity);
    setStatus(cleanValues.status);
    setConfirmed(cleanValues.confirmed);
    setDeclined(cleanValues.declined);
    setExpired(cleanValues.expired);
    setCompleted(cleanValues.completed);
    setCancelled(cleanValues.cancelled);
    setInstantBookEnabled(cleanValues.instantBookEnabled);
    setPeople(cleanValues.people);
    setGuests(cleanValues.guests);
    setAdults(cleanValues.adults);
    setChildren(cleanValues.children);
    setInfants(cleanValues.infants);
    setPets(cleanValues.pets);
    setItems(cleanValues.items);
    setStartDate(cleanValues.startDate);
    setEndDate(cleanValues.endDate);
    setBookingAmount(cleanValues.bookingAmount);
    setBookingAmountIncludingServiceFee(
      cleanValues.bookingAmountIncludingServiceFee
    );
    setServiceFee(cleanValues.serviceFee);
    setCouponCode(cleanValues.couponCode);
    setCouponDiscountAmount(cleanValues.couponDiscountAmount);
    setRefunded(cleanValues.refunded);
    setPaymentModels(cleanValues.paymentModels ?? []);
    setCurrentPaymentModelsValue("");
    setTransferModels(cleanValues.transferModels ?? []);
    setCurrentTransferModelsValue("");
    setRefundModels(cleanValues.refundModels ?? []);
    setCurrentRefundModelsValue("");
    setTransferReversalModels(cleanValues.transferReversalModels ?? []);
    setCurrentTransferReversalModelsValue("");
    setErrors({});
  };
  const [orderModelRecord, setOrderModelRecord] =
    React.useState(orderModelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getOrderModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrderModel
        : orderModelModelProp;
      setOrderModelRecord(record);
    };
    queryData();
  }, [idProp, orderModelModelProp]);
  React.useEffect(resetStateValues, [orderModelRecord]);
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
    owner: [{ type: "Required" }],
    productmodelID: [],
    quantity: [],
    status: [],
    confirmed: [],
    declined: [],
    expired: [],
    completed: [],
    cancelled: [],
    instantBookEnabled: [],
    people: [],
    guests: [],
    adults: [],
    children: [],
    infants: [],
    pets: [],
    items: [],
    startDate: [],
    endDate: [],
    bookingAmount: [],
    bookingAmountIncludingServiceFee: [],
    serviceFee: [],
    couponCode: [],
    couponDiscountAmount: [],
    refunded: [],
    paymentModels: [],
    transferModels: [],
    refundModels: [],
    transferReversalModels: [],
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
          owner,
          productmodelID: productmodelID ?? null,
          quantity: quantity ?? null,
          status: status ?? null,
          confirmed: confirmed ?? null,
          declined: declined ?? null,
          expired: expired ?? null,
          completed: completed ?? null,
          cancelled: cancelled ?? null,
          instantBookEnabled: instantBookEnabled ?? null,
          people: people ?? null,
          guests: guests ?? null,
          adults: adults ?? null,
          children: children ?? null,
          infants: infants ?? null,
          pets: pets ?? null,
          items: items ?? null,
          startDate: startDate ?? null,
          endDate: endDate ?? null,
          bookingAmount: bookingAmount ?? null,
          bookingAmountIncludingServiceFee:
            bookingAmountIncludingServiceFee ?? null,
          serviceFee: serviceFee ?? null,
          couponCode: couponCode ?? null,
          couponDiscountAmount: couponDiscountAmount ?? null,
          refunded: refunded ?? null,
          paymentModels: paymentModels ?? null,
          transferModels: transferModels ?? null,
          refundModels: refundModels ?? null,
          transferReversalModels: transferReversalModels ?? null,
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
            query: updateOrderModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: orderModelRecord.id,
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
      {...getOverrideProps(overrides, "OrderModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Owner"
        isRequired={true}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner: value,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <TextField
        label="Productmodel id"
        isRequired={false}
        isReadOnly={false}
        value={productmodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID: value,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
            };
            const result = onChange(modelFields);
            value = result?.productmodelID ?? value;
          }
          if (errors.productmodelID?.hasError) {
            runValidationTasks("productmodelID", value);
          }
          setProductmodelID(value);
        }}
        onBlur={() => runValidationTasks("productmodelID", productmodelID)}
        errorMessage={errors.productmodelID?.errorMessage}
        hasError={errors.productmodelID?.hasError}
        {...getOverrideProps(overrides, "productmodelID")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity: value,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status: value,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
      <SwitchField
        label="Confirmed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={confirmed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed: value,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
      <SwitchField
        label="Declined"
        defaultChecked={false}
        isDisabled={false}
        isChecked={declined}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined: value,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
      <SwitchField
        label="Expired"
        defaultChecked={false}
        isDisabled={false}
        isChecked={expired}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired: value,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
      <SwitchField
        label="Completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed: value,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
        label="Cancelled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={cancelled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled: value,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
      <SwitchField
        label="Instant book enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={instantBookEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled: value,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
        label="People"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={people}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people: value,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
            };
            const result = onChange(modelFields);
            value = result?.people ?? value;
          }
          if (errors.people?.hasError) {
            runValidationTasks("people", value);
          }
          setPeople(value);
        }}
        onBlur={() => runValidationTasks("people", people)}
        errorMessage={errors.people?.errorMessage}
        hasError={errors.people?.hasError}
        {...getOverrideProps(overrides, "people")}
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests: value,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults: value,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children: value,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants: value,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets: value,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
        label="Items"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={items}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items: value,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
            };
            const result = onChange(modelFields);
            value = result?.items ?? value;
          }
          if (errors.items?.hasError) {
            runValidationTasks("items", value);
          }
          setItems(value);
        }}
        onBlur={() => runValidationTasks("items", items)}
        errorMessage={errors.items?.errorMessage}
        hasError={errors.items?.hasError}
        {...getOverrideProps(overrides, "items")}
      ></TextField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={startDate && convertToLocal(new Date(startDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate: value,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={endDate && convertToLocal(new Date(endDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate: value,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
            };
            const result = onChange(modelFields);
            value = result?.endDate ?? value;
          }
          if (errors.endDate?.hasError) {
            runValidationTasks("endDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("endDate", endDate)}
        errorMessage={errors.endDate?.errorMessage}
        hasError={errors.endDate?.hasError}
        {...getOverrideProps(overrides, "endDate")}
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount: value,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee: value,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee: value,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
        label="Coupon code"
        isRequired={false}
        isReadOnly={false}
        value={couponCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode: value,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount: value,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
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
      <TextField
        label="Refunded"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={refunded}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded: value,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels,
            };
            const result = onChange(modelFields);
            value = result?.refunded ?? value;
          }
          if (errors.refunded?.hasError) {
            runValidationTasks("refunded", value);
          }
          setRefunded(value);
        }}
        onBlur={() => runValidationTasks("refunded", refunded)}
        errorMessage={errors.refunded?.errorMessage}
        hasError={errors.refunded?.hasError}
        {...getOverrideProps(overrides, "refunded")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels: values,
              transferModels,
              refundModels,
              transferReversalModels,
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels: values,
              refundModels,
              transferReversalModels,
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels: values,
              transferReversalModels,
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
              owner,
              productmodelID,
              quantity,
              status,
              confirmed,
              declined,
              expired,
              completed,
              cancelled,
              instantBookEnabled,
              people,
              guests,
              adults,
              children,
              infants,
              pets,
              items,
              startDate,
              endDate,
              bookingAmount,
              bookingAmountIncludingServiceFee,
              serviceFee,
              couponCode,
              couponDiscountAmount,
              refunded,
              paymentModels,
              transferModels,
              refundModels,
              transferReversalModels: values,
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
          isDisabled={!(idProp || orderModelModelProp)}
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
              !(idProp || orderModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
