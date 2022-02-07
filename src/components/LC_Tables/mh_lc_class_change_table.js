import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { mh_lc_class } from "../../data/mh_lc_class";

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

var rows = []
function createData(data) {
    // eslint-disable-next-line
    for (const [year, y_data] of Object.entries(data)) {
        if (year !== 2001) {
            var lc_area_change = []
            // eslint-disable-next-line
            for (const [classifi, c_value] of Object.entries(data[year])) {
                var val = data[year][classifi].area_changed
                lc_area_change.push(val * -1);
            }
            rows.push({ ...lc_area_change });
        }
    }
}

createData(mh_lc_class)


export default function MHLCClassChangeTable() {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 500, justifyContent: "center" }}>
            <Table size="small" stickyHeader aria-label="customized table" >
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">YEAR</StyledTableCell>
                        <StyledTableCell align="left">Evergreen needleleaf forest</StyledTableCell>
                        <StyledTableCell align="left">Evergreen broadleaf forest</StyledTableCell>
                        <StyledTableCell align="left">Deciduous broadleaf forest</StyledTableCell>
                        <StyledTableCell align="left">Mixed forest</StyledTableCell>
                        <StyledTableCell align="left">Closed shrublands</StyledTableCell>
                        <StyledTableCell align="left">Open shrublands</StyledTableCell>
                        <StyledTableCell align="left">Woody savannas</StyledTableCell>
                        <StyledTableCell align="left">Savannas</StyledTableCell>
                        <StyledTableCell align="left">Grasslands</StyledTableCell>
                        <StyledTableCell align="left">Permanent wetlands</StyledTableCell>
                        <StyledTableCell align="left">Croplands</StyledTableCell>
                        <StyledTableCell align="left">Urban and built-up</StyledTableCell>
                        <StyledTableCell align="left">Cropland/natural vegetation mosaic</StyledTableCell>
                        <StyledTableCell align="left">Barren or sparsely vegetated</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length > 0 && rows.map((row, key) => (
                        <StyledTableRow key={key}>
                            <StyledTableCell align="left"><strong>{2002 + key}</strong></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[1]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[2]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[4]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[5]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[6]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[7]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[8]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[9]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[10]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[11]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[12]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[13]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[14]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                            <StyledTableCell align="left">{parseFloat(row[16]).toFixed(4)}&nbsp;km<sup>2</sup></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
