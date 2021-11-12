import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import NavBar from "../../Shared/Navbar/Navbar"
import useFirebase from '../../../Hooks/useFirebase';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const [error, setError] = useState("")
    const { loginByGoogle, loginEmailPassword } = useAuth()

    const location = useLocation()
    const redirect = location?.state?.from || "/home"
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value
        const newUser = { ...loginData }
        newUser[field] = value
        setLoginData(newUser)
    }
    console.log("uesr is", loginData);
    const handleOnSubmit = e => {
        loginEmailPassword(loginData.email, loginData.password, redirect, history)
        e.preventDefault()
    }
    const handleGoogleLogin = () => {
        loginByGoogle(redirect, history)
    }
    return (
        <div>
            <NavBar />
            <Box className="form-container" sx={{ mx: 'auto', mt: 10 }}>
                <Typography variant="h4" sx={{ textAlign: "center", color: "blueviolet" }}>
                    Please Login
                </Typography>
                <form onSubmit={handleOnSubmit}>

                    <TextField
                        sx={{ width: 1, my: 3 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        label="email"
                        name="email"
                        type="email"
                        variant="outlined"
                    />
                    <Typography style={{ color: 'red' }} variant="caption" display="block" gutterBottom>
                        {error}
                    </Typography>
                    <TextField
                        sx={{ width: 1 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        label="password"
                        name="password"
                        type="password"
                        variant="outlined"
                    />

                    <Box sx={{ textAlign: "center" }}>
                        <Link to="/register"><Button sx={{ py: 2, px: 4, my: 3 }}>New user? Please Register</Button></Link>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Button sx={{ py: 2, px: 4 }} type="submit" variant="contained">Login</Button>
                    </Box>
                </form>
                <Box sx={{ textAlign: "center" }}>
                    <Button onClick={handleGoogleLogin} sx={{ py: 2, px: 4, my: 5 }} type="submit" variant="contained">Login With Google</Button>
                </Box>
            </Box>
        </div>
    );
};

export default Login;