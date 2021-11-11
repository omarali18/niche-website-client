import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Navbar from '../../Shared/Navbar/Navbar';
import ShowAllCar from '../ShowAllCar/ShowAllCar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Footer from '../../Shared/Footer/Footer';

const AllCars = () => {
    const [dataLoad, setDataLoad] = useState(true)
    const [allCars, setAllCars] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/allcars")
            .then(res => res.json())
            .then(data => {
                setDataLoad(false)
                setAllCars(data)
            })
    }, [])
    return (
        <div className="homecars-body">
            <Navbar />
            <Box>
                <Typography variant="h2" sx={{ textAlign: "center", mt: 5, fontWeight: 700, color: "rgb(34, 95, 209)" }}>
                    The latest new car releases and expert reviews
                    All the ways to find car chemistry
                </Typography>
            </Box>
            {
                dataLoad ? <Box sx={{ textAlign: "center", mt: 10 }}><CircularProgress /></Box> : <div className="homeCars-container">

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            allCars.map(AllCar => <ShowAllCar
                                key={AllCar._id}
                                AllCar={AllCar}
                            />)
                        }
                    </Grid>

                </div>
            }
            <Footer />
        </div >
    );
};

export default AllCars;