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
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
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
                            Green Cover
                        </Typography>
                    </Link>
                    <Button color="inherit" sx={{ ml: 13 }} startIcon={<ParkOutlinedIcon sx={{ mr: 0, pr: 0 }} />} href="/vegetation">Vegetation</Button>
                    <Button color="inherit" sx={{ ml: 5 }} startIcon={<TimelapseOutlinedIcon sx={{ mr: 0, pr: 0 }} />} href="/timelapse">NDVI Timelapse</Button>
                    <Button color="inherit" sx={{ ml: 5 }} startIcon={<LandscapeOutlinedIcon sx={{ mr: 0, pr: 0 }} />} href="/landcover">Land Cover</Button>
                    <Button color="inherit" sx={{ ml: 5 }} startIcon={<AirOutlinedIcon sx={{ mr: 0, pr: 0 }} />} href="/airQuality">Air Quality</Button>
                    <Button color="inherit" sx={{ ml: 5 }} startIcon={<VolunteerActivismIcon sx={{ mr: 0, pr: 0 }} />} href="/volunteer">Green Guardian</Button>
                    <Button color="inherit" sx={{ ml: 5 }} startIcon={<TimelineOutlinedIcon sx={{ mr: 0, pr: 0 }} />} href="/facts">Fact Sheet</Button>
                    <Button color="inherit" sx={{ ml: 5 }} startIcon={<AdminPanelSettingsIcon sx={{ mr: 0, pr: 0 }} />} href="/admin">Admin</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
