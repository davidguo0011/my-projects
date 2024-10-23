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
import { createReviewStayModel } from "../graphql/mutations";
export default function ReviewStayModelCreateForm(props) {
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
    hostawayReview: false,
    hostawayReviewId: "",
    externalUserFirstName: "",
    externalUserLastName: "",
    overall: "",
    communication: "",
    amenities: "",
    cleaning: "",
    location: "",
    service: "",
    value: "",
    body: "",
    completed: false,
    hidden: false,
  };
  const [hostawayReview, setHostawayReview] = React.useState(
    initialValues.hostawayReview
  );
  const [hostawayReviewId, setHostawayReviewId] = React.useState(
    initialValues.hostawayReviewId
  );
  const [externalUserFirstName, setExternalUserFirstName] = React.useState(
    initialValues.externalUserFirstName
  );
  const [externalUserLastName, setExternalUserLastName] = React.useState(
    initialValues.externalUserLastName
  );
  const [overall, setOverall] = React.useState(initialValues.overall);
  const [communication, setCommunication] = React.useState(
    initialValues.communication
  );
  const [amenities, setAmenities] = React.useState(initialValues.amenities);
  const [cleaning, setCleaning] = React.useState(initialValues.cleaning);
  const [location, setLocation] = React.useState(initialValues.location);
  const [service, setService] = React.useState(initialValues.service);
  const [value, setValue] = React.useState(initialValues.value);
  const [body, setBody] = React.useState(initialValues.body);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [hidden, setHidden] = React.useState(initialValues.hidden);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setHostawayReview(initialValues.hostawayReview);
    setHostawayReviewId(initialValues.hostawayReviewId);
    setExternalUserFirstName(initialValues.externalUserFirstName);
    setExternalUserLastName(initialValues.externalUserLastName);
    setOverall(initialValues.overall);
    setCommunication(initialValues.communication);
    setAmenities(initialValues.amenities);
    setCleaning(initialValues.cleaning);
    setLocation(initialValues.location);
    setService(initialValues.service);
    setValue(initialValues.value);
    setBody(initialValues.body);
    setCompleted(initialValues.completed);
    setHidden(initialValues.hidden);
    setErrors({});
  };
  const validations = {
    hostawayReview: [],
    hostawayReviewId: [],
    externalUserFirstName: [],
    externalUserLastName: [],
    overall: [],
    communication: [],
    amenities: [],
    cleaning: [],
    location: [],
    service: [],
    value: [],
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
          hostawayReview,
          hostawayReviewId,
          externalUserFirstName,
          externalUserLastName,
          overall,
          communication,
          amenities,
          cleaning,
          location,
          service,
          value,
          body,
          completed,
          hidden,
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
            query: createReviewStayModel.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ReviewStayModelCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Hostaway review"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hostawayReview}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              hostawayReview: value,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication,
              amenities,
              cleaning,
              location,
              service,
              value,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.hostawayReview ?? value;
          }
          if (errors.hostawayReview?.hasError) {
            runValidationTasks("hostawayReview", value);
          }
          setHostawayReview(value);
        }}
        onBlur={() => runValidationTasks("hostawayReview", hostawayReview)}
        errorMessage={errors.hostawayReview?.errorMessage}
        hasError={errors.hostawayReview?.hasError}
        {...getOverrideProps(overrides, "hostawayReview")}
      ></SwitchField>
      <TextField
        label="Hostaway review id"
        isRequired={false}
        isReadOnly={false}
        value={hostawayReviewId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostawayReview,
              hostawayReviewId: value,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication,
              amenities,
              cleaning,
              location,
              service,
              value,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.hostawayReviewId ?? value;
          }
          if (errors.hostawayReviewId?.hasError) {
            runValidationTasks("hostawayReviewId", value);
          }
          setHostawayReviewId(value);
        }}
        onBlur={() => runValidationTasks("hostawayReviewId", hostawayReviewId)}
        errorMessage={errors.hostawayReviewId?.errorMessage}
        hasError={errors.hostawayReviewId?.hasError}
        {...getOverrideProps(overrides, "hostawayReviewId")}
      ></TextField>
      <TextField
        label="External user first name"
        isRequired={false}
        isReadOnly={false}
        value={externalUserFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName: value,
              externalUserLastName,
              overall,
              communication,
              amenities,
              cleaning,
              location,
              service,
              value,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.externalUserFirstName ?? value;
          }
          if (errors.externalUserFirstName?.hasError) {
            runValidationTasks("externalUserFirstName", value);
          }
          setExternalUserFirstName(value);
        }}
        onBlur={() =>
          runValidationTasks("externalUserFirstName", externalUserFirstName)
        }
        errorMessage={errors.externalUserFirstName?.errorMessage}
        hasError={errors.externalUserFirstName?.hasError}
        {...getOverrideProps(overrides, "externalUserFirstName")}
      ></TextField>
      <TextField
        label="External user last name"
        isRequired={false}
        isReadOnly={false}
        value={externalUserLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName: value,
              overall,
              communication,
              amenities,
              cleaning,
              location,
              service,
              value,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.externalUserLastName ?? value;
          }
          if (errors.externalUserLastName?.hasError) {
            runValidationTasks("externalUserLastName", value);
          }
          setExternalUserLastName(value);
        }}
        onBlur={() =>
          runValidationTasks("externalUserLastName", externalUserLastName)
        }
        errorMessage={errors.externalUserLastName?.errorMessage}
        hasError={errors.externalUserLastName?.hasError}
        {...getOverrideProps(overrides, "externalUserLastName")}
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
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall: value,
              communication,
              amenities,
              cleaning,
              location,
              service,
              value,
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
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication: value,
              amenities,
              cleaning,
              location,
              service,
              value,
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
        label="Amenities"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={amenities}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication,
              amenities: value,
              cleaning,
              location,
              service,
              value,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.amenities ?? value;
          }
          if (errors.amenities?.hasError) {
            runValidationTasks("amenities", value);
          }
          setAmenities(value);
        }}
        onBlur={() => runValidationTasks("amenities", amenities)}
        errorMessage={errors.amenities?.errorMessage}
        hasError={errors.amenities?.hasError}
        {...getOverrideProps(overrides, "amenities")}
      ></TextField>
      <TextField
        label="Cleaning"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cleaning}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication,
              amenities,
              cleaning: value,
              location,
              service,
              value,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.cleaning ?? value;
          }
          if (errors.cleaning?.hasError) {
            runValidationTasks("cleaning", value);
          }
          setCleaning(value);
        }}
        onBlur={() => runValidationTasks("cleaning", cleaning)}
        errorMessage={errors.cleaning?.errorMessage}
        hasError={errors.cleaning?.hasError}
        {...getOverrideProps(overrides, "cleaning")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={location}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication,
              amenities,
              cleaning,
              location: value,
              service,
              value,
              body,
              completed,
              hidden,
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
      ></TextField>
      <TextField
        label="Service"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={service}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication,
              amenities,
              cleaning,
              location,
              service: value,
              value,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.service ?? value;
          }
          if (errors.service?.hasError) {
            runValidationTasks("service", value);
          }
          setService(value);
        }}
        onBlur={() => runValidationTasks("service", service)}
        errorMessage={errors.service?.errorMessage}
        hasError={errors.service?.hasError}
        {...getOverrideProps(overrides, "service")}
      ></TextField>
      <TextField
        label="Value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={value}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication,
              amenities,
              cleaning,
              location,
              service,
              value: value,
              body,
              completed,
              hidden,
            };
            const result = onChange(modelFields);
            value = result?.value ?? value;
          }
          if (errors.value?.hasError) {
            runValidationTasks("value", value);
          }
          setValue(value);
        }}
        onBlur={() => runValidationTasks("value", value)}
        errorMessage={errors.value?.errorMessage}
        hasError={errors.value?.hasError}
        {...getOverrideProps(overrides, "value")}
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
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication,
              amenities,
              cleaning,
              location,
              service,
              value,
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
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication,
              amenities,
              cleaning,
              location,
              service,
              value,
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
              hostawayReview,
              hostawayReviewId,
              externalUserFirstName,
              externalUserLastName,
              overall,
              communication,
              amenities,
              cleaning,
              location,
              service,
              value,
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
