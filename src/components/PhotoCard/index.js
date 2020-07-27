import React, { useEffect, useRef, useState } from 'react';
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';


const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'


export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
    const [show, ref] = useNearScreen(); 
    //vamos a obtener la id de cada like
    const key = `like-${id}`
    //vamos a tener a liked como una forma de guardar el like y el setliked como una forma de actualizarlo
    const [liked, setLiked] = useLocalStorage(key, false)
 

    const Icon = liked ? MdFavorite : MdFavoriteBorder;
    return ( 
        //nos va a permitir capturar el elemento del DOM
        <Article ref={ref}>
            {
                show && <>
                <a href={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img src={src} />
                    </ImgWrapper>
                </a>
                {/* este metodo setliked es el que actualizara el estado  */}
                <Button onClick={() => setLiked(!liked)}>
                    <Icon size='32px' /> {likes} likes!
                </Button>
                </>
            }
            
        </Article>
    )
}