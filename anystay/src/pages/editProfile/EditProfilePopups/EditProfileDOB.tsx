import { useState } from "react";
import {
    EditProfileInputWrapper,
    EditProfileInputInfoWrapper,
    EditProfileInputInfoTitle,
    EditProfileInputInfoSubtitle,
    EditProfileInputDOBWrapper,
    EditProfileInputDOB,
    DOBDatepickerWrapper,
} from "../editProfileStyling";
import { Datepicker } from "@mobiscroll/react";

import useClickOutside from "../../../hook/useClickOutside";
import { userModelSelector } from "../../../state/selectors/userModel";
import { useRecoilState } from "recoil";
import { callApi } from "../../../utils/api/api";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import GlobalPopupContainerCenter from "../../../components/globalPopup/GlobalPopupContainerCenter";

interface EditPopupProps {
    toggleInput: (arg1: string, arg2: boolean) => void;
    active: boolean;
}

const EditProfileDOB: React.FC<EditPopupProps> = ({ active, toggleInput }) => {
    const wrapperRef = useClickOutside(active, () => toggleInput("dobInputActive", false), true);
    const [userModel, setUserModel] = useRecoilState(userModelSelector);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const dateOfBirth = userModel?.dateOfBirth;

    const [dobInput, setDobInput] = useState(false);
    const [dobInputData, setDobInputData] = useState({
        month: dateOfBirth ? Number(dateOfBirth.split("/")[1]) : "",
        day: dateOfBirth ? Number(dateOfBirth.split("/")[0]) : "",
        year: dateOfBirth ? Number(dateOfBirth.split("/")[2]) : "",
    });
    const [dateOfBirthData, setDateOfBirthData] = useState(dateOfBirth ? new Date(Number(dateOfBirth.split("/")[2]), Number(dateOfBirth.split("/")[1]) - 1, Number(dateOfBirth.split("/")[0])) : null);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);
    const [invalidDate, setInvalidDate] = useState(false);

    const checkDisabled = () => {
        const previousDay = dateOfBirth ? Number(dateOfBirth.split("/")[0]) : "";
        const previousMonth = dateOfBirth ? Number(dateOfBirth.split("/")[1]) : "";
        const previousYear = dateOfBirth ? Number(dateOfBirth.split("/")[2]) : "";
        if (!dobInputData.day || !dobInputData.month || !dobInputData.year) {
            return true;
        }
        if (Number(dobInputData.day) === previousDay && Number(dobInputData.month) === previousMonth && Number(dobInputData.year) === previousYear) {
            return true;
        }
        if (isContinueBtnLoading) {
            return true;
        }
        return false;
    };
    const updateProfileDOB = async (dob: string) => {
        // Update users dob in their stripe account
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-user`, "user/dob", {
            headers: {
                Authorization: accessToken,
            },
            body: {
                dob: dob,
                day: Number(dob.split("/")[0]),
                month: Number(dob.split("/")[1]),
                year: Number(dob.split("/")[2]),
            },
        })
            .then((res) => {
                const userModelCopy = JSON.parse(JSON.stringify(userModel));
                userModelCopy.dateOfBirth = dob;
                setUserModel(userModelCopy);
            })
            .catch((err) => console.log(err));
    };

    const handleSave = async () => {
        if (isNaN(Number(new Date(`${dobInputData.year}/${dobInputData.month}/${dobInputData.day}`)))) {
            setInvalidDate(true);
            return;
        }
        let yearsOld = (new Date().getTime() - new Date(Number(dobInputData.year), Number(dobInputData.month) - 1, Number(dobInputData.day)).getTime()) / (1000 * 3600 * 24 * 365);
        if (Math.floor(yearsOld) >= 18 && Math.floor(yearsOld) <= 120) {
            setIsContinueBtnLoading(true);
            await updateProfileDOB(`${String(dobInputData.day).padStart(2, "0")}/${String(dobInputData.month).padStart(2, "0")}/${dobInputData.year}`);
            toggleInput("dobInputActive", false);
        } else {
            setInvalidDate(true);
        }
    };

    return (
        <GlobalPopupContainerCenter
            ref={wrapperRef}
            backBtnType={"Close"}
            closePopup={() => toggleInput("dobInputActive", false)}
            handleSave={handleSave}
            disable={checkDisabled()}
            isContinueBtnLoading={isContinueBtnLoading}
            btnColor="black"
        >
            <EditProfileInputWrapper>
                <EditProfileInputInfoWrapper>
                    <EditProfileInputInfoTitle>Birthdate</EditProfileInputInfoTitle>
                    <EditProfileInputInfoSubtitle invalid={invalidDate}>
                        {invalidDate ? "Please enter a valid date." : "Your date of birth must match your Government ID."}
                    </EditProfileInputInfoSubtitle>
                </EditProfileInputInfoWrapper>
                <EditProfileInputDOBWrapper>
                    <EditProfileInputDOB
                        type="number"
                        style={{ width: "25%" }}
                        placeholder="DD"
                        value={dobInputData.day}
                        onChange={(e) => {
                            setInvalidDate(false);
                            if (e.target.value.length <= 2) {
                                setDobInputData({ ...dobInputData, day: e.target.value });
                            }
                        }}
                        onClick={() => {
                            if (window.innerWidth < 1280) {
                                setDobInput(true);
                            }
                        }}
                    />
                    <EditProfileInputDOB
                        type="number"
                        style={{ width: "25%" }}
                        placeholder="MM"
                        value={dobInputData.month}
                        onChange={(e) => {
                            setInvalidDate(false);
                            if (e.target.value.length <= 2) {
                                setDobInputData({ ...dobInputData, month: e.target.value });
                            }
                        }}
                        onClick={() => {
                            if (window.innerWidth < 1280) {
                                setDobInput(true);
                            }
                        }}
                    />
                    <EditProfileInputDOB
                        type="number"
                        style={{ width: "50%" }}
                        placeholder="YYYY"
                        value={dobInputData.year}
                        onChange={(e) => {
                            setInvalidDate(false);
                            if (e.target.value.length <= 4) {
                                setDobInputData({ ...dobInputData, year: e.target.value });
                            }
                        }}
                        onClick={() => {
                            if (window.innerWidth < 768) {
                                setDobInput(true);
                            }
                        }}
                    />
                </EditProfileInputDOBWrapper>
            </EditProfileInputWrapper>

            <DOBDatepickerWrapper>
                <Datepicker
                    controls={["date"]}
                    dateFormat={"DD/MM/YYYY"}
                    touchUi={true}
                    value={dateOfBirthData}
                    onChange={(date: { value: Date }) => {
                        setDateOfBirthData(date.value);
                        setDobInputData({
                            day: String(date.value.getDate()).padStart(2, "0"),
                            month: String(date.value.getMonth() + 1).padStart(2, "0"),
                            year: date.value.getFullYear(),
                        });
                        setDobInput(false);
                    }}
                    isOpen={dobInput}
                    onCancel={() => setDobInput(false)}
                    theme={"material"}
                    cssClass={"#dob-datepicker-wrapper"}
                    responsive={{
                        xsmall: {
                            display: "bottom",
                        },
                        medium: {
                            display: "center",
                        },
                    }}
                    inputComponent={false}
                />
            </DOBDatepickerWrapper>
        </GlobalPopupContainerCenter>
    );
};
export default EditProfileDOB;
