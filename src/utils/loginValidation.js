
//Regex para o numero de telefone.
export const telephoneNumber =
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;

//Reges para validação de senha no cadastro e login
export const strongPassword = /^.{6,}$/;