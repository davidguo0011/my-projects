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
import { createProductModel } from "../graphql/mutations";
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
export default function ProductModelCreateForm(props) {
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
    productTitle: "",
    productDescription: "",
    productType: "",
    productFulfillmentType: "",
    productImages: [],
    netPrice: "",
    pricingType: "",
    inventory: "",
    location: "",
    fulfillmentRadius: "",
    guestOnlyPurchase: false,
    minOrderQuantity: "",
    maxOrderQuantity: "",
    minOrderAmount: "",
    maxOrderAmount: "",
    maxGuests: "",
    duration: "",
    minimumNotice: "",
    unavailableDates: [],
    internalCode: "",
    unlimitedInventory: false,
    status: "",
    approved: false,
    draft: false,
    instantBookEnabled: false,
    categories: [],
    tags: [],
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [productTitle, setProductTitle] = React.useState(
    initialValues.productTitle
  );
  const [productDescription, setProductDescription] = React.useState(
    initialValues.productDescription
  );
  const [productType, setProductType] = React.useState(
    initialValues.productType
  );
  const [productFulfillmentType, setProductFulfillmentType] = React.useState(
    initialValues.productFulfillmentType
  );
  const [productImages, setProductImages] = React.useState(
    initialValues.productImages
  );
  const [netPrice, setNetPrice] = React.useState(initialValues.netPrice);
  const [pricingType, setPricingType] = React.useState(
    initialValues.pricingType
  );
  const [inventory, setInventory] = React.useState(initialValues.inventory);
  const [location, setLocation] = React.useState(initialValues.location);
  const [fulfillmentRadius, setFulfillmentRadius] = React.useState(
    initialValues.fulfillmentRadius
  );
  const [guestOnlyPurchase, setGuestOnlyPurchase] = React.useState(
    initialValues.guestOnlyPurchase
  );
  const [minOrderQuantity, setMinOrderQuantity] = React.useState(
    initialValues.minOrderQuantity
  );
  const [maxOrderQuantity, setMaxOrderQuantity] = React.useState(
    initialValues.maxOrderQuantity
  );
  const [minOrderAmount, setMinOrderAmount] = React.useState(
    initialValues.minOrderAmount
  );
  const [maxOrderAmount, setMaxOrderAmount] = React.useState(
    initialValues.maxOrderAmount
  );
  const [maxGuests, setMaxGuests] = React.useState(initialValues.maxGuests);
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [minimumNotice, setMinimumNotice] = React.useState(
    initialValues.minimumNotice
  );
  const [unavailableDates, setUnavailableDates] = React.useState(
    initialValues.unavailableDates
  );
  const [internalCode, setInternalCode] = React.useState(
    initialValues.internalCode
  );
  const [unlimitedInventory, setUnlimitedInventory] = React.useState(
    initialValues.unlimitedInventory
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [approved, setApproved] = React.useState(initialValues.approved);
  const [draft, setDraft] = React.useState(initialValues.draft);
  const [instantBookEnabled, setInstantBookEnabled] = React.useState(
    initialValues.instantBookEnabled
  );
  const [categories, setCategories] = React.useState(initialValues.categories);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOwner(initialValues.owner);
    setProductTitle(initialValues.productTitle);
    setProductDescription(initialValues.productDescription);
    setProductType(initialValues.productType);
    setProductFulfillmentType(initialValues.productFulfillmentType);
    setProductImages(initialValues.productImages);
    setCurrentProductImagesValue("");
    setNetPrice(initialValues.netPrice);
    setPricingType(initialValues.pricingType);
    setInventory(initialValues.inventory);
    setLocation(initialValues.location);
    setFulfillmentRadius(initialValues.fulfillmentRadius);
    setGuestOnlyPurchase(initialValues.guestOnlyPurchase);
    setMinOrderQuantity(initialValues.minOrderQuantity);
    setMaxOrderQuantity(initialValues.maxOrderQuantity);
    setMinOrderAmount(initialValues.minOrderAmount);
    setMaxOrderAmount(initialValues.maxOrderAmount);
    setMaxGuests(initialValues.maxGuests);
    setDuration(initialValues.duration);
    setMinimumNotice(initialValues.minimumNotice);
    setUnavailableDates(initialValues.unavailableDates);
    setCurrentUnavailableDatesValue("");
    setInternalCode(initialValues.internalCode);
    setUnlimitedInventory(initialValues.unlimitedInventory);
    setStatus(initialValues.status);
    setApproved(initialValues.approved);
    setDraft(initialValues.draft);
    setInstantBookEnabled(initialValues.instantBookEnabled);
    setCategories(initialValues.categories);
    setCurrentCategoriesValue("");
    setTags(initialValues.tags);
    setCurrentTagsValue("");
    setErrors({});
  };
  const [currentProductImagesValue, setCurrentProductImagesValue] =
    React.useState("");
  const productImagesRef = React.createRef();
  const [currentUnavailableDatesValue, setCurrentUnavailableDatesValue] =
    React.useState("");
  const unavailableDatesRef = React.createRef();
  const [currentCategoriesValue, setCurrentCategoriesValue] =
    React.useState("");
  const categoriesRef = React.createRef();
  const [currentTagsValue, setCurrentTagsValue] = React.useState("");
  const tagsRef = React.createRef();
  const validations = {
    owner: [{ type: "Required" }],
    productTitle: [{ type: "Required" }],
    productDescription: [],
    productType: [],
    productFulfillmentType: [],
    productImages: [{ type: "JSON" }],
    netPrice: [],
    pricingType: [],
    inventory: [],
    location: [{ type: "JSON" }],
    fulfillmentRadius: [],
    guestOnlyPurchase: [],
    minOrderQuantity: [],
    maxOrderQuantity: [],
    minOrderAmount: [],
    maxOrderAmount: [],
    maxGuests: [],
    duration: [],
    minimumNotice: [],
    unavailableDates: [{ type: "JSON" }],
    internalCode: [],
    unlimitedInventory: [],
    status: [],
    approved: [],
    draft: [],
    instantBookEnabled: [],
    categories: [],
    tags: [],
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
          productTitle,
          productDescription,
          productType,
          productFulfillmentType,
          productImages,
          netPrice,
          pricingType,
          inventory,
          location,
          fulfillmentRadius,
          guestOnlyPurchase,
          minOrderQuantity,
          maxOrderQuantity,
          minOrderAmount,
          maxOrderAmount,
          maxGuests,
          duration,
          minimumNotice,
          unavailableDates,
          internalCode,
          unlimitedInventory,
          status,
          approved,
          draft,
          instantBookEnabled,
          categories,
          tags,
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
            query: createProductModel.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ProductModelCreateForm")}
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
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
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
        label="Product title"
        isRequired={true}
        isReadOnly={false}
        value={productTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle: value,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.productTitle ?? value;
          }
          if (errors.productTitle?.hasError) {
            runValidationTasks("productTitle", value);
          }
          setProductTitle(value);
        }}
        onBlur={() => runValidationTasks("productTitle", productTitle)}
        errorMessage={errors.productTitle?.errorMessage}
        hasError={errors.productTitle?.hasError}
        {...getOverrideProps(overrides, "productTitle")}
      ></TextField>
      <TextField
        label="Product description"
        isRequired={false}
        isReadOnly={false}
        value={productDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription: value,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.productDescription ?? value;
          }
          if (errors.productDescription?.hasError) {
            runValidationTasks("productDescription", value);
          }
          setProductDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("productDescription", productDescription)
        }
        errorMessage={errors.productDescription?.errorMessage}
        hasError={errors.productDescription?.hasError}
        {...getOverrideProps(overrides, "productDescription")}
      ></TextField>
      <TextField
        label="Product type"
        isRequired={false}
        isReadOnly={false}
        value={productType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType: value,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.productType ?? value;
          }
          if (errors.productType?.hasError) {
            runValidationTasks("productType", value);
          }
          setProductType(value);
        }}
        onBlur={() => runValidationTasks("productType", productType)}
        errorMessage={errors.productType?.errorMessage}
        hasError={errors.productType?.hasError}
        {...getOverrideProps(overrides, "productType")}
      ></TextField>
      <TextField
        label="Product fulfillment type"
        isRequired={false}
        isReadOnly={false}
        value={productFulfillmentType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType: value,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.productFulfillmentType ?? value;
          }
          if (errors.productFulfillmentType?.hasError) {
            runValidationTasks("productFulfillmentType", value);
          }
          setProductFulfillmentType(value);
        }}
        onBlur={() =>
          runValidationTasks("productFulfillmentType", productFulfillmentType)
        }
        errorMessage={errors.productFulfillmentType?.errorMessage}
        hasError={errors.productFulfillmentType?.hasError}
        {...getOverrideProps(overrides, "productFulfillmentType")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages: values,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            values = result?.productImages ?? values;
          }
          setProductImages(values);
          setCurrentProductImagesValue("");
        }}
        currentFieldValue={currentProductImagesValue}
        label={"Product images"}
        items={productImages}
        hasError={errors?.productImages?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("productImages", currentProductImagesValue)
        }
        errorMessage={errors?.productImages?.errorMessage}
        setFieldValue={setCurrentProductImagesValue}
        inputFieldRef={productImagesRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Product images"
          isRequired={false}
          isReadOnly={false}
          value={currentProductImagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.productImages?.hasError) {
              runValidationTasks("productImages", value);
            }
            setCurrentProductImagesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("productImages", currentProductImagesValue)
          }
          errorMessage={errors.productImages?.errorMessage}
          hasError={errors.productImages?.hasError}
          ref={productImagesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "productImages")}
        ></TextAreaField>
      </ArrayField>
      <TextField
        label="Net price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={netPrice}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice: value,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.netPrice ?? value;
          }
          if (errors.netPrice?.hasError) {
            runValidationTasks("netPrice", value);
          }
          setNetPrice(value);
        }}
        onBlur={() => runValidationTasks("netPrice", netPrice)}
        errorMessage={errors.netPrice?.errorMessage}
        hasError={errors.netPrice?.hasError}
        {...getOverrideProps(overrides, "netPrice")}
      ></TextField>
      <TextField
        label="Pricing type"
        isRequired={false}
        isReadOnly={false}
        value={pricingType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType: value,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.pricingType ?? value;
          }
          if (errors.pricingType?.hasError) {
            runValidationTasks("pricingType", value);
          }
          setPricingType(value);
        }}
        onBlur={() => runValidationTasks("pricingType", pricingType)}
        errorMessage={errors.pricingType?.errorMessage}
        hasError={errors.pricingType?.hasError}
        {...getOverrideProps(overrides, "pricingType")}
      ></TextField>
      <TextField
        label="Inventory"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={inventory}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory: value,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.inventory ?? value;
          }
          if (errors.inventory?.hasError) {
            runValidationTasks("inventory", value);
          }
          setInventory(value);
        }}
        onBlur={() => runValidationTasks("inventory", inventory)}
        errorMessage={errors.inventory?.errorMessage}
        hasError={errors.inventory?.hasError}
        {...getOverrideProps(overrides, "inventory")}
      ></TextField>
      <TextAreaField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location: value,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
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
      ></TextAreaField>
      <TextField
        label="Fulfillment radius"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={fulfillmentRadius}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius: value,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.fulfillmentRadius ?? value;
          }
          if (errors.fulfillmentRadius?.hasError) {
            runValidationTasks("fulfillmentRadius", value);
          }
          setFulfillmentRadius(value);
        }}
        onBlur={() =>
          runValidationTasks("fulfillmentRadius", fulfillmentRadius)
        }
        errorMessage={errors.fulfillmentRadius?.errorMessage}
        hasError={errors.fulfillmentRadius?.hasError}
        {...getOverrideProps(overrides, "fulfillmentRadius")}
      ></TextField>
      <SwitchField
        label="Guest only purchase"
        defaultChecked={false}
        isDisabled={false}
        isChecked={guestOnlyPurchase}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase: value,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.guestOnlyPurchase ?? value;
          }
          if (errors.guestOnlyPurchase?.hasError) {
            runValidationTasks("guestOnlyPurchase", value);
          }
          setGuestOnlyPurchase(value);
        }}
        onBlur={() =>
          runValidationTasks("guestOnlyPurchase", guestOnlyPurchase)
        }
        errorMessage={errors.guestOnlyPurchase?.errorMessage}
        hasError={errors.guestOnlyPurchase?.hasError}
        {...getOverrideProps(overrides, "guestOnlyPurchase")}
      ></SwitchField>
      <TextField
        label="Min order quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minOrderQuantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity: value,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.minOrderQuantity ?? value;
          }
          if (errors.minOrderQuantity?.hasError) {
            runValidationTasks("minOrderQuantity", value);
          }
          setMinOrderQuantity(value);
        }}
        onBlur={() => runValidationTasks("minOrderQuantity", minOrderQuantity)}
        errorMessage={errors.minOrderQuantity?.errorMessage}
        hasError={errors.minOrderQuantity?.hasError}
        {...getOverrideProps(overrides, "minOrderQuantity")}
      ></TextField>
      <TextField
        label="Max order quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxOrderQuantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity: value,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.maxOrderQuantity ?? value;
          }
          if (errors.maxOrderQuantity?.hasError) {
            runValidationTasks("maxOrderQuantity", value);
          }
          setMaxOrderQuantity(value);
        }}
        onBlur={() => runValidationTasks("maxOrderQuantity", maxOrderQuantity)}
        errorMessage={errors.maxOrderQuantity?.errorMessage}
        hasError={errors.maxOrderQuantity?.hasError}
        {...getOverrideProps(overrides, "maxOrderQuantity")}
      ></TextField>
      <TextField
        label="Min order amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minOrderAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount: value,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.minOrderAmount ?? value;
          }
          if (errors.minOrderAmount?.hasError) {
            runValidationTasks("minOrderAmount", value);
          }
          setMinOrderAmount(value);
        }}
        onBlur={() => runValidationTasks("minOrderAmount", minOrderAmount)}
        errorMessage={errors.minOrderAmount?.errorMessage}
        hasError={errors.minOrderAmount?.hasError}
        {...getOverrideProps(overrides, "minOrderAmount")}
      ></TextField>
      <TextField
        label="Max order amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxOrderAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount: value,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.maxOrderAmount ?? value;
          }
          if (errors.maxOrderAmount?.hasError) {
            runValidationTasks("maxOrderAmount", value);
          }
          setMaxOrderAmount(value);
        }}
        onBlur={() => runValidationTasks("maxOrderAmount", maxOrderAmount)}
        errorMessage={errors.maxOrderAmount?.errorMessage}
        hasError={errors.maxOrderAmount?.hasError}
        {...getOverrideProps(overrides, "maxOrderAmount")}
      ></TextField>
      <TextField
        label="Max guests"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxGuests}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests: value,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.maxGuests ?? value;
          }
          if (errors.maxGuests?.hasError) {
            runValidationTasks("maxGuests", value);
          }
          setMaxGuests(value);
        }}
        onBlur={() => runValidationTasks("maxGuests", maxGuests)}
        errorMessage={errors.maxGuests?.errorMessage}
        hasError={errors.maxGuests?.hasError}
        {...getOverrideProps(overrides, "maxGuests")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={duration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration: value,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <TextField
        label="Minimum notice"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minimumNotice}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice: value,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.minimumNotice ?? value;
          }
          if (errors.minimumNotice?.hasError) {
            runValidationTasks("minimumNotice", value);
          }
          setMinimumNotice(value);
        }}
        onBlur={() => runValidationTasks("minimumNotice", minimumNotice)}
        errorMessage={errors.minimumNotice?.errorMessage}
        hasError={errors.minimumNotice?.hasError}
        {...getOverrideProps(overrides, "minimumNotice")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates: values,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
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
      <TextField
        label="Internal code"
        isRequired={false}
        isReadOnly={false}
        value={internalCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode: value,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.internalCode ?? value;
          }
          if (errors.internalCode?.hasError) {
            runValidationTasks("internalCode", value);
          }
          setInternalCode(value);
        }}
        onBlur={() => runValidationTasks("internalCode", internalCode)}
        errorMessage={errors.internalCode?.errorMessage}
        hasError={errors.internalCode?.hasError}
        {...getOverrideProps(overrides, "internalCode")}
      ></TextField>
      <SwitchField
        label="Unlimited inventory"
        defaultChecked={false}
        isDisabled={false}
        isChecked={unlimitedInventory}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory: value,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.unlimitedInventory ?? value;
          }
          if (errors.unlimitedInventory?.hasError) {
            runValidationTasks("unlimitedInventory", value);
          }
          setUnlimitedInventory(value);
        }}
        onBlur={() =>
          runValidationTasks("unlimitedInventory", unlimitedInventory)
        }
        errorMessage={errors.unlimitedInventory?.errorMessage}
        hasError={errors.unlimitedInventory?.hasError}
        {...getOverrideProps(overrides, "unlimitedInventory")}
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
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status: value,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags,
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
      <SwitchField
        label="Approved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={approved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved: value,
              draft,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.approved ?? value;
          }
          if (errors.approved?.hasError) {
            runValidationTasks("approved", value);
          }
          setApproved(value);
        }}
        onBlur={() => runValidationTasks("approved", approved)}
        errorMessage={errors.approved?.errorMessage}
        hasError={errors.approved?.hasError}
        {...getOverrideProps(overrides, "approved")}
      ></SwitchField>
      <SwitchField
        label="Draft"
        defaultChecked={false}
        isDisabled={false}
        isChecked={draft}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft: value,
              instantBookEnabled,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.draft ?? value;
          }
          if (errors.draft?.hasError) {
            runValidationTasks("draft", value);
          }
          setDraft(value);
        }}
        onBlur={() => runValidationTasks("draft", draft)}
        errorMessage={errors.draft?.errorMessage}
        hasError={errors.draft?.hasError}
        {...getOverrideProps(overrides, "draft")}
      ></SwitchField>
      <SwitchField
        label="Instant book enabled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={instantBookEnabled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled: value,
              categories,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.instantBookEnabled ?? value;
          }
          if (errors.instantBookEnabled?.hasError) {
            runValidationTasks("instantBookEnabled", value);
          }
          setInstantBookEnabled(value);
        }}
        onBlur={() =>
          runValidationTasks("instantBookEnabled", instantBookEnabled)
        }
        errorMessage={errors.instantBookEnabled?.errorMessage}
        hasError={errors.instantBookEnabled?.hasError}
        {...getOverrideProps(overrides, "instantBookEnabled")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories: values,
              tags,
            };
            const result = onChange(modelFields);
            values = result?.categories ?? values;
          }
          setCategories(values);
          setCurrentCategoriesValue("");
        }}
        currentFieldValue={currentCategoriesValue}
        label={"Categories"}
        items={categories}
        hasError={errors?.categories?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("categories", currentCategoriesValue)
        }
        errorMessage={errors?.categories?.errorMessage}
        setFieldValue={setCurrentCategoriesValue}
        inputFieldRef={categoriesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Categories"
          isRequired={false}
          isReadOnly={false}
          value={currentCategoriesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.categories?.hasError) {
              runValidationTasks("categories", value);
            }
            setCurrentCategoriesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("categories", currentCategoriesValue)
          }
          errorMessage={errors.categories?.errorMessage}
          hasError={errors.categories?.hasError}
          ref={categoriesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "categories")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              productTitle,
              productDescription,
              productType,
              productFulfillmentType,
              productImages,
              netPrice,
              pricingType,
              inventory,
              location,
              fulfillmentRadius,
              guestOnlyPurchase,
              minOrderQuantity,
              maxOrderQuantity,
              minOrderAmount,
              maxOrderAmount,
              maxGuests,
              duration,
              minimumNotice,
              unavailableDates,
              internalCode,
              unlimitedInventory,
              status,
              approved,
              draft,
              instantBookEnabled,
              categories,
              tags: values,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tags", currentTagsValue)
        }
        errorMessage={errors?.tags?.errorMessage}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          value={currentTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        ></TextField>
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
