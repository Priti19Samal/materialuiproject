import React from 'react';
import { Card, Box, CardContent, Typography,CardActions,Button,CardMedia } from '@mui/material';

export const MUICard = () => {
    return (
        <>
            <Box width='300px'>
                <Card>
                    <CardMedia component='img' height='250' image='https://source.unsplash.com/random' alt='Image'>

                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>Pritishree</Typography>
                        <Typography variant='body2' color='text.secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste fugiat  </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}
