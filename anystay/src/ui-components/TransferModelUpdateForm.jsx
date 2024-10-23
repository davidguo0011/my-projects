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
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { TransferModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TransferModelUpdateForm(props) {
  const {
    id: idProp,
    transferModel: transferModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    transferStatus: "",
    transferAmount: "",
    transferDate: "",
    transferInitiatedAt: "",
    transferID: "",
    completed: false,
    hostusermodelID: "",
    hoststripeaccountID: "",
  };
  const [transferStatus, setTransferStatus] = React.useState(
    initialValues.transferStatus
  );
  const [transferAmount, setTransferAmount] = React.useState(
    initialValues.transferAmount
  );
  const [transferDate, setTransferDate] = React.useState(
    initialValues.transferDate
  );
  const [transferInitiatedAt, setTransferInitiatedAt] = React.useState(
    initialValues.transferInitiatedAt
  );
  const [transferID, setTransferID] = React.useState(initialValues.transferID);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [hostusermodelID, setHostusermodelID] = React.useState(
    initialValues.hostusermodelID
  );
  const [hoststripeaccountID, setHoststripeaccountID] = React.useState(
    initialValues.hoststripeaccountID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = transferModelRecord
      ? { ...initialValues, ...transferModelRecord }
      : initialValues;
    setTransferStatus(cleanValues.transferStatus);
    setTransferAmount(cleanValues.transferAmount);
    setTransferDate(cleanValues.transferDate);
    setTransferInitiatedAt(cleanValues.transferInitiatedAt);
    setTransferID(cleanValues.transferID);
    setCompleted(cleanValues.completed);
    setHostusermodelID(cleanValues.hostusermodelID);
    setHoststripeaccountID(cleanValues.hoststripeaccountID);
    setErrors({});
  };
  const [transferModelRecord, setTransferModelRecord] = React.useState(
    transferModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(TransferModel, idProp)
        : transferModelModelProp;
      setTransferModelRecord(record);
    };
    queryData();
  }, [idProp, transferModelModelProp]);
  React.useEffect(resetStateValues, [transferModelRecord]);
  const validations = {
    transferStatus: [],
    transferAmount: [],
    transferDate: [],
    transferInitiatedAt: [],
    transferID: [],
    completed: [],
    hostusermodelID: [],
    hoststripeaccountID: [],
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
          transferStatus,
          transferAmount,
          transferDate,
          transferInitiatedAt,
          transferID,
          completed,
          hostusermodelID,
          hoststripeaccountID,
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
          await DataStore.save(
            TransferModel.copyOf(transferModelRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TransferModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Transfer status"
        isRequired={false}
        isReadOnly={false}
        value={transferStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              transferStatus: value,
              transferAmount,
              transferDate,
              transferInitiatedAt,
              transferID,
              completed,
              hostusermodelID,
              hoststripeaccountID,
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
        label="Transfer amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={transferAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              transferStatus,
              transferAmount: value,
              transferDate,
              transferInitiatedAt,
              transferID,
              completed,
              hostusermodelID,
              hoststripeaccountID,
            };
            const result = onChange(modelFields);
            value = result?.transferAmount ?? value;
          }
          if (errors.transferAmount?.hasError) {
            runValidationTasks("transferAmount", value);
          }
          setTransferAmount(value);
        }}
        onBlur={() => runValidationTasks("transferAmount", transferAmount)}
        errorMessage={errors.transferAmount?.errorMessage}
        hasError={errors.transferAmount?.hasError}
        {...getOverrideProps(overrides, "transferAmount")}
      ></TextField>
      <TextField
        label="Transfer date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={transferDate && convertToLocal(new Date(transferDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              transferStatus,
              transferAmount,
              transferDate: value,
              transferInitiatedAt,
              transferID,
              completed,
              hostusermodelID,
              hoststripeaccountID,
            };
            const result = onChange(modelFields);
            value = result?.transferDate ?? value;
          }
          if (errors.transferDate?.hasError) {
            runValidationTasks("transferDate", value);
          }
          setTransferDate(value);
        }}
        onBlur={() => runValidationTasks("transferDate", transferDate)}
        errorMessage={errors.transferDate?.errorMessage}
        hasError={errors.transferDate?.hasError}
        {...getOverrideProps(overrides, "transferDate")}
      ></TextField>
      <TextField
        label="Transfer initiated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          transferInitiatedAt && convertToLocal(new Date(transferInitiatedAt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              transferStatus,
              transferAmount,
              transferDate,
              transferInitiatedAt: value,
              transferID,
              completed,
              hostusermodelID,
              hoststripeaccountID,
            };
            const result = onChange(modelFields);
            value = result?.transferInitiatedAt ?? value;
          }
          if (errors.transferInitiatedAt?.hasError) {
            runValidationTasks("transferInitiatedAt", value);
          }
          setTransferInitiatedAt(value);
        }}
        onBlur={() =>
          runValidationTasks("transferInitiatedAt", transferInitiatedAt)
        }
        errorMessage={errors.transferInitiatedAt?.errorMessage}
        hasError={errors.transferInitiatedAt?.hasError}
        {...getOverrideProps(overrides, "transferInitiatedAt")}
      ></TextField>
      <TextField
        label="Transfer id"
        isRequired={false}
        isReadOnly={false}
        value={transferID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              transferStatus,
              transferAmount,
              transferDate,
              transferInitiatedAt,
              transferID: value,
              completed,
              hostusermodelID,
              hoststripeaccountID,
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
      <SwitchField
        label="Completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              transferStatus,
              transferAmount,
              transferDate,
              transferInitiatedAt,
              transferID,
              completed: value,
              hostusermodelID,
              hoststripeaccountID,
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
        label="Hostusermodel id"
        isRequired={false}
        isReadOnly={false}
        value={hostusermodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              transferStatus,
              transferAmount,
              transferDate,
              transferInitiatedAt,
              transferID,
              completed,
              hostusermodelID: value,
              hoststripeaccountID,
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
        label="Hoststripeaccount id"
        isRequired={false}
        isReadOnly={false}
        value={hoststripeaccountID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              transferStatus,
              transferAmount,
              transferDate,
              transferInitiatedAt,
              transferID,
              completed,
              hostusermodelID,
              hoststripeaccountID: value,
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
          isDisabled={!(idProp || transferModelModelProp)}
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
              !(idProp || transferModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
