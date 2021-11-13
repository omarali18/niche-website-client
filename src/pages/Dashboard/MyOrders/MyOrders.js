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
        fetch(`http://localhost:5000/order?myOrder=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setDataLoad(false)
                setMyAllOrders(data);
            })
    }, [])

    const handleDeleteOrder = (id, confirm) => {
        console.log("delete this -----", id);
        console.log("nai nai nai-----", confirm);
        if (confirm) {
            fetch(`http://localhost:5000/order?id=${id}`, {
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
        // fetch(`http://localhost:5000/order?id=${id}`, {
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.acknowledged) {
        //             alert("Delete successfully.")
        //         }
        //     })
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