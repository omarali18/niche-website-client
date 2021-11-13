import { Card, Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import React from 'react';

const Review = ({ review }) => {
    const { name, email, reviews } = review
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>

                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="h5" component="div">
                        Name: {name}
                    </Typography>

                    <Typography variant="h6" sx={{ my: 5 }}>
                        Email: {email}
                    </Typography>
                    <Typography variant="h6" sx={{ my: 5 }}>
                        reviews: {reviews}
                    </Typography>

                </CardContent>
            </Card>

        </Grid>
    );
};

export default Review;