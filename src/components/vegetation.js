import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapFrame from './mapFrame';

//MUI
import { Typography, Box, Link, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoDialog from './infoDialog';
import Graph from './graph';

const Vegetation = () => {

    const [data, setData] = useState(null);

    //Instruction Dialog
    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const close = () => setOpen(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/vegetation`)
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
                <Box sx={{ mb: 5 }}>
                    <Box sx={{ ml: 7, my: 4 }}>
                        <Typography variant="h5">
                            {data.name}
                            <IconButton aria-label="info" size="large" sx={{ ml: 1, p: 1 }} onClick={openDialog}>
                                <InfoOutlinedIcon fontSize="inherit" sx={{ color: "black" }} />
                            </IconButton>
                        </Typography>
                        <Typography variant="h7" gutterBottom component="div">
                            Dataset Used:{" "}
                            <Link href={data.dataset_url} target="_blank" rel="noopener">{data.dataset}</Link>
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ mt: 2, maxWidth: "80%" }}>
                            <strong>Normalised Difference Vegetation Index (NDVI):</strong> <br />
                            NDVI is the most commonly used remote sensing index that calculates the ratio of the difference and sum between the Near Infrared and Red bands of multispectral images. It normally takes values between -1 and +1. It is mostly used in vegetation dynamics monitoring, including biomass quantification.
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ mt: 2, maxWidth: "80%" }}>
                            <strong>Enhanced Vegetation Index (EVI):</strong> <br />
                            EVI is very similar to NDVI. The only difference is that it corrects atmospheric and canopy background noise, particularly in regions with high biomass.
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ mt: 2, maxWidth: "80%" }}>
                            According to the dataset chosen, the formula of the vegetation indexes will be as follows: <br />
                            <strong>NDVI = </strong>(Band 5 - Band 4) / (Band 5 + Band 4) <br />
                            <strong>EVI = </strong>2.5 * ((Band 5 - Band 4) / (Band 5 + 6 * Band 4 - 7.5 * Band 2 + 1))
                        </Typography>
                    </Box>
                    <MapFrame url={data.map_url} height={"740"} />
                    <Box sx={{ pt:2, ml: 7, my: 8 }}>
                        <Typography variant="h5" gutterBottom component="div">
                            Time series graphical analysis representing Vegetation Indexes (NDVI and EVI) of Maharashtra
                        </Typography>
                        <Typography variant="h7" gutterBottom component="div">
                            Dataset Used:{" "}
                            <Link href="https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD13Q1" target="_blank" rel="noopener">MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m</Link>
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ mt: 2, maxWidth: "80%" }}>
                            NDVI is the most commonly used remote sensing index that calculates the ratio of the difference and sum between the Near Infrared and Red bands of multispectral images. It normally takes values between -1 and +1. It is mostly used in vegetation dynamics monitoring, including biomass quantification. <br />
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ mt:3, mb:2, maxWidth: "80%" }}>
                            <strong>Enter start and end dates to get the EVI and NDVI graph for that duration:</strong> <br />
                        </Typography>
                        <Graph />
                    </Box>
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

export default Vegetation;