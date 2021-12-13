import React from 'react';
import { Link } from 'react-router-dom';
import Copyright from './copyright'

//IMAGE
import four0four from '../images/404.svg';

//MUI
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[900],
    },
  },
});


const NotFound = () => {

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{
                backgroundColor: "#c8e6c9",
                minHeight: '93vh',
            }}>
                <Box pt={16}>
                    <Grid container
                        direction="column"
                        alignItems="center"
                        justifyContent="center">

                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <img src={four0four} alt="404 page" width="90%" height="200" />
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <br />
                            <Typography variant="h3" gutterBottom>
                                Page Not Found
                            </Typography>
                            <br />
                            <Link to="/" style={{ textDecoration: 'none' }} color="inherit">
                                <Button variant="contained" sx={{backgroundColor: "#004d40"}}> Back to Home </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Box>
            </Paper>
        </ThemeProvider>
    );
}

export default NotFound;