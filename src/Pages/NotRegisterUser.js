import React, {Fragment} from 'react';
import Context from '../Context'

import { UserForm } from '../components/UserForm';
import  { RegisterMutation }  from '../container/RegisterMutation';
 
export const NotRegisterUser = () => ( 
    <Context.Consumer>
        {
            ({ activateAuth }) => {
                return( 
                    <>
                        <RegisterMutation>
                            {
                                (register) => {
                                    const onSubmit = ({ email, password }) =>{
                                        const input = { email, password }
                                        const variables = { input }
                                        register({ variables }).then(activateAuth)
                                    }
                                    <UserForm title='Registararse' onSubmit={onSubmit} />
                                } 

                            }
                        </RegisterMutation>
                        <UserForm title='Iniciar Sesion' onSubmit={activateAuth} />
                    </>
                )
            }
        }
    </Context.Consumer>
)

