/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createRefundRequestModel } from "../graphql/mutations";
export default function RefundRequestModelCreateForm(props) {
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
    confirmed: false,
    declined: false,
    expired: false,
    completed: false,
    refundAmount: "",
    refundReason: "",
    refundMessage: "",
    status: "",
  };
  const [confirmed, setConfirmed] = React.useState(initialValues.confirmed);
  const [declined, setDeclined] = React.useState(initialValues.declined);
  const [expired, setExpired] = React.useState(initialValues.expired);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [refundAmount, setRefundAmount] = React.useState(
    initialValues.refundAmount
  );
  const [refundReason, setRefundReason] = React.useState(
    initialValues.refundReason
  );
  const [refundMessage, setRefundMessage] = React.useState(
    initialValues.refundMessage
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setConfirmed(initialValues.confirmed);
    setDeclined(initialValues.declined);
    setExpired(initialValues.expired);
    setCompleted(initialValues.completed);
    setRefundAmount(initialValues.refundAmount);
    setRefundReason(initialValues.refundReason);
    setRefundMessage(initialValues.refundMessage);
    setStatus(initialValues.status);
    setErrors({});
  };
  const validations = {
    confirmed: [],
    declined: [],
    expired: [],
    completed: [],
    refundAmount: [],
    refundReason: [],
    refundMessage: [],
    status: [],
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
          confirmed,
          declined,
          expired,
          completed,
          refundAmount,
          refundReason,
          refundMessage,
          status,
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
            query: createRefundRequestModel.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "RefundRequestModelCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Confirmed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={confirmed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              confirmed: value,
              declined,
              expired,
              completed,
              refundAmount,
              refundReason,
              refundMessage,
              status,
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
              confirmed,
              declined: value,
              expired,
              completed,
              refundAmount,
              refundReason,
              refundMessage,
              status,
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
              confirmed,
              declined,
              expired: value,
              completed,
              refundAmount,
              refundReason,
              refundMessage,
              status,
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
              confirmed,
              declined,
              expired,
              completed: value,
              refundAmount,
              refundReason,
              refundMessage,
              status,
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
      <TextField
        label="Refund amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={refundAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              confirmed,
              declined,
              expired,
              completed,
              refundAmount: value,
              refundReason,
              refundMessage,
              status,
            };
            const result = onChange(modelFields);
            value = result?.refundAmount ?? value;
          }
          if (errors.refundAmount?.hasError) {
            runValidationTasks("refundAmount", value);
          }
          setRefundAmount(value);
        }}
        onBlur={() => runValidationTasks("refundAmount", refundAmount)}
        errorMessage={errors.refundAmount?.errorMessage}
        hasError={errors.refundAmount?.hasError}
        {...getOverrideProps(overrides, "refundAmount")}
      ></TextField>
      <TextField
        label="Refund reason"
        isRequired={false}
        isReadOnly={false}
        value={refundReason}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              confirmed,
              declined,
              expired,
              completed,
              refundAmount,
              refundReason: value,
              refundMessage,
              status,
            };
            const result = onChange(modelFields);
            value = result?.refundReason ?? value;
          }
          if (errors.refundReason?.hasError) {
            runValidationTasks("refundReason", value);
          }
          setRefundReason(value);
        }}
        onBlur={() => runValidationTasks("refundReason", refundReason)}
        errorMessage={errors.refundReason?.errorMessage}
        hasError={errors.refundReason?.hasError}
        {...getOverrideProps(overrides, "refundReason")}
      ></TextField>
      <TextField
        label="Refund message"
        isRequired={false}
        isReadOnly={false}
        value={refundMessage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              confirmed,
              declined,
              expired,
              completed,
              refundAmount,
              refundReason,
              refundMessage: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.refundMessage ?? value;
          }
          if (errors.refundMessage?.hasError) {
            runValidationTasks("refundMessage", value);
          }
          setRefundMessage(value);
        }}
        onBlur={() => runValidationTasks("refundMessage", refundMessage)}
        errorMessage={errors.refundMessage?.errorMessage}
        hasError={errors.refundMessage?.hasError}
        {...getOverrideProps(overrides, "refundMessage")}
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
              confirmed,
              declined,
              expired,
              completed,
              refundAmount,
              refundReason,
              refundMessage,
              status: value,
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
