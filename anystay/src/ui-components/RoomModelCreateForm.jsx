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
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createRoomModel } from "../graphql/mutations";
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
export default function RoomModelCreateForm(props) {
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
    owner: "",
    userhostmodelID: "",
    images: [],
    roomTitle: "",
    roomDescription: "",
    roomType: "",
    roomAmenities: [],
    roomBeds: [],
    isHotelRoom: false,
    disabledDates: [],
    unavailableDates: [],
    nightlyPrices: [],
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [userhostmodelID, setUserhostmodelID] = React.useState(
    initialValues.userhostmodelID
  );
  const [images, setImages] = React.useState(initialValues.images);
  const [roomTitle, setRoomTitle] = React.useState(initialValues.roomTitle);
  const [roomDescription, setRoomDescription] = React.useState(
    initialValues.roomDescription
  );
  const [roomType, setRoomType] = React.useState(initialValues.roomType);
  const [roomAmenities, setRoomAmenities] = React.useState(
    initialValues.roomAmenities
  );
  const [roomBeds, setRoomBeds] = React.useState(initialValues.roomBeds);
  const [isHotelRoom, setIsHotelRoom] = React.useState(
    initialValues.isHotelRoom
  );
  const [disabledDates, setDisabledDates] = React.useState(
    initialValues.disabledDates
  );
  const [unavailableDates, setUnavailableDates] = React.useState(
    initialValues.unavailableDates
  );
  const [nightlyPrices, setNightlyPrices] = React.useState(
    initialValues.nightlyPrices
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOwner(initialValues.owner);
    setUserhostmodelID(initialValues.userhostmodelID);
    setImages(initialValues.images);
    setCurrentImagesValue("");
    setRoomTitle(initialValues.roomTitle);
    setRoomDescription(initialValues.roomDescription);
    setRoomType(initialValues.roomType);
    setRoomAmenities(initialValues.roomAmenities);
    setCurrentRoomAmenitiesValue("");
    setRoomBeds(initialValues.roomBeds);
    setCurrentRoomBedsValue("");
    setIsHotelRoom(initialValues.isHotelRoom);
    setDisabledDates(initialValues.disabledDates);
    setCurrentDisabledDatesValue("");
    setUnavailableDates(initialValues.unavailableDates);
    setCurrentUnavailableDatesValue("");
    setNightlyPrices(initialValues.nightlyPrices);
    setCurrentNightlyPricesValue("");
    setErrors({});
  };
  const [currentImagesValue, setCurrentImagesValue] = React.useState("");
  const imagesRef = React.createRef();
  const [currentRoomAmenitiesValue, setCurrentRoomAmenitiesValue] =
    React.useState("");
  const roomAmenitiesRef = React.createRef();
  const [currentRoomBedsValue, setCurrentRoomBedsValue] = React.useState("");
  const roomBedsRef = React.createRef();
  const [currentDisabledDatesValue, setCurrentDisabledDatesValue] =
    React.useState("");
  const disabledDatesRef = React.createRef();
  const [currentUnavailableDatesValue, setCurrentUnavailableDatesValue] =
    React.useState("");
  const unavailableDatesRef = React.createRef();
  const [currentNightlyPricesValue, setCurrentNightlyPricesValue] =
    React.useState("");
  const nightlyPricesRef = React.createRef();
  const validations = {
    owner: [{ type: "Required" }],
    userhostmodelID: [],
    images: [],
    roomTitle: [],
    roomDescription: [],
    roomType: [],
    roomAmenities: [],
    roomBeds: [],
    isHotelRoom: [],
    disabledDates: [{ type: "JSON" }],
    unavailableDates: [{ type: "JSON" }],
    nightlyPrices: [{ type: "JSON" }],
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
          userhostmodelID,
          images,
          roomTitle,
          roomDescription,
          roomType,
          roomAmenities,
          roomBeds,
          isHotelRoom,
          disabledDates,
          unavailableDates,
          nightlyPrices,
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
            query: createRoomModel.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "RoomModelCreateForm")}
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
              userhostmodelID,
              images,
              roomTitle,
              roomDescription,
              roomType,
              roomAmenities,
              roomBeds,
              isHotelRoom,
              disabledDates,
              unavailableDates,
              nightlyPrices,
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
        label="Userhostmodel id"
        isRequired={false}
        isReadOnly={false}
        value={userhostmodelID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID: value,
              images,
              roomTitle,
              roomDescription,
              roomType,
              roomAmenities,
              roomBeds,
              isHotelRoom,
              disabledDates,
              unavailableDates,
              nightlyPrices,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID,
              images: values,
              roomTitle,
              roomDescription,
              roomType,
              roomAmenities,
              roomBeds,
              isHotelRoom,
              disabledDates,
              unavailableDates,
              nightlyPrices,
            };
            const result = onChange(modelFields);
            values = result?.images ?? values;
          }
          setImages(values);
          setCurrentImagesValue("");
        }}
        currentFieldValue={currentImagesValue}
        label={"Images"}
        items={images}
        hasError={errors?.images?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("images", currentImagesValue)
        }
        errorMessage={errors?.images?.errorMessage}
        setFieldValue={setCurrentImagesValue}
        inputFieldRef={imagesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Images"
          isRequired={false}
          isReadOnly={false}
          value={currentImagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.images?.hasError) {
              runValidationTasks("images", value);
            }
            setCurrentImagesValue(value);
          }}
          onBlur={() => runValidationTasks("images", currentImagesValue)}
          errorMessage={errors.images?.errorMessage}
          hasError={errors.images?.hasError}
          ref={imagesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "images")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Room title"
        isRequired={false}
        isReadOnly={false}
        value={roomTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID,
              images,
              roomTitle: value,
              roomDescription,
              roomType,
              roomAmenities,
              roomBeds,
              isHotelRoom,
              disabledDates,
              unavailableDates,
              nightlyPrices,
            };
            const result = onChange(modelFields);
            value = result?.roomTitle ?? value;
          }
          if (errors.roomTitle?.hasError) {
            runValidationTasks("roomTitle", value);
          }
          setRoomTitle(value);
        }}
        onBlur={() => runValidationTasks("roomTitle", roomTitle)}
        errorMessage={errors.roomTitle?.errorMessage}
        hasError={errors.roomTitle?.hasError}
        {...getOverrideProps(overrides, "roomTitle")}
      ></TextField>
      <TextField
        label="Room description"
        isRequired={false}
        isReadOnly={false}
        value={roomDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID,
              images,
              roomTitle,
              roomDescription: value,
              roomType,
              roomAmenities,
              roomBeds,
              isHotelRoom,
              disabledDates,
              unavailableDates,
              nightlyPrices,
            };
            const result = onChange(modelFields);
            value = result?.roomDescription ?? value;
          }
          if (errors.roomDescription?.hasError) {
            runValidationTasks("roomDescription", value);
          }
          setRoomDescription(value);
        }}
        onBlur={() => runValidationTasks("roomDescription", roomDescription)}
        errorMessage={errors.roomDescription?.errorMessage}
        hasError={errors.roomDescription?.hasError}
        {...getOverrideProps(overrides, "roomDescription")}
      ></TextField>
      <TextField
        label="Room type"
        isRequired={false}
        isReadOnly={false}
        value={roomType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID,
              images,
              roomTitle,
              roomDescription,
              roomType: value,
              roomAmenities,
              roomBeds,
              isHotelRoom,
              disabledDates,
              unavailableDates,
              nightlyPrices,
            };
            const result = onChange(modelFields);
            value = result?.roomType ?? value;
          }
          if (errors.roomType?.hasError) {
            runValidationTasks("roomType", value);
          }
          setRoomType(value);
        }}
        onBlur={() => runValidationTasks("roomType", roomType)}
        errorMessage={errors.roomType?.errorMessage}
        hasError={errors.roomType?.hasError}
        {...getOverrideProps(overrides, "roomType")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID,
              images,
              roomTitle,
              roomDescription,
              roomType,
              roomAmenities: values,
              roomBeds,
              isHotelRoom,
              disabledDates,
              unavailableDates,
              nightlyPrices,
            };
            const result = onChange(modelFields);
            values = result?.roomAmenities ?? values;
          }
          setRoomAmenities(values);
          setCurrentRoomAmenitiesValue("");
        }}
        currentFieldValue={currentRoomAmenitiesValue}
        label={"Room amenities"}
        items={roomAmenities}
        hasError={errors?.roomAmenities?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("roomAmenities", currentRoomAmenitiesValue)
        }
        errorMessage={errors?.roomAmenities?.errorMessage}
        setFieldValue={setCurrentRoomAmenitiesValue}
        inputFieldRef={roomAmenitiesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Room amenities"
          isRequired={false}
          isReadOnly={false}
          value={currentRoomAmenitiesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.roomAmenities?.hasError) {
              runValidationTasks("roomAmenities", value);
            }
            setCurrentRoomAmenitiesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("roomAmenities", currentRoomAmenitiesValue)
          }
          errorMessage={errors.roomAmenities?.errorMessage}
          hasError={errors.roomAmenities?.hasError}
          ref={roomAmenitiesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "roomAmenities")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID,
              images,
              roomTitle,
              roomDescription,
              roomType,
              roomAmenities,
              roomBeds: values,
              isHotelRoom,
              disabledDates,
              unavailableDates,
              nightlyPrices,
            };
            const result = onChange(modelFields);
            values = result?.roomBeds ?? values;
          }
          setRoomBeds(values);
          setCurrentRoomBedsValue("");
        }}
        currentFieldValue={currentRoomBedsValue}
        label={"Room beds"}
        items={roomBeds}
        hasError={errors?.roomBeds?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("roomBeds", currentRoomBedsValue)
        }
        errorMessage={errors?.roomBeds?.errorMessage}
        setFieldValue={setCurrentRoomBedsValue}
        inputFieldRef={roomBedsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Room beds"
          isRequired={false}
          isReadOnly={false}
          value={currentRoomBedsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.roomBeds?.hasError) {
              runValidationTasks("roomBeds", value);
            }
            setCurrentRoomBedsValue(value);
          }}
          onBlur={() => runValidationTasks("roomBeds", currentRoomBedsValue)}
          errorMessage={errors.roomBeds?.errorMessage}
          hasError={errors.roomBeds?.hasError}
          ref={roomBedsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "roomBeds")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Is hotel room"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isHotelRoom}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID,
              images,
              roomTitle,
              roomDescription,
              roomType,
              roomAmenities,
              roomBeds,
              isHotelRoom: value,
              disabledDates,
              unavailableDates,
              nightlyPrices,
            };
            const result = onChange(modelFields);
            value = result?.isHotelRoom ?? value;
          }
          if (errors.isHotelRoom?.hasError) {
            runValidationTasks("isHotelRoom", value);
          }
          setIsHotelRoom(value);
        }}
        onBlur={() => runValidationTasks("isHotelRoom", isHotelRoom)}
        errorMessage={errors.isHotelRoom?.errorMessage}
        hasError={errors.isHotelRoom?.hasError}
        {...getOverrideProps(overrides, "isHotelRoom")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID,
              images,
              roomTitle,
              roomDescription,
              roomType,
              roomAmenities,
              roomBeds,
              isHotelRoom,
              disabledDates: values,
              unavailableDates,
              nightlyPrices,
            };
            const result = onChange(modelFields);
            values = result?.disabledDates ?? values;
          }
          setDisabledDates(values);
          setCurrentDisabledDatesValue("");
        }}
        currentFieldValue={currentDisabledDatesValue}
        label={"Disabled dates"}
        items={disabledDates}
        hasError={errors?.disabledDates?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("disabledDates", currentDisabledDatesValue)
        }
        errorMessage={errors?.disabledDates?.errorMessage}
        setFieldValue={setCurrentDisabledDatesValue}
        inputFieldRef={disabledDatesRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Disabled dates"
          isRequired={false}
          isReadOnly={false}
          value={currentDisabledDatesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.disabledDates?.hasError) {
              runValidationTasks("disabledDates", value);
            }
            setCurrentDisabledDatesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("disabledDates", currentDisabledDatesValue)
          }
          errorMessage={errors.disabledDates?.errorMessage}
          hasError={errors.disabledDates?.hasError}
          ref={disabledDatesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "disabledDates")}
        ></TextAreaField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID,
              images,
              roomTitle,
              roomDescription,
              roomType,
              roomAmenities,
              roomBeds,
              isHotelRoom,
              disabledDates,
              unavailableDates: values,
              nightlyPrices,
            };
            const result = onChange(modelFields);
            values = result?.unavailableDates ?? values;
          }
          setUnavailableDates(values);
          setCurrentUnavailableDatesValue("");
        }}
        currentFieldValue={currentUnavailableDatesValue}
        label={"Unavailable dates"}
        items={unavailableDates}
        hasError={errors?.unavailableDates?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "unavailableDates",
            currentUnavailableDatesValue
          )
        }
        errorMessage={errors?.unavailableDates?.errorMessage}
        setFieldValue={setCurrentUnavailableDatesValue}
        inputFieldRef={unavailableDatesRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Unavailable dates"
          isRequired={false}
          isReadOnly={false}
          value={currentUnavailableDatesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.unavailableDates?.hasError) {
              runValidationTasks("unavailableDates", value);
            }
            setCurrentUnavailableDatesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("unavailableDates", currentUnavailableDatesValue)
          }
          errorMessage={errors.unavailableDates?.errorMessage}
          hasError={errors.unavailableDates?.hasError}
          ref={unavailableDatesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "unavailableDates")}
        ></TextAreaField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              userhostmodelID,
              images,
              roomTitle,
              roomDescription,
              roomType,
              roomAmenities,
              roomBeds,
              isHotelRoom,
              disabledDates,
              unavailableDates,
              nightlyPrices: values,
            };
            const result = onChange(modelFields);
            values = result?.nightlyPrices ?? values;
          }
          setNightlyPrices(values);
          setCurrentNightlyPricesValue("");
        }}
        currentFieldValue={currentNightlyPricesValue}
        label={"Nightly prices"}
        items={nightlyPrices}
        hasError={errors?.nightlyPrices?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("nightlyPrices", currentNightlyPricesValue)
        }
        errorMessage={errors?.nightlyPrices?.errorMessage}
        setFieldValue={setCurrentNightlyPricesValue}
        inputFieldRef={nightlyPricesRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Nightly prices"
          isRequired={false}
          isReadOnly={false}
          value={currentNightlyPricesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.nightlyPrices?.hasError) {
              runValidationTasks("nightlyPrices", value);
            }
            setCurrentNightlyPricesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("nightlyPrices", currentNightlyPricesValue)
          }
          errorMessage={errors.nightlyPrices?.errorMessage}
          hasError={errors.nightlyPrices?.hasError}
          ref={nightlyPricesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "nightlyPrices")}
        ></TextAreaField>
      </ArrayField>
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
