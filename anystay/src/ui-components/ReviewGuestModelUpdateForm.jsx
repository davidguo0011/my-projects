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
import { getReviewGuestModel } from "../graphql/queries";
import { updateReviewGuestModel } from "../graphql/mutations";
export default function ReviewGuestModelUpdateForm(props) {
  const {
    id: idProp,
    reviewGuestModel: reviewGuestModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    bookingRequestID: "",
    overall: "",
    communication: "",
    cleanliness: "",
    body: "",
    completed: false,
    hidden: false,
  };
  const [bookingRequestID, setBookingRequestID] = React.useState(
    initialValues.bookingRequestID
  );
  const [overall, setOverall] = React.useState(initialValues.overall);
  const [communication, setCommunication] = React.useState(
    initialValues.communication
  );
  const [cleanliness, setCleanliness] = React.useState(
    initialValues.cleanliness
  );
  const [body, setBody] = React.useState(initialValues.body);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [hidden, setHidden] = React.useState(initialValues.hidden);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = reviewGuestModelRecord
      ? { ...initialValues, ...reviewGuestModelRecord }
      : initialValues;
    setBookingRequestID(cleanValues.bookingRequestID);
    setOverall(cleanValues.overall);
    setCommunication(cleanValues.communication);
    setCleanliness(cleanValues.cleanliness);
    setBody(cleanValues.body);
    setCompleted(cleanValues.completed);
    setHidden(cleanValues.hidden);
    setErrors({});
  };
  const [reviewGuestModelRecord, setReviewGuestModelRecord] = React.useState(
    reviewGuestModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getReviewGuestModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getReviewGuestModel
        : reviewGuestModelModelProp;
      setReviewGuestModelRecord(record);
    };
    queryData();
  }, [idProp, reviewGuestModelModelProp]);
  React.useEffect(resetStateValues, [reviewGuestModelRecord]);
  const validations = {
    bookingRequestID: [{ type: "Required" }],
    overall: [],
    communication: [],
    cleanliness: [],
    body: [],
    completed: [],
    hidden: [],
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
          bookingRequestID,
          overall: overall ?? null,
          communication: communication ?? null,
          cleanliness: cleanliness ?? null,
          body: body ?? null,
          completed: completed ?? null,
          hidden: hidden ?? null,
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
            query: updateReviewGuestModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: reviewGuestModelRecord.id,
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
      {...getOverrideProps(overrides, "ReviewGuestModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Booking request id"
        isRequired={true}
        isReadOnly={false}
        value={bookingRequestID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bookingRequestID: value,
              overall,
              communication,
              cleanliness,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.bookingRequestID ?? value;
          }
          if (errors.bookingRequestID?.hasError) {
            runValidationTasks("bookingRequestID", value);
          }
          setBookingRequestID(value);
        }}
        onBlur={() => runValidationTasks("bookingRequestID", bookingRequestID)}
        errorMessage={errors.bookingRequestID?.errorMessage}
        hasError={errors.bookingRequestID?.hasError}
        {...getOverrideProps(overrides, "bookingRequestID")}
      ></TextField>
      <TextField
        label="Overall"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={overall}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              bookingRequestID,
              overall: value,
              communication,
              cleanliness,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.overall ?? value;
          }
          if (errors.overall?.hasError) {
            runValidationTasks("overall", value);
          }
          setOverall(value);
        }}
        onBlur={() => runValidationTasks("overall", overall)}
        errorMessage={errors.overall?.errorMessage}
        hasError={errors.overall?.hasError}
        {...getOverrideProps(overrides, "overall")}
      ></TextField>
      <TextField
        label="Communication"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={communication}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              bookingRequestID,
              overall,
              communication: value,
              cleanliness,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.communication ?? value;
          }
          if (errors.communication?.hasError) {
            runValidationTasks("communication", value);
          }
          setCommunication(value);
        }}
        onBlur={() => runValidationTasks("communication", communication)}
        errorMessage={errors.communication?.errorMessage}
        hasError={errors.communication?.hasError}
        {...getOverrideProps(overrides, "communication")}
      ></TextField>
      <TextField
        label="Cleanliness"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cleanliness}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              bookingRequestID,
              overall,
              communication,
              cleanliness: value,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.cleanliness ?? value;
          }
          if (errors.cleanliness?.hasError) {
            runValidationTasks("cleanliness", value);
          }
          setCleanliness(value);
        }}
        onBlur={() => runValidationTasks("cleanliness", cleanliness)}
        errorMessage={errors.cleanliness?.errorMessage}
        hasError={errors.cleanliness?.hasError}
        {...getOverrideProps(overrides, "cleanliness")}
      ></TextField>
      <TextField
        label="Body"
        isRequired={false}
        isReadOnly={false}
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bookingRequestID,
              overall,
              communication,
              cleanliness,
              body: value,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.body ?? value;
          }
          if (errors.body?.hasError) {
            runValidationTasks("body", value);
          }
          setBody(value);
        }}
        onBlur={() => runValidationTasks("body", body)}
        errorMessage={errors.body?.errorMessage}
        hasError={errors.body?.hasError}
        {...getOverrideProps(overrides, "body")}
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
              bookingRequestID,
              overall,
              communication,
              cleanliness,
              body,
              completed: value,
              hidden,
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
        label="Hidden"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hidden}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              bookingRequestID,
              overall,
              communication,
              cleanliness,
              body,
              completed,
              hidden: value,
            };
            const result = onChange(modelFields);
            value = result?.hidden ?? value;
          }
          if (errors.hidden?.hasError) {
            runValidationTasks("hidden", value);
          }
          setHidden(value);
        }}
        onBlur={() => runValidationTasks("hidden", hidden)}
        errorMessage={errors.hidden?.errorMessage}
        hasError={errors.hidden?.hasError}
        {...getOverrideProps(overrides, "hidden")}
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
          isDisabled={!(idProp || reviewGuestModelModelProp)}
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
              !(idProp || reviewGuestModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
