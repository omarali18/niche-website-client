import React from 'react';
import { Redirect, Route } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../Hooks/useAuth';
import Box from '@mui/material/Box';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth()
    if (isLoading) {
        return <Box sx={{ textAlign: "center" }}><CircularProgress sx={{ mt: 8 }} color="secondary" /></Box>

    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ?
                    children
                    :
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />

            }
        />
    );
};

export default AdminRoute;