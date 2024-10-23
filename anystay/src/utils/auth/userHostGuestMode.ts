import { getRecoil, setRecoil } from "recoil-nexus";
import { userModelState } from "../../state/atoms/userModel";

// export const toggleUserHostGuestMode = () => {
//     const userModelRecoilState = getRecoil(userModelState);
//     let userModel = JSON.parse(JSON.stringify(userModelRecoilState));
//     userModel.guestMode = !userModel.guestMode;
//     setRecoil(userModelState, userModel);
// };
export const setUserHostGuestMode = (value: boolean) => {
    const userModelRecoilState = getRecoil(userModelState);
    let userModel = JSON.parse(JSON.stringify(userModelRecoilState));
    userModel.guestMode = value;
    setRecoil(userModelState, userModel);
};
