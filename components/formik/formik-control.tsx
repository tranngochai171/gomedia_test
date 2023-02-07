import Input from './input';
import Phone from './phone';

export const CONTROL_TYPE = {
  INPUT: 'input',
  PHONE: 'phone',
};

const FormikControl = (props: any) => {
  const { control, ...rest } = props;
  switch (control) {
    case CONTROL_TYPE.INPUT:
      return <Input {...rest} />;
    case CONTROL_TYPE.PHONE:
      return <Phone {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
