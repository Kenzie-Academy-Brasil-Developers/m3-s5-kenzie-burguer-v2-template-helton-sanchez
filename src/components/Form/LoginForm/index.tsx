import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginFormValue} from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';


const LoginForm = () => {  

  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormValue>();
  const { userLogin } = useContext(UserContext);

  const renderSubmit: SubmitHandler<ILoginFormValue> = (data) => {
    userLogin(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(renderSubmit)} >
      <Input label='Email' register={register('email')} type='text' error={errors.email} />
      <Input label='Senha' register={register('password')} type='password' error={errors.password} />
      <StyledButton $buttonSize='default' $buttonStyle='green'>Entrar</StyledButton>
    </StyledForm>
  )

};

export default LoginForm;
