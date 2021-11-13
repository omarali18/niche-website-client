import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import HomeCar from '../HomeCar/HomeCar';
import "./HomeCars.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const HomeCars = () => {
    const [homeCars, setHomeCars] = useState([])
    const [dataLoad, setDataLoad] = useState(true)
    let limit = 6
    useEffect(() => {
        fetch(`http://localhost:5000/allcars?datalimit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setDataLoad(false)
                setHomeCars(data)
            })
    }, [limit])

    return (
        <div className="homecars-body">
            {
                dataLoad ? <Box sx={{ textAlign: "center", mt: 10 }}><CircularProgress /></Box> : <div className="homeCars-container">
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            homeCars.map(homeCar => <HomeCar
                                key={homeCar._id}
                                homeCar={homeCar}
                            />)
                        }
                    </Grid>

                </div>
            }
        </div>
    );
};

export default HomeCars;