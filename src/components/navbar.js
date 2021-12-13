import * as React from 'react';

//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import { Button, Link } from '@mui/material';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#004d40" }}>
                <Toolbar >
                    <Link href="/" sx={{display: "flex"}} underline="none" color="inherit">
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            style={{ backgroundColor: "white" }}
                            sx={{ p: 0, mr: 1, ml: 1 }}
                        >
                            <PublicTwoToneIcon color="success" fontSize="large" />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Green Cover Analysis
                        </Typography>
                    </Link>
                    <Button color="inherit" sx={{ ml: 18 }} startIcon={<ParkOutlinedIcon sx={{ mr: 0, pr: 0 }} />} href="/vegetation">Vegetation (Global)</Button>
                    <Button color="inherit" sx={{ ml: 5 }} startIcon={<TimelapseOutlinedIcon sx={{ mr: 0, pr: 0 }} />} href="/timelapse">NDVI Timelapse (Global)</Button>
                    <Button color="inherit" sx={{ ml: 5 }} startIcon={<LandscapeOutlinedIcon sx={{ mr: 0, pr: 0 }} />} href="/landcover">Land Cover (Maharashtra)</Button>
                    <Button color="inherit" sx={{ ml: 5 }} startIcon={<AirOutlinedIcon sx={{ mr: 0, pr: 0 }} />} href="/airQuality">Air Quality (Maharashtra)</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
