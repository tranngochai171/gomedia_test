import { matchIsValidTel } from 'mui-tel-input';

export const YupValidationTest = {
  IS_VALID_PHONE: {
    NAME: 'is-valid-phone',
    MESSAGE: 'Phone number is not valid',
    TEST: (val: any) => (val ? matchIsValidTel(val) : false),
  },
};
