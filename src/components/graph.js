import React, { useState, useEffect } from 'react';
import 'date-fns';
import { format } from 'date-fns'
import axios from 'axios';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Box, Button, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: teal[900],
        },
    },
});


export default function Graph() {
    const [value, setValue] = useState(new Date("2012-01-01"));
    const [value1, setValue1] = useState(new Date());
    const [graphs, setGraphs] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        let submit = true


        if (value === "" || value1 === "") {
            alert("Please select date")
            submit = false
        }

        if (submit) {
            setGraphs(null);
            axios.post(`https://green-cover-backend.herokuapp.com/vegetation`, {
                "start_date": format(value, "yyyy-MM-dd"),
                "end_date": format(value1, "yyyy-MM-dd"),
            })
                .then((res) => {
                    console.log(res);
                    setGraphs(res.data);
                })
                .catch(err => {
                    console.log(err)
                    console.log({ err })
                    if (err.response.status === 400) {
                        alert("an error occured. Please try again")
                    }
                });
        }
    };

    useEffect(() => {  }, [graphs])


    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Start Date"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <span style={{ margin: 8 }}>{" "}</span>
                <DatePicker
                    label="End Date"
                    inputFormat="dd/MM/yyyy"
                    value={value1}
                    onChange={(newValue) => {
                        setValue1(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <span style={{ margin: 8 }}>{" "}</span>
                <Button type="submit" size="large" onClick={handleSubmit} variant="contained" color="primary" style={{ marginTop: "8px" }}>
                    Get Graphs
                </Button>
            </LocalizationProvider>
            {
                graphs ?
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 3, mb:0, pb:0 }}>
                            NDVI-EVI vs Time Graph
                        </Typography>
                        <img src={graphs.indexes_graph} alt="indexes_graph" style={{ height: 400, width: 1300 }} />
                        <Typography variant="h6" gutterBottom sx={{ mt: 3, mb:0, pb:0 }}>
                            NDVI vs Time Graph
                        </Typography>
                        <img src={graphs.ndvi_graph} alt="ndvi_graph" style={{ height: 350, width: 1400 }} />
                        <Typography variant="h6" gutterBottom sx={{ mt: 3, mb:0, pb:0 }}>
                            EVI vs Time Graph
                        </Typography>
                        <img src={graphs.evi_graph} alt="evi_graph" style={{ height: 400, width: 1300 }} />
                    </Box>
                    :
                    null
            }
        </ThemeProvider>
    );
}
