import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import NavBar from "../../Shared/Navbar/Navbar"
import "./Register.css"
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';

const Register = () => {
    const [register, setRegister] = useState({})
    const [error, setError] = useState("")

    const history = useHistory()

    const { handleRegistetion } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value
        const newUser = { ...register }
        newUser[field] = value
        setRegister(newUser)
    }

    const handleOnSubmit = e => {
        if (register.password !== register.password2) {
            setError("Password not match..!!")
            return
        }
        else {
            setError("")
            handleRegistetion(register.email, register.password, register.name, history)
        }
        e.preventDefault()
    }
    return (
        <div>
            <NavBar />
            <Box className="form-container" sx={{ mx: 'auto', mt: 10 }}>
                <Typography variant="h4" sx={{ textAlign: "center", color: "blueviolet" }}>
                    Please Register
                </Typography>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        sx={{ width: 1, my: 3 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        label="name"
                        name="name"
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ width: 1 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        label="email"
                        name="email"
                        type="email"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ width: 1, my: 3 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        label="password"
                        name="password"
                        type="password"
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
                        <Link to="/login"><Button sx={{ py: 2, px: 4, my: 3 }}>Already Registered, please log in.</Button></Link>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Button sx={{ py: 2, px: 4 }} type="submit" variant="contained">Registation</Button>
                    </Box>
                </form>

            </Box>
        </div>
    );
};

export default Register;