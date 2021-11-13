import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import admin from "../../../images/admin.jpg"
import { Button, TextField, Typography } from '@mui/material';

const Admin = () => {
    const [createAdmin, setCreateAdmin] = useState({})
    const handleOnBlur = e => {
        setCreateAdmin(e.target.value)
    }

    const handleOnSubmit = e => {

        console.log(createAdmin);
        // fetch("http://localhost:5000/order", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(orderDetails)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })


        e.preventDefault()
    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item >
                    <img src={admin} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ textAlign: "center", mt: 7 }}>
                        <Typography variant="h3">
                            Create an Admin
                        </Typography>
                    </Box>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: 1, my: 2 }}
                            onBlur={handleOnBlur}
                            id="outlined-basic"
                            // defaultValue="Enter Email"
                            label="Enter Email"
                            name="email"
                            type="email"
                            variant="outlined"
                        />
                        <Box sx={{ textAlign: "center" }}>
                            <Button sx={{ py: 2, px: 4 }} type="submit" variant="contained">Submit</Button>
                        </Box>
                    </form>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Admin;