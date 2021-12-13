import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapFrame from './mapFrame';

//MUI
import { Typography, Box, Link, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoDialog from './infoDialog';

const LandCover = () => {

    const [data, setData] = useState(null);

    //Instruction Dialog
    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const close = () => setOpen(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/landcover`)
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
                            <ul style={{ margin: 0 }}>
                                <li><Link href={data.dataset_url[0]} target="_blank" rel="noopener">{data.dataset[0]}</Link></li>
                                <li><Link href={data.dataset_url[1]} target="_blank" rel="noopener">{data.dataset[1]}</Link></li>
                            </ul>
                        </Typography>
                        <Typography variant="body2" gutterBottom sx={{ mt: 2, maxWidth: "80%" }}>
                            <strong sx={{pb:1}}>Approach:</strong> <br />
                            Aim is to predict landcover of Maharashtra for desired year using landcover data accessible via MODIS dataset. Since MODIS dataset is only available from 2001-01-01 to 2019-01-01, we can used supervised classification technique to predict landcover of Maharashtra after 2019-01-01.<br />
                        </Typography>
                        <Typography variant="body2">
                            <ol>
                                <li>Landsat data was added to the map and Maharashtra was selected.</li>
                                <li>
                                    The training dataset was built by selecting points in and around Maharashtra on MODIS
                                    landcover dataset. The selected points can be seen on the generated map below by switching the
                                    layers.
                                </li>
                                <li>After building the training dataset the classifier (smile cart classifier) was trained.</li>
                                <li>
                                    A MODIS landcover layer will be added to the same categorical map to compare the results (results can only be compared if the landcover prediction year is within the MODIS time range). <br /> The map below shows the predicted landcover for 2019.
                                </li>
                            </ol>
                        </Typography>
                    </Box>
                    <MapFrame url={data.map_url} height={"660"} />
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

export default LandCover;