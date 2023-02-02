import React, { useState } from 'react';
import { Box, Stack, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup,FormHelperText } from '@mui/material';
// import {BookmarkBorderIcon,BookmarkIcon} from '@mui/icons-material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const MUICheckbox = () => {
    const [acceptTnc, setAcceptTnc] = useState(false);
    const [skills, setSkills] = useState([]);
    const handleChange = (e) => {
        setAcceptTnc(e.target.checked)
    }
    const handleSkillChange = (e) => {
        const index = skills.indexOf(e.target.value)
        if (index == -1) {
            setSkills( [...skills, e.target.value] )
        }
        else{
            setSkills(skills.filter(skill=>skill!==e.target.value))
        }
    }
    console.log(skills);
    // console.log(acceptTnc);
    return (
        <>
            <Box>
                <Stack spacing={4}>
                    <Stack spacing={4} direction='row'>
                        <FormControlLabel label='I accept terms and condition' control={<Checkbox defaultChecked />} />
                        <FormControlLabel disabled label='I accept terms and condition' control={<Checkbox />} />
                    </Stack>
                    <Stack spacing={4} direction='row'>
                        <FormControlLabel label='I accept terms and condition' control={<Checkbox />} onChange={handleChange} />
                    </Stack>
                </Stack>

                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={acceptTnc} onChange={handleChange} />

                <Box>
                    <FormControl error>
                        <FormLabel>Skills</FormLabel>
                        <FormGroup row>
                            <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange} size='small'  color='secondary' />} />

                            <FormControlLabel label='CSS' control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange} />} />

                            <FormControlLabel label='JavaScript' control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkillChange} />} />

                        </FormGroup>
                        <FormHelperText>Error</FormHelperText>
                    </FormControl>
                </Box>
            </Box>

        </>
    )
}
