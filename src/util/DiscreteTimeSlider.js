import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

// https://github.com/mui-org/material-ui/blob/v5.4.0/docs/src/pages/components/slider/CustomizedSlider.js
const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const noop = () => {};

const defaultProps = {
  defaultValue: 0,
  valueLabelDisplay: "on",
  valueLabelFormat: noop,
  step: 1,
  min: 0, // minIndex
  max: 100, // maxIndex
  onChange: noop
};

function DiscreteTimeSlider(props) {
  return (
    <Box sx={{ ...props.osx }} >
      <Box sx={{ ...props.isx }}>
        <PrettoSlider
          key={props.key}
          defaultValue={props.defaultValue}
          // value={props.value}
          valueLabelDisplay={props.valueLabelDisplay}
          // valueLabelFormat={props.valueLabelFormat}
          step={props.step}
          min={props.min}
          max={props.max}
          onChange={props.onChange}
          aria-label="pretto slider"
        />
      </Box>
    </Box>

  );
}


DiscreteTimeSlider.defaultProps = defaultProps;

export default DiscreteTimeSlider;