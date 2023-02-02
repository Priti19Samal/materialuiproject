import React from 'react';
import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FormatBold } from '@mui/icons-material';
import { FormatItalic } from '@mui/icons-material';
import { FormatUnderlined } from '@mui/icons-material';
import { useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const initialValue = () => {
    return 0
}

export const MUIButtons = () => {
    // const [count, setCount] = useState(initialValue);
    const [state, setState] = useState({ count: 0, theme: 'blue' });
    const count = state.count;
    const theme = state.theme;
    // const Decrement = () => {
    //     if(count>=1){
    //         setCount(preCount => preCount - 1)
    //     }
    // }
    const Decrement = () => {
        if (count >= 1) {
            setState(prevState => {
                return ({ count: prevState.count - 1 })
            })
        }
    }
    const Increment = () => {
        setState(prevState => {
            return ({ count: prevState.count + 1 })
        })
    }
    // const Increment = () => {
    //     // setCount(preCount => preCount + 1)
    // }
    return (
        <>
            <Stack spacing={4}>
                <Stack spacing={2} direction='row'>
                    <Button variant='text' href='https://google.com'>Click</Button>
                    <Button variant='contained'>Click</Button>
                    <Button variant='outlined'>Click</Button>
                    <Button variant='outlined' disabled>Click</Button>
                </Stack>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary'>Primary</Button>
                    <Button variant='contained' color='secondary'>Secondary</Button>
                    <Button variant='contained' color='warning'>Warning</Button>
                    <Button variant='contained' color='error'>Error</Button>
                    <Button variant='contained' color='info'>Info</Button>
                    <Button variant='contained' color='success'>Success</Button>
                </Stack>
                <Stack display='block' spacing={2} direction='row'>
                    <Button variant='contained' size='small' color='primary'>Primary</Button>
                    <Button variant='contained' size='medium' color='secondary'>Secondary</Button>
                    <Button variant='contained' size='large' color='warning'>Warning</Button>
                </Stack>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={() => alert('Shimba')} >Send</Button>
                    <Button variant='contained' endIcon={<SendIcon />} disableElevation >Send</Button>
                    <IconButton aria-label='send' color='primary' size='small'>
                        <SendIcon />
                    </IconButton>
                </Stack>
                <Stack direction='row'>
                    <ButtonGroup aria-label='alignment button group' variant='text' orientation='vertical' size='small' color='secondary'>
                        <Button onClick={() => alert('Left Clicked')}>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>
                <Stack direction='row'>
                    <ToggleButtonGroup aria-label='text formatting' >
                        <ToggleButton value='bold' aria-label='bold'><FormatBold /></ToggleButton>
                        <ToggleButton value='italic' aria-label='italic'><FormatItalic /></ToggleButton>
                        <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlined /></ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <Stack spacing={2} direction='row'>
                    <IconButton onClick={Decrement} variant='contained' color='info' size='large'>
                        <ArrowCircleLeftIcon />
                    </IconButton>
                    <Button variant='text' color='info' size='large' disableElevation disableTouchRipple disableRipple disableFocusRipple>{count}</Button>
                    <IconButton variant='contained' onClick={Increment} color='info' size='large'>
                        <ArrowCircleRightIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </>
    )
}
