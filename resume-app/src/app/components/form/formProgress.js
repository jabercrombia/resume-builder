import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

const formArray = ['contact','portfolio','education','company','skills'];

export default function HorizontalLinearAlternativeLabelStepper(counter) {

let stepNumber = counter.counter;
  return (
    <div className="mb-5">
        <Box sx={{ width: '100%' }}>
        <Stepper activeStep={stepNumber} alternativeLabel>
            {formArray.map((label) => (
            <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper>
        </Box>
    </div>
  );
}