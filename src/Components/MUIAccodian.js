import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const MUIAccodian = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accodion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus voluptas error aliquid est natus, cupiditate et expedita debitis hic soluta, impedit nihil veritatis accusamus ducimus voluptatum. Sapiente, consequatur deleniti?</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}> 
                <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accodion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus voluptas error aliquid est natus, cupiditate et expedita debitis hic soluta, impedit nihil veritatis accusamus ducimus voluptatum. Sapiente, consequatur deleniti?</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accodion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus voluptas error aliquid est natus, cupiditate et expedita debitis hic soluta, impedit nihil veritatis accusamus ducimus voluptatum. Sapiente, consequatur deleniti?</Typography>
                </AccordionDetails>
            </Accordion>

        </>
    )
}
