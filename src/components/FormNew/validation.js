import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'minimo 2 caracteres')
        .required('Campo obrigatório'),
    email: yup
        .string()
        .email('Email inválido')
        .required('Campo obrigatório'),
});

export default schema;