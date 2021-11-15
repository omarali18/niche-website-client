import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [myAllOrders, setMyAllOrders] = useState([])
    const [dataLoad, setDataLoad] = useState(true)

    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://blooming-sierra-49140.herokuapp.com/order?myOrder=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setDataLoad(false)
                setMyAllOrders(data);
            })
    }, [user.email])

    const handleDeleteOrder = (id, confirm) => {
        if (confirm) {
            fetch(`https://blooming-sierra-49140.herokuapp.com/order?id=${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        alert("Delete successfully.")
                        window.location.reload()
                    }
                })
        }

    }

    return (
        <div>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3">
                    All of your orders
                </Typography>
                {
                    dataLoad ? <Box sx={{ textAlign: "center", mt: 10 }}><CircularProgress /></Box> : <div className="homeCars-container">

                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                myAllOrders.map(myOrder => <MyOrder
                                    key={myOrder._id}
                                    myOrder={myOrder}
                                    handleDeleteOrder={handleDeleteOrder}
                                />)
                            }
                        </Grid>

                    </div>
                }
            </Box>
        </div>
    );
};

export default MyOrders;