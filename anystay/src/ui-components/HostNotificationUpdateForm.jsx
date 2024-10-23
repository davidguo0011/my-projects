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
import { getHostNotification } from "../graphql/queries";
import { updateHostNotification } from "../graphql/mutations";
export default function HostNotificationUpdateForm(props) {
  const {
    id: idProp,
    hostNotification: hostNotificationModelProp,
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
    usermodelID: "",
    listingmodelID: "",
    read: false,
    category: "",
    eventUrl: "",
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [title, setTitle] = React.useState(initialValues.title);
  const [message, setMessage] = React.useState(initialValues.message);
  const [usermodelID, setUsermodelID] = React.useState(
    initialValues.usermodelID
  );
  const [listingmodelID, setListingmodelID] = React.useState(
    initialValues.listingmodelID
  );
  const [read, setRead] = React.useState(initialValues.read);
  const [category, setCategory] = React.useState(initialValues.category);
  const [eventUrl, setEventUrl] = React.useState(initialValues.eventUrl);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = hostNotificationRecord
      ? { ...initialValues, ...hostNotificationRecord }
      : initialValues;
    setOwner(cleanValues.owner);
    setTitle(cleanValues.title);
    setMessage(cleanValues.message);
    setUsermodelID(cleanValues.usermodelID);
    setListingmodelID(cleanValues.listingmodelID);
    setRead(cleanValues.read);
    setCategory(cleanValues.category);
    setEventUrl(cleanValues.eventUrl);
    setErrors({});
  };
  const [hostNotificationRecord, setHostNotificationRecord] = React.useState(
    hostNotificationModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getHostNotification.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getHostNotification
        : hostNotificationModelProp;
      setHostNotificationRecord(record);
    };
    queryData();
  }, [idProp, hostNotificationModelProp]);
  React.useEffect(resetStateValues, [hostNotificationRecord]);
  const validations = {
    owner: [{ type: "Required" }],
    title: [],
    message: [],
    usermodelID: [],
    listingmodelID: [],
    read: [],
    category: [],
    eventUrl: [],
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
          usermodelID: usermodelID ?? null,
          listingmodelID: listingmodelID ?? null,
          read: read ?? null,
          category: category ?? null,
          eventUrl: eventUrl ?? null,
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
            query: updateHostNotification.replaceAll("__typename", ""),
            variables: {
              input: {
                id: hostNotificationRecord.id,
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
      {...getOverrideProps(overrides, "HostNotificationUpdateForm")}
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
              usermodelID,
              listingmodelID,
              read,
              category,
              eventUrl,
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
              usermodelID,
              listingmodelID,
              read,
              category,
              eventUrl,
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
              usermodelID,
              listingmodelID,
              read,
              category,
              eventUrl,
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
        label="Usermodel id"
        isRequired={false}
        isReadOnly={false}
        value={usermodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              title,
              message,
              usermodelID: value,
              listingmodelID,
              read,
              category,
              eventUrl,
            };
            const result = onChange(modelFields);
            value = result?.usermodelID ?? value;
          }
          if (errors.usermodelID?.hasError) {
            runValidationTasks("usermodelID", value);
          }
          setUsermodelID(value);
        }}
        onBlur={() => runValidationTasks("usermodelID", usermodelID)}
        errorMessage={errors.usermodelID?.errorMessage}
        hasError={errors.usermodelID?.hasError}
        {...getOverrideProps(overrides, "usermodelID")}
      ></TextField>
      <TextField
        label="Listingmodel id"
        isRequired={false}
        isReadOnly={false}
        value={listingmodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              title,
              message,
              usermodelID,
              listingmodelID: value,
              read,
              category,
              eventUrl,
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
              usermodelID,
              listingmodelID,
              read: value,
              category,
              eventUrl,
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
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              title,
              message,
              usermodelID,
              listingmodelID,
              read,
              category: value,
              eventUrl,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <TextField
        label="Event url"
        isRequired={false}
        isReadOnly={false}
        value={eventUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              title,
              message,
              usermodelID,
              listingmodelID,
              read,
              category,
              eventUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.eventUrl ?? value;
          }
          if (errors.eventUrl?.hasError) {
            runValidationTasks("eventUrl", value);
          }
          setEventUrl(value);
        }}
        onBlur={() => runValidationTasks("eventUrl", eventUrl)}
        errorMessage={errors.eventUrl?.errorMessage}
        hasError={errors.eventUrl?.hasError}
        {...getOverrideProps(overrides, "eventUrl")}
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
          isDisabled={!(idProp || hostNotificationModelProp)}
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
              !(idProp || hostNotificationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
