import { Button, Card, CardContent, CircularProgress, Grid, Rating, Typography } from '@mui/material';
import  Box  from '@mui/material/Box';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Review from '../../Home/Review/Review';

const MenegeReviews = () => {
    const [allReview, setAllReview] = useState({})
    const [dataLoad, setDataLoad] = useState(true)

    useEffect( ()=>{
        fetch("https://blooming-sierra-49140.herokuapp.com/review")
        .then(res => res.json())
        .then(data =>{
            setAllReview(data)
            setDataLoad(false)
            console.log("hocche na",data);
        })
    } ,[])
    return (
        <div>
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ mt: 7 }} >
                    See our Reviews
                </Typography>
                {
                    dataLoad ? <Box sx={{ textAlign: "center", mt: 10 }}><CircularProgress /></Box> : <Box sx={{width:{md:'75%'},mx:"auto",mb:{md:15}}}>

                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                allReview.map(review => <Grid item xs={4} sm={4} md={4} key={review._id}>
                                    <Card  sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>
                                        <CardContent sx={{ textAlign: 'left' }}>
                                        <Rating name="half-rating-read" defaultValue={review.rating} precision={0.5} readOnly />
                                        <Typography variant="caption" component="div" sx={{color:"gray"}}>
                                            by {review.name} <span style={{color:'green', marginLeft:'10px'}}><i className="fas fa-clipboard-check"></i> Verified Purchase</span>
                                        </Typography> 
                                        <Typography variant="subtitle1" sx={{ my: 5 }}>
                                            {review.reviews}
                                        </Typography>
                                        <Button variant="contained">Delete Review</Button>
                                        </CardContent>
                                    </Card>
                                </Grid>)
                            }
                        </Grid>

                    </Box>
                }
            </Box>
        </div>
    );
};

{/*
     <Grid item xs={4} sm={4} md={6} >
<Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>

    <CardContent sx={{ textAlign: 'left' }}>
        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />        
        <Typography variant="caption" component="div" sx={{color:"gray"}}>
            by {name} <span style={{color:'green', marginLeft:'10px'}}><i className="fas fa-clipboard-check"></i> Verified Purchase</span>
        </Typography>

        <Typography variant="h6" sx={{ my: 5 }}>
            {reviews}
        </Typography>

    </CardContent>
</Card>

</Grid> 
*/}

export default MenegeReviews;