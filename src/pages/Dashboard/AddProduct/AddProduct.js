import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({})

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value
        const newUser = { ...newProduct }
        newUser[field] = value
        setNewProduct(newUser)
    }

    const handleOnSubmit = e => {
        fetch("https://blooming-sierra-49140.herokuapp.com/allcars", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    window.location.reload()
                }
            })
        e.preventDefault()
    }
    return (
        <div><Box className="form-container" sx={{ mx: 'auto', mt: 10 }}>
            <Typography variant="h4" sx={{ textAlign: "center", color: "blueviolet" }}>
                Add A New Product
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
                    label="price"
                    name="price"
                    type="text"
                    variant="outlined"
                />
                <TextField
                    sx={{ width: 1, my: 3 }}
                    onBlur={handleOnBlur}
                    id="outlined-basic"
                    label="description"
                    name="description"
                    type="text"
                    variant="outlined"
                />
                <TextField
                    sx={{ width: 1 }}
                    onBlur={handleOnBlur}
                    id="outlined-basic"
                    label="Add a image url from googel"
                    name="img"
                    type="text"
                    variant="outlined"
                />

                <Box sx={{ textAlign: "center", mt: 3 }}>
                    <Button sx={{ py: 2, px: 4 }} type="submit" variant="contained">Submit</Button>
                </Box>
            </form>

        </Box>
        </div>
    );
};

export default AddProduct;