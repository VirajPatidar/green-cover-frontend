import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#004d40",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(task, dataset) {
    return { task, dataset };
}

const rows = [
    createData('Estimating Green Cover using Vegetation Indexes (Global) ', 'USGS Landsat 8 Level 2 Collection 2 Tier 1'),
    createData('Timelapse for Normalized Difference Vegetation Index (NDVI) (Global)', 'USGS Landsat 8 Level 2 Collection 2 Tier 1, USGS Landsat 5 Level 2 Collection 2 Tier 1'),
    createData('Time series graphical analysis representing Vegetation Indexes (NDVI & EVI) of Maharashtra', 'MOD13Q1.006 Terra Vegetation Indices 16-Day Global 250m '),
    createData('Landcover Analysis of Maharashtra ', 'USGS Landsat 8 Level 2 Collection 2 Tier 1, MCD12Q1.006 MODIS Land Cover Type Yearly Global 500m'),
    createData('Analysing Air Quality of Maharashtra ', 'Sentinel-5P NRTI AER AI: Near Real-Time UV Aerosol Index, Sentinel-5P NRTI CO: Near Real-Time Carbon Monoxide, Sentinel-5P NRTI NO2: Near Real-Time Nitrogen Dioxide, Sentinel-5P NRTI HCHO: Near Real-Time Formaldehyde'),
];


export default function HomeTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">TASK / FEATURE</StyledTableCell>
                        <StyledTableCell align="left">DATASET</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="left">{row.task}</StyledTableCell>
                            <StyledTableCell align="left">{row.dataset}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
