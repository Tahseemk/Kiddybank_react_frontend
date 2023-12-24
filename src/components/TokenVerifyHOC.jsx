import React from "react";
import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";
import SessionOutModal from "./SessionOutModal";

const TokenVerifyHOC = (WrappedComponent) => {
    const HocComponent = ({ ...props }) => {
        const { accessToken } = useSelector((state) => state.auth);
        const { isExpired } = useJwt(accessToken);
        if (isExpired) {
            return <SessionOutModal />;
        } else {
            return <WrappedComponent {...props} isTokenExpired={isExpired} />;
        }
    };
    return HocComponent;
};
export default TokenVerifyHOC;

