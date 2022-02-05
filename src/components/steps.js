import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Register as a green guardian', 'Get notified regarding green events in your area', 'Actively participate in green events'];

export default function Steps() {

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h5" gutterBottom component="div" sx={{mb: 3}}>
                Steps to Participate in our green events:
            </Typography>
            <Stepper activeStep={-1} sx={{"& .css-1o954ln-MuiSvgIcon-root-MuiStepIcon-root": { color: "#004d40" }}}>
                {steps.map((label, index) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}
