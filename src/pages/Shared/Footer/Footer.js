import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import "./Footer.css";

const Footer = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Box >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} sx={{ bgcolor: "#191A42", color: 'white', textAlign: "center" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} sx={{ mt: 5 }}>
                                <Typography variant="h3">
                                    Get In Touch
                                </Typography>
                                <Typography variant="h5" sx={{ my: 5 }}>
                                    (+1] 515-602-6843
                                </Typography>
                                <Typography variant="h4">
                                    Location
                                </Typography>
                                <Typography variant="h6" sx={{ my: 5 }}>
                                    3865 Nutters Barn Lane Clarion, IA 50525
                                </Typography>
                                <Typography variant="h4">
                                    Email
                                </Typography>
                                <Typography variant="h6" sx={{ my: 5 }}>
                                    kevineevans@rhyta.com5
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} sx={{ mt: 20 }}>
                                <Typography variant="h4">
                                    Opening Hours
                                </Typography>
                                <Typography variant="h5" sx={{ my: 2 }}>
                                    Sat Closed
                                </Typography>
                                <Typography variant="h5">
                                    Sun: 10am - 5pm
                                </Typography>
                                <Typography variant="h5" sx={{ my: 2 }}>
                                    Mon: 10am - 5pm
                                </Typography>
                                <Typography variant="h5">
                                    Tue: 10am - 5pm
                                </Typography>
                                <Typography variant="h5" sx={{ my: 2 }}>
                                    Wed: 10am - 5pm
                                </Typography>
                                <Typography variant="h5">
                                    Thu: 10am - 5pm
                                </Typography>
                                <Typography variant="h5" sx={{ my: 2 }}>
                                    Fri Closed
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ bgcolor: '#E22937' }}>
                        <div className="massege-form">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                    className="input-field"
                                    defaultValue="Full Name"
                                    {...register("example")} /> <br />


                                <input
                                    className="input-field"
                                    defaultValue="Your Email"
                                    {...register("exampleRequired")} /> <br />

                                <textarea
                                    className="textarea-field"
                                    defaultValue="Write your opinion." /> <br />

                                <Button type="submit" variant="contained" sx={{ bgcolor: "white", color: "black", p: 2, mb: 8 }}>SEND MASSEGE</Button>
                            </form>
                        </div>
                    </Grid>

                </Grid>
            </Box>
            <div className="copyright">
                <p>&copy; 2021 BD Developer. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;