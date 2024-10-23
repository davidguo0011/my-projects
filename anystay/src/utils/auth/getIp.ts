import { setRecoil } from "recoil-nexus";
import { ipState } from "../../state/atoms/ip";
import { callApi } from "../api/api";

export const getIP = async () => {
    await callApi("get", `${process.env.REACT_APP_ENV}-anystay-auth`, "user/ip", {
        headers: {},
    })
        .then((res) => {
            setRecoil(ipState, { ip: res.sourceIp, geoData: res.geoData, ipBlocked: false, ipBlockedWarning: false });
        })
        .catch((err) => {
            setRecoil(ipState, { ip: null, geoData: null, ipBlocked: true, ipBlockedWarning: true });
        });
};
