import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import Form from '../Form';
import Field from '../Field'
import Button from '../Button';
import schema from './validation';

const FormNew = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const newUser = (user) => {
        console.log(user)
    };

    return (
        <Form onSubmit={handleSubmit(newUser)}>
            <Field.Text label="Nome" name="name" type="text" register={register} />
            {errors.name?.message}
            {/* {errors.name?.type} */}
            <Field.Text label="Email" name="email" type="email" register={register} />
            {errors.email?.message}
            <Button>Enviar</Button>
        </Form>
    );
};

export default FormNew;