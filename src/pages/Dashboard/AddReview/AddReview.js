import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import "./AddReview.css"
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const [reviews, setReview] = useState("")
    const { user } = useAuth()
    const handleOnBlur = e => {
        // const field = e.target.name
        // const value = e.target.value
        // const reviewIs = {}
        // reviewIs[field] = value
        setReview(e.target.value)
    }


    const handleOnSubmit = e => {
        const newReviews = { name: user.displayName, email: user.email, reviews }

        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    window.location.reload()
                }
            })


        e.preventDefault()
    }
    return (
        <div>
            <Box className="review-box">
                <Typography variant="h4" sx={{ textAlign: "center", mt: 7 }}>
                    Type a new review.
                </Typography>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        sx={{ width: 1, my: 2, height: 50 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        label="Write A Review"
                        name="review"
                        type="text"
                        variant="outlined"
                    />
                    <Box sx={{ textAlign: "center" }}>
                        <Button sx={{ py: 2, px: 4 }} type="submit" variant="contained">Submit</Button>
                    </Box>
                </form>
            </Box>
        </div>
    );
};

export default AddReview;