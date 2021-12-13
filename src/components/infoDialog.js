import React from 'react';

//MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DialogContentText, Typography } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: teal[900],
        },
    },
});

export default function InfoDialog(props) {

    return (
        <ThemeProvider theme={theme}>
            <Dialog open={props.open} onClose={props.closeDialog}>
                <DialogTitle>{props.description}</DialogTitle>
                <DialogContent>
                    <Typography variant="h7"><strong>Steps to interpret and interact with the Map:</strong></Typography>
                    <DialogContentText id="alert-dialog-slide-description" sx={{color: "black"}}>
                        <ol>
                            {props.instructions.split('\\n').map((item, key) => {
                                return <li key={key}>{item}</li>
                            })}
                        </ol>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.closeDialog} variant="contained" color="primary">GOT IT</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}
