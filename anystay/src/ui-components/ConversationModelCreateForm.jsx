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
import { createConversationModel } from "../graphql/mutations";
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
export default function ConversationModelCreateForm(props) {
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
    updatedAt: "",
    owners: [],
    listingmodelID: "",
    externalConversationId: "",
    externalSyncEnabled: false,
    externalLastSyncedAt: "",
    guestSeen: false,
    hostSeen: false,
    status: "",
  };
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [owners, setOwners] = React.useState(initialValues.owners);
  const [listingmodelID, setListingmodelID] = React.useState(
    initialValues.listingmodelID
  );
  const [externalConversationId, setExternalConversationId] = React.useState(
    initialValues.externalConversationId
  );
  const [externalSyncEnabled, setExternalSyncEnabled] = React.useState(
    initialValues.externalSyncEnabled
  );
  const [externalLastSyncedAt, setExternalLastSyncedAt] = React.useState(
    initialValues.externalLastSyncedAt
  );
  const [guestSeen, setGuestSeen] = React.useState(initialValues.guestSeen);
  const [hostSeen, setHostSeen] = React.useState(initialValues.hostSeen);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUpdatedAt(initialValues.updatedAt);
    setOwners(initialValues.owners);
    setCurrentOwnersValue("");
    setListingmodelID(initialValues.listingmodelID);
    setExternalConversationId(initialValues.externalConversationId);
    setExternalSyncEnabled(initialValues.externalSyncEnabled);
    setExternalLastSyncedAt(initialValues.externalLastSyncedAt);
    setGuestSeen(initialValues.guestSeen);
    setHostSeen(initialValues.hostSeen);
    setStatus(initialValues.status);
    setErrors({});
  };
  const [currentOwnersValue, setCurrentOwnersValue] = React.useState("");
  const ownersRef = React.createRef();
  const validations = {
    updatedAt: [],
    owners: [{ type: "Required" }],
    listingmodelID: [],
    externalConversationId: [],
    externalSyncEnabled: [],
    externalLastSyncedAt: [],
    guestSeen: [],
    hostSeen: [],
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
          updatedAt,
          owners,
          listingmodelID,
          externalConversationId,
          externalSyncEnabled,
          externalLastSyncedAt,
          guestSeen,
          hostSeen,
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
            query: createConversationModel.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ConversationModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              updatedAt: value,
              owners,
              listingmodelID,
              externalConversationId,
              externalSyncEnabled,
              externalLastSyncedAt,
              guestSeen,
              hostSeen,
              status,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              updatedAt,
              owners: values,
              listingmodelID,
              externalConversationId,
              externalSyncEnabled,
              externalLastSyncedAt,
              guestSeen,
              hostSeen,
              status,
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
          isRequired={true}
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
        label="Listingmodel id"
        isRequired={false}
        isReadOnly={false}
        value={listingmodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              updatedAt,
              owners,
              listingmodelID: value,
              externalConversationId,
              externalSyncEnabled,
              externalLastSyncedAt,
              guestSeen,
              hostSeen,
              status,
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
      <TextField
        label="External conversation id"
        isRequired={false}
        isReadOnly={false}
        value={externalConversationId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              updatedAt,
              owners,
              listingmodelID,
              externalConversationId: value,
              externalSyncEnabled,
              externalLastSyncedAt,
              guestSeen,
              hostSeen,
              status,
            };
            const result = onChange(modelFields);
            value = result?.externalConversationId ?? value;
          }
          if (errors.externalConversationId?.hasError) {
            runValidationTasks("externalConversationId", value);
          }
          setExternalConversationId(value);
        }}
        onBlur={() =>
          runValidationTasks("externalConversationId", externalConversationId)
        }
        errorMessage={errors.externalConversationId?.errorMessage}
        hasError={errors.externalConversationId?.hasError}
        {...getOverrideProps(overrides, "externalConversationId")}
      ></TextField>
      <SwitchField
        label="External sync enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={externalSyncEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              updatedAt,
              owners,
              listingmodelID,
              externalConversationId,
              externalSyncEnabled: value,
              externalLastSyncedAt,
              guestSeen,
              hostSeen,
              status,
            };
            const result = onChange(modelFields);
            value = result?.externalSyncEnabled ?? value;
          }
          if (errors.externalSyncEnabled?.hasError) {
            runValidationTasks("externalSyncEnabled", value);
          }
          setExternalSyncEnabled(value);
        }}
        onBlur={() =>
          runValidationTasks("externalSyncEnabled", externalSyncEnabled)
        }
        errorMessage={errors.externalSyncEnabled?.errorMessage}
        hasError={errors.externalSyncEnabled?.hasError}
        {...getOverrideProps(overrides, "externalSyncEnabled")}
      ></SwitchField>
      <TextField
        label="External last synced at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          externalLastSyncedAt && convertToLocal(new Date(externalLastSyncedAt))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              updatedAt,
              owners,
              listingmodelID,
              externalConversationId,
              externalSyncEnabled,
              externalLastSyncedAt: value,
              guestSeen,
              hostSeen,
              status,
            };
            const result = onChange(modelFields);
            value = result?.externalLastSyncedAt ?? value;
          }
          if (errors.externalLastSyncedAt?.hasError) {
            runValidationTasks("externalLastSyncedAt", value);
          }
          setExternalLastSyncedAt(value);
        }}
        onBlur={() =>
          runValidationTasks("externalLastSyncedAt", externalLastSyncedAt)
        }
        errorMessage={errors.externalLastSyncedAt?.errorMessage}
        hasError={errors.externalLastSyncedAt?.hasError}
        {...getOverrideProps(overrides, "externalLastSyncedAt")}
      ></TextField>
      <SwitchField
        label="Guest seen"
        defaultChecked={false}
        isDisabled={false}
        isChecked={guestSeen}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              updatedAt,
              owners,
              listingmodelID,
              externalConversationId,
              externalSyncEnabled,
              externalLastSyncedAt,
              guestSeen: value,
              hostSeen,
              status,
            };
            const result = onChange(modelFields);
            value = result?.guestSeen ?? value;
          }
          if (errors.guestSeen?.hasError) {
            runValidationTasks("guestSeen", value);
          }
          setGuestSeen(value);
        }}
        onBlur={() => runValidationTasks("guestSeen", guestSeen)}
        errorMessage={errors.guestSeen?.errorMessage}
        hasError={errors.guestSeen?.hasError}
        {...getOverrideProps(overrides, "guestSeen")}
      ></SwitchField>
      <SwitchField
        label="Host seen"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hostSeen}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              updatedAt,
              owners,
              listingmodelID,
              externalConversationId,
              externalSyncEnabled,
              externalLastSyncedAt,
              guestSeen,
              hostSeen: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.hostSeen ?? value;
          }
          if (errors.hostSeen?.hasError) {
            runValidationTasks("hostSeen", value);
          }
          setHostSeen(value);
        }}
        onBlur={() => runValidationTasks("hostSeen", hostSeen)}
        errorMessage={errors.hostSeen?.errorMessage}
        hasError={errors.hostSeen?.hasError}
        {...getOverrideProps(overrides, "hostSeen")}
      ></SwitchField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              updatedAt,
              owners,
              listingmodelID,
              externalConversationId,
              externalSyncEnabled,
              externalLastSyncedAt,
              guestSeen,
              hostSeen,
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
