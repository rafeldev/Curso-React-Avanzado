import React, { useEffect, useRef, useState } from 'react';
import { Link } from '@reach/router'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../../components/FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'


const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'


export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
    const [show, ref] = useNearScreen(); 
    //vamos a obtener la id de cada like
    const key = `like-${id}`
    //vamos a tener a liked como una forma de guardar el like y el setliked como una forma de actualizarlo
    const [liked, setLiked] = useLocalStorage(key, false)
 


    return ( 
        //nos va a permitir capturar el elemento del DOM
        <Article ref={ref}>
            {
                show && <>
                <Link to={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img src={src} />
                    </ImgWrapper>
                </Link>
                {/* este metodo setliked es el que actualizara el estado  */}
                <ToggleLikeMutation >
                    {
                        (toggleLike) => {
                            const handleFavClick = () => {
                                !liked && toggleLike({ variables: {
                                    input: { id }
                                } })
                                setLiked(!liked)
                            }
                            return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                        }
                    }
                </ToggleLikeMutation>
                </>
            }
            
        </Article>
    )
}