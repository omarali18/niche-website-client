import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import NavBar from "../../Shared/Navbar/Navbar"
import Footer from "../../Shared/Footer/Footer"
import "./Purchase.css"

const Purchase = () => {

    const [order, setOrder] = useState({})
    const [error, setError] = useState("")

    const { user } = useAuth()


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value
        const newUser = { ...order }
        newUser[field] = value
        setOrder(newUser)
    }

    console.log(user);
    const handleOnSubmit = e => {
        // if (register.password !== register.password2) {
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
            <Box className="form-container" sx={{ mx: 'auto', my: 10 }}>
                <Typography variant="h4" sx={{ textAlign: "center", color: "purple" }}>
                    Please Enter Your Information
                </Typography>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        sx={{ width: 1, my: 3 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        defaultValue={user.displayName}
                        label="name"
                        name="name"
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ width: 1 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        defaultValue={user.email}
                        label="email"
                        name="email"
                        type="email"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ width: 1, my: 3 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        label="number"
                        name="number"
                        type="number"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ width: 1 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        label="city"
                        name="city"
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ width: 1, my: 3 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        label="district"
                        name="district"
                        type="text"
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
                        <Link to="/login"><Button sx={{ py: 2, px: 4, my: 3 }}>Already Registered, please log in.</Button></Link>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Button sx={{ py: 2, px: 4 }} type="submit" variant="contained">Registation</Button>
                    </Box>
                </form>
            </Box>
            <Footer />
        </div>
    );
};

export default Purchase;