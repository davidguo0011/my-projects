import { EditListingInternalWrapper, EditListingInternalInput, EditListingDesktopSubtitle, EditListingInternalEditImage } from "../editListingStyling";
import { useEffect, useState } from "react";
import { callApi } from "../../../utils/api/api";
import useClickOutside from "../../../hook/useClickOutside";
import { accessTokenSelector } from "../../../state/selectors/accessToken";
import { useRecoilState } from "recoil";
export default function EditInternalName({ internalName, setInternalName, listingID }: { internalName: string; setInternalName: (value: string) => void; listingID: string }) {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [value, setValue] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const wrapperRef = useClickOutside(isEditing, async () => {
        if (value !== internalName) {
            await updateInternalName(value);
        } else {
            setIsEditing(false);
        }
    });
    useEffect(() => {
        if (internalName !== null) {
            setValue(internalName);
        }
    }, [internalName]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleInputKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (value !== internalName) {
                await updateInternalName(value);
            } else {
                setIsEditing(false);
            }
        }
    };
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const updateInternalName = async (value: string) => {
        await callApi("post", `${process.env.REACT_APP_ENV}-anystay-listing`, `listing/internal-name`, {
            headers: {
                Authorization: accessToken,
                listingid: listingID,
            },
            body: {
                internalName: value,
            },
        })
            .then(async (res) => {
                setInternalName(value);
                setIsEditing(false);
            })
            .catch((err) => console.log(err));
    };

    return (
        <EditListingInternalWrapper ref={wrapperRef}>
            {isEditing ? (
                <>
                    <EditListingInternalInput type="text" value={value} onChange={handleInputChange} onKeyDown={handleInputKeyPress} placeholder={"Add internal name"} maxLength={100} />
                </>
            ) : (
                <>
                    <EditListingDesktopSubtitle>{value ? value : "Add internal name"}</EditListingDesktopSubtitle>
                    <EditListingInternalEditImage src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Edit.svg"} alt={"Internal edit icon"} onClick={handleEditClick} />
                </>
            )}
        </EditListingInternalWrapper>
    );
}
