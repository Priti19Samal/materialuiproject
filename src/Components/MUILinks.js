import React from 'react';
import { Link, Typography } from '@mui/material';

export const MUILinks = () => {
    return (
        <>
            <Link href='#' color='secondary' underline='none' variant='body2'>Link</Link>&nbsp;&nbsp;&nbsp;
            <Link href='#' color='secondary' underline='hover'>Link</Link>
            <Typography variant='h6'>
                <Link>Link</Link>
            </Typography>
        </>
    )
}
