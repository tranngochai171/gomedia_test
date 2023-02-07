import React from 'react';
import { styled, InputAdornment } from '@mui/material';
import { Field } from 'formik';
import { themes } from '../../theme';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { MuiTelInput } from 'mui-tel-input';

export const StyledPhoneInput = styled(MuiTelInput)({
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

const Phone = (props: any) => {
  const { name, label, maxLength, displayCheck, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form, meta }: { field: any; form: any; meta: any }) => {
        return (
          <StyledPhoneInput
            fullWidth
            {...field}
            label={label}
            inputProps={{
              onBlur: form.handleBlur,
              maxLength,
            }}
            onChange={(value: any, info: any) =>
              form.setFieldValue(name, value)
            }
            defaultCountry='VN'
            error={Boolean(meta.error)}
            helperText={meta.touched && meta.error}
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

export default Phone;
