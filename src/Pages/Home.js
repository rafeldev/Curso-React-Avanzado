import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'


export const Home = ({ id }) => {
    return (
        <>
            <ListOfCategories />
                {/* //le pasamos como parametro el id por el que queremos filtrar */}
            <ListOfPhotoCards categoryId={id} />
        </>
    )
}