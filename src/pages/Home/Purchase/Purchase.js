import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import NavBar from "../../Shared/Navbar/Navbar"
import Footer from "../../Shared/Footer/Footer"
import "./Purchase.css"

const Purchase = () => {
    const [singleCar, setSingleCar] = useState({})
    const idIs = useParams();
    const history = useHistory()

    const { user } = useAuth()
    const loginUser = { name: user.displayName, email: user.email }

    const [order, setOrder] = useState(loginUser)



    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value
        const newUser = { ...order }
        newUser[field] = value
        setOrder(newUser)
    }
    useEffect(() => {
        fetch(`https://blooming-sierra-49140.herokuapp.com/allcars?id=${idIs.id}`)
            .then(res => res.json())
            .then(data => {
                setSingleCar(data);
            })
    }, [idIs])


    const handleOnSubmit = e => {
        const date = new Date()
        const orderDetails = {
            ...order,
            carName: singleCar.name,
            carPrice: singleCar.price,
            date: date.toLocaleDateString()
        }

        fetch("https://blooming-sierra-49140.herokuapp.com/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order successfully get.")
                    history.push("/")
                };
            })


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
                        type="text"
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

                    <Box sx={{ textAlign: "center" }}>
                        <Button sx={{ py: 2, px: 4 }} type="submit" variant="contained">Place Order</Button>
                    </Box>
                </form>
            </Box>
            <Footer />
        </div>
    );
};

export default Purchase;