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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PaymentModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
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
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PaymentModelCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    transferID: "",
    transferStatus: "",
    paymentIntentID: "",
    paymentMethodID: "",
    paymentStatus: "",
    paymentAmount: "",
    couponDiscountAmount: "",
    couponCode: "",
    serviceFee: "",
    cleaningFee: "",
    extraGuestFeePerNight: "",
    nights: "",
    refundedAmount: "",
    hostusermodelID: "",
    guestusermodelID: "",
    hoststripeaccountID: "",
    paymentCreatedAt: "",
    charges: [],
  };
  const [owners, setOwners] = React.useState(initialValues.owners);
  const [transferID, setTransferID] = React.useState(initialValues.transferID);
  const [transferStatus, setTransferStatus] = React.useState(
    initialValues.transferStatus
  );
  const [paymentIntentID, setPaymentIntentID] = React.useState(
    initialValues.paymentIntentID
  );
  const [paymentMethodID, setPaymentMethodID] = React.useState(
    initialValues.paymentMethodID
  );
  const [paymentStatus, setPaymentStatus] = React.useState(
    initialValues.paymentStatus
  );
  const [paymentAmount, setPaymentAmount] = React.useState(
    initialValues.paymentAmount
  );
  const [couponDiscountAmount, setCouponDiscountAmount] = React.useState(
    initialValues.couponDiscountAmount
  );
  const [couponCode, setCouponCode] = React.useState(initialValues.couponCode);
  const [serviceFee, setServiceFee] = React.useState(initialValues.serviceFee);
  const [cleaningFee, setCleaningFee] = React.useState(
    initialValues.cleaningFee
  );
  const [extraGuestFeePerNight, setExtraGuestFeePerNight] = React.useState(
    initialValues.extraGuestFeePerNight
  );
  const [nights, setNights] = React.useState(initialValues.nights);
  const [refundedAmount, setRefundedAmount] = React.useState(
    initialValues.refundedAmount
  );
  const [hostusermodelID, setHostusermodelID] = React.useState(
    initialValues.hostusermodelID
  );
  const [guestusermodelID, setGuestusermodelID] = React.useState(
    initialValues.guestusermodelID
  );
  const [hoststripeaccountID, setHoststripeaccountID] = React.useState(
    initialValues.hoststripeaccountID
  );
  const [paymentCreatedAt, setPaymentCreatedAt] = React.useState(
    initialValues.paymentCreatedAt
  );
  const [charges, setCharges] = React.useState(initialValues.charges);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOwners(initialValues.owners);
    setCurrentOwnersValue("");
    setTransferID(initialValues.transferID);
    setTransferStatus(initialValues.transferStatus);
    setPaymentIntentID(initialValues.paymentIntentID);
    setPaymentMethodID(initialValues.paymentMethodID);
    setPaymentStatus(initialValues.paymentStatus);
    setPaymentAmount(initialValues.paymentAmount);
    setCouponDiscountAmount(initialValues.couponDiscountAmount);
    setCouponCode(initialValues.couponCode);
    setServiceFee(initialValues.serviceFee);
    setCleaningFee(initialValues.cleaningFee);
    setExtraGuestFeePerNight(initialValues.extraGuestFeePerNight);
    setNights(initialValues.nights);
    setRefundedAmount(initialValues.refundedAmount);
    setHostusermodelID(initialValues.hostusermodelID);
    setGuestusermodelID(initialValues.guestusermodelID);
    setHoststripeaccountID(initialValues.hoststripeaccountID);
    setPaymentCreatedAt(initialValues.paymentCreatedAt);
    setCharges(initialValues.charges);
    setCurrentChargesValue("");
    setErrors({});
  };
  const [currentOwnersValue, setCurrentOwnersValue] = React.useState("");
  const ownersRef = React.createRef();
  const [currentChargesValue, setCurrentChargesValue] = React.useState("");
  const chargesRef = React.createRef();
  const validations = {
    owners: [],
    transferID: [],
    transferStatus: [],
    paymentIntentID: [],
    paymentMethodID: [],
    paymentStatus: [],
    paymentAmount: [],
    couponDiscountAmount: [],
    couponCode: [],
    serviceFee: [],
    cleaningFee: [],
    extraGuestFeePerNight: [],
    nights: [],
    refundedAmount: [],
    hostusermodelID: [],
    guestusermodelID: [],
    hoststripeaccountID: [],
    paymentCreatedAt: [],
    charges: [],
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
          transferID,
          transferStatus,
          paymentIntentID,
          paymentMethodID,
          paymentStatus,
          paymentAmount,
          couponDiscountAmount,
          couponCode,
          serviceFee,
          cleaningFee,
          extraGuestFeePerNight,
          nights,
          refundedAmount,
          hostusermodelID,
          guestusermodelID,
          hoststripeaccountID,
          paymentCreatedAt,
          charges,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new PaymentModel(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PaymentModelCreateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owners: values,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
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
        errorMessage={errors?.owners?.errorMessage}
        setFieldValue={setCurrentOwnersValue}
        inputFieldRef={ownersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Owners"
          isRequired={false}
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
        label="Transfer id"
        isRequired={false}
        isReadOnly={false}
        value={transferID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              transferID: value,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.transferID ?? value;
          }
          if (errors.transferID?.hasError) {
            runValidationTasks("transferID", value);
          }
          setTransferID(value);
        }}
        onBlur={() => runValidationTasks("transferID", transferID)}
        errorMessage={errors.transferID?.errorMessage}
        hasError={errors.transferID?.hasError}
        {...getOverrideProps(overrides, "transferID")}
      ></TextField>
      <TextField
        label="Transfer status"
        isRequired={false}
        isReadOnly={false}
        value={transferStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus: value,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.transferStatus ?? value;
          }
          if (errors.transferStatus?.hasError) {
            runValidationTasks("transferStatus", value);
          }
          setTransferStatus(value);
        }}
        onBlur={() => runValidationTasks("transferStatus", transferStatus)}
        errorMessage={errors.transferStatus?.errorMessage}
        hasError={errors.transferStatus?.hasError}
        {...getOverrideProps(overrides, "transferStatus")}
      ></TextField>
      <TextField
        label="Payment intent id"
        isRequired={false}
        isReadOnly={false}
        value={paymentIntentID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID: value,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.paymentIntentID ?? value;
          }
          if (errors.paymentIntentID?.hasError) {
            runValidationTasks("paymentIntentID", value);
          }
          setPaymentIntentID(value);
        }}
        onBlur={() => runValidationTasks("paymentIntentID", paymentIntentID)}
        errorMessage={errors.paymentIntentID?.errorMessage}
        hasError={errors.paymentIntentID?.hasError}
        {...getOverrideProps(overrides, "paymentIntentID")}
      ></TextField>
      <TextField
        label="Payment method id"
        isRequired={false}
        isReadOnly={false}
        value={paymentMethodID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID: value,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.paymentMethodID ?? value;
          }
          if (errors.paymentMethodID?.hasError) {
            runValidationTasks("paymentMethodID", value);
          }
          setPaymentMethodID(value);
        }}
        onBlur={() => runValidationTasks("paymentMethodID", paymentMethodID)}
        errorMessage={errors.paymentMethodID?.errorMessage}
        hasError={errors.paymentMethodID?.hasError}
        {...getOverrideProps(overrides, "paymentMethodID")}
      ></TextField>
      <TextField
        label="Payment status"
        isRequired={false}
        isReadOnly={false}
        value={paymentStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus: value,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.paymentStatus ?? value;
          }
          if (errors.paymentStatus?.hasError) {
            runValidationTasks("paymentStatus", value);
          }
          setPaymentStatus(value);
        }}
        onBlur={() => runValidationTasks("paymentStatus", paymentStatus)}
        errorMessage={errors.paymentStatus?.errorMessage}
        hasError={errors.paymentStatus?.hasError}
        {...getOverrideProps(overrides, "paymentStatus")}
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
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount: value,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
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
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount: value,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
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
        label="Coupon code"
        isRequired={false}
        isReadOnly={false}
        value={couponCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode: value,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
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
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee: value,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
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
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee: value,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
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
        label="Extra guest fee per night"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={extraGuestFeePerNight}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight: value,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.extraGuestFeePerNight ?? value;
          }
          if (errors.extraGuestFeePerNight?.hasError) {
            runValidationTasks("extraGuestFeePerNight", value);
          }
          setExtraGuestFeePerNight(value);
        }}
        onBlur={() =>
          runValidationTasks("extraGuestFeePerNight", extraGuestFeePerNight)
        }
        errorMessage={errors.extraGuestFeePerNight?.errorMessage}
        hasError={errors.extraGuestFeePerNight?.hasError}
        {...getOverrideProps(overrides, "extraGuestFeePerNight")}
      ></TextField>
      <TextField
        label="Nights"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={nights}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights: value,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.nights ?? value;
          }
          if (errors.nights?.hasError) {
            runValidationTasks("nights", value);
          }
          setNights(value);
        }}
        onBlur={() => runValidationTasks("nights", nights)}
        errorMessage={errors.nights?.errorMessage}
        hasError={errors.nights?.hasError}
        {...getOverrideProps(overrides, "nights")}
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
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount: value,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
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
      <TextField
        label="Hostusermodel id"
        isRequired={false}
        isReadOnly={false}
        value={hostusermodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID: value,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.hostusermodelID ?? value;
          }
          if (errors.hostusermodelID?.hasError) {
            runValidationTasks("hostusermodelID", value);
          }
          setHostusermodelID(value);
        }}
        onBlur={() => runValidationTasks("hostusermodelID", hostusermodelID)}
        errorMessage={errors.hostusermodelID?.errorMessage}
        hasError={errors.hostusermodelID?.hasError}
        {...getOverrideProps(overrides, "hostusermodelID")}
      ></TextField>
      <TextField
        label="Guestusermodel id"
        isRequired={false}
        isReadOnly={false}
        value={guestusermodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID: value,
              hoststripeaccountID,
              paymentCreatedAt,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.guestusermodelID ?? value;
          }
          if (errors.guestusermodelID?.hasError) {
            runValidationTasks("guestusermodelID", value);
          }
          setGuestusermodelID(value);
        }}
        onBlur={() => runValidationTasks("guestusermodelID", guestusermodelID)}
        errorMessage={errors.guestusermodelID?.errorMessage}
        hasError={errors.guestusermodelID?.hasError}
        {...getOverrideProps(overrides, "guestusermodelID")}
      ></TextField>
      <TextField
        label="Hoststripeaccount id"
        isRequired={false}
        isReadOnly={false}
        value={hoststripeaccountID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID: value,
              paymentCreatedAt,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.hoststripeaccountID ?? value;
          }
          if (errors.hoststripeaccountID?.hasError) {
            runValidationTasks("hoststripeaccountID", value);
          }
          setHoststripeaccountID(value);
        }}
        onBlur={() =>
          runValidationTasks("hoststripeaccountID", hoststripeaccountID)
        }
        errorMessage={errors.hoststripeaccountID?.errorMessage}
        hasError={errors.hoststripeaccountID?.hasError}
        {...getOverrideProps(overrides, "hoststripeaccountID")}
      ></TextField>
      <TextField
        label="Payment created at"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={paymentCreatedAt}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt: value,
              charges,
            };
            const result = onChange(modelFields);
            value = result?.paymentCreatedAt ?? value;
          }
          if (errors.paymentCreatedAt?.hasError) {
            runValidationTasks("paymentCreatedAt", value);
          }
          setPaymentCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("paymentCreatedAt", paymentCreatedAt)}
        errorMessage={errors.paymentCreatedAt?.errorMessage}
        hasError={errors.paymentCreatedAt?.hasError}
        {...getOverrideProps(overrides, "paymentCreatedAt")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owners,
              transferID,
              transferStatus,
              paymentIntentID,
              paymentMethodID,
              paymentStatus,
              paymentAmount,
              couponDiscountAmount,
              couponCode,
              serviceFee,
              cleaningFee,
              extraGuestFeePerNight,
              nights,
              refundedAmount,
              hostusermodelID,
              guestusermodelID,
              hoststripeaccountID,
              paymentCreatedAt,
              charges: values,
            };
            const result = onChange(modelFields);
            values = result?.charges ?? values;
          }
          setCharges(values);
          setCurrentChargesValue("");
        }}
        currentFieldValue={currentChargesValue}
        label={"Charges"}
        items={charges}
        hasError={errors?.charges?.hasError}
        errorMessage={errors?.charges?.errorMessage}
        setFieldValue={setCurrentChargesValue}
        inputFieldRef={chargesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Charges"
          isRequired={false}
          isReadOnly={false}
          value={currentChargesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.charges?.hasError) {
              runValidationTasks("charges", value);
            }
            setCurrentChargesValue(value);
          }}
          onBlur={() => runValidationTasks("charges", currentChargesValue)}
          errorMessage={errors.charges?.errorMessage}
          hasError={errors.charges?.hasError}
          ref={chargesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "charges")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
