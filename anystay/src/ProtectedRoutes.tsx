import React from "react";
import { loggedInState } from "./state/atoms/loggedIn";

import { getRecoil } from "recoil-nexus";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
    const loggedIn: boolean = getRecoil(loggedInState);

    if (!loggedIn) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
