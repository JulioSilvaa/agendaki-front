import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  pessoa: Yup.string().required("Tipo de pessoa é obrigatório."),
  nome: Yup.string().required("Nome é obrigatório."),
  cpf: Yup.string()
    .required("CPF é obrigatório.")
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato de CPF inválido."),
  email: Yup.string()
    .required("E-mail é obrigatório.")
    .email("E-mail inválido."),
  senha: Yup.string()
    .required("Senha é obrigatória.")
    .min(6, "A senha deve ter pelo menos 6 caracteres."),
  "nome-contato": Yup.string().required("Nome do contato é obrigatório."),
  cargo: Yup.string().required("Cargo é obrigatório."),
  cep: Yup.string()
    .required("CEP é obrigatório.")
    .matches(/^\d{5}-\d{3}$/, "Formato de CEP inválido."),
  endereco: Yup.string().required("Endereço é obrigatório."),
  bairro: Yup.string().required("Bairro é obrigatório."),
  cidade: Yup.string().required("Cidade é obrigatória."),
  estado: Yup.string().required("Estado é obrigatório."),
});