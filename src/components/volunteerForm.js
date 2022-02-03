import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

//MUI
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: teal[900],
        },
    },
});

const categories = ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Kalyan-Dombivli", "Vasai-Virar City MC", "Aurangabad", "Navi Mumbai", "Solapur", "Mira-Bhayandar", "Bhiwandi-Nizampur", "Amravati", "Nanded Waghala", "Kolhapur", "Ulhasnagar", "Sangli-Miraj-Kupwad", "Malegaon", "Jalgaon", "Akola", "Latur", "Dhule", "Ahmednagar", "Chandrapur", "Parbhani", "Ichalkaranji", "Jalna", "Ambarnath", "Bhusawal", "Panvel", "Badlapur", "Beed", "Gondia", "Satara", "Barshi", "Yavatmal", "Achalpur", "Osmanabad", "Nandurbar", "Wardha", "Udgir", "Hinganghat"];
const field = {
    marginTop: 3,
    marginBottom: 3,
    display: 'block'
}

const VolunteerForm = () => {

    let navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState(0)
    const [city, setCity] = useState('Mumbai')
    const [pincode, setPincode] = useState(0)

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [ageError, setAgeError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    // const [cityError, setCityError] = useState(false)
    const [pincodeError, setPincodeError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        let submit = true
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        setNameError(false)
        setEmailError(false)
        setAgeError(false)
        setPhoneError(false)
        // setCityError(false)
        setPincodeError(false)

        if (name === "") {
            setNameError(true)
            submit = false
        }
        if (email === "" || !re.test(email)) {
            setEmailError(true)
            submit = false
        }
        if (age <= 0) {
            setAgeError(true)
            submit = false
        }
        if (phone <= 0 || phone.toString().length < 10) {
            setPhoneError(true)
            submit = false
        }
        if (city === "") {
            // setCityError(true)
            submit = false
        }
        if (pincode <= 0 || pincode.toString().length < 6) {
            setPincodeError(true)
            submit = false
        }
        if (submit) {
            axios.post(`http://localhost:8000/create-volunteer`, {
                "name": name,
                "email": email,
                "age": age,
                "phone": phone,
                "city": city,
                "pincode": pincode
            })
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    alert("You have been registered as a volunteer. We will contact you soon.")
                    navigate('/');
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h5" gutterBottom component="div">
                Register as a Volunteer (Maharashtra)
            </Typography>
            <Typography variant="body1" component="div" sx={{ mb: 0 }}>
                Register as a volunteer and contribute in our green drives to reduce green cover depletion and spread awareness. <br />
                At present we are only accepting applications for the state of Maharashtra, but we plan to expand soon.
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField sx={field}
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    error={nameError}
                />
                <TextField sx={field}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    error={emailError}
                />

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="age-select-label">Age</InputLabel>
                        <Select
                            labelId="age-select-label"
                            id="age-select"
                            value={age}
                            label="Age"
                            required
                            onChange={(e) => setAge(e.target.value)}
                            error={ageError}
                        >
                            <MenuItem value={'below 10'}>below 10</MenuItem>
                            <MenuItem value={'10 - 20'}>10 - 20</MenuItem>
                            <MenuItem value={'21 - 40'}>21 - 40</MenuItem>
                            <MenuItem value={'41 - 60'}>41 - 60</MenuItem>
                            <MenuItem value={'over 60'}>over 60</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <TextField sx={field}
                    onChange={(e) => setPhone(e.target.value)}
                    label="Phone"
                    variant="outlined"
                    type="number"
                    color="primary"
                    fullWidth
                    required
                    error={phoneError}
                />
                <Autocomplete
                    disablePortal
                    freeSolo
                    id="combo-box-demo"
                    options={categories}
                    sx={field}
                    onChange={(e, val) => setCity(val)}
                    renderInput={(params) => <TextField {...params} label="City" required onChange={(e) => setCity(e.target.value)} />}
                />
                <TextField sx={field}
                    onChange={(e) => setPincode(e.target.value)}
                    label="Pincode"
                    variant="outlined"
                    type="number"
                    color="primary"
                    fullWidth
                    required
                    error={pincodeError}
                />

                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    Submit
                </Button>
            </form>
        </ThemeProvider>
    );
}

export default VolunteerForm;