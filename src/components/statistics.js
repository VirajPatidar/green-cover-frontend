import React, { useState, useEffect } from 'react';
import axios from 'axios';

//MUI
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const Statistics = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/statistics`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setData(res.data);

            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    return (
        <Box sx={{ mb: 5, pb: 3 }}>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#ffe082' }}>
                        <CardContent sx={{ flexGrow: 1, textAlign: "center", pb: 0, mb: 0 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Active Volunteers
                            </Typography>
                            <Typography variant="h2">
                                {data && data.volunteers}
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
                                {data && data.planted}
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
                                {data && data.total_events}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#e6ee9c' }}>
                        <CardContent sx={{ flexGrow: 1, textAlign: "center", pb: 0, mb: 0 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Upcoming Events !
                            </Typography>
                            <Typography variant="h2">
                                {data && data.upcoming_events}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Statistics;