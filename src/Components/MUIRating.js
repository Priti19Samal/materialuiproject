import React, { useState } from 'react';
import { Rating, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MUIRating = () => {
    // const [value, setValue] = useState(null);
    const [value, setValue] = useState(2);
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    console.log({ value });
    return (
        <>
            <Stack spacing={2}>
                {/* <Rating value={value} onChange={handleChange}></Rating> */}
                {/* <Rating value={value} onChange={handleChange} precision={0.5}></Rating> */}
                {/* <Rating value={value} onChange={handleChange} precision={0.5} size='large' icon={<FavoriteIcon fontSize='inherit' color='error'/>} emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>} /> */}
                {/* <Rating value={value} onChange={handleChange} precision={0.5} size='large' icon={<FavoriteIcon fontSize='inherit' color='error'/>} emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>} readOnly /> */}
                <Rating value={value} onChange={handleChange} precision={0.5} size='large' icon={<FavoriteIcon fontSize='inherit' color='error'/>} emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>} highlightSelectedOnly />
            </Stack>
        </>
    )
}


