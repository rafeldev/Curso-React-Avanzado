import React from 'react';
import {ListOfCategories} from './components/ListOfCategories';
import {GlobalStyle} from './styles/globalStyles'
import {ListOfPhotoCards} from './container/ListOfPhotoCards'
import  { Logo } from './components/Logo'

export const App = () => (
    <div>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        {/* //le pasamos como parametro el id por el que queremos filtrar */}
        <ListOfPhotoCards categoryId={1} />
    </div>

)

