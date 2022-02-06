// MUI
import { Box, Card, Chip, Divider, Grid, Link, Typography } from "@mui/material";
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: teal[900],
        },
    },
});


const Facts = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box p={3} sx={{ backgroundColor: "#e8f5e9" }}>
                <Box mt={5} pt={3} mb={5}>
                    <Typography gutterBottom variant="h4" sx={{ textAlign: "center" }}>
                        Fact Sheet
                    </Typography>
                    <Box mt={2} mb={3} sx={{ textAlign: "center" }}>
                        <em>
                            <b>Data Source: {" "}</b>
                            <Link href="https://www.globalforestwatch.org/" underline="hover" target="_blank" rel="noopener" >
                                {'Global Forest Watch'}
                            </Link>
                            {", "}
                            <Link href="https://fsi.nic.in/index.php" underline="hover" target="_blank" rel="noopener" >
                                {'Forest Survey India'}
                            </Link>
                        </em>
                    </Box>
                    <Box mt={3} mb={3} pb={3} sx={{ textAlign: "center" }}>
                        <Chip
                            label="GLOBAL"
                            component="a"
                            href="#global"
                            variant="outlined"
                            color="primary"
                            clickable
                        />
                        &nbsp;&nbsp;&nbsp;
                        <Chip
                            label="INDIA"
                            component="a"
                            href="#ind"
                            variant="outlined"
                            color="primary"
                            clickable
                        />
                        &nbsp;&nbsp;&nbsp;
                        <Chip
                            label="MAHARASHTRA"
                            component="a"
                            href="#mha"
                            variant="outlined"
                            color="primary"
                            clickable
                        />
                    </Box>
                    <Divider variant="middle" />
                </Box>
                <Box mb={2} mt={5} pt={2} id="global">
                    <Typography gutterBottom variant="h5">
                        Global Statistics:
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Card elevation={3}>
                            <Box sx={{ my: 2, mx: 2 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6" >
                                            Top 5 countries with tree cover loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography color="text.secondary" variant="body2">
                                    From 2001 to 2020, Russia had the highest relative tree cover loss in the world, eqivalent to a loss of 69.5Mha, which represents 9.1% of the tree cover in the year 2000. From 2010 to 2020, the world lost 25.8Mha of tree cover.
                                </Typography>
                            </Box>
                            <Divider variant="middle" />
                            <Box sx={{ m: 2 }}>
                                <Typography gutterBottom variant="body1">
                                    Country along with loss:
                                </Typography>
                                <Box ml={2} mr={4}>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>1. Russia <Chip color="primary" label="69.5 Mha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>2. Brazil <Chip color="primary" label="59.8 Mha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>3. Canada <Chip color="primary" label="44.1 Mha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>4. United States <Chip color="primary" label="42.2 Mha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>5. Indonesia <Chip color="primary" label="27.7 Mha" /></p>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card elevation={3}>
                            <Box sx={{ my: 2, mx: 2 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6" >
                                            Humid tropical primary forest loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography color="text.secondary" variant="body2">
                                    This list indicates the top 5 tropical countries with the largest area of loss of humid tropical primary forests, areas of mature rainforest that are especially important for biodiversity and carbon storage.
                                </Typography>
                            </Box>
                            <Divider variant="middle" />
                            <Box sx={{ m: 2 }}>
                                <Typography gutterBottom variant="body1">
                                    Country along with gain:
                                </Typography>
                                <Box ml={2} mr={4}>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>1. Delhi <Chip color="primary" label="19.4 kha, +11%" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>2. Mumbai <Chip color="primary" label="11.1 kha, +9%" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>3. Bengaluru <Chip color="primary" label="8.9 kha, -5%" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>4. Hyderabad <Chip color="primary" label="8.2 kha, +15%" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>5. Chennai <Chip color="primary" label="2.3 kha, +26%" /></p>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card elevation={3}>
                            <iframe width="740" height="460" frameborder="0" title="1" src="https://www.globalforestwatch.org/embed/widget/treeLossPct/global?treeLossPct=eyJoaWdobGlnaHRlZCI6ZmFsc2V9"></iframe>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card elevation={3}>
                            <iframe width="740" height="460" frameborder="0" title="2" src="https://www.globalforestwatch.org/embed/widget/treeLossGlobal/global"></iframe>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card elevation={3}>
                            <iframe width="740" height="460" frameborder="0" title="3" src="https://www.globalforestwatch.org/embed/widget/treeLossTsc/global"></iframe>
                        </Card>
                    </Grid>
                </Grid>
                <Box mb={2} mt={5} pt={2} id="ind">
                    <Typography gutterBottom variant="h5">
                        Statistical Analysis of India:
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Card elevation={3}>
                            <Box sx={{ my: 2, mx: 2 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6" >
                                            Top 5 states with forest cover gain
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography color="text.secondary" variant="body2">
                                    As of 2021 the total green (forests and trees) cover has now reached 8,09,537 sq km (24.6% of geographical area), which includes 7,13,789 sq km of forest cover — 21.7% of the area.
                                </Typography>
                            </Box>
                            <Divider variant="middle" />
                            <Box sx={{ m: 2 }}>
                                <Typography gutterBottom variant="body1">
                                    State along with gain (2021 Vs 2020):
                                </Typography>
                                <Box ml={2} mr={4}>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>1. Andhra Pradesh <Chip color="primary" label="64.7 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>2. Telangana <Chip color="primary" label="63.2 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>3. Odisha <Chip color="primary" label="53.7 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>4. Karnataka <Chip color="primary" label="15.5 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>5. Jharkhand <Chip color="primary" label="11.0 kha" /></p>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card elevation={3}>
                            <Box sx={{ my: 2, mx: 2 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6" >
                                            Forest cover in major metro cities
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography color="text.secondary" variant="body2">
                                    Below data represents state of forest cover in major cities and the % decadal (2011 - 2021) change. The forest cover in & around these cities is help to keep a check on pollution.
                                </Typography>
                            </Box>
                            <Divider variant="middle" />
                            <Box sx={{ m: 2 }}>
                                <Typography gutterBottom variant="body1">
                                    City along with area and decadal change:
                                </Typography>
                                <Box ml={2} mr={4}>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>1. Delhi <Chip color="primary" label="19.4 kha, +11%" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>2. Mumbai <Chip color="primary" label="11.1 kha, +9%" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>3. Bengaluru <Chip color="primary" label="8.9 kha, -5%" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>4. Hyderabad <Chip color="primary" label="8.2 kha, +15%" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>5. Chennai <Chip color="primary" label="2.3 kha, +26%" /></p>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card elevation={3}>
                            <Box sx={{ my: 2, mx: 2 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6" >
                                            Top 5 states with tree cover loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography color="text.secondary" variant="body2">
                                    In India, the top 5 regions were responsible for 60% of all tree cover loss between 2001 and 2020. Assam had the most tree cover loss at 269kha compared to an average of 55.2kha.
                                </Typography>
                            </Box>
                            <Divider variant="middle" />
                            <Box sx={{ m: 2 }}>
                                <Typography gutterBottom variant="body1">
                                    State along with loss:
                                </Typography>
                                <Box ml={2} mr={4}>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>1. Assam <Chip color="primary" label="269 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>2. Mizoram <Chip color="primary" label="247 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>3. Nagaland <Chip color="primary" label="225 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>4. Arunachal Pradesh <Chip color="primary" label="222 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>5. Manipur <Chip color="primary" label="196 kha" /></p>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card elevation={3}>
                            <Box sx={{ my: 2, mx: 2 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6" >
                                            Top 5 states with tree cover gain
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography color="text.secondary" variant="body2">
                                    The top 4 regions were responsible for 61% of all tree cover gain between 2001 and 2012. Arunachal Pradesh had the most tree cover gain at 47.8kha compared to an average of 7.09kha.
                                </Typography>
                            </Box>
                            <Divider variant="middle" />
                            <Box sx={{ m: 2 }}>
                                <Typography gutterBottom variant="body1">
                                    State along with gain:
                                </Typography>
                                <Box ml={2} mr={4}>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>1. Arunachal Pradesh <Chip color="primary" label="47.8 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>2. Nagaland <Chip color="primary" label="44.0 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>3. Manipur <Chip color="primary" label="33.8 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>4. Assam <Chip color="primary" label="29.9 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>5. Mizoram <Chip color="primary" label="26.3 kha" /></p>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card elevation={3}>
                            <iframe width="740" height="460" frameborder="0" title="4" src="https://www.globalforestwatch.org/embed/widget/treeLossPct/country/IND"></iframe>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card elevation={3}>
                            <iframe width="740" height="460" frameborder="0" title="5" src="https://www.globalforestwatch.org/embed/widget/treeLoss/country/IND"></iframe>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card elevation={3}>
                            <iframe width="740" height="460" frameborder="0" title="6" src="https://www.globalforestwatch.org/embed/widget/treeLossTsc/country/IND"></iframe>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card elevation={3}>
                            <iframe width="740" height="460" frameborder="0" title="7" src="https://www.globalforestwatch.org/embed/widget/treeLossPlantations/country/IND"></iframe>
                        </Card>
                    </Grid>
                </Grid>
                <Box mb={2} mt={5} pt={2} id="mha">
                    <Typography gutterBottom variant="h5">
                        Statistical Analysis of Maharashtra:
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Card elevation={3}>
                            <Box sx={{ my: 2, mx: 2 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6" >
                                            Top 5 districts with tree cover loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography color="text.secondary" variant="body2">
                                    In Maharashtra, the top 2 regions were responsible for 67% of all tree cover loss between 2001 and 2019. Garhchiroli had the most tree cover loss at 8.73kha compared to an average of 535ha.
                                </Typography>
                            </Box>
                            <Divider variant="middle" />
                            <Box sx={{ m: 2 }}>
                                <Typography gutterBottom variant="body1">
                                    District along with loss:
                                </Typography>
                                <Box ml={2} mr={4}>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>1. Garhchiroli <Chip color="primary" label="8.73 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>2. Chandrapur <Chip color="primary" label="3.05 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>3. Sindhudurg <Chip color="primary" label="2.37 kha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>4. Bhandara <Chip color="primary" label="994 ha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>5. Gondiya <Chip color="primary" label="932 ha" /></p>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card elevation={3}>
                            <Box sx={{ my: 2, mx: 2 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6" >
                                            Top 5 districts with tree cover gain
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography color="text.secondary" variant="body2">
                                    In Maharashtra, the top 2 regions were responsible for 67% of all tree cover gain between 2001 and 2012. Garhchiroli had the most tree cover gain at 86.3ha compared to an average of 6.13ha.
                                </Typography>
                            </Box>
                            <Divider variant="middle" />
                            <Box sx={{ m: 2 }}>
                                <Typography gutterBottom variant="body1">
                                    District along with gain:
                                </Typography>
                                <Box ml={2} mr={4}>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>1. Garhchiroli <Chip color="primary" label="86 ha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>2. Sindhudurg <Chip color="primary" label="62 ha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>3. Kolhapur <Chip color="primary" label="19 ha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>4. Gondiya <Chip color="primary" label="14 ha" /></p>
                                    <p style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>5. Bhandara <Chip color="primary" label="10 ha" /></p>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card elevation={3}>
                            <iframe width="740" height="460" frameborder="0" title="8" src="https://www.globalforestwatch.org/embed/widget/treeLossPlantations/country/IND/20"></iframe>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card elevation={3}>
                            <iframe width="740" height="460" frameborder="0" title="9" src="https://www.globalforestwatch.org/embed/widget/treeLossPct/country/IND/20"></iframe>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card elevation={3}>
                            <iframe width="740" height="460" frameborder="0" title="10" src="https://www.globalforestwatch.org/embed/widget/treeLoss/country/IND/20"></iframe>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default Facts;