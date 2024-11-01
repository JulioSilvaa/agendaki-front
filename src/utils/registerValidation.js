import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório."),
  cpf: Yup.string()
    .required("CPF é obrigatório.")
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}$/, "Formato de CPF inválido."),
  email: Yup.string()
    .required("E-mail é obrigatório.")
    .email("E-mail inválido."),
  password: Yup.string()
    .required("Senha é obrigatória.")
    .min(6, "A senha deve ter pelo menos 6 caracteres."),
  "nome-contato": Yup.string().required("Nome do contato é obrigatório."),
  telefone: Yup.string()
  .required("Telefone é obrigatório.")
  .matches(/^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/, "Formato de telefone inválido."),
  cep: Yup.string()
    .required("CEP é obrigatório.")
    .matches(/^\d{5}-\d{3}|\d{8}$/, "Formato de CEP inválido."),
  endereco: Yup.string().required("Endereço é obrigatório."),
  bairro: Yup.string().required("Bairro é obrigatório."),
  cidade: Yup.string().required("Cidade é obrigatória."),
  uf: Yup.string()
    .required("Estado é obrigatório.")
    .matches(/^[A-Za-z]{2}$/, "O estado deve ser composto por duas letras."),
  diferenciais: Yup.string().required("Estado é obrigatório."),
  descricao:Yup.string().required("Estado é obrigatório.")
});
