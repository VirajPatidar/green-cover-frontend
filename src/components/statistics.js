import React from 'react';

//MUI
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const Statistics = () => {
    return (
        <Box sx={{mb: 5, pb: 3}}>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#ffe082' }}>
                        <CardContent sx={{ flexGrow: 1, textAlign: "center", pb: 0, mb: 0 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Active Volunteers
                            </Typography>
                            <Typography variant="h2">
                                112
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#b9f6ca' }}>
                        <CardContent sx={{ flexGrow: 1, textAlign: "center", pb: 0, mb: 0 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Trees Planted
                            </Typography>
                            <Typography variant="h2">
                                212
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#b2ebf2' }}>
                        <CardContent sx={{ flexGrow: 1, textAlign: "center", pb: 0, mb: 0 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Green Events
                            </Typography>
                            <Typography variant="h2">
                                21
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#e6ee9c' }}>
                        <CardContent sx={{ flexGrow: 1, textAlign: "center", pb: 0, mb: 0}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Upcoming Events !
                            </Typography>
                            <Typography variant="h2">
                                3
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Statistics;