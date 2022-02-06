import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { dbd_yby_mh_lc_class } from "../../data/dbd_yby_mh_lc_class";


const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'year', headerName: 'Year', width: 130 },
    { field: 'district', headerName: 'District', sortable: false, width: 130 },
    { field: '1', headerName: 'Water', width: 130 },
    { field: '2', headerName: 'Evergreen needleleaf forest', width: 130 },
    { field: '3', headerName: 'Evergreen broadleaf forest', width: 130 },
    { field: '4', headerName: 'Deciduous needleleaf forest', width: 130 },
    { field: '5', headerName: 'Deciduous broadleaf forest', width: 130 },
    { field: '6', headerName: 'Mixed forest', width: 130 },
    { field: '7', headerName: 'Closed shrublands', width: 130 },
    { field: '8', headerName: 'Open shrublands', width: 130 },
    { field: '9', headerName: 'Woody savannas', width: 130 },
    { field: '10', headerName: 'Savannas', width: 130 },
    { field: '11', headerName: 'Grasslands', width: 130 },
    { field: '12', headerName: 'Permanent wetlands', width: 130 },
    { field: '13', headerName: 'Croplands', width: 130 },
    { field: '14', headerName: 'Urban and built-up', width: 130 },
    { field: '15', headerName: 'Cropland/natural vegetation mosaic', width: 130 },
    { field: '16', headerName: 'Snow and ice', width: 130 },
    { field: '17', headerName: 'Barren or sparsely vegetated', width: 130 },
];

const rows = dbd_yby_mh_lc_class.map((item, id) => Object.assign(item, { id }));
console.log(rows);
// const rows = dbd_yby_mh_lc_class;

export default function MHLCClassDistrictTable() {

    const [pageSize, setPageSize] = React.useState(10);

    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 20, 30, 50, 100]}
                pagination
                checkboxSelection
                components={{ Toolbar: GridToolbar }}
            />
        </div>
    );
}
