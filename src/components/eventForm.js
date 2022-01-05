import React, { useState } from 'react';
import axios from 'axios';
import 'date-fns';
import { format } from 'date-fns'

//MUI
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

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

const EventForm = () => {

    const [name, setName] = useState('')
    const [city, setCity] = useState('Mumbai')
    const [add, setAdd] = useState('')
    const [date, setDate] = useState(new Date());
    const [details, setDetails] = useState('')
    const [checked, setChecked] = useState(false);

    const [nameError, setNameError] = useState(false)
    const [addError, setAddError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let submit = true

        setNameError(false)
        setAddError(false)
        setDetailsError(false)

        if (name === "") {
            setNameError(true)
            submit = false
        }
        if (add === "") {
            setAddError(true)
            submit = false
        }
        if (details === "") {
            setDetailsError(true)
            submit = false
        }
        if (city === "") {
            submit = false
        }
        if (submit) {
            axios.post(`http://localhost:8000/create-event`, {
                "name": name,
                "city": city,
                "address": add,
                "date": format(date, 'yyyy-MM-dd'),
                "details": details,
                "notify": checked,
            })
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    alert("Event created successfully");
                    setName('');
                    setCity('Mumbai');
                    setAdd('');
                    setDate(new Date());;
                    setDetails('');
                    setChecked(false);
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h5" gutterBottom component="div">
                Schedule or Create a Green Event
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField sx={field}
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    value={name}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    error={nameError}
                />
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} inputProps={{ 'aria-label': 'controlled' }} />} label="Notify volunteers nearby" />
                </FormGroup>
                <Autocomplete
                    disablePortal
                    freeSolo
                    id="combo-box-demo"
                    options={categories}
                    sx={field}
                    onChange={(e, val) => setCity(val)}
                    renderInput={(params) => <TextField {...params} label="City" onChange={(e) => setCity(e.target.value)} />}
                />
                <TextField sx={field}
                    onChange={(e) => setAdd(e.target.value)}
                    label="Address"
                    value={add}
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    error={addError}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date"
                        inputFormat="dd/MM/yyyy"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <TextField sx={field}
                    onChange={(e) => setDetails(e.target.value)}
                    label="Details"
                    variant="outlined"
                    value={details}
                    multiline
                    rows={3}
                    color="primary"
                    fullWidth
                    required
                    error={detailsError}
                />

                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    Create
                </Button>
            </form>
        </ThemeProvider>
    );
}

export default EventForm;