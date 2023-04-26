import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterFormValue } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';



const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("Campo e-mail é obrigatório."),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo um caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
      .required("Campo senha é obrigatório"),
      confirmationPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais")
      .required("Campo confirmar senha é obrigatório"),

  })
  .required();


const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterFormValue>({resolver:yupResolver(schema)});

  const { registerUser } = useContext(UserContext);

  const renderSubmit: SubmitHandler<IRegisterFormValue> = (data) => {
    registerUser(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(renderSubmit)}>

      <Input label='Nome' register={register('name')} type='text' error={errors.name} />

      <Input label='E-mail' register={register("email")} type='email' error={errors.email} />

      <Input label='Crie uma Senha' register={register('password')} type='password' error={errors.password} />

      <Input label='Confirme sua Senha' register={register("confirmationPassword")} type='password' error={errors.confirmationPassword} />

      <StyledButton $buttonSize='default' $buttonStyle='gray'> Cadastrar</StyledButton>

    </StyledForm>
  )


};

export default RegisterForm;