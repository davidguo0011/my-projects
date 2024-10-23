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
import { createMessageModel } from "../graphql/mutations";
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
export default function MessageModelCreateForm(props) {
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
    createdAt: "",
    tempId: "",
    owners: [],
    body: "",
    author: "",
    isNote: false,
    isTimestamp: false,
    hostawayMessageId: "",
    guestNoteBody: "",
    hostNoteBody: "",
  };
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [tempId, setTempId] = React.useState(initialValues.tempId);
  const [owners, setOwners] = React.useState(initialValues.owners);
  const [body, setBody] = React.useState(initialValues.body);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [isNote, setIsNote] = React.useState(initialValues.isNote);
  const [isTimestamp, setIsTimestamp] = React.useState(
    initialValues.isTimestamp
  );
  const [hostawayMessageId, setHostawayMessageId] = React.useState(
    initialValues.hostawayMessageId
  );
  const [guestNoteBody, setGuestNoteBody] = React.useState(
    initialValues.guestNoteBody
  );
  const [hostNoteBody, setHostNoteBody] = React.useState(
    initialValues.hostNoteBody
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCreatedAt(initialValues.createdAt);
    setTempId(initialValues.tempId);
    setOwners(initialValues.owners);
    setCurrentOwnersValue("");
    setBody(initialValues.body);
    setAuthor(initialValues.author);
    setIsNote(initialValues.isNote);
    setIsTimestamp(initialValues.isTimestamp);
    setHostawayMessageId(initialValues.hostawayMessageId);
    setGuestNoteBody(initialValues.guestNoteBody);
    setHostNoteBody(initialValues.hostNoteBody);
    setErrors({});
  };
  const [currentOwnersValue, setCurrentOwnersValue] = React.useState("");
  const ownersRef = React.createRef();
  const validations = {
    createdAt: [],
    tempId: [],
    owners: [],
    body: [],
    author: [],
    isNote: [],
    isTimestamp: [],
    hostawayMessageId: [],
    guestNoteBody: [],
    hostNoteBody: [],
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
          createdAt,
          tempId,
          owners,
          body,
          author,
          isNote,
          isTimestamp,
          hostawayMessageId,
          guestNoteBody,
          hostNoteBody,
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
            query: createMessageModel.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "MessageModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdAt: value,
              tempId,
              owners,
              body,
              author,
              isNote,
              isTimestamp,
              hostawayMessageId,
              guestNoteBody,
              hostNoteBody,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Temp id"
        isRequired={false}
        isReadOnly={false}
        value={tempId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              tempId: value,
              owners,
              body,
              author,
              isNote,
              isTimestamp,
              hostawayMessageId,
              guestNoteBody,
              hostNoteBody,
            };
            const result = onChange(modelFields);
            value = result?.tempId ?? value;
          }
          if (errors.tempId?.hasError) {
            runValidationTasks("tempId", value);
          }
          setTempId(value);
        }}
        onBlur={() => runValidationTasks("tempId", tempId)}
        errorMessage={errors.tempId?.errorMessage}
        hasError={errors.tempId?.hasError}
        {...getOverrideProps(overrides, "tempId")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              createdAt,
              tempId,
              owners: values,
              body,
              author,
              isNote,
              isTimestamp,
              hostawayMessageId,
              guestNoteBody,
              hostNoteBody,
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
        runValidationTasks={async () =>
          await runValidationTasks("owners", currentOwnersValue)
        }
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
        label="Body"
        isRequired={false}
        isReadOnly={false}
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              tempId,
              owners,
              body: value,
              author,
              isNote,
              isTimestamp,
              hostawayMessageId,
              guestNoteBody,
              hostNoteBody,
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
      <TextField
        label="Author"
        isRequired={false}
        isReadOnly={false}
        value={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              tempId,
              owners,
              body,
              author: value,
              isNote,
              isTimestamp,
              hostawayMessageId,
              guestNoteBody,
              hostNoteBody,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
      ></TextField>
      <SwitchField
        label="Is note"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isNote}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              tempId,
              owners,
              body,
              author,
              isNote: value,
              isTimestamp,
              hostawayMessageId,
              guestNoteBody,
              hostNoteBody,
            };
            const result = onChange(modelFields);
            value = result?.isNote ?? value;
          }
          if (errors.isNote?.hasError) {
            runValidationTasks("isNote", value);
          }
          setIsNote(value);
        }}
        onBlur={() => runValidationTasks("isNote", isNote)}
        errorMessage={errors.isNote?.errorMessage}
        hasError={errors.isNote?.hasError}
        {...getOverrideProps(overrides, "isNote")}
      ></SwitchField>
      <SwitchField
        label="Is timestamp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isTimestamp}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              createdAt,
              tempId,
              owners,
              body,
              author,
              isNote,
              isTimestamp: value,
              hostawayMessageId,
              guestNoteBody,
              hostNoteBody,
            };
            const result = onChange(modelFields);
            value = result?.isTimestamp ?? value;
          }
          if (errors.isTimestamp?.hasError) {
            runValidationTasks("isTimestamp", value);
          }
          setIsTimestamp(value);
        }}
        onBlur={() => runValidationTasks("isTimestamp", isTimestamp)}
        errorMessage={errors.isTimestamp?.errorMessage}
        hasError={errors.isTimestamp?.hasError}
        {...getOverrideProps(overrides, "isTimestamp")}
      ></SwitchField>
      <TextField
        label="Hostaway message id"
        isRequired={false}
        isReadOnly={false}
        value={hostawayMessageId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              tempId,
              owners,
              body,
              author,
              isNote,
              isTimestamp,
              hostawayMessageId: value,
              guestNoteBody,
              hostNoteBody,
            };
            const result = onChange(modelFields);
            value = result?.hostawayMessageId ?? value;
          }
          if (errors.hostawayMessageId?.hasError) {
            runValidationTasks("hostawayMessageId", value);
          }
          setHostawayMessageId(value);
        }}
        onBlur={() =>
          runValidationTasks("hostawayMessageId", hostawayMessageId)
        }
        errorMessage={errors.hostawayMessageId?.errorMessage}
        hasError={errors.hostawayMessageId?.hasError}
        {...getOverrideProps(overrides, "hostawayMessageId")}
      ></TextField>
      <TextField
        label="Guest note body"
        isRequired={false}
        isReadOnly={false}
        value={guestNoteBody}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              tempId,
              owners,
              body,
              author,
              isNote,
              isTimestamp,
              hostawayMessageId,
              guestNoteBody: value,
              hostNoteBody,
            };
            const result = onChange(modelFields);
            value = result?.guestNoteBody ?? value;
          }
          if (errors.guestNoteBody?.hasError) {
            runValidationTasks("guestNoteBody", value);
          }
          setGuestNoteBody(value);
        }}
        onBlur={() => runValidationTasks("guestNoteBody", guestNoteBody)}
        errorMessage={errors.guestNoteBody?.errorMessage}
        hasError={errors.guestNoteBody?.hasError}
        {...getOverrideProps(overrides, "guestNoteBody")}
      ></TextField>
      <TextField
        label="Host note body"
        isRequired={false}
        isReadOnly={false}
        value={hostNoteBody}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdAt,
              tempId,
              owners,
              body,
              author,
              isNote,
              isTimestamp,
              hostawayMessageId,
              guestNoteBody,
              hostNoteBody: value,
            };
            const result = onChange(modelFields);
            value = result?.hostNoteBody ?? value;
          }
          if (errors.hostNoteBody?.hasError) {
            runValidationTasks("hostNoteBody", value);
          }
          setHostNoteBody(value);
        }}
        onBlur={() => runValidationTasks("hostNoteBody", hostNoteBody)}
        errorMessage={errors.hostNoteBody?.errorMessage}
        hasError={errors.hostNoteBody?.hasError}
        {...getOverrideProps(overrides, "hostNoteBody")}
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
