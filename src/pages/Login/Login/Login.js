import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import NavBar from "../../Shared/Navbar/Navbar"

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const [error, setError] = useState("")

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value
        const newUser = { ...loginData }
        newUser[field] = value
        setLoginData(newUser)
    }
    console.log("uesr is", loginData);
    const handleOnSubmit = e => {
        // if (loginData.password !== loginData.password2) {
        //     setError("Password not match..!!")
        //     return
        // }
        // else {
        //     setError("")
        // }
        e.preventDefault()
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
                        sx={{ width: 1, my: 5 }}
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
                        name="password2"
                        type="password"
                        variant="outlined"
                    />
                    <Box sx={{ textAlign: "center" }}>
                        <Button sx={{ py: 2, px: 4, my: 5 }} type="submit" variant="contained">Login</Button>
                    </Box>
                </form>

            </Box>
        </div>
    );
};

export default Login;