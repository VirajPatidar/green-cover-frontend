import React, { useState } from 'react';
import axios from 'axios';

//MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VolunteerTable from './volunteerTable';
import EventForm from './eventForm';

const theme = createTheme({
    palette: {
        primary: {
            main: teal[900],
            black: "#000000",
        },
    },
});

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}

export default function Admin() {

    const initialFormData = Object.freeze({
        username: '',
        password: '',
    });

    const [data, setData] = useState(null)
    const [login, setLogin] = useState(false);
    const [formData, updateFormData] = useState(initialFormData);
    const [userNameError, setUsernameError] = useState(false);
    const [passerror, setPasserror] = useState(false);
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(undefined);


    const handleChange = (e) => {

        setUsernameError(false)
        setPasserror(false)

        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        // Validation
        let submit = true

        setUsernameError(false)
        setPasserror(false)

        if (formData.username === "" || formData.username.length < 3) {
            setUsernameError(true)
            submit = false
            console.log(submit)
            console.log(formData.username)
        }
        if (formData.password === "" || formData.password.length < 5) {
            setPasserror(true)
            submit = false
        }


        if (submit) {
            axios.post(`http://localhost:8000/get-volunteers`, {
                "username": formData.username,
                "password": formData.password,
            })
                .then((res) => {
                    console.log(res);
                    setData(res.data)
                    console.log(res.data);
                    setLogin(true);
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status === 401) {
                        setTransition(() => TransitionLeft);
                        setOpen(true);
                    }
                });
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.black' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Access Admin Data
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            id="username"
                            label="Username"
                            name="username"
                            autoFocus
                            onChange={handleChange}
                            error={userNameError}
                        />
                        <span style={{ margin: 8 }}>{" "}</span>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            error={passerror}
                        />
                        <span style={{ margin: 8 }}>{" "}</span>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 2, p: 2 }}
                            onClick={handleSubmit}
                        >
                            GO
                        </Button>
                    </Box>
                    <Box sx={{ m: 3 }}>
                        {
                            login ?
                                <>
                                    <Box sx={{mt: 5, mb: 5, pb: 5}}>
                                        <EventForm />
                                    </Box>
                                    <VolunteerTable rows={data} />
                                </>
                                :
                                null
                        }
                    </Box>
                </Box>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={transition}
                    message={"Invalid Login Credentials! Please Try Again"}
                    key={'bottom center'}
                />
            </Container>
        </ThemeProvider>
    );
}