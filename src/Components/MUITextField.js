import React, { useState } from 'react'
import { InputAdornment, Stack,TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';

export const MUITextField = () => {
    const [value, setValue]=useState();
  return (
   <>
   <Stack spacing={4}>
    <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' value={value} onChange={e=>setValue(e.target.value)} error={!value} helperText={!value?'Required':'Do not share your password'}/>
        <TextField label='Name' variant='filled'/>
        <TextField label='Name' variant='standard'/>
    </Stack>
    <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' size='small' color='secondary'/>
        <TextField label='Name' variant='filled' size='small' color='secondary'/>
        <TextField label='Name' variant='standard' size='small' color='secondary'/>
    </Stack>
    <Stack direction='row' spacing={2}>
        <TextField label='Form Input' required/>
        <TextField label='Password' type='password' helperText='Do not share your password' required disabled/>
        <TextField label='Read Only' InputProps={{readOnly:true}}/>
    </Stack>

    <Stack direction='row' spacing={2}>
        <TextField label='Amount' InputProps={{startAdornment:<InputAdornment position='start'>₹</InputAdornment>}}/>
        <TextField label='Weight' InputProps={{endAdornment:<InputAdornment position='end'>kg</InputAdornment>}} error/>
        <TextField label='Password' type='password' required InputProps={{endAdornment:<InputAdornment position='end'><VisibilityIcon/></InputAdornment>}}/>
      
    </Stack>

  
   </Stack>
   </>
  )
}
