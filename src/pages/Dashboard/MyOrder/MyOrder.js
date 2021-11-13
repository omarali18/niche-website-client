import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from '@mui/material';
import DeleteModal from '../../Shared/DeleteModal/DeleteModal';

const MyOrder = ({ myOrder, handleDeleteOrder }) => {
    const { name, email, carName, carPrice, date, _id } = myOrder


    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    // console.log(myOrder);
    // const handleDeleteOrder = (id) => {
    //     console.log(id);
    // fetch("")
    // }
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 1 }}>
                {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{ width: "100%", border: "1px solid gray", margin: "0 auto" }}
                    image={img}
                /> */}
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="h5" component="div">
                        Name: {name}
                    </Typography>

                    <Typography variant="h6" sx={{ my: 5 }}>
                        Email: {email}
                    </Typography>
                    <Typography variant="h6" sx={{ my: 5 }}>
                        Order Date: {date}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ my: 5 }}>
                        Car Name: {carName}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ my: 5 }}>
                        Price: ৳ {carPrice}
                    </Typography>
                    <Box sx={{ textAlign: "center", pb: 4 }}>
                        <Button onClick={handleOpen} variant="contained" sx={{ bgcolor: "rgb(247, 86, 46)" }}>Delete Order</Button>
                    </Box>
                </CardContent>
            </Card>
            <DeleteModal
                openModal={openModal}
                handleClose={handleClose}
                id={_id}
                handleDeleteOrder={handleDeleteOrder}
            />

        </Grid>
    );
};

export default MyOrder;