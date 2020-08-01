import React from 'react';
import  { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {

    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        onSubmit ({ email, password })
    }


    return (
        <>
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder='email' type='email' {...email}/>
                <Input placeholder='password' type='password' {...password}/>
                <Button>{title}</Button>
            </Form>
        </>
    );
};

