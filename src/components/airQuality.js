import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapFrame from './mapFrame';

//MUI
import { Typography, Box, Link, IconButton, Card, Grid, Divider } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoDialog from './infoDialog';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AirQualityAccordion() {
    return (
        <Box sx={{ mt: 3, ml: 1, mr: 8, p: 2, backgroundColor: "#c8e6c9", borderRadius: "25px" }}>
            <Typography variant="h6" gutterBottom component="div" sx={{ pb: 1, maxWidth: "80%" }}>
                Effect of chosen parameters on environment and vegetation:  <br />
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><b>UV Aerosol Index (UVAI) or Absorbing Aerosol Index (AAI)</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The AAI is based on wavelength-dependent changes in Rayleigh scattering in the UV
                        spectral range for a pair of wavelengths. The difference between observed and
                        modelled reflectance results in the AAI. When the AAI is positive, it indicates
                        the presence of UV-absorbing aerosols like dust and smoke. It is useful for tracking
                        the evolution of episodic aerosol plumes from dust outbreaks, volcanic ash,
                        and biomass burning. <br /><br />
                        The wavelengths used have very low ozone absorption, so unlike aerosol optical thickness
                        measurements, AAI can be calculated in the presence of clouds. Daily global coverage is
                        therefore possible. For this L3 AER_AI product, the absorbing_aerosol_index is
                        calculated with a pair of measurements at the 354 nm and 388 nm wavelengths. <br /><br />
                        Aerosols, particularly black carbon, can also dramatically alter the
                        Earth's surface albedo by depositing a layer of dark residue on ice, snow
                        and other bright surfaces. Long-term build-up of black carbon aerosols
                        in the Arctic and the Himalaya is resulting in increased melting of snow.
                        Scientists, however, believe the cooling from reflective aerosols
                        overcomes the warming effect of black carbon and other absorbing
                        aerosols over Earth. <br /><br />
                        According to the New York Times, a study at the University of Maryland
                        indicates that increases in aerosols due to air pollution from human
                        activities can affect cloud formation in a way that causes drier regions to
                        experience even less rain and wetter regions to experience more rainfall,
                        snow and severe weather. Clouds in dirty regions can be twice as thick
                        compared to clouds in very clean regions, and the probability of heavy
                        rain in those dirty regions is doubled. It's even worse when many
                        aerosols are also making people sick with heart and lung disease. Some
                        countries are now in the process of trying to clean up aerosols.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography><b>Carbon monoxide (CO)</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Carbon monoxide (CO) is an important atmospheric trace gas for understanding tropospheric chemistry. In certain urban areas, it is a major atmospheric pollutant. Main sources of CO are combustion of fossil fuels, biomass burning, and atmospheric oxidation of methane and other hydrocarbons. Whereas fossil fuel combustion is the main source of CO at northern mid-latitudes, the oxidation of isoprene and biomass burning play an important role in the tropics. TROPOMI on the Sentinel 5 Precursor (S5P) satellite observes the CO global abundance exploiting clear-sky and cloudy-sky Earth radiance measurements in the 2.3 µm spectral range of the shortwave infrared (SWIR) part of the solar spectrum. TROPOMI clear sky observations provide CO total columns with sensitivity to the tropospheric boundary layer. For cloudy atmospheres, the column sensitivity changes according to the light path. <br /><br />
                        Carbon monoxide (CO) is an important atmospheric trace gas for our
                        understanding of tropospheric chemistry. In certain urban areas, it is a
                        major atmospheric pollutant. Main sources of CO are combustion of
                        fossil fuels, biomass burning, and atmospheric oxidation of methane and
                        other hydrocarbons. Whereas fossil fuel combustion is the main source
                        of CO at Northern mid-latitudes, the oxidation of isoprene and biomass
                        burning play an important role in the tropics. CO is hazardous to health
                        and even affects plants.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography><b>Nitrogen oxides (NO2 and NO)</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nitrogen oxides (NO2 and NO) are important trace gases in the Earth's atmosphere, present in both the troposphere and the stratosphere. They enter the atmosphere as a result of anthropogenic activities (notably fossil fuel combustion and biomass burning) and natural processes (wildfires, lightning, and microbiological processes in soils). Here, NO2 is used to represent concentrations of collective nitrogen oxides because during daytime, i.e. in the presence of sunlight, a photochemical cycle involving ozone (O3) converts NO into NO2 and vice versa on a timescale of minutes. The TROPOMI NO2 processing system is based on the algorithm developments for the DOMINO-2 product and for the EU QA4ECV NO2 reprocessed dataset for OMI, and has been adapted for TROPOMI. This retrieval-assimilation-modelling system uses the 3-dimensional global TM5-MP chemistry transport model at a resolution of 1x1 degree as an essential element. <br /><br />
                        High levels of NOx can have a negative effect on vegetation, including
                        leaf damage and reduced growth. It can make vegetation more
                        susceptible to disease and frost damage. A study of the effect of nitrogen
                        dioxide and ammonia (NH3) on the habitat of Epping Forest has revealed
                        that pollution is likely to be significantly influencing ecosystem health in
                        the forest. The study demonstrated that local traffic emissions
                        contribute substantially to exceeding the critical levels and critical loads
                        in the area. The critical level for the protection of vegetation is 30 µg/m3
                        measured as an annual average. <br /> <br />
                        NOx also reacts with other pollutants in the presence of sunlight to form
                        ozone which can damage vegetation at high concentrations.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography><b>Atmospheric Formaldehyde (HCHO)</b></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Formaldehyde is an intermediate gas in almost all oxidation chains of non-methane volatile organic compounds (NMVOC), leading eventually to CO2. Non-Methane Volatile Organic Compounds (NMVOCs) are, together with NOx, CO and CH4, among the most important precursors of tropospheric O3. The major HCHO source in the remote atmosphere is CH4 oxidation. Over the continents, the oxidation of higher NMVOCs emitted from vegetation, fires, traffic and industrial sources results in important and localized enhancements of the HCHO levels. The seasonal and inter-annual variations of the formaldehyde distribution are principally related to temperature changes and fire events, but also to changes in anthropogenic activities. HCHO concentrations in the boundary layer can be directly related to the release of short-lived hydrocarbons, which mostly cannot be observed directly from space. <br /><br />
                        Formaldehyde can cause irritation of the skin, eyes, nose, and throat.
                        High levels of exposure may cause some types of cancers. Learn more
                        from the Agency for Toxic Substances and Disease Registry about the
                        health effects of formaldehyde exposure.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

const AirQuality = () => {

    const [data, setData] = useState(null);

    //Instruction Dialog
    const [open, setOpen] = useState(false);
    const openDialog = () => setOpen(true);
    const close = () => setOpen(false);

    useEffect(() => {
        axios.get(`https://green-cover-backend.herokuapp.com/airqualityindex`)
            .then((res) => {
                setData(res.data.response_data);

            })
            .catch(err => {
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
                            Datasets Used:
                            <ul style={{ margin: 0 }}>
                                <li><Link href={data.dataset_url[0]} target="_blank" rel="noopener">{data.dataset[0]}</Link></li>
                                <li><Link href={data.dataset_url[1]} target="_blank" rel="noopener">{data.dataset[1]}</Link></li>
                                <li><Link href={data.dataset_url[2]} target="_blank" rel="noopener">{data.dataset[2]}</Link></li>
                                <li><Link href={data.dataset_url[3]} target="_blank" rel="noopener">{data.dataset[3]}</Link></li>
                            </ul>
                        </Typography>
                        <Typography variant="h7" gutterBottom component="div" sx={{ mt: 2 }}>
                            Map given below represents air quality of Maharashtra on four parameters:
                            <ol style={{ margin: 0, paddingTop: "5px" }}>
                                <li>Absorbing Aerosol Index (AAI)</li>
                                <li>Carbon monoxide (CO)</li>
                                <li>Nitrogen oxides (NO2 and NO)</li>
                                <li>AtmosphericFormaldehyde (HCHO)</li>
                            </ol>
                        </Typography>
                        <AirQualityAccordion />
                    </Box>
                    <MapFrame url={data.map_url} height={"660"} />
                    <Box mt={8} mx={4}>
                        <Box p={3}>
                            <Box mb={2}>
                                <Typography gutterBottom variant="h5" sx={{ textAlign: "center" }}>
                                    Air Quality Statistics
                                </Typography>
                            </Box>
                            <Divider />
                            <Box mt={2}>
                                <Typography gutterBottom variant="h6">
                                    <span style={{ marginLeft: "300px" }}>INDIA</span><span style={{ marginLeft: "620px" }}>MAHARASHTRA</span>
                                </Typography>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Card elevation={3}>
                                        <iframe width="740" height="460" frameborder="0" title="3" src="https://www.globalforestwatch.org/embed/widget/emissionsDeforestation/country/IND"></iframe>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card elevation={3}>
                                        <iframe width="740" height="460" frameborder="0" title="4" src="https://www.globalforestwatch.org/embed/widget/emissionsDeforestation/country/IND/20"></iframe>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card elevation={3}>
                                        <iframe width="740" height="460" frameborder="0" title="5" src="https://www.globalforestwatch.org/embed/widget/emissionsDeforestationDrivers/country/IND"></iframe>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card elevation={3}>
                                        <iframe width="740" height="460" frameborder="0" title="6" src="https://www.globalforestwatch.org/embed/widget/emissionsDeforestationDrivers/country/IND/20?emissionsDeforestationDrivers=eyJoaWdobGlnaHRlZCI6ZmFsc2V9"></iframe>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card elevation={3}>
                                        <iframe width="740" height="660" frameborder="0" title="1" src="https://www.globalforestwatch.org/embed/widget/carbonFlux/country/IND"></iframe>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card elevation={3}>
                                        <iframe width="740" height="660" frameborder="0" title="2" src="https://www.globalforestwatch.org/embed/widget/carbonFlux/country/IND/20"></iframe>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
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

export default AirQuality;