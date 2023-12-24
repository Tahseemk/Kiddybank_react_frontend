import React, { useState } from "react";
import { Circles } from "react-loader-spinner";

const LoaderSpinner = () => {
    return (
        <div className="spinner--loader">
            <div className="loaderMain">
                <Circles
                    height="80"
                    width="80"
                    color="#ff6700"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperclassName=""
                    visible={true}
                />
            </div>
        </div>
    );
};

const LoaderHOC = (WrappedComponent) => {
    function HocComponent(props) {
        const [isLoading, setLoading] = useState(false);

        const setLoadingState = (isComponentLoading) => {
            setLoading(isComponentLoading);
        };

        return (
            <>
                {isLoading && <LoaderSpinner />}
                <WrappedComponent
                    {...props}
                    isLoading={isLoading}
                    setLoading={setLoadingState}
                />
            </>
        );
    }
    return HocComponent;
};

export default LoaderHOC;
