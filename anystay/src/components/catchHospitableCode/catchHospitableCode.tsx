import { useRecoilState } from "recoil";
import { callApi } from "../../utils/api/api";
import { accessTokenSelector } from "../../state/selectors/accessToken";
import { userHostModelSelector } from "../../state/selectors/userHostModel";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface CatchHospitableCodeProps {
    onSuccess: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const CatchHospitableCode = ({ onSuccess }: CatchHospitableCodeProps) => {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenSelector);
    const [userHostModel, setUserHostModel] = useRecoilState(userHostModelSelector);

    const location = useLocation();

    const initHosptiableUser: (code: string) => Promise<boolean> = async (code: string) => {
        const response = await callApi("post", `${process.env.REACT_APP_ENV}-anystay-hospitable`, `user/hospitable/init`, {
            headers: {
                Authorization: accessToken,
            },
            body: {
                userHostModelId: userHostModel?.id,
                authCode: code,
            },
        });
        return response?.success;
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("hospitable_code");
        let result: any;
        if (code) {
            result = initHosptiableUser(code);
        }
        const timer = setTimeout(() => {
            onSuccess(result);
        }, 1000);
        return () => clearTimeout(timer);
    }, [location]);

    return null;
};

export default CatchHospitableCode;
