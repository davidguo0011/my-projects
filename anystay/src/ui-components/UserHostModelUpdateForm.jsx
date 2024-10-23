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
import { UserHostModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserHostModelUpdateForm(props) {
  const {
    id: idProp,
    userHostModel: userHostModelModelProp,
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
    stripeAccountID: "",
    stripeAccountVerified: false,
    standardServiceFee: false,
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [stripeAccountID, setStripeAccountID] = React.useState(
    initialValues.stripeAccountID
  );
  const [stripeAccountVerified, setStripeAccountVerified] = React.useState(
    initialValues.stripeAccountVerified
  );
  const [standardServiceFee, setStandardServiceFee] = React.useState(
    initialValues.standardServiceFee
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userHostModelRecord
      ? { ...initialValues, ...userHostModelRecord }
      : initialValues;
    setOwner(cleanValues.owner);
    setStripeAccountID(cleanValues.stripeAccountID);
    setStripeAccountVerified(cleanValues.stripeAccountVerified);
    setStandardServiceFee(cleanValues.standardServiceFee);
    setErrors({});
  };
  const [userHostModelRecord, setUserHostModelRecord] = React.useState(
    userHostModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UserHostModel, idProp)
        : userHostModelModelProp;
      setUserHostModelRecord(record);
    };
    queryData();
  }, [idProp, userHostModelModelProp]);
  React.useEffect(resetStateValues, [userHostModelRecord]);
  const validations = {
    owner: [{ type: "Required" }],
    stripeAccountID: [],
    stripeAccountVerified: [],
    standardServiceFee: [],
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
          owner,
          stripeAccountID,
          stripeAccountVerified,
          standardServiceFee,
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
            UserHostModel.copyOf(userHostModelRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserHostModelUpdateForm")}
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
              stripeAccountID,
              stripeAccountVerified,
              standardServiceFee,
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
        label="Stripe account id"
        isRequired={false}
        isReadOnly={false}
        value={stripeAccountID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              stripeAccountID: value,
              stripeAccountVerified,
              standardServiceFee,
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
      <SwitchField
        label="Stripe account verified"
        defaultChecked={false}
        isDisabled={false}
        isChecked={stripeAccountVerified}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              stripeAccountID,
              stripeAccountVerified: value,
              standardServiceFee,
            };
            const result = onChange(modelFields);
            value = result?.stripeAccountVerified ?? value;
          }
          if (errors.stripeAccountVerified?.hasError) {
            runValidationTasks("stripeAccountVerified", value);
          }
          setStripeAccountVerified(value);
        }}
        onBlur={() =>
          runValidationTasks("stripeAccountVerified", stripeAccountVerified)
        }
        errorMessage={errors.stripeAccountVerified?.errorMessage}
        hasError={errors.stripeAccountVerified?.hasError}
        {...getOverrideProps(overrides, "stripeAccountVerified")}
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
              owner,
              stripeAccountID,
              stripeAccountVerified,
              standardServiceFee: value,
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
          isDisabled={!(idProp || userHostModelModelProp)}
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
              !(idProp || userHostModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
