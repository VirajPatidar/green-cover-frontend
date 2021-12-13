import React from 'react';

//IMAGE
import bannerlogo from '../images/bannerlogo.svg';

//MUI
import { Box, Button, Container, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeTable from './table';


const Home = () => {
    return (
        <Container>
            <Box sx={{ textAlign: "center" }}>
                <Box mt={4} pt={3} pb={3} style={{ backgroundColor: "#e0f2f1", borderRadius: "20px" }}>
                    <Box justifyContent="center">
                        <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                            Green Cover Analysis
                        </Box>
                    </Box>
                    <img src={bannerlogo} alt="banner" style={{ height: 300, width: 400 }} />
                    <Box mt={2}>
                        <Typography variant='body1' sx={{ mx: 4 }}>
                            <strong>Green Cover Analysis</strong> is a project build to estimate and analyze change in green cover using geo mapped photographs and satellite imagery. <br />
                            Our interactive maps along with charts and related data enables students, researchers, environmentalists, etc; to get a fairly accurate estimate of green cover and its relation with other environmental factors.
                        </Typography>
                    </Box>
                    <Box mt={4} fontSize="h6.fontSize" fontWeight={400} fontFamily="Monospace">
                        This project is built by: <br /> <Link href="https://github.com/VirajPatidar" color="inherit" target="_blank" rel="noopener" underline="hover">Viraj Patidar</Link> & <Link href="https://github.com/atharvadpatil" color="inherit" target="_blank" rel="noopener" underline="hover">Atharva Patil</Link>
                    </Box>
                    <Box mt={3}>
                        <Link href="https://github.com/VirajPatidar/green-cover-backend" color="inherit" target="_blank" rel="noopener" underline="hover">
                            <Button
                                variant="outlined"
                                display="inline"
                                color="inherit"
                                startIcon={<GitHubIcon />}
                            >
                                Source Code
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ my: 6 }}>
                <HomeTable />
            </Box>
        </Container>
    );
}

export default Home;