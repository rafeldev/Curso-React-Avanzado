import React, { useEffect, useState, Fragment } from "react";
import { Category } from '../Category';
import { List, Item } from './styles'



function useCategoriesData (){
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchCategories = async () => {
            const response = await fetch('https://petgram-rafeldev-server.rafeldev.vercel.app/categories')
            
            const data = await response.json()
            
            setCategories(data)
            setLoading(false)
        }

        fetchCategories()
    }, [])

    return { categories, loading }
}

const ListOfCategoriesComponent = () => { 

    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)
    

    useEffect(function() {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200 
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    
    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                //otra forma de enseñar la pantalla de carga
                loading
                ? <Item key='loading'><Category /></Item>
                :categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
            }
        </List>
    )

    /* //es una forma de enseñar la pantalla de carga
    if(loading){
        return 'cargando'
    } */

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )

}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)