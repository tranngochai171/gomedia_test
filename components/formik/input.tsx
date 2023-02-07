import React from 'react';
import { styled, TextField, InputAdornment } from '@mui/material';
import { Field } from 'formik';
import { themes } from '../../theme';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const StyledField = styled(TextField)({
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: themes.light.colorBlack,
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: `1px solid ${themes.light.borderColor}`,
      borderRadius: '4px',
    },
    '&.Mui-focused fieldset': {
      borderColor: themes.light.colorMaximumBlueGreen,
    },
  },
});

const Input = (props: any) => {
  const {
    name,
    label,
    maxLength,
    displayCheck,
    skipShowError,
    ...rest
  } = props;
  return (
    <Field name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => {
        return (
          <StyledField
            fullWidth
            {...field}
            label={label}
            inputProps={{
              onBlur: form.handleBlur,
              maxLength,
            }}
            error={!skipShowError && meta.error}
            helperText={!skipShowError && meta.touched && meta.error}
            InputProps={{
              endAdornment:
                !!displayCheck && meta.touched && !meta.error ? (
                  <InputAdornment position='end'>
                    <CheckCircleRoundedIcon
                      style={{ color: themes.light.colorIrishGreen }}
                    />
                  </InputAdornment>
                ) : null,
            }}
            {...rest}
          />
        );
      }}
    </Field>
  );
};

export default React.memo(Input);
