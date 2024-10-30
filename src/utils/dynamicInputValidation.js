import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  contatos: yup.array().of(
    yup.object().shape({
      tipo: yup.string().required('Tipo de contato é obrigatório'),
    })
  ).required('A lista de contatos é obrigatória')
});