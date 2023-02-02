import React, { useState } from 'react';
import { Box, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, FormHelperText } from '@mui/material';



export const MUIRadio = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    console.log(value);
    return (
        <>
            <Box>
                <FormControl error>
                    <FormLabel id='job-experience'>
                        Years of experience
                    </FormLabel>
                    <RadioGroup aria-labelledby='job-experience' value={value} onChange={handleChange}>
                        <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                        <FormControlLabel control={<Radio />} label='2-4' value='2-4' />
                        <FormControlLabel control={<Radio />} label='4-6' value='4-6' />
                        <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
                    </RadioGroup>
                    <FormHelperText>Invalid</FormHelperText>
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <FormLabel id='job-experience'>
                        Years of experience
                    </FormLabel>
                    <RadioGroup row aria-labelledby='job-experience'>
                        <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                        <FormControlLabel control={<Radio />} label='2-4' value='2-4' />
                        <FormControlLabel control={<Radio />} label='4-6' value='4-6' />
                        <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    )
}
