import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'


const HomePage = ({ id }) => {
    return (
        <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos de animales bonitos'>
            <ListOfCategories />
                {/* //le pasamos como parametro el id por el que queremos filtrar */}
            <ListOfPhotoCards categoryId={id} />
        </Layout>
    )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
})