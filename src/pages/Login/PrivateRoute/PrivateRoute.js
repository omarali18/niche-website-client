import React from 'react';
import { Redirect, Route } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../Hooks/useAuth';
import Box from '@mui/material/Box';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <Box sx={{ textAlign: "center" }}><CircularProgress sx={{ mt: 8 }} color="secondary" /></Box>

    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ?
                    children
                    :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />

            }
        />
    );
};

export default PrivateRoute;