import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapFrame from './mapFrame';

//MUI
import { Typography, Box, Link, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoDialog from './infoDialog';

const Timelapse = () => {

    const [data, setData] = useState(null);

    //Instruction Dialog
    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const close = () => setOpen(false);

    useEffect(() => {
        axios.get(`https://green-cover-backend.herokuapp.com/ndvitimelapse`)
            .then((res) => {
                console.log(res);
                console.log(res.data.response_data);
                setData(res.data.response_data);

            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    return (
        <>
            {data
                ?
                <Box sx={{mb:5}}>
                    <Box sx={{ ml: 7, my: 4 }}>
                        <Typography variant="h5">
                            {data.name}
                            <IconButton aria-label="info" size="large" sx={{ ml: 1, p: 1 }} onClick={openDialog}>
                                <InfoOutlinedIcon fontSize="inherit" sx={{ color: "black" }} />
                            </IconButton>
                        </Typography>
                        <Typography variant="h7" gutterBottom component="div">
                            Datasets Used:
                            <ul style={{margin:0}}>
                                <li><Link href={data.dataset_url[0]} target="_blank" rel="noopener">{data.dataset[0]}</Link></li>
                                <li><Link href={data.dataset_url[1]} target="_blank" rel="noopener">{data.dataset[1]}</Link></li>
                            </ul> 
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ mt: 2, maxWidth: "80%" }}>
                            <strong>Normalised Difference Vegetation Index (NDVI):</strong> <br />
                            NDVI is the most commonly used remote sensing index that calculates the ratio of the difference and sum between the Near Infrared and Red bands of multispectral images. It normally takes values between -1 and +1. It is mostly used in vegetation dynamics monitoring, including biomass quantification. <br />
                            NDVI = (Band 5 - Band 4) / (Band 5 + Band 4) <br />
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ mt: 2, maxWidth: "80%" }}>
                            The timelapse is generated year wise for the selected region. The selected region can be a circle, rectangle or a polygon.<br />
                        </Typography>
                    </Box>
                    <MapFrame url={data.map_url} height={"840"} />
                    <InfoDialog
                        open={open}
                        closeDialog={close}
                        description={data.description}
                        instructions={data.instructions}
                    />
                </Box>
                :
                null
            }
        </>
    );
}

export default Timelapse;