import React from 'react';

//MUI
import { Box, Paper} from '@mui/material';


const MapFrame = ({ url, height }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Paper elevation={5} sx={{ mx: 8, p: 1, textAlign: "center"}}>
                <iframe id="inlineMapFrame"
                    title="map"
                    width="100%"
                    height={height}
                    src={url}>
                </iframe>
            </Paper>
        </Box>
    );
}

export default MapFrame;