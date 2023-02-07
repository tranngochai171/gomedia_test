import { styled, Stack, Typography } from '@mui/material';
import FormikControl, { CONTROL_TYPE } from 'components/formik/formik-control';
import { StyledLoadingButton } from 'components/styled/common-styled';
import { Formik, Form } from 'formik';
import { useSubmitEnquiry } from 'hooks/useLead';
import { YupValidationTest } from 'utils/yup-validation-test.util';
import * as Yup from 'yup';

export const StepContainer = styled(Stack)({
  gap: '1.5rem',
});

export const StepTitle = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: 500,
});

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  mobile_number: Yup.string()
    .required('Required')
    .test(
      YupValidationTest.IS_VALID_PHONE.NAME,
      YupValidationTest.IS_VALID_PHONE.MESSAGE,
      YupValidationTest.IS_VALID_PHONE.TEST,
    ),
  email: Yup.string().email('Not a valid email address').required('Required'),
});

type ValueType = {
  name: string;
  mobile_number: string;
  email: string;
};

const initialValues: ValueType = {
  name: '',
  mobile_number: '',
  email: '',
};

type SubmitEnquiryModalProps = {
  onCloseModal: Function;
};

const SubmitEnquiryModal = ({ onCloseModal }: SubmitEnquiryModalProps) => {
  const { mutate, isLoading } = useSubmitEnquiry();
  const onSubmit = (values: ValueType) => {
    const payload = {
      ...values,
      source: window.location.href,
    };
    mutate(payload, {
      onSettled: () => {
        onCloseModal();
      },
    });
  };
  const formikProps = { initialValues, validationSchema, onSubmit };
  return (
    <Formik {...formikProps}>
      {({ handleSubmit, values, setFieldValue, isValid }) => (
        <Form>
          <StepContainer>
            <StepTitle>Contact Information</StepTitle>
            <FormikControl
              autoCapitalize='none'
              control={CONTROL_TYPE.INPUT}
              name='name'
              label='Full Name'
              maxLength='50'
            />
            <FormikControl
              autoCapitalize='none'
              control={CONTROL_TYPE.INPUT}
              name='email'
              label='Email'
              maxLength='50'
            />
            <FormikControl
              control={CONTROL_TYPE.PHONE}
              name='mobile_number'
              label='Phone Number'
            />
            <StyledLoadingButton
              loading={isLoading}
              variant='contained'
              disabled={!isValid}
              onClick={() => {
                handleSubmit();
              }}
              sx={{ margin: '10px 0 20px 0', width: '100%' }}
            >
              Submit
            </StyledLoadingButton>
          </StepContainer>
        </Form>
      )}
    </Formik>
  );
};

export default SubmitEnquiryModal;
