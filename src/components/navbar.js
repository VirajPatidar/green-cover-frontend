import * as React from 'react';

//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: "#004d40"}}>
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        href="/"
                        style={{ backgroundColor: "white" }}
                        sx={{p:0, mr:1, ml:1}}
                    >
                        <PublicTwoToneIcon color="success" fontSize="large"/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Green Cover Analysis
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
