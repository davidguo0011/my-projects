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
import { createListingUpdateSearchVerificationRequestModel } from "../graphql/mutations";
export default function ListingUpdateSearchVerificationRequestModelCreateForm(
  props
) {
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
    listingmodelID: "",
    completed: false,
    confirmed: false,
  };
  const [listingmodelID, setListingmodelID] = React.useState(
    initialValues.listingmodelID
  );
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [confirmed, setConfirmed] = React.useState(initialValues.confirmed);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setListingmodelID(initialValues.listingmodelID);
    setCompleted(initialValues.completed);
    setConfirmed(initialValues.confirmed);
    setErrors({});
  };
  const validations = {
    listingmodelID: [{ type: "Required" }],
    completed: [],
    confirmed: [],
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
          listingmodelID,
          completed,
          confirmed,
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
            query: createListingUpdateSearchVerificationRequestModel.replaceAll(
              "__typename",
              ""
            ),
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
      {...getOverrideProps(
        overrides,
        "ListingUpdateSearchVerificationRequestModelCreateForm"
      )}
      {...rest}
    >
      <TextField
        label="Listingmodel id"
        isRequired={true}
        isReadOnly={false}
        value={listingmodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              listingmodelID: value,
              completed,
              confirmed,
            };
            const result = onChange(modelFields);
            value = result?.listingmodelID ?? value;
          }
          if (errors.listingmodelID?.hasError) {
            runValidationTasks("listingmodelID", value);
          }
          setListingmodelID(value);
        }}
        onBlur={() => runValidationTasks("listingmodelID", listingmodelID)}
        errorMessage={errors.listingmodelID?.errorMessage}
        hasError={errors.listingmodelID?.hasError}
        {...getOverrideProps(overrides, "listingmodelID")}
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
              listingmodelID,
              completed: value,
              confirmed,
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
        label="Confirmed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={confirmed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              listingmodelID,
              completed,
              confirmed: value,
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
