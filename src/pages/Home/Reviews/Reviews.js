import { CircularProgress, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [allReview, setAllReview] = useState([])
    const [dataLoad, setDataLoad] = useState(true)
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => {
                setDataLoad(false)
                setAllReview(data)
            })
    }, [])
    return (
        <div>
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ mt: 7 }} >
                    See our Reviews
                </Typography>
                {
                    dataLoad ? <Box sx={{ textAlign: "center", mt: 10 }}><CircularProgress /></Box> : <div className="homeCars-container">

                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                allReview.map(review => <Review
                                    key={review._id}
                                    review={review}
                                />)
                            }
                        </Grid>

                    </div>
                }
            </Box>
            <hr style={{ width: "60%", margin: "0 auto", color: "gray" }} className="review-hr" />
        </div>
    );
};

export default Reviews;