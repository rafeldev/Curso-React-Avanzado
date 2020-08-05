import React, { useEffect, useRef, useState } from 'react';
import { Link } from '@reach/router'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../../components/FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import PropTypes from 'prop-types'


const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'


export const PhotoCard = ({id, liked, likes = 0, src = DEFAULT_IMAGE}) => {
    const [show, ref] = useNearScreen();

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
                                toggleLike({ variables: {
                                    input: { id }
                                } })
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

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: function (props, propName, componentName) {
        const propValue = props[propName]

        if(propValue === undefined){
            return new Error(`${propName} value must be definded`)
        }
        if(propValue < 0) {
            return new Error(`${propName} value must be grater than 0`)
        }
    }
}