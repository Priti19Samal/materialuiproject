import React from 'react'
// import { Typography } from '@mui/material/styles/createTypography'
// import Typography from '@mui/material/Typography'
import { Typography } from '@mui/material'

export const MUITypography = () => {
    return (
        <>
            <div className='d-flex flex-column align-items-center mt-2'>
                <Typography variant="h1">
                    h1 Heading
                </Typography>
                <Typography variant="h2">
                    h2 Heading
                </Typography>
                <Typography variant="h3">
                    h3 Heading
                </Typography>
                <Typography variant="h4" component='h1' gutterBottom>
                    h4 Heading
                </Typography>
                <Typography variant="h5">
                    h5 Heading
                </Typography>
                <Typography variant="h6">
                    h6 Heading
                </Typography>

                
                <Typography variant="subtitle1">
                    Subtitle-1
                </Typography>
                <Typography variant="subtitle2">
                    subtitle-2
                </Typography>


                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores repellat. Totam accusamus exercitationem a rem reprehenderit consectetur labore. Velit dolores, molestias doloremque ea laborum necessitatibus ad explicabo reprehenderit odio.
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores repellat. Totam accusamus exercitationem a rem reprehenderit consectetur labore. Velit dolores, molestias doloremque ea laborum necessitatibus ad explicabo reprehenderit odio.
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus unde, quae amet impedit autem excepturi corrupti blanditiis molestiae doloremque? Aliquam architecto consequuntur temporibus et labore sunt ipsa dolores, repellat unde.
                </Typography>
            </div>

        </>
    )
}
