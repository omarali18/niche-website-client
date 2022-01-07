import { Card, Grid, Rating, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import React from 'react';

const Review = ({ review }) => {
    const { name, email, reviews,rating } = review
    return (
        <Grid item xs={4} sm={4} md={6} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>

                <CardContent sx={{ textAlign: 'left' }}>
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />        
                    <Typography variant="caption" component="div" sx={{color:"gray"}}>
                        by {name} <span style={{color:'green', marginLeft:'10px'}}><i className="fas fa-clipboard-check"></i> Verified Purchase</span>
                    </Typography>

                    <Typography variant="subtitle1" sx={{ my: 5 }}>
                        {reviews}
                    </Typography>

                </CardContent>
            </Card>

        </Grid>
    );
};

export default Review;