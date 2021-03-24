import React from 'react';
import Label from './Label';
import Content from './Content';
import Input from './Input';

const Text = ({ label, type, name }) => (
    <Label>
        <Content>{label}</Content>
        <Input type={type} name={name} />
    </Label>
);

const Field = {
    Text,
};

export default Field;