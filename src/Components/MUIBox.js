import React from 'react';
import { Box, Divider, Grid,Paper } from '@mui/material';
import { Stack } from '@mui/system';

export const MUIBox = () => {
    return (
        <Paper sx={{padding:'32px'}} elevation={24}>
            <Stack sx={{ border: '1px solid black' }} direction='row-reverse' spacing={25} divider={<Divider orientation='vertical' flexItem />}>
                <Box sx={{
                    width: '250px', height: '250px', backgroundColor: 'pink', color: 'white', padding: '18px', '&:hover': {
                        backgroundColor: 'red'
                    },
                }}>Pritishree Samal</Box>
                <Box display='flex' height='250px' width='250px' bgcolor='success.light' p={2}>Shimba</Box>
            </Stack>
            <hr />
            <Grid container rowSpacing={4} columnSpacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' p={2}>Shimba</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' p={2}>Shimba</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' p={2}>Shimba</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor='primary.light' p={2}>Shimba</Box>
                </Grid>
            </Grid>
        </Paper>
    )
}
