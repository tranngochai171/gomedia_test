import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import formatUtil from 'utils/format.util';

function valuetext(value: number) {
  return formatUtil.formatCurrency(value);
}

type RangeSliderProps = {
  minWidth?: number;
  label: string;
  minValue: number;
  maxValue: number;
  min: number;
  max: number;
  onChange: (newValue: number | number[]) => void;
  marks?: { value: number; label: string }[];
  step?: number;
};

// const useDebounceValue = (value: any, delay = 500) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };

export default function RangeSlider({
  minWidth = 300,
  label,
  minValue,
  maxValue,
  min,
  max,
  onChange,
  marks,
  step = 1,
}: RangeSliderProps) {
  const [value, setValue] = useState<number[]>([minValue, maxValue]);
  // const onChangeValue = useDebounceValue(value);
  // useEffect(() => {
  //   onChange(onChangeValue);
  // }, [onChange, onChangeValue]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  useEffect(() => {
    setValue([minValue, maxValue]);
  }, [minValue, maxValue]);
  return (
    <Box sx={{ minWidth }}>
      <Typography id='input-slider' gutterBottom>
        {label}
      </Typography>
      <Slider
        getAriaLabel={() => label}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        onChangeCommitted={() => onChange(value)}
        valueLabelDisplay='auto'
        valueLabelFormat={valuetext}
        marks={marks}
        step={step}
      />
    </Box>
  );
}
