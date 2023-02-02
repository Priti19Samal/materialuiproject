import React from 'react';
import { Avatar, Stack, AvatarGroup } from '@mui/material';

export const MUIAvatar = () => {
    return (
        <Stack spacing={4}>
           <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'secondary.light'}}>CK</Avatar>
           </Stack>
            <Stack direction='row' spacing={1}>
                <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
                <Avatar sx={{ bgcolor: 'secondary.light' }}>CK</Avatar>
                <Avatar src='https://randomuser.me/api/portraits/women/91.jpg'></Avatar>
                <Avatar src='https://randomuser.me/api/portraits/men/81.jpg'></Avatar>
            </Stack>
            <Stack direction='row' spacing={1}>
                <AvatarGroup max={3}>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
                    <Avatar sx={{ bgcolor: 'secondary.light' }}>CK</Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/women/91.jpg'></Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/men/81.jpg'></Avatar>
                </AvatarGroup>
            </Stack>
            <Stack direction='row' spacing={1}>
                <Avatar sx={{ bgcolor: 'primary.light',width:58,height:58 }}>BW</Avatar>
                <Avatar sx={{ bgcolor: 'secondary.light',width:58,height:58 }}>CK</Avatar>
                <Avatar variant='square' sx={{ bgcolor: 'primary.light',width:58,height:58 }}>BW</Avatar>
                <Avatar variant='square' sx={{ bgcolor: 'secondary.light',width:58,height:58 }}>CK</Avatar>
                <Avatar variant='rounded' sx={{ bgcolor: 'primary.light',width:58,height:58 }}>BW</Avatar>
                <Avatar variant='rounded' sx={{ bgcolor: 'secondary.light',width:58,height:58 }}>CK</Avatar>
            </Stack>
        </Stack>
    )
}
