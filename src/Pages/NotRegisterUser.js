import React, { useContext } from 'react';
import { Context } from '../Context'
import { UserForm } from '../components/UserForm';
import  { RegisterMutation }  from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation'
 
export const NotRegisterUser = () => {
    const { activateAuth } = useContext(Context)

    return( 
        <>
            <RegisterMutation>
                {
                    (register, { data, loading, error }) => {
                        const onSubmit = ({ email, password }) =>{
                            const input = { email, password }
                            const variables = { input }
                            register({ variables }).then(({data}) =>{
                                const {signup} = data
                                activateAuth(signup)
                            })
                        }
                        
                        const errorMsg = error && 'el usuario ya Existe...'

                        return <UserForm disabled={loading} error={errorMsg} title='Registararse' onSubmit={onSubmit} />
                    } 
                }
            </RegisterMutation>

            <LoginMutation>
                {
                    (login, { data, loading, error }) => {
                        const onSubmit = ({ email, password }) =>{
                            const input = { email, password }
                            const variables = { input }
                            login({ variables }).then(({data}) => {
                                const {login} = data
                                activateAuth(login)
                            })
                        }
                        
                        const errorMsg = error && 'la contraseña no es correcta o el usuario no existe'

                        return <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesion' onSubmit={onSubmit} />

                    }
                }
            </LoginMutation>


        </>
    )
}

                

