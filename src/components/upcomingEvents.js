import * as React from 'react';
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

const data = [
    {
        id: 1,
        label: 'Spread awareness: Use of a recycling bins',
        place: 'Schools near NIT Nagpur, Nagpur',
        date: '07/01/2022',
        details: 'All nearby volunteers are requested to join us to spread awareness regarding importance of recycling.',
    },
    {
        id: 2,
        label: 'Spread awareness: Use of eco friendly bean bag fill',
        place: 'Pune Institute of technology, Pune',
        date: '08/01/2022',
        details: 'All nearby volunteers are requested to join us to spread awareness regarding use of eco friendly bean bag fill.',
    },
    {
        id: 3,
        label: 'Plant trees',
        place: 'Shivaji Park, Mumbai',
        date: '09/01/2022',
        details: 'All nearby volunteers are requested to join us to plant trees near shivaji park on sunday 9:00am. Saplings will be provided.',
    },
    {
        id: 4,
        label: 'Plant trees',
        place: 'Nashik central Park, Nashik',
        date: '10/01/2022',
        details: 'All nearby volunteers are requested to join us to plant trees near Nashik central Park at 9:00am.',
    },
];

function UpcomingEvents() {
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
                    {data[activeStep].label.toUpperCase()}
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
                            <Box sx={{mx: 4, my: 4}}>
                                <Typography variant="h6" gutterBottom component="div">
                                    {data[activeStep].place}
                                </Typography>
                                <Typography variant="body1" gutterBottom component="div">
                                    {data[activeStep].date}
                                </Typography>
                                <Typography variant="body1" gutterBottom component="div">
                                    {data[activeStep].details}
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
    );
}

export default UpcomingEvents;