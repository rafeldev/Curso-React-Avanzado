import React from 'react';
import  { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, Title, Error } from './styles'

import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ disabled, error, onSubmit, title }) => {

    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        onSubmit ({ email: email.value, password: password.value })
    }


    return (
        <>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder='email' {...email}/>
                <Input disabled={disabled} placeholder='password' type='password' {...password}/>
                <SubmitButton disabled={disabled} >{title}</SubmitButton>
            </Form>
            {error && <Error>{error}</Error>}
        </>
    );
};

