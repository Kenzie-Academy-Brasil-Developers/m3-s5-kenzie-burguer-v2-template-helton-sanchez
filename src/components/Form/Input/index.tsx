import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';


interface IInput {
  label: string;
  register: UseFormRegisterReturn<string>
  error?: FieldError;
  type: "text" | "email" | "password";
}

const Input = ({ label, register, type, error }: IInput) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} />
    {error && (
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
    )}
  </fieldset>
);

export default Input;
