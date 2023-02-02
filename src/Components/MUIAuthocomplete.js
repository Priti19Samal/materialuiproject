import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';


const skills = ['Html', 'css', 'js', 'jq']
export const MUIAuthocomplete = () => {
    const [value, setValue] = useState(null);
   
    console.log(value);
    return (
        <>
            <Stack spacing={2}>
                <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label='Skills' />}
                value={value} onChange={(e,newV)=>setValue(newV)} freeSolo/>
            </Stack>
        </>
    )
}
