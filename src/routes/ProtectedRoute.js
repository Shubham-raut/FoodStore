import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
    const isVerifying = useSelector(state => state.authState.isVerifying);

    return (
        <Route
            {...rest}
            render={props =>
                isVerifying ? (
                    <div />
                ) : isAuthenticated ? (
                    <Component {...props} />
                ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: props.location }
                                }}
                            />
                        )
            }
        />
    )
};
export default ProtectedRoute;