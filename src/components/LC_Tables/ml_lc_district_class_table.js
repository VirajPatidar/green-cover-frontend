import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { dbd_yby_mh_lc_class } from "../../data/dbd_yby_mh_lc_class";
import { Box } from '@mui/material';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: teal[900],
        },
    },
});

const columns = [
    { field: 'id', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'ID', width: 50 },
    { field: 'year', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Year', width: 130 },
    { field: 'district', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'District', sortable: false, width: 130 },
    { field: '1', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Water', width: 130 },
    { field: '2', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Evergreen needleleaf forest', width: 150 },
    // { field: '3', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Evergreen broadleaf forest', width: 150 },
    { field: '4', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Deciduous needleleaf forest', width: 150 },
    { field: '5', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Deciduous broadleaf forest', width: 150 },
    { field: '6', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Mixed forest', width: 150 },
    { field: '7', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Closed shrublands', width: 150 },
    { field: '8', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Open shrublands', width: 150 },
    { field: '9', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Woody savannas', width: 150 },
    { field: '10', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Savannas', width: 150 },
    { field: '11', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Grasslands', width: 150 },
    { field: '12', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Permanent wetlands', width: 150 },
    { field: '13', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Croplands', width: 150 },
    { field: '14', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Urban and built-up', width: 150 },
    // { field: '15', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Cropland/natural vegetation mosaic', width: 150 },
    { field: '16', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Snow and ice', width: 150 },
    { field: '17', headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center", headerName: 'Barren or sparsely vegetated', width: 150 },
];

const rows = dbd_yby_mh_lc_class.map((item, id) => Object.assign(item, { id }));
// const rows = dbd_yby_mh_lc_class;

export default function MHLCClassDistrictTable() {

    const [pageSize, setPageSize] = React.useState(10);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                height: 550,
                width: '100%',
                '& .super-app-theme--header': {
                    backgroundColor: '#004d40',
                    color: '#ffffff',
                    my: 2,
                    py: 2
                },
                '& .cold1': {
                    backgroundColor: '#e3f2fd',
                },
                '& .cold2': {
                    backgroundColor: '#bbdefb',
                },
                '& .cold3': {
                    backgroundColor: '#90caf9',
                },
                '& .hot1': {
                    backgroundColor: '#ffccbc',
                },
                '& .hot2': {
                    backgroundColor: '#ffab91',
                },
                '& .hot3': {
                    backgroundColor: '#ff8a65',
                },
            }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getCellClassName={(params) => {
                        if (params.field === 'year' || params.field === 'district' || params.field === 'id') {
                            return '';
                        }
                        if (params.value < 15)
                            return 'cold3'
                        else if (params.value >= 15 && params.value < 50)
                            return 'cold2'
                        else if (params.value >= 50 && params.value < 100)
                            return 'cold1'
                        else if (params.value >= 100 && params.value < 500)
                            return 'hot1'
                        else if (params.value >= 500 && params.value < 1000)
                            return 'hot2'
                        else if (params.value >= 1000)
                            return 'hot3'
                    }}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[10, 20, 30, 50, 100]}
                    pagination
                    components={{ Toolbar: GridToolbar }}
                    sx={{
                        boxShadow: 2,
                        border: 2,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}
                />
            </Box>
        </ThemeProvider>
    );
}
