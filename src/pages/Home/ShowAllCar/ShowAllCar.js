import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const ShowAllCar = ({ AllCar }) => {
    const { img, name, review, price, description } = AllCar
    console.log(AllCar);
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 1, height: "750px" }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{ width: "100%", border: "1px solid gray", margin: "0 auto" }}
                    image={img}
                />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ my: 5 }}>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        ৳ {price}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ my: 5 }}>
                        {description}
                    </Typography>
                    <Box sx={{ textAlign: "center", pb: 4 }}>
                        <Link to="/purchase"><Button variant="contained">Purchase Now</Button></Link>
                    </Box>
                </CardContent>
            </Card>

        </Grid>
    );
};

export default ShowAllCar;