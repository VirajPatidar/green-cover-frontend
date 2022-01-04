import React from 'react';
import VolunteerForm from './volunteerForm'
import Statistics from './statistics';
import UpcomingEvents from './upcomingEvents'

//MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Steps from './steps';

const theme = createTheme({
    palette: {
        primary: {
            main: teal[900],
        },
    },
});



const Volunteer = () => {

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Box sx={{ mt: 5 }}>
                    <Statistics />
                </Box>
                <Box sx={{ mt: 5, pt: 5, mb: 5}}>
                    <Steps/>
                </Box>
                <Box sx={{ mt: 5, pt: 5, mb: 5, pb: 3, maxWidth: "80%" }}>
                    <UpcomingEvents />
                </Box>
                <Box sx={{ mt: 5, pt: 5, mb: 5, pb: 3, maxWidth: "80%" }}>
                    <VolunteerForm />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Volunteer;