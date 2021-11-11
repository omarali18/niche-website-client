import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <Box>
                <Typography variant="h2" sx={{ fontWeight: 900, color: "white" }}>
                    RESEARCH AND SHOP NEW CARS
                </Typography>
                <Typography variant="h5" sx={{ color: "white", p: 5 }}>
                    From cargo space to tech, tell us what you like and we'll find you cars to love.
                </Typography>
                <Link to="/allcars"><Button className="more-btn" sx={{ color: "white", border: 1, py: 3, px: 3, fontSize: '18px' }}>See More Car</Button></Link>
            </Box>
        </div>
    );
};

export default Banner;