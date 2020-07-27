import { useState } from 'react';

export function useLocalStorage(key, initialValue){
    //cambiamos los nombres de los estados
    const [storedValue, setValue] = useState(() => {
        //lo vamos a recuperar del local storage
        try{
            const item = window.localStorage.getItem(key)
            //y retornamos un item que si es diferente de null entonces vamos a parsear el JSON
            return item !== null 
            ? JSON.parse(item)
            : initialValue
        }catch(error){
            return initialValue
        }
    })

    const setLocalStorage = value => {
         try{
             //guardamos el valor como un string del JSON
             window.localStorage.setItem(key, JSON.stringify(value))
             //y actualizar el estado local
             setValue(value )
         }catch(error){
             console.log(error)
         }
     }
     //este hooks devuelve 2, cosas el valor que teniamos guardado y una forma de actualizarlo 
     return [storedValue, setLocalStorage]
}