import { useState } from "react";
import { callApi } from "../../../utils/api/api";
import PhoneInput from "react-phone-number-input";
import { EditProfileInputWrapper, EditProfileInputInfoWrapper, EditProfileInputInfoTitle, EditProfileInputInfoSubtitle, PhoneInputWrapper } from "../editProfileStyling";
import useClickOutside from "../../../hook/useClickOutside";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface EditProfilePhoneProps {
    toggleInput: (arg1: string, arg2: boolean) => void;
    active: boolean;
    setNewPhone: React.Dispatch<React.SetStateAction<string>>;
}

const EditProfilePhone: React.FC<EditProfilePhoneProps> = ({ active, toggleInput, setNewPhone }) => {
    const wrapperRef = useClickOutside(active, () => toggleInput("phoneInputActive", false));
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [invalidPhoneNum, setInvalidPhoneNum] = useState(false);
    const [existPhone, setExistPhone] = useState(false);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [phoneData, setPhoneData] = useState(userModel ? userModel.phone : "");

    const checkPhoneRegex = (phone_number: string) => {
        const phoneRegex = new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/);
        return phoneRegex.test(phone_number);
    };
    const onSubmit = async () => {
        //check phone
        if (!checkPhoneRegex(phoneData)) {
            setInvalidPhoneNum(true);
            return;
        }
        setIsContinueBtnLoading(true);
        await updateProfilePhone(phoneData);
    };
    const updateProfilePhone = async (phone: string) => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-auth`, "user/phone", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                phone: phone,
            },
        })
            .then((res) => {
                if (res.success) {
                    setNewPhone(phone);
                    toggleInput("phoneInputActive", false);
                    toggleInput("verifyUpdatePhoneInputActive", true);
                }
            })
            .catch((err) => {
                console.log(err);
                setInvalidPhoneNum(true);
                if (err.response.data.message === "PHONE_NUMBER_EXISTS") {
                    setExistPhone(true);
                }
            });
        setIsContinueBtnLoading(false);
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Close"}
            closePopup={() => toggleInput("phoneInputActive", false)}
            handleSave={onSubmit}
            disable={phoneData === userModel?.phone || phoneData === undefined ? true : false || isContinueBtnLoading}
            isContinueBtnLoading={isContinueBtnLoading}
        >
            <EditProfileInputWrapper ref={wrapperRef}>
                <EditProfileInputInfoWrapper>
                    <EditProfileInputInfoTitle>Contact number</EditProfileInputInfoTitle>
                    <EditProfileInputInfoSubtitle>Keep your contact number up to date so hosts can reach you.</EditProfileInputInfoSubtitle>
                </EditProfileInputInfoWrapper>
                <PhoneInputWrapper>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phoneData}
                        defaultCountry={"AU"}
                        style={{ height: "54px", borderRadius: "10px", border: `1px solid ${invalidPhoneNum ? ColorTheme.Red1.color : ColorTheme.Grey1.color}`, paddingLeft: "16px" }}
                        onChange={(value) => {
                            setPhoneData(value as string);
                            setInvalidPhoneNum(false);
                            setExistPhone(false);
                        }}
                    />
                    <p style={{ color: ColorTheme.Red1.color, fontSize: "14px", marginTop: "12px", textAlign: "left", visibility: invalidPhoneNum ? "visible" : "hidden" }}>
                        {existPhone ? "This number has already been used" : "Invalid phone number"}
                    </p>
                </PhoneInputWrapper>
            </EditProfileInputWrapper>
        </GlobalPopupContainerCenter>
    );
};
export default EditProfilePhone;
