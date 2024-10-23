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
import { getUserModel } from "../graphql/queries";
import { updateUserModel } from "../graphql/mutations";
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
export default function UserModelUpdateForm(props) {
  const {
    id: idProp,
    userModel: userModelModelProp,
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
    email: "",
    phone: "",
    dateOfBirth: "",
    firstName: "",
    lastName: "",
    profileDescription: "",
    profilePicture: "",
    coverPicture: "",
    savedListings: [],
    username: "",
    identityID: "",
    guestMode: false,
    stripeCustomerID: "",
    phoneConfirmed: false,
    emailConfirmed: false,
    userIDConfirmed: false,
    privacyPolicyAccepted: false,
    identityDocuments: [],
    facebookURL: "",
    instagramURL: "",
    twitterURL: "",
    tiktokURL: "",
    overallAverage: "",
    communicationAverage: "",
    cleanlinessAverage: "",
    referredBy: "",
    referralCode: "",
    deactivated: false,
    suspended: false,
    suspendedUntil: "",
    suspendedReason: "",
    externalSignOn: false,
    externalSignOnCompleted: false,
    xiaozhuUserId: "",
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialValues.dateOfBirth
  );
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [profileDescription, setProfileDescription] = React.useState(
    initialValues.profileDescription
  );
  const [profilePicture, setProfilePicture] = React.useState(
    initialValues.profilePicture
  );
  const [coverPicture, setCoverPicture] = React.useState(
    initialValues.coverPicture
  );
  const [savedListings, setSavedListings] = React.useState(
    initialValues.savedListings
  );
  const [username, setUsername] = React.useState(initialValues.username);
  const [identityID, setIdentityID] = React.useState(initialValues.identityID);
  const [guestMode, setGuestMode] = React.useState(initialValues.guestMode);
  const [stripeCustomerID, setStripeCustomerID] = React.useState(
    initialValues.stripeCustomerID
  );
  const [phoneConfirmed, setPhoneConfirmed] = React.useState(
    initialValues.phoneConfirmed
  );
  const [emailConfirmed, setEmailConfirmed] = React.useState(
    initialValues.emailConfirmed
  );
  const [userIDConfirmed, setUserIDConfirmed] = React.useState(
    initialValues.userIDConfirmed
  );
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = React.useState(
    initialValues.privacyPolicyAccepted
  );
  const [identityDocuments, setIdentityDocuments] = React.useState(
    initialValues.identityDocuments
  );
  const [facebookURL, setFacebookURL] = React.useState(
    initialValues.facebookURL
  );
  const [instagramURL, setInstagramURL] = React.useState(
    initialValues.instagramURL
  );
  const [twitterURL, setTwitterURL] = React.useState(initialValues.twitterURL);
  const [tiktokURL, setTiktokURL] = React.useState(initialValues.tiktokURL);
  const [overallAverage, setOverallAverage] = React.useState(
    initialValues.overallAverage
  );
  const [communicationAverage, setCommunicationAverage] = React.useState(
    initialValues.communicationAverage
  );
  const [cleanlinessAverage, setCleanlinessAverage] = React.useState(
    initialValues.cleanlinessAverage
  );
  const [referredBy, setReferredBy] = React.useState(initialValues.referredBy);
  const [referralCode, setReferralCode] = React.useState(
    initialValues.referralCode
  );
  const [deactivated, setDeactivated] = React.useState(
    initialValues.deactivated
  );
  const [suspended, setSuspended] = React.useState(initialValues.suspended);
  const [suspendedUntil, setSuspendedUntil] = React.useState(
    initialValues.suspendedUntil
  );
  const [suspendedReason, setSuspendedReason] = React.useState(
    initialValues.suspendedReason
  );
  const [externalSignOn, setExternalSignOn] = React.useState(
    initialValues.externalSignOn
  );
  const [externalSignOnCompleted, setExternalSignOnCompleted] = React.useState(
    initialValues.externalSignOnCompleted
  );
  const [xiaozhuUserId, setXiaozhuUserId] = React.useState(
    initialValues.xiaozhuUserId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userModelRecord
      ? { ...initialValues, ...userModelRecord }
      : initialValues;
    setOwner(cleanValues.owner);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setDateOfBirth(cleanValues.dateOfBirth);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setProfileDescription(cleanValues.profileDescription);
    setProfilePicture(cleanValues.profilePicture);
    setCoverPicture(cleanValues.coverPicture);
    setSavedListings(cleanValues.savedListings ?? []);
    setCurrentSavedListingsValue("");
    setUsername(cleanValues.username);
    setIdentityID(cleanValues.identityID);
    setGuestMode(cleanValues.guestMode);
    setStripeCustomerID(cleanValues.stripeCustomerID);
    setPhoneConfirmed(cleanValues.phoneConfirmed);
    setEmailConfirmed(cleanValues.emailConfirmed);
    setUserIDConfirmed(cleanValues.userIDConfirmed);
    setPrivacyPolicyAccepted(cleanValues.privacyPolicyAccepted);
    setIdentityDocuments(cleanValues.identityDocuments ?? []);
    setCurrentIdentityDocumentsValue("");
    setFacebookURL(cleanValues.facebookURL);
    setInstagramURL(cleanValues.instagramURL);
    setTwitterURL(cleanValues.twitterURL);
    setTiktokURL(cleanValues.tiktokURL);
    setOverallAverage(cleanValues.overallAverage);
    setCommunicationAverage(cleanValues.communicationAverage);
    setCleanlinessAverage(cleanValues.cleanlinessAverage);
    setReferredBy(cleanValues.referredBy);
    setReferralCode(cleanValues.referralCode);
    setDeactivated(cleanValues.deactivated);
    setSuspended(cleanValues.suspended);
    setSuspendedUntil(cleanValues.suspendedUntil);
    setSuspendedReason(cleanValues.suspendedReason);
    setExternalSignOn(cleanValues.externalSignOn);
    setExternalSignOnCompleted(cleanValues.externalSignOnCompleted);
    setXiaozhuUserId(cleanValues.xiaozhuUserId);
    setErrors({});
  };
  const [userModelRecord, setUserModelRecord] =
    React.useState(userModelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getUserModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserModel
        : userModelModelProp;
      setUserModelRecord(record);
    };
    queryData();
  }, [idProp, userModelModelProp]);
  React.useEffect(resetStateValues, [userModelRecord]);
  const [currentSavedListingsValue, setCurrentSavedListingsValue] =
    React.useState("");
  const savedListingsRef = React.createRef();
  const [currentIdentityDocumentsValue, setCurrentIdentityDocumentsValue] =
    React.useState("");
  const identityDocumentsRef = React.createRef();
  const validations = {
    owner: [{ type: "Required" }],
    email: [],
    phone: [{ type: "Required" }],
    dateOfBirth: [],
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    profileDescription: [],
    profilePicture: [],
    coverPicture: [],
    savedListings: [],
    username: [],
    identityID: [],
    guestMode: [],
    stripeCustomerID: [],
    phoneConfirmed: [],
    emailConfirmed: [],
    userIDConfirmed: [],
    privacyPolicyAccepted: [],
    identityDocuments: [],
    facebookURL: [],
    instagramURL: [],
    twitterURL: [],
    tiktokURL: [],
    overallAverage: [],
    communicationAverage: [],
    cleanlinessAverage: [],
    referredBy: [],
    referralCode: [],
    deactivated: [],
    suspended: [],
    suspendedUntil: [],
    suspendedReason: [],
    externalSignOn: [],
    externalSignOnCompleted: [],
    xiaozhuUserId: [],
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
          owner,
          email: email ?? null,
          phone,
          dateOfBirth: dateOfBirth ?? null,
          firstName,
          lastName,
          profileDescription: profileDescription ?? null,
          profilePicture: profilePicture ?? null,
          coverPicture: coverPicture ?? null,
          savedListings: savedListings ?? null,
          username: username ?? null,
          identityID: identityID ?? null,
          guestMode: guestMode ?? null,
          stripeCustomerID: stripeCustomerID ?? null,
          phoneConfirmed: phoneConfirmed ?? null,
          emailConfirmed: emailConfirmed ?? null,
          userIDConfirmed: userIDConfirmed ?? null,
          privacyPolicyAccepted: privacyPolicyAccepted ?? null,
          identityDocuments: identityDocuments ?? null,
          facebookURL: facebookURL ?? null,
          instagramURL: instagramURL ?? null,
          twitterURL: twitterURL ?? null,
          tiktokURL: tiktokURL ?? null,
          overallAverage: overallAverage ?? null,
          communicationAverage: communicationAverage ?? null,
          cleanlinessAverage: cleanlinessAverage ?? null,
          referredBy: referredBy ?? null,
          referralCode: referralCode ?? null,
          deactivated: deactivated ?? null,
          suspended: suspended ?? null,
          suspendedUntil: suspendedUntil ?? null,
          suspendedReason: suspendedReason ?? null,
          externalSignOn: externalSignOn ?? null,
          externalSignOnCompleted: externalSignOnCompleted ?? null,
          xiaozhuUserId: xiaozhuUserId ?? null,
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
            query: updateUserModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userModelRecord.id,
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
      {...getOverrideProps(overrides, "UserModelUpdateForm")}
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
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
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
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email: value,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={true}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone: value,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={false}
        isReadOnly={false}
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth: value,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.dateOfBirth ?? value;
          }
          if (errors.dateOfBirth?.hasError) {
            runValidationTasks("dateOfBirth", value);
          }
          setDateOfBirth(value);
        }}
        onBlur={() => runValidationTasks("dateOfBirth", dateOfBirth)}
        errorMessage={errors.dateOfBirth?.errorMessage}
        hasError={errors.dateOfBirth?.hasError}
        {...getOverrideProps(overrides, "dateOfBirth")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName: value,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName: value,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Profile description"
        isRequired={false}
        isReadOnly={false}
        value={profileDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription: value,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.profileDescription ?? value;
          }
          if (errors.profileDescription?.hasError) {
            runValidationTasks("profileDescription", value);
          }
          setProfileDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("profileDescription", profileDescription)
        }
        errorMessage={errors.profileDescription?.errorMessage}
        hasError={errors.profileDescription?.hasError}
        {...getOverrideProps(overrides, "profileDescription")}
      ></TextField>
      <TextField
        label="Profile picture"
        isRequired={false}
        isReadOnly={false}
        value={profilePicture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture: value,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.profilePicture ?? value;
          }
          if (errors.profilePicture?.hasError) {
            runValidationTasks("profilePicture", value);
          }
          setProfilePicture(value);
        }}
        onBlur={() => runValidationTasks("profilePicture", profilePicture)}
        errorMessage={errors.profilePicture?.errorMessage}
        hasError={errors.profilePicture?.hasError}
        {...getOverrideProps(overrides, "profilePicture")}
      ></TextField>
      <TextField
        label="Cover picture"
        isRequired={false}
        isReadOnly={false}
        value={coverPicture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture: value,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.coverPicture ?? value;
          }
          if (errors.coverPicture?.hasError) {
            runValidationTasks("coverPicture", value);
          }
          setCoverPicture(value);
        }}
        onBlur={() => runValidationTasks("coverPicture", coverPicture)}
        errorMessage={errors.coverPicture?.errorMessage}
        hasError={errors.coverPicture?.hasError}
        {...getOverrideProps(overrides, "coverPicture")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings: values,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            values = result?.savedListings ?? values;
          }
          setSavedListings(values);
          setCurrentSavedListingsValue("");
        }}
        currentFieldValue={currentSavedListingsValue}
        label={"Saved listings"}
        items={savedListings}
        hasError={errors?.savedListings?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("savedListings", currentSavedListingsValue)
        }
        errorMessage={errors?.savedListings?.errorMessage}
        setFieldValue={setCurrentSavedListingsValue}
        inputFieldRef={savedListingsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Saved listings"
          isRequired={false}
          isReadOnly={false}
          value={currentSavedListingsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.savedListings?.hasError) {
              runValidationTasks("savedListings", value);
            }
            setCurrentSavedListingsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("savedListings", currentSavedListingsValue)
          }
          errorMessage={errors.savedListings?.errorMessage}
          hasError={errors.savedListings?.hasError}
          ref={savedListingsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "savedListings")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username: value,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Identity id"
        isRequired={false}
        isReadOnly={false}
        value={identityID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID: value,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.identityID ?? value;
          }
          if (errors.identityID?.hasError) {
            runValidationTasks("identityID", value);
          }
          setIdentityID(value);
        }}
        onBlur={() => runValidationTasks("identityID", identityID)}
        errorMessage={errors.identityID?.errorMessage}
        hasError={errors.identityID?.hasError}
        {...getOverrideProps(overrides, "identityID")}
      ></TextField>
      <SwitchField
        label="Guest mode"
        defaultChecked={false}
        isDisabled={false}
        isChecked={guestMode}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode: value,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.guestMode ?? value;
          }
          if (errors.guestMode?.hasError) {
            runValidationTasks("guestMode", value);
          }
          setGuestMode(value);
        }}
        onBlur={() => runValidationTasks("guestMode", guestMode)}
        errorMessage={errors.guestMode?.errorMessage}
        hasError={errors.guestMode?.hasError}
        {...getOverrideProps(overrides, "guestMode")}
      ></SwitchField>
      <TextField
        label="Stripe customer id"
        isRequired={false}
        isReadOnly={false}
        value={stripeCustomerID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID: value,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.stripeCustomerID ?? value;
          }
          if (errors.stripeCustomerID?.hasError) {
            runValidationTasks("stripeCustomerID", value);
          }
          setStripeCustomerID(value);
        }}
        onBlur={() => runValidationTasks("stripeCustomerID", stripeCustomerID)}
        errorMessage={errors.stripeCustomerID?.errorMessage}
        hasError={errors.stripeCustomerID?.hasError}
        {...getOverrideProps(overrides, "stripeCustomerID")}
      ></TextField>
      <SwitchField
        label="Phone confirmed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={phoneConfirmed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed: value,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.phoneConfirmed ?? value;
          }
          if (errors.phoneConfirmed?.hasError) {
            runValidationTasks("phoneConfirmed", value);
          }
          setPhoneConfirmed(value);
        }}
        onBlur={() => runValidationTasks("phoneConfirmed", phoneConfirmed)}
        errorMessage={errors.phoneConfirmed?.errorMessage}
        hasError={errors.phoneConfirmed?.hasError}
        {...getOverrideProps(overrides, "phoneConfirmed")}
      ></SwitchField>
      <SwitchField
        label="Email confirmed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={emailConfirmed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed: value,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.emailConfirmed ?? value;
          }
          if (errors.emailConfirmed?.hasError) {
            runValidationTasks("emailConfirmed", value);
          }
          setEmailConfirmed(value);
        }}
        onBlur={() => runValidationTasks("emailConfirmed", emailConfirmed)}
        errorMessage={errors.emailConfirmed?.errorMessage}
        hasError={errors.emailConfirmed?.hasError}
        {...getOverrideProps(overrides, "emailConfirmed")}
      ></SwitchField>
      <SwitchField
        label="User id confirmed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={userIDConfirmed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed: value,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.userIDConfirmed ?? value;
          }
          if (errors.userIDConfirmed?.hasError) {
            runValidationTasks("userIDConfirmed", value);
          }
          setUserIDConfirmed(value);
        }}
        onBlur={() => runValidationTasks("userIDConfirmed", userIDConfirmed)}
        errorMessage={errors.userIDConfirmed?.errorMessage}
        hasError={errors.userIDConfirmed?.hasError}
        {...getOverrideProps(overrides, "userIDConfirmed")}
      ></SwitchField>
      <SwitchField
        label="Privacy policy accepted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={privacyPolicyAccepted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted: value,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.privacyPolicyAccepted ?? value;
          }
          if (errors.privacyPolicyAccepted?.hasError) {
            runValidationTasks("privacyPolicyAccepted", value);
          }
          setPrivacyPolicyAccepted(value);
        }}
        onBlur={() =>
          runValidationTasks("privacyPolicyAccepted", privacyPolicyAccepted)
        }
        errorMessage={errors.privacyPolicyAccepted?.errorMessage}
        hasError={errors.privacyPolicyAccepted?.hasError}
        {...getOverrideProps(overrides, "privacyPolicyAccepted")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments: values,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            values = result?.identityDocuments ?? values;
          }
          setIdentityDocuments(values);
          setCurrentIdentityDocumentsValue("");
        }}
        currentFieldValue={currentIdentityDocumentsValue}
        label={"Identity documents"}
        items={identityDocuments}
        hasError={errors?.identityDocuments?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "identityDocuments",
            currentIdentityDocumentsValue
          )
        }
        errorMessage={errors?.identityDocuments?.errorMessage}
        setFieldValue={setCurrentIdentityDocumentsValue}
        inputFieldRef={identityDocumentsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Identity documents"
          isRequired={false}
          isReadOnly={false}
          value={currentIdentityDocumentsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.identityDocuments?.hasError) {
              runValidationTasks("identityDocuments", value);
            }
            setCurrentIdentityDocumentsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "identityDocuments",
              currentIdentityDocumentsValue
            )
          }
          errorMessage={errors.identityDocuments?.errorMessage}
          hasError={errors.identityDocuments?.hasError}
          ref={identityDocumentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "identityDocuments")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Facebook url"
        isRequired={false}
        isReadOnly={false}
        value={facebookURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL: value,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.facebookURL ?? value;
          }
          if (errors.facebookURL?.hasError) {
            runValidationTasks("facebookURL", value);
          }
          setFacebookURL(value);
        }}
        onBlur={() => runValidationTasks("facebookURL", facebookURL)}
        errorMessage={errors.facebookURL?.errorMessage}
        hasError={errors.facebookURL?.hasError}
        {...getOverrideProps(overrides, "facebookURL")}
      ></TextField>
      <TextField
        label="Instagram url"
        isRequired={false}
        isReadOnly={false}
        value={instagramURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL: value,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.instagramURL ?? value;
          }
          if (errors.instagramURL?.hasError) {
            runValidationTasks("instagramURL", value);
          }
          setInstagramURL(value);
        }}
        onBlur={() => runValidationTasks("instagramURL", instagramURL)}
        errorMessage={errors.instagramURL?.errorMessage}
        hasError={errors.instagramURL?.hasError}
        {...getOverrideProps(overrides, "instagramURL")}
      ></TextField>
      <TextField
        label="Twitter url"
        isRequired={false}
        isReadOnly={false}
        value={twitterURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL: value,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.twitterURL ?? value;
          }
          if (errors.twitterURL?.hasError) {
            runValidationTasks("twitterURL", value);
          }
          setTwitterURL(value);
        }}
        onBlur={() => runValidationTasks("twitterURL", twitterURL)}
        errorMessage={errors.twitterURL?.errorMessage}
        hasError={errors.twitterURL?.hasError}
        {...getOverrideProps(overrides, "twitterURL")}
      ></TextField>
      <TextField
        label="Tiktok url"
        isRequired={false}
        isReadOnly={false}
        value={tiktokURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL: value,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.tiktokURL ?? value;
          }
          if (errors.tiktokURL?.hasError) {
            runValidationTasks("tiktokURL", value);
          }
          setTiktokURL(value);
        }}
        onBlur={() => runValidationTasks("tiktokURL", tiktokURL)}
        errorMessage={errors.tiktokURL?.errorMessage}
        hasError={errors.tiktokURL?.hasError}
        {...getOverrideProps(overrides, "tiktokURL")}
      ></TextField>
      <TextField
        label="Overall average"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={overallAverage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage: value,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.overallAverage ?? value;
          }
          if (errors.overallAverage?.hasError) {
            runValidationTasks("overallAverage", value);
          }
          setOverallAverage(value);
        }}
        onBlur={() => runValidationTasks("overallAverage", overallAverage)}
        errorMessage={errors.overallAverage?.errorMessage}
        hasError={errors.overallAverage?.hasError}
        {...getOverrideProps(overrides, "overallAverage")}
      ></TextField>
      <TextField
        label="Communication average"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={communicationAverage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage: value,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.communicationAverage ?? value;
          }
          if (errors.communicationAverage?.hasError) {
            runValidationTasks("communicationAverage", value);
          }
          setCommunicationAverage(value);
        }}
        onBlur={() =>
          runValidationTasks("communicationAverage", communicationAverage)
        }
        errorMessage={errors.communicationAverage?.errorMessage}
        hasError={errors.communicationAverage?.hasError}
        {...getOverrideProps(overrides, "communicationAverage")}
      ></TextField>
      <TextField
        label="Cleanliness average"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cleanlinessAverage}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage: value,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.cleanlinessAverage ?? value;
          }
          if (errors.cleanlinessAverage?.hasError) {
            runValidationTasks("cleanlinessAverage", value);
          }
          setCleanlinessAverage(value);
        }}
        onBlur={() =>
          runValidationTasks("cleanlinessAverage", cleanlinessAverage)
        }
        errorMessage={errors.cleanlinessAverage?.errorMessage}
        hasError={errors.cleanlinessAverage?.hasError}
        {...getOverrideProps(overrides, "cleanlinessAverage")}
      ></TextField>
      <TextField
        label="Referred by"
        isRequired={false}
        isReadOnly={false}
        value={referredBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy: value,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.referredBy ?? value;
          }
          if (errors.referredBy?.hasError) {
            runValidationTasks("referredBy", value);
          }
          setReferredBy(value);
        }}
        onBlur={() => runValidationTasks("referredBy", referredBy)}
        errorMessage={errors.referredBy?.errorMessage}
        hasError={errors.referredBy?.hasError}
        {...getOverrideProps(overrides, "referredBy")}
      ></TextField>
      <TextField
        label="Referral code"
        isRequired={false}
        isReadOnly={false}
        value={referralCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode: value,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.referralCode ?? value;
          }
          if (errors.referralCode?.hasError) {
            runValidationTasks("referralCode", value);
          }
          setReferralCode(value);
        }}
        onBlur={() => runValidationTasks("referralCode", referralCode)}
        errorMessage={errors.referralCode?.errorMessage}
        hasError={errors.referralCode?.hasError}
        {...getOverrideProps(overrides, "referralCode")}
      ></TextField>
      <SwitchField
        label="Deactivated"
        defaultChecked={false}
        isDisabled={false}
        isChecked={deactivated}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated: value,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.deactivated ?? value;
          }
          if (errors.deactivated?.hasError) {
            runValidationTasks("deactivated", value);
          }
          setDeactivated(value);
        }}
        onBlur={() => runValidationTasks("deactivated", deactivated)}
        errorMessage={errors.deactivated?.errorMessage}
        hasError={errors.deactivated?.hasError}
        {...getOverrideProps(overrides, "deactivated")}
      ></SwitchField>
      <SwitchField
        label="Suspended"
        defaultChecked={false}
        isDisabled={false}
        isChecked={suspended}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended: value,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.suspended ?? value;
          }
          if (errors.suspended?.hasError) {
            runValidationTasks("suspended", value);
          }
          setSuspended(value);
        }}
        onBlur={() => runValidationTasks("suspended", suspended)}
        errorMessage={errors.suspended?.errorMessage}
        hasError={errors.suspended?.hasError}
        {...getOverrideProps(overrides, "suspended")}
      ></SwitchField>
      <TextField
        label="Suspended until"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={suspendedUntil && convertToLocal(new Date(suspendedUntil))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil: value,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.suspendedUntil ?? value;
          }
          if (errors.suspendedUntil?.hasError) {
            runValidationTasks("suspendedUntil", value);
          }
          setSuspendedUntil(value);
        }}
        onBlur={() => runValidationTasks("suspendedUntil", suspendedUntil)}
        errorMessage={errors.suspendedUntil?.errorMessage}
        hasError={errors.suspendedUntil?.hasError}
        {...getOverrideProps(overrides, "suspendedUntil")}
      ></TextField>
      <TextField
        label="Suspended reason"
        isRequired={false}
        isReadOnly={false}
        value={suspendedReason}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason: value,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.suspendedReason ?? value;
          }
          if (errors.suspendedReason?.hasError) {
            runValidationTasks("suspendedReason", value);
          }
          setSuspendedReason(value);
        }}
        onBlur={() => runValidationTasks("suspendedReason", suspendedReason)}
        errorMessage={errors.suspendedReason?.errorMessage}
        hasError={errors.suspendedReason?.hasError}
        {...getOverrideProps(overrides, "suspendedReason")}
      ></TextField>
      <SwitchField
        label="External sign on"
        defaultChecked={false}
        isDisabled={false}
        isChecked={externalSignOn}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn: value,
              externalSignOnCompleted,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.externalSignOn ?? value;
          }
          if (errors.externalSignOn?.hasError) {
            runValidationTasks("externalSignOn", value);
          }
          setExternalSignOn(value);
        }}
        onBlur={() => runValidationTasks("externalSignOn", externalSignOn)}
        errorMessage={errors.externalSignOn?.errorMessage}
        hasError={errors.externalSignOn?.hasError}
        {...getOverrideProps(overrides, "externalSignOn")}
      ></SwitchField>
      <SwitchField
        label="External sign on completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={externalSignOnCompleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted: value,
              xiaozhuUserId,
            };
            const result = onChange(modelFields);
            value = result?.externalSignOnCompleted ?? value;
          }
          if (errors.externalSignOnCompleted?.hasError) {
            runValidationTasks("externalSignOnCompleted", value);
          }
          setExternalSignOnCompleted(value);
        }}
        onBlur={() =>
          runValidationTasks("externalSignOnCompleted", externalSignOnCompleted)
        }
        errorMessage={errors.externalSignOnCompleted?.errorMessage}
        hasError={errors.externalSignOnCompleted?.hasError}
        {...getOverrideProps(overrides, "externalSignOnCompleted")}
      ></SwitchField>
      <TextField
        label="Xiaozhu user id"
        isRequired={false}
        isReadOnly={false}
        value={xiaozhuUserId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              email,
              phone,
              dateOfBirth,
              firstName,
              lastName,
              profileDescription,
              profilePicture,
              coverPicture,
              savedListings,
              username,
              identityID,
              guestMode,
              stripeCustomerID,
              phoneConfirmed,
              emailConfirmed,
              userIDConfirmed,
              privacyPolicyAccepted,
              identityDocuments,
              facebookURL,
              instagramURL,
              twitterURL,
              tiktokURL,
              overallAverage,
              communicationAverage,
              cleanlinessAverage,
              referredBy,
              referralCode,
              deactivated,
              suspended,
              suspendedUntil,
              suspendedReason,
              externalSignOn,
              externalSignOnCompleted,
              xiaozhuUserId: value,
            };
            const result = onChange(modelFields);
            value = result?.xiaozhuUserId ?? value;
          }
          if (errors.xiaozhuUserId?.hasError) {
            runValidationTasks("xiaozhuUserId", value);
          }
          setXiaozhuUserId(value);
        }}
        onBlur={() => runValidationTasks("xiaozhuUserId", xiaozhuUserId)}
        errorMessage={errors.xiaozhuUserId?.errorMessage}
        hasError={errors.xiaozhuUserId?.hasError}
        {...getOverrideProps(overrides, "xiaozhuUserId")}
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
          isDisabled={!(idProp || userModelModelProp)}
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
              !(idProp || userModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
