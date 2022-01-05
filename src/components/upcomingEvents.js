import React, { useState, useEffect } from 'react';
import axios from 'axios';

//MUI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const UpcomingEvents = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/get-event`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <>
            {
                (data && data.length > 0) ?
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" gutterBottom component="div">
                            Upcoming Green Initiatives:
                        </Typography>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: '#b2dfdb'
                            }}
                        >
                            <Typography variant="h6" component="div">
                                <b>{data[activeStep].name}</b>
                            </Typography>
                        </Paper>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {data.map((step, index) => (
                                <div key={step.id}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box sx={{ mx: 4, my: 4 }}>
                                            <Typography variant="h6" gutterBottom component="div">
                                                <b>City: </b> {data[activeStep].city}
                                            </Typography>
                                            <Typography variant="h6" gutterBottom component="div" sx={{mt: 2}}>
                                                <b>Venue: </b> {data[activeStep].address}
                                            </Typography>
                                            <Typography variant="h6" gutterBottom component="div" sx={{mt: 2}}>
                                                <b>Date: </b> {data[activeStep].date}
                                            </Typography>
                                            <Typography variant="h6" gutterBottom component="div" sx={{mt: 2}}>
                                                <b>Details: </b> <br /> {data[activeStep].details}
                                            </Typography>
                                        </Box>
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            sx={{ backgroundColor: '#b2dfdb' }}
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>
                    :
                    null
            }
        </>
    );
}

export default UpcomingEvents;