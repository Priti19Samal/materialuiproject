import React from 'react';
import { Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useState } from 'react';

export const MUISelect = () => {
    const [country, setCountry] = useState([])
    console.log(country);
    const handleChange = (e) => {
        setCountry(e.target.value)
    }

    return (
        <>
            <Box width='250px'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select a Country</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" label='Select a Country' value={country} onChange={handleChange} multiple>
                        <MenuItem value='IN'>India</MenuItem>
                        <MenuItem value='US'>USA</MenuItem>
                        <MenuItem value='Au'>Australia</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}
