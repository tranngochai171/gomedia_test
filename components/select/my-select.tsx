import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type MySelectProps = {
  minWidth?: number;
  label: string;
  value: any;
  onChange: (event: SelectChangeEvent) => void;
  options: { value: any; label: string }[];
};

export default function MySelect({
  minWidth = 120,
  label,
  value,
  onChange,
  options = [],
}: MySelectProps) {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  return (
    <Box sx={{ minWidth }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          label={label}
          onChange={onChange}
        >
          {options.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
