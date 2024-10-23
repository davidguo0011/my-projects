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
import { createCoupon } from "../graphql/mutations";
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
export default function CouponCreateForm(props) {
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
    expireDate: "",
    beginDate: "",
    discountAmount: "",
    discountPercent: "",
    maxDiscountAmount: "",
    minAmount: "",
    couponCode: "",
    timesRedeemed: "",
    valid: false,
    exclusive: false,
    validUsers: [],
    invalidUsers: [],
    oneTimeUse: false,
  };
  const [expireDate, setExpireDate] = React.useState(initialValues.expireDate);
  const [beginDate, setBeginDate] = React.useState(initialValues.beginDate);
  const [discountAmount, setDiscountAmount] = React.useState(
    initialValues.discountAmount
  );
  const [discountPercent, setDiscountPercent] = React.useState(
    initialValues.discountPercent
  );
  const [maxDiscountAmount, setMaxDiscountAmount] = React.useState(
    initialValues.maxDiscountAmount
  );
  const [minAmount, setMinAmount] = React.useState(initialValues.minAmount);
  const [couponCode, setCouponCode] = React.useState(initialValues.couponCode);
  const [timesRedeemed, setTimesRedeemed] = React.useState(
    initialValues.timesRedeemed
  );
  const [valid, setValid] = React.useState(initialValues.valid);
  const [exclusive, setExclusive] = React.useState(initialValues.exclusive);
  const [validUsers, setValidUsers] = React.useState(initialValues.validUsers);
  const [invalidUsers, setInvalidUsers] = React.useState(
    initialValues.invalidUsers
  );
  const [oneTimeUse, setOneTimeUse] = React.useState(initialValues.oneTimeUse);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setExpireDate(initialValues.expireDate);
    setBeginDate(initialValues.beginDate);
    setDiscountAmount(initialValues.discountAmount);
    setDiscountPercent(initialValues.discountPercent);
    setMaxDiscountAmount(initialValues.maxDiscountAmount);
    setMinAmount(initialValues.minAmount);
    setCouponCode(initialValues.couponCode);
    setTimesRedeemed(initialValues.timesRedeemed);
    setValid(initialValues.valid);
    setExclusive(initialValues.exclusive);
    setValidUsers(initialValues.validUsers);
    setCurrentValidUsersValue("");
    setInvalidUsers(initialValues.invalidUsers);
    setCurrentInvalidUsersValue("");
    setOneTimeUse(initialValues.oneTimeUse);
    setErrors({});
  };
  const [currentValidUsersValue, setCurrentValidUsersValue] =
    React.useState("");
  const validUsersRef = React.createRef();
  const [currentInvalidUsersValue, setCurrentInvalidUsersValue] =
    React.useState("");
  const invalidUsersRef = React.createRef();
  const validations = {
    expireDate: [],
    beginDate: [],
    discountAmount: [],
    discountPercent: [],
    maxDiscountAmount: [],
    minAmount: [],
    couponCode: [{ type: "Required" }],
    timesRedeemed: [],
    valid: [],
    exclusive: [],
    validUsers: [],
    invalidUsers: [],
    oneTimeUse: [],
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
          expireDate,
          beginDate,
          discountAmount,
          discountPercent,
          maxDiscountAmount,
          minAmount,
          couponCode,
          timesRedeemed,
          valid,
          exclusive,
          validUsers,
          invalidUsers,
          oneTimeUse,
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
            query: createCoupon.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CouponCreateForm")}
      {...rest}
    >
      <TextField
        label="Expire date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={expireDate && convertToLocal(new Date(expireDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              expireDate: value,
              beginDate,
              discountAmount,
              discountPercent,
              maxDiscountAmount,
              minAmount,
              couponCode,
              timesRedeemed,
              valid,
              exclusive,
              validUsers,
              invalidUsers,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            value = result?.expireDate ?? value;
          }
          if (errors.expireDate?.hasError) {
            runValidationTasks("expireDate", value);
          }
          setExpireDate(value);
        }}
        onBlur={() => runValidationTasks("expireDate", expireDate)}
        errorMessage={errors.expireDate?.errorMessage}
        hasError={errors.expireDate?.hasError}
        {...getOverrideProps(overrides, "expireDate")}
      ></TextField>
      <TextField
        label="Begin date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={beginDate && convertToLocal(new Date(beginDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate: value,
              discountAmount,
              discountPercent,
              maxDiscountAmount,
              minAmount,
              couponCode,
              timesRedeemed,
              valid,
              exclusive,
              validUsers,
              invalidUsers,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            value = result?.beginDate ?? value;
          }
          if (errors.beginDate?.hasError) {
            runValidationTasks("beginDate", value);
          }
          setBeginDate(value);
        }}
        onBlur={() => runValidationTasks("beginDate", beginDate)}
        errorMessage={errors.beginDate?.errorMessage}
        hasError={errors.beginDate?.hasError}
        {...getOverrideProps(overrides, "beginDate")}
      ></TextField>
      <TextField
        label="Discount amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={discountAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount: value,
              discountPercent,
              maxDiscountAmount,
              minAmount,
              couponCode,
              timesRedeemed,
              valid,
              exclusive,
              validUsers,
              invalidUsers,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            value = result?.discountAmount ?? value;
          }
          if (errors.discountAmount?.hasError) {
            runValidationTasks("discountAmount", value);
          }
          setDiscountAmount(value);
        }}
        onBlur={() => runValidationTasks("discountAmount", discountAmount)}
        errorMessage={errors.discountAmount?.errorMessage}
        hasError={errors.discountAmount?.hasError}
        {...getOverrideProps(overrides, "discountAmount")}
      ></TextField>
      <TextField
        label="Discount percent"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={discountPercent}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount,
              discountPercent: value,
              maxDiscountAmount,
              minAmount,
              couponCode,
              timesRedeemed,
              valid,
              exclusive,
              validUsers,
              invalidUsers,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            value = result?.discountPercent ?? value;
          }
          if (errors.discountPercent?.hasError) {
            runValidationTasks("discountPercent", value);
          }
          setDiscountPercent(value);
        }}
        onBlur={() => runValidationTasks("discountPercent", discountPercent)}
        errorMessage={errors.discountPercent?.errorMessage}
        hasError={errors.discountPercent?.hasError}
        {...getOverrideProps(overrides, "discountPercent")}
      ></TextField>
      <TextField
        label="Max discount amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxDiscountAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount,
              discountPercent,
              maxDiscountAmount: value,
              minAmount,
              couponCode,
              timesRedeemed,
              valid,
              exclusive,
              validUsers,
              invalidUsers,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            value = result?.maxDiscountAmount ?? value;
          }
          if (errors.maxDiscountAmount?.hasError) {
            runValidationTasks("maxDiscountAmount", value);
          }
          setMaxDiscountAmount(value);
        }}
        onBlur={() =>
          runValidationTasks("maxDiscountAmount", maxDiscountAmount)
        }
        errorMessage={errors.maxDiscountAmount?.errorMessage}
        hasError={errors.maxDiscountAmount?.hasError}
        {...getOverrideProps(overrides, "maxDiscountAmount")}
      ></TextField>
      <TextField
        label="Min amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount,
              discountPercent,
              maxDiscountAmount,
              minAmount: value,
              couponCode,
              timesRedeemed,
              valid,
              exclusive,
              validUsers,
              invalidUsers,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            value = result?.minAmount ?? value;
          }
          if (errors.minAmount?.hasError) {
            runValidationTasks("minAmount", value);
          }
          setMinAmount(value);
        }}
        onBlur={() => runValidationTasks("minAmount", minAmount)}
        errorMessage={errors.minAmount?.errorMessage}
        hasError={errors.minAmount?.hasError}
        {...getOverrideProps(overrides, "minAmount")}
      ></TextField>
      <TextField
        label="Coupon code"
        isRequired={true}
        isReadOnly={false}
        value={couponCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount,
              discountPercent,
              maxDiscountAmount,
              minAmount,
              couponCode: value,
              timesRedeemed,
              valid,
              exclusive,
              validUsers,
              invalidUsers,
              oneTimeUse,
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
        label="Times redeemed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={timesRedeemed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount,
              discountPercent,
              maxDiscountAmount,
              minAmount,
              couponCode,
              timesRedeemed: value,
              valid,
              exclusive,
              validUsers,
              invalidUsers,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            value = result?.timesRedeemed ?? value;
          }
          if (errors.timesRedeemed?.hasError) {
            runValidationTasks("timesRedeemed", value);
          }
          setTimesRedeemed(value);
        }}
        onBlur={() => runValidationTasks("timesRedeemed", timesRedeemed)}
        errorMessage={errors.timesRedeemed?.errorMessage}
        hasError={errors.timesRedeemed?.hasError}
        {...getOverrideProps(overrides, "timesRedeemed")}
      ></TextField>
      <SwitchField
        label="Valid"
        defaultChecked={false}
        isDisabled={false}
        isChecked={valid}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount,
              discountPercent,
              maxDiscountAmount,
              minAmount,
              couponCode,
              timesRedeemed,
              valid: value,
              exclusive,
              validUsers,
              invalidUsers,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            value = result?.valid ?? value;
          }
          if (errors.valid?.hasError) {
            runValidationTasks("valid", value);
          }
          setValid(value);
        }}
        onBlur={() => runValidationTasks("valid", valid)}
        errorMessage={errors.valid?.errorMessage}
        hasError={errors.valid?.hasError}
        {...getOverrideProps(overrides, "valid")}
      ></SwitchField>
      <SwitchField
        label="Exclusive"
        defaultChecked={false}
        isDisabled={false}
        isChecked={exclusive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount,
              discountPercent,
              maxDiscountAmount,
              minAmount,
              couponCode,
              timesRedeemed,
              valid,
              exclusive: value,
              validUsers,
              invalidUsers,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            value = result?.exclusive ?? value;
          }
          if (errors.exclusive?.hasError) {
            runValidationTasks("exclusive", value);
          }
          setExclusive(value);
        }}
        onBlur={() => runValidationTasks("exclusive", exclusive)}
        errorMessage={errors.exclusive?.errorMessage}
        hasError={errors.exclusive?.hasError}
        {...getOverrideProps(overrides, "exclusive")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount,
              discountPercent,
              maxDiscountAmount,
              minAmount,
              couponCode,
              timesRedeemed,
              valid,
              exclusive,
              validUsers: values,
              invalidUsers,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            values = result?.validUsers ?? values;
          }
          setValidUsers(values);
          setCurrentValidUsersValue("");
        }}
        currentFieldValue={currentValidUsersValue}
        label={"Valid users"}
        items={validUsers}
        hasError={errors?.validUsers?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("validUsers", currentValidUsersValue)
        }
        errorMessage={errors?.validUsers?.errorMessage}
        setFieldValue={setCurrentValidUsersValue}
        inputFieldRef={validUsersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Valid users"
          isRequired={false}
          isReadOnly={false}
          value={currentValidUsersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.validUsers?.hasError) {
              runValidationTasks("validUsers", value);
            }
            setCurrentValidUsersValue(value);
          }}
          onBlur={() =>
            runValidationTasks("validUsers", currentValidUsersValue)
          }
          errorMessage={errors.validUsers?.errorMessage}
          hasError={errors.validUsers?.hasError}
          ref={validUsersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "validUsers")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount,
              discountPercent,
              maxDiscountAmount,
              minAmount,
              couponCode,
              timesRedeemed,
              valid,
              exclusive,
              validUsers,
              invalidUsers: values,
              oneTimeUse,
            };
            const result = onChange(modelFields);
            values = result?.invalidUsers ?? values;
          }
          setInvalidUsers(values);
          setCurrentInvalidUsersValue("");
        }}
        currentFieldValue={currentInvalidUsersValue}
        label={"Invalid users"}
        items={invalidUsers}
        hasError={errors?.invalidUsers?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("invalidUsers", currentInvalidUsersValue)
        }
        errorMessage={errors?.invalidUsers?.errorMessage}
        setFieldValue={setCurrentInvalidUsersValue}
        inputFieldRef={invalidUsersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Invalid users"
          isRequired={false}
          isReadOnly={false}
          value={currentInvalidUsersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.invalidUsers?.hasError) {
              runValidationTasks("invalidUsers", value);
            }
            setCurrentInvalidUsersValue(value);
          }}
          onBlur={() =>
            runValidationTasks("invalidUsers", currentInvalidUsersValue)
          }
          errorMessage={errors.invalidUsers?.errorMessage}
          hasError={errors.invalidUsers?.hasError}
          ref={invalidUsersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "invalidUsers")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="One time use"
        defaultChecked={false}
        isDisabled={false}
        isChecked={oneTimeUse}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              expireDate,
              beginDate,
              discountAmount,
              discountPercent,
              maxDiscountAmount,
              minAmount,
              couponCode,
              timesRedeemed,
              valid,
              exclusive,
              validUsers,
              invalidUsers,
              oneTimeUse: value,
            };
            const result = onChange(modelFields);
            value = result?.oneTimeUse ?? value;
          }
          if (errors.oneTimeUse?.hasError) {
            runValidationTasks("oneTimeUse", value);
          }
          setOneTimeUse(value);
        }}
        onBlur={() => runValidationTasks("oneTimeUse", oneTimeUse)}
        errorMessage={errors.oneTimeUse?.errorMessage}
        hasError={errors.oneTimeUse?.hasError}
        {...getOverrideProps(overrides, "oneTimeUse")}
      ></SwitchField>
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
