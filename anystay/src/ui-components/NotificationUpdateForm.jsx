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
import { getNotification } from "../graphql/queries";
import { updateNotification } from "../graphql/mutations";
export default function NotificationUpdateForm(props) {
  const {
    id: idProp,
    notification: notificationModelProp,
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
    title: "",
    message: "",
    userhostmodelID: "",
    sentTo: "",
    read: false,
    eventType: "",
    event: "",
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [title, setTitle] = React.useState(initialValues.title);
  const [message, setMessage] = React.useState(initialValues.message);
  const [userhostmodelID, setUserhostmodelID] = React.useState(
    initialValues.userhostmodelID
  );
  const [sentTo, setSentTo] = React.useState(initialValues.sentTo);
  const [read, setRead] = React.useState(initialValues.read);
  const [eventType, setEventType] = React.useState(initialValues.eventType);
  const [event, setEvent] = React.useState(initialValues.event);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = notificationRecord
      ? { ...initialValues, ...notificationRecord }
      : initialValues;
    setOwner(cleanValues.owner);
    setTitle(cleanValues.title);
    setMessage(cleanValues.message);
    setUserhostmodelID(cleanValues.userhostmodelID);
    setSentTo(cleanValues.sentTo);
    setRead(cleanValues.read);
    setEventType(cleanValues.eventType);
    setEvent(cleanValues.event);
    setErrors({});
  };
  const [notificationRecord, setNotificationRecord] = React.useState(
    notificationModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getNotification.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNotification
        : notificationModelProp;
      setNotificationRecord(record);
    };
    queryData();
  }, [idProp, notificationModelProp]);
  React.useEffect(resetStateValues, [notificationRecord]);
  const validations = {
    owner: [{ type: "Required" }],
    title: [],
    message: [],
    userhostmodelID: [],
    sentTo: [],
    read: [],
    eventType: [],
    event: [],
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
          title: title ?? null,
          message: message ?? null,
          userhostmodelID: userhostmodelID ?? null,
          sentTo: sentTo ?? null,
          read: read ?? null,
          eventType: eventType ?? null,
          event: event ?? null,
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
            query: updateNotification.replaceAll("__typename", ""),
            variables: {
              input: {
                id: notificationRecord.id,
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
      {...getOverrideProps(overrides, "NotificationUpdateForm")}
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
              title,
              message,
              userhostmodelID,
              sentTo,
              read,
              eventType,
              event,
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
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              title: value,
              message,
              userhostmodelID,
              sentTo,
              read,
              eventType,
              event,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Message"
        isRequired={false}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              title,
              message: value,
              userhostmodelID,
              sentTo,
              read,
              eventType,
              event,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
      ></TextField>
      <TextField
        label="Userhostmodel id"
        isRequired={false}
        isReadOnly={false}
        value={userhostmodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              title,
              message,
              userhostmodelID: value,
              sentTo,
              read,
              eventType,
              event,
            };
            const result = onChange(modelFields);
            value = result?.userhostmodelID ?? value;
          }
          if (errors.userhostmodelID?.hasError) {
            runValidationTasks("userhostmodelID", value);
          }
          setUserhostmodelID(value);
        }}
        onBlur={() => runValidationTasks("userhostmodelID", userhostmodelID)}
        errorMessage={errors.userhostmodelID?.errorMessage}
        hasError={errors.userhostmodelID?.hasError}
        {...getOverrideProps(overrides, "userhostmodelID")}
      ></TextField>
      <TextField
        label="Sent to"
        isRequired={false}
        isReadOnly={false}
        value={sentTo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              title,
              message,
              userhostmodelID,
              sentTo: value,
              read,
              eventType,
              event,
            };
            const result = onChange(modelFields);
            value = result?.sentTo ?? value;
          }
          if (errors.sentTo?.hasError) {
            runValidationTasks("sentTo", value);
          }
          setSentTo(value);
        }}
        onBlur={() => runValidationTasks("sentTo", sentTo)}
        errorMessage={errors.sentTo?.errorMessage}
        hasError={errors.sentTo?.hasError}
        {...getOverrideProps(overrides, "sentTo")}
      ></TextField>
      <SwitchField
        label="Read"
        defaultChecked={false}
        isDisabled={false}
        isChecked={read}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              title,
              message,
              userhostmodelID,
              sentTo,
              read: value,
              eventType,
              event,
            };
            const result = onChange(modelFields);
            value = result?.read ?? value;
          }
          if (errors.read?.hasError) {
            runValidationTasks("read", value);
          }
          setRead(value);
        }}
        onBlur={() => runValidationTasks("read", read)}
        errorMessage={errors.read?.errorMessage}
        hasError={errors.read?.hasError}
        {...getOverrideProps(overrides, "read")}
      ></SwitchField>
      <TextField
        label="Event type"
        isRequired={false}
        isReadOnly={false}
        value={eventType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              title,
              message,
              userhostmodelID,
              sentTo,
              read,
              eventType: value,
              event,
            };
            const result = onChange(modelFields);
            value = result?.eventType ?? value;
          }
          if (errors.eventType?.hasError) {
            runValidationTasks("eventType", value);
          }
          setEventType(value);
        }}
        onBlur={() => runValidationTasks("eventType", eventType)}
        errorMessage={errors.eventType?.errorMessage}
        hasError={errors.eventType?.hasError}
        {...getOverrideProps(overrides, "eventType")}
      ></TextField>
      <TextField
        label="Event"
        isRequired={false}
        isReadOnly={false}
        value={event}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              title,
              message,
              userhostmodelID,
              sentTo,
              read,
              eventType,
              event: value,
            };
            const result = onChange(modelFields);
            value = result?.event ?? value;
          }
          if (errors.event?.hasError) {
            runValidationTasks("event", value);
          }
          setEvent(value);
        }}
        onBlur={() => runValidationTasks("event", event)}
        errorMessage={errors.event?.errorMessage}
        hasError={errors.event?.hasError}
        {...getOverrideProps(overrides, "event")}
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
          isDisabled={!(idProp || notificationModelProp)}
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
              !(idProp || notificationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
